import { Fragment } from "react";

import HeaderSection from "./Header";
import PediaSection from "./Pedia";
import ProgramsSection from "./Programs";

const ServiceSections = () => {
  return (
    <Fragment>
      <HeaderSection />

      <ProgramsSection />

      <PediaSection />

      {/* <TextSection /> */}

      {/* <AchievementsSection /> */}
    </Fragment>
  );
};

export default ServiceSections;
