import React from "react";
import { relatedBlog } from "@/data";
import CardComponent from "../common/CardComponent";
import Image from "next/image";
import SliderCustom from "../customs/SliderCustom";
import TitleComponent from "../common/TitleComponent";

function RelatedBlog() {
  return (
    <div className="mb-20 bg-[#9DCCFF]/20 md:px-20 md:-mx-20 2xl:-mx-40 2xl:px-32 py-20">
      <TitleComponent title='Related Blog' styleTitle="text-white"/>
      <SliderCustom
        className="relative"
        customArrow="absolute -bottom-14 right-0 flex items-center gap-5"
      >
        {relatedBlog?.map((item, index) => {
          return (
            <CardComponent
              key={index}
              className={`p-6 rounded-2xl border bg-white`}
              image={item?.image}
              title={item?.title}
              description={item?.description}
              imageStyle="h-[200px] lg:h-[400px]"
              info={
                <div className="flex items-center gap-4 my-6">
                  <Image
                    className="rounded-full w-12 h-12 object-cover"
                    src={item?.avatar}
                    width={50}
                    height={50}
                    alt=""
                  />
                  <span>{item?.userName}</span>
                </div>
              }
            />
          );
        })}
      </SliderCustom>
    </div>
  );
}

export default RelatedBlog;
