import ServiceSections from "@/sections/Services";
import FooterSection from "@/sections/Footer";
import HeaderSection from "@/sections/Header";
import IntroSections from "@/sections/Intro";
import NavbarComp from "@/sections/Navbar";
import TailSections from "@/sections/Tail";
import { Fragment } from "react";

const HomePage = () => {
  return (
    <Fragment>
      <NavbarComp />

      <HeaderSection />

      <IntroSections />

      <ServiceSections />

      <TailSections />

      <FooterSection />
    </Fragment>
  );
};

export default HomePage;
