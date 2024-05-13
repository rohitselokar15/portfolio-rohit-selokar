import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import c from "../assets/c.svg";
import javascript from "../assets/javascript.svg";
import bootstrap from "../assets/bootstrap.svg";
import "../app.css";

const Skill = () => {
  return (
    // <div
    //   id="skill"
    //   className="mt-8 rounded-md overflow-hidden bg-purple-200 dark:bg-black"
    // >
    //   <div data-aos="fade-up" data-aos-duration="800">
    //     <div className="flex flex-col items-center" >
    //     <p className="group text-black text-[28px] font-semibold my-3 transition-all duration-300 ease-in-out">
    //       <span
    //         className="p-2 px-4 bg-left-bottom bg-gradient-to-r from-purple-500 to-purple-900 bg-[length:0%_5px] bg-no-repeat
    //       group-hover:bg-[length:100%_4px] cursor-pointer transition-all duration-700 ease-out dark:text-white"
    //       >
    //         Skill
    //       </span>
    //     </p>
    //     </div>

    //     <Slider {...settings}>
    //       {logos.map((logo, index) => (
    //         <div key={index} className="flex justify-center items-center">
    //           <img
    //             src={logo}
    //             className="w-10 md:w-12 dark:bg-white rounded-full p-1 my-4 md:mx-12 "
    //             alt={`logo-${index}`}
    //           />
    //         </div>
    //       ))}
    //     </Slider>
    //   </div>
    // </div>

    <div className="container xl:mx-auto max-w-7xl ">
      <p className=" dark:text-white my-10 text-[28px] text-center font-bold tracking-wider">
        Skill
      </p>
      <div className="overflow-hidden">
        <div className="my-2 inset-y-0 left-0 right-0 flex justify-center items-center space-x-20 animate-slide-Right">
          <img src={html} alt="Logo 1" className="w-20 h-14" />
          <img src={css} alt="Logo 2" className="w-20 h-14" />
          <img src={c} alt="Logo 3" className="w-20 h-14" />
          <img src={javascript} alt="Logo 4" className="w-20 h-14" />
          <img src={html} alt="Logo 1" className="w-20 h-14" />
          <img src={css} alt="Logo 2" className="w-20 h-14" />
          <img src={c} alt="Logo 3" className="w-20 h-14" />
          <img src={javascript} alt="Logo 4" className="w-20 h-14" />
        </div>
      </div>
    </div>
  );
};

export default Skill;
