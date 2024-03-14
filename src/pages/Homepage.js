import React from 'react';
import { useNavigate } from "react-router-dom";
import ReactGA from "react-ga4";

import '../styles/index.css';

import Navbar from '../components/Navbar.js';
import Footer from "../components/Footer";
import LogoBottom from "../components/LogoBottom";

import homepageImage from '../assets/homepage_background.png';
import homepageCarousel from '../assets/homepage_carousel.png';
import purposeImage1 from '../assets/purpose-image-1.png';
import purposeImage2 from '../assets/purpose-image-2.png';
import purposeImage3 from '../assets/purpose-image-3.png';
import purposeImage4 from '../assets/purpose-image-4.png';

export default function Homepage() {

    ReactGA.send({ hitType: "pageview", page: "/", title: "Home Page" });

    const navigate = useNavigate();

    const navigateToApplicationPage = () => {
        navigate("/application");
    }

    const navigateToSustainabilityPage = () => {
        navigate("/sustainability");
    }

    return (
        <>
            <Navbar />
            <div className="homepage-content">
                <div className="homepage-content-introduction">
                    <p><span>Give it</span> a longer life!</p>
                    <img src={homepageImage} alt="Homepage Introduction"/>
                </div>
                <div className="homepage-content-meaning">
                    <p><span>What</span> <span>is</span> Givit</p>
                    <p>An innovative web platform dedicated to the rental of a wide range of items, involving
                        individuals, stores, and businesses</p>
                    <div onClick={navigateToApplicationPage} className="homepage-content-meaning-button">App</div>
                    <div className="homepage-content-meaning-carousel">
                        <img src={homepageCarousel} alt="Meaning Carousel"/>
                    </div>
                    <div className="homepage-content-meaning-text">
                        <p>If your first choice is secondhand, this is <span style={{color: "#08e4bc", fontSize: "50px", lineHeight: "61px"}}>your place!</span></p>
                        <p>When you use Givit for purchasing and renting, you're not just buying or renting items.
                            You're revitalizing unused goods, earning extra money, discovering treasures, and saving
                            money. By being mindful of your consumption, you contribute to a greener planet. Givit
                            connects you with millions of others who embrace a better way of living. So, that will be
                            your first choice?</p>
                    </div>
                </div>
                <div className="homepage-content-purpose">
                    <div className="homepage-content-purpose-title">
                        <p><span>Why</span> choose <span>Givit</span></p>
                    </div>
                    <div className="homepage-content-purpose-gallery">
                        <div className="homepage-content-purpose-gallery-column">
                            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                            <img src={purposeImage1} alt="Purpose image"/>
                            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                            <img src={purposeImage2} alt="Purpose image"/>
                        </div>
                        <div className="homepage-content-purpose-gallery-column">
                            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                            <img onClick={navigateToSustainabilityPage} src={purposeImage3} alt="Purpose image"/>
                            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                            <img src={purposeImage4} alt="Purpose image"/>
                        </div>
                    </div>
                </div>
            </div>
            <LogoBottom/>
            <Footer/>
        </>
    );
}