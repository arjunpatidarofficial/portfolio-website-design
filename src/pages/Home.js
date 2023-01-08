import Navbar from "../components/navBar";
import AboutMe from "../components/aboutme";
import Skills from "../components/skills";
import Education from "../components/education";
import Footer from "../components/footer";
import Experience from "../components/experience";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

function Home() {
  const navigation = useNavigate();
  const aboutRef = useRef();

  return (
    <div className="App bg-white h-screen overflow-y-auto customScroll">
      <header>
        <Navbar aboutRef={aboutRef} />
      </header>
      <div
        onClick={() => navigation("/achievement")}
        className="py-2 px-5 bg-orange-600 flex justify-center cursor-pointer items-center border-b border-black"
      >
        <p className="text-white text-center text-base">
          ABDM Hacketon series round-1 Inovation challenge 2,7,8 winner
          <i className="fa-solid fa-circle-chevron-right text-sm ml-2"></i>
        </p>
      </div>
      <div className="flex flex-col sm:flex-row border-b border-black">
        <div className="flex flex-col px-10 sm:px-20 py-5 space-y-4 mt-10 sm:mt-20 w-full sm:w-1/2 bg-white">
          <p className=" text-4xl sm:text-5xl font-bold">Hi there,</p>
          <p className="text-4xl sm:text-5xl  font-bold">
            I'm Arjun <span className=" text-orange-600">Patidar</span>
          </p>
          <p className="text-xl font-medium">I Am Full Stack Developer</p>
          <div className="pt-3">
            <button className="bg-orange-500 font-medium shadow-lg w-24 text-white py-1.5">
              Hire me
            </button>
            <button
              onClick={() => {
                navigation("/projects");
              }}
              className="bg-white font-medium ml-3 w-24 text-black py-1.5"
            >
              Project<i className="fa-solid fa-arrow-trend-up ml-1"></i>
            </button>
          </div>

          <div className="flex items-start py-2 gap-x-3 text-sm">
            <div className="bg-white border border-gray-100 w-8 h-8 p-1.5 rounded-full shadow-lg">
              <img className="" src="/twitter.png"></img>
            </div>

            <div className="bg-white border border-gray-100 w-8 h-8 p-1.5 rounded-full shadow-lg">
              <img className="" src="/instagram.png"></img>
            </div>

            <div className="bg-white border border-gray-100  w-8 h-8 p-1.5  rounded-full shadow-lg">
              <img className="" src="/linkedin.png"></img>
            </div>

            {/* <div className="bg-white  w-8 h-8 p-1.5  rounded-full shadow-lg">
                <img className="w-8" src="/github.png"></img>
              </div> */}
          </div>
        </div>
        <div className="w-full sm:w-1/2 h-[500px] bg-orange-100 hidden sm:flex justify-center items-center">
          <img className="w-64 h-64  rounded-full" src="hero.png"></img>
        </div>
      </div>
      <AboutMe aboutRef={aboutRef} />
      <Skills />
      <Education />
      <Experience />
      <Footer />
    </div>
  );
}

export default Home;
