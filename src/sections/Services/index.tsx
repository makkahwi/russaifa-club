import { Fragment } from "react";

import HeaderSection from "./Header";
import HqSection from "./Hq";
import BoardSection from "./Board";
import FearSection from "./Fears";
import HolisticSection from "./Holistic ";
import GallerySection from "./Gallery";

const ServiceSections = () => {
  return (
    <Fragment>
      <HeaderSection />

      {/* <FearSection /> */}

      {/* <HolisticSection /> */}

      <HqSection />

      <BoardSection />

      <GallerySection />

      {/* <TextSection /> */}

      {/* <AchievementsSection /> */}
    </Fragment>
  );
};

export default ServiceSections;
