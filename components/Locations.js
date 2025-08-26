import React, { useState } from "react";

export default function Locations({ data }) {
  const [activeLocation, setActiveLocation] = useState(0);

  return (
    <section className="py-16 bg-gradient-to-b fade-left from-white to-blue-50" id="locations" >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Global Locations</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We're strategically located around the world to serve our clients better
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Location Cards */}
          <div className="lg:w-1/2 grid gap-6">
            {data.map((loc, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 cursor-pointer ${
                  activeLocation === index 
                    ? "border-2 border-blue-500 transform scale-105" 
                    : "border border-gray-100 hover:shadow-xl"
                }`}
                onClick={() => setActiveLocation(index)}
              >
                <div className="flex items-start">
                  <div className={`p-3 rounded-lg mr-4 ${
                    activeLocation === index ? "bg-blue-100" : "bg-gray-100"
                  }`}>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-6 w-6 ${activeLocation === index ? "text-blue-600" : "text-gray-600"}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {loc.country}
                      {activeLocation === index && (
                        <span className="ml-2 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Active
                        </span>
                      )}
                    </h3>
                    <p className="text-gray-700 mb-3 flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {loc.address}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <p className="text-gray-600 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {loc.phone}
                      </p>
                      <p className="text-gray-600 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <a
                          href={`mailto:${loc.email}`}
                          className="text-blue-600 hover:underline"
                        >
                          {loc.email}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Map Visualization */}
          <div className="lg:w-1/2 bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Office Location</h3>
            <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center mb-6">
              <div className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-500 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-700 font-medium">{data[activeLocation].country} Office</p>
                <p className="text-gray-600 text-sm mt-1">{data[activeLocation].address}</p>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-5">
              <h4 className="font-semibold text-blue-800 mb-3">Office Hours</h4>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-sm text-gray-600">Monday - Friday</p>
                  <p className="font-medium text-gray-800">9:00 AM - 5:30 PM</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Saturday</p>
                  <p className="font-medium text-gray-800">10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>

            <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors shadow-md flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Get Directions
            </button>
          </div>
        </div>

       </div>
    </section>
  );
}