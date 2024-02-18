"use client";
import BookNowButton from "@/components/BookNowButton";
import ScrollUpButton from "@/components/ScrollUp";
import dynamic from "next/dynamic";
import { Fragment } from "react";

const HomePage = () => {
  const TailSections = dynamic(() => import("@/sections/Tail"));
  const IntroSections = dynamic(() => import("@/sections/Intro"));
  const HeaderSection = dynamic(() => import("@/sections/Header"));
  const FooterSection = dynamic(() => import("@/sections/Footer"));
  const CoachingSections = dynamic(() => import("@/sections/Coaching"));
  const BusinessFacilitationSections = dynamic(
    () => import("@/sections/BusinessFacilitation")
  );

  return (
    <Fragment>
      <HeaderSection />

      <IntroSections />

      <CoachingSections />

      <BusinessFacilitationSections />

      <TailSections />

      <FooterSection />

      <BookNowButton />

      {/* <ScrollUpButton /> */}
    </Fragment>
  );
};

export default HomePage;
