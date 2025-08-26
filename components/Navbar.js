
import React from 'react'

export default function Navbar({ data, site }) {
  return (
<nav className="w-full bg-[#0B1D51] px-6 py-3 flex items-center justify-between fixed top-0 z-50 shadow-md">
    {/* Logo Section */}
      <div className="flex items-center">
        <img 
          src={site?.image} 
          className="h-12 w-15 mr-3 object-contain rounded-sm" 
          alt={site?.name || "Logo"} 
        />
    
      </div>

      {/* Menu Section */}  
      <ul className="hidden lg:flex lg:items-center lg:space-x-6">
        {data?.menu?.map((ele, index) => (
          <li 
            key={index} 
            className="group relative text-white font-medium cursor-pointer pb-1 transition-colors duration-500 ease-in-out "
          >
          <a href={ele.link}>
            {ele.name}</a>

            {/* Underline animation */}
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      {data?.ctaButton && (
        <a
          href={data.ctaButton.link}
          className="ml-6 bg-white text-red-500 px-4 py-2 rounded-lg font-semibold transition-colors duration-500 ease-in-out hover:bg-yellow-300 hover:text-black"
        >
          {data.ctaButton.text}
        </a>
      )}
    </nav>
  )
}
