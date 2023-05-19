import React from "react";
import { memo } from "react";

const Education = ({ educationRef }) => {
  return (
    <div className=" border-b border-black dark:border-gray-700 bg-gray-50 dark:bg-base dark:text-white px-5 sm:px-0 py-10 ">
      <div
        className=" flex flex-col justify-center items-center h-16"
        ref={educationRef}
      >
        <p className=" font-medium text-2xl">Education</p>
        <p className=" font-medium text-sm mt-2 text-gray-500 dark:text-gray-300">
          Education Is Not The Learning Of Facts, But The Training Of The Mind
          To Think.
        </p>
      </div>

      <div className=" mx-5 sm:mx-32 mt-10 rounded-md flex flex-col sm:flex-row justify-center items-center">
        <div className="">
          <img className="w-32 h-32  rounded-full" src="/college.webp"></img>
        </div>
        <div className="mx-5 py-3">
          <p className="text-xl font-bold">
            Bachelor Of Engineering In Information Technology
          </p>
          <p className="text-sm mt-1 font-medium">
            Oriental College of Technology, Bhopal
          </p>
          <p className="mt-4 text-green-600 font-medium  text-lg">
            2016-2020 | Completed
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(Education);
