import React, {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import validator from 'validator';

import Navbar from '../components/Navbar.js';
import Footer from "../components/Footer";

import '../styles/index.css';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactUs() {

    const [requestSent, setRequestSent] = useState(false);

    const notify = (toastSelection) => {
        switch(toastSelection){
            case 0:{
                toast.success('Richiesta inviata!\nTi invieremo una risposta appena possibile!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                break;
            }
            case 1:{
                toast.error('Errore durante la richiesta!\nRiprova più tardi!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                break;
            }
            case 2:{
                toast.warn('Ci sono degli errori nei campi inseriti!\nVerifica e riprova!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                break;
            }
            case 3:{
                toast.info('Hai appena inviato una richiesta!\nRiprova più tardi!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                break;
            }
            default:{
                break;
            }
        }
    }

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
                        notify(0);
                        document.getElementsByName("name")[0].value = "";
                        document.getElementsByName("email")[0].value = "";
                        document.getElementsByName("message")[0].value = "";
                    }else{
                        notify(1);
                    }
                })
                .catch(function (error) {
                    notify(1);
                });
            }else{
                notify(3);
            }
        }else{
            notify(2);
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
