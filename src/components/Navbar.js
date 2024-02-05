import React from 'react';

import '../styles/index.css';

import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <div className="navigation-bar">
        <div className="navigation-bar-links-sx">
            <a href="/application">App</a>
            <a href="/sustainability">Sustainability</a>
        </div>
        <div className="navigation-bar-brand">
            <img src={logo} alt="Givit logo"/>
            <a href="/">Givit</a>
        </div>
        <div className="navigation-bar-links-dx">
            {/*<a href="/blog">Blog</a>}*/}
            <a href="/about-us">About Us</a>
            <a href="/business">Business</a>
            <a href="/contact-us">Contact Us</a>
        </div>
    </div>
  );
}
