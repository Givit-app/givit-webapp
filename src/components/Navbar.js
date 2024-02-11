import React, {useState} from 'react';

import '../styles/index.css';

import logo from '../assets/logo.png';

import { IoClose, IoMenu } from "react-icons/io5";

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const closeMenuOnMobile = () => {
        if (window.innerWidth <= 1024) {
            setShowMenu(false);
        }
    };

    return (
      <div className="navigation-bar">
          <div className="navigation-bar-toggle" id="nav-toggle" onClick={toggleMenu}>
              <IoMenu/>
          </div>
          <div className={`navigation-bar-menu${showMenu ? "-show" : ""}`}>
              <div className="navigation-bar-close" id="nav-close" onClick={toggleMenu}>
                  <IoClose/>
              </div>
              <a href="/application" onClick={closeMenuOnMobile}>App</a>
              <a href="/sustainability" onClick={closeMenuOnMobile}>Sustainability</a>
              {/*<a href="/blog" onClick={closeMenuOnMobile}>Blog</a>}*/}
              <a href="/about-us" onClick={closeMenuOnMobile}>About Us</a>
              <a href="/business" onClick={closeMenuOnMobile}>Business</a>
              <a href="/contact-us" onClick={closeMenuOnMobile}>Contact Us</a>
          </div>
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
