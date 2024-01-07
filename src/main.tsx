import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route/*, Navigate*/ } from "react-router-dom";
import "./index.scss";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import App from "./App";
import Resume from "./Pages/Resume/Resume";
import Skills from "./Pages/Skills/Skills";
import Contact from "./Pages/Contact/Contact";
import Waiting from "./Pages/Waiting/Waiting";

const maintenanceMode = true;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      {maintenanceMode ? (
        <Routes>
          <Route path="/" element={<Waiting />} />
        </Routes>
      ) : (
        <App>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </App>
      )}
    </Router>
  </React.StrictMode>
);
