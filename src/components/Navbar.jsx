import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <header className="bg-purple-300 shadow-md sticky top-0 z-50 dark:bg-slate-900">
        <nav className="flex items-center justify-between px-2 h-16 text-black font-semibold dark:text-white ">
          <div>
            <p className="animate-pluse">
              <Link
                to="/"
                className="bg-slate-900 border-2 text-white rounded-[50%] p-1 ml-14 font-semibold cursor-pointer"
              >
                RS
              </Link>
            </p>
          </div>

          <div className={`hidden lg:flex  ${showMenu ? "block" : "hidden"}`}>
            <ul className=" flex items-center  text-[14px] pr-16">
              <li className="mx-5 cursor-pointer">
                <Link
                  to="/"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  HOME
                </Link>
              </li>
              <li className="mx-5 cursor-pointer">
                <Link
                  to="skill"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  SKILL
                </Link>
              </li>
              <li className="mx-5 cursor-pointer">
                <Link
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  PROJECTS
                </Link>
              </li>
              <li className="mx-5 cursor-pointer">
                <Link
                  to="experience"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  EXPERIENCE
                </Link>
              </li>
              <li className="mx-5 cursor-pointer">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  EDUCATION
                </Link>
              </li>
              <li className="mx-5 cursor-pointer">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  CONTACT
                </Link>
              </li>
              <li>
                <button
                  className="pl-8"
                  onClick={() => {
                    setDarkMode(!darkMode);
                  }}
                >
                  {/* {darkMode ? "Light" : "Dark"}  */}
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.3 5A1 1 0 0 0 5 6.2l1.4 1.5a1 1 0 0 0 1.5-1.5L6.3 5Zm12.8 1.3A1 1 0 0 0 17.7 5l-1.5 1.4a1 1 0 0 0 1.5 1.5L19 6.3ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.8 17.7a1 1 0 1 0-1.5-1.5L5 17.7A1 1 0 1 0 6.3 19l1.5-1.4Zm9.9-1.5a1 1 0 0 0-1.5 1.5l1.5 1.4a1 1 0 0 0 1.4-1.4l-1.4-1.5ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </div>

          <div className="lg:hidden" onClick={toggleMenu}>
            <i className="fa-solid fa-bars fa-lg mr-4 text-black dark:text-white"></i>
          </div>

          <div
            className={`lg:hidden fixed top-16 right-0 left-0 text-white bg-purple-500 py-3 my-1 mx-20 rounded-lg dark:bg-slate-700 dark:text-white ${
              showMenu ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col gap-2 items-center font-semibold text-[16px]">
              <li>
                <Link
                  to="/"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="skill"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  SKILL
                </Link>
              </li>
              <li>
                <Link
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  PROJECTS
                </Link>
              </li>
              <li>
                <Link
                  to="experience"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  EXPERIENCE
                </Link>
              </li>
              <li>
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  EDUCATION
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  CONTACT
                </Link>
              </li>
              <li>
                <button
                  className="hidden md:flex"
                  onClick={() => {
                    setDarkMode(!darkMode);
                  }}
                >
                  {/* {darkMode ? "Light" : "Dark"}  */}
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.3 5A1 1 0 0 0 5 6.2l1.4 1.5a1 1 0 0 0 1.5-1.5L6.3 5Zm12.8 1.3A1 1 0 0 0 17.7 5l-1.5 1.4a1 1 0 0 0 1.5 1.5L19 6.3ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.8 17.7a1 1 0 1 0-1.5-1.5L5 17.7A1 1 0 1 0 6.3 19l1.5-1.4Zm9.9-1.5a1 1 0 0 0-1.5 1.5l1.5 1.4a1 1 0 0 0 1.4-1.4l-1.4-1.5ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <p
        className="md:hidden sticky top-[69px] z-50 border-black"
        onClick={() => {
          setDarkMode(!darkMode);
        }}
      >
        <svg
          className="w-6 h-6 ml-[90%] md:hidden text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.3 5A1 1 0 0 0 5 6.2l1.4 1.5a1 1 0 0 0 1.5-1.5L6.3 5Zm12.8 1.3A1 1 0 0 0 17.7 5l-1.5 1.4a1 1 0 0 0 1.5 1.5L19 6.3ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.8 17.7a1 1 0 1 0-1.5-1.5L5 17.7A1 1 0 1 0 6.3 19l1.5-1.4Zm9.9-1.5a1 1 0 0 0-1.5 1.5l1.5 1.4a1 1 0 0 0 1.4-1.4l-1.4-1.5ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z"
            clip-rule="evenodd"
          />
        </svg>
      </p>
    </>
  );
}

export default Header;
