import WhoAmISection from "@/sections/Intro/WhoAmI";
import { Fragment } from "react";

const IntroSections = () => {
  return (
    <Fragment>
      <WhoAmISection />

      <div
        style={{
          height: "75vh",
          backgroundImage: `url('/images/gallery/1.jpeg')`,
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
