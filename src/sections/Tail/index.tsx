import ContactSection from "@/sections/Tail/Contact";
import { Fragment } from "react";
import BlogSection from "./Blog";
import TestimonialsSection from "./Testimonials";
import TrustedBySection from "./TrustedBy";

const TailSections = () => {
  return (
    <Fragment>
      {/* <VlogSection /> */}

      <TrustedBySection />

      <TestimonialsSection />

      <BlogSection />

      <ContactSection />
    </Fragment>
  );
};

export default TailSections;
