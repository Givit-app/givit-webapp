import React from 'react';

import '../../styles/index.css';

import linkedin from '../../assets/linkedin.png';

export default function Member(props) {
    const image = require('../../assets/'+props.image+'.png');
    return (
        <div className="about-us-content-team-row-member">
            <div className="about-us-content-team-row-member-image">
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img src={image} alt="Team member photo" />
            </div>
            <div className="about-us-content-team-row-member-description">
                <p>{props.name}</p>
                <p>{props.role}</p>
                <a href={props.linkedinURL}><img src={linkedin} alt="Linkedin logo"/></a>
            </div>
        </div>
    );
}
