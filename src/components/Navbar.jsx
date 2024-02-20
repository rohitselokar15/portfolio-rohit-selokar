import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header className="font-openSans bg-slate-900 sticky top-0 z-50">
        <nav className="flex items-center justify-between px-2 h-16 text-white">
          <div>
            <p>
              <Link to="/" className="bg-slate-900 border text-white rounded-[50%] p-1 ml-14 font-bold">RS</Link>
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
            </ul>
          </div>

          <div className="lg:hidden" onClick={toggleMenu}>
            <i className="fa-solid fa-bars fa-lg mr-4"></i>
          </div>

          <div
            className={`lg:hidden fixed top-16 right-0 left-0 bg-slate-600 p-4 ${
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
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
