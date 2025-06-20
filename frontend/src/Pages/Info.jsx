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
import { useContent } from "../hooks/useContent.js";

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

  const schedulesContent = content?.schedules || [];
  const gamingContent = content?.gaming || {};
  const vendorsContent = content?.vendors || [];
  const mapsContent = content?.maps || [];
  const downloadsContent = content?.downloads || [];
  const cosplayContent = content?.cosplay || {};
  return (
    <>
      <Navigation />
      <Container className="info-page py-5">
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
                <a href="#" className="btn btn-outline-primary">
                  Subscribe to Calendar
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
                  <h4 className="mt-4 mb-3">Tournament Schedule</h4>
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
                          <button className="cta-button">Sign Up</button>
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
                    <h3>Cosplay Contest</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Our annual cosplay contest is one of the highlights of the
                      event. Participants can compete in various categories and
                      showcase their craftsmanship, performance, and creativity.
                    </p>

                    <h4 className="mt-4">Contest Categories</h4>
                    <ul>
                      <li>
                        <strong>Master Division</strong> - For experienced
                        cosplayers
                      </li>
                      <li>
                        <strong>Journeyman Division</strong> - For intermediate
                        cosplayers
                      </li>
                      <li>
                        <strong>Novice Division</strong> - For beginners
                      </li>
                      <li>
                        <strong>Youth Division</strong> - For cosplayers under
                        16
                      </li>
                      <li>
                        <strong>Group Category</strong> - For teams of 2 or more
                        cosplayers
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col lg={5}>
                  <div className="cosplay-image">
                    {/* Replace with actual cosplay image */}
                    <img
                      src="/api/placeholder/500/400?text=Cosplay Contest"
                      alt="Cosplay Contest"
                      className="img-fluid rounded"
                    />
                  </div>
                </Col>
              </Row>

              <div className="cosplay-rules mb-5">
                <h3>Contest Rules & Guidelines</h3>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      Registration & Eligibility
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Participants must register at least 24 hours before the
                        contest. All contestants must have valid event badges
                        and follow safety guidelines. Pre-registration is
                        available online until one week before the event.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Judging Criteria</Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Entries will be judged on the following criteria:
                      </p>
                      <ul>
                        <li>
                          <strong>Craftsmanship (40%)</strong> - Quality of
                          construction, attention to detail, difficulty
                        </li>
                        <li>
                          <strong>Accuracy (30%)</strong> - Resemblance to
                          reference material
                        </li>
                        <li>
                          <strong>Presentation (20%)</strong> - Stage presence,
                          character portrayal
                        </li>
                        <li>
                          <strong>Overall Impression (10%)</strong> - General
                          impact and audience response
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Props & Weapons Policy</Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        All props and weapons must be checked and approved at
                        the weapons check station. Metal weapons, functional
                        projectile weapons, and props that exceed 6 feet in any
                        dimension are prohibited.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>

              <Row className="mb-5">
                <Col md={6}>
                  <div className="cosplay-photo-area">
                    <h3>Cosplay Photo Areas</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Several dedicated photo areas will be available throughout
                      the venue with different themed backdrops and professional
                      lighting.
                    </p>
                    <ul className="mt-3">
                      <li>
                        <strong>Main Hall Backdrop</strong> - Fantasy castle
                        theme
                      </li>
                      <li>
                        <strong>Garden Area</strong> - Natural setting with
                        sakura decorations
                      </li>
                      <li>
                        <strong>Sci-Fi Corner</strong> - Futuristic space
                        station environment
                      </li>
                      <li>
                        <strong>Urban Alley</strong> - City street scene with
                        neon lights
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="cosplay-repair">
                    <h3>Cosplay Repair Station</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                      dedicated cosplay repair station will be available
                      throughout the event. Staffed by volunteers, the station
                      will have basic supplies for emergency repairs and
                      touch-ups.
                    </p>
                    <div className="mt-3">
                      <h5>Available Supplies:</h5>
                      <p>
                        Hot glue guns, safety pins, needle and thread, fabric
                        tape, spirit gum, makeup supplies, and more.
                      </p>

                      <h5 className="mt-3">Location & Hours:</h5>
                      <p>
                        Second floor near Room 204. Open during all event hours.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>

              <div className="cosplay-gallery">
                <h3 className="mb-4">Previous Years' Highlights</h3>
                <Row className="g-4">
                  {/* Replace with actual cosplay images */}
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <Col md={6} lg={4} key={item}>
                      <div className="cosplay-gallery-item">
                        <img
                          src={`/api/placeholder/400/300?text=Cosplay ${item}`}
                          alt={`Cosplay Gallery ${item}`}
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
        </Tabs>
      </Container>
    </>
  );
}

export default InfoPage;
