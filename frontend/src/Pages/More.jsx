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
  Tabs,
  Tab,
} from "react-bootstrap";
import Navigation from "../Components/Navigation";
import Bottom from "../Components/Bottom.jsx";
import { useContent } from "../hooks/useContent.js";

// More page component
// Displays additional information or links related to the event
function More() {
  const { content, loading, error } = useContent("content/more.json");

  // State for the tabs
  const [activeTab, setActiveTab] = useState("faq");

  // Use content from CMS or fallback to defaults
  const faqData = content?.faq || [];
  const crewData = content?.crew || [];
  const rulesData = content?.rules || [];
  const parentLetterContent = content?.parent_letter?.content || "";

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
    <div>
      <Navigation />
      <Container className="mt-5">
        <div
          style={{
            background: "var(--secondary)",
            borderRadius: "1rem",
            boxShadow: "0 2px 8px var(--shadow-color)",
            padding: "1.5rem 1rem",
          }}
        >
          <style>{`
            .custom-more-tabs .nav-link {
              color: var(--highlight) !important;
            }
            .custom-more-tabs .nav-link.active {
              background: var(--secondary) !important;
              color: var(--highlight) !important;
              border-radius: 0.5rem 0.5rem 0 0 !important;
            }
          `}</style>
          <Tabs
            id="more-tabs"
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k)}
            className="mb-5 custom-more-tabs"
            fill
          >
            <Tab eventKey="faq" title="FAQs">
              {/* FAQ Section */}
              <section className="mb-5">
                <h2
                  className="text-center mb-4 fw-bold"
                  style={{ color: "var(--highlight)" }}
                >
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
            </Tab>
            <Tab eventKey="parents" title="Parents">
              {/* Parent Letter Section */}
              <section className="mb-5">
                <h2
                  className="mb-4 fw-bold"
                  style={{ color: "var(--highlight)", textAlign: "center" }}
                >
                  Information for Parents
                </h2>
                <div
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.6",
                    maxWidth: 700,
                    margin: "0 auto",
                    background: "var(--highlight)",
                    padding: "2rem",
                    borderRadius: "1rem",
                    boxShadow: "0 2px 8px var(--shadow-color)",
                  }}
                >
                  {parentLetterContent.split("\n\n").map((paragraph, idx) => {
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
              </section>
            </Tab>
            <Tab eventKey="crew" title="Crew">
              {/* Crew Section */}
              <section className="mb-5">
                <h2
                  className="text-center mb-4 fw-bold"
                  style={{ color: "var(--highlight)" }}
                >
                  Our Crew
                </h2>
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
            </Tab>
            <Tab eventKey="rules" title="Rules & Guidelines">
              {/* Rules Section */}
              <section className="mb-5">
                <h2
                  className="text-center mb-4 fw-bold"
                  style={{ color: "var(--highlight)" }}
                >
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
                    <h3 className="text-center">
                      Click to view detailed rules
                    </h3>
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
            </Tab>
          </Tabs>
        </div>
      </Container>
      <br />
      <Bottom />
    </div>
  );
}

export default More;
