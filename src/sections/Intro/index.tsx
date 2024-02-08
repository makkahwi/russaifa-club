import dynamic from "next/dynamic";
import { Fragment } from "react";

const IntroSections = () => {
  const AboutIntroSection = dynamic(() => import("@/sections/Intro/Intro"));
  const GallerySection = dynamic(() => import("@/sections/Intro/Gallery"));
  const WhoAmISection = dynamic(() => import("@/sections/Intro/WhoAmI"));

  return (
    <Fragment>
      <AboutIntroSection />

      <WhoAmISection />

      {/* <GallerySection /> */}
    </Fragment>
  );
};

export default IntroSections;
