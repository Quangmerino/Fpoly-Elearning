import React from "react";
import SliderCustom from "../customs/SliderCustom";
import CardCustom from "../customs/CardCustom";
import { reviews } from "@/data";
import Image from "next/image";

function Review() {
  return (
    <div className="bg-[#696984] pb-32 px-6 -mx-6 md:-mx-20 2xl:px-40 2xl:-mx-40">
      <h3 className="text-[36px] text-center py-20">What our students have to say</h3>
      <SliderCustom
        className="relative"
        customArrow="flex items-center justify-between w-full absolute top-1/2 -translate-y-1/2 z-10"
        slideToScroll={4}
        slideToShow={4}
        styleButton="!rounded-full"
      >
        {reviews?.map((item, index) => {
          return (
            <CardCustom
              key={index}
              className="flex flex-col items-center bg-white p-5"
            >
              <Image src={item?.image} className="w-[100px] h-[100px] object-cover rounded-lg" width={150} height={150} alt="" />
              <span className="my-5 font-bold">{item?.name}</span>
              <p className="text-center">{item?.content}</p>
            </CardCustom>
          );
        })}
      </SliderCustom>
    </div>
  );
}

export default Review;
