import React from "react";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Navigation({ handleNavItemClick }) {
  return (
      <Navbar expand="lg" sticky="top" bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home" className="title">
            <Image alt="logo" src="logo512.png" width="30" height="30" className="d-inline-block align-top" />{' '}Anorev
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto">
              <Nav.Link href="#home">Accueil</Nav.Link>
              <NavDropdown title="À propos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#me">Mon approche</NavDropdown.Item>
                <NavDropdown.Item href="#office">Le cabinet</NavDropdown.Item>
                <NavDropdown.Item href="#erickson-hypnosis">L'hypnose ericksonienne</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Questions" id="basic-nav-dropdown">
                <NavDropdown.Item href="#questions-session-description" onClick={() => handleNavItemClick('0')}>Comment se déroule une séance?</NavDropdown.Item>
                <NavDropdown.Item href="#questions-session-duration" onClick={() => handleNavItemClick('1')}>Combien de temps dure une séance?</NavDropdown.Item>
                <NavDropdown.Item href="#questions-session-number" onClick={() => handleNavItemClick('2')}>Combien de séances sont recommandées?</NavDropdown.Item>
                <NavDropdown.Item href="#questions-why-erickson" onClick={() => handleNavItemClick('3')}>Pourquoi choisir l'hypnose ericksonienne?</NavDropdown.Item>
              </NavDropdown>
                <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}