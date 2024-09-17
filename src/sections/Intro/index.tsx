import AboutIntroSection from "@/sections/Intro/Intro";
import WhoAmISection from "@/sections/Intro/WhoAmI";
import { Fragment } from "react";
import BadgesSection from "./Badges";

const IntroSections = () => {
  return (
    <Fragment>
      <BadgesSection />

      <AboutIntroSection />

      <WhoAmISection />

      {/* <GallerySection /> */}

      <div
        style={{
          height: "75vh",
          backgroundImage: `url('/images/gallery/d.jpg')`,
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
