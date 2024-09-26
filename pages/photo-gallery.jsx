import { Link } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

export default function photoGallery() {
  const [apiData, setApiData] = useState(null);
  const [category, setCategory] = useState("");
  const [photos, setPhotos] = useState(null);
  const [isloading , setIsLoading] = useState(false)

  // Fetch categories and other API data
  const photoapi = async () => {
    setIsLoading(true)
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

      const responseData = await response.json();
      setApiData(responseData);
    } catch (error) {
      console.log(error);
    }finally{
      setIsLoading(false)
    }
  };

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
      // const photosData = data?.contentBlock?.PHOTO_GALLERY?.advanceData?.photos;
      // console.log("Photos:", photosData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    photoapi();
  }, []);

  useEffect(() => {
    photoData(category);
  }, [category]);


  if (isloading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="border-gray-100 border-t-blue-500 w-[60px] h-[60px] animate-spin rounded-[50%] border-8 border-solid"></div>
      </div>
    );
  }

  return (
    <>
      {/* {JSON.stringify(apiData)} */}
      <section className="sec2 py-4">
        <div className="container mx-auto px-16">
          <div className="heading py-2">
            <h3 className="text-center text-2xl font-bold text-[#0c4270]">
              {apiData?.contentBlock?.PHOTO_GALLERY?.heading || "Photo Gallery"}
            </h3>
            <div className="border-b-2 border-[#0c4270] w-[50%] md:w-[30%] lg:w-[18%] mx-auto py-1"></div>
          </div>

          {apiData?.contentBlock?.PHOTO_GALLERY?.advanceData?.categoriesData
            ?.length > 1 && (
            <div className="select flex gap-2 col-span-2">
              <label className="py-1 md:text-lg text-sm font-bold">
                Filter:
              </label>

              <select
                className="md:text-lg text-sm py-1 md:px-8 px-2 bg-transparent border border-[black] rounded"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">All photos Category</option>
                {apiData?.contentBlock?.PHOTO_GALLERY?.advanceData?.categoriesData.map(
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

          <div className="secVid grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-3 gap-4 py-8">
            {photos?.contentBlock?.PHOTO_GALLERY?.advanceData?.data?.length ? (
              photos.contentBlock.PHOTO_GALLERY.advanceData.data.map(
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
              )
            ) : (
              <div>Photo not available</div>
            )}
          </div>

         
        </div>
      </section>
    </>
  );
}
