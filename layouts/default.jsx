import React, { useEffect, useState } from "react";
import FooterSection from "../components/FooterSection";
import Header from "../components/Header";
import BellBar from "../components/BellBar";
import { getWebsiteData } from "../service/apiFetch";
// import { Lato } from "@next/font/google";
// import { error } from "console";

// const lato = Lato({
//   subsets: ["latin"],
//   weight: "400",
// });

// export const getStaticProps = async () => {
//   try {
//     const response = await fetch(
//       `https://v3.edkt.net/api/s/website/5bc48477a794a34a0c07775f/data`,
//       {
//         headers: {
//           apihost: "https://iesmaster.institute.org.in",
//         },
//       }
//     );
//     if (!response.ok) {
//       throw new Error("api data fetching errror");
//     }
//     const data = await response.json()
//     return {
//       props: {
//         apiData: data
//       },
//     };

//   } catch (error) {
//     console.error(error)
//     return{
//       props:{
//         apiData:[]
//       }
//     }

//   }

// };

export default function DefaultLayout({ children }) {
  const [apiData, setApiData] = useState();
  // const url = "https://v3.edkt.net/api/s/website/5bc48477a794a34a0c07775f/data"
  const fetchApi = async () => {
    try {
   
      const response = await getWebsiteData("5bc48477a794a34a0c07775f");
      // console.log("response",response);
      setApiData(response);
    } catch (err) {
      console.log("Error", err);
    }
    // try {
    //   const res = await fetch(url,{
    //     headers:{
    //       apihost: "https://iesmaster.institute.org.in"
    //     }
    //   })
    //   if(!res.ok){
    //     throw new Error('api data fetching error')
    //   }
    //   const data = await res.json()
    //   setApiData(data)
    // } catch (error) {
    //   console.error(error)
    // }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    // className={lato.className}
    <div>
      <div className="top-head">
        <Header topNav={apiData} />
      </div>
      <div>{children}</div>
      <div className="foot">
        <FooterSection footerSection={apiData} />
      </div>
      <div>
        <BellBar />
      </div>
    </div>
  );
}
