import React from 'react';
import ReactGA from "react-ga4";

import '../styles/index.css';

import Navbar from '../components/Navbar.js';
import Footer from "../components/Footer";
import LogoBottom from "../components/LogoBottom";

import homepageImage from '../assets/homepage_image.png';

export default function Homepage() {
    ReactGA.send({ hitType: "pageview", page: "/", title: "Home Page" });
    return (
        <>
        <Navbar />
            <div className="homepage-content">
                <div className="homepage-content-stack">
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img src={homepageImage} alt="Homepage image"/>
                    <p><span>Give it</span> a longer life!</p>
                </div>
                <div className="homepage-content-explanation">
                    <p>An innovative web platform dedicated to the rental of a wide range of items, involving individuals, stores, and businesses</p>
                    <div className="homepage-content-explanation-button">App</div>
                    <div className="homepage-content-explanation-images">
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className="homepage-content-sustainability">
                    <p>If your first choice is secondhand, this is <span>your place!</span></p>
                    <p>When you engage in the seemingly straightforward acts of purchasing and renting through Givit,
                        you're actually contributing to a multitude of positive outcomes. It involves breathing new life
                        into items like that unused paddle racket, while also earning a bit of extra income. It includes
                        the satisfaction of uncovering unexpected treasures and saving a few euros on items you desire.
                        Moreover, by adopting a more conscious approach to consumption, you play a role in fostering a
                        greener, more sustainable planet. Using Givit transforms you into a vital member of a vast
                        community, numbering in the millions, who have embraced a superior way of procuring, sharing,
                        and leading a more fulfilling life. So, what will be your first choice?</p>
                    <div className="homepage-content-sustainability-button">Sustainability</div>
                    <div className="homepage-content-sustainability-images">
                        <div className="homepage-content-sustainability-images-row">
                            <div></div>
                            <div></div>
                        </div>
                        <div className="homepage-content-sustainability-images-row">
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            <LogoBottom />
            <Footer/>
        </>
    );
}
