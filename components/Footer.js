import React from "react";
import { ChevronRight, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer({ data }) {
  const { sections, contact, socials, copyright } = data;

  // Social Icon Mapper
  const socialIcons = {
    facebook: <Facebook className="w-5 h-5" />,
    twitter: <Twitter className="w-5 h-5" />,
    linkedin: <Linkedin className="w-5 h-5" />,
    instagram: <Instagram className="w-5 h-5" />,
  };

  return (
    <footer className="bg-gray-900 text-gray-200 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Navigation Sections */}
        {sections.map((section, i) => (
          <div key={i}>
            <h4 className="font-semibold text-lg mb-4">{section.title}</h4>
            <ul className="space-y-2">
              {section.links.map((link, j) => (
                <li key={j}>
                  <a
                    href={link.url}
                    className="flex items-center gap-2 hover:text-blue-400 transition"
                  >
                    <ChevronRight className="w-4 h-4" />
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact Section */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Contact</h4>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-400" />
              <a href={`mailto:${contact.email}`} className="hover:text-blue-400">
                {contact.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-400" />
              {contact.phone.join(" / ")}
            </li>
            {contact.address && (
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                {contact.address}
              </li>
            )}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
          <ul className="flex gap-4">
            {socials.map((social, k) => (
              <li key={k}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="hover:text-blue-400 transition flex items-center gap-2"
                >
                  {socialIcons[social.label.toLowerCase()] || null}
                  <span className="hidden sm:inline">{social.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-700 pt-6">
        {copyright}
      </div>
    </footer>
  );
}
