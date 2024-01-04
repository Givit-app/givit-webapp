import React from 'react';
import { RouterProvider } from 'react-router-dom';

import router from './routes/index.js';

import './styles/index.css';
export default function App() {
  return <RouterProvider router={router} />;
}
