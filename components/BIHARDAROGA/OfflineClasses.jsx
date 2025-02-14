import React from 'react'
import Link from 'next/link'

const OfflineClasses = ({offlineClassData}) => {
  return (
    <div className='container mt-14 lg:mb-[60px]' id="offline-classes">
      {offlineClassData?.length > 0 ? (
        <div>
          <h3 className='text-[28px] text-[rgb(34,22,56)] pl-5 font-medium'>Classroom Offline Course</h3>
          <div className='grid xl:grid-cols-3 md:grid-cols-2 gap-1'>
            {offlineClassData?.map((item, index) => {
              // Format start date
              const formattedDate = new Date(item.startDate).toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
              });

              return (
                <div key={index} className='border rounded px-3 pt-3 py-6 w-fit '>
                  <div className='bg-white md:max-w-[380px]  rounded overflow-hidden shadow-xl'>
                    <div className="relative">
                      <Link href={`/${item?.uri}`}>
                        <img src={item?.thumb} alt="image" className="md:w-[380px]"></img>
                      </Link>
                      <span className='absolute right-0 bottom-0 bg-customFC6200 rounded-tl-lg px-2 py-1'>
                        <span className='line-through text-[13px] font-semibold'>
                          ₹ {item?.mrp}
                        </span>
                        <span className='text-white text-xl font-semibold ml-1'>
                          ₹ {item?.cost}
                        </span>
                      </span>
                    </div>
                    <div className='p-8'>
                      <div>
                        <p className='text-[#212529] mb-4'>{item?.stream?.valueAlias}</p>
                        <p className='text-[#221638] text-[24px] font-semibold hover:text-customFC6200'>
                          <Link href={`/${item?.uri}`}>{item?.alias}</Link>
                        </p>

                        <p className='text-[#606060] pt-5 text-base leading-6'>
                          <span dangerouslySetInnerHTML={{ __html: item?.fullDescription }}></span>
                        </p>
                      </div>
                      <div className='py-8 flex justify-between text-[#007bff]'>
                        <p>Start Date: {formattedDate}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className='border text-center py-5 shadow-lg'>
          <h5 className='text-[#221638] text-xl'>
            There are no Classroom Offline Course Course found..
          </h5>
        </div>
      )}
    </div>
  )
}

export default OfflineClasses
