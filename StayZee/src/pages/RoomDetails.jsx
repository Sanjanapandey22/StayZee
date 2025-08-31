
import { useParams, useNavigate } from "react-router-dom";
import roomsData from "./rooms";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as faRegularHeart,
  faStar,
  faLocationDot,
  faArrowLeft,
  faShareNodes,
  faCalendar,
  faHome,
  faCheckCircle,
  faHeart
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-regular-svg-icons";

export default function RoomDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const room = roomsData.find((room) => room.id === parseInt(id));

  const [wishlist, setWishlist] = useState([]);
  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  if (!room) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <p className="text-2xl font-semibold text-gray-700">Room not found 😔</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-6 py-3 bg-rose-800 hover:bg-black text-white rounded-full transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="px-5 md:px-16 lg:px-24 xl:px-32 py-10 bg-gray-50 min-h-screen">
      
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-700 hover:text-rose-800 mb-6"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        Back
      </button>

  
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          {room.name}
        </h1>
        <div className="flex items-center gap-6">
        
          <button onClick={() => toggleWishlist(room.id)} className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={wishlist.includes(room.id) ? faSolidHeart : faRegularHeart}
              className={`text-xl transition-colors duration-300 ${
                wishlist.includes(room.id) ? "text-red-500" : "text-gray-400"
              }`}
            />
            Save
          </button>
          <button className="flex items-center gap-2 text-gray-600 hover:text-rose-700">
            <FontAwesomeIcon icon={faShareNodes} />
            Share
          </button>
        </div>
      </div>

      {/* Location & Rating */}
      <div className="flex items-center gap-6 mt-2">
        <p className="text-gray-600 flex items-center gap-2">
          <FontAwesomeIcon icon={faLocationDot} />
          {room.location}
        </p>
        <p className="text-yellow-500 flex items-center gap-1">
          <FontAwesomeIcon icon={faStar} />
          {room.rating} ({room.reviews} reviews)
        </p>
      </div>

      {/* Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
        <img
          src={room.image[0]}
          alt={room.name}
          className="rounded-2xl shadow-lg w-full h-80 object-cover"
        />
        <div className="grid grid-cols-2 gap-4">
          {room.image.slice(1).map((img, idx) => (
            <img
              key={idx}
              src={img}
            
              className="rounded-xl shadow-md w-full h-36 object-cover"
            />
          ))}
        </div>
      </div>

      {/* Amenities */}
      {room.amenities && room.amenities.length > 0 && (
        <div className="flex flex-wrap gap-4 mt-10">
          {room.amenities.map((amenity, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-full shadow-sm"
            >
              <FontAwesomeIcon icon={amenity.icon} className="text-rose-700 text-lg" />
              <span className="text-gray-700">{amenity.name}</span>
            </div>
          ))}
             <p className="text-2xl font-semibold text-rose-950 absolute right-33">{room.price}</p>
        </div>
       
      )}

    
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800">About this stay</h2>
        <p className="text-gray-600 mt-3 leading-relaxed">
          {room.description ||
            "Experience an unparalleled stay with world-class amenities, stunning interiors, and breathtaking views — the perfect escape for your next getaway."}
        </p>
      </div>

      
         <form className="bg-gray-100 text-gray-800 rounded-lg px-6 py-6 mt-10 gap-10 flex flex-col md:flex-row items-center lg:max-w-3xl sm:max-w-xl ">
                    
                    <div>
                      <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faCalendar} />
                        <label htmlFor="checkIn">Check in</label>
                      </div>
                      <input
                        id="checkIn"
                        type="date"
                        className="rounded border bg-white border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                      />
                    </div>
        
                    
                    <div>
                      <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faCalendar} />
                        <label htmlFor="checkOut">Check out</label>
                      </div>
                      <input
                        id="checkOut"
                        type="date"
                        className="rounded border bg-white border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                      />
                    </div>
      
                    
                    <div className="flex md:flex-col max-md:gap-2 max-md:items-center">
                      <label htmlFor="guests">Guests</label>
                      <input
                        min={1}
                        max={4}
                        id="guests"
                        type="number"
                        className="rounded border bg-white border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none max-w-16"
                        placeholder="0"
                      />
                    </div>
        
                    
                    <button className="flex items-center justify-center gap-1 rounded-md bg-rose-800 py-3 px-4 text-white  cursor-pointer max-md:w-full max-md:py-2">
                  
                      <span>Check Availability</span>
                    </button>
                  </form>
                
      

    
      <div className="mt-8 flex justify-end">
        <button className="px-8 py-3 bg-rose-800 hover:bg-black text-white text-lg font-medium rounded-full shadow-md transition">
          Book Now
        </button>
      </div>

     
    </div>
  );
}
