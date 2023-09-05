import React from "react";
import PageTitleCustom from "../customs/PageTitleCustom";
import Link from "next/link";
import CardComponent from "../common/CardComponent";

function News() {
  return (
    <div className="py-20">
      <PageTitleCustom textDark="Lastest News and Resources" className="flex" />
      <p className="text-[#696984] text-[24px] text-center mt-10">
        See the developments that have occurred to TOTC in the world
      </p>
      <div className="grid grid-cols-1 mt-20 gap-10 md:grid-cols-2 md:gap-32">
        <CardComponent
          action={true}
          className="flex flex-col items-center gap-10 xl:items-start 2xl:flex-row"
          image="/images/blog/img-blog-page.png"
          imageStyle="min-w-[300px]"
          headerStyle="flex flex-col gap-6"
          buttonStyle="w-[150px]"
          title="Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution"
          titleStyle="lg:my-6"
          description="Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively"
          footer={
            <Link
              className="underline text-[24px] text-[#696984] block lg:mt-6"
              href="#"
            >
              Read more
            </Link>
          }
        />
        <div className="flex flex-col gap-10">
          <CardComponent
            action={true}
            className="flex flex-col items-center gap-10 xl:flex-row"
            headerStyle="relative"
            image="/images/blog/mkt-art-1.png"
            imageStyle="!w-[300px]"
            buttonName="PRESS RELEASE"
            buttonStyle="absolute right-4 bottom-4"
            title="Zoom’s earliest investors are betting millions on a better Zoom for schools"
            titleStyle="!text-[22px]"
            description="Zoom was never created to be a consumer product. Nonetheless, the"
          />
          <CardComponent
            action={true}
            className="flex items-center gap-10 flex-col xl:flex-row"
            headerStyle="relative"
            image="/images/blog/mkt-art-2.png"
            imageStyle="!w-[300px]"
            buttonStyle="absolute right-4 bottom-4"
            title="Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand"
            titleStyle="!text-[22px]"
            description="Class Technologies Inc., the company that created Class,"
          />
          <CardComponent
            action={true}
            className="flex items-center gap-10 flex-col xl:flex-row"
            headerStyle="relative"
            image="/images/blog/mkt-art-3.png"
            imageStyle="!w-[300px]"
            buttonStyle="absolute right-4 bottom-4"
            title="Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms"
            titleStyle="!text-[22px]"
            description="This year, investors have reaped big financial returns from betting on Zoom"
          />
        </div>
      </div>
    </div>
  );
}

export default News;
