import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import Achievement from "./pages/Achievement";
import reportWebVitals from "./reportWebVitals";
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
