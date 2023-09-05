import CloudSoftware from "@/components/Home/CloudSoftware";
import HeaderLandingPage from "@/components/Home/Header";
import About from "@/components/Home/About";
import { Metadata } from "next";
import OurFeatures from "@/components/Home/OurFeatures";
import { Explore } from "@mui/icons-material";
import Testimonial from "@/components/Home/Testimonial";
import News from "@/components/Home/News";
import OurSuccess from "@/components/Home/OurSuccess";

export const metadata: Metadata = {
  title: "Home",
};

export default function Page() {
  return (
    <div className="">
      <HeaderLandingPage />
      <OurSuccess/>
      <CloudSoftware/>
      <About/>
      <OurFeatures/>
      {/* <Explore/> */}
      <Testimonial/>
      <News/>
    </div>
  );
}
