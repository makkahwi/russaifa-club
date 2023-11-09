"use client";

import BlogSection from "@/sections/About/Blog";
import GallerySection from "@/sections/About/Gallery";
import AboutIntroSection from "@/sections/About/Intro";
import TestimonialsSection from "@/sections/About/Testimonials";
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

      <TestimonialsSection />

      <BlogSection />
    </Fragment>
  );
};

export default AboutPage;
