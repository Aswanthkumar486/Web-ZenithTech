import React, { useEffect } from "react";
import { MapPin, Briefcase, Zap, CheckCircle } from "lucide-react"; // icons
import data from "@/data/data.json"; // careers data from JSON
import Aos from "aos";
import "aos/dist/aos.css";

export default function Careers({ data }) {
  const careers = data;
 useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // trigger only once
      easing: "ease-in-out",
    });
  }, []);
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50" id="careers" data-aos="fade-right">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          {careers.title}
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mt-3">
          {careers.subtitle}
        </p>
      </div>

      {/* Openings List */}
      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {careers.openings.map((job, index) => (
          <div
            key={index}
            className="group bg-white shadow-md rounded-2xl p-8 border border-gray-100 hover:shadow-2xl hover:border-indigo-200 transition-all duration-300 transform hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold text-indigo-700 group-hover:text-indigo-900">
              {job.role}
            </h3>
            <p className="text-sm text-gray-800 font-bold mt-2 flex flex-wrap items-center gap-2">
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-indigo-500" /> {job.location}</span>
              • <span className="flex items-center gap-1"><Briefcase className="w-4 h-4 text-indigo-500" /> {job.type}</span>
              • <span className="flex items-center gap-1"><Zap className="w-4 h-4 text-indigo-500" /> {job.experience}</span>
            </p>

            <p className="text-gray-700 mt-4 text-md leading-relaxed">
              {job.description}
            </p>

            {/* Requirements */}
            <div className="mt-5">
              <h4 className="text-sm font-semibold text-gray-800 mb-3">Requirements:</h4>
              <ul className="space-y-2 text-gray-700">
                {job.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-20">
        <p className="text-gray-700 mb-4 text-lg">{careers.cta.text}</p>
        <a
          href={`mailto:${careers.cta.text.split(" ").pop()}`}
          className="inline-block px-8 py-3.5 bg-indigo-600 text-white font-medium rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 focus:ring-4 focus:ring-indigo-300 focus:outline-none"
        >
          {careers.cta.button}
        </a>
      </div>
    </section>
  );
}
