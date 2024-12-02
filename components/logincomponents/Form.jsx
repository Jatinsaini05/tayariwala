import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Link from 'next/link';

const Form = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <div className='container py-[70px]'>
      <div className='md:flex'>
        <div className='mb-[60px] md:w-1/2 w-full md:mr-[20px] md:ml-[3.4px] border rounded-md p-[40px] shadow'>
          <h3 className='text-[28px] font-semibold mb-[20px]'>Login</h3>
          <form>
            <ul className='text-[13px] text-[#212529]'>
              <li className='flex flex-col mb-3'>
                <label className="mb-[5px]" htmlFor="username">
                  Username <span>*</span>
                </label>
                <input
                  id="username"
                  className='md:p-[8px] p-[6px] md:text-[18px] text-base border border-[#bbb] rounded-md focus:outline-none focus:ring-2 focus:ring-[#666666]'
                  placeholder='Username'
                />
              </li>
              <li className="flex flex-col">
                <label className="mb-[5px]" htmlFor="password">
                  Password <span>*</span>
                </label>
                <div className='relative'>
                  <input
                    id="password"
                    type={isPasswordVisible ? 'text' : 'password'}
                    className="md:p-[8px] p-[6px] md:text-[18px] text-base border border-[#bbb] rounded-md focus:outline-none focus:ring-2 focus:ring-[#666666] w-full pr-10"
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute top-1/2 right-2 -translate-y-1/2 text-[#666666] focus:outline-none"
                  >
                    {isPasswordVisible ? <FaEyeSlash className='text-black text-[18px]' /> : <FaEye className='text-black text-[18px]' />}
                  </button>
                </div>
              </li>
            </ul>
            <p className='my-5 text-[#606060]'>
              <label htmlFor='remember' className='mb-[8px]'>
                <input type='checkbox' id='remember'>
                </input>
                &nbsp;Remember me
              </label>
            </p>
            <p className='my-5 text-[#606060]'>
              <button type='submit' className='text-white bg-customFC6200 px-[25px] py-[10px] text-[13px]'><b>Login</b>
              </button>
            </p>
            <p><Link href="#" className='text-[#666666]'>Lost your password?</Link></p>
          </form>
        </div>


        <div className='mb-[60px] md:w-1/2 w-full md:mr-[20px] md:ml-[3.4px] border rounded-md p-[40px] shadow'>
          <h3 className='text-[28px] font-semibold mb-[20px]'>Register</h3>
          <ul className='text-[13px] text-[#212529]'>
            <li className='md:flex w-full xl:gap-16 gap-3 justify-between'>
              <div className='mb-3 flex w-full flex-col'><label className="mb-[5px]" htmlFor="firstname">
                First Name <span>*</span>
              </label>
                <input
                  id="firstname"
                  className='md:p-[8px] w-full p-[6px] md:text-[18px] text-base border border-[#bbb] rounded-md focus:outline-none focus:ring-2 focus:ring-[#666666]'
                  placeholder='First Name'
                /></div>
              <div className='mb-3 flex w-full flex-col'>
                <label className="mb-[5px]" htmlFor="lastname">
                  Last Name <span>*</span>
                </label>
                <input
                  id="lastname"
                  className='md:p-[8px] w-full p-[6px] md:text-[18px] text-base border border-[#bbb] rounded-md focus:outline-none focus:ring-2 focus:ring-[#666666]'
                  placeholder='Last Name'
                />
              </div>
            </li>
            <li className='md:flex w-full xl:gap-16 gap-3 justify-between'>
              <div className='mb-3 flex w-full flex-col'><label className="mb-[5px]" htmlFor="email">
                Email address <span>*</span>
              </label>
                <input
                  id="email"
                  className='md:p-[8px] w-full p-[6px] md:text-[18px] text-base border border-[#bbb] rounded-md focus:outline-none focus:ring-2 focus:ring-[#666666]'
                  placeholder='Email'
                /></div>
              <div className='mb-3 flex w-full flex-col'>
                <label className="mb-[5px]" htmlFor="mobile">
                  Mobile <span>*</span>
                </label>
                <input
                  id="mobile"
                  type='number'
                  className='md:p-[8px] w-full p-[6px] md:text-[18px] text-base border border-[#bbb] rounded-md focus:outline-none focus:ring-2 focus:ring-[#666666]'
                  placeholder='Mobile'
                />
              </div>
            </li>
            <li className='md:flex w-full xl:gap-16 gap-3 justify-between'>
              <div className='mb-3 flex w-full flex-col'><label className="mb-[5px]" htmlFor="regpassword">
                Password <span>*</span>
              </label>
                <input
                  type='password'
                  id="regpassword"
                  className='md:p-[8px] w-full p-[6px] md:text-[18px] text-base border border-[#bbb] rounded-md focus:outline-none focus:ring-2 focus:ring-[#666666]'
                  placeholder='Password'
                /></div>
              <div className='mb-3 flex w-full flex-col'>
                <label className="mb-[5px]" htmlFor="conpassword">
                  Confirm Password <span>*</span>
                </label>
                <input
                  id="conpassword"
                  type="password"
                  className='md:p-[8px] w-full p-[6px] md:text-[18px] text-base border border-[#bbb] rounded-md focus:outline-none focus:ring-2 focus:ring-[#666666]'
                  placeholder='Repeat Password'
                />
              </div>
            </li>
            <li className='md:flex w-full xl:gap-16 gap-3 justify-between'>
              <div className='mb-3 flex w-full flex-col'><label className="mb-[5px]" htmlFor="course">
                Course <span>*</span>
              </label>
                <select
                  id="course"
                  className="md:p-[8px] w-full p-[6px] text-[14px] border border-[#bbb] rounded-md focus:outline-none focus:ring-2 focus:ring-[#666666]"
                >
                  <option value="" disabled selected>
                    Select Course
                  </option>
                  <option value="course1">Course 1</option>
                  <option value="course2">Course 2</option>
                  <option value="course3">Course 3</option>
                </select>
              </div>
              <div className='mb-3 flex w-full flex-col'>
                <label className="mb-[5px]" htmlFor="stream">
                  Stream <span>*</span>
                </label>
                <select
                  id="stream"
                  className="md:p-[8px] w-full p-[6px] text-[14px] border border-[#bbb] rounded-md focus:outline-none focus:ring-2 focus:ring-[#666666]"
                >
                  <option value="" disabled selected>
                    Select Stream
                  </option>
                  <option value="course1">Course 1</option>
                  <option value="course2">Course 2</option>
                  <option value="course3">Course 3</option>
                </select>

              </div>
              
            </li>
            <p className='my-5 text-[#606060]'>
              <button type='submit' className='text-white w-full bg-customFC6200 px-[25px] py-[10px] text-[16px] rounded'><b>Register</b>
              </button>
            </p>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Form
