import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_n902hra", "template_g2antwd", form.current, {
        publicKey: "V8oxS5Zuh1OzCgn2b",
      })
      .then(
        () => {
          Swal.fire("Done");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <form
      id="contact"
      className="mx-4 lg:mx-40 xl:mx-[300px] mb-8 p-0 py-2 "
      ref={form}
      onSubmit={sendEmail}
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div className="flex justify-center">
        <p className=" group text-black text-[28px] font-bold tracking-wider my-6 transition-all duration-300 ease-in-out">
          <span
            className="p-2 bg-left-bottom bg-gradient-to-r from-purple-500 to-purple-900 bg-[length:0%_5px] bg-no-repeat 
          group-hover:bg-[length:100%_4px] cursor-pointer transition-all duration-700 ease-out dark:text-white"
          >
            Contact Me
          </span>
        </p>
      </div>
      <div className="my-5 p-6 dark:bg-slate-900 rounded-lg shadow-xl shadow-indigo-900/20">
        <label className="text-[19px] font-semibold dark:text-white">
          Email Me 🚀
        </label>

        <input
          type="text"
          placeholder="Your name"
          className="w-full my-2 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-purple-700 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-800 dark:focus:border-purple-500"
          name="from_name"
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full my-2 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-purple-700 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-800 dark:focus:border-purple-500"
          name="from_email"
          required
        />

        <textarea
          type="textarea"
          rows="4"
          placeholder="Message"
          className="w-full my-2 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-purple-700 dark:bg-gray-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-800 dark:focus:border-purple-500"
          name="message"
          required
        />
        <button
          type="submit"
          className="text-[17px] text-white w-full bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-3 text-center me-2 mb-2"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default Contact;
