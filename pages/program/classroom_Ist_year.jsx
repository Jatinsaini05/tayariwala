// import React, { useState } from "react";
// import TopperTalk from "../../components/TopperTalk";
// import Intoduction from "../../components/Program/IstYear/Intoduction";
// import Admission from "../../components/Program/IstYear/Admission";
// import Batch from "../../components/Program/IstYear/Batch";
// import Book from "../../components/Program/IstYear/Book";
// // import { getPageData } from "../../service/apiFetch";
// import {getCourseProgramByUri} from "../../service/apiFetch"
// export const getStaticProps = async () => {
//   // console.log(23)
//   try {
//     const res = await getCourseProgramByUri("classroom");
//     // console.log(12)
//     const pageData = res;
//     return {
//       props: {
//         pageData,
//       },
//     };
//   } catch (err) {
//     console.log("Error", err);
//     return {
//       props: {
//         pageData: [],
//       },
//     };
//   }
// };

// export default function Classroom({ pageData }) {
//   // console.log(pageData)
//   return (
//     <div>
//       {/* {JSON.stringify(pageData)} */}
//       <Intoduction />
//       <Admission />
//       <Batch />
//       <Book />
//       <TopperTalk />
//     </div>
//   );
// }
