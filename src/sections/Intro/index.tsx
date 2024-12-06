import WhoAmISection from "@/sections/Intro/WhoAmI";
import { Fragment } from "react";

import AboutIntroSection from "../Coaching/Intro";

const IntroSections = () => {
  return (
    <Fragment>
      <AboutIntroSection />

      <WhoAmISection />

      {/* <GallerySection /> */}

      <div
        style={{
          height: "75vh",
          backgroundImage: `url('/images/gallery/BG.jpeg')`,
          backgroundPositionX: "center",
          backgroundPositionY: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="w-100 p-0 m-0"
      />
    </Fragment>
  );
};

export default IntroSections;
