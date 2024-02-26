// import React, { useState } from "react";
// import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skill from "./components/Skill";
import Footer from "./components/Footer";
import Experience from './components/Experience';
import Education from "./components/Education";
import Contact from "./components/Contact";
import Project from "./components/Project";

const App = () => {

  return (
    <div className="bg-purple-100 dark:bg-black">
      {/* <BrowserRouter> */}
        <Navbar />
        <Home />
        <Project/>
        <Skill />
        <Education/>
        <Experience/>
        <Contact/>
        <Footer/>
        
      {/* </BrowserRouter> */}
    </div>
  );
};

export default App;
