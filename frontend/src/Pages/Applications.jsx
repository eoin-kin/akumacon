import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Navigation from "../Components/Navigation";
import Bottom from "../Components/Bottom.jsx";
import { useContent } from "../hooks/useContent.js";

const Applications = () => {
  const { content, loading, error } = useContent("content/applications.json");
  const applicationSections = content?.sections || [];
  const bannerImage = content?.banner_image;

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
    return (
      <>
        <Navigation />
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "50vh" }}
        >
          <div>Error loading content.</div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navigation />
      {bannerImage && (
        <div style={{ width: "100%", overflow: "hidden" }}>
          <img
            src={bannerImage}
            alt="Applications Banner"
            style={{
              width: "100%",
              maxHeight: 320,
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      )}
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
                      <h3
                        className=" text-shadow text-center px-2 fw-bold"
                        style={{ color: "var(--dark)" }}
                      >
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
      <Bottom />
    </>
  );
};

export default Applications;
