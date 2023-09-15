/* eslint-disable react/no-unescaped-entities */
import React from "react";
import PageTitleCustom from "../customs/PageTitleCustom";
import Image from "next/image";
import CardCustom from "../customs/CardCustom";
import Rating from "../customs/Rating";

function Testimonial() {
  return (
    <div className="py-20 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-4">
          <span className="h-[2px] w-16 bg-[#525596] block"></span>
          <span className="text-[#525596] text-[20px]">TESTIMONIAL</span>
        </div>
        <PageTitleCustom textDark="What They Say?" className="text-[44px] lg:text-[60px]" />
        <div className="text-[#696984] text-[20px] text-center flex flex-col gap-6 mb-6 lg:text-start lg:text-[26px]">
          <p>
            TOTC has got more than 100k positive ratings from our users around
            the world.
          </p>
          <p>
            Some of the students and teachers were greatly helped by the
            Skilline.
          </p>
          <p>Are you too? Please give your assessment</p>
        </div>
        <button className="btn rounded-full border border-solid border-teal-400 text-teal-400 normal-case bg-transparent">
          Write your assessment
        </button>
      </div>
      <div className="relative">
        <Image src='/images/home/testimonial.png' width={300} height={600} alt=""/>
        <CardCustom className="flex overflow-hidden absolute left-10 -bottom-20 z-10 bg-white">
          <div className="h-auto w-4 bg-[#F67766]"></div>
          <div className="p-4 lg:p-8">
            <div className="flex gap-4 lg:gap-10">
              <div className="w-px bg-gray-400"></div>
              <p className="text-[#5F5F7E] text-[13px] lg:text-[22px]">
                "Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. TOTC is exactly what our business has been lacking."
              </p>
            </div>
            <div className="flex justify-between items-center mt-6">
              <span className="text-[20px] text-[#5F5F7E] lg:text-[24px]">Gloria Rose</span>
              <div>
                <Rating/>
                <span className="text-[#5F5F7E] text-[14px] w-full lg:text-[18px]">12 reviews at Yelp</span>
              </div>
            </div>
          </div>
        </CardCustom>
      </div>
    </div>
  );
}

export default Testimonial;
