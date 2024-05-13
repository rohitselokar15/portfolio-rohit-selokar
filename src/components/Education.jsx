"use client";

import { Timeline } from "flowbite-react";
import { HiHome } from "react-icons/hi";

const Education = () => {
  return (
    <div id="education" className="container xl:mx-auto max-w-7xl mt-6">
      <div className="flex justify-center">
        <p className=" group text-black text-[28px] my-16 font-bold transition-all duration-300 ease-in-out tracking-wider">
          <span
            className=" p-2 bg-left-bottom bg-gradient-to-r from-purple-500 to-purple-900 bg-[length:0%_5px] bg-no-repeat 
          group-hover:bg-[length:100%_4px] cursor-pointer transition-all duration-700 ease-out dark:text-white"
          >
            Education
          </span>
        </p>
      </div>
      <Timeline horizontal className="mx-10">
        <Timeline.Item>
          <Timeline.Point icon={HiHome} />
          <Timeline.Content className=" border-purple-900 border-l-2 pl-2 p-2 md:border-none md:pl-0">
            <Timeline.Title>
              Bachelor of Technology In Information Technology
            </Timeline.Title>
            <Timeline.Time className="text-gray-900">2020-2024</Timeline.Time>
            <Timeline.Body className="text-gray-900">
              GH Raisoni College of Engineering, Nagpur, Maharashtra
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>

        <Timeline.Item>
          <Timeline.Point icon={HiHome} />
          <Timeline.Content className=" border-purple-900 border-l-2 pl-2 p-2 md:border-none md:pl-0">
            <Timeline.Title>Higher Secondary / Junior College</Timeline.Title>
            <Timeline.Time className="text-gray-900">2018-2020</Timeline.Time>
            <Timeline.Body className="text-gray-900">
              Dr M K Umathe Science College, Nagpur, Maharashtra
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>

        <Timeline.Item>
          <Timeline.Point icon={HiHome} />
          <Timeline.Content className=" border-purple-900 border-l-2 pl-2 p-2 md:border-none md:pl-0">
            <Timeline.Title>Primary And Secondary Education</Timeline.Title>
            <Timeline.Time className="text-gray-900">2006-2017</Timeline.Time>
            <Timeline.Body className="text-gray-900">
              Yashoda High School, Nagpur, Maharashtra
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </div>
  );
};

export default Education;
