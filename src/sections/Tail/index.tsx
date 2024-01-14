"use client";
import dynamic from "next/dynamic";
import { Fragment } from "react";

const TailSections = () => {
  const BlogSection = dynamic(() => import("@/sections/Tail/Blog"));
  const ContactSection = dynamic(() => import("@/sections/Tail/Contact"));
  const TestimonialsSection = dynamic(
    () => import("@/sections/Tail/Testimonials")
  );
  const TrustedBySection = dynamic(() => import("@/sections/Tail/TrustedBy"));
  const VlogSection = dynamic(() => import("@/sections/Tail/Vlog"));

  return (
    <Fragment>
      <VlogSection />

      <TrustedBySection />

      <TestimonialsSection />

      <BlogSection />

      <ContactSection />
    </Fragment>
  );
};

export default TailSections;
