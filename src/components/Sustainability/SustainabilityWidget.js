import React from 'react';

import '../../styles/index.css';

export default function SustainabilityWidget(props) {

    const image = require('../../assets/sustainability-goal-'+props.index+'.png');

    const externalContainerStyle = {
        background: `linear-gradient(to right, ${props.firstColor}, ${props.secondColor})`,
        flexDirection: (props.alignment) ? 'row-reverse': 'row',
    };

    const internalBiggerContainerStyle = {
        textAlign: (props.alignment) ? 'right' : 'left',
        flexDirection: (props.reverse) ? 'column-reverse' : 'column',
    };

    const internalSmallerContainerImageStyle = {
        marginLeft: (props.reverse && props.alignment) ? '0' : (!props.reverse && !props.alignment) ? 'auto' : 'auto',
        marginTop: (props.reverse && props.alignment) ? '0' : (!props.reverse && !props.alignment) ? 'auto' : '0',
    };

    const internalBiggerContainerFirstParagraphStyle = {
        marginBottom: (!props.reverse) ? '3%' : '0',
    };

    const internalBiggerContainerSecondParagraphStyle = {
        marginBottom: (props.reverse) ? '3%' : '0',
    };

    return (
        <div className={"sustainability-widget-container"} style={externalContainerStyle}>
            <div className={"sustainability-widget-bigger-section"} style={internalBiggerContainerStyle}>
                <p style={internalBiggerContainerFirstParagraphStyle}>{props.title}</p>
                <p style={internalBiggerContainerSecondParagraphStyle}>{props.content}</p>
            </div>
            <div className={"sustainability-widget-smaller-section"}>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img style={internalSmallerContainerImageStyle} src={image} alt="Sustainability goal image"/>
            </div>
        </div>
    );

}