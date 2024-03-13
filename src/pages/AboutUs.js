import React from 'react';
import ReactGA from "react-ga4";

import '../styles/index.css';

import Navbar from '../components/Navbar.js';
import Footer from "../components/Footer";
import Member from "../components/AboutUs/Member";

export default function AboutUs() {
    ReactGA.send({ hitType: "pageview", page: "/about-us", title: "About Us Page" });
    return (
        <>
            <Navbar />
            <div className="about-us-content">
                <div className="about-us-content-wrapper">
                    <div className="about-us-content-titles">
                        <p>Our <span>Team</span></p>
                        <p>Economists, Engineers, Designers</p>
                        <p>The team is the core of Givit. Motivation, interest in the project, belief in the mission and
                            vision, and a collaborative spirit are the cornerstones upon which the group is built. The
                            team consists of 6 members, each with well-defined roles and responsibilities.</p>
                    </div>
                    <div className="about-us-content-team">
                        <Member
                            image={"leonardo"}
                            name={"Leonardo Bressan"}
                            role={"Executive Officer"}
                            linkedinURL={"https://www.linkedin.com/in/leonardo-bressan-profile"}
                            overlay={true}
                        />
                        <Member
                            image={"massimiliano"}
                            name={"Massimiliano Giunchi"}
                            role={"Operational Officer"}
                            linkedinURL={"https://www.linkedin.com/in/massimiliano-giunchi-1a075a234/"}
                            overlay={false}
                        />
                        <Member
                            image={"federico"}
                            name={"Federico Calandra"}
                            role={"Strategic IT Responsible"}
                            linkedinURL={"https://www.linkedin.com/in/federico-calandra/"}
                            overlay={false}
                        />
                        <Member
                            image={"lorenzo"}
                            name={"Lorenzo Bevilacqua"}
                            role={"Cloud Engineer"}
                            linkedinURL={"https://www.linkedin.com/in/lbevilacqua/"}
                            overlay={false}
                        />
                        <Member
                            image={"tommaso"}
                            name={"Tommaso Dell'Angelo"}
                            role={"Software Engineer"}
                            linkedinURL={"https://www.linkedin.com/in/tommasodellangelo/"}
                            overlay={false}
                        />
                        <Member
                            image={"nicola"}
                            name={"Nicola Galberti"}
                            role={"Design Officer"}
                            linkedinURL={"https://www.linkedin.com/in/nicola-galberti/"}
                            overlay={true}
                        />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}
