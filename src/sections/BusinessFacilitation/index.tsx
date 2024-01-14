import { Fragment } from "react";

import BusinessFacilitationHeaderSection from "./Header";
import JoinMeSection from "./JoinMe";
import TextSection from "./TextSection";
import UniqueProgramsSection from "./UniquePrograms";

const BusinessFacilitationSections = () => {
  return (
    <Fragment>
      <BusinessFacilitationHeaderSection />

      <TextSection />

      <UniqueProgramsSection />

      <JoinMeSection />
    </Fragment>
  );
};

export default BusinessFacilitationSections;
