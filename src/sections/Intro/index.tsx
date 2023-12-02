import AboutIntroSection from "@/sections/Intro/Intro";
import GallerySection from "@/sections/Intro/Gallery";
import WhoAmISection from "@/sections/Intro/WhoAmI";
import { Fragment } from "react";

const IntroSections = () => {
  return (
    <Fragment>
      <AboutIntroSection />

      <WhoAmISection />

      <GallerySection />
    </Fragment>
  );
};

export default IntroSections;
