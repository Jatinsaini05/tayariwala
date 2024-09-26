import React from 'react'

export default function TopBorder() {
  return (
    <section className="pageTitle bg-[#353535]">
    <div className="container mx-auto px-16">
      <div className="titleList md:flex justify-between flex-wrap">
        <div className="titleMsg1 text-[#fff] text-lg font-medium">
          Courses
        </div>
        <div className="titleMsg2 text-[#9da58c]">
          <p>
            <a href="">Home</a> / Courses
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}
