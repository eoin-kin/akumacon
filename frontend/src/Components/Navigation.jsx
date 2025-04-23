import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./Navigation.css"
export function Navigation() {
    return (
        <Navbar expand="lg" className="custom-navbar">
            <Container>
                <Navbar.Brand href="/" className="text-light">Akumakon</Navbar.Brand>
                {/*
                Find correct utility classes to improve accessibility on mobile
                by making the badge lighter for contrast

                Make dropdown on mobile white with black text
                */}
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="ms-auto">
                        <NavLink to="/" end className={({ isActive }) => 'nav-link text-light' + (isActive ? ' active' : '')}>
                            Home
                        </NavLink>
                        <NavLink to="/about" className={({ isActive }) => 'nav-link text-light' + (isActive ? ' active' : '')}>
                            About
                        </NavLink>
                        <NavLink to="/guests" className={({ isActive }) => 'nav-link text-light' + (isActive ? ' active' : '')}>
                            Guests
                        </NavLink>
                        <NavLink to="/contact" className={({ isActive }) => 'nav-link text-light' + (isActive ? ' active' : '')}>
                            Contact
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;

