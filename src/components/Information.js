import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Information() {
    return (
        <>
        <Row className="gx-5 gy-3">
            <Col lg>
                <Card className="h-100 text-bg-primary">
                    <Card.Header className="d-flex flex-column align-items-center justify-content-center"><span class="material-icons">call</span>Téléphone</Card.Header>
                    <Card.Body className="d-flex flex-column align-items-center justify-content-center bg-white text-primary">
                        <Card.Title href="tel:+33749072925">07 49 07 29 25</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg>
                <Card className="h-100 text-bg-primary">
                    <Card.Header className="d-flex flex-column align-items-center justify-content-center"><span class="material-icons">schedule</span>Horaires</Card.Header>
                    <Card.Body className="d-flex flex-column align-items-center justify-content-center bg-white text-primary">
                        <Card.Title>10h-19h</Card.Title>
                        <Card.Text>
                            Tous les mardis, jeudis, vendredis (semaines paires) et samedis (semaines impaires)<br/>
                            <small className="text-muted">Avec ou sans rendez-vous</small>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg>
                <Card className="h-100 text-bg-primary">
                    <Card.Header className="d-flex flex-column align-items-center justify-content-center"><span class="material-icons">euro</span>Tarif</Card.Header>
                    <Card.Body className="d-flex flex-column align-items-center justify-content-center bg-white text-primary">
                        <Card.Title>60€ la séance</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Container className="pt-4 d-flex justify-content-center">
            <Button variant="success" href="#contact">Plus d'informations</Button>
        </Container>
        </>
    );
}