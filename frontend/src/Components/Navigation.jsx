import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

// Navigation component for the website
// Provides links to different pages and displays the Akumakon logo
export function Navigation() {
  return (
    <Navbar
      expand="lg"
      style={{
        backgroundColor: "var(--primary)",
        position: "sticky", // Keeps the navbar fixed at the top
      }}
    >
      <Container>
        {/* Brand logo linking to the homepage */}
        <Navbar.Brand href="/" className="text-light">
          <img src="/Akumacon.png" alt="Akumakon" style={{ width: "10rem" }} />
        </Navbar.Brand>

        {/* Toggler for mobile view */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ borderColor: "rgba(255, 255, 255, 0.5)" }}
        />

        {/* Collapsible navigation links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Navigation links with dynamic styling based on active state */}
            <NavLink
              to="/ticketselection"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
              style={({ isActive }) => ({
                color: isActive ? "var(--highlight)" : "var(--light)",
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              Tickets
            </NavLink>
            <NavLink
              to="/info"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
              style={({ isActive }) => ({
                color: isActive ? "var(--highlight)" : "var(--light)",
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              Info
            </NavLink>
            <NavLink
              to="/applications"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
              style={({ isActive }) => ({
                color: isActive ? "var(--highlight)" : "var(--light)",
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              Applications
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
              style={({ isActive }) => ({
                color: isActive ? "var(--highlight)" : "var(--light)",
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              Gallery
            </NavLink>
            <NavLink
              to="/more"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
              style={({ isActive }) => ({
                color: isActive ? "var(--highlight)" : "var(--light)",
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              More
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
