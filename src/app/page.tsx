"use client";

import BlogSection from "@/sections/Blog";
import GallerySection from "@/sections/Gallery";
import AboutIntroSection from "@/sections/Intro";
import TestimonialsSection from "@/sections/Testimonials";
import TrustedBySection from "@/sections/TrustedBy";
import WhoAmISection from "@/sections/WhoAmI";
import ContactSection from "@/sections/Blog";
import HeaderSection from "@/sections/Header";
import { Fragment } from "react";

const HomePage = () => {
  return (
    <Fragment>
      <HeaderSection />

      <AboutIntroSection />

      <WhoAmISection />

      <GallerySection />

      <TrustedBySection />

      <TestimonialsSection />

      <BlogSection />

      <ContactSection />
    </Fragment>
  );
};

export default HomePage;
