import React from 'react';
import ReactGA from "react-ga4";

import '../styles/index.css';

import Navbar from '../components/Navbar.js';
import Footer from "../components/Footer";
import BusinessWidget from "../components/Business/BusinessWidget";

export default function Business() {
    ReactGA.send({ hitType: "pageview", page: "/business", title: "Business Page" });
    return (
        <>
            <Navbar/>
            <div className="business-content">
                <div className="business-content-titles">
                    <p>A new way of making <span>Business</span></p>
                </div>
                <BusinessWidget reverse={false} title={"Individuals"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt venenatis leo, quis lobortis nulla tincidunt vel. Nulla ut mauris urna. Mauris at sapien rhoncus, ornare urna id, rutrum neque. Donec dictum dolor tellus, vel bibendum orci aliquet non. Morbi gravida tincidunt est. Donec ac odio quis libero tincidunt dignissim in eget dolor. Donec posuere suscipit ex pretium laoreet. Etiam molestie varius lorem. Mauris quis est euismod, euismod neque in, tristique velit."}/>
                <BusinessWidget reverse={true} title={"Stores"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt venenatis leo, quis lobortis nulla tincidunt vel. Nulla ut mauris urna. Mauris at sapien rhoncus, ornare urna id, rutrum neque. Donec dictum dolor tellus, vel bibendum orci aliquet non. Morbi gravida tincidunt est. Donec ac odio quis libero tincidunt dignissim in eget dolor. Donec posuere suscipit ex pretium laoreet. Etiam molestie varius lorem. Mauris quis est euismod, euismod neque in, tristique velit."}/>
                <BusinessWidget reverse={false} title={"Businesses"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt venenatis leo, quis lobortis nulla tincidunt vel. Nulla ut mauris urna. Mauris at sapien rhoncus, ornare urna id, rutrum neque. Donec dictum dolor tellus, vel bibendum orci aliquet non. Morbi gravida tincidunt est. Donec ac odio quis libero tincidunt dignissim in eget dolor. Donec posuere suscipit ex pretium laoreet. Etiam molestie varius lorem. Mauris quis est euismod, euismod neque in, tristique velit."}/>
            </div>
            <Footer/>
        </>
    );
}
