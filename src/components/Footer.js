import React from 'react';
import validator from 'validator';
import sendEventAnalytics from '../services/analytics.js';

import '../styles/index.css';

import linkedin from '../assets/linkedin.png';
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import {ToastContainer} from "react-toastify";
import notify from "../utils/local_notification";
import axios from "axios";

export default function Footer() {

    const subscribeToNewsletter = async () => {
        try {
            const emailInput = document.getElementsByName("email")[0].value;
            if (validator.isEmail(emailInput)) {
                const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/newsletter/subscribe`, {
                    email: emailInput,
                }, {
                    validateStatus: function (status) {
                        return status === 200 || status === 409 || status === 500;
                    },
                });

                if (response.status === 200) {
                    notify("success", "Controlla la email che ti abbiamo inviato per verificare la tua iscrizione!");
                    document.getElementsByName("email")[0].value = "";
                } else if (response.status === 409) {
                    notify("information", "La mail inserita è già presente nei nostri sistemi!");
                    document.getElementsByName("email")[0].value = "";
                } else {
                    notify("error", "Errore durante la richiesta al server");
                }
            } else {
                notify("warning", "Inserisci una email valida!");
            }
        } catch (error) {
            console.error(error);
            notify("error", "Si è verificato un errore. Riprova più tardi!");
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="footer">
                <div className="footer-wrapper">
                    <div className="footer-titles">
                        <p>Stay up to date!</p>
                        <p>Subscribe to our newsletter.</p>
                    </div>
                    <div className="footer-input">
                        <input type="text" name="email" placeholder="Email" />
                        <div className="footer-input-submit-button" onClick={subscribeToNewsletter}>
                            <i className="material-icons">east</i>
                        </div>
                    </div>
                    <div className="footer-privacy">
                        <p>Pursuant to and for the purposes of articles 13 and 6 of Regulation (EU) 2016/679. I declare that I have read the newsletter privacy policy for the processing of personal data of Givit. Furthermore I consent to the processing of personal data for sending newsletters.</p>
                    </div>
                    <div className="footer-links">
                        <a href="/application">App</a>
                        <a href="/sustainability">Sustainability</a>
                        {/*<a href="/blog">Blog</a>*/}
                        <a href="/about-us">About Us</a>
                        {/*<a href="/business">Business</a>*/}
                        <a href="/contact-us">Contact Us</a>
                    </div>
                    <div className="footer-socials">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a target={"_blank"} href="https://www.linkedin.com/company/givitapp/" rel="noreferrer"><img onClick={sendEventAnalytics("Social Network", "Social Network Visit", "Linkedin")} src={linkedin} alt="Linkedin logo"/></a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a target={"_blank"} href="https://www.instagram.com/givit.app?igsh=OGQ5ZDc2ODk2ZA==" rel="noreferrer"><img onClick={sendEventAnalytics("Social Network", "Social Network Visit", "Instagram")} src={instagram} alt="Instagram logo"/></a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a target={"_blank"} href="https://www.facebook.com" rel="noreferrer"><img onClick={sendEventAnalytics("Social Network", "Social Network Visit", "Facebook")} src={facebook} alt="Facebook logo"/></a>
                    </div>
                </div>
            </div>
        </>
    );
}