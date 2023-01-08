import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ aboutRef }) => {
  const navigation = useNavigate();

  return (
    <div className="flex flex-row justify-between bg-white border-b border-black px-16 pb-5 pt-2">
      <div className="flex flex-row w-full justify-center sm:justify-start items-end">
        <p
          onClick={() => {
            navigation("/");
          }}
          className="text-black font-bold text-3xl  cursor-pointer"
        >
          Arjun
          <span className="text-5xl h-10 ml-0.5 text-orange-500">.</span>
        </p>
        {/* <div className="w-3 h-3 bg-yellow-600 rounded-full ml-1"></div> */}
      </div>
      <div className="hidden sm:flex flex-row space-x-9 pt-2 items-center cursor-pointer text-sm font-semibold">
        <p
          onClick={() => {
            navigation("/");
          }}
          className="text-black"
        >
          Home
        </p>
        <p
          onClick={() => {
            const elmnt = aboutRef;
            elmnt.current.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "start",
            });
          }}
          className="text-black"
        >
          About
        </p>
        <p className="text-black">Skills</p>
        <p className="text-black">Education</p>
        <p className="text-black">Work</p>
        <p className="text-black">Experience</p>
        <p className="text-black">Contact</p>
      </div>
    </div>
  );
};

export default Navbar;