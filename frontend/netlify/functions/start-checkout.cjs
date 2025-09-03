// netlify/functions/start-checkout.js
const Stripe = require("stripe");
const fetch = require("node-fetch"); // ADD THIS LINE - it was missing!
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event, context) => {
  try {
    // Parse the request body
    const { cart, org, eventShortName, currency, customerInfo } = JSON.parse(event.body);

    // Validate required data
    if (!cart || Object.keys(cart).length === 0) {
      return { statusCode: 400, body: "Cart is required and cannot be empty" };
    }

    // 1) Create reservation in alf.io
    const reservationPayload = {
      items: Object.entries(cart).map(([ticketType, quantity]) => ({
        ticketType,
        quantity,
      })),
    };

    // Add customer info if provided
    if (customerInfo) {
      reservationPayload.contactData = {
        firstName: customerInfo.firstName,
        lastName: customerInfo.lastName,
        email: customerInfo.email,
        phoneNumber: customerInfo.phoneNumber,
      };
    }

    const alfioRes = await fetch(
      `${process.env.ALFIO_BASE_URL}/api/public/${
        org || process.env.ALFIO_ORG
      }/events/${
        eventShortName || process.env.ALFIO_EVENT_SHORT_NAME
      }/reservations`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": process.env.ALFIO_API_KEY,
        },
        body: JSON.stringify(reservationPayload),
      }
    );

    if (!alfioRes.ok) {
      const txt = await alfioRes.text();
      return {
        statusCode: alfioRes.status,
        body: `alf.io reservation failed: ${txt}`,
      };
    }

    const reservation = await alfioRes.json();
    const {
      id: reservationId,
      totalAmount,
      currency: alfCurrency,
    } = reservation;

    // Validate totalAmount
    if (!totalAmount || totalAmount <= 0) {
      return {
        statusCode: 400,
        body: "Invalid total amount from alf.io reservation",
      };
    }

    // Convert to minor units for Stripe (e.g., euro cents)
    const amountMinor = Math.round(totalAmount * 100);

    // 2) Create a PaymentIntent in Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountMinor,
      currency: (alfCurrency || currency || "eur").toLowerCase(),
      metadata: {
        reservationId: reservationId?.toString() || "",
        org: org || process.env.ALFIO_ORG || "",
        eventShortName:
          eventShortName || process.env.ALFIO_EVENT_SHORT_NAME || "",
      },
      automatic_payment_methods: { enabled: true },
    });

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clientSecret: paymentIntent.client_secret,
        paymentIntentId: paymentIntent.id,
        reservationId,
        amount: amountMinor,
        currency: (alfCurrency || currency || "eur").toLowerCase(),
      }),
    };
  } catch (err) {
    console.error("start-checkout error:", err);
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ error: `start-checkout error: ${err.message}` }),
    };
  }
};