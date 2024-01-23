import dynamic from "next/dynamic";
import { Fragment } from "react";

const BusinessFacilitationSections = () => {
  const BusinessFacilitationHeaderSection = dynamic(() => import("./Header"));
  const JoinMeSection = dynamic(() => import("./JoinMe"));
  const TextSection = dynamic(() => import("./TextSection"));
  const UniqueProgramsSection = dynamic(() => import("./UniquePrograms"));

  return (
    <Fragment>
      <BusinessFacilitationHeaderSection />

      {/* <TextSection /> */}

      <UniqueProgramsSection />

      <JoinMeSection />
    </Fragment>
  );
};

export default BusinessFacilitationSections;
