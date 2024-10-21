import React, { useState } from "react";
import Link from "next/link";
export default function StudyPackage() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <section className="py-[2rem] sm:py-[3rem] px-[10px] lg:px-[2rem]">
        <div className="container mx-auto">
          <div className="grid grid-rows">
            <div className="grid grid-cols-12">
              <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-12 lg:px-2.5">
                <h1 className="text-[22px] font-semibold text-center sm:text-left">
                  Postal Study Package
                </h1>
                <div className="mt-[1rem] mb-[5px] flex gap-[15px] sm:gap-[20px] flex-wrap justify-start items-center">
                  <div>
                    <button
                      onClick={() => setActiveIndex(0)}
                      className={` text-[14px] px-2 py-1 rounded pr-3 pl-3 text-[#5698d0] ${activeIndex === 0 ? "border-2 border-[#33a037] bg-[#d7f9d3]" : "border-[none] bg-[transparent] hover:bg-[#eee]"}`}
                    >
                      ESE + GATE
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => setActiveIndex(1)}
                      className={` text-[14px] px-2 py-1 rounded pr-3 pl-3 text-[#5698d0] ${activeIndex === 1 ? "border-2 border-[#33a037] bg-[#d7f9d3]" : "border-[none] bg-[transparent] hover:bg-[#eee]"}`}
                    >
                      {" "}
                      GATE
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => setActiveIndex(2)}
                      className={` text-[14px] px-2 py-1 rounded pr-3 pl-3 text-[#5698d0] ${activeIndex === 2 ? "border-2 border-[#33a037] bg-[#d7f9d3]" : "border-[none] bg-[transparent] hover:bg-[#eee]"}`}
                    >
                      UPPSC-AE
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => setActiveIndex(3)}
                      className={` text-[14px] px-2 py-1 rounded pr-3 pl-3 text-[#5698d0] ${activeIndex === 3 ? "border-2 border-[#33a037] bg-[#d7f9d3]" : "border-[none] bg-[transparent] hover:bg-[#eee]"}`}
                    >
                      SSC-JE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {activeIndex == 0 && (
          <div>
            <div className="container m-auto">
              <div className="grid grid-rows">
                <div className="grid grid-cols-12">
                  <div className="col-span-12  sm:col-span-12  md:col-span-12  lg:col-span-6 xl:col-span-6 lg:px-2.5">
                    <div className="study-card p-4">
                      <h3 className="leading-none text-[#25cd71] text-[18px] sm:text-[20px] mb-[10px]">
                        Civil Engineering{" "}
                      </h3>
                      <span className="block text-[#86a1ae] text-[14px] sm:text-[15px]  mb-[1rem]">
                        Session - 2024-25
                      </span>
                      <h2 className=" text-[20px] sm:text-[23px] leading-[1.3] sm:leading-none">
                        {" "}
                        ESE + GATE + PSUs Study Material
                      </h2>

                      <span className="text-[#25cd71] text-[14px] mt-[2px] mb-[5px] block">
                        Total Books : 34
                      </span>
                      <span className="block text-[#86a1ae] text-[14px] sm:text-[15px]  mb-[3rem]">
                        Fee: 18000/-
                      </span>

                      <div className="mt-[2rem] flex flex-wrap gap-[10px] items-center justify-center">
                        <div>
                          <Link
                            href="#"
                            className="text-[14px] sm:text-[1rem] border-1 block  border-solid border-[#25cd71] hover:text-[white] text-[#25cd71] rounded-[6px] px-[10px] pt-[4px] pb-[7px] hover:bg-[#25cd71] transition-all duration-[850ms] ease-[ease-in-out]"
                          >
                            Features
                          </Link>
                        </div>
                        <div>
                          <Link
                            href="#"
                            className="text-[14px] sm:text-[1rem] border-1 block border-solid border-[#25cd71] bg-[#25cd71] text-[white] rounded-[6px] px-[10px] pt-[4px] pb-[7px] transition-all duration-[850ms] ease-[ease-in-out]"
                          >
                            Checklist
                          </Link>
                        </div>
                        <div>
                          <Link
                            href="#"
                            className="text-[14px] sm:text-[1rem] border-1 block  border-solid border-[#5bc0de] bg-[#5bc0de] text-[white] rounded-[6px] px-[10px] pt-[4px] pb-[7px]"
                          >
                            Enroll Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12  sm:col-span-12  md:col-span-12  lg:col-span-6 xl:col-span-6 lg:px-2.5">
                    <div className="study-card p-4">
                      <h3 className="leading-none text-[#25cd71] text-[18px] sm:text-[20px] mb-[10px]">
                        Civil Engineering{" "}
                      </h3>
                      <span className="block text-[#86a1ae] text-[14px] sm:text-[15px]  mb-[1rem]">
                        Session - 2024-25
                      </span>
                      <h2 className=" text-[20px] sm:text-[23px] leading-[1.3] sm:leading-none">
                        {" "}
                        ESE + GATE + PSUs Study Material
                      </h2>

                      <span className="text-[#25cd71] text-[14px] mt-[2px] mb-[5px] block">
                        Total Books : 34
                      </span>
                      <span className="block text-[#86a1ae] text-[14px] sm:text-[15px]  mb-[3rem]">
                        Fee: 18000/-
                      </span>

                      <div className="mt-[2rem] flex flex-wrap gap-[10px] items-center justify-center">
                        <div>
                          <Link
                            href="#"
                            className="text-[14px] sm:text-[1rem] border-1 block  border-solid border-[#25cd71] hover:text-[white] text-[#25cd71] rounded-[6px] px-[10px] pt-[4px] pb-[7px] hover:bg-[#25cd71] transition-all duration-[850ms] ease-[ease-in-out]"
                          >
                            Features
                          </Link>
                        </div>
                        <div>
                          <Link
                            href="#"
                            className="text-[14px] sm:text-[1rem] border-1 block border-solid border-[#25cd71] bg-[#25cd71] text-[white] rounded-[6px] px-[10px] pt-[4px] pb-[7px] transition-all duration-[850ms] ease-[ease-in-out]"
                          >
                            Checklist
                          </Link>
                        </div>
                        <div>
                          <Link
                            href="#"
                            className="text-[14px] sm:text-[1rem] border-1 block  border-solid border-[#5bc0de] bg-[#5bc0de] text-[white] rounded-[6px] px-[10px] pt-[4px] pb-[7px]"
                          >
                            Enroll Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12  sm:col-span-12  md:col-span-12  lg:col-span-12  xl:col-span-12 lg:px-2.5">
                    <div className=" mt-[30px] ">
                      <div className="dotLeft">
                        <h3 className="relative font-bold text-[14px] pl-[10px]">
                          Important Alert: Beware of Fraudulent Activities
                        </h3>
                      </div>

                      <ul
                        className=" pl-[25px] text-[14px] "
                        style={{ listStyle: "circle" }}
                      >
                        <li>
                          Please be aware of fraudulent activities targeting
                          individuals by requesting payments or personal
                          information via unsolicited messages.
                        </li>
                        <li>
                          DO NOT CLICK on any links or share sensitive
                          information sent from unverified sources claiming
                          association with our institution.
                        </li>
                        <li>
                          We NEVER request payments or sensitive details through
                          unexpected messages or calls.
                        </li>
                      </ul>

                      <div className="dotLeft mt-[5px]">
                        <h3 className="relative font-bold text-[14px] pl-[10px]">
                          Protect yourself:
                        </h3>
                      </div>

                      <ul
                        className=" pl-[25px] text-[14px] "
                        style={{ listStyle: "circle" }}
                      >
                        <li>
                          Avoid clicking on suspicious links, especially those
                          requesting payments or personal details.
                        </li>
                        <li>
                          Never share sensitive information unless you are
                          certain about the legitimacy of the request.
                        </li>
                        <li>
                          We NEVER request payments or sensitive details through
                          unexpected messages or calls.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeIndex == 1 && (
          <div>
            <div className="container m-auto">
              <div className="grid grid-rows">
                <div className="grid grid-cols-12">
                  <div className="col-span-12  sm:col-span-12  md:col-span-12  lg:col-span-6 xl:col-span-6 px-2.5">
                    <div className="study-card p-4">
                      <h3 className="leading-none text-[#25cd71] text-[18px] sm:text-[20px] mb-[10px]">
                        Civil Engineering{" "}
                      </h3>
                      <span className="block text-[#86a1ae] text-[14px] sm:text-[15px]  mb-[1rem]">
                        Session - 2024-25
                      </span>
                      <h2 className=" text-[20px] sm:text-[23px] leading-[1.3] sm:leading-none">
                        {" "}
                        ESE + GATE + PSUs Study Material
                      </h2>

                      <span className="text-[#25cd71] text-[14px] mt-[2px] mb-[5px] block">
                        Total Books : 34
                      </span>
                      <span className="block text-[#86a1ae] text-[14px] sm:text-[15px]  mb-[3rem]">
                        Fee: 18000/-
                      </span>

                      <div className="mt-[2rem] flex flex-wrap gap-[10px] items-center justify-center">
                        <div>
                          <Link
                            href="#"
                            className="text-[14px] sm:text-[1rem] border-1 block  border-solid border-[#25cd71] hover:text-[white] text-[#25cd71] rounded-[6px] px-[10px] pt-[4px] pb-[7px] hover:bg-[#25cd71] transition-all duration-[850ms] ease-[ease-in-out]"
                          >
                            Features
                          </Link>
                        </div>
                        <div>
                          <Link
                            href="#"
                            className="text-[14px] sm:text-[1rem] border-1 block border-solid border-[#25cd71] bg-[#25cd71] text-[white] rounded-[6px] px-[10px] pt-[4px] pb-[7px] transition-all duration-[850ms] ease-[ease-in-out]"
                          >
                            Checklist
                          </Link>
                        </div>
                        <div>
                          <Link
                            href="#"
                            className="text-[14px] sm:text-[1rem] border-1 block  border-solid border-[#5bc0de] bg-[#5bc0de] text-[white] rounded-[6px] px-[10px] pt-[4px] pb-[7px]"
                          >
                            Enroll Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12  sm:col-span-12  md:col-span-12  lg:col-span-6 xl:col-span-6 px-2.5">
                    <div className="study-card p-4">
                      <h3 className="leading-none text-[#25cd71] text-[18px] sm:text-[20px] mb-[10px]">
                        Civil Engineering{" "}
                      </h3>
                      <span className="block text-[#86a1ae] text-[14px] sm:text-[15px]  mb-[1rem]">
                        Session - 2024-25
                      </span>
                      <h2 className=" text-[20px] sm:text-[23px] leading-[1.3] sm:leading-none">
                        {" "}
                        ESE + GATE + PSUs Study Material
                      </h2>

                      <span className="text-[#25cd71] text-[14px] mt-[2px] mb-[5px] block">
                        Total Books : 34
                      </span>
                      <span className="block text-[#86a1ae] text-[14px] sm:text-[15px]  mb-[3rem]">
                        Fee: 18000/-
                      </span>

                      <div className="mt-[2rem] flex flex-wrap gap-[10px] items-center justify-center">
                        <div>
                          <Link
                            href="#"
                            className="text-[14px] sm:text-[1rem] border-1 block  border-solid border-[#25cd71] hover:text-[white] text-[#25cd71] rounded-[6px] px-[10px] pt-[4px] pb-[7px] hover:bg-[#25cd71] transition-all duration-[850ms] ease-[ease-in-out]"
                          >
                            Features
                          </Link>
                        </div>
                        <div>
                          <Link
                            href="#"
                            className="text-[14px] sm:text-[1rem] border-1 block border-solid border-[#25cd71] bg-[#25cd71] text-[white] rounded-[6px] px-[10px] pt-[4px] pb-[7px] transition-all duration-[850ms] ease-[ease-in-out]"
                          >
                            Checklist
                          </Link>
                        </div>
                        <div>
                          <Link
                            href="#"
                            className="text-[14px] sm:text-[1rem] border-1 block  border-solid border-[#5bc0de] bg-[#5bc0de] text-[white] rounded-[6px] px-[10px] pt-[4px] pb-[7px]"
                          >
                            Enroll Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" mt-[30px]">
              <div className="dotLeft">
                <h3 className="relative font-bold text-[14px] pl-[10px]">
                  Important Alert: Beware of Fraudulent Activities
                </h3>
              </div>

              <ul
                className=" pl-[25px] text-[14px] "
                style={{ listStyle: "circle" }}
              >
                <li>
                  Please be aware of fraudulent activities targeting individuals
                  by requesting payments or personal information via unsolicited
                  messages.
                </li>
                <li>
                  DO NOT CLICK on any links or share sensitive information sent
                  from unverified sources claiming association with our
                  institution.
                </li>
                <li>
                  We NEVER request payments or sensitive details through
                  unexpected messages or calls.
                </li>
              </ul>

              <div className="dotLeft mt-[5px]">
                <h3 className="relative font-bold text-[14px] pl-[10px]">
                  Protect yourself:
                </h3>
              </div>

              <ul
                className=" pl-[25px] text-[14px] "
                style={{ listStyle: "circle" }}
              >
                <li>
                  Avoid clicking on suspicious links, especially those
                  requesting payments or personal details.
                </li>
                <li>
                  Never share sensitive information unless you are certain about
                  the legitimacy of the request.
                </li>
                <li>
                  We NEVER request payments or sensitive details through
                  unexpected messages or calls.
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeIndex == 2 && (
          <div>
            <div className="container m-auto">
              <div className="grid grid-rows">
                <div className="grid grid-cols-12">
                  <div className="col-span-12  sm:col-span-12  md:col-span-12  lg:col-span-6 xl:col-span-6 px-2.5">
                    <div className="study-card p-4">
                      <h3 className="leading-none text-[#25cd71] text-[18px] sm:text-[20px] mb-[10px]">
                        Civil Engineering{" "}
                      </h3>
                      <span className="block text-[#86a1ae] text-[14px] sm:text-[15px]  mb-[1rem]">
                        Session - 2024-25
                      </span>
                      <h2 className=" text-[20px] sm:text-[23px] leading-[1.3] sm:leading-none">
                        {" "}
                        ESE + GATE + PSUs Study Material
                      </h2>

                      <span className="text-[#25cd71] text-[14px] mt-[2px] mb-[5px] block">
                        Total Books : 34
                      </span>
                      <span className="block text-[#86a1ae] text-[14px] sm:text-[15px]  mb-[3rem]">
                        Fee: 18000/-
                      </span>

                      <div className="mt-[2rem] flex flex-wrap gap-[10px] items-center justify-center">
                        <div>
                          <Link
                            href="#"
                            className="text-[14px] sm:text-[1rem] border-1 block  border-solid border-[#25cd71] hover:text-[white] text-[#25cd71] rounded-[6px] px-[10px] pt-[4px] pb-[7px] hover:bg-[#25cd71] transition-all duration-[850ms] ease-[ease-in-out]"
                          >
                            Features
                          </Link>
                        </div>
                        <div>
                          <Link
                            href="#"
                            className="text-[14px] sm:text-[1rem] border-1 block border-solid border-[#25cd71] bg-[#25cd71] text-[white] rounded-[6px] px-[10px] pt-[4px] pb-[7px] transition-all duration-[850ms] ease-[ease-in-out]"
                          >
                            Checklist
                          </Link>
                        </div>
                        <div>
                          <Link
                            href="#"
                            className="text-[14px] sm:text-[1rem] border-1 block  border-solid border-[#5bc0de] bg-[#5bc0de] text-[white] rounded-[6px] px-[10px] pt-[4px] pb-[7px]"
                          >
                            Enroll Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12  sm:col-span-12  md:col-span-12  lg:col-span-6 xl:col-span-6 px-2.5">
                    <div className="study-card p-4">
                      <h3 className="leading-none text-[#25cd71] text-[18px] sm:text-[20px] mb-[10px]">
                        Civil Engineering{" "}
                      </h3>
                      <span className="block text-[#86a1ae] text-[14px] sm:text-[15px]  mb-[1rem]">
                        Session - 2024-25
                      </span>
                      <h2 className=" text-[20px] sm:text-[23px] leading-[1.3] sm:leading-none">
                        {" "}
                        ESE + GATE + PSUs Study Material
                      </h2>

                      <span className="text-[#25cd71] text-[14px] mt-[2px] mb-[5px] block">
                        Total Books : 34
                      </span>
                      <span className="block text-[#86a1ae] text-[14px] sm:text-[15px]  mb-[3rem]">
                        Fee: 18000/-
                      </span>

                      <div className="mt-[2rem] flex flex-wrap gap-[10px] items-center justify-center">
                        <div>
                          <Link
                            href="#"
                            className="text-[14px] sm:text-[1rem] border-1 block  border-solid border-[#25cd71] hover:text-[white] text-[#25cd71] rounded-[6px] px-[10px] pt-[4px] pb-[7px] hover:bg-[#25cd71] transition-all duration-[850ms] ease-[ease-in-out]"
                          >
                            Features
                          </Link>
                        </div>
                        <div>
                          <Link
                            href="#"
                            className="text-[14px] sm:text-[1rem] border-1 block border-solid border-[#25cd71] bg-[#25cd71] text-[white] rounded-[6px] px-[10px] pt-[4px] pb-[7px] transition-all duration-[850ms] ease-[ease-in-out]"
                          >
                            Checklist
                          </Link>
                        </div>
                        <div>
                          <Link
                            href="#"
                            className="text-[14px] sm:text-[1rem] border-1 block  border-solid border-[#5bc0de] bg-[#5bc0de] text-[white] rounded-[6px] px-[10px] pt-[4px] pb-[7px]"
                          >
                            Enroll Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" mt-[30px]">
              <div className="dotLeft">
                <h3 className="relative font-bold text-[14px] pl-[10px]">
                  Important Alert: Beware of Fraudulent Activities
                </h3>
              </div>

              <ul
                className=" pl-[25px] text-[14px] "
                style={{ listStyle: "circle" }}
              >
                <li>
                  Please be aware of fraudulent activities targeting individuals
                  by requesting payments or personal information via unsolicited
                  messages.
                </li>
                <li>
                  DO NOT CLICK on any links or share sensitive information sent
                  from unverified sources claiming association with our
                  institution.
                </li>
                <li>
                  We NEVER request payments or sensitive details through
                  unexpected messages or calls.
                </li>
              </ul>

              <div className="dotLeft mt-[5px]">
                <h3 className="relative font-bold text-[14px] pl-[10px]">
                  Protect yourself:
                </h3>
              </div>

              <ul
                className=" pl-[25px] text-[14px] "
                style={{ listStyle: "circle" }}
              >
                <li>
                  Avoid clicking on suspicious links, especially those
                  requesting payments or personal details.
                </li>
                <li>
                  Never share sensitive information unless you are certain about
                  the legitimacy of the request.
                </li>
                <li>
                  We NEVER request payments or sensitive details through
                  unexpected messages or calls.
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeIndex == 3 && (
          <div>
            <div className="container m-auto">
              <div className="grid grid-rows">
                <div className="grid grid-cols-12">
                  <div className="col-span-12  sm:col-span-12  md:col-span-12  lg:col-span-6 xl:col-span-6 px-2.5">
                    <div className="study-card p-4">
                      <h3 className="leading-none text-[#25cd71] text-[18px] sm:text-[20px] mb-[10px]">
                        Civil Engineering{" "}
                      </h3>
                      <span className="block text-[#86a1ae] text-[14px] sm:text-[15px]  mb-[1rem]">
                        Session - 2024-25
                      </span>
                      <h2 className=" text-[20px] sm:text-[23px] leading-[1.3] sm:leading-none">
                        {" "}
                        ESE + GATE + PSUs Study Material
                      </h2>

                      <span className="text-[#25cd71] text-[14px] mt-[2px] mb-[5px] block">
                        Total Books : 34
                      </span>
                      <span className="block text-[#86a1ae] text-[14px] sm:text-[15px]  mb-[3rem]">
                        Fee: 18000/-
                      </span>

                      <div className="mt-[2rem] flex flex-wrap gap-[10px] items-center justify-center">
                        <div>
                          <Link
                            href="#"
                            className="text-[14px] sm:text-[1rem] border-1 block  border-solid border-[#25cd71] hover:text-[white] text-[#25cd71] rounded-[6px] px-[10px] pt-[4px] pb-[7px] hover:bg-[#25cd71] transition-all duration-[850ms] ease-[ease-in-out]"
                          >
                            Features
                          </Link>
                        </div>
                        <div>
                          <Link
                            href="#"
                            className="text-[14px] sm:text-[1rem] border-1 block border-solid border-[#25cd71] bg-[#25cd71] text-[white] rounded-[6px] px-[10px] pt-[4px] pb-[7px] transition-all duration-[850ms] ease-[ease-in-out]"
                          >
                            Checklist
                          </Link>
                        </div>
                        <div>
                          <Link
                            href="#"
                            className="text-[14px] sm:text-[1rem] border-1 block  border-solid border-[#5bc0de] bg-[#5bc0de] text-[white] rounded-[6px] px-[10px] pt-[4px] pb-[7px]"
                          >
                            Enroll Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12  sm:col-span-12  md:col-span-12  lg:col-span-6 xl:col-span-6 px-2.5">
                    <div className="study-card p-4">
                      <h3 className="leading-none text-[#25cd71] text-[18px] sm:text-[20px] mb-[10px]">
                        Civil Engineering{" "}
                      </h3>
                      <span className="block text-[#86a1ae] text-[14px] sm:text-[15px]  mb-[1rem]">
                        Session - 2024-25
                      </span>
                      <h2 className=" text-[20px] sm:text-[23px] leading-[1.3] sm:leading-none">
                        {" "}
                        ESE + GATE + PSUs Study Material
                      </h2>

                      <span className="text-[#25cd71] text-[14px] mt-[2px] mb-[5px] block">
                        Total Books : 34
                      </span>
                      <span className="block text-[#86a1ae] text-[14px] sm:text-[15px]  mb-[3rem]">
                        Fee: 18000/-
                      </span>

                      <div className="mt-[2rem] flex flex-wrap gap-[10px] items-center justify-center">
                        <div>
                          <Link
                            href="#"
                            className="text-[14px] sm:text-[1rem] border-1 block  border-solid border-[#25cd71] hover:text-[white] text-[#25cd71] rounded-[6px] px-[10px] pt-[4px] pb-[7px] hover:bg-[#25cd71] transition-all duration-[850ms] ease-[ease-in-out]"
                          >
                            Features
                          </Link>
                        </div>
                        <div>
                          <Link
                            href="#"
                            className="text-[14px] sm:text-[1rem] border-1 block border-solid border-[#25cd71] bg-[#25cd71] text-[white] rounded-[6px] px-[10px] pt-[4px] pb-[7px] transition-all duration-[850ms] ease-[ease-in-out]"
                          >
                            Checklist
                          </Link>
                        </div>
                        <div>
                          <Link
                            href="#"
                            className="text-[14px] sm:text-[1rem] border-1 block  border-solid border-[#5bc0de] bg-[#5bc0de] text-[white] rounded-[6px] px-[10px] pt-[4px] pb-[7px]"
                          >
                            Enroll Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" mt-[30px]">
              <div className="dotLeft">
                <h3 className="relative font-bold text-[14px] pl-[10px]">
                  Important Alert: Beware of Fraudulent Activities
                </h3>
              </div>

              <ul
                className=" pl-[25px] text-[14px] "
                style={{ listStyle: "circle" }}
              >
                <li>
                  Please be aware of fraudulent activities targeting individuals
                  by requesting payments or personal information via unsolicited
                  messages.
                </li>
                <li>
                  DO NOT CLICK on any links or share sensitive information sent
                  from unverified sources claiming association with our
                  institution.
                </li>
                <li>
                  We NEVER request payments or sensitive details through
                  unexpected messages or calls.
                </li>
              </ul>

              <div className="dotLeft mt-[5px]">
                <h3 className="relative font-bold text-[14px] pl-[10px]">
                  Protect yourself:
                </h3>
              </div>

              <ul
                className=" pl-[25px] text-[14px] "
                style={{ listStyle: "circle" }}
              >
                <li>
                  Avoid clicking on suspicious links, especially those
                  requesting payments or personal details.
                </li>
                <li>
                  Never share sensitive information unless you are certain about
                  the legitimacy of the request.
                </li>
                <li>
                  We NEVER request payments or sensitive details through
                  unexpected messages or calls.
                </li>
              </ul>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
