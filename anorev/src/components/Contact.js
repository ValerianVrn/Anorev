import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Element } from 'react-scroll';
import BookingCalendar from '../components/BookingCalendar';

export default function Contact() {
    return (
        <>
        <Element id="contact">
            <section>
                <Container className="p-5">
                    <h1>Contact</h1>
                    <Row className="gx-5">
                        <Col>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5213.245604252889!2d2.574836648144457!3d49.20771470990557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e637a9047756af%3A0x1394a6565ef5904d!2sHypnose%20Ericksonienne%20-%20Constant%20Verona!5e0!3m2!1sen!2sfr!4v1700080157043!5m2!1sen!2sfr"
                                loading="lazy"
                                width="100%"
                                height="100%">
                            </iframe>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                <Card.Title>Constant Verona</Card.Title>
                                <Card.Text>
                                    6 avenue de Creil<br />
                                    Senlis 60300
                                </Card.Text>
                                <Card.Text>
                                    <a href="mailto:anorevhypnose@gmail.com">anorevhypnose@gmail.com</a>
                                </Card.Text>
                                <Card.Text>
                                    <a href="tel:0749072925">07 49 07 29 25</a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <BookingCalendar />
                    </Row>
                </Container>
            </section>
        </Element>
        </>
    );
}