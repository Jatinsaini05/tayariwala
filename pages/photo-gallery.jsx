import { Link } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import MetaTags from "../components/MetaTags";
export const getStaticProps = async () => {
  try {
    const params = new URLSearchParams({
      contentBlock: "Object",
    });

    const response = await fetch(
      `https://v3.edkt.net/api/s/frontpage/photo-gallery?${params}`,
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
    console.log("Failed to Load Photo Gallery", error);
    return {
      props: {
        apiData: [],
      },
    };
  }
};

const photoGallery = (props) => {
  const [category, setCategory] = useState("");
  const [photos, setPhotos] = useState(null);
  // Fetch photos based on selected category
  const photoData = async (category) => {
    try {
      const categoryId = category
        ? `https://v3.edkt.net/api/s/frontpage/photo-gallery?album=${category}`
        : `https://v3.edkt.net/api/s/frontpage/photo-gallery`;
      const res = await fetch(categoryId, {
        headers: {
          apihost: "https://vijethaiasacademyvja.com/",
        },
      });
      const data = await res.json();
      console.log(data);

      setPhotos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    photoData(category);
  }, [category]);

  return (
    <div>
       <MetaTags
        title={props?.apiData?.pageData?.metaTags?.ogTitle}
        keywords={props?.apiData?.pageData?.metaTags?.keywords}
        description={props?.apiData?.pageData?.metaTags?.ogDescription}
        image={props?.apiData?.pageData?.metaTags?.ogImag}
      ></MetaTags>
    <section className="sec2 py-4">
      <div className="container mx-auto px-16">
        <div className="heading py-2">
          <h3 className="text-center text-2xl font-bold text-[#0c4270]">
            {props?.apiData?.contentBlock?.PHOTO_GALLERY?.heading ||
              "Photo Gallery"}
          </h3>
          <div className="border-b-2 border-[#0c4270] w-[50%] md:w-[30%] lg:w-[18%] mx-auto py-1"></div>
        </div>

        {props?.apiData?.contentBlock?.PHOTO_GALLERY?.advanceData
          ?.categoriesData?.length > 1 && (
          <div className="select flex gap-2 col-span-2">
            <label className="py-1 md:text-lg text-sm font-bold">Filter:</label>

            <select
              className="md:text-lg text-sm py-1 md:px-8 px-2 bg-transparent border border-[black] rounded"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">All photos Category</option>
              {props?.apiData?.contentBlock?.PHOTO_GALLERY?.advanceData?.categoriesData.map(
                (item, index) => (
                  <option
                    value={item.id}
                    key={index}
                    className="hover:bg-[#0c4270]"
                  >
                    {item.title}
                  </option>
                )
              )}
            </select>
          </div>
        )}

        <div>
          {photos?.contentBlock?.PHOTO_GALLERY?.advanceData?.data?.length ? (
            <div className="secVid grid sm:grid-cols-1 md:grid-cols-3 gap-4 py-8  lg:grid-cols-4">
              {" "}
              {photos.contentBlock.PHOTO_GALLERY.advanceData.data.map(
                (item, index) => (
                  <div key={index}>
                    <Link href={item?.link}>
                      <img
                        className="w-full h-48 object-contain"
                        src={item?.url}
                        alt="photo"
                      />
                    </Link>
                  </div>
                )
              )}
            </div>
          ) : (
            <div>
              {props?.apiData?.contentBlock?.PHOTO_GALLERY?.advanceData?.data
                ?.length ? (
                <div className="secVid grid sm:grid-cols-1 md:grid-cols-3 gap-4 py-8  lg:grid-cols-4">
                  {props?.apiData?.contentBlock.PHOTO_GALLERY.advanceData.data.map(
                    (item, index) => (
                      <div key={index}>
                        <Link href={item?.link}>
                          <img
                            className="w-full h-48 object-contain"
                            src={item?.url}
                            alt="photo"
                          />
                        </Link>
                      </div>
                    )
                  )}
                </div>
              ) : (
                <div>Photo Not Available</div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
    </div>
  );
};
export default photoGallery;
