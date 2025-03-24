import ContactSection from "@/sections/Tail/Contact";
import dynamic from "next/dynamic";
import { Fragment } from "react";
import PortalSection from "./Portal";

const VlogSection = dynamic(() => import("@/sections/Tail/Vlog"));

const TailSections = () => {
  return (
    <Fragment>
      {/* <VlogSection /> */}

      {/* <TrustedBySection /> */}

      {/* <TestimonialsSection /> */}

      {/* <BlogSection /> */}

      <PortalSection />

      <ContactSection />
    </Fragment>
  );
};

export default TailSections;
