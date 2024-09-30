import TopNav from "../components/topNav";
import Footer from "../components/footer";
import React , {useState,useRef} from "react";
// export const getStaticProps = async () => {
//   debugger;
//   try {
//     console.log("Starting fetch for website data...");
//     let header = {
//       apiHost: "https://vijethaiasacademyvja.com",
//     };
//     let websiteResponse = await fetch(
//       "https://v3.edkt.net/api/s/website/62a196794ed50566c7603b72/data",
//       {
//         headers: header,
//       }
//     );
//     let apiData = await websiteResponse.json();
//     console.log("apiData",apiData);
//     return {
//       props: {
//         apiData: apiData || null,
//       },
//     };
//   } catch (err) {
//     console.log("Failed to Load Website Data:", err);
//     return {
//       props: {
//         apiData: null,
//       },
//     };
//   }
// };

// const DefaultLayout = ({ apiData, children }) => {
//   debugger;
//   return (
//     <div>
//       <div>
//         <TopNav topNavData={apiData} />
//       </div>
//       <div>{children}</div>
//       <div>
//         <Footer footerData={apiData} />
//       </div>
//     </div>
//   );
// };

// export default DefaultLayout;

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
