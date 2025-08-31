import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Tabs,
  Tab,
  Accordion,
  Button,
} from "react-bootstrap";
import "./InfoPage.css";
import Navigation from "../Components/Navigation";
import Bottom from "../Components/Bottom.jsx";
import { useContent } from "../hooks/useContent.js";

// Info page component
// Displays detailed information about the event
export function InfoPage() {
  const { content, loading, error } = useContent("content/info.json");

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

  const gamingContent = content?.gaming || {};
  const vendorsContent = content?.vendors || [];
  const mapsContent = content?.maps || [];
  const downloadsContent = content?.downloads || [];
  const cosplayContent = content?.cosplay || {};
  return (
    <>
      <Navigation />
      <Container className="info-page py-5">
        {/* Page title */}
        <h1 className="text-center mb-5">Event Information</h1>

        {/* Main info tabs */}
        <Tabs
          defaultActiveKey="timetables"
          id="info-tabs"
          className="mb-5 info-tabs"
          fill
        >
          {/* TIMETABLES SECTION */}
          <Tab eventKey="timetables" title="Timetables">
            <div className="tab-content-wrapper">
              <h2 className="mb-4">Event Schedule</h2>

              {/* Dynamic Schedule Accordion */}
              {content && content.schedules && (
                <Accordion defaultActiveKey="0" className="mb-4">
                  {content.schedules.map((schedule, idx) => (
                    <Accordion.Item eventKey={String(idx)} key={schedule.day}>
                      <Accordion.Header>
                        {schedule.day} Schedule
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="schedule-wrapper">
                          {schedule.items.map((item, i) => (
                            <div className="schedule-item" key={i}>
                              <span className="time">{item.time}</span>
                              <div className="event-details">
                                <h5>{item.title}</h5>
                                <p>{item.location}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              )}

              <div className="download-links mt-4">
                <a href="#" className="btn btn-primary me-3">
                  Download Full Schedule (PDF)
                </a>
              </div>
            </div>
          </Tab>

          {/* GAMING SECTION */}
          <Tab eventKey="gaming" title="Gaming">
            <div className="tab-content-wrapper">
              <h2 className="mb-4">Gaming Zone</h2>
              <Row>
                <Col lg={4} md={12} className="mb-4 mb-lg-0">
                  <img
                    src={gamingContent.image}
                    alt="Gaming Zone"
                    className="img-fluid rounded"
                  />
                </Col>
                <Col lg={8} md={12}>
                  <p>{gamingContent.description}</p>
                  <h4 className="mt-4 mb-3">Featured Events</h4>
                  <div className="tournament-list">
                    {gamingContent.tournaments &&
                      gamingContent.tournaments.map((t, i) => (
                        <div className="tournament-item" key={i}>
                          <div className="d-flex justify-content-between align-items-center mb-2">
                            <h5 className="mb-0">{t.title}</h5>
                            <span className="tournament-badge price-pill">
                              {t.time}
                            </span>
                          </div>
                          <p className="mb-2">{t.details}</p>
                        </div>
                      ))}
                  </div>
                </Col>
              </Row>
              <div className="text-center mt-4">
                <a
                  href={gamingContent.cta?.link || "#"}
                  className="btn btn-primary"
                >
                  {gamingContent.cta?.text || "View All Gaming Events"}
                </a>
              </div>
            </div>
          </Tab>

          {/* TRADE HALL INFO SECTION */}
          <Tab eventKey="tradehall" title="Trade Hall">
            <div className="tab-content-wrapper">
              <h2 className="mb-4">Trade Hall Information</h2>

              <Row className="mb-5">
                <Col md={6}>
                  <div className="trade-hall-image mb-4">
                    {/* Replace with your actual trade hall image */}
                    <img
                      src={
                        content?.tradehall?.image ||
                        "/api/placeholder/600/400?text=Trade Hall Map"
                      }
                      alt="Trade Hall Map"
                      className="img-fluid rounded"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="trade-hall-details">
                    <h3>Hours of Operation</h3>
                    <ul className="list-unstyled">
                      {content?.tradehall?.hours &&
                        content.tradehall.hours.map((hour, idx) => (
                          <li key={idx}>
                            <strong>{hour.day}:</strong> {hour.time}
                          </li>
                        ))}
                    </ul>

                    <h3 className="mt-4">About the Trade Hall</h3>
                    <p>
                      {content?.tradehall?.about ||
                        "The Trade Hall features a variety of vendors offering merchandise, collectibles, and artwork. Check out our featured vendors below!"}
                    </p>
                  </div>
                </Col>
              </Row>

              <h3 className="mb-3">Featured Vendors</h3>
              <Row className="mb-4 g-4">
                {vendorsContent.map((vendor, idx) => (
                  <Col md={6} lg={3} key={idx}>
                    <Card className="h-100 vendor-card">
                      <Card.Img
                        variant="top"
                        src={vendor.image}
                        alt={vendor.name}
                      />
                      <Card.Body>
                        <Card.Title>{vendor.name}</Card.Title>
                        <Card.Text>Booth #{vendor.booth}</Card.Text>
                        <Card.Text>{vendor.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Tab>

          {/* VENUE MAPS SECTION */}
          <Tab eventKey="maps" title="Venue Maps">
            <div className="tab-content-wrapper">
              <h2 className="mb-4">Venue Layout & Maps</h2>

              <div className="map-selector mb-4">
                <Tabs
                  defaultActiveKey={mapsContent[0]?.tab || "overall"}
                  id="map-tabs"
                  className="mb-3 map-nav-tabs"
                >
                  {mapsContent.map((map, idx) => (
                    <Tab eventKey={map.tab} title={map.title} key={map.tab}>
                      <div className="map-container">
                        <img
                          src={map.image}
                          alt={map.title}
                          className="img-fluid rounded"
                        />
                      </div>
                      <div className="map-info mt-3">
                        <h4>{map.title}</h4>
                        <p>{map.description}</p>
                      </div>
                    </Tab>
                  ))}
                </Tabs>
              </div>

              <Row className="mt-5">
                <Col md={6}>
                  <div className="location-info">
                    <h3>Getting to the Venue</h3>
                    <p>{content?.location?.description || ""}</p>

                    <h4 className="mt-4">Public Transportation</h4>
                    <ul>
                      {content?.location?.public_transport?.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>

                    <h4 className="mt-4">Parking Information</h4>
                    <p>{content?.location?.parking || ""}</p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="location-map">
                    <img
                      src={
                        mapsContent.find((m) => m.tab === "location")?.image ||
                        ""
                      }
                      alt="Venue Location"
                      className="img-fluid rounded"
                    />
                  </div>
                </Col>
              </Row>
              {/* Download Links */}
              <div className="download-links mt-4">
                {downloadsContent.map((dl, idx) => (
                  <a
                    href={dl.link}
                    className={`btn ${
                      idx === 0 ? "btn-primary me-3" : "btn-outline-primary"
                    }`}
                    key={idx}
                  >
                    {dl.text}
                  </a>
                ))}
              </div>
            </div>
          </Tab>

          {/* COSPLAY INFORMATION SECTION */}
          <Tab eventKey="cosplay" title="Cosplay Info">
            <div className="tab-content-wrapper">
              <h2 className="mb-4">Cosplay Information</h2>

              <Row className="mb-5">
                <Col lg={7}>
                  <div className="cosplay-intro">
                    <p>
                      {cosplayContent.description ||
                        "So you're wondering about cosplay, eh? Fear not, I'm here to help! Without cosplay, we wouldn't be much of a convention! Checkout the cosplay events we will be having at Akumakon, they're up on our timetable. We will have a cosplay contest and there will be cash prizes! While we don't have any unreasonable rules about cosplay, we do have a list that you should check out before you decide on who to cosplay as. They're in the Rules section"}
                    </p>
                  </div>
                </Col>
              </Row>

              <div className="cosplay-gallery">
                <h3 className="mb-4">Previous Years' Highlights</h3>
                <Row className="g-4">
                  {/* Replace with actual cosplay images */}
                  {cosplayContent.gallery &&
                    cosplayContent.gallery.map((item, idx) => (
                      <Col md={6} lg={4} key={idx}>
                        <div className="cosplay-gallery-item">
                          <img
                            src={item.image}
                            alt={item.alt}
                            className="img-fluid rounded"
                          />
                        </div>
                      </Col>
                    ))}
                </Row>
              </div>

              <div className="download-links mt-5">
                <a href="#" className="btn btn-primary me-3">
                  Download Cosplay Guidelines (PDF)
                </a>
                <a href="#" className="btn btn-outline-primary">
                  Contest Registration Form
                </a>
              </div>
            </div>
          </Tab>

          {/* SPECIAL GUESTS SECTION */}
          <Tab eventKey="specialguests" title="Special Guests">
            <div
              className="tab-content-wrapper"
              style={{ background: "var(--secondary)" }}
            >
              <h2
                className="mb-4 fw-bold"
                style={{ color: "var(--highlight)" }}
              >
                Special Guests
              </h2>
              {content?.specialGuests && content.specialGuests.length > 0 ? (
                <Row className="g-4">
                  {content.specialGuests.map((guest, idx) => (
                    <Col md={6} lg={4} key={idx}>
                      <Card className="h-100 shadow rounded-lg">
                        <Card.Img
                          variant="top"
                          src={guest.image}
                          alt={guest.name}
                          className="img-fluid"
                          style={{ height: "250px", objectFit: "cover" }}
                        />
                        <Card.Body>
                          <Card.Title className="fw-bolder">
                            {guest.name}
                          </Card.Title>
                          <Card.Text>{guest.bio}</Card.Text>
                          {guest.links && guest.links.length > 0 && (
                            <div className="d-flex gap-2 flex-wrap mt-2">
                              {guest.links.map((link, lidx) => (
                                <a
                                  key={lidx}
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="btn btn-outline-primary btn-sm"
                                >
                                  {link.type}
                                </a>
                              ))}
                            </div>
                          )}
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              ) : (
                <p>No special guests announced yet. Check back soon!</p>
              )}
            </div>
          </Tab>
        </Tabs>
      </Container>
      <Bottom />
    </>
  );
}

export default InfoPage;
