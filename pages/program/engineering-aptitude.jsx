import React from "react";
import Poster from "../../components/Program/Engineering_Apt/Poster";
import Introd from "../../components/Program/Engineering_Apt/Introd";
import Covered from "../../components/Program/Engineering_Apt/Covered";
import Batch from "../../components/Program/Engineering_Apt/Batch";
import Structure from "../../components/Program/Engineering_Apt/Structure";
import Admission from "../../components/Program/Engineering_Apt/Admission";
import TopperTalk from "../../components/TopperTalk";
export default function GsEngg() {
  return (
    <div>
      <Poster />
      <Introd />
      <Covered />
      <Batch />
      <Structure />
      <Admission />
      <TopperTalk />
    </div>
  );
}
