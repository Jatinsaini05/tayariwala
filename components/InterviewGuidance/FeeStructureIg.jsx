import React from 'react'

const FeeStructureIg = () => {
  return (
    <div className='bg-customEBF5F3'>
      <div className='container pt-10 pb-10'>
        <h2 className="mb-5 text-xl"><b>
          Fee Structure</b>
        </h2>
        <div className='overflow-x-auto scrollbar-hide'>
          <table className='min-w-full text-sm'>
            <thead>
              <tr className='text-white bg-custom007339'>
                <td className="border border-custom025D2F px-2 py-1">Program</td>
                <td className="px-2 py-2 border border-custom025D2F">Branch</td>
                <td className="px-2 py-2 border border-custom025D2F">Student Type</td>
                <td className="px-2 py-2 border border-custom025D2F">Fee</td>
              </tr>
            </thead>
            <tbody>
              <tr key="1">
                <td className="p-2 border">Informal (DAF Filling) Session<br></br>
                  (Offline/Online Mode)</td>
                <td className="p-2 border">Civil Engineering</td>
                <td className="p-2 border">All Students</td>
                <td className="p-2 border">FREE
                </td>

              </tr>
              <tr key="2" className='bg-customD8FAD4'>
                <td className="p-2 border">Online Interview Guidance Program<br></br>
                  (Online Classes + Study Material)</td>
                <td className="p-2 border">Civil Engineering</td>
                <td className="p-2 border">Non-IES MASTER Students<br></br>
                  IES MASTER Students</td>
                <td className="p-2 border">
                  <p>Rs. 1000/-</p>
                  <p>Rs. 500/-</p>
                </td>
              </tr>
              <tr key="3">
                <td className="p-2 border">Mock Interview<br></br>
                  (Offline/Online Mode)</td>
                <td className="p-2 border">Civil Engineering</td>
                <td className="p-2 border">Non-IES MASTER Students<br></br>
                  IES MASTER Students</td>
                <td className="p-2 border">
                  <p>500/-</p>
                  <p>Free</p>
                </td>

              </tr>
            </tbody>
          </table>
        </div>
        <p className='mt-5 text-sm'><strong>Note:- </strong></p>
        <ul className='mt-5 text-sm list-disc list-inside'>
          <li>Books are to be collected from our main office.</li>
          <li>If students want the books to be delivered at their correspondense address, they have to pay the courier charges (Rs. 250) extra.</li>
          <li>Courier charges can be paid through NEFT by adding beneficiary Account.</li>
          <li>Once payment done, students are requested to send the transaction details to <em><strong>info@iesmaster.org</strong></em>&nbsp;from their registered email ID.</li>
          <li><strong>Account details are mentioned below:-</strong></li>
        </ul>
        <div class='border px-3 pr-10 rounded-md mt-4 md:w-max w-full py-4 text-custom1DB24E'>
          <h4 class="text-base sm:text-sm md:text-base">
            IES MASTER PUBLICATION<br/>
              Current Account No. : 50200009774900<br/>
                Bank Name:- HDFC Bank<br/>
                  Branch Name :- Katwaria Sarai<br/>
                    RTGS/NEFT IFSC Code : HDFC0002055
                  </h4>
                </div>

                <div className='flex justify-end my-8'>
                  <button className='text-sm py-1 px-2 text-white rounded bg-custom337AB7 hover:bg-custom286090'>
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
            )
}

            export default FeeStructureIg