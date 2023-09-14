import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import Contact from './components/Contact.jsx';
import Solutions from './components/Solutions.jsx';
import Product from './components/Product.jsx';
import Developers from './components/Developers.jsx';
import Resources from './components/Resources.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'navbar',
        element: <Navbar />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'solutions',
        element: <Solutions />,
      },
      {
        path: 'product',
        element: <Product />,
      },
      {
        path: 'developers',
        element: <Developers />,
      },
      {
        path: 'resources',
        element: <Resources />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
