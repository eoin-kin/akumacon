import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Accordion,
  Card,
  Button,
  Modal,
  Image,
} from "react-bootstrap";
import Navigation from "../Components/Navigation";
import { useMoreContent } from "../hooks/useContent";

function More() {
  const { content, loading, error } = useMoreContent();
  const faqData = content?.faq || [];
  const crewData = content?.crew || [];
  const rulesData = content?.rules || [];
  const parentLetter = content?.parent_letter || {};

  // State for the parent letter modal
  const [showParentLetter, setShowParentLetter] = useState(false);
  // State for the rules modal
  const [showRules, setShowRules] = useState(false);
  const [activeRuleSet, setActiveRuleSet] = useState(null);

  // Handle opening the rules modal with specific ruleset
  const handleRuleClick = (ruleIndex) => {
    setActiveRuleSet(rulesData[ruleIndex]);
    setShowRules(true);
  };

  if (loading) {
    return (
      <>
        <Navigation />
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "50vh" }}
        >
          <div>Loading...</div>
        </div>
      </>
    );
  }

  if (error) {
    console.error("Content loading error:", error);
  }

  return (
    <div style={{ paddingBottom: "3rem" }}>
      <Navigation />
      <Container className="mt-5">
        {/* FAQ Section */}
        <section className="mb-5">
          <h2 className="text-center mb-4 text-primary-custom">
            Frequently Asked Questions
          </h2>
          <Accordion className="shadow-sm">
            {faqData.map((faq, index) => (
              <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body className="bg-highlight">
                  {faq.answer}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </section>

        {/* Crew Section */}
        <section className="mb-5">
          <h2 className="text-center mb-4 text-primary-custom">Our Crew</h2>
          <Row className="crew-gallery">
            {crewData.map((member, index) => (
              <Col md={4} sm={6} className="mb-4" key={index}>
                <Card
                  className="h-100 shadow"
                  style={{
                    transition: "transform 0.3s ease",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      overflow: "hidden",
                      height: "200px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "var(--highlight)",
                    }}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fluid
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                  <Card.Body
                    className="text-center"
                    style={{ backgroundColor: "var(--light)" }}
                  >
                    <Card.Title className="text-primary-custom">
                      {member.name}
                    </Card.Title>
                    <Card.Text className="text-secondary-custom">
                      {member.position}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        {/* Parent Letter Section */}
        <section className="mb-5 text-center">
          <h2 className="mb-4 text-primary-custom">Information for Parents</h2>
          <Button
            style={{
              backgroundColor: "var(--cta)",
              borderColor: "var(--primary)",
              color: "var(--dark)",
              fontWeight: "bold",
            }}
            size="lg"
            onClick={() => setShowParentLetter(true)}
            className="shadow"
          >
            Open Letter to Parents
          </Button>

          {/* Parent Letter Modal */}
          <Modal
            show={showParentLetter}
            onHide={() => setShowParentLetter(false)}
            size="lg"
            centered
          >
            <Modal.Header
              style={{
                backgroundColor: "var(--primary)",
                color: "var(--light)",
              }}
              closeButton
            >
              <Modal.Title>
                {parentLetter.title || "Letter to Parents"}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: "var(--light)" }}>
              <div
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.6",
                }}
              >
                {(parentLetter.content || "")
                  .split("\n\n")
                  .map((paragraph, idx) => {
                    if (paragraph.startsWith("##")) {
                      return (
                        <h4
                          key={idx}
                          className="text-primary-custom"
                          style={{
                            marginTop: "1.5rem",
                            marginBottom: "1rem",
                            fontWeight: "600",
                          }}
                        >
                          {paragraph.replace("##", "")}
                        </h4>
                      );
                    } else if (paragraph.startsWith("-")) {
                      return (
                        <ul key={idx} style={{ paddingLeft: "1.5rem" }}>
                          {paragraph.split("\n-").map(
                            (item, i) =>
                              item.trim() && (
                                <li key={i} className="text-secondary-custom">
                                  {item.replace("-", "").trim()}
                                </li>
                              )
                          )}
                        </ul>
                      );
                    } else {
                      return (
                        <p key={idx} style={{ marginBottom: "1rem" }}>
                          {paragraph}
                        </p>
                      );
                    }
                  })}
              </div>
            </Modal.Body>
            <Modal.Footer style={{ backgroundColor: "var(--highlight)" }}>
              <Button
                style={{
                  backgroundColor: "var(--secondary)",
                  borderColor: "var(--primary)",
                  color: "var(--light)",
                }}
                onClick={() => setShowParentLetter(false)}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </section>

        {/* Rules Section */}
        <section className="mb-5">
          <h2 className="text-center mb-4 text-primary-custom">
            Rules & Guidelines
          </h2>
          <Card
            style={{
              borderRadius: "10px",
              boxShadow: "0 4px 8px var(--shadow-color)",
              border: "1px solid var(--primary)",
            }}
          >
            <Card.Header
              style={{
                backgroundColor: "var(--primary)",
                color: "var(--light)",
              }}
            >
              <h3 className="text-center">Click to view detailed rules</h3>
            </Card.Header>
            <Card.Body style={{ backgroundColor: "var(--light)" }}>
              <div style={{ padding: "1rem" }}>
                <Row>
                  {rulesData.map((rule, index) => (
                    <Col md={3} sm={6} className="mb-3" key={index}>
                      <a
                        href={rule.url}
                        style={{
                          textDecoration: "none",
                        }}
                      >
                        <Button
                          style={{
                            backgroundColor: "var(--highlight)",
                            color: "var(--primary)",
                            borderWidth: "2px",
                            borderColor: "var(--primary)",
                            fontWeight: "500",
                            transition: "all 0.3s ease",
                          }}
                          className="w-100 h-100 py-3"
                        >
                          {rule.title}
                        </Button>
                      </a>
                    </Col>
                  ))}
                </Row>
              </div>
            </Card.Body>
          </Card>
        </section>
      </Container>
    </div>
  );
}

export default More;
