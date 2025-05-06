import React from "react";
import Navigation from "../Components/Navigation.jsx";
import { Countdown } from "../Components/Countdown.jsx";
import { Button } from "react-bootstrap";

export function Home() {
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
            backgroundImage: "url('/banner.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100vw",
            height: "0",
            paddingBottom: "33.33%", // This creates a 16:9 aspect ratio (adjust as needed)
            position: "relative",
          }}
        >
          <Button
            size="sm"
            className="fw-bold border-0 px-5 py-1 gla responsive-ticket-button"
            href="/ticketselection"
          >
            <span className="d-none d-sm-inline">GET TICKETS</span>
            <span className="d-sm-none">Tickets</span>
          </Button>
        </div>
      </div>

      <Countdown />
      {/*Create a suitable bottom bar component for rendering on every page*/}
    </>
  );
}

export default Home;
