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

// Edit to update FAQ
const faqData = [
  {
    question: "What is Akumakon?",
    answer:
      "Akumakon is one of the longest running Anime and Manga conventions in Ireland. Held over a weekend, and run by students of The University of Galway, it is a non-profit convention with many events used to raise money for charity. Over two thousand people attended Akumakon 2024, making the convention one of the largest of its kind in Ireland. Ran every year (except 2021 and 2022 those don't count) since 2010, Akumakon 2025 will be our twelfth event, and we're hoping to make it bigger and better than ever.",
  },
  {
    question: "When is Akumakon 2025?",
    answer:
      "Akumakon 2025 will take place over the weekend of February 14th to the 16th. Our doors will open at 17:00 on Friday, and will close at 19:00 on Sunday.",
  },
  {
    question: "Where does Akumakon take place?",
    answer:
      "Every year, Akumakon takes place on the campus of University of Galway (formally NUI Galway), in Áras Na Mac Léinn.",
  },
  {
    question: "How much are tickets and where to buy them?",
    answer: `Our ticket options include:\n
 
            The Weekend Pass @ €25 (Access for the full weekend)\n

            The Day Pass @ €15 (Access for a single day)\n

            Tickets are available on the day of the convention at the Front Desk.\n

            For children under 12, The Weekend Pass is €15 and The Day Pass is €10.

            Children under 5 have free entry.\n

            And of course, entry on Friday is free for all.`,
  },

  {
    question: "Will I be able to buy tickets online?",
    answer:
      "Online tickets are no longer available, however you can still purchase them at the con!",
  },
  {
    question: "Is the venue wheelchair accessible?",
    answer:
      "Yes. The entire venue is wheelchair accessible, with an elevator to the second floor.",
  },
  {
    question: "Do we have a con book?",
    answer:
      "Not quite yet, but there will be one in the future! Keep an eye out!",
  },
  {
    question: "Will I be able to buy food there?",
    answer:
      "Yes. There will be food from the Wa Cafe, as well as additional outdoor vendors.",
  },
  {
    question: "What if I have a question during the convention?",
    answer:
      "Feel free stop anyone wearing a volunteer or committee t-shirt. We're here to help!",
  },
  {
    question: "Will parking be available?",
    answer:
      "Parking information is available on our university's website linked Here!",
  },
  {
    question: "My question wasn't here. What do I do?",
    answer:
      "If we've missed something, feel free to let us know! Fill out our Contact Us form here.",
  },
];

// Edit to update Staff
const crewData = [
  {
    name: "First Last",
    position: "Position",
    image: "/api/placeholder/200/200",
  },
  {
    name: "First Last",
    position: "Position",
    image: "/api/placeholder/200/200",
  },
  {
    name: "First Last",
    position: "Position",
    image: "/api/placeholder/200/200",
  },
  {
    name: "First Last",
    position: "Position",
    image: "/api/placeholder/200/200",
  },
  {
    name: "First Last",
    position: "Position",
    image: "/api/placeholder/200/200",
  },
  {
    name: "First Last",
    position: "Position",
    image: "/api/placeholder/200/200",
  },
];

// Titles and URLs for rules
const rulesData = [
  {
    title: "General Rules",
    url: "https://www.akumakon.com/_files/ugd/aeafb7_4e86c445d29041cbb2e60d9e4815439a.pdf",
  },
  {
    title: "Cosplay Rules",
    url: "https://www.akumakon.com/_files/ugd/aeafb7_24e66cf7970f44b98db34bc4eff7033f.pdf",
  },
  {
    title: "Artist Alley Rules",
    url: "https://www.akumakon.com/_files/ugd/aeafb7_b8ea8b6e74e74de98b7acf9071fd87e6.pdf",
  },
  {
    title: "Trade Hall",
    url: "https://www.akumakon.com/_files/ugd/aeafb7_6ff663abfa4349ed8ff62c4a0406b81c.pdf",
  },
  {
    title: "Ticket Terms and Conditions",
    url: "https://www.akumakon.com/_files/ugd/aeafb7_e47e01f410ed4f509b6917ec9123e6d2.pdf",
  },
];

// Parent letter content
const parentLetterContent = `
To all parents and guardians,

Your child may want to come to Akumakon, but you might not have heard of us before.
If so, we would like to start by giving you some information about Akumakon.

Akumakon is a non-profit, student-run convention in the heart of the University of Galway.
We offer a place where people of all ages can come to enjoy not only Japanese Anime, Manga and Japanese Culture as a whole, but also Video Games and Cosplay (the practice of dressing up as a character from a film, book, or video game).

Everyone organising the convention is a volunteer, with each and every one of us wanting to provide
a place to celebrate all things Japanese, and pass on a love of Japanese culture to others.

Every year, we take the opportunity to fundraise for charity, with over €15,000 being raised last year for Galway Autism Partnership (GAP). Meaning that since our first convention in 2010, we've raised over €43,000. This year will be no different, and the hope is to beat last year's number.

At the convention, there are Anime screenings, best Cosplay competitions, Panels (interactive discussions or Q&As) run by Special Guests and members of the public, Video Game Tournaments and Special Events (previous years have seen Kendo demonstrations and Fire Shows).

There is also a Trade Hall and Artist Alley, where attendees can purchase original drawings,
paintings, and posters done by the artists there, along with memorabilia and treats difficult to find in your typical Irish shops.

With regards to your child, we take every precaution to ensure a safe and enjoyable experience.
We do require that children be accompanied by an adult. However, we will of course have security and staff on the lookout for any issues. All cosplayers will be in child-friendly costumes.
All of our panels are checked prior to the convention for any 18+ material, and any panel or screening that isn't child-friendly will require ID at the door before we allow an attendee entry.

We hope we've given you a better understanding of what Akumakon is,
and reassured you on the safety of your child at our convention.

If you have any questions, please don't hesitate to ask.
Our email is akumakon@socs.universityofgalway.ie. 

We'll see you at Akumakon 2025!

Cheers,  
The Akumakon Team
`;

//Page component
function More() {
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
              <Modal.Title>Letter to Parents</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: "var(--light)" }}>
              <div
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.6",
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
