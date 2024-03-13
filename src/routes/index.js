import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Application from '../pages/Application.js';
import Sustainability from '../pages/Sustainability.js';
import Homepage from '../pages/Homepage.js';
import Blog from '../pages/Blog.js';
import AboutUs from '../pages/AboutUs.js';
import Business from '../pages/Business.js';
import ContactUs from '../pages/ContactUs.js';
import NotFound from '../pages/NotFound.js';

const router = createBrowserRouter([
  {
    path: '/application',
    element: <Application />,
  },
  {
    path: '/sustainability',
    element: <Sustainability />,
  },
  {
    path: '/',
    element: <Homepage />,
  },
  /*
  {
    path: '/blog',
    element: <Blog />,
  },
   */
  {
    path: '/about-us',
    element: <AboutUs />,
  },
  /*
  {
    path: '/business',
    element: <Business />,
  },
  */
  {
    path: '/contact-us',
    element: <ContactUs />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;