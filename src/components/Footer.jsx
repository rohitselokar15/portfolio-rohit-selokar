import React from "react";

const Footer = () => {
  return (
    <div className="h-[22vh] flex flex-col items-center justify-center bg-slate-900 font-openSans text-white text-center">
      {/* <p className="text-white font-semibold text-[20px] my-2">Rohit Selokar</p> */}

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
          <i className="fa-solid fa-envelope fa-xl mx-5 "></i>
        </a>
        <a
          href="https://twitter.com/rohiit_15?t=orYIJcL0dyw79MhCRTJfHQ&s=08"
          target="_blank"
        >
          <i class="fa-brands fa-twitter fa-xl mx-5"></i>
        </a>
      </div>

      <p className="text-center text-[15px] p-4">
        © 2024 Rohit Selokar. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
