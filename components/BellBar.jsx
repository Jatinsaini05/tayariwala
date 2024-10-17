import React from 'react'
import { FaBell } from "react-icons/fa";

const BellBar = () => {
  return (
    <div>
        <div className="hidden md:block fixed z-20 bottom-0 w-full border-t-2 bg-gray-200 border-green-600">
          <div className="container m-auto flex items-center">
            <FaBell className="text-white text-4xl p-2 bg-green-600" />
            <ul>
              <li className="text-green-600 text-base p-2 pl-3 hover:underline ">
                <a href="#">Live Online Course for SES 2025</a>
              </li>
            </ul>
          </div>
        </div>
      
    </div>
  )
}

export default BellBar
