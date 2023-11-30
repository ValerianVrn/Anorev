import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';

export default function Questions({ activeKey, handleAccordionToggle }) {
    return (
        <>
        <section>
            <Container fluid className="mx-0 px-0 bg-light">
                <Container className="p-5">
                    <h1>Questions</h1>
                    <Accordion className="py-3" activeKey={activeKey} onSelect={handleAccordionToggle}>
                        <Accordion.Item id="questions-session-description" eventKey="0">
                            <Accordion.Header>Comment se déroule une séance?</Accordion.Header>
                            <Accordion.Body>
                                <p>Une séance d'hypnose avec moi est une expérience unique et personnalisée. Tout commence par une discussion initiale où nous échangeons sur vos objectifs, vos préoccupations et vos attentes. Je souhaite comprendre votre situation de manière approfondie pour adapter au mieux la séance à vos besoins spécifiques.</p>
                                <p>Ensuite, nous entamons la séance d'hypnose proprement dite. Vous serez confortablement installé, et je vous guiderai à travers un processus de relaxation profonde. L'hypnose n'est pas un état de sommeil, mais plutôt un état de concentration intense, similaire à la méditation.</p>
                                <p>Pendant la séance, je vous fournirai des suggestions positives et ciblées, en travaillant sur les aspects que nous avons discutés au début. Vous restez conscient et en contrôle à tout moment, et vous pouvez interagir avec moi si nécessaire.</p>
                                <p>Chaque séance est unique, car elle s'adapte à vos besoins spécifiques. Mon objectif est de vous aider à atteindre vos objectifs, que ce soit pour surmonter des habitudes indésirables, gérer le stress, ou améliorer divers aspects de votre vie. La confiance et le respect mutuel sont au cœur de notre collaboration, et je suis là pour vous guider tout au long du processus.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item id="questions-session-duration" eventKey="1">
                            <Accordion.Header>Combien de temps dure une séance?</Accordion.Header>
                            <Accordion.Body>
                                <p>La durée d'une séance d'hypnose peut varier en fonction des besoins spécifiques de chaque individu. En général, une séance dure généralement 60 minutes. Cependant, cette plage de temps peut être ajustée en fonction des objectifs spécifiques que nous cherchons à atteindre.</p>
                                <p>La première séance pourrait prendre un peu plus de temps car nous consacrerons du temps à discuter de votre situation, de vos objectifs et à répondre à toutes vos questions. C'est une étape importante pour assurer que la séance d'hypnose soit parfaitement adaptée à vos besoins.</p>
                                <p>Je crois en la qualité plutôt qu'en la quantité, donc chaque séance est conçue pour être aussi efficace et bénéfique que possible. L'objectif est d'atteindre les résultats souhaités tout en respectant votre confort et votre bien-être pendant le processus d'hypnose.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item id="questions-session-number" eventKey="2">
                            <Accordion.Header>Combien de séances sont recommandées?</Accordion.Header>
                            <Accordion.Body>
                                <p>Le nombre de séances recommandées peut varier en fonction de la nature spécifique de la situation et des objectifs que vous souhaitez atteindre. Lors de notre première rencontre, nous discuterons de vos besoins, de la complexité de la situation, et nous établirons ensemble des objectifs réalistes.</p>
                                <p>Dans certains cas, des résultats significatifs peuvent être obtenus en quelques séances, tandis que d'autres situations peuvent nécessiter un suivi plus régulier sur une période prolongée. Mon approche est centrée sur vos besoins individuels, et je recommande un plan de traitement personnalisé en fonction de notre évaluation initiale.</p>
                                <p>Il est important de souligner que l'hypnose n'est souvent pas une solution unique et instantanée. C'est un processus qui se construit au fil du temps, favorisant des changements progressifs et durables. Je suis là pour vous guider à chaque étape du chemin, en ajustant le nombre de séances en fonction de vos progrès et de vos besoins changeants.</p>
                                <p>Notre collaboration est une équipe, et nous déterminerons ensemble le rythme qui convient le mieux à vos objectifs individuels et à votre style de vie.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item id="questions-why-erickson" eventKey="3">
                            <Accordion.Header>Pourquoi choisir l'hypnose ericksonienne?</Accordion.Header>
                            <Accordion.Body>
                                <p>Choisir l'hypnose ericksonienne apporte plusieurs avantages distincts. Tout d'abord, cette approche est centrée sur l'individu. Conçue par le célèbre psychiatre et psychologue Milton H. Erickson, elle reconnaît la singularité de chaque personne et s'adapte à ses besoins uniques.</p>
                                <p>L'hypnose ericksonienne se distingue par son approche souple et créative. Plutôt que d'utiliser des scripts génériques, je m'adapte à votre langage, à votre façon de penser et à vos expériences individuelles. Cela permet d'obtenir des résultats plus personnalisés et significatifs.</p>
                                <p>Une autre caractéristique clé de l'hypnose ericksonienne est son utilisation habile de la suggestion indirecte. Plutôt que des instructions directes, je fais appel à votre subconscient de manière subtile et créative. Cela permet d'explorer les racines profondes des problèmes et de faciliter des changements durables.</p>
                                <p>Enfin, l'hypnose ericksonienne favorise la collaboration active entre le praticien et le client. Vous n'êtes pas un simple observateur, mais un participant actif dans le processus de changement. Cela renforce l'autonomie et le sentiment de contrôle, contribuant ainsi à des transformations plus profondes et significatives.</p>
                                <p>En résumé, choisir l'hypnose ericksonienne offre une approche personnalisée, créative et collaborative pour aider à surmonter les défis et atteindre les objectifs spécifiques que vous avez en tête.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <p>Vous avez d'autres questions? Je reste disponible pour échanger avec vous sur vos besoins, ma pratique, l’hypnose eriksonienne ou tout autre sujet.</p>                                    
                </Container>
            </Container>
        </section>
        </>
    );
}