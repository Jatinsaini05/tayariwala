import React  from "react";
import "swiper/css";
import "swiper/css/navigation";
import dynamic from "next/dynamic";
import TopSlider from "../components/TopSlider";
import Classroom from "../components/Classroom";
import SecVijetha from "../components/SecVijetha";
import Course from "../components/Course";
import Link from "next/link";

const Marquee = dynamic(() => import("react-fast-marquee"), {
  ssr: false,
});

export const getStaticProps = async () => {
  try {
    let params = new URLSearchParams({
      contentBlock: "Object",
    });
    const response = await fetch(
      `https://v3.edkt.net/api/s/frontpage/__home?${params.toString()}`,
      {
        headers: {
          apihost: "https://vijethaiasacademyvja.com/",
        },
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    let apiData = await response.json();
    return {
      props: {
        apiData,
      },
    };
  } catch (error) {
    console.error("Error fetching the home page API:", error);
    return {
      props: {
        apiData: [],
      },
    };
  }
};

const home = (props) => {
  return (
    <div>
      <>
        <TopSlider
          slides={props?.apiData?.contentBlock?.SLIDER?.advanceData?.data?.slides}
        />

        <Classroom
          classRoom={props?.apiData?.contentBlock?.GREAT_FEATURE?.advanceData?.data}
        />
        <SecVijetha aboutSec={props?.apiData?.contentBlock?.AVAIL_OPPORTUNITY} />
        <Course courses={props?.apiData?.contentBlock?.FEATURE_COURSE} />

        <section className="sec5">
          <div className="container mx-auto md:px-8 px-4 lg:px-16">
            <div className="heading-sec5 py-4">
              <h3 className="text-3xl font-bold text-center">
                {props?.apiData?.contentBlock?.VIDEO_GALLERY?.heading}
              </h3>
            </div>

            <div className="vid md:flex  gap-4 justify-center items-center py-4">
              {props?.apiData?.contentBlock?.VIDEO_GALLERY?.advanceData?.data?.length >
              0
                ? props?.apiData?.contentBlock?.VIDEO_GALLERY?.advanceData?.data.map(
                    (item, index) => {
                      return (
                        <div className="video" key={index}>
                          <iframe
                            src={`https://www.youtube.com/embed/${item.url}`}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            className="w-full aspect-video py-2"
                            allowfullscreen
                          ></iframe>
                        </div>
                      );
                    }
                  )
                : "Video url not found"}
            </div>
            <div className="btn text-center py-4">
              {props?.apiData?.contentBlock?.VIDEO_GALLERY?.link ? (
                <Link
                  href={props?.apiData.contentBlock.VIDEO_GALLERY.link}
                  className="p-[10px] bg-[#104270] text-white font-medium rounded"
                >
                  Show More
                </Link>
              ) : (
                <p className="text-gray-500">No additional links available.</p>
              )}
            </div>
          </div>
        </section>
      </>
    </div>
  );
};
export default home;
// export default function home() {
//   const [apiData, setApiData] = useState();

//   async function homePageapi() {
//     try {
//       let params = new URLSearchParams({
//         contentBlock: "Object",
//       });
//       const response = await fetch(
//         `https://v3.edkt.net/api/s/frontpage/__home?${params.toString()}`,
//         {
//           headers: {
//             apihost: "https://vijethaiasacademyvja.com/",
//           },
//         }
//       );
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const data = await response.json();
//       setApiData(data);
//     } catch (error) {
//       console.error("Error fetching the home page API:", error);
//     }
//   }
//   useEffect(() => {
//     homePageapi();
//   }, []);

//   return (

//     <>
//       <TopSlider
//         slides={apiData?.contentBlock?.SLIDER?.advanceData?.data?.slides}
//       />

//       <Classroom
//         classRoom={apiData?.contentBlock?.GREAT_FEATURE?.advanceData?.data}
//       />
//       <SecVijetha aboutSec={apiData?.contentBlock?.AVAIL_OPPORTUNITY} />
//       <Course courses={apiData?.contentBlock?.FEATURE_COURSE} />

//       <section className="sec5">
//         <div className="container mx-auto md:px-8 px-4 lg:px-16">
//           <div className="heading-sec5 py-4">
//             <h3 className="text-3xl font-bold text-center">
//               {apiData?.contentBlock?.VIDEO_GALLERY?.heading}
//             </h3>
//           </div>

//           <div className="vid md:flex  gap-4 justify-center items-center py-4">
//             {apiData?.contentBlock?.VIDEO_GALLERY?.advanceData?.data?.length > 0
//               ? apiData?.contentBlock?.VIDEO_GALLERY?.advanceData?.data.map(
//                   (item, index) => {
//                     return (
//                       <div className="video" key={index}>
//                         <iframe
//                           src={`https://www.youtube.com/embed/${item.url}`}
//                           title="YouTube video player"
//                           frameborder="0"
//                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                           referrerpolicy="strict-origin-when-cross-origin"
//                           className="w-full aspect-video py-2"
//                           allowfullscreen
//                         ></iframe>
//                       </div>
//                     );
//                   }
//                 )
//               : "Video url not found"}
//           </div>
//           <div className="btn text-center py-4">
//             {apiData?.contentBlock?.VIDEO_GALLERY?.link ? (
//               <Link
//                 href={apiData.contentBlock.VIDEO_GALLERY.link}
//                 className="p-[10px] bg-[#104270] text-white font-medium rounded"
//               >
//                 Show More
//               </Link>
//             ) : (
//               <p className="text-gray-500">No additional links available.</p>
//             )}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
