"use client";

import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";

const Experience = () => {
  return (
    <div id="experience" className="my-16 mx-14 md:mx-22 lg:mx-36 xl:mx-52">
    <p className="text-center text-[28px] dark:text-white font-semibold my-6">Experience</p>
      <Timeline horizontal>
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar}/>
          <Timeline.Content className=" border-purple-900 border-l-2 pl-2 p-2 md:border-none md:pl-0">
            <Timeline.Title>Software Developer Intern @ Qloron Technology</Timeline.Title>
            <Timeline.Time className="text-gray-900">Dec 2023 - Present</Timeline.Time>
            <Timeline.Body className="text-gray-900">
              Get access to over 20+ pages including a dashboard layout, charts,
              kanban board, calendar, and pre-order E-commerce & Marketing
              pages.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>

        <Timeline.Item>
          <Timeline.Point icon={HiCalendar}/>
          <Timeline.Content className=" border-purple-900 border-l-2 pl-2 p-2 md:border-none md:pl-0">
            <Timeline.Title>Frontent Developer Intern @ Oasis Infobyte</Timeline.Title>
            <Timeline.Time className="text-gray-900">Feb 2023 - March 2023</Timeline.Time>
            <Timeline.Body className="text-gray-900">
              Get access to over 20+ pages including a dashboard layout, charts,
              kanban board, calendar, and pre-order E-commerce & Marketing
              pages.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>

      </Timeline>
    </div>
  );
};

export default Experience;
