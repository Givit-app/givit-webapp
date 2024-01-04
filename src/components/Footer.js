import React from 'react';

import '../styles/index.css';

import linkedin from '../assets/linkedin.png';
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-wrapper">
                <div className="footer-titles">
                    <p>Stay up to date!</p>
                    <p>Subscribe to our newsletter.</p>
                </div>
                <div className="footer-input">
                    <input type="text" name="email" placeholder="Email" />
                    <div className="footer-input-submit-button">
                        <i className="material-icons">east</i>
                    </div>
                </div>
                <div className="footer-privacy">
                    <p>Pursuant to and for the purposes of articles 13 and 6 of Regulation (EU) 2016/679. I declare that I have read the newsletter privacy policy for the processing of personal data of Givit. Furthermore I consent to the processing of personal data for sending newsletters.</p>
                </div>
                <div className="footer-links">
                    <a href="/application">App</a>
                    <a href="/sustainability">Sustainability</a>
                    <a href="/blog">Blog</a>
                    <a href="/about-us">About Us</a>
                    <a href="/business">Business</a>
                    <a href="/contact-us">Contact Us</a>
                </div>
                <div className="footer-socials">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a target={"_blank"} href="https://www.linkedin.com/company/givitapp/" rel="noreferrer"><img src={linkedin} alt="Linkedin logo"/></a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a target={"_blank"} href="https://www.instagram.com/givit.app?igsh=OGQ5ZDc2ODk2ZA==" rel="noreferrer"><img src={instagram} alt="Instagram logo"/></a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a target={"_blank"} href="https://www.facebook.com" rel="noreferrer"><img src={facebook} alt="Facebook logo"/></a>
                </div>
            </div>
        </div>
    );
}
