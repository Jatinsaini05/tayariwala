
import TopNav from "../components/topNav"
import Footer from "../components/footer"
import { useState,useRef } from "react";
export default function DefaultLayout({ children }) {
  const [apiData, setApiData] = useState(null);
  const initialCall = useRef(true);
  const webApi = async () => {
    try {
      let url = "https://v3.edkt.net/api/s/website/62a196794ed50566c7603b72/data";

      let fetchApi = await fetch(url, {
        headers: {
          apihost: "https://vijethaiasacademyvja.com/",
        },
      });
  
      let response = await fetchApi.json();
      setApiData(response);
      // console.log(response)
    } catch (error) {
      console.log(error)
    }
 
  }
  if (initialCall.current) {
    webApi();
    initialCall.current = false;
  }

  return (
    <div className="">
      {/* {/ {JSON.stringify(apiData)} /} */}
      <div>
        <TopNav topNavData={apiData} />
      </div>
      <div>{children}</div>
      <div>
        <Footer footerData={apiData} />
      </div>
    </div>
  );
}