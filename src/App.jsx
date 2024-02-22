import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./pages/Projects";
import Skill from "./components/Skill";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

const App = () => {

  return (
    <div className="dark:bg-black">
      <BrowserRouter>
        <Navbar />

        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}

        <Home />
        <Projects />
        <Skill />
        <Contact />

        <Footer />
        
      </BrowserRouter>
    </div>
  );
};

export default App;
