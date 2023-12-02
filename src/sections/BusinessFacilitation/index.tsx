import { Fragment } from "react";
import BusinessFacilitationHeaderSection from "./Header";
import TextSection from "./TextSection";
import JoinMeSection from "./JoinMe";
import UniqueProgramsSection from "./UniquePrograms";

const BusinessFacilitationSections = () => {
  return (
    <Fragment>
      <BusinessFacilitationHeaderSection />

      <TextSection />

      <JoinMeSection />

      <UniqueProgramsSection />
    </Fragment>
  );
};

export default BusinessFacilitationSections;
