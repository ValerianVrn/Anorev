import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <Navbar expand="lg" sticky="top" bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">Anorev</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Accueil</Nav.Link>
                <NavDropdown title="À propos" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/about#me">Ma démarche</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/about#office">Le cabinet</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/about#hypnose">L'hypnose ericksonienne</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Questions" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/questions#sessiondescription">Comment se déroule une séance?</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/questions#sessionduration">Combien de temps dure une séance?</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/questions#sessionnumber">Combien de séances sont recommandées?</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}