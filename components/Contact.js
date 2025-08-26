import React from "react";
import { Mail, Phone, MapPin, Clock, Linkedin, Facebook, Twitter, Instagram, Send } from "lucide-react";

export default function Contact({ data }) {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="contact">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">Contact Us</h2>
          <p className="text-lg text-gray-600 mt-3">
            Reach out for IT manpower solutions, outsourcing, and consulting services.
          </p>
        </div>

        {/* Contact Info + Form Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info Card */}
          <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Get in Touch</h3>
            <div className="space-y-5 text-gray-700">
              <p className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-600" />
                <a href={`mailto:${data.email}`} className="text-blue-600 hover:underline">
                  {data.email}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-600" />
                <span>{data.phone.join(" / ")}</span>
              </p>
              {data.address && (
                <p className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <a href={data.mapLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {data.address}
                  </a>
                </p>
              )}
              {data.workingHours && (
                <p className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span>{data.workingHours}</span>
                </p>
              )}
            </div>

            {/* Social Links */}
            {data.socials && (
              <div className="flex gap-4 mt-6">
                {data.socials.linkedin && (
                  <a href={data.socials.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-6 w-6 text-blue-700 hover:scale-110 transition" />
                  </a>
                )}
                {data.socials.facebook && (
                  <a href={data.socials.facebook} target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-6 w-6 text-blue-600 hover:scale-110 transition" />
                  </a>
                )}
                {data.socials.twitter && (
                  <a href={data.socials.twitter} target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-6 w-6 text-sky-500 hover:scale-110 transition" />
                  </a>
                )}
                {data.socials.instagram && (
                  <a href={data.socials.instagram} target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-6 w-6 text-pink-500 hover:scale-110 transition" />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Send a Message</h3>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  rows="4"
                  placeholder="Write your message here..."
                  className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-all"
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
