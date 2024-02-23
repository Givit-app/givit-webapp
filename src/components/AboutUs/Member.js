import React from 'react';
import ReactGA from "react-ga4";

import '../../styles/index.css';

import linkedin from '../../assets/linkedin.png';

export default function Member(props) {

    const image = require('../../assets/'+props.image+'.png');

    const catchAnalyticsLinkedinMember = (memberName) => {
        ReactGA.event({
            category: "Linkedin profile",
            action: "Click",
            label: memberName,
        });
    }

    return (
        <div className="about-us-content-team-row-member">
            <div className="about-us-content-team-row-member-image">
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img src={image} alt="Team member photo" />
            </div>
            <div className="about-us-content-team-row-member-description">
                <p>{props.name}</p>
                <p>{props.role}</p>
                <a href={props.linkedinURL}><img onClick={catchAnalyticsLinkedinMember(props.name)} src={linkedin} alt="Linkedin logo"/></a>
            </div>
        </div>
    );
}