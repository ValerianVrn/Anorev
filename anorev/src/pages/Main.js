import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import About from '../components/About';
import Contact from '../components/Contact';
import Introduction from '../components/Introduction';
import Information from '../components/Information';
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

    return (
        <>
        <Container id="home" fluid className="mx-0 px-0 cover-container">
            <Image src="cover.jpg" className="w-100 object-fit-cover" style={{ height: imageHeight }}/>
            <Container id="text-overlay" className="p-5 gx-5 text-overlay">
                <h2 className="pt-2">Anorev</h2>
                <h1 className="pb-2">Service d'hypnose ericksonienne</h1>
            </Container>
        </Container>
        <Introduction/>
        <Information/>
        <About/>
        <Questions/>
        <Contact/>
        </>
    );
}