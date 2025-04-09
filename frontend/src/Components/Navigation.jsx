import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export function Navigation() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Akumacon</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink to="/" end className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
                            Home
                        </NavLink>
                        <NavLink to="/about" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
                            About
                        </NavLink>
                        <NavLink to="/services" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
                            Services
                        </NavLink>
                        <NavLink to="/contact" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
                            Contact
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;

