import React from 'react'
import Link from 'next/link'

const NoidaOffice = () => {
  return (
    <div className='bg-emerald-50 mt-7'>
      <div className='container'>
        <div className='px-2 pt-14'>
          <h2 className='text-xl'><b>Noida Office</b></h2>
          <div className='grid gap-4 sm:gap-0 sm:grid-cols-3 p-3'>
            <div>
              <h4 className='text-lg'>Address</h4>
              <p className='text-sm my-2'><b>IES Master</b></p>
              <p className='text-sm'>B-23A, 5th Floor, Gaurav Deep Heights<br />Near Fortis Hospital,<br />Noida-201305</p>
            </div>
            <div>
              <h4 className='text-lg'>Contact No.</h4>
              <p className='my-2 text-sm'>0120 415 1100</p>
            </div>
            <div>
              <h4 className='text-lg'>Email</h4>
              <p className='mt-2 text-sm text-blue-500 hover:underline'><Link href="mailto:info.noida@iesmaster.org">info.noida@iesmaster.org</Link></p>
              <p className='text-sm'>ies_master@yahoo.co.in</p>
            </div>
          </div>
          <hr className='my-2 mx-3 mb-4' />
          <div className='px-3 pb-16'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14007.916064360365!2d77.377174!3d28.630391!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce55636ee4ae9%3A0x9769aeaceed6afbd!2sIES%20MASTER%20NOIDA%20CENTER!5e0!3m2!1sen!2sus!4v1729161606183!5m2!1sen!2sus" width="600" height="450" className='w-full' style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoidaOffice