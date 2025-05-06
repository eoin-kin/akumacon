import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

export function Navigation() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="/" className="text-light">
          <img src="/Akumacon.png" alt="Akumacon" style={{ width: "10rem" }} />{" "}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="navbar-dark"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink
              to="/ticketselection"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
            >
              Tickets
            </NavLink>
            <NavLink
              to="/info"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
            >
              Info
            </NavLink>
            <NavLink
              to="/applications"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
            >
              Applications
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
            >
              Gallery
            </NavLink>
            <NavLink
              to="/more"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
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
