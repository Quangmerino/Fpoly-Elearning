import React from "react";
import PageTitleCustom from "../customs/PageTitleCustom";
import Image from "next/image";
import CardCustom from "../customs/CardCustom";
import Link from "next/link";

function About() {
  return (
    <div className="pb-20">
      <PageTitleCustom
        textDark="What is"
        textLight="TOTC?"
        className="font-bold gap-1.5 flex"
        styleTextDark="text-end"
        styleTextLight="text-start"
      />
      <p className="text-[18px] text-center pb-20 text-[#696984] lg:text-[22px]">
        TOTC is a platform that allows educators to create online classes
        whereby they can store the course materials online, manage assignments,
        quizzes and exams, monitor due dates, grade results and provide students
        with feedback all in one place.
      </p>
      <div className="flex flex-col items-center gap-10 md:flex-row lg:gap-20">
        <CardCustom className="relative rounded-xl overflow-hidden">
          <Image
            src="/images/home/instructors.png"
            className="w-full"
            width={1000}
            height={1500}
            alt=""
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap flex flex-col justify-center">
            <span className="w-full text-[24px] text-center block lg:text-[32px]">
              FOR INSTRUCTORS
            </span>
            <button className="btn rounded-full whitespace-nowrap text-[18px] border bg-transparent font-normal text-white normal-case lg:text-[22px]">
              Start a class today
            </button>
          </div>
        </CardCustom>
        <CardCustom className="relative rounded-3xl">
          <Image
            src="/images/home/student.png"
            className="w-full"
            width={1000}
            height={1500}
            alt=""
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap flex flex-col justify-center">
            <span className="w-full text-center text-[24px] block lg:text-[32px]">
              FOR STUDENTS
            </span>
            <button className="btn whitespace-nowrap text-[18px] rounded-full border text-white normal-case font-normal bg-[#23BDEEE5] lg:text-[22px]">
              Enter access code
            </button>
          </div>
        </CardCustom>
      </div>
      <div className="grid grid-cols-1 mt-10 md:grid-cols-2 md:items-center md:gap-10 lg:mt-20 lg:py-20 lg:gap-20">
        <div className="flex flex-col">
          <div className="">
            <PageTitleCustom
              className="md:text-start"
              textDark="Everything you can do in a physical classroom, "
              textLight="you can do with TOTC"
            />
            <p className="text-[#696984] text-center text-[18px] mt-5 md:text-start lg:text-[24px]">
              TOTC’s school management software helps traditional and online
              schools manage scheduling, attendance, payments and virtual
              classrooms all in one secure cloud-based system.
            </p>
          </div>
          <Link href="" className="text-[#696984] text-center text-[18px] top-64 left-4 underline md:text-start lg:text-start lg:text-[22px]">Learn more</Link>
        </div>
        <Image src='/images/home/video-landing.png' width={600} height={300} className="w-full mt-6" alt="video-landing"/>
      </div>
      <div></div>
    </div>
  );
}

export default About;
