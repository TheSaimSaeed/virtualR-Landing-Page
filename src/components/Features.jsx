import React from "react";
import { features } from "../constants/index";

const Features = () => {
  return (
    <div className="flex flex-col justify-center mt-10 items-center">
      <a
        href="#"
        className="bg-neutral-200 p-3 rounded-lg text-center uppercase bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent font-medium"
      >
        Features
      </a>
      <h1 className="py-10 lg:text-7xl sm:text-6xl font-medium">
        EASILY BUILD{" "}
        <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
          YOUR CODE
        </span>
      </h1>

      <div className="flex flex-wrap">
        {features.map((feature, index) => (
          <div className="flex w-full lg:w-1/3 sm:w-1/2">
            <div key={index} className="">
              <div className="text-orange-400">{feature.icon}</div>
            </div>

            <div className="flex flex-col">
              <h5>{feature.text}</h5>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
