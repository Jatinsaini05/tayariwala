import React from "react";

import { getCourseProgramByUri } from "../../../service/apiFetch";
import TopperTalk from "../../../components/TopperTalk";
import Intoduction from "../../../components/Program/IstYear/Intoduction";
import Admission from "../../../components/Program/IstYear/Admission";
import Batch from "../../../components/Program/IstYear/Batch";
import Book from "../../../components/Program/IstYear/Book";
import List from "../../../components/Program/List";

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  const { programUri } = context.params;


  try {
    const response = await getCourseProgramByUri(programUri);
    const programData = response;
    // console.log(data);
    return {
      props: programData,
      
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        programData: [],
      },
    };
  }
};

export default function index(programData) {
    console.log(programData);

  return (
    <div>
      <List data ={{img:programData?.thumb}} />
      <List data ={{content: programData?.desci, heading: programData?.name} } /> 
      <List data ={programData?.linkedBatchProduct } />
      <List data ={programData?.linkedOTSProduct } />
      <List data ={programData?.linkedVideoProductContent } />
      <List data ={programData?.linkedMainsProduct } />
      <List data ={programData?.freeResources } />
      <List data ={programData?.feeStructure } />
      <List data ={programData?.courseStructure } />
      <List data ={programData?.tAndC } />
      <List data ={programData?.more } />


      <TopperTalk />
    </div>
  );
}
