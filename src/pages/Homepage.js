import React from 'react';
import ReactGA from "react-ga4";

import '../styles/index.css';

import Navbar from '../components/Navbar.js';
import Footer from "../components/Footer";
import LogoBottom from "../components/LogoBottom";

import homepageImage from '../assets/homepage_image.png';
import homepageExplanationImage1 from '../assets/homepage_explanation_images/homepage_exp_image1.png'
import homepageExplanationImage2 from '../assets/homepage_explanation_images/homepage_exp_image2.png'
import homepageExplanationImage3 from '../assets/homepage_explanation_images/homepage_exp_image3.png'
import homepageExplanationImage4 from '../assets/homepage_explanation_images/homepage_exp_image4.png'
import homepageExplanationImage5 from '../assets/homepage_explanation_images/homepage_exp_image5.png'
import homepageExplanationImage6 from '../assets/homepage_explanation_images/homepage_exp_image6.png'

export default function Homepage() {
    ReactGA.send({ hitType: "pageview", page: "/", title: "Home Page" });
    return (
        <>
        <Navbar />
            <div className="homepage-content">
                <div className="homepage-content-stack">
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <p><span>Give it</span> a longer life!</p>
                    <p id="main_logo">Givit</p>
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img src={homepageImage} alt="Homepage image"/>
                </div>
                <div className="homepage-content-explanation">
                    <p>What is <span>Givit</span></p>
                    <p>An innovative web platform dedicated to the rental of a wide range of items, involving
                        individuals, stores, and businesses</p>
                    <div className="homepage-content-explanation-button">App</div>
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
                    <div className="homepage-content-sustainability-button">Sustainability</div>
                </div>
            </div>
            <LogoBottom/>
            <Footer/>
        </>
    );
}
