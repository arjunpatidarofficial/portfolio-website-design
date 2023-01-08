import React from "react";

const Footer = () => {
  return (
    <div className="bg-black py-5 ">
      <div className="flex flex-col sm:flex-row px-10 sm:px-32 space-y-5 sm:space-x-5 py-5">
        <div className="w-full sm:w-1/3 text-white px-0 sm:px-5">
          <p className="text-white text-xl font-medium">Arjun's Portfolio</p>
          <p className="mt-4 font-normal text-sm">
            Thank you for visiting my personal portfolio website. Connect with
            me over socials
          </p>
        </div>
        <div className="w-full sm:w-1/3 flex flex-col text-white text-sm space-y-2 ">
          <p className="text-white text-xl font-medium">Quick Links</p>
          <p className="pt-3 hover:text-orange-600 cursor-pointer">
            <i class="fa-solid fa-circle-chevron-right text-sm mr-2"></i>
            Skills
          </p>
          <p className="hover:text-orange-600 cursor-pointer">
            {" "}
            <i class="fa-solid fa-circle-chevron-right text-sm mr-2"></i>
            Education
          </p>
          <p className="hover:text-orange-600 cursor-pointer">
            {" "}
            <i class="fa-solid fa-circle-chevron-right text-sm mr-2"></i>Work
          </p>
          <p className="hover:text-orange-600 cursor-pointer">
            {" "}
            <i class="fa-solid fa-circle-chevron-right text-sm mr-2"></i>
            Experience
          </p>
          <p className="hover:text-orange-600 cursor-pointer">
            {" "}
            <i class="fa-solid fa-circle-chevron-right text-sm mr-2"></i>Contact
          </p>
        </div>
        <div className="w-full sm:w-1/3 flex flex-col tect-white">
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

export default Footer;
