import React, { useEffect, useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import { Element } from 'react-scroll';

export default function Questions() {
    return (
        <>
        <section>
            <Container className="p-5">
                <h1>Questions</h1>
                <p>Vous avez des questions? Je reste disponible pour échanger avec vous sur vos besoins, ma pratique, l’hypnose eriksonienne ou tout autre sujet.</p>
                <Accordion>
                    <Element id="questions-session-description">
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
                    </Element>
                    <Element id="questions-session-duration">
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
                    </Element>
                        <Element id="questions-session-number">
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
                    </Element>
                    <Element id="questions-why-erickson">
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Pourquoi choisir l'hypnose ericksonienne?</Accordion.Header>
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
                    </Element>
                </Accordion>
            </Container>
        </section>
        </>
    );
}