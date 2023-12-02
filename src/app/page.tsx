"use client";

import BlogSection from "@/sections/Tail/Blog";
import BusinessFacilitationSections from "@/sections/BusinessFacilitation";
import CoachingSections from "@/sections/Coaching";
import ContactSection from "@/sections/Tail/Contact";
import HeaderSection from "@/sections/Header";
import IntroSections from "@/sections/Intro";
import TailSections from "@/sections/Tail";
import TestimonialsSection from "@/sections/Tail/Testimonials";
import TrustedBySection from "@/sections/Tail/TrustedBy";
import { Fragment } from "react";

const HomePage = () => {
  return (
    <Fragment>
      <HeaderSection />

      <IntroSections />

      <CoachingSections />

      <BusinessFacilitationSections />

      <TailSections />
    </Fragment>
  );
};

export default HomePage;
