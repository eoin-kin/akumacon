import Navigation from "../Components/Navigation.jsx";
import Bottom from "../Components/Bottom.jsx";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import React, { useState } from "react";

export function TicketSelection() {
  const [validated, setValidated] = useState(false);
  const [ticketCounts, setTicketCounts] = useState({
    over18Weekend: 0,
    over18Day: 0,
    under18Weekend: 0,
    under18Day: 0,
    studentWeekend: 0,
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const glassStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.65)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    borderRadius: "8px",
    padding: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    "@media (max-width: 576px)": {
      borderRadius: "0 !important",
    },
  };
  const TICKET_PRICES = {
    over18Weekend: 25,
    over18Day: 15,
    under18Weekend: 15,
    under18Day: 10,
    studentWeekend: 20,
  };

  const handleTicketChange = (e, ticketType) => {
    const newCount = parseInt(e.target.value);

    setTicketCounts((prevCounts) => ({
      ...prevCounts,
      [ticketType]: newCount,
    }));

    // Calculate new total price
    const newTicketCounts = {
      ...ticketCounts,
      [ticketType]: newCount,
    };

    const newTotal = Object.keys(newTicketCounts).reduce((sum, type) => {
      return sum + newTicketCounts[type] * TICKET_PRICES[type];
    }, 0);

    setTotalPrice(newTotal);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // Here you can process the form data
      console.log("Form submitted with ticket counts:", ticketCounts);
      console.log("Total price:", totalPrice);

      // You would typically send this data to your backend here
    }

    setValidated(true);
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
            Order Tickets
          </h1>

          <Form validated={validated} onSubmit={handleSubmit}>
            <Container>
              {/* Ticket Selection Rows */}
              <Row className="mb-3 align-items-center">
                <Col md={6}>
                  <h5 style={{ color: "var(--highlight)" }}>
                    Over 18s Weekend Pass
                  </h5>
                </Col>
                <Col md={3}>
                  <Form.Select
                    value={ticketCounts.over18Weekend}
                    onChange={(e) => handleTicketChange(e, "over18Weekend")}
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </Form.Select>
                </Col>
                <Col md={3}>
                  <span
                    className="price-display price-pill fw-bold px-3"
                    style={glassStyle}
                  >
                    €{TICKET_PRICES.over18Weekend}
                  </span>
                </Col>
              </Row>

              <Row className="mb-3 align-items-center">
                <Col md={6}>
                  <h5 style={{ color: "var(--highlight)" }}>
                    Over 18s Day Pass
                  </h5>
                </Col>
                <Col md={3}>
                  <Form.Select
                    value={ticketCounts.over18Day}
                    onChange={(e) => handleTicketChange(e, "over18Day")}
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </Form.Select>
                </Col>
                <Col md={3}>
                  <span
                    className="price-display price-pill fw-bold px-3"
                    style={glassStyle}
                  >
                    €{TICKET_PRICES.over18Day}
                  </span>
                </Col>
              </Row>

              <Row className="mb-3 align-items-center">
                <Col md={6}>
                  <h5 style={{ color: "var(--highlight)" }}>
                    Under 18s Weekend Pass
                  </h5>
                </Col>
                <Col md={3}>
                  <Form.Select
                    value={ticketCounts.under18Weekend}
                    onChange={(e) => handleTicketChange(e, "under18Weekend")}
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </Form.Select>
                </Col>
                <Col md={3}>
                  <span
                    className="price-display price-pill fw-bold px-3"
                    style={glassStyle}
                  >
                    €{TICKET_PRICES.under18Weekend}
                  </span>
                </Col>
              </Row>

              <Row className="mb-3 align-items-center">
                <Col md={6}>
                  <h5 style={{ color: "var(--highlight)" }}>
                    Under 18s Day Pass
                  </h5>
                </Col>
                <Col md={3}>
                  <Form.Select
                    value={ticketCounts.under18Day}
                    onChange={(e) => handleTicketChange(e, "under18Day")}
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </Form.Select>
                </Col>
                <Col md={3}>
                  <span
                    className="price-display price-pill fw-bold px-3"
                    style={glassStyle}
                  >
                    €{TICKET_PRICES.under18Day}
                  </span>
                </Col>
              </Row>

              <Row className="mb-4 align-items-center">
                <Col md={6}>
                  <h5 style={{ color: "var(--highlight)" }}>
                    Student Weekend Pass (Student ID Required)
                  </h5>
                </Col>
                <Col md={3}>
                  <Form.Select
                    value={ticketCounts.studentWeekend}
                    onChange={(e) => handleTicketChange(e, "studentWeekend")}
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </Form.Select>
                </Col>
                <Col md={3}>
                  <span
                    className="price-display price-pill fw-bold px-3"
                    style={glassStyle}
                  >
                    €{TICKET_PRICES.studentWeekend}
                  </span>
                </Col>
              </Row>

              {/* Order Summary */}
              <Row className="my-4">
                <Col>
                  <div className="p-3 bg-light rounded">
                    <h4>Order Summary</h4>
                    <div className="d-flex justify-content-between mt-3">
                      <span>Total Tickets:</span>
                      <span>
                        {Object.values(ticketCounts).reduce(
                          (sum, count) => sum + count,
                          0
                        )}
                      </span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Total Price:</span>
                      <span>€{totalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                </Col>
              </Row>

              {/* Submit Button */}
              <Row className="mt-4">
                <Col className="d-grid">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={Object.values(ticketCounts).every(
                      (count) => count === 0
                    )}
                  >
                    Proceed to Checkout
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
}
