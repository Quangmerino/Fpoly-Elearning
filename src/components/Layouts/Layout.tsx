import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import User from "../User/User";

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className="bg-white px-6 overflow-hidden md:px-20 2xl:px-40">
      <Header/>
      {children}
      <Footer/>
    </div>
  );
}

export default Layout;
