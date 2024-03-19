"use client";

import { Timeline } from "flowbite-react";
import { HiOfficeBuilding } from "react-icons/hi";

const Experience = () => {
  return (
    <div id="experience" className="my-8 mx-14 md:mx-22 lg:mx-36 xl:mx-52">
      <div className="flex justify-center mb-8">
        <p className=" group text-black text-[28px] font-semibold my-1 transition-all duration-300 ease-in-out">
          <span
            className=" p-2 bg-left-bottom bg-gradient-to-r from-purple-500 to-purple-900 bg-[length:0%_5px] bg-no-repeat 
          group-hover:bg-[length:100%_4px] cursor-pointer transition-all duration-700 ease-out dark:text-white"
          >
            Experience
          </span>
        </p>
      </div>
      <Timeline horizontal>
        <Timeline.Item>
          <Timeline.Point icon={HiOfficeBuilding} />
          <Timeline.Content className=" border-purple-900 border-l-2 pl-2 p-2 md:border-none md:pl-0">
            <Timeline.Title>
              Software Developer Intern - Qloron Technology
            </Timeline.Title>
            <Timeline.Time className="text-gray-900">
              Dec 2023 - Present
            </Timeline.Time>
            <Timeline.Body className="text-gray-900">
              <p>
                • Developed frontend features for various web applications,
                including a Todo List application, a hotel booking application
                (Konato), and a real estate clone frontend.
              </p>
              <p>
                • Implemented functionalities such as conditional routing,
                product filtering by category, sorting products by price,
                pagination, and search bar integration.
              </p>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>

        <Timeline.Item>
          <Timeline.Point icon={HiOfficeBuilding} />
          <Timeline.Content className=" border-purple-900 border-l-2 pl-2 p-2 md:border-none md:pl-0">
            <Timeline.Title>
              Frontent Developer Intern - Oasis Infobyte
            </Timeline.Title>
            <Timeline.Time className="text-gray-900">
              Feb 2023 - March 2023
            </Timeline.Time>
            <Timeline.Body className="text-gray-900">
              <p>
                • Intern as a frontend developer, hands-on with HTML, CSS, and
                JavaScript, React.
              </p>
              <p>
                • Actively contributed to frontend projects during a month-long
                internship, gaining practical experience in web development.
              </p>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>


        <Timeline.Item>
          <Timeline.Point icon={HiOfficeBuilding} />
          <Timeline.Content className=" border-purple-900 border-l-2 pl-2 p-2 md:border-none md:pl-0">
            <Timeline.Title>
              Social Intern - Warriors Foundation
            </Timeline.Title>
            <Timeline.Time className="text-gray-900">
              March 2023 - April 2023
            </Timeline.Time>
            <Timeline.Body className="text-gray-900">
              <p>
              • Managed social events during an internship such as Cleanliness Drive, Donation Drive
              </p>
              <p>
              • Successfully handled social events during an internship, demonstrating effective event management.
              </p>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </div>
  );
};
export default Experience;
