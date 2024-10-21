import React from 'react';

const HeadOffice = () => {
    return (
        <div>
            <div>
                <img className='w-full' src="/images/Genius.jpg" alt="Genius" />
            </div>
            <div className='container'>
                <h1 className='text-[28px] text-[#1DB24B] pt-4 font-semibold'>Contact us</h1>
                <div className='mt-16 p-3'>
                    <h2 className='text-xl'><b>Head Office</b></h2>
                    <div className='grid gap-4 sm:gap-0 sm:grid-cols-3 p-3'>
                        <div>
                            <h4 className='text-lg'>Address</h4>
                            <p className='text-sm my-2'><b>IES Master</b></p>
                            <p className='text-sm'>F - 126, Katwaria Sarai,<br />110016<br />New Delhi, India</p>
                        </div>
                        <div>
                            <h4 className='text-lg'>Contact No.</h4>
                            <p className='my-2 text-sm'>+91 – 9711853908</p>
                            <p className='text-sm'>+91 – 8010009955</p>
                            <p className='mt-2 text-sm'>+91 9711853908</p>
                        </div>
                        <div>
                            <h4 className='text-lg'>Email</h4>
                            <p className='mt-2 text-sm'>info@iesmaster.org</p>
                            <p className='text-sm'>ies_master@yahoo.co.in</p>
                        </div>
                    </div>
                    <hr className='my-2 mx-3 mb-4' />
                    <div className='px-3'>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.9687541058456!2d77.1827146755393!3d28.540658875715007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1df0e8e0c8d7%3A0x70b74ea971002bf!2sIES%20Master!5e0!3m2!1sen!2sus!4v1729155013152!5m2!1sen!2sus"
                    width="600"
                    height="450"
                    className='w-full'
                    //   className='w-full md:h-[450px] h-full'
                  
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeadOffice;