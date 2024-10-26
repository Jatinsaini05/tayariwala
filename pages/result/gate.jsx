import React from "react";
import Gate from "../../components/Result/Gate";

import { getPageData } from "../../service/apiFetch";
export const getStaticProps = async () => {
  try {
    const res = await getPageData("gate", {
      // contentBlock: "Object",
    });
    const pageData = res;
    return {
      props: {
        pageData,
      },
    };
  } catch (err) {
    console.log("Error", err);
    return {
      props: {
        pageData: [],
      },
    };
  }
};

export default function resultGate({ pageData }) {
  return (
    <div>
      {/* {JSON.stringify(pageData)} */}
      <Gate topperData = {pageData} />
    </div>
  );
}
