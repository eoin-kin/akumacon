import { useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Navigation from "../Components/Navigation";
import Bottom from "../Components/Bottom.jsx";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { tickets, total } = location.state || { tickets: {}, total: 0 };
  const [validated, setValidated] = useState(false);

  const ticketLabels = {
    over18Weekend: "Over 18s Weekend Pass",
    over18Day: "Over 18s Day Pass",
    under18Weekend: "Under 18s Weekend Pass",
    under18Day: "Under 18s Day Pass",
    studentWeekend: "Student Weekend Pass",
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    // TODO: Integrate with Stripe Checkout
    // 1. Create a checkout session with Stripe
    // 2. Redirect to Stripe Checkout page
    console.log("Redirecting to Stripe checkout...");
  };

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

          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Container>
              {/* Order Summary */}
              <Row className="mb-4">
                <Col>
                  <div className="p-4 bg-light rounded">
                    <h4 className="mb-3">Order Summary</h4>
                    {Object.entries(tickets).map(([type, count]) => {
                      if (count > 0) {
                        return (
                          <div
                            key={type}
                            className="d-flex justify-content-between mb-2"
                          >
                            <span>
                              {ticketLabels[type]} x{count}
                            </span>
                          </div>
                        );
                      }
                      return null;
                    })}
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
                        <Form.Control.Feedback type="invalid">
                          Please provide your first name.
                        </Form.Control.Feedback>
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
                        <Form.Control.Feedback type="invalid">
                          Please provide your last name.
                        </Form.Control.Feedback>
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
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid email address.
                        </Form.Control.Feedback>
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
                        <Form.Control.Feedback type="invalid">
                          Please provide a phone number.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                </Col>
              </Row>

              {/* Submit Button */}
              <Row className="mt-4">
                <Col className="d-grid gap-2">
                  <Button
                    variant="secondary"
                    onClick={() => navigate("/ticketselection")}
                    size="lg"
                  >
                    Back to Tickets
                  </Button>
                  <Button type="submit" size="lg">
                    Proceed to Payment
                  </Button>
                </Col>
              </Row>
            </Container>
          </Form>
        </div>
      </Container>
      <br />
      <Bottom />
    </>
  );
};

export default Checkout;
