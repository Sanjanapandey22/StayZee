import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navLinks = [
    { name: "Explore", path: "/" },
    { name: "Categories", path: "/" },
    { name: "Offers", path: "/" },
    { name: "Become a Host", path: "/" },
  ];

  const ref = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={ref}
      className={ `font-sans  fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-[9999]
        ${isScrolled ? "bg-white/50 shadow-md text-gray-800 backdrop-blur-lg py-3" : "bg-transparent text-white py-5"}`}
    >
      {/* Logo */}
      <div className="flex gap-2 items-center ">
        {/*<img src="/Logo.png" alt="logo" width={40} height={20}/>*/}
      <h2
        className={`text-3xl font-bold ${
          isScrolled ? "text-rose-500" : "text-rose-500"
        }`}
      >
        
        Stay
        <span
          className={`${
            isScrolled ? "text-gray-800" : "text-white"
          } text-3xl`}
        >
          Zee
        </span>
      </h2>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-10">
        {navLinks.map((link, i) => (
          <NavLink
            key={i}
            to={link.path}
            className={`hover:underline transition-transform ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      {/* Right Section */}
      <div className="hidden md:flex items-center gap-6">
        <h2
          className={` ${
            isScrolled ? "text-gray-800" : "text-white"
          }`}
        >
          Your Bookings
        </h2>
        <div
          className={`flex space-x-4 text-2xl ${
            isScrolled ? "text-gray-800" : "text-white"
          }`}
        >
          <FontAwesomeIcon icon={faHeart} className="text-rose-600" />
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex md:hidden items-center gap-3">
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => setIsMenuOpen(true)}
          className={`h-6 w-6 cursor-pointer ${
            isScrolled ? "text-gray-800" : "text-white"
          }`}
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <FontAwesomeIcon
            icon={faTimes}
            className="h-6 w-6 text-gray-800"
          />
        </button>

        {navLinks.map((link, i) => (
          <NavLink
            key={i}
            to={link.path}
            className={( {isActive }) => 
          `hover: transition-colors ${
      isActive ? "text-rose-500 font-semibold" : isScrolled ? "text-gray-800" : "text-white"
    }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </NavLink>
        ))}

        <h2>Your Bookings</h2>
        <div className="flex space-x-4 text-2xl text-red-500">
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>
    </nav>
  );
}
