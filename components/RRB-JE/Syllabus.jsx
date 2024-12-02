import React from "react";
import Link from "next/link";


const Syllabus = ({pageData}) => {
  return (
    <div className="container">
      {/* {JSON.stringify(pageData)} */}
      <div id="syllabus">
        <span dangerouslySetInnerHTML={{__html: pageData?.content}}></span>
      {/* <div className="px-2 text-[#212529]" id="syllabus">
        <h3 className="text-[28px]">Syllabus</h3> <hr className="my-4" />{" "}
        <p className="text-[#606060]">
          <strong>RRB JE Exam Pattern 2024</strong>
        </p>{" "}
        <p className="mt-4 text-[#606060]">
          According to last year's RRB JE notification, the examination consists
          of two stages, both conducted online. The pattern for the upcoming
          exam may change, pending the release of the official notification.
          Below is an overview of the current RRB JE Exam Pattern:
        </p>{" "}
        <ul className="list-inside list-disc p-4">
          <li>
            CBT 1 will feature questions from four sections: Mathematics,
            General Awareness, General Science, and General Intelligence and
            Reasoning. Mathematics and General Science will carry the most
            weight.
          </li>{" "}
          <li>
            The test will include objective-type multiple-choice questions, with
            a total duration of 90 minutes.
          </li>{" "}
          <li>
            There will be 100 questions, each worth one mark. Incorrect answers
            will incur a penalty of 1/3 mark.
          </li>{" "}
          <li>
            CBT 2 will cover five topics: General Awareness, Physics and
            Chemistry, Computer Application Basics, Environmental and Pollution
            Basics, and Technical Abilities.
          </li>{" "}
          <li>
            This test will primarily focus on Technical Abilities, which will
            include 100 questions out of a total of 150. The marking scheme will
            be the same as CBT 1.
          </li>{" "}
          <li>The duration for CBT 2 will be 2 hours.</li>
        </ul>{" "}
        <div className="overflow-x-auto">
        <table className="w-full">
          <tbody>
            <tr>
              <td className="p-4 border">
                <b>Exam Pattern</b>
              </td>{" "}
              <td className="p-4 border">
                <b>CBT 1</b>
              </td>{" "}
              <td className="p-4 border">
                <b>CBT 2</b>
              </td>
            </tr>{" "}
            <tr>
              <td className="p-4 border">No. of Questions</td> <td className="p-4 border">100</td> <td className="p-4 border">150</td>
            </tr>{" "}
            <tr>
              <td className="p-4 border">Marks</td> <td className="p-4 border">100</td> <td className="p-4 border">150</td>
            </tr>{" "}
            <tr>
              <td className="p-4 border">Type of Questions</td>{" "}
              <td className="p-4 border">Objective-type multiple-choice questions</td>{" "}
              <td className="p-4 border">Objective-type multiple-choice questions</td>
            </tr>{" "}
            <tr>
              <td className="p-4 border">Duration</td> <td className="p-4 border">90 minutes</td> <td className="p-4 border">120 minutes</td>
            </tr>
          </tbody>
        </table>{" "}
        </div>
        <p className="mt-4">
          <strong>RRB JE Syllabus 2024</strong>
        </p>{" "}
        <p className="mt-4">
          To ensure thorough preparation, candidates should align their study
          plans with the RRB Junior Engineer Syllabus. This approach will help
          in covering all required topics efficiently. The CBT Test syllabus
          includes Mathematics, General Awareness, General Science, and General
          Intelligence and Reasoning. For more detailed information on the{" "}
          <Link href="#" className="text-customFC6200">
            RRB JE Syllabus
          </Link>
          , please refer to the provided link.
        </p>
      </div> */}
      </div>
    </div>
  );
};

export default Syllabus;