import React from "react";

export default function TrackRecord({ data }) {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50" id="track-record">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Track Record</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Over <span className="text-blue-600 font-bold">{data.experienceYears}+ years</span> of excellence in IT manpower solutions
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {/* Clients Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 transform transition-transform duration-300 hover:scale-105">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Clients</h3>
            </div>
            <ul className="space-y-3">
              {data.clientTypes.map((client, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {client}
                </li>
              ))}
            </ul>
          </div>

          {/* Domains Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 transform transition-transform duration-300 hover:scale-105">
            <div className="flex items-center mb-6">
              <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Domains</h3>
            </div>
            <ul className="space-y-3">
              {data.domains.map((domain, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {domain}
                </li>
              ))}
            </ul>
          </div>

          {/* Efficiency Card */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-lg p-8 text-white transform transition-transform duration-300 hover:scale-105">
            <div className="flex items-center mb-6">
              <div className="bg-white bg-opacity-20 p-3 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold">Efficiency</h3>
            </div>
            <div className="text-center py-4">
              <p className="text-5xl font-bold mb-2">{data.jobFillingEfficiency}</p>
              <p className="text-blue-100">Job Filling Success Rate</p>
            </div>
            <div className="mt-6 bg-white bg-opacity-20 rounded-full h-2.5">
              <div 
                className="bg-white h-2.5 rounded-full" 
                style={{ width: data.jobFillingEfficiency }}
              ></div>
            </div>
          </div>
        </div>

        {/* Additional Stats */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-center text-gray-900 mb-8">By The Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600">250+</p>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600">98%</p>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600">500+</p>
              <p className="text-gray-600">IT Professionals</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600">15+</p>
              <p className="text-gray-600">Countries Served</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}