import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Contact from './Contact.jsx';
import Solutions from './Solutions.jsx';
import Products from './Products.jsx';
import Developers from './Developers.jsx';
import Resources from './Resources.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/solutions" element={<Layout><Solutions /></Layout>} />
        <Route path="/products" element={<Layout><Products /></Layout>} />
        <Route path="/developers" element={<Layout><Developers /></Layout>} />
        <Route path="/resources" element={<Layout><Resources /></Layout>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
