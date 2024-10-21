import React from "react";
import Introd from "../../components/Program/Postal_Program/Introd";
import Poster from "../../components/Program/Postal_Program/Poster";
import StudyPackage from "../../components/Program/Postal_Program/StudyPackage";
import TermsConditions from "../../components/Program/Postal_Program/TermsConditions";
import Results from "../../components/Program/Postal_Program/Results";
import TopperTalk from "../../components/TopperTalk";
export default function PostalProgram() {
  return (
    <>
      <Poster />
      <Introd />
      <StudyPackage />
      <TermsConditions />
      <Results />
      {/* <StudyPackage />
      <TermsConditions />
      <Results /> */}
      <TopperTalk />
    </>
  );
}
