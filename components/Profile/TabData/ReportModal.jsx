import React from "react";
import Link from "next/link";

const ReportModal = ({ closeReportModal, test }) => {
  return (
    <div>
      <div className="h-screen w-screen overflow-auto fixed z-50 inset-0 bg-opacity-50 bg-black flex justify-center items-center">
        <div className="rounded overflow-hidden border">
          <div className="flex justify-between sticky items-center z-10 top-0 py-2 bg-white">
            <span>Report</span>
            <button
              onClick={closeReportModal}
              className="py-[5px] px-[25px] bg-[#f0f0f0] text-base"
            >
              x
            </button>
          </div>
          <div className="p-[1.25rem] text-[#212529] bg-white text-xl">
            <div className="flex mb-2">
              <div className="px-[15px] w-1/3">
                <p>Total Marks</p>
                <span>{test?.test?.maxScore}</span>
              </div>
              <div className="px-[15px] w-1/3">
                <p>Your Marks</p>
                <span>{test?.stdScore}</span>
              </div>
              <div className="px-[15px] w-1/3">
                <p>Total Correct</p>
                <span>{test?.sectionScore[0]?.correctQs}</span>
              </div>
            </div>
            <div className="flex mb-2">
              <div className="px-[15px] w-1/3">
                <p>Max Time</p>
                <span>{test?.test?.duration}</span>
              </div>
              <div className="px-[15px] w-1/3">
                <p>Time Spent</p>
                <span>{test?.totalTimeTaken}</span>
              </div>
              <div className="px-[15px] w-1/3">
                <p>Total In-Correct</p>
                <span>{test?.inCorrectQs}</span>
              </div>
            </div>
            <div className="flex mb-2">
              <div className="px-[15px] w-1/3">
                <p>Total Qs</p>
                <span>{test?.test?.totalQs}</span>
              </div>
              <div className="px-[15px] w-1/3">
                <p>Percentage (%)</p>
                <span>{test?.percentage}</span>
              </div>
              <div className="px-[15px] w-1/3">
                <p>Un-Attempted</p>
                <span>{test?.unAttemptedQs}</span>
              </div>
            </div>
            <div className="flex justify-center">
              <Link
                href={`https://maheshpratap.institute.org.in/student/testment/overview?uotId=${test?._id}`}
                className="text-xs text-white px-[10px] py-[5px] rounded bg-[#221638]"
              >
                View Detailed Report
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportModal;
