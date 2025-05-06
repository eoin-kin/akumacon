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

export function InfoPage() {
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

              <Accordion defaultActiveKey="0" className="mb-4">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Friday Schedule</Accordion.Header>
                  <Accordion.Body>
                    <div className="schedule-wrapper">
                      <div className="schedule-item">
                        <span className="time">10:00 AM - 11:30 AM</span>
                        <div className="event-details">
                          <h5>Opening Ceremony</h5>
                          <p>Main Hall</p>
                        </div>
                      </div>
                      <div className="schedule-item">
                        <span className="time">12:00 PM - 1:30 PM</span>
                        <div className="event-details">
                          <h5>Guest Panel: Special Guests</h5>
                          <p>Panel Room A</p>
                        </div>
                      </div>
                      <div className="schedule-item">
                        <span className="time">2:00 PM - 3:30 PM</span>
                        <div className="event-details">
                          <h5>Artist Workshop</h5>
                          <p>Workshop Room 1</p>
                        </div>
                      </div>
                      <div className="schedule-item">
                        <span className="time">4:00 PM - 6:00 PM</span>
                        <div className="event-details">
                          <h5>Cosplay Competition Preliminaries</h5>
                          <p>Main Stage</p>
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Saturday Schedule</Accordion.Header>
                  <Accordion.Body>
                    <div className="schedule-wrapper">
                      <div className="schedule-item">
                        <span className="time">9:30 AM - 11:00 AM</span>
                        <div className="event-details">
                          <h5>Voice Actor Panel</h5>
                          <p>Main Hall</p>
                        </div>
                      </div>
                      <div className="schedule-item">
                        <span className="time">11:30 AM - 1:00 PM</span>
                        <div className="event-details">
                          <h5>Anime Screening</h5>
                          <p>Theater Room</p>
                        </div>
                      </div>
                      <div className="schedule-item">
                        <span className="time">2:00 PM - 4:00 PM</span>
                        <div className="event-details">
                          <h5>Main Cosplay Contest</h5>
                          <p>Main Stage</p>
                        </div>
                      </div>
                      <div className="schedule-item">
                        <span className="time">5:00 PM - 7:00 PM</span>
                        <div className="event-details">
                          <h5>Gaming Tournament Finals</h5>
                          <p>Gaming Area</p>
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Sunday Schedule</Accordion.Header>
                  <Accordion.Body>
                    <div className="schedule-wrapper">
                      <div className="schedule-item">
                        <span className="time">10:00 AM - 11:30 AM</span>
                        <div className="event-details">
                          <h5>Fan Art Exhibition</h5>
                          <p>Exhibition Hall</p>
                        </div>
                      </div>
                      <div className="schedule-item">
                        <span className="time">12:00 PM - 1:30 PM</span>
                        <div className="event-details">
                          <h5>Manga Creator Talk</h5>
                          <p>Panel Room B</p>
                        </div>
                      </div>
                      <div className="schedule-item">
                        <span className="time">2:00 PM - 3:30 PM</span>
                        <div className="event-details">
                          <h5>Closing Ceremony & Awards</h5>
                          <p>Main Hall</p>
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              {/* Gaming Card with Tournament Signups */}
              <div className="gaming-card p-4 mb-4">
                <h3 className="mb-3 text-tertiary">Gaming Zone</h3>
                <Row>
                  <Col lg={4} md={12} className="mb-4 mb-lg-0">
                    <img
                      src="/api/placeholder/400/300?text=Gaming Zone"
                      alt="Gaming Zone"
                      className="img-fluid rounded"
                    />
                  </Col>
                  <Col lg={8} md={12}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      The Gaming Zone features the latest consoles, PC gaming
                      stations, and retro gaming setups. Join our tournaments
                      for a chance to win exclusive prizes and bragging rights!
                    </p>

                    <h4 className="mt-4 mb-3">Tournament Schedule</h4>
                    <div className="tournament-list">
                      <div className="tournament-item">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h5 className="mb-0">Super Smash Bros Ultimate</h5>
                          <span className="tournament-badge price-pill">
                            Friday 3PM
                          </span>
                        </div>
                        <p className="mb-2">
                          32 player bracket, double elimination. Prizes for top
                          3 finishers.
                        </p>
                        <button className="cta-button">Sign Up</button>
                      </div>

                      <div className="tournament-item">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h5 className="mb-0">Mario Kart 8 Deluxe</h5>
                          <span className="tournament-badge price-pill">
                            Saturday 1PM
                          </span>
                        </div>
                        <p className="mb-2">
                          16 player tournament with preliminary rounds and
                          finals.
                        </p>
                        <button className="cta-button">Sign Up</button>
                      </div>

                      <div className="tournament-item">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h5 className="mb-0">Retro Gaming Challenge</h5>
                          <span className="tournament-badge price-pill">
                            Sunday 11AM
                          </span>
                        </div>
                        <p className="mb-2">
                          Test your skills on classic games from NES, SNES, and
                          Sega Genesis.
                        </p>
                        <button className="cta-button">Sign Up</button>
                      </div>
                    </div>
                  </Col>
                </Row>
                <div className="text-center mt-4">
                  <a href="#" className="btn btn-primary">
                    View All Gaming Events
                  </a>
                </div>
              </div>

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

          {/* TRADE HALL INFO SECTION */}
          <Tab eventKey="tradehall" title="Trade Hall">
            <div className="tab-content-wrapper">
              <h2 className="mb-4">Trade Hall Information</h2>

              <Row className="mb-5">
                <Col md={6}>
                  <div className="trade-hall-image mb-4">
                    {/* Replace with your actual trade hall image */}
                    <img
                      src="/api/placeholder/600/400"
                      alt="Trade Hall Map"
                      className="img-fluid rounded"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="trade-hall-details">
                    <h3>Hours of Operation</h3>
                    <ul className="list-unstyled">
                      <li>
                        <strong>Friday:</strong> 10:00 AM - 7:00 PM
                      </li>
                      <li>
                        <strong>Saturday:</strong> 9:30 AM - 8:00 PM
                      </li>
                      <li>
                        <strong>Sunday:</strong> 10:00 AM - 5:00 PM
                      </li>
                    </ul>

                    <h3 className="mt-4">About the Trade Hall</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla quam velit, vulputate eu pharetra nec, mattis ac
                      neque. Duis vulputate commodo lectus, ac blandit elit
                      tincidunt id. Sed rhoncus, tortor sed eleifend tristique.
                    </p>
                  </div>
                </Col>
              </Row>

              <h3 className="mb-3">Featured Vendors</h3>
              <Row className="mb-4 g-4">
                {/* Replace with actual vendor information */}
                {[1, 2, 3, 4].map((item) => (
                  <Col md={6} lg={3} key={item}>
                    <Card className="h-100 vendor-card">
                      <Card.Img
                        variant="top"
                        src={`/api/placeholder/300/200?text=Vendor ${item}`}
                      />
                      <Card.Body>
                        <Card.Title>Vendor Name {item}</Card.Title>
                        <Card.Text>Booth #{item * 10}</Card.Text>
                        <Card.Text>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Products include merchandise, collectibles, and
                          artwork.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>

              <div className="vendor-info mt-4">
                <h3>Vendor Rules & Guidelines</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  quam velit, vulputate eu pharetra nec, mattis ac neque. Duis
                  vulputate commodo lectus, ac blandit elit tincidunt id. Sed
                  rhoncus, tortor sed eleifend tristique, tortor mauris molestie
                  elit.
                </p>
              </div>
            </div>
          </Tab>

          {/* VENUE MAPS SECTION */}
          <Tab eventKey="maps" title="Venue Maps">
            <div className="tab-content-wrapper">
              <h2 className="mb-4">Venue Layout & Maps</h2>

              <div className="map-selector mb-4">
                <Tabs
                  defaultActiveKey="overall"
                  id="map-tabs"
                  className="mb-3 map-nav-tabs"
                >
                  <Tab eventKey="overall" title="Overall Venue">
                    <div className="map-container">
                      {/* Replace with your actual venue map */}
                      <img
                        src="/api/placeholder/1000/600?text=Overall Venue Map"
                        alt="Overall Venue Map"
                        className="img-fluid rounded"
                      />
                    </div>
                    <div className="map-info mt-3">
                      <h4>Venue Overview</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        The venue spans across three main buildings with
                        multiple floors. Use this map to navigate between
                        different zones and find key locations.
                      </p>
                    </div>
                  </Tab>
                  <Tab eventKey="mainhall" title="Main Hall">
                    <div className="map-container">
                      {/* Replace with your actual main hall map */}
                      <img
                        src="/api/placeholder/1000/600?text=Main Hall Map"
                        alt="Main Hall Map"
                        className="img-fluid rounded"
                      />
                    </div>
                    <div className="map-info mt-3">
                      <h4>Main Hall Features</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        The Main Hall houses the primary stage, seating areas,
                        and main exhibition space. This is where opening and
                        closing ceremonies will take place.
                      </p>
                    </div>
                  </Tab>
                  <Tab eventKey="panels" title="Panel Rooms">
                    <div className="map-container">
                      {/* Replace with your actual panel rooms map */}
                      <img
                        src="/api/placeholder/1000/600?text=Panel Rooms Map"
                        alt="Panel Rooms Map"
                        className="img-fluid rounded"
                      />
                    </div>
                    <div className="map-info mt-3">
                      <h4>Panel & Workshop Rooms</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Panel rooms are located on the second floor. Each room
                        is equipped with audio-visual equipment and seating for
                        attendees.
                      </p>
                    </div>
                  </Tab>
                  <Tab eventKey="facilities" title="Facilities">
                    <div className="map-container">
                      {/* Replace with your actual facilities map */}
                      <img
                        src="/api/placeholder/1000/600?text=Facilities Map"
                        alt="Facilities Map"
                        className="img-fluid rounded"
                      />
                    </div>
                    <div className="map-info mt-3">
                      <h4>Facilities & Services</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Find restrooms, first aid stations, information booths,
                        food courts, and rest areas marked on this map.
                      </p>
                    </div>
                  </Tab>
                </Tabs>
              </div>

              <Row className="mt-5">
                <Col md={6}>
                  <div className="location-info">
                    <h3>Getting to the Venue</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      The venue is located in downtown and is accessible via
                      public transportation. Several parking options are
                      available nearby.
                    </p>

                    <h4 className="mt-4">Public Transportation</h4>
                    <ul>
                      <li>Bus Routes: #42, #56, #78</li>
                      <li>Subway: Central Station (Blue Line)</li>
                      <li>Light Rail: Convention Center Stop</li>
                    </ul>

                    <h4 className="mt-4">Parking Information</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Parking is available in the Convention Center Garage for
                      $15 per day. Additional parking can be found at
                      neighboring garages.
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="location-map">
                    {/* Replace with actual location map or embed Google Maps */}
                    <img
                      src="/api/placeholder/600/400?text=Location Map"
                      alt="Venue Location"
                      className="img-fluid rounded"
                    />
                  </div>
                </Col>
              </Row>

              <div className="download-links mt-4">
                <a href="#" className="btn btn-primary me-3">
                  Download All Maps (PDF)
                </a>
                <a href="#" className="btn btn-outline-primary">
                  Accessibility Guide
                </a>
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
