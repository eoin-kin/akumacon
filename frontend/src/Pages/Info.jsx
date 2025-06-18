import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Accordion,
  Image,
} from "react-bootstrap";
import Navigation from "../Components/Navigation";
import { useInfoContent } from "../hooks/useContent";

function Info() {
  const { content, loading, error } = useInfoContent();

  // Fallbacks to empty arrays/objects to avoid errors if content is missing
  const schedules = content?.schedules || [];
  const gaming = content?.gaming || {};
  const vendors = content?.vendors || [];
  const maps = content?.maps || [];
  const downloads = content?.downloads || [];
  const cosplay = content?.cosplay || {};

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
          <div>Error loading info content.</div>
        </div>
      </>
    );
  }

  return (
    <div style={{ paddingBottom: "3rem" }}>
      <Navigation />
      <Container className="mt-5">
        {/* Schedules Section */}
        <section className="mb-5">
          <h2 className="text-center mb-4 text-primary-custom">
            Event Schedules
          </h2>
          <Row>
            {schedules.map((day, idx) => (
              <Col md={4} key={idx} className="mb-4">
                <Card className="h-100 shadow">
                  <Card.Header className="bg-primary text-light text-center">
                    <h4>{day.day}</h4>
                  </Card.Header>
                  <Card.Body>
                    <ul className="list-unstyled">
                      {day.items.map((item, i) => (
                        <li key={i} className="mb-2">
                          <strong>{item.time}</strong>
                          <br />
                          {item.title}{" "}
                          <span className="text-secondary-custom">
                            ({item.location})
                          </span>
                        </li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        {/* Gaming Section */}
        <section className="mb-5">
          <h2 className="text-center mb-4 text-primary-custom">Gaming Zone</h2>
          <Row>
            <Col md={6} className="mb-3">
              <Image src={gaming.image} alt="Gaming Zone" fluid rounded />
            </Col>
            <Col md={6}>
              <p>{gaming.description}</p>
              <ul>
                {gaming.tournaments?.map((t, i) => (
                  <li key={i}>
                    <strong>{t.title}</strong> – {t.time}: {t.details}
                  </li>
                ))}
              </ul>
              {gaming.cta?.link && (
                <Button
                  href={gaming.cta.link}
                  style={{
                    backgroundColor: "var(--cta)",
                    borderColor: "var(--primary)",
                    color: "var(--dark)",
                    fontWeight: "bold",
                  }}
                  className="shadow"
                >
                  {gaming.cta.text}
                </Button>
              )}
            </Col>
          </Row>
        </section>

        {/* Vendors Section */}
        <section className="mb-5">
          <h2 className="text-center mb-4 text-primary-custom">Vendors</h2>
          <Row>
            {vendors.map((vendor, i) => (
              <Col md={3} sm={6} className="mb-4" key={i}>
                <Card className="h-100 shadow">
                  <Image
                    src={vendor.image}
                    alt={vendor.name}
                    fluid
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "200px",
                    }}
                  />
                  <Card.Body className="text-center">
                    <Card.Title>{vendor.name}</Card.Title>
                    <Card.Text>Booth: {vendor.booth}</Card.Text>
                    <Card.Text>{vendor.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        {/* Maps Section */}
        <section className="mb-5">
          <h2 className="text-center mb-4 text-primary-custom">Venue Maps</h2>
          <Accordion>
            {maps.map((map, i) => (
              <Accordion.Item eventKey={i.toString()} key={i}>
                <Accordion.Header>{map.title}</Accordion.Header>
                <Accordion.Body>
                  <Image
                    src={map.image}
                    alt={map.title}
                    fluid
                    className="mb-3"
                  />
                  <p>{map.description}</p>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </section>

        {/* Downloads Section */}
        <section className="mb-5">
          <h2 className="text-center mb-4 text-primary-custom">
            Downloads & Resources
          </h2>
          <ul className="list-unstyled text-center">
            {downloads.map((dl, i) => (
              <li key={i} className="mb-2">
                <a href={dl.link} target="_blank" rel="noopener noreferrer">
                  {dl.text}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Cosplay Section */}
        <section className="mb-5">
          <h2 className="text-center mb-4 text-primary-custom">
            {cosplay.contest?.title || "Cosplay Contest"}
          </h2>
          <Row>
            <Col md={6} className="mb-3">
              <Image
                src={cosplay.contest?.image}
                alt="Cosplay Contest"
                fluid
                rounded
              />
            </Col>
            <Col md={6}>
              <p>{cosplay.contest?.description}</p>
              <ul>
                {cosplay.contest?.categories?.map((cat, i) => (
                  <li key={i}>
                    <strong>{cat.name}</strong>: {cat.description}
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
          <h3 className="mt-4">Rules</h3>
          <ul>
            {cosplay.rules?.map((rule, i) => (
              <li key={i}>
                <strong>{rule.title}</strong>: {rule.content}
              </li>
            ))}
          </ul>
          <h3 className="mt-4">Photo Areas</h3>
          <ul>
            {cosplay.photo_areas?.map((area, i) => (
              <li key={i}>
                <strong>{area.name}</strong>: {area.description}
              </li>
            ))}
          </ul>
          <h3 className="mt-4">Repair Station</h3>
          <p>{cosplay.repair_station?.description}</p>
          <ul>
            {cosplay.repair_station?.supplies?.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
          <p>
            <strong>Location:</strong> {cosplay.repair_station?.location}
          </p>
          <h3 className="mt-4">Cosplay Gallery</h3>
          <Row>
            {cosplay.gallery?.map((img, i) => (
              <Col xs={6} md={4} lg={2} className="mb-3" key={i}>
                <Image src={img.image} alt={img.alt} fluid rounded />
              </Col>
            ))}
          </Row>
        </section>
      </Container>
    </div>
  );
}

export default Info;
