import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getWebberListItem } from "../../../service/apiFetch";
export default function Book({ book }) {
  const bookId = book?.programData?.freeResources?.list;
  const [activeIndex, setActiveIndex] = useState(0);
  const [apiData, setApiData] = useState();
  const fetchApi = async () => {
    const params = new URLSearchParams({
      list: bookId,
    });
    const response = await getWebberListItem(params);
    const data = response;
    console.log(data);

    setApiData(data);
  };

  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <section>
      {/* {JSON.stringify(book)} */}
      <div className="py-[2rem] px-[10px] lg:px-[2rem]">
        <div className="container mx-auto">
          <div className="grid grid-rows">
            <div className="grid grid-cols-12">
              <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-12 lg:px-2.5">
                <div>
                  <h1 className="font-semibold text-[20px] ">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: book?.programData?.freeResources?.content,
                      }}
                    />
                  </h1>
                </div>
                <div className="mt-[1rem] flex gap-[15px] sm:gap-[20px] flex-wrap justify-center  lg:justify-start items-center">
                  {apiData?.map((item, index) => (
                    <div key={index}>
                      <button
                        onClick={() => setActiveIndex(index)}
                        className={` text-[14px] px-2 py-1 rounded pr-3 pl-3 text-[#5698d0] ${activeIndex === index ? "border-2 border-[#33a037] bg-[#d7f9d3]" : "border-[none] bg-[transparent] hover:bg-[#eee]"}`}
                      >
                        {item.title}
                      </button>
                    </div>
                  ))}

                  {/* <div>
                    <button
                      onClick={() => setActiveIndex(1)}
                      className={` text-[14px] px-2 py-1 rounded pr-3 pl-3 text-[#5698d0] ${activeIndex === 1 ? "border-2 border-[#33a037] bg-[#d7f9d3]" : "border-[none] bg-[transparent] hover:bg-[#eee]"}`}
                    >
                      ME
                    </button>
                  </div> */}
                </div>

                {apiData?.map(
                  (item, index) =>
                    activeIndex == index && (
                      <div className="book-table mt-[1rem]">
                        {/* <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-[#007339] text-[white]">
                          <th>S.NO</th>
                          <th>Subject / Book Name</th>
                          <th>Author Name</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Strength of Materials /Mechanics of Structure</td>
                          <td>Gere & Goodno, L. Singer</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Theory of Structures/ Analysis of Structure</td>
                          <td>
                            L.S. Negi & Jangit, Gupta & Pandit, C.S. Reddy
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Soil Mechanics & Foundation Engineering.</td>
                          <td>R.F.Craig , Muni Budhu</td>
                        </tr>
                      </tbody>
                    </table> */}
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item.desci,
                          }}
                        />
                      </div>
                    )
                )}

                {/* {activeIndex === 1 && (
                  <div className="book-table mt-[1rem]">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-[#007339] text-[white]">
                          <th>S.NO</th>
                          <th>Subject / Book Name</th>
                          <th>Author Name</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Strength of Materials /Mechanics of Structure</td>
                          <td>Gere & Goodno, L. Singer</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Theory of Structures/ Analysis of Structure</td>
                          <td>
                            L.S. Negi & Jangit, Gupta & Pandit, C.S. Reddy
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Soil Mechanics & Foundation Engineering.</td>
                          <td>R.F.Craig , Muni Budhu</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {JSON.stringify(book)} */}
      <div className="pt-[2rem] pb-[2rem] sm:pt-[3rem] sm:pb-[4rem] px-[10px] lg:px-[2rem] bg-[#ecfdf5] mb-[2rem]">
        <div className="container mx-auto">
          <div className="grid grid-rows">
            <div className="grid grid-cols-12">
              <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-12 lg:px-2.5">
                <div
                  dangerouslySetInnerHTML={{
                    __html: book?.programData?.courseStructure?.content
                  }}
                />
                {/* <h1 className="text-[21px] font-semibold mb-[1rem]">Results</h1>
                <div className="flex justify-start md:justify-between items-baseline md:items-center flex-col md:flex-row gap-[10px] w-full md:w-[58%] ">
                  <div className="mb-[10px] md:mb-[0]">
                    <Link
                      href="#"
                      target="_blank"
                      className=" border-1 border-[lightgray] bg-white text-base rounded-[4px] px-[10px] pt-[4px] pb-[8px] hover:bg-[#e6e6e6] transition-all duration-[ease-in-out] delay-[0.3s]"
                    >
                      ESE Result
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="#"
                      target="_blank"
                      className=" w-fit  border-1 border-[lightgray] bg-white text-base rounded-[4px] px-[10px] pt-[4px] pb-[8px] hover:bg-[#e6e6e6] transition-all duration-[ease-in-out] delay-[0.3s]"
                    >
                      GATE Result
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
