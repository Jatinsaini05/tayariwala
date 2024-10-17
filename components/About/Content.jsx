import React from "react";

export default function Content({ contentData ,title}) {
  return (
    <section id="aboutContent">
      {/* {JSON.stringify(contentData)} */}
      <div className="container m-auto py-[2rem] px-[1rem] sm:px-[2rem] lg:px-[3rem]">
        <div className="grid grid-rows">
          <div className="grid grid-cols-12">
            <div className="col-span-12  sm:col-span-12  md:col-span-12  lg:col-span-12 xl:col-span-12 lg:px-2.5">
              <h1 className="text-[#1db24b] text-center sm:text-left text-[25px] sm:text-[28px] font-semibold">
              {title}
              </h1>
              <div className="mt-[3rem]">
                <h2 className="text-[20px] text-center sm:text-left sm:text-[22px] font-semibold">
                  {contentData?.WHO_WE_ARE?.heading}
                </h2>
                <div className="mt-[1rem]">
                  <span
                    className="block text-[15px] mb-[10px]"
                    dangerouslySetInnerHTML={{
                      __html: contentData?.WHO_WE_ARE?.content,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ebf6f4]">
        <div className="container m-auto py-[2rem] px-[1rem] sm:px-[2rem] lg:px-[3rem]">
          <div className="grid grid-rows">
            <div className="grid grid-cols-12">
              <div className="col-span-12  sm:col-span-12  md:col-span-12  lg:col-span-12 xl:col-span-12 lg:px-2.5">
                <div>
                  <h2 className="text-[20px] text-center sm:text-left sm:text-[22px] font-semibold">
                  {contentData?.ABOUT_DIRECTOR?.heading}
                  </h2>
                  <div className="mt-[1rem]">
                  <span
                    className="block text-[15px] mb-[10px]"
                    dangerouslySetInnerHTML={{
                      __html: contentData?.ABOUT_DIRECTOR?.content,
                    }}
                  ></span>
{/* 
                    <span className="block text-[14px] mb-[10px]">
                      IES Master is the brainchild of Mr. Kanchan Kumar Thakur,
                      an IIT Roorkee alumnus and an ex-IES officer. Established
                      in the year 2011, IES Master stands out among other
                      coaching institutes due to its unique teaching and
                      preparation methodology for top engineering exams such as
                      ESE, GATE and PSUs. The uniqueness of IES Master has
                      enriched over the years due to Mr. Thakur's continuous
                      involvement in teaching for the last 15 years along with
                      his exposure to the practical fields.
                    </span>
                    <span className="block text-[14px] mb-[10px]">
                      The main objective of IES Master is to provide quality
                      education to aspiring students with commitment in every
                      possible manner that helps them to achieve their career
                      objective. The unique teaching methodology is designed in
                      such a way that the aspirants are involved in study and
                      practice sessions with an exam-oriented approach rather
                      than just following the curriculum. IES Master ensures
                      that each and every session is conducted with utmost care,
                      and every student who attends the classes learns the
                      complete module with all possible techniques. The sole
                      objective of each session is to extract the best out of
                      students. The students also feel content about what they
                      have learnt to perform better in various competitive
                      examinations.
                    </span>
                    <span className="block text-[14px] mb-[10px]">
                      IES Master does not wield a magic wand to make an aspirant
                      achieve success overnight. In fact, it is the effective
                      problem solving techniques and consistent question
                      practice sessions that instill the required confidence in
                      students aspiring for top engineering competitive exams.
                      This confidence in turn improves the potential of students
                      in solving problems while writing the real exam.
                    </span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container m-auto py-[2rem] px-[1rem] sm:px-[2rem] lg:px-[3rem]">
        <div className="grid grid-rows">
          <div className="grid grid-cols-12">
            <div className="col-span-12  sm:col-span-12  md:col-span-12  lg:col-span-12 xl:col-span-12 lg:px-2.5">
              <div className="mt-[1rem]">
                <h2 className="text-[20px] text-center sm:text-left  sm:text-[22px] font-semibold">
                {contentData?.DIRECTOR_MSG?.heading}
                </h2>
                <div className="mt-[1rem]">
                <span
                    className="block text-[15px] mb-[10px]"
                    dangerouslySetInnerHTML={{
                      __html: contentData?.DIRECTOR_MSG?.content,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ebf6f4] py-[1rem]">
        <div className="container m-auto py-[1rem] px-[1rem] sm:px-[2rem] lg:px-[3rem]">
          <div className="grid grid-rows">
            <div className="grid grid-cols-12">
              <div className="col-span-12  sm:col-span-12  md:col-span-12  lg:col-span-12 xl:col-span-12 lg:px-2.5">
                <div>
                  <h2 className="text-[20px] text-center sm:text-left sm:text-[22px] font-semibold">
                  {contentData?.WHY_CHOOSE_US?.heading}
                  </h2>
                  <div className="mt-[1rem]">
                  <span
                    className="block text-[15px] mb-[10px]"
                    dangerouslySetInnerHTML={{
                      __html: contentData?.WHY_CHOOSE_US?.content,
                    }}
                  ></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container m-auto py-[1rem] px-[1rem] sm:px-[2rem] lg:px-[3rem]">
        <div className="grid grid-rows">
          <div className="grid grid-cols-12">
            <div className="col-span-12  sm:col-span-12  md:col-span-12  lg:col-span-12 xl:col-span-12 lg:px-2.5">
              <div className="mt-[1rem]">
                <h2 className="text-[20px]  text-center sm:text-left sm:text-[22px] font-semibold">
                {contentData?.SUCCESS_STORY?.heading}
                </h2>
                <div className="mt-[1rem]">
                <span
                    className="block text-[15px] mb-[10px]"
                    dangerouslySetInnerHTML={{
                      __html: contentData?.SUCCESS_STORY?.content,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
