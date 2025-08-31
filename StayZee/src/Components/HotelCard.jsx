import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons"; // empty heart
import { faHeart as faSolidHeart, faLocationDot } from "@fortawesome/free-solid-svg-icons"; // filled heart

export default function HotelCard({ rooms }) {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((item) => item !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  return (
  
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 px-4">
      {rooms.map((room) => (
        <div
          key={room.id}
          className="bg-white shadow-lg rounded-4xl overflow-hidden hover:scale-105 transition-transform duration-300 relative"
        >
          
          <div className="relative">
            <img
              src={room.image[0]}
              alt={room.name}
              className="w-full h-56 object-cover"
            />

            
            <button
              onClick={() => toggleWishlist(room.id)}
              className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:scale-110 transition-transform duration-200"
            >
              <FontAwesomeIcon
                icon={wishlist.includes(room.id) ? faSolidHeart : faRegularHeart}
                className={`text-xl transition-colors duration-300 ${
                  wishlist.includes(room.id)
                    ? "text-red-500"
                    : "text-gray-400"
                }`}
              />
            </button>
          </div>

          
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-900">{room.name}</h3>
            <p className="text-gray-600">
               <FontAwesomeIcon icon={faLocationDot} />
               {room.location}</p>
            <p>{room.price}</p>
            <div>
              {"⭐".repeat(Math.round(room.rating))}
              <span> ({room.reviews} reviews)</span>
            </div>
          </div>
        </div>
      ))}
   
    </div>
  );
}
