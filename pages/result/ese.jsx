import React from 'react'
import ESE from '../../components/Result/ESE'
import { getPageData } from "../../service/apiFetch";
export const getStaticProps = async () => {
  try {
    const res = await getPageData("ese", {
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

const EseIes = ({pageData}) => {
  return (
    <div>
      <div>
        <ESE  topperData = {pageData}/>
      </div>
    </div>
  )
}

export default EseIes