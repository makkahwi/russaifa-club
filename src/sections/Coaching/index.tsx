import { Fragment } from "react";
import CoachingHeaderSection from "./Header";
import TextSection from "./TextSection";
import AchievementsSection from "./Achievements";

const CoachingSections = () => {
  return (
    <Fragment>
      <CoachingHeaderSection />

      <TextSection />

      <AchievementsSection />
    </Fragment>
  );
};

export default CoachingSections;
