import React, { useState, useEffect } from "react";
import MetaTags from "../components/MetaTags";
export const getStaticProps = async () => {
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
    let apiData = await response.json();

    return {
      props: {
        apiData,
      },
    };
  } catch (error) {
    console.log("Failed to Load Video Gallery", error);
    return {
      props: {
        apiData: [],
      },
    };
  }
};

const VideoGallery = (props) => {
  const [albumId, setAlbumId] = useState("");
  const [displayvid, setDisplayVid] = useState([]);
  const fetchVideos = async (albumId) => {
    let url = albumId
      ? `https://v3.edkt.net/api/s/galleryvideo?album=${albumId}`
      : `https://v3.edkt.net/api/s/galleryvideo`;

    try {
      let videoResponse = await fetch(url, {
        headers: {
          apihost: "https://vijethaiasacademyvja.com/",
        },
      });
      let data = await videoResponse.json();
      setDisplayVid(data);
    } catch (error) {
      console.log("Failed to load videos", error);
      setDisplayVid([]);
    }
  };
  useEffect(() => {
    fetchVideos(albumId);
  }, [albumId]);

  return (
    <div>
      <MetaTags
        title={props?.apiData?.pageData?.metaTags?.ogTitle}
        keywords={props?.apiData?.pageData?.metaTags?.keywords}
        description={props?.apiData?.pageData?.metaTags?.ogDescription}
        image={props?.apiData?.pageData?.metaTags?.ogImag}
      ></MetaTags>
      <div className="sec2 py-4">
        <div className="container mx-auto px-16">
          <div className="heading py-2">
            <h3 className="text-center text-2xl font-bold text-[#0c4270]">
              {props?.apiData?.contentBlock?.VIDEO_GALLERY?.heading}
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

              {props?.apiData?.contentBlock?.VIDEO_GALLERY?.advanceData?.categoriesData.map(
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

          <div>
            {displayvid.length ? (
              <div className="secVid grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-3 gap-4 py-8">
                {displayvid.map((item, ind) => {
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
                })}
              </div>
            ) : (
              <div>
                {props?.apiData?.contentBlock?.VIDEO_GALLERY?.advanceData?.data
                  ?.length ? (
                  <div className="secVid grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-3 gap-4 py-8">
                    {props?.apiData?.contentBlock?.VIDEO_GALLERY?.advanceData?.data.map(
                      (item, ind) => {
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
                      }
                    )}
                  </div>
                ) : (
                  <div>Video not available</div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;
