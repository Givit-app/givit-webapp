import React from 'react';

import '../../styles/index.css';

export default function SustainabilityWidget(props) {

    const goalImage = require("../../assets/sustainability-goal-"+props.index+".png");
    const backgroundImage = require(`../../assets/sustainability-background-${props.index}.png`);

    const containerStyle = {
        background: ` 
            linear-gradient(
              rgba(0, 0, 0, 0.3), 
              rgba(0, 0, 0, 0.3)
            ),
            url(${backgroundImage})
        `,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    };

    const containerContentStyle = {
        justifyContent: (props.alignment) ? "right": "left",
        alignItems: (props.alignment) ? "flex-end" : "flex-start",
        textAlign: (props.alignment) ? "right" : "left",
        marginBottom: (props.alignment) ? "0" : "150px",
        marginTop: (props.alignment) ? "150px" : "0",
        flexDirection: (props.reverse) ? "column-reverse" : "column",
    };

    const firstPContainerStyle = {
        marginTop: (props.reverse) ? "0" : "auto",
    };

    const imageContainerStyle = {
        marginBottom: (props.reverse) ? "30px" : "auto",
    };

    return (
        <div style={containerStyle} className={"sustainability-widget-container"}>
            <div style={containerContentStyle} className="sustainability-widget-container-content">
                <p style={firstPContainerStyle}>{props.title}</p>
                <p>{props.content}</p>
                <img style={imageContainerStyle} src={goalImage} alt="Sustainability goal"/>
            </div>
        </div>
    );

}