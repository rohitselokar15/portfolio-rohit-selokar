import React from "react";
import home from "../assets/home.png";

const Home = () => {
  return (
    <div className="lg:grid grid-cols-2">
      <div>
        <div className="font-openSans my-6 mx-12 text-center p-5 rounded-2xl bg-slate-700 text-white lg:my-9">
          <p className="text-[34px] font-bold md:text-[40px]">Hello👋 I Am</p>

          <button className="p-2 mt-5 bg-purple-600 rounded-lg px-4 font-semibold">
            Web Developer
          </button>

          <p className="text-[33px] font-bold my-3">Rohit Selokar</p>
        </div>

        <div className="hidden font-openSans lg:flex lg:flex-col bg-slate-700 mx-12 my-2 rounded-xl py-2">
          <p className="text-[30px] text-white font-bold text-center">
            About <span>Me</span>
          </p>
          <p className="p-5 text-gray-300 text-justify">
            Hey there! I'm Rohit Selokar, a web developer who loves making
            websites look awesome using HTML, CSS, and JavaScript. I specialize
            in creating user-friendly experiences with React.js and Tailwind
            CSS. While I'm all about the frontend, I've got some backend skills
            with Node.js and Express, along with MySQL for handling data. Let's
            build something amazing together!
          </p>
        </div>
      </div>

      <div className=" mx-3 flex justify-center items-center">
        <div className=" p-4">
          <img src={home} className="md:w-[400px] lg:w-[300px]" />
          <div className="flex items-center justify-center lg:mt-8 text-white">
            <a href="Rohit_Selokar_Resume.pdf" download>
              <button className=" p-1.5 my-4 px-3 font-semibold text-[19px] bg-purple-700 rounded-md">
                Resume
              </button>
            </a>
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
              <button className="p-1.5 my-4 px-2 font-semibold text-[19px] bg-purple-700 rounded-md mx-7">
                Contact Me
              </button>
            </a>
          </div>
        </div>

        <div>
          <p>
            <a
              href="https://www.linkedin.com/in/rohit-selokar-061755217/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin m-4 bg-gray-200 p-3 rounded-[50%] md:my-8 lg:mx-8 animate-pulse "></i>
            </a>
          </p>
          <p>
            <a href="https://github.com/rohitselokar15" target="_blank">
              <i className="fa-brands fa-github m-4 bg-white p-3 rounded-[50%] md:my-8 lg:mx-8 animate-pulse"></i>
            </a>
          </p>
          <p>
            <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">
              <i className="fa-solid fa-envelope m-4 bg-white p-3 rounded-[50%] md:my-8 lg:mx-8 animate-pulse"></i>
            </a>
          </p>

          <p>
            <i className="fa-solid fa-phone m-4 bg-white p-3 rounded-[50%] md:my-8 lg:mx-8 animate-pulse"></i>
          </p>
        </div>
      </div>

      <div
        className="lg:hidden font-openSans bg-slate-700 mx-12 my-6 rounded-xl py-2 text-center"
        data-aos="fade-up" 
        data-aos-duration="1000"
      >
        <p className="text-[28px] text-white font-bold">
          About <span>Me</span>
        </p>
        <p className="p-4 text-gray-300 md:text-justify text-[16px]">
          I am a highly motivated and enthusiastic individual with a passion for
          web development, specializing in front-end technologies like HTML,
          CSS, JavaScript, Bootstrap, and React. I also have a foundational
          knowledge of Node.js, and a grasp of SQL and MySQL databases, enabling
          me to deliver user-friendly and visually engaging web solutions.
        </p>
      </div>
    </div>
  );
};

export default Home;
