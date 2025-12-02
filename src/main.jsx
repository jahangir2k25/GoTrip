import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "../RootLayout";
import Categories from './pages/Categories';
import Home from './pages/Home';
import Destination from './pages/Destination';
import Blog from './pages/Blog';
import Pages from './pages/Pages';
import Contact from './pages/Contact';
import Login from './login/Login';


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "categories", Component: Categories },
      { path: "destination", Component: Destination },
      { path: "blog", Component: Blog },
      { path: "pages", Component: Pages },
      { path: "contact", Component: Contact },
      { path: "login", Component: Login },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
