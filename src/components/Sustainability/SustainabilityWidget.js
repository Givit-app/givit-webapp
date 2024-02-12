import React from 'react';

import '../../styles/index.css';

export default function SustainabilityWidget(props) {
    let divStyleProperties = [];
    let pStyleProperties = [{},{}];
    if(!props.reverse && !props.alignment) {
        divStyleProperties = [{paddingTop: "30px", paddingBottom: "100px", paddingLeft: "30px", paddingRight: "30px"}];
        pStyleProperties = [{marginRight: "20%", marginBottom: "3%"}, {marginRight: "30%", marginTop: "0"}];
    }else if(!props.reverse && props.alignment) {
        divStyleProperties = [{paddingTop: "30px", paddingBottom: "100px", paddingLeft: "30px", paddingRight: "30px", textAlign: "right"}];
        pStyleProperties = [{marginLeft: "20%", marginBottom: "3%"}, {marginLeft: "30%", marginTop: "0"}];
    }else if(props.reverse && props.alignment) {
        divStyleProperties = [{flexDirection: "column-reverse", paddingTop: "100px", paddingBottom: "30px", paddingLeft: "30px", paddingRight: "30px", textAlign: "left"}];
        pStyleProperties = [{marginRight: "20%", marginTop: "0"}, {marginRight: "30%", marginBottom: "3%"}];
    }
    return (
        <div style={Object.assign({}, ...divStyleProperties)} className="sustainability-content-widget">
            <p style={pStyleProperties[0]}>{props.title}</p>
            <p style={pStyleProperties[1]}>{props.content}</p>
        </div>
    );
}