import React from "react";
import CardCustom from "../customs/CardCustom";
import ButtonCustom from "../customs/ButtonCustom";
import { blogList } from "@/data";
import Image from "next/image";

function ReadingList() {
  return (
    <div className="py-10">
      <h3 className="text-black text-[24px] font-bold mb-10 w-full text-center lg:text-start md:text-[28px] lg:text-[30px]">Reading blog list</h3>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 xl:gap-12">
        {blogList?.map((item, index) => {
          return (
            <CardCustom className="relative" key={index}>
              <Image
                className="object-cover w-full"
                src={item?.image}
                alt=""
                width={400}
                height={400}
              />
              <ButtonCustom className="absolute left-1/2 -translate-x-1/2 bottom-4 w-[120px]" name={item?.name} />
            </CardCustom>
          );
        })}
      </div>
    </div>
  );
}

export default ReadingList;
