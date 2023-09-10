import { marketing } from "@/data";
import React from "react";
import CardComponent from "../common/CardComponent";
import GridViewIcon from "@mui/icons-material/GridView";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function Marketing() {
  return (
    <div className="">
      <div className="flex items-center justify-between w-full">
        <h3 className="text-black font-bold xl:text-[30px] mb-10">Marketing Articles</h3>
        <button>See all</button>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-4 lg:gap-12">
        {marketing?.map((item, index) => {
          return (
            <CardComponent
              key={index}
              className="shadow-2xl rounded-lg p-4"
              image={item?.image}
              info={
                <div className="text-black flex items-center justify-between my-4">
                  <div className="flex items-center gap-2">
                    <GridViewIcon />
                    <span>Design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AccessTimeIcon />
                    <span>Month</span>
                  </div>
                </div>
              }
              title={item?.title}
              titleStyle="!text-[24px]"
              desStyle="!text-[18px]"
              description={item?.description}
              footer={
                <div className="flex items-center justify-between">

                </div>
              }
            />
          );
        })}
      </div>
    </div>
  );
}

export default Marketing;
