import React from "react";
import education from "../assets/education.jpg";

const Education = () => {
  return (
    <div className="my-9">
        <p className="text-center font-bold text-[20px] my-3">Education</p>
        <div className="md:flex justify-center items-center">
          <div>
            <div className="flex items-center my-1">
              <i className="fa-solid fa-laptop fa-lg mx-2"></i>
              <div className="my-2 mx-3">
                <p className="font-semibold">
                  G H Raisoni College of Engineering{" "}
                  <span className="font-bold">Jan 2020-2024</span>
                </p>
                <p>Bachelor of Technology - Information Technology (CGPA-8.8)</p>
              </div>
            </div>

            <div className="flex items-center my-1">
              <i className="fa-solid fa-laptop fa-lg mx-2"></i>
              <div className="my-2 mx-3">
                <p className="font-semibold">
                  G H Raisoni College of Engineering{" "}
                  <span className="font-bold">Jan 2020-2024</span>
                </p>
                <p>Bachelor of Technology - Information Technology (CGPA-8.8)</p>
              </div>
            </div>

            <div className="flex items-center my-1">
              <i className="fa-solid fa-laptop fa-lg mx-2"></i>
              <div className="my-2 mx-3">
                <p className="font-semibold">
                  G H Raisoni College of Engineering{" "}
                  <span className="font-bold">Jan 2020-2024</span>
                </p>
                <p>Bachelor of Technology - Information Technology (CGPA-8.8)</p>
              </div>
            </div>
          </div>

          <div className="hidden md:flex">
            <img src={education} alt="education-images" className="md:h-[40vh] md:w-[350px] lg:w-[383px] xl:w-[480px]"/>
          </div>
        </div>
    </div>
  );
};

export default Education;
