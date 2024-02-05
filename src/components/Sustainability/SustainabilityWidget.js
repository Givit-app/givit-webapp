import React from 'react';

import '../../styles/index.css';

export default function SustainabilityWidget(props) {
    const styleProperties = (props.reverse)
        ? [{ flexDirection: "column-reverse"}]
        : [{}];
    if(props.reverse && !props.alignment){
        styleProperties.push({padding: "120px 20% 30px 30px;" });
    }
    if (props.alignment) {
        styleProperties.push({ justifyContent: "flex-end", padding: "20% 30px 30px 120px", textAlign: "right"});
    }
    return (
        <div style={Object.assign({}, ...styleProperties)} className="sustainability-content-widget">
            <p>{props.title}</p>
            <p>{props.content}</p>
        </div>
    );
}

