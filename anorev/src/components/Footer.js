import React from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

export default function Footer() {
    return (
        <> 
        <hr/>       
        <Stack id="footer" direction="horizontal" className="justify-content-center">
            <Row>
                <Col>
                    <Container>
                    <Image src="logo512.png" className="p-3" fluid/>
                    </Container>
                </Col>
            </Row>
            <Container>
                <span className="title">Anorev - Hypnose ericksonienne</span><br/>Constant Verona
            </Container>
            <Container className="d-flex align-items-center">
                <span class="material-icons">location_on</span>
                <Container>
                    6 avenue de Creil<br/>
                    Senlis 60300
                </Container>
            </Container>
            <Container className="d-flex align-items-center">
                <span class="material-icons">mail</span>
                <Container>
                    <a href="mailto:anorevhypnose@gmail.com" className="link-body-emphasis link-underline link-underline-opacity-0">anorevhypnose@gmail.com</a>
                </Container>
            </Container>
            <Container className="d-flex align-items-center">
                <span class="material-icons">call</span>
                <Container>
                    <a href="tel:+33749072925" className="link-body-emphasis link-underline link-underline-opacity-0">07 49 07 29 25</a>
                </Container>
            </Container>
        </Stack>
        </>
    );
}