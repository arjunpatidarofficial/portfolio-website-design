import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { memo } from "react";

const Navbar = ({ aboutRef, skillsRef, educationRef, expRef }) => {
  const navigation = useNavigate();

  const [theme, setTheme] = useState("false");

  const handleThemeChange = () => {
    if (localStorage.getItem("ThemeDark") === "true") {
      setTheme("false");
      localStorage.setItem("ThemeDark", "false");
    } else {
      setTheme("true");
      localStorage.setItem("ThemeDark", "true");
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("ThemeDark")) {
      localStorage.setItem("ThemeDark", "false");
    } else {
      if (localStorage.getItem("ThemeDark") === "true")
        document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="flex flex-row justify-between dark:bg-black bg-white border-b border-black px-16 pb-5 pt-2  fixed sm:relative h-20 w-full">
      <div className="flex flex-row w-full justify-center sm:justify-start items-end">
        <p
          onClick={() => {
            navigation("/");
          }}
          className="text-black dark:text-white font-bold text-3xl  cursor-pointer"
        >
          Arjun
          <span className="text-5xl h-10 ml-0.5 text-customorange">.</span>
        </p>
        {/* <div className="w-3 h-3 bg-yellow-600 rounded-full ml-1"></div> */}
      </div>
      <div className="hidden text-black dark:text-white sm:flex flex-row space-x-9 pt-2 items-center cursor-pointer text-sm font-semibold">
        <p
          onClick={() => {
            navigation("/");
          }}
          className=""
        >
          Home
        </p>
        <p
          onClick={() => {
            const elmnt = aboutRef;
            elmnt.current.scrollIntoView({
              behavior: "smooth",
              inline: "start",
            });
          }}
          className=""
        >
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
          className=""
        >
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
          className=""
        >
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
          className=""
        >
          Experience
        </p>

        <div>
          <button onClick={() => handleThemeChange()}>
            <i
              className={`fa-solid fa-circle-half-stroke text-xl ${
                theme === "true" ? "text-white" : "text-blue-500"
              }`}
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(Navbar);
