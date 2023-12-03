import React from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

export default function Footer() {
    return (
        <> 
        <hr/>
        <Container>
            <Row id="footer" className="gy-2">
                <Col xs className="d-flex align-items-center justify-content-center">
                    <Row>
                        <Col xs={3}>
                            <Image src="logo512.png" className="p-1" fluid/>
                        </Col>
                        <Col xs={9} className="d-flex flex-column justify-content-center">
                            <p><span className="title">Anorev - Hypnose ericksonienne</span><br/>Constant Verona</p>
                        </Col>
                    </Row>
                </Col>
                <Col xs className="d-flex align-items-center justify-content-center">
                    <span class="material-icons pe-2">location_on</span><span className="text-nowrap">6 avenue de Creil<br/>Senlis 60300</span>
                </Col>
                <Col xs className="d-flex align-items-center justify-content-center flex-column">
                    <Container className="d-flex align-items-center p-2">
                        <span class="material-icons pe-2">mail</span>
                        <a href="mailto:anorevhypnose@gmail.com" className="link-body-emphasis link-underline link-underline-opacity-0">anorevhypnose@gmail.com</a>
                    </Container>
                    <Container className="d-flex align-items-center p-2">
                        <span class="material-icons pe-2">call</span>
                        <a href="tel:+33749072925" className="link-body-emphasis link-underline link-underline-opacity-0 text-nowrap">07 49 07 29 25</a>
                    </Container>
                </Col>
            </Row>
        </Container>
        </>
    );
}