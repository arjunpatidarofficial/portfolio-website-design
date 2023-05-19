import React, { memo, lazy, Suspense } from "react";

import Navbar from "../components/navBar";

import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const AboutMe = lazy(() => import("../components/aboutme"));
const Skills = lazy(() => import("../components/skills"));
const Education = lazy(() => import("../components/education"));
const Experience = lazy(() => import("../components/experience"));
const Footer = lazy(() => import("../components/footer"));

function Home() {
  const navigation = useNavigate();
  const aboutRef = useRef();
  const skillsRef = useRef();
  const educationRef = useRef();
  const expRef = useRef();

  return (
    <div className="App bg-white h-screen overflow-y-auto customScroll">
      {/* NavBar code */}
      <header>
        <Navbar
          aboutRef={aboutRef}
          skillsRef={skillsRef}
          educationRef={educationRef}
          expRef={expRef}
        />
      </header>
      <div
        onClick={() => navigation("/achievement")}
        className="py-2 px-5 bg-customorange flex justify-center cursor-pointer items-center border-b border-black dark:border-gray-700 sm:mt-0 mt-20"
      >
        <p className="dark:text-white text-white text-center">
          ABDM Hackathon series round-1 Inovation challenge 2,7,8 winner
          <i className="fa-solid fa-circle-chevron-right text-sm ml-2"></i>
        </p>
      </div>
      <div className="flex flex-col sm:flex-row border-b dark:border-gray-700 dark:text-white bg-white dark:bg-base border-black ">
        <div className="flex flex-col  px-10 sm:px-20 py-5 space-y-4 mt-10 sm:mt-20 w-full sm:w-1/2 ">
          <p className=" text-4xl sm:text-5xl font-bold ">Hi there,</p>
          <p className="text-4xl sm:text-5xl  font-bold">
            I'm <span className=" text-customorange">Arjun Patidar</span>
          </p>
          <p className="text-xl font-medium">I Am Full Stack Developer</p>
          <div className="pt-3">
            <button
              onClick={() => {
                aboutRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                  inline: "start",
                });
              }}
              className="bg-customorange font-medium shadow-lg w-24 text-white py-1.5"
            >
              Hire me
            </button>
            <button
              onClick={() => {
                navigation("/projects");
              }}
              className="font-medium ml-3 w-24 text-black dark:text-white py-1.5"
            >
              Project<i className="fa-solid fa-arrow-trend-up ml-1"></i>
            </button>
          </div>

          <div className="flex items-start py-2 gap-x-3 text-sm">
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
                <i className="fa-brands fa-github text-black text-xl"></i>
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
        <div className="w-full  sm:w-1/2 h-[500px] bg-orange-100 dark:bg-primary hidden sm:flex justify-center items-center">
          <img className="w-64 h-64  rounded-full" src="hero.webp"></img>
        </div>
      </div>

      <Suspense fallback={<p>Loading</p>}>
        <AboutMe aboutRef={aboutRef} />
        <Skills skillsRef={skillsRef} />
        <Education educationRef={educationRef} />
        <Experience expRef={expRef} />
        <Footer
          aboutRef={aboutRef}
          skillsRef={skillsRef}
          educationRef={educationRef}
          expRef={expRef}
        />
      </Suspense>
    </div>
  );
}

export default memo(Home);
