import React from "react";
import PageTitleCustom from "../customs/PageTitleCustom";
import DescriptionIcon from "@mui/icons-material/Description";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GroupsIcon from "@mui/icons-material/Groups";
import CardCustom from "../customs/CardCustom";

type Props = {};

const cloudSoftware = [
  {
    icon: <DescriptionIcon className="w-10 h-10 text-white" />,
    title: "Online Billing, Invoicing, & Contracts",
    description:
      "Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts",
  },
  {
    icon: <CalendarMonthIcon className="w-10 h-10 text-white" />,
    title: "Easy Scheduling & Attendance Tracking",
    description:
      "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance",
  },
  {
    icon: <GroupsIcon className="w-10 h-10 text-white" />,
    title: "Customer Tracking",
    description:
      "Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization ",
  },
];

function CloudSoftware({}: Props) {
  return (
    <div className="flex flex-col items-center pb-20">
      <PageTitleCustom
        textDark="All-In-One"
        textLight="Cloud Software."
        className="font-bold space-x-1.5 gap-1.5 md:flex text-center"
        styleTextDark="text-end"
        styleTextLight="text-start"
      />
      <p className="text-[#696984] text-[18px] text-center lg:text-[22px]">
        TOTC is one powerful online software suite that combines all the tools
        needed to run a successful school or office.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-20">
        {cloudSoftware?.map((item, index) => {
          return (
            <div key={index} className="relative">
              <CardCustom className="py-5 px-10">
                <div
                  className={`flex items-center justify-center rounded-full absolute p-3 left-1/2 -translate-x-1/2 -top-8 ${
                    index === 0
                      ? "bg-[#5B72EE]"
                      : index === 1
                      ? "bg-[#00CBB8]"
                      : "bg-[#29B9E7]"
                  }`}
                >
                  {item?.icon}
                </div>
                <h3 className="text-[#2F327D] text-[30px] text-center justify-center h-28 mb-5 mt-16 line-clamp-2 flex items-center">
                  {item?.title}
                </h3>
                <p className="text-[#696984] text-[20px] text-center line-clamp-5" title={item?.description}>
                  {item?.description}
                </p>
              </CardCustom>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CloudSoftware;
