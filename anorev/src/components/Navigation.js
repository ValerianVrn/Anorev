import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Navigation() {
  return (
      <Navbar expand="lg" sticky="top" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Anorev</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto">
              <Nav.Link href="#home">Accueil</Nav.Link>
              <NavDropdown title="À propos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#me">Ma démarche</NavDropdown.Item>
                <NavDropdown.Item href="#office">Le cabinet</NavDropdown.Item>
                <NavDropdown.Item href="#erickson-hypnosis">L'hypnose ericksonienne</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Questions" id="basic-nav-dropdown">
                <NavDropdown.Item href="#questions-session-description">Comment se déroule une séance?</NavDropdown.Item>
                <NavDropdown.Item href="#questions-session-duration">Combien de temps dure une séance?</NavDropdown.Item>
                <NavDropdown.Item href="#questions-session-number">Combien de séances sont recommandées?</NavDropdown.Item>
                <NavDropdown.Item href="#questions-why-erickson">Pourquoi choisir l'hypnose ericksonienne?</NavDropdown.Item>
              </NavDropdown>
                <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}