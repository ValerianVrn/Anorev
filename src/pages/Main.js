import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Introduction from '../components/Introduction';
import Information from '../components/Information';
import Navigation from '../components/Navigation'
import Questions from '../components/Questions';
import './Main.css';

export default function Main() {
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

    // Open the accordion when navigating to it.
    const [activeAccordionKey, setActiveAccordionKey] = useState(null);

    const handleNavItemClick = (eventKey) => {
        setActiveAccordionKey(eventKey);
    };

    return (
        <>
        <Navigation handleNavItemClick={handleNavItemClick}/>
        <Container id="home" fluid className="mx-0 px-0 cover-container">
            <Image src="cover.jpg" className="w-100 object-fit-cover" style={{ height: imageHeight }}/>
            <Container id="text-overlay" className="p-5 gx-5 text-overlay">
                <h1 className="pt-2 title">Anorev</h1>
                <h2 className="pb-2">Hypnose ericksonienne à Senlis</h2>
            </Container>
        </Container>
        <Container fluid className="px-0">
            <Container className="p-lg-5 p-4">
                <Introduction/>
            </Container>
            <Container fluid className="p-lg-5 p-4 bg-light">
                <Information/>
            </Container>
            <Container className="p-lg-5 p-4">
                <About/>
            </Container>
            <Container fluid className="p-lg-5 p-4 bg-light">
                <Questions activeKey={activeAccordionKey} handleAccordionToggle={handleNavItemClick}/>
            </Container>
            <Container fluid className="p-lg-5 p-4">
                <Contact/>
            </Container>
        </Container>
        <Footer/>
        </>
    );
}