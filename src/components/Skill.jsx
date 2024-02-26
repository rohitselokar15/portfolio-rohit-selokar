import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import c from "../assets/c.svg";
import javascript from "../assets/javascript.svg";
import bootstrap from "../assets/bootstrap.svg";

const Skill = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Default number of slides to show
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Interval between slides in milliseconds
    pauseOnHover: true,
    cssEase: "linear",
    arrows: false, // Optional: hide navigation arrows
  };

  const logos = [
    html,
    css,
    c,
    javascript,
    bootstrap,
    c,
    javascript,
    bootstrap,
    c,
    javascript,
    bootstrap,
  ];

  return (
    <div
      id="skill"
      className="mt-8 rounded-md overflow-hidden bg-purple-200 dark:bg-black"
    >
      <div data-aos="fade-up" data-aos-duration="800">
        <p className="text-center mt-3 mb-4 font-semibold text-black text-[28px] dark:text-white">
          Tech Stack
        </p>

        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={logo}
                className="w-10 md:w-12 dark:bg-white rounded-full p-1 my-4 md:mx-12 "
                alt={`logo-${index}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Skill;
