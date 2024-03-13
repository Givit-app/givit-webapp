import React from 'react';
import sendEventAnalytics from "../../services/analytics";

import '../../styles/index.css';

import linkedin from '../../assets/linkedin.png';

export default function Member(props) {

    const image = require('../../assets/'+props.image+'.png');

    const containerOverlayStyle = {
        height: "340px",
        boxShadow: (props.overlay) ? "0 0 70px 40px #8ff0e5" : "",
        borderRadius: "20px",
    }

    return (
        <div style={containerOverlayStyle}>
            <div className="about-us-content-team-row-member">
                <div className="about-us-content-team-row-member-image">
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img src={image} alt="Team member photo"/>
                </div>
                <div className="about-us-content-team-row-member-description">
                    <p>{props.name}</p>
                    <p>{props.role}</p>
                    <a href={props.linkedinURL}><img
                        onClick={sendEventAnalytics("Linkedin", "Linkedin Visit", props.name)} src={linkedin}
                        alt="Linkedin logo"/></a>
                </div>
            </div>
        </div>
    );

}