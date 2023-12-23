import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export default function About() {
    return (
        <>
        <section>
            <article id="me" className="py-3">
                <h1>Mon approche</h1>                   
                <p>Je suis Constant Verona, un passionné de l’hypnose ericksonienne, une méthode puissante qui m’a permis d’en d’apprendre un peu plus sur les profondeurs de la psyché humaine et de guider les autres vers la transformation personnelle. Mais au-delà de mon rôle en tant qu’hypnotiseur, laissez-moi vous en dire un peu plus sur moi.</p>
                <p>La pensée humaine m'a toujours fasciné. J’ai eu l’occasion de rencontrer des professionnels de la santé mentale qui ont façonné ma vision de l’humain, de ses défis et de son potentiel.</p>
                <p>C’est cette curiosité profonde et l'envie d'aider les autres qui m’ont amené à l’apprentissage de l'hypnose ericksonienne. J’ai découvert en elle un outil extraordinaire pour aider les individus à résoudre des problèmes, à surmonter des obstacles et à évoluer vers leur meilleure version.</p>
                <p>Ma démarche est ancrée dans l’approche de Milton Erickson. J’ai choisi cette voie pour sa subtilité, son respect de l’individualité de chaque personne et sa capacité à déclencher des changements durables.</p>
                <p>En tant qu’hypnotiseur ericksonien, mon objectif est de créer un espace de confiance où la communication authentique et la transformation sont encouragées. Chaque personne est unique, chaque séance est adaptée à vos besoins.</p>
                <p>J’ai hâte de vous aider à découvrir votre potentiel caché à travers l’hypnose.</p>
            </article>
            <hr/>
            <article id="office" className="py-3">
                <Row className="gx-5">
                    <Col lg={{ order: 1 }}>
                        <h1>Le cabinet</h1>
                        <p>Le cabinet est situé à quelques minutes du centre-ville de Senlis dans le centre d'affaires de l'obélisque.</p>
                        <p>Vous y trouverez un parking réservé aux clients.</p>
                    </Col>
                    <Col lg>
                        <Image src="office.jpg" fluid />
                    </Col>
                </Row>
            </article>
            <hr/>
            <article id="erickson-hypnosis" className="py-3">
                <h1>L'hypnose ericksonienne</h1>
                <p>L'hypnose ericksonienne est une approche bienveillante et puissante visant à explorer les ressources internes de chacun pour favoriser le changement positif. Contrairement aux idées préconçues, elle ne plonge pas dans un état de sommeil profond, mais plutôt dans un état de relaxation profonde où votre esprit est particulièrement réceptif aux suggestions.</p>
            </article>
        </section>
        </>
    );
}