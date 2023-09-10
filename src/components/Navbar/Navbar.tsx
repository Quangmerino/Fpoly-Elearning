import { navigation } from "@/data";
import Link from "next/link";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { usePathname } from "next/navigation";
import { darkModeAtom } from "@/stores/darkMode.atom";
import { useAtom } from "jotai";

function Navbar() {
  const pathname = usePathname();
  const [theme] = useAtom(darkModeAtom);

  return (
    <ul className="flex w-full h-screen bg-black/80 flex-col items-center lg:justify-center lg:bg-transparent lg:h-full lg:flex-row">
      {navigation?.map((item, index) => {
        return (
          <li
            key={index + item.name}
            className="group w-full cursor-pointer lg:w-fit"
          >
            <Link
              className={`py-3 px-4 block lg:text-[20px]  lg:px-8 lg:py-6 xl:text-[22px] ${
                pathname === "/" || theme === "light"
                  ? "text-white"
                  : "text-black"
              }`}
              href={item?.link}
            >
              {item.name}
            </Link>
            <div
              className={`hidden lg:flex w-0 h-[3px] group-hover:w-full transition-all duration-500 rounded-lg ${
                pathname === "/" || theme === "light"
                  ? "group-hover:bg-[#f2f6f6]"
                  : "group-hover:bg-[#000000]"
              }`}
            ></div>
          </li>
        );
      })}
    </ul>
  );
}

function NavbarMobile() {
  const [open, setOpen] = useState(false);
  return <MenuIcon />;
}

export { Navbar, NavbarMobile };
