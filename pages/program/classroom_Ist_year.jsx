import React, { useState } from "react";
import TopperTalk from "../../components/TopperTalk";
import Intoduction from "../../components/Program/IstYear/Intoduction";
import Admission from "../../components/Program/IstYear/Admission";
import Batch from "../../components/Program/IstYear/Batch";
import Book from "../../components/Program/IstYear/Book";
export default function Classroom() {
  return (
    <div>
      <Intoduction />
       <Admission />
       <Batch />
       <Book />  
      <TopperTalk />
    </div>
  );
}
