import React from "react";
import ecommerce from "../assets/project-ecommerce.jpg";
import clone from "../assets/project-clone.jpg";
import blockchain from "../assets/project-blockchain.jpg";
import weather from "../assets/project-weather.jpg";
import project from "../assets/project.jpg";

const Projects = () => {
  return (
    <div className="font-openSans lg:h-[112vh] xl:h-[62vh] lg:flex lg:items-center">
      <div>
        <p className="text-center text-white font-bold text-[30px]">Projects</p>
        <div className="text-center mx-14 lg:mx-24 my-4 grid gap-5 md:grid-cols-2 md:gap-4 lg:grid-cols-2 lg:gap-9 xl:grid-cols-4">
          <div className=" shadow-xl rounded-lg p-3 bg-slate-700 text-white">
            <div className="relative overflow-hidden">
              <img
                src={ecommerce}
                className="rounded-lg transition-transform transform hover:scale-105"
              />
            </div>
            <p className="font-bold my-2">E-Commerce App Using React.js</p>
            {/* <p className="text-gray-200">
              Developed an eco-friendly carbon credit trading system with
              seamless smart contract integration on Thirdweb, featuring a
              user-friendly interface using Tailwind CSS.
            </p> */}
          </div>

          <div className="shadow-xl rounded-lg p-3 bg-slate-700 text-white">
            <div className="relative overflow-hidden">
              <img
                src={clone}
                className="rounded-lg transition-transform transform hover:scale-105"
              />
            </div>
            <p className="font-bold my-2">Qloron Technology ERP page clone</p>
            {/* <p className="text-gray-200">
              Developed an eco-friendly carbon credit trading system with
              seamless smart contract integration on Thirdweb, featuring a
              user-friendly interface using Tailwind CSS.
            </p> */}
          </div>

          <div className="shadow-xl rounded-lg p-3 bg-slate-700 text-white">
            <div className="relative overflow-hidden">
              <img
                src={blockchain}
                className="rounded-lg transition-transform transform hover:scale-105"
              />
            </div>
            <p className="font-bold my-2">
              Carbon Credit Transfer System Using Blockchain
            </p>
            {/* <p className="text-gray-200">
              Developed an eco-friendly carbon credit trading system with
              seamless smart contract integration on Thirdweb, featuring a
              user-friendly interface using Tailwind CSS.
            </p> */}
          </div>

          <div className="shadow-xl rounded-lg p-3 bg-slate-700 text-white">
            <div className="relative overflow-hidden">
              <img
                src={weather}
                className="rounded-lg transition-transform transform hover:scale-105"
              />
            </div>
            <p className="font-bold my-2">Weather Application using React.js</p>
            {/* <p className="text-gray-200">
              Developed an eco-friendly carbon credit trading system with
              seamless smart contract integration on Thirdweb, featuring a
              user-friendly interface using Tailwind CSS.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
