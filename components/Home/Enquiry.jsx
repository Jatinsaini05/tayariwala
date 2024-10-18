import React from 'react';

const Enquiry = () => {
  return (
    <div>
      <div className="mt-14 bg-[#e6eae8] pt-8 pb-9">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-zinc-800 font-normal">Quick Enquiry</h2>
          <hr className="my-5 w-full border-t-2 border-gray-100" />
          <div className="flex flex-col md:flex-row justify-between gap-8">
            {/* Left Column */}
            <div className="flex flex-col w-full md:w-1/3">
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  className="w-full rounded-md py-2 px-2 border text-sm border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-600"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email" // changed type to "email" for better validation
                  name="email"
                  placeholder="Your Email Address"
                  className="w-full rounded-md py-2 px-2 border text-sm border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-600"
                />
              </div>
              <div className="mb-4">
                <input
                  type="tel" // changed type to "tel" for better validation
                  name="mobile"
                  placeholder="Your Mobile Number"
                  className="w-full rounded-md py-2 px-2 border text-sm border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-600"
                />
              </div>
              <div className="mb-4">
                <select
                  name="enquiryType"
                  className="w-full rounded-md py-2 px-2 border text-sm border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-600"
                >
                  <option>Select Enquiry Type</option>
                  <option>Admission</option>
                  <option>1 Yr Regular Classroom Program</option>
                  <option>1 Yr Weekend Classroom Program</option>
                  <option>2 Yr Regular Classroom Program</option>
                  <option>2 Yr Weekend Classroom Program</option>
                  <option>Postal Study Program</option>
                  <option>GS Course for ESE Prelims Exam</option>
                  <option>Online Test Series</option>
                  <option>Offline Test Series</option>
                  <option>ESE Mains Classroom Course</option>
                  <option>Online Course</option>
                  <option>Classroom Course</option>
                </select>
              </div>
            </div>

            {/* Middle Column */}
            <div className="flex flex-col w-full md:w-1/3">
              <div className="mb-4">
                <select
                  name="stream"
                  className="w-full rounded-md py-2 px-2 border text-sm border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-600"
                >
                  <option>Select Stream</option>
                  <option>Civil Engineering</option>
                  <option>Mechanical Engineering</option>
                  <option>Electrical Engineering</option>
                  <option>Electronics and Communication Engineering</option>
                  <option>Computer Science & Engineering</option>
                </select>
              </div>
              <div className="mb-4">
                <select
                  name="course"
                  className="w-full rounded-md py-2 px-2 border text-sm border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-600"
                >
                  <option>Select Course</option>
                  <option>GATE</option>
                  <option>ESE</option>
                  <option>SSC-JE</option>
                  <option>BPSC</option>
                  <option>RRB-JE</option>
                  <option>RPSC</option>
                  <option>ESE + GATE</option>
                  <option>CIL</option>
                  <option>UPPSC</option>
                  <option>STATE-AE/JE</option>
                  <option>TSPSC-AEE</option>
                  <option>MPPSC</option>
                  <option>ESE + GATE + SES</option>
                  <option>GATE + SES</option>
                </select>
              </div>
              <div>
                <textarea
                  placeholder="Message*:"
                  className="w-full rounded-md px-3 py-2 border bordesmgray-300 resize-none focus:outline-none focus:ring-1 focus:ring-green-600"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col w-full md:w-1/4">
              <button
                type="submit"
                className="w-full text-white bg-[#5cb85c] text-sm hover:bg-green-700 rounded-md py-2 mt-4 md:mt-10"
sm          >
                Submit Query
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
