// netlify/functions/stripe-webhook.js
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const fetch = require("node-fetch");

exports.handler = async (event) => {
  const sig = event.headers["stripe-signature"];

  let stripeEvent;
  try {
    stripeEvent = stripe.webhooks.constructEvent(
      event.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return {
      statusCode: 400,
      body: `Webhook signature verification failed: ${err.message}`,
    };
  }

  if (stripeEvent.type === "payment_intent.succeeded") {
    const pi = stripeEvent.data.object;
    const reservationId = pi.metadata?.reservationId;
    const org = pi.metadata?.org || process.env.ALFIO_ORG;
    const eventShortName =
      pi.metadata?.eventShortName || process.env.ALFIO_EVENT_SHORT_NAME;

    if (!reservationId) {
      return {
        statusCode: 200,
        body: "No reservationId in metadata; nothing to do.",
      };
    }

    try {
      // Confirm payment & issue tickets in alf.io
      const confirmRes = await fetch(
        `${process.env.ALFIO_BASE_URL}/api/public/${org}/events/${eventShortName}/reservations/${reservationId}/confirm-payment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-API-KEY": process.env.ALFIO_API_KEY,
          },
          body: JSON.stringify({
            provider: "stripe",
            paymentReference: pi.id,
            amount: pi.amount_received / 100.0,
            currency: pi.currency,
            status: "SUCCEEDED",
          }),
        }
      );

      if (!confirmRes.ok) {
        const txt = await confirmRes.text();
        // Consider alerting/queue retry here
        return { statusCode: 500, body: `alf.io confirm failed: ${txt}` };
      }

      // Optionally fetch issued tickets/details
      // const confirmation = await confirmRes.json();

      return { statusCode: 200, body: "OK" };
    } catch (e) {
      return { statusCode: 500, body: `alf.io error: ${e.message}` };
    }
  }
};
