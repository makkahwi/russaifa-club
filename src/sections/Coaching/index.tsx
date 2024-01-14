import dynamic from "next/dynamic";
import { Fragment } from "react";

const CoachingSections = () => {
  const TextSection = dynamic(() => import("./TextSection"));
  const CoachingHeaderSection = dynamic(() => import("./Header"));
  const AchievementsSection = dynamic(() => import("./Achievements"));

  return (
    <Fragment>
      <CoachingHeaderSection />

      {/* <TextSection /> */}

      <AchievementsSection />
    </Fragment>
  );
};

export default CoachingSections;
