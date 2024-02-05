import React from 'react';

import Navbar from '../components/Navbar.js';

import '../styles/index.css';
import Footer from "../components/Footer";
import SustainabilityWidget from "../components/Sustainability/SustainabilityWidget";

export default function Sustainability() {
  return (
      <>
        <Navbar />
        <div className="sustainability-content">
            <div className="sustainability-content-wrapper">
                <div className="sustainability-content-titles">
                    <p>Our core is <span>Sustainability</span></p>
                    <p>We want to give an user-friendly solution that can truly satisfy users and, at the same time,
                        don’t impact our planet anymore.</p>
                </div>
                <SustainabilityWidget title={"We promote sustainable consumption"}
                                      content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt venenatis leo, quis lobortis nulla tincidunt vel. Nulla ut mauris urna. Mauris at sapien rhoncus, ornare urna id rutrum neque. Donec dictum dolor tellus, vel bibendum orci aliquet non. Morbi gravida tincidunt est. Donec ac odio quis libero tincidunt dignissim in eget dolor. Donec posuere suscipit ex pretium laoreet. Etiam molestie varius lorem. Mauris quis est euismod, euismod neque in tristique velit."}
                                      reverse={false}
                                      alignment={false}
                />
                <SustainabilityWidget title={"We promote a more dynamic and efficient economy"}
                                      content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt venenatis leo, quis lobortis nulla tincidunt vel. Nulla ut mauris urna. Mauris at sapien rhoncus, ornare urna id rutrum neque. Donec dictum dolor tellus, vel bibendum orci aliquet non. Morbi gravida tincidunt est. Donec ac odio quis libero tincidunt dignissim in eget dolor. Donec posuere suscipit ex pretium laoreet. Etiam molestie varius lorem. Mauris quis est euismod, euismod neque in tristique velit."}
                                      reverse={true}
                                      alignment={true}
                />
                <SustainabilityWidget title={"We love diversity"}
                                      content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt venenatis leo, quis lobortis nulla tincidunt vel. Nulla ut mauris urna. Mauris at sapien rhoncus, ornare urna id rutrum neque. Donec dictum dolor tellus, vel bibendum orci aliquet non. Morbi gravida tincidunt est. Donec ac odio quis libero tincidunt dignissim in eget dolor. Donec posuere suscipit ex pretium laoreet. Etiam molestie varius lorem. Mauris quis est euismod, euismod neque in tristique velit."}
                                      reverse={true}
                                      alignment={false}
                />
            </div>
        </div>
          <Footer/>
      </>
  );
}
