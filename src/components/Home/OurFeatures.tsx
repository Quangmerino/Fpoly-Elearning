import React from "react";
import PageTitleCustom from "../customs/PageTitleCustom";
import Image from "next/image";
import GridViewIcon from "@mui/icons-material/GridView";
import FilterNoneIcon from "@mui/icons-material/FilterNone";
import Groups2Icon from "@mui/icons-material/Groups2";
import OurCard from "./OurCard";

type Props = {};

const forClassroom = [
  {
    icon: <GridViewIcon />,
    description:
      "Teachers don’t get lost in the grid view and have a dedicated Podium space.",
  },
  {
    icon: <FilterNoneIcon />,
    description: "TA’s and presenters can be moved to the front of the class.",
  },
  {
    icon: <Groups2Icon />,
    description:
      "Teachers can easily see all students and class data at one time.",
  },
];

function OurFeatures({}: Props) {
  return (
    <div className="pb-20 flex flex-col lg:gap-20">
      <PageTitleCustom
        textDark="Our"
        textLight="Features"
        className="font-bold flex gap-1.5"
        styleTextDark="text-end"
        styleTextLight="text-start"
      />
      <p className="text-[#696984] text-center text-[18px] lg:text-[24px] mb-10 lg:mb-0">
        This very extraordinary feature, can make learning activities more
        efficient
      </p>
      <div className="flex flex-col gap-10 my-10">
      <OurCard image="/images/home/our-features.png">
        <div className="flex flex-col justify-center">
          <PageTitleCustom
            textDark="A"
            textLight="user interface"
            className="space-x-1.5 text-center xl:text-start"
          />
          <span className="text-[#2F327D] text-center text-[36px] xl:text-start">
            designed for the classroom
          </span>
          <div className="flex flex-col gap-4 mt-4">
            {forClassroom?.map((item, index) => {
              return (
                <div
                  key={index + item.description}
                  className="flex gap-4 items-center"
                >
                  <span className="w-12 flex p-2 items-center justify-center shadow-2xl rounded-full border lg:h-12">
                    {item.icon}
                  </span>
                  <p className="">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </OurCard>
      <OurCard image="/images/home/learners.png">
      <div className="flex flex-col justify-center">
          <PageTitleCustom
            textDark="For Teachers And Learners"
            textLight="Tools"
            className="lg:flex lg:flex-row-reverse space-x-1.5 text-center gap-1.5 lg:!justify-end xl:inline-block"
          />
          <p className="text-center text-[18px] lg:text-[22px]">
            Class has a dynamic set of teaching tools built to be deployed and
            used during class. Teachers can handout assignments in real-time for
            students to complete and submit.
          </p>
        </div>
      </OurCard>
      <OurCard image="/images/home/quizzes.png">
      <div className="flex flex-col justify-center">
          <PageTitleCustom textDark="Assessments," />
          <PageTitleCustom
            textDark=", Tests"
            textLight="Quizzes"
            className="flex flex-row-reverse gap-1.5 !justify-end"
            styleTextDark="text-start"
            styleTextLight="text-end"
          />
          <p className="text-center text-[18px] lg:text-[22px] mt-10">
            Easily launch live assignments, quizzes, and tests. Student results
            are automatically entered in the online gradebook.
          </p>
        </div>
      </OurCard>
      <OurCard image="/images/home/management.png">
      <div className="flex flex-col justify-center">
          <PageTitleCustom
            textDark="Class Management"
            textLight="Tools for Educators"
            className="flex flex-col !items-start"
          />
          <p className="text-center text-[18px] lg:text-[22px] mt-10">
            Class provides tools to help run and manage the class such as Class
            Roster, Attendance, and more. With the Gradebook, teachers can
            review and grade tests and quizzes in real-time.
          </p>
        </div>
      </OurCard>
      <OurCard image="/images/home/one-on-one.png">
      <div className="flex flex-col justify-center">
          <PageTitleCustom
            textDark="One-on-One"
            textLight="Discussions"
            className="flex flex-col !items-start"
          />
          <p className="text-center text-[18px] lg:text-[22px]mt-10">
            Teachers and teacher assistants can talk with students privately
            without leaving the Zoom environment.
          </p>
        </div>
      </OurCard>
      </div>
      <button className="btn border border-solid border-teal-400 text-teal-400 normal-case font-normal rounded-full w-[200px] bg-transparent mx-auto">
        See more features
      </button>
    </div>
  );
}

export default OurFeatures;
