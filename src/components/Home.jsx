import React from "react";
// import home from "../assets/home.png";
// import rohit from "../assets/my_image.jpg";
import user from "../assets/user.jpg";

const Home = () => {
  return (
    <div id="/" className="xl:mx-24 lg:grid grid-cols-2 ">
      <div>
        <div className=" bg-purple-200 font-openSans md:my-6 mx-12 text-center p-5 rounded-2xl text-black lg:my-9 dark:text-white dark:bg-gray-800">
          <p className="text-[34px] font-bold md:text-[40px]">
            Hello <span className="fa-lg">👋</span> I Am
          </p>

          <button className="p-2 mt-5 text-white rounded-lg px-4 font-semibold bg-purple-700 shadow-md shadow-indigo-800/70">
            Web Developer
          </button>

          <p className="text-[33px] font-bold my-3">Rohit Selokar</p>
        </div>

        <div className="hidden bg-purple-200 font-openSans lg:flex lg:flex-col  mx-12 lg:mx-2 my-2 rounded-xl py-2 dark:text-white dark:bg-slate-800">
          <p className="text-[28px] text-black font-bold text-center dark:text-white">
            About <span>Me</span>
          </p>
          <p className="p-3 xl:p-4 text-black-300 text-justify">
            Hey there! I'm Rohit Selokar, a web developer who loves making
            websites look awesome using HTML, CSS, and JavaScript. I specialize
            in creating user-friendly experiences with React.js and Tailwind
            CSS. While I'm all about the frontend, I've got some backend skills
            with Node.js and Express, along with MySQL for handling data. Let's
            build something amazing together!
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className=" p-2 mt-8  flex flex-col items-center">
          <img src={user} className=" bg-purple-500 shadow-lg shadow-purple-800 rounded-3xl w-[190px] md:w-[260px] lg:w-[250px] xl:w-[250px] md:rounded-[30%] lg:rounded-[20%] md:bg-purple-700 md:shadow-xl md:shadow-indigo-800/50 " />
          <div className=" flex items-center justify-center lg:mt-2 text-white mt-2">
            <a href="Rohit_Selokar_Resume.pdf" download>
              <button className="mx-3 p-1.5 my-4 px-3 font-semibold text-[18px] text-white rounded-md bg-purple-700 shadow-lg shadow-indigo-800/70 ">
                Resume
              </button>
            </a>
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
              <button className="p-1.5 my-4 px-3 font-semibold text-[18px] bg-purple-700 shadow-lg shadow-indigo-800/70  rounded-md mx-3">
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
              <i className="fa-brands fa-linkedin text-[28px] m-3  p-2 rounded-[50%] md:my-8 lg:mx-8 border-purple-900 bg-purple-200 dark:bg-white text-blue-600"></i>
            </a>
          </p>

          <p>
            <a href="https://github.com/rohitselokar15" target="_blank">
              <i className="fa-brands fa-github text-[28px] m-3   p-2 rounded-[50%] md:my-8 lg:mx-8 bg-purple-200 dark:bg-white"></i>
            </a>
          </p>

          <p>
            <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">
              <i className="fa-solid fa-envelope text-[28px] m-3   p-2 rounded-[50%] md:my-8 lg:mx-8 bg-purple-200 dark:bg-white text-red-600"></i>
            </a>
          </p>

          <p>
            <a
              href="https://twitter.com/rohiit_15?t=orYIJcL0dyw79MhCRTJfHQ&s=08"
              target="_blank"
            >
              <i class="fa-brands fa-twitter text-[28px] m-3   p-2 rounded-[50%] md:my-8 lg:mx-8 bg-purple-200 dark:bg-white text-blue-600"></i>
            </a>
          </p>
        </div>
      </div>

      <div
        className="lg:hidden bg-purple-200 font-openSans mx-10 my-6 rounded-xl py-2 text-center dark:bg-slate-800"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <p className="text-[28px] text-black font-bold dark:text-white">
          About <span>Me</span>
        </p>
        <p className="p-4 text-gray-800 md:text-justify text-[16px] dark:text-gray-300">
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
