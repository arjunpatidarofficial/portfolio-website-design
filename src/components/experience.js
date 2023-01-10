import React from "react";
import { ExperienceList } from "../data/experienceList";

const Experience = ({ expRef }) => {
  return (
    <div>
      <div
        className=" flex flex-col justify-center items-center my-10 text-black "
        ref={expRef}
      >
        <p className=" font-medium text-2xl">Work Experience</p>
        {/* experience comapny card */}
        <div className="w-full sm:w-1/2 mt-10 px-10 space-y-10">
          {ExperienceList.map((experience) => {
            return (
              <div key={experience.id} className="border-b pb-8">
                <p className="font-medium">{experience.position}</p>
                <p className="font-medium">{experience.companyName}</p>
                <div className="flex flex-row justify-between mt-1 text-sm">
                  <p>{experience.time}</p>
                  <p>{experience.location}</p>
                </div>
                <p className="mt-3 font-medium text-base">Accomplishments</p>
                <div className="mt-2 text-sm space-y-2">
                  {experience.Accomplishments.map((content, index) => {
                    return (
                      <div key={content} className="flex">
                        <p className="text-lg pr-2">*</p>
                        <p>{content}</p>
                      </div>
                    );
                  })}
                </div>
                {experience?.link ? (
                  <a target="_blank" href={experience?.link}>
                    <button className="mt-4 text-white rounded bg-orange-600 py-1.5 px-2">
                      View Project
                    </button>
                  </a>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
        {/* internship card */}
        <div className="mt-5 w-full sm:w-1/2 px-10">
          <p className="text-black font-medium">Internship</p>
          <p className="text-sm">
            Techhelper Technologies (Reactjs, Nodejs, Mongodb) , Spotrental
            (Android Native, Web)
          </p>
        </div>
      </div>
    </div>
  );
};
export default Experience;
