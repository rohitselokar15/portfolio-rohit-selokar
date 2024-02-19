import React from "react";
import contact from "../assets/contact.jpg";

const Contact = () => {
  return (
    <>
      <div className="text-white mx-14 lg:mx-36 xl:mx-80 bg-slate-800 my-6 rounded-md font-openSans">
        <div className="py-4">
          <p className="text-center text-[30px] font-bold">Contact Me</p>

          <div className="flex flex-col justify-center items-center md:flex md:flex-row lg:flex lg:flex-row lg:mx-14 lg:justify-around xl:mx-20">
            <div className=" p-2">
              <div className="flex items-center">
                <a href="#" target="_blank">
                  <i class="fa-solid fa-paper-plane mx-5 fa-md p-4 bg-purple-700 rounded-[50%]"></i>
                </a>
                <div className="my-4">
                  <p className="font-bold text-[18px]">LOCATION</p>
                  <p className="text-[15px] text-gray-400">Maharashtra,India</p>
                </div>
              </div>

              <div className="flex items-center">
                <a
                  href="https://mail.google.com/mail/u/0/#inbox"
                  target="_blank"
                >
                  <i class="fa-solid fa-envelope mx-5 fa-md p-4 bg-purple-700 rounded-[50%]"></i>
                </a>
                <div className="my-4">
                  <p className="font-bold text-[18px]">MAIL</p>
                  <p className="text-[15px] text-gray-400">
                    rohitselokar1572002@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center my-0">
                <a href="#" target="_blank">
                  <i class="fa-solid fa-user mx-5 fa-md p-4 bg-purple-700 rounded-[50%]"></i>
                </a>
                <div className="my-4">
                  <p className="font-bold text-[18px]">RESUME</p>
                  <p className="text-[15px] text-gray-400">
                    Download my resume
                  </p>
                </div>
              </div>
            </div>

            <div>
              <img
                src={contact}
                className="w-[230px] rounded-xl md:w-[270px] lg:w-[280px] xl:w-[280px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
{/* <div className="bg-slate-900 font-openSans text-white text-center">
  <p className="text-center text-[15px] p-4">
    2024 MAHARASHTRA INDIA , INC. ALL RIGHTS RESERVED
  </p>
  <div className="py-3">
    <a
      href="https://www.linkedin.com/in/rohit-selokar-061755217/"
      target="_blank"
    >
      <i className="fa-brands fa-linkedin fa-xl mx-5"></i>
    </a>
    <a href="https://github.com/rohitselokar15" target="_blank">
      <i className="fa-brands fa-github fa-xl mx-5"></i>
    </a>
    <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">
      <i className="fa-solid fa-envelope fa-xl mx-5"></i>
    </a>
    <i className="fa-solid fa-phone fa-xl mx-5"></i>
  </div>
</div>; */}
