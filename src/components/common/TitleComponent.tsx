import React from "react";

type Props = {
    title: string,
    styleTitle?: string,
}

function TitleComponent({title, styleTitle}:Props) {
  return (
    <div className="flex items-center justify-between w-full">
      <h3 className={`text-[20px] font-bold xl:text-[30px] mb-10 ${styleTitle}`}>
        {title}
      </h3>
      <button className="hover:underline text-[#49BBBD]">See all</button>
    </div>
  );
}

export default TitleComponent;
