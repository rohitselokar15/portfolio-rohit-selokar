import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./pages/Projects";
import Skill from "./components/Skill";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";



const App = () => {

  // const [darkMode, setDarkMode] = useState(false);

  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  // };

  return (
    <div className="bg-black">
    {/* className = {`bg-${darkMode ? 'black' : 'white'}`} */}
      <BrowserRouter>
        <Navbar />

        {/* <p className="text-end text-white p-2">
        <button onClick={toggleDarkMode} className="m-1 p-1 rounded-lg bg-gray-300 dark:bg-gray-800 ">
          {darkMode ? "Light" : "Dark"}
        </button>
        </p> */}




        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}
        
          <Home/>
          <Projects/>
          <Skill/>
        <Contact/>

        <Footer/>
      </BrowserRouter>

    </div>
  );
};

export default App;
