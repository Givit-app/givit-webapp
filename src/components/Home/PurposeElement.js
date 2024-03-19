import React from 'react';
import { useNavigate } from "react-router-dom";

const PurposeElement = ({ imageUrl, text, link  }) => {

    const navigate = useNavigate();

    const navigateToPage = () => {
        navigate(link);
    }

    const containerStyle = {
        backgroundImage: `url(${imageUrl})`
    };

    const overlayStyle = {
        width: '100%',
        height: '100%'
    };

    return (
        <div onClick={navigateToPage} className="homepage-content-purpose-image" style={containerStyle}>
            <div className="homepage-content-purpose-image-overlay" style={overlayStyle}>
                <p className="homepage-content-purpose-image-text">{text}</p>
            </div>
        </div>
    );
};

export default PurposeElement;