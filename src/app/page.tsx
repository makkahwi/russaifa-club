"use client";

import BlogSection from "@/sections/Blog";
import GallerySection from "@/sections/Gallery";
import AboutIntroSection from "@/sections/Intro";
import TestimonialsSection from "@/sections/Testimonials";
import TrustedBySection from "@/sections/TrustedBy";
import WhoAmISection from "@/sections/WhoAmI";
import HeaderSection from "@/sections/Header";
import { Fragment } from "react";
import CoachingSections from "@/sections/Coaching";
import BusinessFacilitationSections from "@/sections/BusinessFacilitation";
import ContactSection from "@/sections/Contact";

const HomePage = () => {
  return (
    <Fragment>
      <HeaderSection />

      <AboutIntroSection />

      <WhoAmISection />

      <GallerySection />

      <CoachingSections />

      <BusinessFacilitationSections />

      <TrustedBySection />

      <TestimonialsSection />

      <BlogSection />

      <ContactSection />
    </Fragment>
  );
};

export default HomePage;
