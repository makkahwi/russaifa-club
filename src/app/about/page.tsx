"use client";

import AboutIntroSection from "@/sections/About/Intro";
import HeaderSection from "@/sections/Header";
import { Fragment } from "react";

const AboutPage = () => {
  return (
    <Fragment>
      <HeaderSection />

      <AboutIntroSection />
    </Fragment>
  );
};

export default AboutPage;
