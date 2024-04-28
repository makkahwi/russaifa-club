import BlogSection from "@/sections/Tail/Blog";
import ContactSection from "@/sections/Tail/Contact";
import TestimonialsSection from "@/sections/Tail/Testimonials";
import TrustedBySection from "@/sections/Tail/TrustedBy";
import dynamic from "next/dynamic";
import { Fragment } from "react";

const VlogSection = dynamic(() => import("@/sections/Tail/Vlog"));

const TailSections = () => {
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
