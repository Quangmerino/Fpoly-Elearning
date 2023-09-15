import React from "react";
import PageTitleCustom from "../customs/PageTitleCustom";
import { pricing } from "@/data";
import CardCustom from "../customs/CardCustom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function Pricing() {
  return (
    <div className="lg:py-20">
      <PageTitleCustom
        styleTextLight="font-bold"
        textLight="Affordable pricing"
      />
      <div className="flex gap-4 flex-wrap items-center justify-center my-10">
        {pricing?.map((item, index) => {
          return (
            <CardCustom key={index} className={`p-6 max-w-[350px] border md:border-0 ${item?.type === '👤 Individual' ? 'shadow-xl' : ''}`}>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span>{item?.type}</span>
                  {item?.type === "👤 Individual" && (
                    <label className="border border-solid border-[#6C5CE7] rounded-2xl py-1 px-5">
                      BEST !
                    </label>
                  )}
                </div>
                <div className="flex items-end gap-2">
                  <label className="text-[48px] leading-[48px]">
                    {item?.costs}
                  </label>
                  /
                  <span className="uppercase text-[12px] font-semibold">
                    {item?.time}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  {item?.benefits?.map((be, index) => {
                    return (
                      <div key={index} className="flex items-center gap-1.5">
                        <CheckCircleIcon
                          className={`${
                            item.type === "Like a pussy"
                              ? "text-gray-400"
                              : item.type === "👤 Individual"
                              ? "text-yellow-400"
                              : "text-green-300"
                          }`}
                        />
                        <span>{be}</span>
                      </div>
                    );
                  })}
                </div>
                <button
                  className={`w-full border rounded-lg py-2 btn ${
                    item?.type === "👤 Individual"
                      ? "bg-[#49BBBD] text-white"
                      : "text-[#49BBBD]"
                  }`}
                >
                  {item?.type === "Like a pussy"
                    ? "Try for free"
                    : item?.type === "👤 Individual"
                    ? "Regular license"
                    : "Extended license"}
                </button>
              </div>
            </CardCustom>
          );
        })}
      </div>
    </div>
  );
}

export default Pricing;
