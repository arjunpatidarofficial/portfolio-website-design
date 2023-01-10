import React from "react";
import { memo } from "react";

const Footer = ({ aboutRef, skillsRef, educationRef, expRef }) => {
  return (
    <div className="bg-black py-5">
      <div className="flex flex-col sm:flex-row px-10 sm:px-32 space-y-5 sm:space-x-5 py-5">
        <div className="w-full sm:w-1/2 text-white px-0 sm:px-5">
          <p className="text-white text-xl font-medium">Arjun's Portfolio</p>
          <p className="mt-4 font-normal text-sm">
            Thank you for visiting my personal portfolio website. Connect with
            me over socials
          </p>
          <div className="flex items-start py-2 gap-x-3 text-sm mt-3">
            <a
              className=""
              href="https://www.linkedin.com/in/arjun-patidar-3a0395135/"
              target="_blank"
            >
              <div className="bg-white border flex justify-center text-xl items-center border-gray-100 w-8 h-8 rounded-full shadow-lg">
                <i className="fa-brands fa-linkedin text-blue-500"></i>
              </div>
            </a>

            <a
              className=""
              href="https://github.com/arjunpatidarofficial"
              target="_blank"
            >
              <div className="bg-white border flex justify-center text-xl items-center border-gray-100 w-8 h-8 rounded-full shadow-lg">
                <i className="fa-brands fa-github text-xl text-black"></i>
              </div>
            </a>

            <a
              className=""
              href="https://dribbble.com/arjupatidarofficial"
              target="_blank"
            >
              <div className="bg-white border flex justify-center text-xl items-center border-gray-100 w-8 h-8 rounded-full shadow-lg">
                <i className="fa-brands fa-dribbble text-lg text-red-500"></i>
              </div>
            </a>

            {/* <div className="bg-white  w-8 h-8 p-1.5  rounded-full shadow-lg">
                <img className="w-8" src="/github.png"></img>
              </div> */}
          </div>
        </div>
        <div className="w-full sm:w-1/3 flex flex-col text-white text-sm space-y-2 ">
          <p className="text-white text-xl font-medium">Quick Links</p>
          <p
            onClick={() => {
              const elmnt = aboutRef;
              elmnt.current.scrollIntoView({
                behavior: "smooth",
                inline: "start",
              });
            }}
            className="hover:text-orange-600 cursor-pointer"
          >
            {" "}
            <i className="fa-solid fa-circle-chevron-right text-sm mr-2 pt-3"></i>
            About
          </p>
          <p
            onClick={() => {
              const elmnt = skillsRef;
              elmnt.current.scrollIntoView({
                behavior: "smooth",
                inline: "start",
              });
            }}
            className=" hover:text-orange-600 cursor-pointer"
          >
            <i className="fa-solid fa-circle-chevron-right text-sm mr-2"></i>
            Skills
          </p>
          <p
            onClick={() => {
              const elmnt = educationRef;
              elmnt.current.scrollIntoView({
                behavior: "smooth",
                inline: "start",
              });
            }}
            className="hover:text-orange-600 cursor-pointer"
          >
            {" "}
            <i className="fa-solid fa-circle-chevron-right text-sm mr-2"></i>
            Education
          </p>

          <p
            onClick={() => {
              const elmnt = expRef;
              elmnt.current.scrollIntoView({
                behavior: "smooth",
                inline: "start",
              });
            }}
            className="hover:text-orange-600 cursor-pointer"
          >
            {" "}
            <i className="fa-solid fa-circle-chevron-right text-sm mr-2"></i>
            Experience
          </p>
        </div>
        <div className="w-full sm:w-1/2 flex flex-col text-white">
          <p className="text-white text-xl font-medium">Contact Info</p>
          <p className="mt-4 font-normal text-sm text-white">
            <i className="fa-solid fa-phone text-blue-400 mr-3"></i>
            +918965852267
          </p>
          <p className="mt-4 font-normal text-sm text-white">
            <i className="fa-solid fa-envelope text-blue-400 mr-3"></i>
            arjunpatidar042@gmail.com
          </p>
          <p className="mt-4 font-normal text-sm text-white">
            <i className="fa-solid fa-location-dot text-blue-400 mr-3"></i>
            Ujjain, India - 456006
          </p>
        </div>
      </div>

      <div className="border-t border-gray-800 flex justify-center items-center">
        <p className="text-white mt-5 text-base">
          Designed With ❤️ By Arjun Patidar
        </p>
      </div>
    </div>
  );
};

export default memo(Footer);
