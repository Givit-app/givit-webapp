import React from 'react';
import ReactGA from "react-ga4";

import '../styles/index.css';

import Navbar from '../components/Navbar.js';
import Footer from "../components/Footer";
import SustainabilityWidget from "../components/Sustainability/SustainabilityWidget";

export default function Sustainability() {
    ReactGA.send({hitType: "pageview", page: "/sustainability", title: "Sustainability Page"});
    return (
        <>
            <Navbar/>
            <div className="sustainability-content">
                <div className="sustainability-content-wrapper">
                    <div className="sustainability-content-titles">
                        <p>Our core is <span>Sustainability</span></p>
                        <p>We want to give an user-friendly solution that can truly satisfy users and, at the same time,
                            don’t impact our planet anymore.</p>
                    </div>
                    <SustainabilityWidget title={"We promote a more dynamic and efficient economy"}
                                          content={"Givit promotes sharing and renting to reduce waste and foster a circular economy,\nencouraging sustainable urban living and supporting local communities through reduced resource\nconsumption and localized transactions."}
                                          reverse={true}
                                          alignment={true}
                                          firstColor={"#F99D2638"}
                                          secondColor={"#F98B26B0"}
                                          index={1}
                    />
                    <SustainabilityWidget title={"We promote sustainable consumption"}
                                          content={"Givit promotes responsible consumption by advocating borrowing or renting over\npurchasing, extending product lifespan and reducing environmental impact. Offering diverse\noptions, it facilitates sustainable choices and curbs excessive consumption."}
                                          reverse={false}
                                          alignment={false}
                                          firstColor={"#C08B2E3D"}
                                          secondColor={"#C08B2ECC"}
                                          index={2}
                    />
                    <SustainabilityWidget title={"We love diversity"}
                                          content={"Givit promotes climate action by fostering a sharing economy, which reduces resource-intensive production and greenhouse gas emissions. Additionally, it supports local communities and conservation projects through donations, thereby reducing carbon emissions and facilitating\nsustainable, localized access to products."}
                                          reverse={true}
                                          alignment={false}
                                          firstColor={"#48773C3D"}
                                          secondColor={"#48773CDB"}
                                          index={3}
                    />
                </div>
            </div>
            <Footer/>
        </>
    );
}
