import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.scss'
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import App from './App';
import Resume from './Pages/Resume/Resume';
import Skills from './Pages/Skills/Skills';
import Contact from './Pages/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App><Home /></App>,
  },
  {
    path: "/resume",
    element: <App><Resume /></App>
  },
  {
    path: "/skills",
    element: <App><Skills /></App>
  },
  {
    path: "/projects",
    element: <App><Projects /></App>
  },{
    path: "/contact",
    element: <App><Contact /></App>
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
