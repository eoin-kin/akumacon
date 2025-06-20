import React from "react";
import Navigation from "../Components/Navigation.jsx";
import { Countdown } from "../Components/Countdown.jsx";
import { Button } from "react-bootstrap";
import InfoSlider from "../Components/InfoSlider.jsx";
import { useHomeContent } from "../hooks/useContent.js";

export function Home() {
  const { content, loading, error } = useHomeContent();

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

  // Use content from CMS or fallback to defaults
  const heroContent = content?.hero || {};
  const aboutContent = content?.about || {};

  return (
    <>
      <Navigation />
      <div
        className="d-flex align-items-center justify-content-center text-center"
        style={{
          background: "var(--primary)",
          paddingTop: "1rem",
        }}
      >
        <div
          style={{
            backgroundImage: `url('${
              heroContent.banner_image || "/banner.jpg"
            }')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100vw",
            height: "0",
            paddingBottom: "33.33%",
            position: "relative",
          }}
        >
          <Button
            size="sm"
            className="fw-bold border-0 px-5 py-1 gla responsive-ticket-button"
            href={heroContent.ticket_link || "/ticketselection"}
          >
            <span className="d-none d-sm-inline">
              {heroContent.ticket_text_desktop || "GET TICKETS"}
            </span>
            <span className="d-sm-none">
              {heroContent.ticket_text_mobile || "Tickets"}
            </span>
          </Button>
        </div>
      </div>

      <div
        className="container-fluid p-4"
        style={{
          background: "linear-gradient(var(--secondary), var(--lowlight))",
        }}
      >
        <div className="row">
          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center p-1 rounded-3 bg-transparent">
            <img
              src={aboutContent.logo_image || "./Akumacon.png"}
              alt={aboutContent.logo_alt || "Event"}
              className="img-fluid rounded-3 shadow-lg"
              style={{
                maxHeight: "80vh",
                objectFit: "cover",
                backgroundColor: "var(--highlight)",
              }}
            />
          </div>
          <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
            <p
              style={{
                color: "var(--dark)",
                backgroundColor: "var(--highlight)",
              }}
              className="fw-bold p-3 rounded-3 shadow-lg"
            >
              {aboutContent.description || "Default description text..."}
            </p>
            <Button
              size="lg"
              className="fw-bold border-0 px-5 py-1 gla w-50"
              href={aboutContent.info_button_link || "/info"}
            >
              {aboutContent.info_button_text || "Info"}
            </Button>
          </div>
        </div>
      </div>
      <InfoSlider title="Galway Area Info" />
      <Countdown />
    </>
  );
}

export default Home;
