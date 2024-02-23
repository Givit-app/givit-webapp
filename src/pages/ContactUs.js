import React, {useState} from 'react';
import { ToastContainer } from 'react-toastify';
import axios from "axios";
import validator from 'validator';
import ReactGA from "react-ga4";
import notify from "../utils/local_notification.js";

import '../styles/index.css';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from '../components/Navbar.js';
import Footer from "../components/Footer.js";

export default function ContactUs() {

    ReactGA.send({ hitType: "pageview", page: "/contact-us", title: "Contact Us Page" });

    const [requestSent, setRequestSent] = useState(false);

    const checkParametersValidity = async () => {
        return (validator.isEmail(document.getElementsByName("email")[0].value) && document.getElementsByName("name")[0].value !== "" && document.getElementsByName("message")[0].value !== "");
    }

    const sendRequest = async () => {
        if(await checkParametersValidity()){
            if(!requestSent){
                setRequestSent(true);
                await axios.post(`${process.env.REACT_APP_SERVER_URL}/contact/send-request`, {
                    name: document.getElementsByName("name")[0].value,
                    email: document.getElementsByName("email")[0].value,
                    content: document.getElementsByName("message")[0].value,
                })
                .then(function (response) {
                    if(response){
                        notify("success", "Richiesta inviata con successo!");
                        document.getElementsByName("name")[0].value = "";
                        document.getElementsByName("email")[0].value = "";
                        document.getElementsByName("message")[0].value = "";
                    }else{
                        notify("error", "Si è verificato un errore. Riprova più tardi!");
                    }
                })
                .catch(function (error) {
                    notify("error", "Si è verificato un errore. Riprova più tardi!");
                });
            }else{
                notify("information", "Hai appena inviato una richiesta. Riprova più tardi!");
            }
        }else{
            notify("warning", "C'è un errore con i campi inseriti. Verifica e riprova!");
        }
    }

    return (
        <>
            <Navbar/>
            <div className="contact-us-content">
                <div className="contact-us-content-wrapper">
                    <div className="contact-us-content-titles">
                        <p>Contact <span>us</span></p>
                        <p>Any questions, issues or curiosities?<br/>We can help you find an answer!</p>
                    </div>
                    <div className="contact-us-content-form">
                        <div className="contact-us-content-form-inputs">
                            <input type="text" name={"name"} placeholder={"Name"}/>
                            <input type="email" name={"email"} placeholder={"Email"}/>
                        </div>
                        <div className="contact-us-content-form-textarea">
                            <textarea name="message" rows="10" placeholder={"Write here what you need!"}/>
                            <div onClick={sendRequest} className="contact-us-content-form-textarea-submit-button">
                                <i className="material-icons">send</i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
            <Footer/>
        </>
    );

}
