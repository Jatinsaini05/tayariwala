import React, { useEffect, useState } from "react";
import { getWebberListItem } from "../../service/apiFetch";
export default function List({ data }) {
  const listId = data?.list;

  const [listData, setListData] = useState();

  const fetchApi = async () => {
    const params = new URLSearchParams({
      list: listId,
    });
    const response = await getWebberListItem(params);
    const data = response;
    // console.log(data)
    setListData(data);
  };

  useEffect(() => {
    if (listId) {
      fetchApi();
    }
  }, [listId]);

  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      {data?.img &&
         <div>
         <img src={data?.img} alt="Image" className="w-full" />
       </div>}
      
      <section className="bg-[#ebf6f4] py-[2rem] px-[10px] lg:px-[2rem]">
        <div className="container mx-auto">
          <div className="grid grid-rows">
            <div className="grid grid-cols-12">
              <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-12 lg:px-2.5">
                {data?.heading&&data?.heading!=null && (
                  <h2 className="text-center sm:text-left text-[23px] sm:text-[28px] font-semibold text-green-600">
                    {data?.heading}
                  </h2>
                )}
                {data?.content&&data?.content!=null && (
                  <div
                    className="inner-html-box"
                    dangerouslySetInnerHTML={{
                      __html: data?.content,
                    }}
                  />
                )}
                {listData&&listData?.length!=0 && (<div>
                  <div className="mt-[1rem] flex gap-[15px] sm:gap-[20px] flex-wrap justify-start items-center">
                    {listData?.map((item, index) => (
                      <div key={index}>
                        <button
                          onClick={() => setActiveIndex(index)}
                          className={` text-[14px] px-2 py-1 rounded pr-3 inline-block pl-3 text-[#5698d0] ${activeIndex === index ? "border-2 border-[#33a037] bg-[#d7f9d3]" : "border-[none] bg-[transparent] hover:bg-[#eee]"}`}
                        >
                          {item.title}
                        </button>
                      </div>
                    ))}
                  
                  </div>
                
                    {listData?.map(
                      (item, index) =>
                        activeIndex == index && (
                          <div className="mt-[1rem]">
                            <div
                              className="inner-html-box"
                              dangerouslySetInnerHTML={{ __html: item.desci }}
                            />
                          </div>
                        )
                    )}
                  
                    </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
