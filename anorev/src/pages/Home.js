import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <Container>
                <Row className="p-5 gx-5">
                    <Col><Image src="office.jpg" fluid /></Col>
                    <Col>
                        <h1>Découvrez l’Hypnose</h1>
                        <p>Bienvenue dans le monde de l’hypnose ericksonienne, où la transformation personnelle commence. Je suis Constant Verona, un hypnotiseur passionné par l’exploration des profondeurs de la psyché humaine pour aider chacun à surmonter ses défis et à atteindre son potentiel le plus élevé.</p>
                        <p>Ma démarche repose sur la manière de faire de Milton Erickson. Cette approche permet une transformation subtile et durable. Je crois en l’adaptabilité, en l’écoute et en la confiance dans la relation avec vous. Chaque séance est une expérience unique, conçue sur mesure pour répondre à vos besoins spécifiques.</p>
                        <p>Si vous êtes prêt à entamer votre voyage de transformation personnelle, n’hésitez pas à me contacter. Je suis là pour vous guider vers un avenir meilleur.</p>
                    </Col>
                </Row>
                <Row>
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
                <Row>
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
            <Container>
                <p>Vous avez des questions? Je reste disponible pour échanger avec vous sur vos besoins, ma pratique, l’hypnose eriksonienne ou tout autre sujet.</p>
                <Link to="/contact"><Button variant="success">Prendre rendez-vous</Button></Link>
            </Container>
        </>
    );
}