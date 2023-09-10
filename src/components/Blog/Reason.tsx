import React from "react";
import PageTitleCustom from "../customs/PageTitleCustom";
import ButtonCustom from "../customs/ButtonCustom";
import Image from "next/image";

function Reason() {
  return (
    <div className="grid bg-[#9DCCFF] grid-cols-1 gap-10 -mx-6 px-6 py-10 md:grid-cols-2 md:px-20 md:-mx-20 2xl:-mx-40 2xl:px-30">
      <div className="flex flex-col items-center">
        <div className="flex items-center space-x-1 w-full justify-center md:justify-start">
          <span className="text-[#000000]">By Themadbrains in</span>
          <span className="font-semibold text-[#49BBBD]">inspiration</span>
        </div>
        <PageTitleCustom className="my-3 md:text-start" textDark="Why Swift UI Should Be on the Radar of Every Mobile Developer" />
        <p className='text-[#696984] text-center text-[18px] md:text-[20px] md:text-start lg:text-[24px] lg:text-start'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit,
          sed do eiusmod tempor
        </p>
        <div className="w-full flex justify-center md:justify-start">
          <ButtonCustom name="Start learning now" className="!rounded-lg bg-[#49BBBD] border-0 text-white normal-case my-3"/>
        </div>
      </div>
      <div>
        <Image src='/images/blog/img-blog-page.png' alt="" width={600} height={300}/>
      </div>
    </div>
  );
}

export default Reason;
