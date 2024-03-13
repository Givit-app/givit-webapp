import React from 'react';

import '../../styles/index.css';

export default function ApplicationWidget(props) {

    const image = require(`../../assets/application-step-${props.index}.png`);

    return (
        <div className={"application-widget-content"}>
            <div className={"application-widget-content-image"}>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img src={image} alt="Step image"/>
            </div>
            <div className={"application-widget-content-text"}>
                <p>{props.title}</p>
                <p>{props.content}</p>
            </div>
        </div>
    );

}