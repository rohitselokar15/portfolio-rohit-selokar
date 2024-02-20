import React from "react";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import c from "../assets/c.svg";
import javascript from "../assets/javascript.svg";
import bootstrap from "../assets/bootstrap.svg";
import cc from "../assets/c.svg";
// import c from "../assets/c.svg";

const Skill = () => {
  return (
    <div className="h-[54vh]">
      <div className="md:bg-slate-800 font-openSans mt-12 mx-5 rounded-md lg:mx-[24%]">
        <p className="text-center font-bold text-white text-[25px] pt-3">
          Tech Stack
        </p>
        <div className="grid grid-cols-3 py-2 place-items-center mx-14 md:mx-56 lg:mx-1 xl:mx-36">
          <div>
            <img src={html} className="w-10 bg-white rounded-[50%] p-1  my-4" />
            <img src={css} className="w-10 bg-white rounded-[50%] p-1  my-4" />
            <img src={c} className="w-10 bg-white rounded-[50%] p-1 my-4" />
          </div>
          <div>
            <img
              src={javascript}
              className="w-10 bg-white rounded-[50%] p-1  my-4"
            />
            <img
              src={bootstrap}
              className="w-10 bg-white rounded-[50%] p-1  my-4"
            />
            <img src={html} className="w-10 bg-white rounded-[50%] p-1  my-4" />
          </div>
          <div>
            <img src={html} className="w-10 bg-white rounded-[50%] p-1 my-4" />
            <img
              src={bootstrap}
              className="w-10 bg-white rounded-[50%] p-1 my-4"
            />
            <img src={cc} className="w-10 bg-white rounded-[50%] p-1 my-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
