import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import ReactGA from "react-ga4";

import '../styles/index.css';

import Navbar from '../components/Navbar.js';
import Footer from "../components/Footer";
import ApplicationWidget from "../components/Application/ApplicationWidget";

export default function Application() {

    ReactGA.send({ hitType: "pageview", page: "/application", title: "App Page" });

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <Navbar/>
            <div className="application-content">
                <div className="application-content-titles">
                    <p>Our <span>App</span></p>
                    <p>We’re developing an intuitive and user-friendly app with the aim of extending the life of your
                        objects!</p>
                </div>
                <div className="application-content-upcoming">
                    <p>Coming soon...</p>
                </div>
                <div className="application-content-steps">
                    <ApplicationWidget
                        title={"Find"}
                        content={"what you are looking for in our catalogue of objects, offered by the other users."}
                        index={1}
                    />
                    <ApplicationWidget
                        title={"Choose"}
                        content={"when to rent the object you need with the maximum flexibility."}
                        index={2}
                    />
                    <ApplicationWidget
                        title={"Wait"}
                        content={"for the object to be delivered or to meet with the person you are renting from."}
                        index={3}
                    />
                    <ApplicationWidget
                        title={"Enjoy"}
                        content={"your object for the amount of time you selected, after that you give it back to its owner."}
                        index={4}
                    />
                </div>
            </div>
            <Footer/>
        </>
    );
}