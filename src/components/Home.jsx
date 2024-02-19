import React from "react";
import home from "../assets/home.png";

const Home = () => {

  
  return (
    <div className="lg:grid grid-cols-2">
      <div>
        <div className="font-openSans my-6 mx-12 text-center p-5 rounded-2xl bg-slate-700 text-white lg:my-9">
          <p className="text-[35px] font-bold md:text-[40px]">Hello👋 I Am</p>

          <button className="p-2 mt-5 bg-purple-600 rounded-lg px-4 font-semibold">
            Web Developer
          </button>

          <p className="text-[35px] font-bold my-3">Rohit Selokar</p>
        </div>

        <div className="hidden font-openSans lg:flex lg:flex-col bg-slate-700 mx-12 my-2 rounded-xl py-2 text-center">
          <p className="text-[30px] text-white font-bold">
            About <span>Me</span>
          </p>
          <p className="p-4 text-gray-300">
            I am a highly motivated and enthusiastic individual with a passion
            for web development, specializing in front-end technologies like
            HTML, CSS, JavaScript, Bootstrap, and React. I also have a
            foundational knowledge of Node.js, and a grasp of SQL and MySQL
            databases, enabling me to deliver user-friendly and visually
            engaging web solutions.
          </p>
        </div>
      </div>

      <div className=" flex justify-center items-center mx-7">
        <div>
          <img src={home} className="md:w-[400px] lg:w-[300px]" />
          <div className="flex text-white my-3 mx-0 md:mx-10 px-3 ">
            <button className=" p-1 my-4 px-3 font-semibold text-[20px] bg-purple-900 rounded-md"
            >
              Resume
            </button>
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
            <button className=" p-1 my-4 px-3 font-semibold text-[20px] bg-purple-900 rounded-md mx-4 ">
              Contact Me
            </button>
            </a>
          </div>
        </div>

        <div className="flex flex-col  md:ml-5">
          <a
            href="https://www.linkedin.com/in/rohit-selokar-061755217/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin fa-md my-5 md:my-9 bg-gray-200 p-3 rounded-[50%]"></i>
          </a>
          <a href="https://github.com/rohitselokar15" target="_blank">
            <i className="fa-brands fa-github fa-md my-5 md:my-9 bg-white p-3 rounded-[50%]"></i>
          </a>
          <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">
            <i className="fa-solid fa-envelope fa-md my-5 md:my-9 bg-white p-3 rounded-[50%]"></i>
          </a>
          <i className="fa-solid fa-phone fa-md my-5 md:my-9 bg-white p-3 rounded-[50%]"></i>
        </div>
      </div>

      <div className="lg:hidden font-openSans bg-slate-700 mx-12 my-6 rounded-xl py-2 text-center">
        <p className="text-[30px] text-white font-bold">
          About <span>Me</span>
        </p>
        <p className="p-4 text-gray-300">
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
