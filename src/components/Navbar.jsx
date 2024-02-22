import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      <header className="font-openSans bg-slate-900 sticky top-0 z-50 dark:bg-slate-800">
        <nav className="flex items-center justify-between px-2 h-16 text-white dark:text-white">
          <div>
            <p className="animate-pluse">
              <Link
                to="/"
                className="bg-slate-900 border-2 text-white rounded-[50%] p-1 ml-14 font-bold"
              >
                RS
              </Link>
            </p>
          </div>

          <div className={`hidden lg:flex ${showMenu ? "block" : "hidden"}`}>
            <ul className=" flex text-[14px] pr-16">
              <li className="mx-5">
                <Link to="/">HOME</Link>
              </li>
              <li className="mx-5">
                <Link to="/skill">SKILL</Link>
              </li>
              <li className="mx-5">
                <Link to="/project">PROJECTS</Link>
              </li>
              <li className="mx-5">
                <Link to="/contact">CONTACT</Link>
              </li>
              <li>
                <button
                  className="border px-2"
                  onClick={() => {
                    setDarkMode(!darkMode);
                  }}
                >
                  {darkMode ? "Light" : "Dark"} Mode
                </button>
              </li>
            </ul>
          </div>

          <div className="lg:hidden" onClick={toggleMenu}>
            <i className="fa-solid fa-bars fa-lg mr-4 text-white"></i>
          </div>

          <div
            className={`lg:hidden fixed top-16 right-0 left-0 bg-slate-600 p-4 text-white ${
              showMenu ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col gap-2 items-center font-semibold text-[14px]">
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/skill">SKILL</Link>
              </li>
              <li>
                <Link to="/project">PROJECTS</Link>
              </li>
              <li>
                <Link to="/contact">CONTACT</Link>
              </li>
              <li>
                <button
                  className="border px-2"
                  onClick={() => {
                    setDarkMode(!darkMode);
                  }}
                >
                  {darkMode ? "Light" : "Dark"} Mode
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
