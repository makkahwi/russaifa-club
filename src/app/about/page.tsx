"use client";

import GallerySection from "@/sections/About/Gallery";
import AboutIntroSection from "@/sections/About/Intro";
import TrustedBySection from "@/sections/About/TrustedBy";
import WhoAmISection from "@/sections/About/WhoAmI";
import HeaderSection from "@/sections/Header";
import { Fragment } from "react";

const AboutPage = () => {
  return (
    <Fragment>
      <HeaderSection />

      <AboutIntroSection />

      <WhoAmISection />

      <GallerySection />

      <TrustedBySection />
    </Fragment>
  );
};

export default AboutPage;
