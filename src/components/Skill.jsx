import React from "react";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import c from "../assets/c.svg";
import javascript from "../assets/javascript.svg";
import bootstrap from "../assets/bootstrap.svg";
import cc from "../assets/c.svg";

const Skill = () => {
  return (
    <div className=" flex justify-center items-center dark:bg-black">
      <div className="font-openSans" data-aos="fade-up" data-aos-duration="800">
        <p className="text-center font-bold text-purple-700 text-[28px] py-4 dark:text-white">
          Tech Stack
        </p>

        <div className="md:mx-56 lg:mx-1 xl:mx-36">
          <div className="flex">
            <img
              src={html}
              className="w-10 bg-white rounded-[50%]  p-1 m-4 md:mx-5 lg:mx-8"
            />
            <img
              src={css}
              className="w-10 bg-white rounded-[50%]  p-1 m-4 md:mx-5 lg:mx-8"
            />
            <img
              src={c}
              className="w-10 bg-white rounded-[50%] p-1 m-4 md:mx-5 lg:mx-8"
            />
            <img
              src={c}
              className="w-10 bg-white rounded-[50%] p-1 m-4 md:mx-5 lg:mx-8"
            />
          </div>

          <div className="flex ">
            <img
              src={c}
              className="w-10 bg-white rounded-[50%] p-1 m-4 md:mx-5 lg:mx-8"
            />
            <img
              src={javascript}
              className="w-10 bg-white rounded-[50%] p-1 m-4 md:mx-5 lg:mx-8"
            />
            <img
              src={bootstrap}
              className="w-10 bg-white rounded-[50%] p-1 m-4 md:mx-5 lg:mx-8"
            />
            <img
              src={html}
              className="w-10 bg-white rounded-[50%] p-1 m-4 md:mx-5 lg:mx-8"
            />
          </div>

          <div className="flex ">
            <img
              src={html}
              className="w-10 bg-white rounded-[50%] p-1 m-4 md:mx-5 lg:mx-8"
            />
            <img
              src={c}
              className="w-10 bg-white rounded-[50%] p-1 m-4 md:mx-5 lg:mx-8"
            />
            <img
              src={bootstrap}
              className="w-10 bg-white rounded-[50%] p-1 m-4 md:mx-5 lg:mx-8"
            />
            <img
              src={cc}
              className="w-10 bg-white rounded-[50%] p-1 m-4 md:mx-5 lg:mx-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
