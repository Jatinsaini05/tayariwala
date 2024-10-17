import React from 'react'

const Tables = () => {
  return (
    <div>
      <div className='bg-emerald-50 py-12'>
        <div className='container'>
          <h1 className='text-xl mb-7 text-center'>Fee Structure</h1>
          <div className='overflow-x-auto scrollbar-hide'>
            <table className='min-w-full border'>
              <thead>
                <tr className='border text-white text-sm font-semibold bg-green-600'>
                  <th className='py-2 px-4 border'>Program</th>
                  <th className='py-2 px-4 border'>Branch</th>
                  <th className='py-2 px-4 border'>Session</th>
                  <th className='py-2 px-4 border'>Fee</th>
                  <th className='py-2 px-4 border'>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className='text-sm'>
                  <td className='border px-4 py-2'>Regular Classroom Program</td>
                  <td className='border px-4 py-2'>Civil Engineering</td>
                  <td className='border px-4 py-2'>2022-23</td>
                  <td className='border px-4 py-2'>95,500/-</td>
                  <td className='border px-4 py-2'>
                    <a href="#" className='text-blue-600'>Enroll Now</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className='py-12 container'>
        <h1 className="mb-5">Upcoming Batches</h1>
        <div className='overflow-x-auto scrollbar-hide'>
          <table className='min-w-full border'>
            <thead>
              <tr className='border text-white text-sm font-semibold bg-green-600'>
                <th className='py-2 px-4 border'>Batch Type</th>
                <th className='py-2 px-4 border'>Code</th>
                <th className='py-2 px-4 border'>Date</th>
                <th className='py-2 px-4 border'>Timing</th>
                <th className='py-2 px-4 border'>Admission</th>
                <th className='py-2 px-4 border'>Venue</th>
                <th className='py-2 px-4 border'>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className='text-sm'>
                <td className='border px-4 py-2'>Genius-Morning</td>
                <td className='border px-4 py-2'>CERMD2204</td>
                <td className='border px-4 py-2'>10th May'22</td>
                <td className='border px-4 py-2'>08:00 AM-02:30</td>
                <td className='border px-4 py-2'>93% Occupied</td>
                <td className='border px-4 py-2'>New Delhi/-</td>
                <td className='border px-4 py-2'>
                  <a href="#" className='text-blue-600'>Enroll Now</a>
                </td>
              </tr>
              <tr className='text-sm bg-green-50'>
                <td className='border px-4 py-2'>Genius-Morning</td>
                <td className='border px-4 py-2'>CERMD2209</td>
                <td className='border px-4 py-2'>02nd May'22</td>
                <td className='border px-4 py-2'>08:00 AM-02:30</td>
                <td className='border px-4 py-2'>Admission Open</td>
                <td className='border px-4 py-2'>New Delhi/-</td>
                <td className='border px-4 py-2'>
                  <a href="#" className='text-blue-600'>Enroll Now</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  )
}

export default Tables;
