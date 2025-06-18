import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Navigation from "../Components/Navigation";
import { useApplicationsContent } from "../hooks/useContent";

const Applications = () => {
  const { content, loading, error } = useApplicationsContent();
  const applicationSections = content?.sections || [];

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
    <>
      <Navigation />

      <Container fluid className="py-5 bg-highlight">
        <Container>
          <h1 className="text-center text-primary-custom mb-5">Applications</h1>
          <p className="text-center mb-5">
            Interested in participating or contributing to our event? Check out
            these opportunities and apply today!
          </p>

          <Row xs={1} md={2} lg={3} className="g-4">
            {applicationSections.map((section, idx) => (
              <Col key={idx}>
                <Card className="h-100 shadow">
                  <div className="position-relative">
                    <Card.Img
                      variant="top"
                      src={section.image}
                      alt={section.title}
                      className="img-fluid"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div
                      className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                      style={{ background: "rgba(59, 26, 105, 0.6)" }}
                    >
                      <h3 className="text-highlight text-shadow text-center px-2">
                        {section.title}
                      </h3>
                    </div>
                  </div>
                  <Card.Body className="d-flex flex-column">
                    <Card.Text>{section.description}</Card.Text>
                    <div className="mt-auto text-center">
                      <Button
                        href={section.formLink}
                        target="_blank"
                        variant="primary"
                        className="bg-secondary-custom border-0"
                      >
                        Apply Now
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Applications;
