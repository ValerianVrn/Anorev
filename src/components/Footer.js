import React from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

export default function Footer() {
    return (
        <>
        <Container className="p-2 d-flex align-items-center justify-content-center">
            <Row>
                <Col xs={12} >
                    <p className="text-center"><span className="title">Anorev - Hypnose ericksonienne</span><br/>Constant Verona</p>
                </Col>
                <Col xs={{ span: 2, offset: 5 }} >
                    <Image src="logo512.png" fluid/>
                </Col>
            </Row>            
        </Container>
        <Container className="p-2">
            <Row className="gy-2">
                <Col xs className="d-flex align-items-center justify-content-center">
                    <span class="material-icons pe-2">location_on</span><span className="text-nowrap">6 avenue de Creil, Senlis 60300</span>
                </Col>
                <Col xs className="d-flex align-items-center justify-content-center">
                    <span class="material-icons pe-2">mail</span>
                    <a href="mailto:anorevhypnose@gmail.com" className="text-white link-underline">anorevhypnose@gmail.com</a>
                </Col>
                <Col xs className="d-flex align-items-center justify-content-center">
                    <span class="material-icons pe-2">call</span>
                    <a href="tel:+33749072925" className="text-white link-underline link-underline-opacity-0 text-nowrap">07 49 07 29 25</a>
                </Col>
            </Row>
        </Container>
        </>
    );
}