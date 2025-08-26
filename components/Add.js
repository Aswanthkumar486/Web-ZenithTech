import React from 'react'

export default function Add({data}) {
  return (
    <section className="bg-blue-100 py-10 px-5 text-center">
      <h2 className="text-3xl font-bold mb-4">{data.title}</h2>
      <p className="mb-6 text-lg">{data.description}</p>
      <a 
        href={data.buttonLink} 
        className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
      >
        {data.buttonText}
      </a>
    </section>
  )
}
