import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-rose-800">S<span className="text-white">tayZee</span></h2>
          <p className="text-gray-400 mt-3 leading-relaxed">
            Discover stays you’ll love, in places you’ll never forget.  
            Cozy rooms, breathtaking views, and warm hospitality — your perfect getaway awaits.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
            <li><a href="/rooms" className="hover:text-white transition">Rooms</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <FontAwesomeIcon icon={faLocationDot} className="text-rose-800" />
              <span>Manali, Himachal Pradesh</span>
            </li>
            <li className="flex items-center gap-3">
              <FontAwesomeIcon icon={faPhone} className="text-rose-800" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <FontAwesomeIcon icon={faEnvelope} className="text-rose-800" />
              <span>stayease@example.com</span>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-5">
            <a href="#" className="bg-gray-800 hover:bg-gray-400 hover:text-black transition p-3 rounded-full">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="#" className="bg-gray-800 hover:bg-gray-400 hover:text-black transition p-3 rounded-full">
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a href="#" className="bg-gray-800 hover:bg-gray-400 hover:text-black transition p-3 rounded-full">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Stay Updated</h3>
          <p className="text-gray-400 mb-3">
            Subscribe to our newsletter and get the latest offers & travel tips.
          </p>
          <form className="flex items-center bg-gray-800 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent px-3 py-2 text-sm outline-none placeholder-gray-400"
            />
            <button
              type="submit"
              className="bg-black hover:bg-gray-500 transition px-4 py-2 text-gray-200"
            >
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center text-sm text-gray-500 mt-10 pt-5">
        © {new Date().getFullYear()} StayEase. All rights reserved.
      </div>
    </footer>
  );
}
