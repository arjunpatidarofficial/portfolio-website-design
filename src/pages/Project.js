import React, { useState } from "react";
import Navbar from "../components/navBar";
import { projectsList } from "../data/projectsList";
import { useNavigate } from "react-router-dom";

const Project = () => {
  const projectType = [
    "All Projects",
    "ReactJS",
    "MERN Stack",
    "Basic Web",
    "Android Native App",
    "React Native App",
  ];

  const [selectedType, setSelectedType] = useState("All Projects");
  const navigation = useNavigate();

  return (
    <div className="pb-20 overflow-y-auto customScroll h-screen">
      <Navbar />
      <div className="flex justify-center items-center h-24 text-black mt-20 sm:mt-0 ">
        <p className="font-medium text-2xl">Projects</p>
      </div>
      <div className="flex w-full flex-col sm:flex-row space-y-5 sm:space-y-0 px-5 sm:px-0 sm:space-x-5 text-sm justify-center">
        {projectType.map((name) => {
          return (
            <div
              key={name}
              onClick={() => {
                setSelectedType(name);
              }}
              className={`border cursor-pointer ${
                selectedType === name ? "bg-orange-300" : ""
              } border-black py-1 px-2 font-medium`}
            >
              <p className="">{name}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-16 justify-center px-5 sm:px-32">
        {projectsList.map((project) => {
          return (
            <div
              key={project.name}
              onClick={() => navigation("/projectView", { state: project })}
            >
              <img
                className="w-full sm:w-64 border-2 hover:border-orange-600 border-black rounded"
                src={project.img}
              ></img>
              <p className="mt-2">{project.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
