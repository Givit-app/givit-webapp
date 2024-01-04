import React from 'react';

import Navbar from '../components/Navbar.js';
import Footer from "../components/Footer";

import '../styles/index.css';

export default function ContactUs() {
  return (
    <>
      <Navbar />
      <div className="contact-us-content">
        <div className="contact-us-content-wrapper">
          <div className="contact-us-content-titles">
            <p>Contact <span>us</span></p>
            <p>Any questions, issues or curiosities?<br/>We can help you find an answer!</p>
          </div>
          <div className="contact-us-content-form">
              <div className="contact-us-content-form-inputs">
                  <input type="text" name={"name"} placeholder={"Name"} />
                  <input type="email" name={"email"} placeholder={"Email"} />
              </div>
              <div className="contact-us-content-form-textarea">
                  <textarea name="message" rows="10" placeholder={"Write here what you need!"} />
                  <div className="contact-us-content-form-textarea-submit-button">
                      <i className="material-icons">send</i>
                  </div>
              </div>
          </div>
        </div>
      </div>
        <Footer/>
    </>
  );
}
