import React from 'react';

export default function NotFound({ errorCode, errorType }) {
  return (
    <section className="h-screen bg-center bg-cover bg-no-repeat relative" 
      style={{
        backgroundImage: `url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')`
      }}
    >
      <div className="absolute inset-0 flex flex-col mt-[2rem]">
        <h3 className="text-[2rem] text-center text-[red]">{errorCode}</h3>
        <h3 className="text-[2rem] text-center text-[red]">{errorType}</h3>
      </div>
    </section>
  );
}