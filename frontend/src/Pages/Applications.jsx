import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Navigation from "../Components/Navigation";
import Bottom from "../Components/Bottom.jsx";

const Applications = () => {
  const applicationSections = [
    {
      title: "Cosplay Masquerade",
      description:
        "Show off your incredible cosplay skills and compete in our renowned masquerade event. Open to all skill levels with multiple categories available.",
      image: "/images/cosplay-masquerade.jpg", // Update with your actual image path
      formLink: "https://forms.google.com/cosplay-masquerade",
    },
    {
      title: "Karaoke",
      description:
        "Take the stage and perform your favorite songs! Our karaoke event welcomes singers of all abilities to share their vocal talents with fellow fans.",
      image: "/images/karaoke.jpg", // Update with your actual image path
      formLink: "https://forms.google.com/karaoke",
    },
    {
      title: "Volunteers",
      description:
        "Help make our event amazing by joining our volunteer team. Various positions available with perks including free admission depending on hours worked.",
      image: "/images/volunteers.jpg", // Update with your actual image path
      formLink: "https://forms.google.com/volunteers",
    },
    {
      title: "Host a Panel",
      description:
        "Share your knowledge and passion by hosting a panel. We welcome topics on anime, manga, gaming, cosplay techniques, and more!",
      image: "/images/host-panel.jpg", // Update with your actual image path
      formLink: "https://forms.google.com/host-panel",
    },
    {
      title: "Artist Alley",
      description:
        "Showcase and sell your artwork in our Artist Alley. Limited spaces available for artists of all styles to display their creative talents.",
      image: "/images/artist-alley.jpg", // Update with your actual image path
      formLink: "https://forms.google.com/artist-alley",
    },
    {
      title: "Trader Hall",
      description:
        "Book a spot in our Trader Hall to sell merchandise, collectibles, and other fandom items to our attendees. Various booth sizes available.",
      image: "/images/trader-hall.jpg", // Update with your actual image path
      formLink: "https://forms.google.com/trader-hall",
    },
  ];

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
      <Bottom />
    </>
  );
};

export default Applications;
