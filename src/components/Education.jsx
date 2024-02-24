"use client";

import { Timeline } from "flowbite-react";
import { HiCalendar } from "react-icons/hi";

const Education = () => {
  return (
    <div id="education" className="my-16 mx-14 md:mx-22 lg:mx-36 xl:mx-52" >
      <p className="text-center text-[28px] dark:text-white font-semibold my-6">
        Education
      </p>
      <Timeline horizontal>
        <Timeline.Item >
          <Timeline.Point icon={HiCalendar} />
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
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content className=" border-purple-900 border-l-2 pl-2 p-2 md:border-none md:pl-0">
            <Timeline.Title>Higher Secondary / Junior College</Timeline.Title>
            <Timeline.Time className="text-gray-900">2018-2020</Timeline.Time>
            <Timeline.Body className="text-gray-900">
              Dr M K Umathe Science College, Nagpur, Maharashtra
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>

        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
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
