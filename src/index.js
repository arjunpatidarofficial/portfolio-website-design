import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import Achievement from "./pages/Achievement";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Project from "./pages/Project";
import ProjectView from "./pages/ProjectView";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/achievement" element={<Achievement />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/projectView" element={<ProjectView />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
