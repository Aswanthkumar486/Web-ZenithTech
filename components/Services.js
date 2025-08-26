import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
export default function Services({ data }) {


    useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // trigger only once
      easing: "ease-in-out",
    });
  }, []);
  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-blue-50" id="services" data-aos="fade-right">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
            We provide comprehensive solutions tailored to your business needs, 
            delivering excellence across all our service offerings.
          </p>
        </div>

        {/* Specializations - Modern Card Design */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-center mb-12 relative pb-2">
            Specializations
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500"></span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.specializations.map((item, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-blue-500"
              >
                <div className="mb-6 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl group-hover:from-blue-100 group-hover:to-indigo-100 transition-colors duration-300">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-contain"
                  />
                </div>
                <p className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </p>
                <p className="mt-4 text-gray-600">
                  {item.description || "Expert solutions tailored to your needs"}
                </p>
                <div className="mt-6 w-12 h-1 bg-blue-400 group-hover:w-16 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Features - Modern Gradient Design */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-center mb-12 relative pb-2">
            Key Features
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500"></span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.features.map((feature, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                {/* Gradient accent bar */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                
                {/* Icon container with subtle gradient */}
                <div className="mt-2 mb-5 p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="h-14 w-14 object-contain"
                  />
                </div>
                
                <h4 className="text-lg font-semibold mb-2 text-gray-800">{feature.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                
                {/* Hover effect indicator */}
                <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-2 bg-gradient-to-r from-blue-400 to-indigo-500 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Industries Served - Clean Modern Design */}
        <div>
          <h3 className="text-3xl font-semibold text-center mb-12 relative pb-2">
            Industries We Serve
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500"></span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.industriesServed.map((industry, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className="mb-4 p-3 bg-gray-50 rounded-lg group-hover:bg-blue-50 transition-colors duration-300">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="h-14 w-14 object-contain"
                  />
                </div>
                <p className="text-md font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {industry.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}