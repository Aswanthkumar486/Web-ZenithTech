import React from "react";

export default function About({ data }) {
  return (
    <div className="p-4 bg-gray-50" id="about">
      {/* About Section */}
      <section className="grid lg:grid-cols-2 grid-cols-1 gap-8 p-6 max-w-7xl mx-auto">
        {/* Image Section */}
        <div>
          <img
            src={data.image}
            alt={data.mission}
            className="w-full h-80 lg:h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6 text-center lg:text-left">
            
            {data.title}

            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 lg:ms-12  bg-blue-500"></span>
          </h1>
          <p className="text-lg font-medium text-gray-700 leading-relaxed mb-6">
            {data.story}
          
          </p>

          {/* Mission */}
          <div className="border border-gray-300 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold py-5 px-4 rounded-xl shadow-lg text-center mb-6">
            <span className="text-2xl">{data.mission}</span>
          </div>

          {/* Values */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h2>
          <ul className="grid sm:grid-cols-2 grid-cols-1 gap-4">
            {data.values.map((ele, i) => (
              <li
                key={i}
                className="p-4 border border-gray-300 rounded-xl text-center text-lg bg-white shadow-md hover:shadow-xl transition"
              >
                {ele}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Team Section */}
      <section className="p-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-10 text-gray-900">
          Meet Our Team
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.team.map((ele, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center border border-gray-300 p-6 rounded-xl bg-white shadow-lg hover:shadow-2xl transition"
            >
              {/* Profile Image */}
              <img
                src={ele.image}
                alt={ele.name}
                className="h-24 w-24 rounded-full object-cover border-2 border-blue-600 mb-4"
              />

              {/* Details Section */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{ele.name}</h3>
              <span className="text-sm font-medium text-white bg-blue-600 px-3 py-1 rounded-full mb-3">
                {ele.role}
              </span>
              <p className="text-gray-700 text-sm leading-relaxed">{ele.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}