import React from 'react';
import ReactGA from "react-ga4";

import '../styles/index.css';

import Navbar from '../components/Navbar.js';
import Footer from "../components/Footer";

export default function Application() {
    ReactGA.send({ hitType: "pageview", page: "/application", title: "App Page" });
    return (
        <>
            <Navbar/>
            <div className="application-content temporary">
                <p>Coming soon...</p>
            </div>
            <Footer/>
        </>
    );
}

/*
<div className="application-content-titles">
    <p>Our <span>App</span></p>
    <p>We’re developing an intuitive and user-friendly app with the aim of extending the life of your
        objects!</p>
</div>
<div className="application-content-images">
    <div className="application-content-images-row">
        <div></div>
        <div></div>
    </div>
    <div className="application-content-images-row">
        <div></div>
    </div>
</div>
<div className="application-content-categories">
    <p>Start finding what you are <span>looking for!</span></p>
    <div className="application-content-categories-list">
        <div className="application-content-category">Category 1</div>
        <div className="application-content-category">Category 2</div>
        <div className="application-content-category">Category 3</div>
        <div className="application-content-category">Category 4</div>
        <div className="application-content-category">Category 5</div>
        <div className="application-content-category">Category 6</div>
        <div className="application-content-category">Category 7</div>
    </div>
</div>
<div className="application-content-features">
    <p>The main <span>features</span></p>
    <div className="application-content-features-row">
        <img src="" alt="Application image 4"/>
        <div className="application-content-feature">
            <p>1</p>
            <p>Feature 1</p>
        </div>
        <div className="application-content-feature">
            <p>2</p>
            <p>Feature 2</p>
        </div>
        <div className="application-content-feature">
            <p>3</p>
            <p>Feature 3</p>
        </div>
    </div>
</div>
 */