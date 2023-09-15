import { darkModeAtom } from "@/stores/darkMode.atom";
import { useAtom } from "jotai";
import React, { useState } from "react";

function CoachingLessons() {
  const [theme] = useAtom(darkModeAtom);
//   const [] = useState({})
  return (
    <>
      <div
        className={`flex flex-col items-center gap-8 rounded-2xl py-8 px-10 ${
          theme === "light" ? "bg-[#252641] text-white" : "bg-white text-black"
        } md:px-28 lg:px-40`}
      >
        <h3 className="text-[22px] text-center md:text-[30px] lg:text-[36px]">
          Online coaching lessons for remote learning.
        </h3>
        <p className="text-[18px] text-center md:text-[22px] lg:text-[24px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit,
          sed do eiusmod tempor
        </p>
        <button className="btn rounded-lg bg-[#49BBBD] normal-case text-white">
          Start learning now
        </button>
      </div>
      <div className="flex flex-col items-center gap-8 my-10">
        <h3 className="text-[22px] text-center md:text-[30px] lg:text-[36px]">
          Online coaching lessons for remote learning
        </h3>
        <select className="select w-full border border-solid !outline-0">
            <option className="w-full">Lorem ipsum dolor sit amet</option>
        </select>
        <select className="select w-full !outline-0">
            <option>Consectetur adipiscing elit, sed do</option>
        </select>
        <select className="select w-full !outline-0">
            <option>Eiusmod tempos Lorem ipsum</option>
        </select>
        <select className="select w-full !outline-0">
            <option>Lorem ipsum dolor sit amet</option>
        </select>
        <select className="select w-full !outline-0">
            <option>Lorem ipsum dolor sit amet</option>
        </select>
      </div>
    </>
  );
}

export default CoachingLessons;
