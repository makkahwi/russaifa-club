import { Fragment } from "react";
import BusinessFacilitationHeaderSection from "./Header";
import TextSection from "./TextSection";
import JoinMeSection from "./JoinMe";

const BusinessFacilitationSections = () => {
  return (
    <Fragment>
      <BusinessFacilitationHeaderSection />

      <TextSection />

      <JoinMeSection />
    </Fragment>
  );
};

export default BusinessFacilitationSections;
