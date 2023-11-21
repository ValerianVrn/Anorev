import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-scroll';
import { scroller } from 'react-scroll';

export default function Navigation() {
  
  const scrollToSection = (target) => {
    scroller.scrollTo(target, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
      <Navbar expand="lg" sticky="top" bg="dark" data-bs-theme="dark">
        <Container>
          <Link to="home" spy={true} smooth={true} duration={250}><Navbar.Brand>Anorev</Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="home" spy={true} smooth={true} duration={250}><Nav.Link>Accueil</Nav.Link></Link>
              <NavDropdown title="À propos" id="basic-nav-dropdown">
                <Link to="me" spy={true} smooth={true} duration={250}><NavDropdown.Item>Ma démarche</NavDropdown.Item></Link>
                <Link to="office" spy={true} smooth={true} duration={250}><NavDropdown.Item>Le cabinet</NavDropdown.Item></Link>
                <Link to="erickson-hypnosis" spy={true} smooth={true} duration={250}><NavDropdown.Item>L'hypnose ericksonienne</NavDropdown.Item></Link>
              </NavDropdown>
              <NavDropdown title="Questions" id="basic-nav-dropdown">
                <Link to="questions-session-description" spy={true} smooth={true} duration={250}><NavDropdown.Item>Comment se déroule une séance?</NavDropdown.Item></Link>
                <Link to="questions-session-duration" spy={true} smooth={true} duration={250}><NavDropdown.Item>Combien de temps dure une séance?</NavDropdown.Item></Link>
                <Link to="questions-session-number" spy={true} smooth={true} duration={250}><NavDropdown.Item>Combien de séances sont recommandées?</NavDropdown.Item></Link>
                <Link to="questions-why-erickson" spy={true} smooth={true} duration={250}><NavDropdown.Item>Pourquoi choisir l'hypnose ericksonienne?</NavDropdown.Item></Link>
              </NavDropdown>
              <Link to="contact" spy={true} smooth={true} duration={250}><Nav.Link>Contact</Nav.Link></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}