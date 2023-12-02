import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BookingCalendar from './BookingCalendar';
import Schedule from './Schedule';

export default function Contact() {
    return (
        <>
        <section id="contact">
            <Container className="p-5">
                <h1>Contact</h1>
                <Row className="gy-5">
                    <Col xs={7}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5213.245604252889!2d2.574836648144457!3d49.20771470990557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e637a9047756af%3A0x1394a6565ef5904d!2sHypnose%20Ericksonienne%20-%20Constant%20Verona!5e0!3m2!1sen!2sfr!4v1700080157043!5m2!1sen!2sfr"
                            title="address"
                            loading="lazy"
                            width="100%"
                            height="100%">
                        </iframe>
                    </Col>
                    <Col xs={5}>
                        <Card className="py-3">
                            <Card.Body>
                                <Card.Title>Constant Verona</Card.Title>
                                <Card.Text className="d-flex align-items-center">
                                    <span class="material-icons">location_on</span>
                                    <Container>
                                        6 avenue de Creil<br/>
                                        Senlis 60300
                                    </Container>
                                </Card.Text>
                                <Card.Text className="d-flex align-items-center">
                                    <span class="material-icons">mail</span>
                                    <Container>
                                        <a href="mailto:anorevhypnose@gmail.com" className="link-body-emphasis link-underline link-underline-opacity-0">anorevhypnose@gmail.com</a>
                                    </Container>
                                </Card.Text>
                                <Card.Text className="d-flex align-items-center">
                                    <span class="material-icons">call</span>
                                    <Container>
                                        <a href="tel:+33749072925" className="link-body-emphasis link-underline link-underline-opacity-0">07 49 07 29 25</a>
                                    </Container>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-center">
                        <Schedule/>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-center">
                        <BookingCalendar/>
                    </Col>
                    <Container className="pt-4 d-flex justify-content-center">
                        <Button variant="success" href="">Prendre rendez-vous en ligne</Button>
                    </Container>
                </Row>
            </Container>
        </section>
        </>
    );
}