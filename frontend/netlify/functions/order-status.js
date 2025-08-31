// netlify/functions/order-status.js
const fetch = require("node-fetch");

exports.handler = async (event) => {
  const { reservationId, org, eventShortName } =
    event.queryStringParameters || {};
  if (!reservationId)
    return { statusCode: 400, body: "reservationId required" };

  try {
    const res = await fetch(
      `${process.env.ALFIO_BASE_URL}/api/public/${
        org || process.env.ALFIO_ORG
      }/events/${
        eventShortName || process.env.ALFIO_EVENT_SHORT_NAME
      }/reservations/${reservationId}`,
      {
        headers: {
          "X-API-KEY": process.env.ALFIO_API_KEY,
        },
      }
    );
    if (!res.ok) {
      const txt = await res.text();
      return { statusCode: res.status, body: txt };
    }

    const data = await res.json();
    // Normalize response for UI consumption
    return {
      statusCode: 200,
      body: JSON.stringify({
        status: data.status,
        tickets: data.tickets || [], // adapt to alf.io schema
        downloadUrls: data.downloadUrls || [],
      }),
    };
  } catch (e) {
    return { statusCode: 500, body: e.message };
  }
};
