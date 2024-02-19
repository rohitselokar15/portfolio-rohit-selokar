import React from "react";
import exp from "../assets/experience.jpg";

const Experience = () => {
  return (
    <div className="mx-3 my-8">
      
      <p className="text-center font-bold text-[20px]">My Experiances</p>
      
      <div className="flex md:my-4 lg:justify-center">
        
        <div className="hidden md:flex ">
          <img src={exp} alt="experience-image" className="rounded-l-md md:h-[45vh] md:w-[350px] lg:h-[47vh] lg:w-[420px] xl:h-[50vh] xl:w-[420px]" />
        </div>

        <div className="border bg-slate-100 rounded-r-md lg:py-9">
          <div className="flex items-center text-[15px]">
            <i className="fa-solid fa-laptop fa-lg mx-2"></i>
            <div className="p-3">
              <p className="font-semibold">
                Software Developer Intern{" "}
                <span className="font-bold">22 Dec 2023 - Present</span>
              </p>
              <p>Software developer Intern at Qloron Technology pvt Ltd</p>
            </div>
          </div>

          <div className="flex items-center text-[15px]">
            <i className="fa-solid fa-laptop fa-lg mx-2"></i>
            <div className="p-3">
              <p className="font-semibold">
                Software Developer Intern{" "}
                <span className="font-bold">22 Dec 2023 - Present</span>
              </p>
              <p>Software developer Intern at Qloron Technology pvt Ltd</p>
            </div>
          </div>

          <div className="flex items-center text-[15px]">
            <i className="fa-solid fa-laptop fa-lg mx-2"></i>
            <div className="p-3">
              <p className="font-semibold">
                Software Developer Intern{" "}
                <span className="font-bold">22 Dec 2023 - Present</span>
              </p>
              <p>Software developer Intern at Qloron Technology pvt Ltd</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
