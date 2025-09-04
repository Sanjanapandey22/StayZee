import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Login from "../pages/Login";

export default function Navbar() {
 const navLinks = [
    { name: "Explore", path: "/" },
    { name: "Stays", path: "/rooms" },
    { name: "Offers", path: "/offers" },
    { name: "Become a Host", path: "/host" },
  ];
  const navigate = useNavigate();

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

  const [showLogin, setShowLogin] = useState(false);


  return (
    <nav
      ref={ref}
      className={`font-sans fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-[9999]
        ${
          isHome
            ? isScrolled
              ? "bg-white/50 shadow-md text-gray-800 backdrop-blur-lg py-4"
              : "bg-transparent text-white py-4"
            : "bg-transparent backdrop-blur-lg shadow-md text-gray-800 py-4"
        }`}
    >
      {/* Logo */}
       
      <div className="flex items-center cursor-pointer " onClick={() => navigate("/")}>
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
              //isScrolled || !isFooter ? "text-white" : "text-gray-800"
            } text-3xl`}
          >
            tayZee
          </span>
        </h2>
      </div>

      {/* Desktop Links */}
      <div className="hidden  lg:block ">
      <div className =" flex flex-row gap-12  ">
      {navLinks.map((link, i) => (
          <NavLink
            key={i}
            to={link.path}
            className={({ isActive }) =>
              ` hover:underline text-md font-normal transition-colors duration-300 ${
                isActive
                  ? "text-rose-800 font-semibold"
                  : ""
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </NavLink>
        ))}
        </div>
       </div>
      {/* Right Side */}
      <div className="hidden md:flex items-center gap-6">
       <Link to={'/profile'}> <h2 className={`${isScrolled || !isHome ? "text-gray-800" : "text-white"}`}>
          Your Bookings
        </h2></Link>  
        <div
          className={`flex space-x-4 text-2xl ${
            isScrolled || !isHome ? "text-rose-800" : "text-white"
          }`}
        >
      <Link to='/wishlist'> <FontAwesomeIcon icon={faHeart} className="text-rose-800" /></Link> 
          <FontAwesomeIcon icon={faUser}
            onClick={() => setShowLogin(true)}
            className="cursor-pointer" />
        </div>
      </div>

      {/* Mobile Menu Icon */}
      <div className="flex md:hidden items-center gap-3">
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => setIsMenuOpen(true)}
          className={`h-6 w-6 cursor-pointer ${
            isScrolled || !isHome ? "text-gray-800" : "text-white"
           // isScrolled || !isFooter ? "text-white" : "text-gray-800"
          }`}
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen  bg-white flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <FontAwesomeIcon icon={faTimes} className="h-6 w-6 text-gray-800 "/>
        </button>
      
        {navLinks.map((link, i) => (
          <NavLink
            key={i}
            to={link.path}
            className={({ isActive }) =>
              ` transition-colors duration-300 ${
                isActive
                  ? "text-rose-800 font-semibold"
                  : "text-gray-800"
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </NavLink>
        ))}

        <h2>Your Bookings</h2>
        <div className="flex space-x-4 text-2xl text-red-800">
        <Link to='/wishlist'><FontAwesomeIcon icon={faHeart} /></Link>  
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>
{showLogin && (
  <div className="fixed inset-0 bg-black/70 flex justify-center h-screen items-center z-[100] px-4">
    <div className="relative shadow-lg bg-white rounded-2xl p-4 pt-2 pb-2 w-full max-w-[350px] flex flex-col items-center">
      
      
      <button
        onClick={() => setShowLogin(false)}
        className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl"
      >
        ✕
      </button>

      
      <div className="flex justify-center items-center bg-rose-800 w-16 h-16 rounded-full shadow-md -mt-10">
        <FontAwesomeIcon icon={faUser} className="text-white text-2xl" />
      </div>

      
      <div className="mt-6 w-full">
        <Login />
      </div>
    </div>
  </div>
)}
</nav>
  )}