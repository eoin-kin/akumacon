import { useLocation, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Navigation from "../Components/Navigation";
import Bottom from "../Components/Bottom.jsx";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "../Components/PaymentForm"; // NEW component

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

// Checkout page component
// Handles the ticket checkout process, including payment integration
const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { tickets, total } = location.state || { tickets: {}, total: 0 };
  const [validated, setValidated] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const [reservationId, setReservationId] = useState("");

  const ticketLabels = {
    over18Weekend: "Over 18s Weekend Pass",
    over18Day: "Over 18s Day Pass",
    under18Weekend: "Under 18s Weekend Pass",
    under18Day: "Under 18s Day Pass",
    studentWeekend: "Student Weekend Pass",
  };

  // 🔹 Call your Netlify function to create a PaymentIntent
  useEffect(() => {
    async function createPaymentIntent() {
      try {
        const response = await fetch("/.netlify/functions/start-checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ cart: tickets, currency: "eur" }),
        });

        if (!response.ok) throw new Error("Failed to start checkout");

        const data = await response.json();
        setClientSecret(data.clientSecret);
        setReservationId(data.reservationId);
      } catch (err) {
        console.error("Checkout init error:", err);
      }
    }

    if (total > 0) createPaymentIntent();
  }, [tickets, total]);

  return (
    <>
      <Navigation />
      <br />
      <Container className="px-4">
        <div
          className="shadow-lg p-4 rounded-5"
          style={{
            backgroundImage: "url('/skyline.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1
            className="mb-4 fw-bolder text-decoration-underline"
            style={{ color: "var(--highlight)" }}
          >
            Checkout
          </h1>

          <Container>
            {/* Order Summary */}
            <Row className="mb-4">
              <Col>
                <div className="p-4 bg-light rounded">
                  <h4 className="mb-3">Order Summary</h4>
                  {Object.entries(tickets).map(([type, count]) =>
                    count > 0 ? (
                      <div
                        key={type}
                        className="d-flex justify-content-between mb-2"
                      >
                        <span>
                          {ticketLabels[type]} x{count}
                        </span>
                      </div>
                    ) : null
                  )}
                  <hr />
                  <div className="d-flex justify-content-between">
                    <strong>Total:</strong>
                    <strong>€{total.toFixed(2)}</strong>
                  </div>
                </div>
              </Col>
            </Row>

            {/* Contact Information */}
            <Row className="mb-4">
              <Col>
                <h4 style={{ color: "var(--highlight)" }}>
                  Contact Information
                </h4>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label
                        style={{ fontWeight: "bold", color: "white" }}
                      >
                        First Name
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter first name"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label
                        style={{ fontWeight: "bold", color: "white" }}
                      >
                        Last Name
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter last name"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label
                        style={{ fontWeight: "bold", color: "white" }}
                      >
                        Email Address
                      </Form.Label>
                      <Form.Control
                        required
                        type="email"
                        placeholder="Enter email"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label
                        style={{ fontWeight: "bold", color: "white" }}
                      >
                        Phone Number
                      </Form.Label>
                      <Form.Control
                        required
                        type="tel"
                        placeholder="Enter phone number"
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Col>
            </Row>

            {/* Payment Form (Stripe Elements) */}
            {clientSecret && (
              <Elements stripe={stripePromise} options={{ clientSecret }}>
                <PaymentForm reservationId={reservationId} />
              </Elements>
            )}

            {/* Navigation Buttons */}
            <Row className="mt-4">
              <Col className="d-grid gap-2">
                <Button
                  variant="secondary"
                  onClick={() => navigate("/ticketselection")}
                  size="lg"
                >
                  Back to Tickets
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
      <br />
      <Bottom />
    </>
  );
};

export default Checkout;
