import React from "react";
import { features } from "../constants/index";

const Features = () => {
  return (
    <div className="flex flex-col justify-center mt-10 items-center relative">
      <a
        href="#"
        className="bg-neutral-900 p-3 rounded-full text-orange-400 text-center uppercase  font-medium"
      >
        Features
      </a>
      <h1 className="py-10 lg:text-6xl sm:text-5xl font-medium">
        EASILY BUILD{" "}
        <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
          YOUR CODE
        </span>
      </h1>

      <div className="flex flex-wrap w-4/5">
        {features.map((feature, index) => (
          <div className="flex w-full lg:w-1/3 sm:w-1/2 py-10">
            <div key={index} className="">
              <div className="flex mx-3 h-10 w-10  bg-neutral-900 text-orange-700 justify-center items-center rounded-full  ">{feature.icon}</div>
            </div>

            <div className="flex flex-col space-y-3">
              <h5 className="font-medium ml-2">{feature.text}</h5>
              <p className="p-2 ">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
