import React from "react";
import MetaTags from "../components/MetaTags"
export default function about() {
  return (
    <div>
      <MetaTags
        title="Aboutpage"
        // keywords={props?.apiData?.pageData?.metaTags?.keywords}
        //  description={props?.apiData?.pageData?.metaTags?.ogDescription}
        //  image={props?.apiData?.pageData?.metaTags?.ogImag}
      ></MetaTags>
      This is aboutpage
    </div>
  );
}
