import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import User from "../User/User";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SwitchTheme from "../DarkMode/DarkMode";

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className="px-6 overflow-hidden md:px-20 2xl:px-40 relative">
      <Header/>
      <div className="mt-20">
        {children}
      </div>
      <Footer/>
      <SwitchTheme/>
    </div>
  );
}

export default Layout;
