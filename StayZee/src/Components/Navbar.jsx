import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navLinks = [
    { name: "Explore", path: "/" },
    { name: "Stays", path: "/rooms" },
    { name: "Offers", path: "" },
    { name: "Become a Host", path: "/" },
  ];

  const navigate = useNavigate;

  const ref = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Get current route
  const location = useLocation();
  const isHome = location.pathname === "/";

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
      className={`font-sans fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-[9999]
        ${
          isHome
            ? isScrolled
              ? "bg-white/50 shadow-md text-gray-800 backdrop-blur-lg py-4"
              : "bg-transparent text-white py-5"
            : "bg-white shadow-md text-gray-800 py-4"
        }`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <img src="/Logo.png" alt="logo" width={50} height={30} />
        <h2
          className={`text-3xl font-bold ${
            isScrolled || !isHome ? "text-rose-800" : "text-rose-800"
          }`}
        >
          S
          <span
            className={`${
              isScrolled || !isHome ? "text-gray-800" : "text-white"
            } text-3xl`}
          >
            tayZee
          </span>
        </h2>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-10">
        {navLinks.map((link, i) => (
          <NavLink
            key={i}
            to={link.path}
            className={`hover:underline transition-transform ${
              isScrolled || !isHome ? "text-gray-800" : "text-white"
            }`}
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      {/* Right Side */}
      <div className="hidden md:flex items-center gap-6">
        <h2 className={`${isScrolled || !isHome ? "text-gray-800" : "text-white"}`}>
          Your Bookings
        </h2>
        <div
          className={`flex space-x-4 text-2xl ${
            isScrolled || !isHome ? "text-rose-800" : "text-white"
          }`}
        >
          <FontAwesomeIcon icon={faHeart} className="text-rose-800" />
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>

      {/* Mobile Menu Icon */}
      <div className="flex md:hidden items-center gap-3">
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => setIsMenuOpen(true)}
          className={`h-6 w-6 cursor-pointer ${
            isScrolled || !isHome ? "text-gray-800" : "text-white"
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
          <FontAwesomeIcon icon={faTimes} className="h-6 w-6 text-gray-800" />
        </button>

        {navLinks.map((link, i) => (
          <NavLink
            key={i}
            to={link.path}
            className={({ isActive }) =>
              `hover: transition-colors ${
                isActive
                  ? "text-rose-500 font-semibold"
                  : "text-gray-800"
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
