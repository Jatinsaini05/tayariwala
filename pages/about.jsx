import React  from "react";

export const getStaticProps = async () => {
  try {
    let params = new URLSearchParams({
      contentBlock: "Object",
    });
    let response = await fetch(
      `https://v3.edkt.net/api/s/frontpage/about?${params.toString()}`,
      {
        headers: {
          apihost: "https://vijethaiasacademyvja.com/",
        },
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP Error Status code ${url.status}`);
    }
    let apiData = await response.json();
    return {
      props: {
        apiData,
      },
    };
  } catch (error) {
    console.error("Error in  fetching data ", error);
    return {
      props: {
        apiData: [],
      },
    };
  }
};

const about = (props) => {
  return (
    <div className="sec3">
      <div className="heading container mx-auto px-6 md:px-16 md:py-2 py-4">
        <h3 className="text-center text-lg md:text-xl lg:text-3xl font-bold text-[#0c4270]">
          {props?.apiData?.contentBlock?.INSTY_INTRO?.heading}
        </h3>

        <div className="border-b-2 border-[#0c4270] w-[150px] mx-auto py-1"></div>
      </div>
      <div className="container mx-auto px-6 md:px-16 md:py-2 py-4">
        <div className="grid lg:grid-cols-2 md:grid-cols-1  py-4">
          <div className="rt"></div>
          <div className="lft">
            <div
              dangerouslySetInnerHTML={{
                __html: props?.apiData?.contentBlock?.INSTY_INTRO?.content,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;

// export default function About() {
//   const [apiData, setApiData] = useState("");
//   const [isloading , setIsloading] = useState(false)

//   const fetchApi = async () => {
//     setIsloading(true)
//     try {
//       let params = new URLSearchParams({
//         contentBlock: "Object",
//       });
//       let url = await fetch(
//         `https://v3.edkt.net/api/s/frontpage/about?${params.toString()}`,
//         {
//           headers: {
//             apihost: "https://vijethaiasacademyvja.com/",
//           },
//         }
//       );
//       if (!url.ok) {
//         throw new Error(`HTTP Error Status code ${url.status}`);
//       }

//       let newUrl = await url.json();
//       setApiData(newUrl);
//       // console.log(newUrl)
//     } catch (error) {
//       console.log("Error");
//       console.error("error fetching data ", error);
//     }finally{
//       setIsloading(false)
//     }
//   };
//   useEffect(() => {
//     fetchApi();
//   }, []);

//   if (isloading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <div className="border-gray-100 border-t-blue-500 w-[60px] h-[60px] animate-spin rounded-[50%] border-8 border-solid"></div>
//       </div>
//     );
//   }
//   return (
//     <div>
//       <section className="sec3">
//         <div className="heading container mx-auto px-6 md:px-16 md:py-2 py-4">
//           <h3 className="text-center text-lg md:text-xl lg:text-3xl font-bold text-[#0c4270]">
//             {apiData?.contentBlock?.INSTY_INTRO?.heading}
//           </h3>

//           <div className="border-b-2 border-[#0c4270] w-[150px] mx-auto py-1"></div>
//         </div>
//         <div className="container mx-auto px-6 md:px-16 md:py-2 py-4">
//           <div className="grid lg:grid-cols-2 md:grid-cols-1  py-4">
//             <div className="rt"></div>
//             <div className="lft">
//               <div
//                 dangerouslySetInnerHTML={{
//                   __html: apiData?.contentBlock?.INSTY_INTRO?.content,
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
