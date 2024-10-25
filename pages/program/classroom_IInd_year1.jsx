import React from "react";
import TopperTalk from "../../components/TopperTalk";
import Poster from "../../components/Program/IIndYear/Poster";
import Introd from "../../components/Program/IIndYear/Introd";
import Timing from "../../components/Program/IIndYear/Timing";
import Batch from "../../components/Program/IIndYear/Batch";
import Feature from "../../components/Program/IIndYear/Feature";
import Enroll from "../../components/Program/IIndYear/Enroll";
import General from "../../components/Program/IIndYear/General";
export default function Classroom() {
  return (
    <>
      <Poster />
      <Introd />
      <Timing />
      <Batch />
      <Feature />
      <Enroll />
      <General />
      <TopperTalk />
    </>
  );
}
