import React, { useState } from "react";
import Navbar from "../components/navBar";
import { projectsList } from "../data/projectsList";
import { useNavigate } from "react-router-dom";
import { memo } from "react";
import Footer from "../components/footer";

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
    <div className=" overflow-y-auto customScroll dark:bg-base dark:text-white">
      <Navbar />
      <div className="flex justify-center items-center h-24  mt-20 sm:mt-0 ">
        <p className="font-medium text-2xl">Projects</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10 justify-center px-5 sm:px-32 pb-20">
        {projectsList.map((project) => {
          return (
            <div
              key={project.name}
              onClick={() => navigation("/projectView", { state: project })}
            >
              <img
                className="w-full sm:w-64 border-2 hover:border-orange border-black rounded"
                src={project.img}
              ></img>
              <p className="mt-2">{project.name}</p>
              <p className="text-xs">{project.stack}</p>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default memo(Project);
