import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/navBar";
import Footer from "../components/footer";
import { memo } from "react";

const ProjectView = ({ route }) => {
  const { state } = useLocation();
  console.log(state);

  return (
    <div>
      <Navbar />
      <div className="w-full flex flex-col items-center py-10 px-5 sm:px-20 sm:pt-10 pt-28">
        <div className="w-full sm:w-1/2 flex flex-col items-center space-y-5">
          <img className="w-14 h-14 rounded-md" src={state?.logo}></img>
          <p className=" font-bold ml-2 text-lg ">{state?.name}</p>
          <div className="w-full flex justify-between">
            <a
              className="bg-green-500 text-white p-2 rounded first-line:text-xs cursor-pointer"
              target="_blank"
              href={state?.link}
            >
              View Live Project
            </a>
            <a
              className="bg-black text-white p-2 rounded text-xs cursor-pointer"
              target="_blank"
              href={state?.github}
            >
              Get Source Code
              <i className="fa-brands fa-github ml-2"></i>
            </a>
          </div>
          <img
            className="border border-black rounded w-full"
            src={state?.img}
          ></img>
          <div className="flex space-x-3 w-full">
            {state?.technology?.map((technology) => {
              return (
                <p className="text-xs p-1.5 bg-orange-500 rounded text-white">
                  {technology}
                </p>
              );
            })}
          </div>
          <p className="font-medium">{state?.decs}</p>
          <div className="space-y-4 py-5">
            {state?.points?.map((point) => {
              return (
                <div key={point}>
                  <p className="text-sm">* {point}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className=""></div>
      </div>
      <Footer />
    </div>
  );
};

export default memo(ProjectView);
