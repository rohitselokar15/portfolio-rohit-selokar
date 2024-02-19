import React from 'react'

const Footer = () => {
  return (
    <div className="h-[28vh] flex flex-col items-center justify-center bg-slate-900 font-openSans text-white text-center">
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
      </div>
  )
}

export default Footer
