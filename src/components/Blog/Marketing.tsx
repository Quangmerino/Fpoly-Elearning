import { marketing } from "@/data";
import React from "react";
import CardComponent from "../common/CardComponent";
import GridViewIcon from "@mui/icons-material/GridView";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TitleComponent from "../common/TitleComponent";

function Marketing() {
  return (
    <div className="mb-20">
      <TitleComponent title="Marketing Articles"/>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 xl:gap-12">
        {marketing?.map((item, index) => {
          return (
            <CardComponent
              key={index}
              className="shadow-xl rounded-2xl p-4"
              image={item?.image}
              info={
                <div className="flex items-center justify-between my-4">
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
