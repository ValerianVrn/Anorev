import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export default function About() {
    return (
        <>
        <section>
            <article>
                <Container id="me" className="p-5">
                    <h1>Mon approche</h1>                   
                    <p>Je suis Constant Verona, un passionné de l’hypnose ericksonienne, une méthode puissante qui m’a permis d’en d’apprendre un peu plus sur les profondeurs de la psyché humaine et de guider les autres vers la transformation personnelle. Mais au-delà de mon rôle en tant qu’hypnotiseur, laissez-moi vous en dire un peu plus sur moi.</p>
                    <p>Ma fascination pour le fonctionnement de la pensée et les mystères de la psyché humaine a été précoce. Durant ma propre quête de compréhension, j’ai eu l’occasion de rencontrer des professionnels de la santé mentale qui ont façonné ma vision de l’humain, de ses défis et de son potentiel.</p>
                    <p>C’est cette curiosité profonde et cette passion pour l’aide aux autres qui m’ont amené à l’hypnose ericksonienne. J’ai découvert en elle un outil extraordinaire pour aider les individus à résoudre des problèmes, à surmonter des obstacles et à évoluer vers leur meilleure version.</p>
                    <p>Ma démarche est ancrée dans l’approche de Milton Erickson. J’ai choisi cette voie pour sa subtilité, son respect de l’individualité de chaque personne et sa capacité à déclencher des changements durables.</p>
                    <p>En tant qu’hypnotiseur ericksonien, mon objectif est de créer un espace de confiance où la communication authentique et la transformation personnelle sont encouragées. Chaque personne est unique, chaque séance est adaptée à vos besoins spécifiques.</p>
                    <p>J’ai hâte de vous aider à découvrir votre potentiel caché à travers l’hypnose.</p>
                </Container>
            </article>
            <hr/>
            <article>
                <Container id="office" className="p-5">
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
            </article>
            <hr/>
            <article>                
                <Container id="erickson-hypnosis" className="p-5">
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
            </article>
        </section>
        </>
    );
}