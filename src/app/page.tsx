"use client";

import BlogSection from "@/sections/Blog";
import BusinessFacilitationSections from "@/sections/BusinessFacilitation";
import CoachingSections from "@/sections/Coaching";
import ContactSection from "@/sections/Contact";
import HeaderSection from "@/sections/Header";
import IntroSections from "@/sections/Intro";
import TestimonialsSection from "@/sections/Testimonials";
import TrustedBySection from "@/sections/TrustedBy";
import { Fragment } from "react";

const HomePage = () => {
  return (
    <Fragment>
      <HeaderSection />

      <IntroSections />

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
