import React from "react";
// import { Lato } from '@next/font/google';
import WalkIn from "../components/Admissions/WalkIn";
import DemandDraft from "../components/Admissions/DemandDraft";
import OnlineAdmission from "../components/Admissions/OnlineAdmission";
import TopperTalk from "../components/TopperTalk";
import { getPageData } from "../service/apiFetch";
// const lato = Lato({
//     subsets: ['latin'],
//     weight: '400'
//   })

export const getStaticProps = async () => {
  try {
    const res = await getPageData("admission", {
      contentBlock: "Object",
    });
    const pageData = res;
    return {
      props: pageData,
    };
  } catch (err) {
    console.log("Error", err);
    return {
      props: [],
    };
  }
};

const Admission = (pageData) => {
  return (
    <div>
      {/* {JSON.stringify(pageData)} */}
      <div>
        <WalkIn
          topSection={{
            bannerImg: pageData?.pageData?.featureImg,
            content: pageData?.contentBlock?.ADMISSION_PROCESS,
          }}
        />
      </div>
      <div>
        <DemandDraft
          admissionDemand={{
            heading:
              pageData?.contentBlock?.ADMISSION_THROUGH_DEMAND_DRAFT?.heading,
            content:
              pageData?.contentBlock?.ADMISSION_THROUGH_DEMAND_DRAFT?.content,
          }}
        />
      </div>
      <div>
        <OnlineAdmission
          onlineAdm={{
            heading: pageData?.contentBlock?.ONLINE_ADMISSION?.heading,
            content: pageData?.contentBlock?.ONLINE_ADMISSION?.content,
            cartList:
              pageData?.contentBlock?.ONLINE_ADMISSION?.advanceData?.data,
            content2: pageData?.contentBlock?.ONLINE_ADMISSION2?.content,
            testSeries:pageData?.contentBlock?.ONLINE_TEST_SERIES?.heading,
            testSeriesLink:pageData?.contentBlock?.ONLINE_TEST_SERIES?.link,
          }}
        />
      </div>
      <div>
        <TopperTalk />
      </div>
    </div>
  );
};

export default Admission;
