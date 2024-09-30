import AllCourses from "../../components/Courses/Allcourses";
import React  from "react";
import MetaTags from "../../components/MetaTags";
export const getStaticProps = async () => {
  try {
    let header = {
      apiHost: "https://vijethaiasacademyvja.com",
    };
    let response = await fetch(`https://v3.edkt.net/api/s/courseprogram`, {
      headers: header,
    });
    let allCourseProgram = await response.json();
    return {
      props: {
        allCourseProgram,
      },
    };
  } catch (err) {
    console.log("Failed to Load Course Program:", err);
    return {
      props: {
        allCourseProgram: [],
      },
    };
  }
  
};

const CourseOffered = (props) => {
  return (
    <div>
       <MetaTags
        title="Course Programs"
      
      ></MetaTags>
      <AllCourses courseProgram={props?.allCourseProgram} />
    </div>
  );
};

export default CourseOffered;

// export default function CourseOffered() {
//   const [pageData, setPageData] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [pageDataError, setPageDataError] = useState(null);
//   const initialPageCall = useRef(true);
//   const fetchCourseProgram = async () => {
//     setIsLoading(true);
//     try {
//       let header = {
//         apiHost: "https://vijethaiasacademyvja.com",
//       };
//       let response = await fetch(`https://v3.edkt.net/api/s/courseprogram`, {
//         headers: header,
//       });
//       let data = await response.json();
//       setPageData(data);
//     } catch (err) {
//       console.log("Failed to Load Courses:", err);
//       setPageDataError(err);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   if (initialPageCall.current) {
//     fetchCourseProgram();
//     initialPageCall.current = false;
//   }

//   if (pageDataError) {
//     return <div>Error in Loading Page Data</div>;
//   }

//   if (isLoading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <div className="border-gray-100 border-t-blue-500 w-[60px] h-[60px] animate-spin rounded-[50%] border-8 border-solid"></div>
//       </div>
//     );
//   }

//   return (
//     <div>
//       {/* {JSON.stringify(pageData)} */}
//       <AllCourses courseProgram={pageData} />
//     </div>
//   );
// }
