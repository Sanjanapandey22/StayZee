import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faLocationDot,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
     <div className="shadow-sm shadow-gray-300 pt-20 pb-20"> 
      <h3 className="text-3xl font-semibold md:text-4xl  text-gray-800 mb-4 text-center ">
          But Why Choose Us??
        </h3>
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-16 lg:px-24 mt-16">
      {/* Left Side Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/FeaturesImg.jpg"
          alt="Couple chilling"
          className="w-full h-[380px] object-cover rounded-4xl shadow-lg"
        />
      </div>

    
      
      

        
        <div className="w-full md:w-1/2 flex flex-col gap-6">
        <div className="flex items-start gap-4 bg-white p-5 rounded-2xl  hover:shadow-md transition duration-300 cursor-pointer">
          <div className="border-2 border-rose-800 p-4 rounded-4xl">
            <FontAwesomeIcon
              icon={faBed}
              className="text-rose-800 text-2xl"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Luxury & Comfort
            </h3>
            <p className="text-gray-600 text-sm">
              Handpicked stays designed for the ultimate relaxation and comfort.
            </p>
          </div>
        </div>

    
        <div className="flex items-start gap-4 bg-white p-5 rounded-2xl  hover:shadow-md transition duration-300 cursor-pointer">
          <div className="border-2 border-rose-800 p-4 rounded-4xl">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-rose-800 text-2xl"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Scenic Locations
            </h3>
            <p className="text-gray-600 text-sm">
              Find stays with breathtaking views and unmatched experiences.
            </p>
          </div>
        </div>

        
        <div className="flex items-start gap-4 bg-white p-5 rounded-2xl hover:shadow-md transition duration-300 cursor-pointer">
          <div className="border-2 border-rose-800 p-4 rounded-4xl">
            <FontAwesomeIcon
              icon={faCalendarCheck}
              className="text-rose-800 text-2xl"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Easy Booking & Cancellation
            </h3>
            <p className="text-gray-600 text-sm">
              Hassle-free reservations and flexible cancellations for your plans.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
