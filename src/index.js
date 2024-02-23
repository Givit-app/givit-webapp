import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactGA from "react-ga4";

import App from './App';

import './styles/index.css';

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);