"use client";

import BlogSection from "@/sections/Tail/Blog";
import ContactSection from "@/sections/Tail/Contact";
import TestimonialsSection from "@/sections/Tail/Testimonials";
import TrustedBySection from "@/sections/Tail/TrustedBy";
import { Fragment } from "react";

const TailSections = () => {
  return (
    <Fragment>
      <TrustedBySection />

      <TestimonialsSection />

      <BlogSection />

      <ContactSection />
    </Fragment>
  );
};

export default TailSections;
