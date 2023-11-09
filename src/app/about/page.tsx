"use client";

import AboutIntroSection from "@/sections/About/Intro";
import WhoAmISection from "@/sections/About/WhoAmI";
import HeaderSection from "@/sections/Header";
import { Fragment } from "react";

const AboutPage = () => {
  return (
    <Fragment>
      <HeaderSection />

      <AboutIntroSection />

      <WhoAmISection />
    </Fragment>
  );
};

export default AboutPage;
