import React from "react";
import { forwardRef } from "react";

const AboutMe = ({ aboutRef }) => {
  return (
    <div ref={aboutRef} className="border-b border-black bg-gray-50">
      <div className="flex justify-center items-center h-24 text-black ">
        <p className="font-medium text-2xl">About Me</p>
      </div>
      <div className="py-10 flex flex-col sm:flex-row">
        <div className="w-full sm:w-2/5 flex justify-center items-center">
          <img
            className="w-64 rounded-md shadow-lg border-4 border-orange-500"
            src="/photo.png"
          ></img>
        </div>
        <div className=" w-full flex flex-col items-start mt-10 sm:mt-0 sm:w-3/5 px-10 sm:pl-10 sm:pr-28">
          <p className="text-xl font-bold">Arjun Patidar</p>
          <p className="text-sm mt-1 font-medium">Full Stack Developer</p>
          <p className="mt-4 text-gray-600 text-sm  font-medium">
            I am a Full-Stack developer based in Benglore, India. I am an
            Information Technology graduate from RGPV. I am very passionate
            about improving my coding skills & developing applications &
            websites. I build WebApps and Websites using MERN Stack. Working for
            myself to improve my skills. Love to build Full-Stack clones.
          </p>
          <div className=" grid grid-cols-1 sm:grid-cols-2 gap-2 mt-8 pr-20">
            <div className="h-10">
              <p className="text-blue-500">
                Age: <span className="text-black font-medium ml-2">26</span>
              </p>
            </div>
            <div className="h-10">
              <p className="text-blue-500">
                Email:
                <span className="text-black font-medium ml-2">
                  arjunpatidar042@gmail.com
                </span>
              </p>
            </div>
            <div className="h-10">
              <p className="text-blue-500">
                Phone:{" "}
                <span className="text-black font-medium ml-2">
                  +91 8965852267
                </span>
              </p>
            </div>
            <div className=" h-10">
              <p className="text-blue-500">
                Address:{" "}
                <span className="text-black font-medium ml-2">
                  Ujjain, India - 456006
                </span>
              </p>
            </div>
          </div>

          <button className="bg-orange-500 rounded mt-7 sm:mt-3 font-medium shadow-lg w-32 text-white py-1.5">
            Get Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
