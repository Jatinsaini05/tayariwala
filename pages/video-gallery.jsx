import React, { useEffect, useState } from "react";

export default function videoGallery() {
  const [apiData, setApiData] = useState();
  const [albumId, setAlbumId] = useState();
  const [displayvid, setDisplayVid] = useState();
  const [isloading, setIsloading] = useState(false);

  const mainApi = async () => {
 setIsloading(true)
    try {
      let params = new URLSearchParams({
        contentBlock: "Object",
      });
      let response = await fetch(
        `https://v3.edkt.net/api/s/frontpage/video-gallery?${params.toString()}`,
        {
          headers: {
            apihost: "https://vijethaiasacademyvja.com/",
          },
        }
      );
      let newRes = await response.json();
      setApiData(newRes);
      // console.log(newRes);
    } catch (error) {
      console.log(error);
    } finally{
      setIsloading(false)
    }
  };

  const videoApi = async (albumId) => {
    try {
      let url = albumId 
        ? `https://v3.edkt.net/api/s/galleryvideo?album=${albumId}`
        : `https://v3.edkt.net/api/s/galleryvideo`;
      let response = await fetch(url, {
        headers: {
          apihost: "https://vijethaiasacademyvja.com/",
        },
      });
      let data = await response.json();
      setDisplayVid(data);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    mainApi();
  }, []);

  useEffect(() => {
    videoApi(albumId);
  }, [albumId]);

  if (isloading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="border-gray-100 border-t-blue-500 w-[60px] h-[60px] animate-spin rounded-[50%] border-8 border-solid"></div>
      </div>
    );
  }

  return (
    <>
    {/* {JSON.stringify(displayvid)} */}
      <section className="sec2 py-4">
        <div className="container mx-auto px-16">
          <div className="heading py-2">
            <h3 className="text-center text-2xl font-bold text-[#0c4270]">
              {apiData?.contentBlock?.VIDEO_GALLERY?.heading}
            </h3>
            <div className="border-b-2 border-[#0c4270] w-[50%] md:w-[30%] lg:w-[18%] mx-auto py-1"></div>
          </div>

          <div className="select flex gap-2 col-span-2 pt-8">
            <label className="py-1 md:text-lg text-sm font-bold">Filter:</label>

            <select
              name=""
              id=""
              className="md:text-lg text-sm py-1 md:px-8 px-2 bg-transparent border border-[black] rounded"
              onChange={(e) => setAlbumId(e.target.value)}
            >
              <option value="">All Videos</option>

              {apiData?.contentBlock?.VIDEO_GALLERY?.advanceData?.categoriesData.map(
                (item, ind) => {
                  return (
                    <option
                      value={item.id}
                      key={ind}
                      className="hover:bg-[#0c4270]"
                    >
                      {item.title}
                    </option>
                  );
                }
              )}
            </select>
          </div>

          <div className="secVid grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-3 gap-4 py-8">



            
            {displayvid?.length
              ? displayvid.map((item, ind) => {
                  return (
                    <div className="vid" key={ind}>
                      <iframe
                        className="w-full aspect-video"
                        src={`https://www.youtube.com/embed/${item.url}`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    </div>
                  );
                })
              : "Video URL not found"}
          </div>
        </div>
      </section>
    </>
  );
}
