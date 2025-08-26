import React from "react";

export default function Industries({ data }) {
  const info = data;

  if (!info) return <p className="text-gray-500 text-center p-8">No industry data available</p>;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto border border-gray-100">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
        <h2 className="text-3xl font-bold mb-2">Industries & Business Information</h2>
        <p className="text-blue-100 opacity-90">Comprehensive overview of business activities and licensing</p>
      </div>

      <div className="p-6 grid md:grid-cols-2 gap-6">
        {/* Business Activities Card */}
        <div className="bg-blue-50 rounded-xl p-5 border border-blue-100 shadow-sm">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Business Activities</h3>
          </div>
          
          <div className="space-y-3">
            <div className="bg-white p-4 rounded-lg border border-blue-100">
              <p className="text-sm font-medium text-gray-500 mb-1">Primary Activity</p>
              <p className="text-blue-700 font-semibold">{info.businessActivities.primary}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-blue-100">
              <p className="text-sm font-medium text-gray-500 mb-1">Secondary Activity</p>
              <p className="text-blue-700 font-semibold">{info.businessActivities.secondary}</p>
            </div>
          </div>
        </div>

        {/* Licence Info Card */}
        <div className="bg-purple-50 rounded-xl p-5 border border-purple-100 shadow-sm">
          <div className="flex items-center mb-4">
            <div className="bg-purple-100 p-2 rounded-lg mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Licence Information</h3>
          </div>
          
          <div className="space-y-3">
            <div className="bg-white p-4 rounded-lg border border-purple-100">
              <p className="text-sm font-medium text-gray-500 mb-1">Type</p>
              <p className="text-purple-700 font-semibold">{info.licence.type}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-purple-100">
              <p className="text-sm font-medium text-gray-500 mb-1">Regulates</p>
              <p className="text-purple-700 font-semibold">{info.licence.regulates}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-purple-100">
              <p className="text-sm font-medium text-gray-500 mb-1">Status</p>
              <p className={`font-semibold ${
                info.licence.status === "Live" ? "text-green-600" : "text-red-600"
              }`}>
                {info.licence.status}
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-purple-100">
              <p className="text-sm font-medium text-gray-500 mb-1">Issued On</p>
              <p className="text-purple-700 font-semibold">{info.licence.issuedOn}</p>
            </div>
          </div>
        </div>

        {/* Company Info Card - Full Width */}
        <div className="md:col-span-2 bg-gray-50 rounded-xl p-5 border border-gray-100 shadow-sm">
          <div className="flex items-center mb-4">
            <div className="bg-gray-100 p-2 rounded-lg mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Company Information</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border border-gray-100">
              <p className="text-sm font-medium text-gray-500 mb-1">Incorporated On</p>
              <p className="text-gray-800 font-semibold">{info.incorporatedOn}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-100">
              <p className="text-sm font-medium text-gray-500 mb-1">Former Name</p>
              <p className="text-gray-800 font-semibold">{info.formerName || "N/A"}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-100">
              <p className="text-sm font-medium text-gray-500 mb-1">Operating Status</p>
              <p className="text-gray-800 font-semibold">{info.operatingStatus}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 text-center text-sm text-gray-500">
        Last updated: {new Date().toLocaleDateString()}
      </div>
    </div>
  );
}