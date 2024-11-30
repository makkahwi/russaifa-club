import { Fragment } from "react";

import AchievementsSection from "./Achievements";
import CoachingHeaderSection from "./Header";
import AboutIntroSection from "./Intro";

const CoachingSections = () => {
  return (
    <Fragment>
      <AboutIntroSection />

      <CoachingHeaderSection />

      {/* <TextSection /> */}

      {/* <AchievementsSection /> */}
    </Fragment>
  );
};

export default CoachingSections;
