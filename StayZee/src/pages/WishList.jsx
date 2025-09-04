import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import roomsData from "./rooms";

export default function WishList() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  // Get only the rooms that are in wishlist
  const wishlistRooms = roomsData.filter((room) => wishlist.includes(room.id));

  return (
    <div className="pt-20 pb-20 px-6 md:px-20 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mt-20 mb-8 ml-12 text-left">
        <h2 className="text-4xl font-semibold text-gray-800">Wishlist</h2>
        <p className="mt-2 ml-2 text-gray-600">({wishlistRooms.length} items)</p>
      </div>

      {/* If Wishlist is Empty */}
      {wishlistRooms.length === 0 ? (
        <p className="text-gray-500 text-lg ml-12">
          You haven’t liked any stays yet.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 ml-12 mr-12">
          {wishlistRooms.map((room) => (
            <div
              key={room.id}
              className="bg-white shadow-lg rounded-4xl overflow-hidden hover:scale-105 transition-transform duration-300 relative"
            >
              {/* Room Image */}
              <div className="relative">
                <img
                  src={room.image[0]}
                  alt={room.name}
                  className="w-full h-56 object-cover"
                />
              </div>

              {/* Room Details */}
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {room.name}
                </h3>
                <p className="text-gray-600 flex items-center gap-2">
                  <FontAwesomeIcon icon={faLocationDot} className="text-rose-600" />
                  {room.location}
                </p>
                <p className="text-lg font-semibold text-rose-700">
                  {room.price}
                </p>
                <div className="text-yellow-500">
                  {"⭐".repeat(Math.round(room.rating))}
                  <span className="text-gray-600"> ({room.reviews} reviews)</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
