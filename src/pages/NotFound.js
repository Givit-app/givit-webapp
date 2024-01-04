import React from 'react';

import Navbar from '../components/Navbar.js';
import Footer from "../components/Footer";

import '../styles/index.css';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="not-found-content">
          <p><span>404</span> - Not Found</p>
      </div>
      <Footer />
    </>
  );
}
