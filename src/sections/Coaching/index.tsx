import { Fragment } from "react";

import AchievementsSection from "./Achievements";
import CoachingHeaderSection from "./Header";

const CoachingSections = () => {
  return (
    <Fragment>
      <CoachingHeaderSection />

      {/* <TextSection /> */}

      <AchievementsSection />
    </Fragment>
  );
};

export default CoachingSections;
