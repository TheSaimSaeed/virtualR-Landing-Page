import React from "react";
import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import {checklistItems} from '../constants/index'

const WorkFlow = () => {
  return (
    <div className="flex flex-col justify-center items-center p-20">
      <div className="flex justify-center items-center">
        <h5 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide font-medium">Accelerate your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          coding workflow.
        </span>
      </h5>
      </div>

      <div className="flex flex-wrap justify-center items-center mt-5">
        <div className="w-full lg:w-1/2 ">
            <img  src={codeImg} alt="Code img" />
        </div>
        <div className="w-full lg:w-1/2 ">
            {checklistItems.map((listItem, index)=>(
                <div key={index} className="flex">
                    <div className="text-green-400 bg-neutral-900 h-10 w-10 flex justify-center items-center mt-3 rounded-full"><CheckCircle2/></div>
                    <div className="flex flex-col">
                        <h2 className="font-normal text-2xl mb-2 mt-4">{listItem.title}</h2>
                        <p className="mb-3">{listItem.description}</p>
                    </div>
                </div>

                
            ))}
        </div>
      </div>

    </div>

  );
};

export default WorkFlow;
