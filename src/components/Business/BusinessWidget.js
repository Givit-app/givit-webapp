import React from 'react';

import '../../styles/index.css';

export default function BusinessWidget(props) {
    const styleProperties = (props.reverse) ? [{flexDirection: "row-reverse"}, {justifyContent: "right"}] : [{},{}];
    return (
        <div style={styleProperties[0]} className="business-content-row">
            <div className="business-content-row-image">
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img src="https://picsum.photos/300/200" alt="Business Image"/>
            </div>
            <div style={styleProperties[1]} className="business-content-row-text">
                <p>{props.title}</p>
                <p>{props.content}</p>
            </div>
        </div>
    );
}
