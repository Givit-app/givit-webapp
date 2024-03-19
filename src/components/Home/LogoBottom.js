import React from 'react';

import '../../styles/index.css';

import logo from "../../assets/logo.png";

export default function LogoBottom() {
    return (
        <div className="logo-bottom-container">
            <img src={logo} alt="Givit logo"/>
            <p>Givit</p>
        </div>
    );
}
