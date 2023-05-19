import React from "react";
import { skillsList } from "../data/skillsList";
import { memo } from "react";

const Skills = ({ skillsRef }) => {
  return (
    <div
      ref={skillsRef}
      className=" border-b border-black dark:border-gray-700 dark:bg-base dark:text-white  py-5"
    >
      <div className=" flex justify-center items-center h-16 ">
        <p className=" font-medium text-2xl">Skills & Abilities</p>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-5 mt-5 gap-3 px-10 sm:px-32">
        {skillsList.map((skill) => {
          return (
            <div
              key={skill?.name}
              className="flex flex-col py-3  rounded justify-center items-center"
            >
              <img
                className="w-14 h-14 bg-white border rounded-full shadow-md p-2"
                src={skill.icon}
              ></img>
              <p className="mt-3 text-sm font-semibold">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default memo(Skills);
