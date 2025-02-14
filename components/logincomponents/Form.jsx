import React from 'react';
import Login from './Login';
import Register from './Register';

const Form = ({CoursesData}) => {
  return (
    <div className='container py-[70px]'>
      <div className='md:flex'>
        <Login/>
        <Register CoursesData={CoursesData}/>
      </div>
    </div>
  )
}

export default Form