import React from 'react';
import { useNavigate } from "react-router-dom";
import ReactGA from "react-ga4";

import '../styles/index.css';

import Navbar from '../components/Navbar.js';
import Footer from "../components/Footer";
import LogoBottom from "../components/Home/LogoBottom";
import PurposeElement from "../components/Home/PurposeElement";

import homepageImage from '../assets/homepage_image.png';
import homepageExplanationImage1 from '../assets/homepage_explanation_images/homepage_exp_image1.png'
import homepageExplanationImage2 from '../assets/homepage_explanation_images/homepage_exp_image2.png'
import homepageExplanationImage3 from '../assets/homepage_explanation_images/homepage_exp_image3.png'
import homepageExplanationImage4 from '../assets/homepage_explanation_images/homepage_exp_image4.png'
import homepageExplanationImage5 from '../assets/homepage_explanation_images/homepage_exp_image5.png'
import homepageExplanationImage6 from '../assets/homepage_explanation_images/homepage_exp_image6.png'
import purposeImage1 from '../assets/homepage_purpose_images/purpose-image-1.jfif'
import purposeImage2 from '../assets/homepage_purpose_images/purpose-image-2.jfif'
import purposeImage3 from '../assets/homepage_purpose_images/purpose-image-3.jfif'
import purposeImage4 from '../assets/homepage_purpose_images/purpose-image-4.jfif'

export default function Homepage() {
    ReactGA.send({ hitType: "pageview", page: "/", title: "Home Page" });

    const navigate = useNavigate();

    const navigateToApplicationPage = () => {
        navigate("/application");
    }

    return (
        <>
        <Navbar />
            <div className="homepage-content">
                <div className="homepage-content-stack">
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <p><span>Give it</span> a longer life!</p>
                    <p id="main_logo">Givit</p>
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img src={homepageImage} alt="Homepage image" />
                </div>
                <div className="homepage-content-explanation">
                    <p>What is <span>Givit</span></p>
                    <p>An innovative web platform dedicated to the rental of a wide range of items, involving
                        individuals, stores, and businesses</p>
                    <div onClick={navigateToApplicationPage} className="homepage-content-explanation-button">App</div>
                </div>
                <div className="homepage-content-bottom-images">
                    <img src={homepageExplanationImage1} alt=""></img>
                    <img src={homepageExplanationImage2} alt=""></img>
                    <img src={homepageExplanationImage3} alt=""></img>
                    <img src={homepageExplanationImage4} alt=""></img>
                    <img src={homepageExplanationImage5} alt=""></img>
                    <img src={homepageExplanationImage6} alt=""></img>
                </div>
                <div className="homepage-content-sustainability">
                    <p>If your first choice is secondhand, this is <span>your place!</span></p>
                    <p>When you use Givit for purchasing and renting, you're not just buying or renting items.
                        You're revitalizing unused goods, earning extra money, discovering treasures, and saving money.
                        By being mindful of your consumption, you contribute to a greener planet. Givit connects you
                        with millions of others who embrace a better way of living. So, that will be your first
                        choice?</p>
                </div>
                <div className="homepage-content-purpose">
                    <div className="homepage-content-purpose-title">
                        <p><span>Why</span> choose <span>Givit</span></p>
                    </div>
                    <div className="homepage-content-purpose-gallery">
                        <div className="homepage-content-purpose-gallery-column">
                            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                            <PurposeElement imageUrl={purposeImage1} text={'Reliability and security'}/>
                            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                            <PurposeElement imageUrl={purposeImage2} text={'Solid Community'}/>
                        </div>
                        <div className="homepage-content-purpose-gallery-column">
                            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                            <PurposeElement imageUrl={purposeImage3} text={'Sustainability'} link={'/sustainability'}/>
                            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                            <PurposeElement imageUrl={purposeImage4} text={'Collaboration with shops and companies'}/>
                        </div>
                    </div>
                </div>
            </div>
            <LogoBottom/>
            <Footer/>
        </>
    );
}
