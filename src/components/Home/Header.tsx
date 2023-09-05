import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EmailIcon from "@mui/icons-material/Email";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PollIcon from "@mui/icons-material/Poll";
import Image from "next/image";

function HeaderLandingPage() {
  return (
    <div className="bg-[#00FFF0] grid grid-cols-1 py-20 px-6 -mx-6 md:-mx-20 lg:grid-cols-5 lg:items-center lg:gap-20 lg:px-10 2xl:px-28 2xl:-mx-40">
      <div className="lg:col-span-2 2xl:py-40">
        <p className="font-bold text-center text-[30px] lg:text-start xl:text-[46px] 2xl:text-[54px]">
          <span className="text-[#F48C06] mr-1.5">Studying</span>
          Online is now much easier
        </p>
        <p className="text-base text-center lg:text-start lg:text-[24px]">
          TOTC is an interesting platform that will teach you in more an
          interactive way
        </p>
        <div className="flex flex-col items-center gap-4 mt-6 xl:mt-0 xl:flex-row">
          <button className="btn bg-transparent text-white rounded-full ">
            Join for free
          </button>
          <div className="flex items-center gap-3">
            <PlayCircleIcon className="w-16 h-16 cursor-pointer hover:scale-110" />
            <span className="text-[#252641]">Watch how it works</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 justify-center lg:col-span-3 lg:flex-row lg:relative">
        <PollIcon className="hidden p-1.5 bg-[#F25471] rounded-md w-12 h-12 lg:flex lg:absolute lg:top-32 lg:right-10" />
        <div className="rounded-xl p-5 flex items-center gap-5 opacity-90 bg-white mt-10 lg:absolute lg:left-0 lg:top-12 xl:top-40">
          <CalendarMonthIcon className="p-1.5 bg-[#29B9E7] rounded-md w-12 h-12" />
          <div className="flex flex-col text-[#545567]">
            <span className="text-[24px]">250k</span>
            <span className="text-[20px]">Assisted Student</span>
          </div>
        </div>
        <Image src="/images/home/girl.png" width={500} height={800} alt="" />
        <div className="hidden rounded-xl p-5 items-center gap-5 bg-white absolute right-0 opacity-90 lg:flex">
          <EmailIcon className="p-1.5 bg-[#F88C3D] rounded-md w-12 h-12" />
          <div className="flex flex-col text-[#545567]">
            <span className="text-[24px]">Congratulations</span>
            <span className="text-[20px]">Your admission completed</span>
          </div>
        </div>
        <div className="rounded-xl p-5 flex flex-col items-center gap-5 bg-white lg:absolute lg:left-0 lg:bottom-0 xl:bottom-24 opacity-90">
          <div className="flex gap-4 items-center">
            <div className="avatar online">
              <Image
                className="rounded-full object-contain"
                src="/images/avatar.jpeg"
                alt=""
                width={50}
                height={50}
              />
            </div>
            <div className="flex flex-col text-[#545567]">
              <span className="text-[24px]">Congratulations</span>
              <span className="text-[20px]">Your admission completed</span>
            </div>
          </div>
          <button className="btn bg-[#F25471] rounded-full text-white">Join Now</button>
        </div>
      </div>
    </div>
  );
}

export default HeaderLandingPage;
