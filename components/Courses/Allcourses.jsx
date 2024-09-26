import React from "react";
import Link from "next/link";
export default function allCourses({ courseProgram }) {

    const formatEndDate = (dateString) => {
        const months = [
          "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        const [day, month, year] = dateString.split("/");
        return `${day}-${months[month - 1]}, ${year}`;
      };



  return (
    <>
      {/* {JSON.stringify(courseProgram)} */}
      <section id="courses">
        <div className="container mx-auto px-4 sm:px-4  md:px-8 lg:px-16 py-4">
          <div className="heading bg-[#283571] text-center py-2">
            <h3 className=" text-[23px] md:text-[28px] lg:text-[2rem] font-[400] text-white">
              All COURSES
            </h3>
          </div>

          {courseProgram?.length ? (
            <div className="grid grid-rows">
              <div className="grid grid-cols-12 mt-[20px]">
                {courseProgram.map((item, index) => (
                  <div
                    key={index}
                    className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 xl:col-span-3 px-2.5 mb-[2rem]"
                  >
                    <div className="pb-4 border-2 shadow-lg border-[#949494]">
                      {item?.thumb && (
                        <div className="h-[16rem] w-full">
                          <Link href={item?.uri}>
                            <img
                              src={item.thumb}
                              alt="course-Image"
                              className="w-full h-full object-fill"
                            />
                          </Link>
                        </div>
                      )}
                      <div className="pl-[10px] pr-[6px] mt-[25px] h-auto sm:h-[9rem]">
                        {item?.name && (
                          <div className="pb-[10px]">
                            <h3 className="text-[14px] font-[700] h-[45px] uppercase line-clamp-2">
                              <Link href={item?.uri}>{item.name}</Link>
                            </h3>
                          </div>
                        )}
                        {item?.cost && (
                          <div className="text-[13px] font-semibold">
                            <span>Cost: ₹ {item.cost}</span>
                          </div>
                        )}

                          <div className="text-[13px] py-1 font-semibold">
                            <span className="text-[#896cb4]">
                              Validity:{" "}
                              {item?.endDate ? (
                                <span>{formatEndDate(item.endDate) }</span>
                              ) : (
                                <span>31-Dec, 2024</span>
                              )}
                            </span>
                          </div>
                        
                        <div className="flex justify-center items-center gap-[5px] py-2">
                          {item?.uri && (
                            <div className="hover:text-[#03217a] font-semibold shadow-lg border text-[12px] px-6 py-2 rounded">
                              <Link href={`courses/detail/${item.uri}`}>
                                See Detail
                              </Link>
                            </div>
                          )}
                          {item?.linkedProduct && (
                            <div className="hover:text-[#03217a] font-semibold shadow-lg border text-[12px] px-6 py-2 bg-[#896cb4] text-white rounded">
                              <Link href={`/buy/${item.linkedProduct}`}>
                                APPLY NOW
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>Course Program Not Available</div>
          )}
        </div>
      </section>
    </>
  );
}
