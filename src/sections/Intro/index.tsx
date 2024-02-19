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
