import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Contact.jsx';
import Solutions from './Solutions.jsx';
import Product from './Product.jsx';
import Developers from './Developers.jsx';
import Resources from './Resources.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/product" element={<Product />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
