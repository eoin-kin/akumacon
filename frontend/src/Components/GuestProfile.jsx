import { Col, Container, Image, Row } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import React from "react";

// GuestProfile component to display information about a guest
// Accepts props for the guest's name, image, and description
const GuestProfile = (props) => {
  return (
    <>
      <Container>
        <div
          className="shadow-lg p-4 rounded-5"
          style={{
            backgroundImage: "url('/border.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "var(--primary)",
          }}
        >
          <Row>
            <Col className="d-flex justify-content-center">
              <Image
                src={props.image}
                alt="Guest Profile"
                roundedCircle
                className="shadow-lg"
                height={"100%"}
              />
            </Col>
            <Col
              lg={3}
              className="d-none d-lg-flex justify-content-center align-items-center"
            >
              <SocialIcon
                url={props.social}
                href={props.url}
                style={{ height: "70%", width: "70%", padding: "40%" }}
              />
            </Col>
            <Col>
              <h1
                className="px-1 text-center fw-bolder text-shadow"
                style={{ color: "var(--highlight)" }}
              >
                {props.name}
              </h1>
              <h4
                className="px-1 py-1 text-center fw-bolder text-shadow"
                style={{ color: "var(--highlight)" }}
              >
                {props.title}
              </h4>
              <h5
                className="px-1 py-1 text-center fw-bolder text-shadow"
                style={{ color: "var(--highlight)" }}
              >
                {props.pronouns}
              </h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="px-1 mx-lg-4 text-center fw-bolder text-shadow lead">
                {props.bio}
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export function GuestsProfileReversed(props) {
  return (
    <>
      <Container>
        <div
          className="shadow-lg p-4 rounded-5"
          style={{
            backgroundImage: "url('/border.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "var(--primary)",
          }}
        >
          <Row>
            <Col>
              <h1
                className="px-1 text-center fw-bolder text-shadow"
                style={{ color: "var(--highlight)" }}
              >
                {props.name}
              </h1>
              <h4
                className="px-1 py-1 text-center fw-bolder text-shadow"
                style={{ color: "var(--highlight)" }}
              >
                {props.title}
              </h4>
              <h5
                className="px-1 py-1 text-center fw-bolder text-shadow"
                style={{ color: "var(--highlight)" }}
              >
                {props.pronouns}
              </h5>
            </Col>
            <Col
              lg={3}
              className="d-none d-lg-flex justify-content-center align-items-center"
            >
              <SocialIcon
                url={props.social}
                href={props.url}
                style={{ height: "70%", width: "70%", padding: "40%" }}
              />
            </Col>
            <Col className="d-flex justify-content-center">
              <Image
                src={props.image}
                alt="Guest Profile"
                roundedCircle
                className="shadow-lg"
                height={"100%"}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="px-1 mx-lg-4 text-center fw-bolder text-shadow lead">
                {props.bio}
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default GuestProfile;
