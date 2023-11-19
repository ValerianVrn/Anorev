import React, { useEffect, useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import BookingCalendar from '../components/BookingCalendar';
import './Home.css';

export default function Home() {
    const [imageHeight, setImageHeight] = useState(0);

    useEffect(() => {
        const calculateImageHeight = () => {
            const textOverlay = document.getElementById('text-overlay');
            const textOverlayHeight = textOverlay.offsetHeight;
            setImageHeight(textOverlayHeight);
        };

        // Initial calculation
        calculateImageHeight();

        // Recalculate on window resize
        window.addEventListener('resize', calculateImageHeight);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', calculateImageHeight);
        };
    }, []);

    return (
        <>
        <Container fluid className="mx-0 px-0 cover-container">
            <Image src="cover.jpg" className="w-100 object-fit-cover" style={{ height: imageHeight }}/>
            <Container id="text-overlay" className="p-5 gx-5 text-overlay">
                <h2 className="pt-5">Anorev</h2>
                <h1 className="pb-5">Service d'hypnose ericksonienne</h1>
            </Container>
        </Container>
        <Container className="p-5">
                <p>Bienvenue dans le monde de l’hypnose ericksonienne, où la transformation personnelle commence. Je suis Constant Verona, un hypnotiseur passionné par l’exploration des profondeurs de la psyché humaine pour aider chacun à surmonter ses défis et à atteindre son potentiel le plus élevé.</p>
                <p>Ma démarche repose sur la manière de faire de Milton Erickson. Cette approche permet une transformation subtile et durable. Je crois en l’adaptabilité, en l’écoute et en la confiance dans la relation avec vous. Chaque séance est une expérience unique, conçue sur mesure pour répondre à vos besoins spécifiques.</p>
                <p>Si vous êtes prêt à entamer votre voyage de transformation personnelle, n’hésitez pas à me contacter. Je suis là pour vous guider vers un avenir meilleur.</p>
        </Container>
        <Container className="p-5">
            <Row className="gx-5">
                <Col><h1>L’hypnose, là où je peux vous aider</h1></Col>
                <Col>
                    <p>Découvrez les domaines dans lesquels l’hypnose ericksonienne peut faire la différence :</p>
                    <ul>
                        <li>Gestion du stress et de l’anxiété</li>
                        <li>Arrêt du tabac</li>
                        <li>Perte de poids et gestion de l’alimentation</li>
                        <li>Confiance en soi et estime de soi</li>
                        <li>Gestion des phobies et des traumatismes</li>
                        <li>Amélioration des performances (sport, travail, études, etc.)</li>
                        <li>Gestion de la douleur</li>
                        <li>Sommeil de qualité et relaxation</li>
                    </ul>
                </Col>
            </Row>
        </Container>
        <Container className="p-5">
            <h1>Informations pratiques</h1>
            <Link to="/contact">
                <Button variant="success">Prendre rendez-vous</Button>
            </Link>
        </Container>
        <Container className="p-5">
            <h1>Mon approche</h1>                   
            <p>Je suis Constant Verona, un passionné de l’hypnose ericksonienne, une méthode puissante qui m’a permis d’en d’apprendre un peu plus sur les profondeurs de la psyché humaine et de guider les autres vers la transformation personnelle. Mais au-delà de mon rôle en tant qu’hypnotiseur, laissez-moi vous en dire un peu plus sur moi.</p>
            <p>Ma fascination pour le fonctionnement de la pensée et les mystères de la psyché humaine a été précoce. Durant ma propre quête de compréhension, j’ai eu l’occasion de rencontrer des professionnels de la santé mentale qui ont façonné ma vision de l’humain, de ses défis et de son potentiel.</p>
            <p>C’est cette curiosité profonde et cette passion pour l’aide aux autres qui m’ont amené à l’hypnose ericksonienne. J’ai découvert en elle un outil extraordinaire pour aider les individus à résoudre des problèmes, à surmonter des obstacles et à évoluer vers leur meilleure version.</p>
            <p>Ma démarche est ancrée dans l’approche de Milton Erickson. J’ai choisi cette voie pour sa subtilité, son respect de l’individualité de chaque personne et sa capacité à déclencher des changements durables.</p>
            <p>En tant qu’hypnotiseur ericksonien, mon objectif est de créer un espace de confiance où la communication authentique et la transformation personnelle sont encouragées. Chaque personne est unique, chaque séance est adaptée à vos besoins spécifiques.</p>
            <p>J’ai hâte de vous aider à découvrir votre potentiel caché à travers l’hypnose.</p>
        </Container>
        <Container className="p-5">
            <Row className="gx-5">
                <Col>
                    <Image src="office.jpg" fluid />
                </Col>
                <Col>
                    <h1>Le cabinet</h1>
                    <p>Le cabinet a été conçu pour créer un environnement apaisant et sécurisé. Chaque détail, de la décoration à l'aménagement des espaces, a été pensé pour favoriser une atmosphère de confiance. Nous croyons que votre bien-être commence dès le moment où vous franchissez notre porte.</p>
                </Col>
            </Row>
        </Container>
        <Container className="p-5">
            <Row className="gx-5">
                <Col>
                    <h1>L'hypnose ericksonienne</h1>
                    <p>L'hypnose ericksonienne est une approche bienveillante et puissante visant à explorer les ressources internes de chacun pour favoriser le changement positif. Contrairement aux idées préconçues, elle ne plonge pas dans un état de sommeil profond, mais plutôt dans un état de relaxation profonde où votre esprit est particulièrement réceptif aux suggestions positives.</p>
                    </Col>
                <Col>
                    <Image src="office.jpg" fluid />
                </Col>
            </Row>
        </Container>
        <Container className="p-5">
            <h1>Questions</h1>
            <p>Vous avez des questions? Je reste disponible pour échanger avec vous sur vos besoins, ma pratique, l’hypnose eriksonienne ou tout autre sujet.</p>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Comment se déroule une séance?</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Combien de temps dure une séance?</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Combien de séances sont recommandées?</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Pourquoi Choisir l'Hypnose Ericksonienne ?</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li><strong>Approche Personnalisée :</strong> Chaque séance est adaptée à vos besoins spécifiques.</li>
                            <li><strong>Bienveillance et Respect :</strong> Notre équipe pratique l'hypnose dans un cadre empreint de respect et de bienveillance.</li>
                            <li><strong>Changement Positif :</strong> Elle vise à stimuler le potentiel de changement positif déjà présent en vous.</li>
                            <li><strong>Solutions Durables :</strong> Les résultats sont souvent durables, car elle agit au niveau du subconscient.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>À Qui S'Adresse l'Hypnose Ericksonienne ?</Accordion.Header>
                    <Accordion.Body>
                        <p>Que vous cherchiez à surmonter des défis personnels, à améliorer votre bien-être mental ou à atteindre des objectifs spécifiques, l'hypnose ericksonienne peut être un outil efficace. Accessible à tous, elle offre une expérience positive et non invasive.</p>
                        <p>Le cabinet a été conçu pour créer un environnement apaisant et sécurisé. Chaque détail, de la décoration à l'aménagement des espaces, a été pensé pour favoriser une atmosphère de confiance. Nous croyons que votre bien-être commence dès le moment où vous franchissez notre porte.</p>                
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
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
        </>
    );
}