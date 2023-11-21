import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import About from '../components/About';
import Contact from '../components/Contact';
import Questions from '../components/Questions';
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
        <Container id="home" fluid className="mx-0 px-0 cover-container">
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
                <Button variant="success">Prendre rendez-vous</Button>
        </Container>
        <About/>
        <Questions/>
        <Contact/>
        </>
    );
}