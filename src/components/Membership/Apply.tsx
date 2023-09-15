import { apply } from "@/data";
import React from "react";
import CardComponent from "../common/CardComponent";
import ButtonCustom from "../customs/ButtonCustom";
import AndroidIcon from "@mui/icons-material/Android";
import AppleIcon from "@mui/icons-material/Apple";
import useMeasure from "react-use-measure";

function Apply() {
  const [sizeRef, size] = useMeasure()
  
  return (
    <div className="relative">
      <div 
        ref={sizeRef} 
        style={{marginTop: - size.height/2}} 
        className="absolute bg-[#252641] rounded-2xl w-full p-5 gap-4 flex flex-col justify-center items-center md:flex-row md:p-10 md:justify-between"
      >
        <h3 className="text-white">APP is available for free</h3>
        <div className="flex items-center gap-5">
          <ButtonCustom
            className="rounded-md bg-[#29B9E7] text-white"
            name="Android APP"
            icon={<AndroidIcon />}
          />
          <ButtonCustom
            className="rounded-md bg-[#49BBBD] text-white"
            name="IOS APP"
            icon={<AppleIcon />}
          />
        </div>
      </div>
      <div className="py-40">
        <div className="grid grid-cols-1 gap-32 md:gap-16 md:grid-cols-2 lg:gap-24 xl:gap-28 2xl:gap-32">
          {apply?.map((item, index) => {
            return (
              <CardComponent
                action
                key={index}
                className="relative border rounded-2xl p-4 md:border-0 md:p-0"
                image={item?.image}
                title={item?.title}
                titleStyle="py-6"
                description={item?.des}
                buttonName={item?.buttonName}
                buttonStyle="absolute right-0 -bottom-20 text-white normal-case font-base"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Apply;
