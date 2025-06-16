import React from "react";
import Navigation from "../Components/Navigation.jsx";
import { Countdown } from "../Components/Countdown.jsx";
import { Button } from "react-bootstrap";
import InfoSlider from "../Components/InfoSlider.jsx";

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
      <div
        className="container-fluid p-4"
        style={{
          background: "linear-gradient(var(--secondary), var(--lowlight))",
        }}
      >
        <div className="row">
          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center p-1 rounded-3 bg-transparent">
            <img
              src="./Akumacon.png"
              alt="Event"
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
              Akumakon is one of the longest running Anime and Manga conventions
              in Ireland. Held over a weekend each year, and run by the
              University of Galway Anime and Manga Society, it is a student-led
              non-profit convention with, with all profits going to charity.
              Over two thousand people attended Akumakon 2024, making the
              convention one of the largest of its kind in Ireland. Ran every
              year (except 2021 and 2022, those don't count!) since 2010,
              Akumakon 2025 will be our twelvth event, and we're hoping to make
              it bigger and better than ever. Find out more information about
              Akumakon, our committee, and what we do, on our InfoS page.
            </p>
            <Button
              size="lg"
              className="fw-bold border-0 px-5 py-1 gla w-50 "
              href="/info"
            >
              Info
            </Button>
          </div>
        </div>
      </div>
      <InfoSlider />
    </>
  );
}

export default Home;
