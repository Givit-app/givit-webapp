import React from 'react';

import '../styles/index.css';

import Navbar from '../components/Navbar.js';
import Footer from "../components/Footer";

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
