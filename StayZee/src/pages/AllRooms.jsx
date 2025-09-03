import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolidHeart, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import roomsData from "./rooms";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";

export default function AllRooms() {
  const [filters, setFilters] = useState({
    type: [],
    price: 40000,
    location: [],
    rating: 0,
  });
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleCheckbox = (category, value) => {
    setFilters((prev) => {
      const updatedValues = prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value];
      return { ...prev, [category]: updatedValues };
    });
  };

  const clearFilters  = () => {  
    setFilters({
      price: 40000,
      type: [],
      location: [],
      rating: 0,
    });
  };

  const locations = [...new Set(roomsData.map((room) => room.location))];

  const badgeColors = {
    Hotel: "bg-blue-300/50 text-white",
    Villa: "bg-teal-300/50 text-white",
    Airbnb: "bg-purple-300/50 text-white",
  };

  const [showFilters, setShowFilters] = useState(false);

  
  const filteredRooms = roomsData.filter((room) => {
    if (room.price > filters.price) return false;
    if (filters.type.length > 0 && !filters.type.includes(room.type)) return false;
    if (filters.location.length > 0 && !filters.location.includes(room.location)) return false;
    if (filters.rating > 0 && room.rating < filters.rating) return false;
    return true;
  });





    const Filter = () => {
      return(
      <div className=" bg-white shadow-md rounded-2xl p-6">
          <button  className="text-xl font-semibold text-gray-900 mb-4 lg:block hidden">Filters</button>
          <span></span>
          <div className="text-xs flex justify-between mb-4">
            <button onClick={(clearFilters)} className="text-rose-800 font-semibold">
              Clear All
            </button>
          </div>

          {/* Price Filter */}
          <div className="mb-6">
            <h3 className="text-gray-700 font-medium mb-2">Price Range</h3>
            <input
              type="range"
              min="3000"
              max="40000"
              step="500"
              value={filters.price}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, price: Number(e.target.value) }))
              }
              className="w-full accent-rose-800"
            />
            <p className="text-sm text-gray-600 mt-1">
              Up to <span className="font-semibold">₹{filters.price.toLocaleString("en-IN")}</span>
            </p>
          </div>

          {/* Stay Type */}
          <div className="mb-6 sm:mb-3">
            <h3 className="text-gray-700 font-medium mb-2">Stay Type</h3>
            <div className="space-y-2 ">
              {["Hotel", "Villa", "Airbnb"].map((type) => (
                <label key={type} className="flex flex-col items-center gap-5  group-[sm:flex flex-row items-center] text-gray-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.type.includes(type)}
                    onChange={() => handleCheckbox("type", type)}
                    className="accent-rose-800 w-4 h-4  "
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          {/* Location Filter */}
          <div className="mb-6">
            <h3 className="text-gray-700 font-medium mb-2">Location</h3>
            <div className="space-y-2 max-h-40 overflow-y-auto pr-1 ">
              {locations.map((loc) => (
                <label key={loc} className="flex items-center  gap-5 text-gray-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.location.includes(loc)}
                    onChange={() => handleCheckbox("location", loc)}
                    className="accent-rose-800 w-4 h-4"
                  />
                  {loc}
                </label>
              ))}
            </div>
          </div>

          {/* Rating Filter */}
          <div>
            <h3 className="text-gray-700 font-medium mb-2">Minimum Rating</h3>
            <div className="space-y-2">
              {[5, 4, 3].map((star) => (
                <label key={star} className="flex items-center gap-2 text-gray-600 cursor-pointer">
                  <input
                    type="radio"
                    name="rating"
                    checked={filters.rating === star}
                    onChange={() =>
                      setFilters((prev) => ({ ...prev, rating: star }))
                    }
                    className="accent-rose-800 w-4 h-4"
                  />
                  {"⭐".repeat(star)} & up
                </label>
              ))}
            </div>
          </div>
        </div>
    )}

    

  return (
    <div>
      <div className="flex flex-col lg:flex-row md:gap-10 px-5 md:px-16 lg:px-24 xl:px-32 bg-gray-50 pt-2 lg:pt-24   z-10">

        
        {/* Sidebar Filters */}
        <div className="hidden lg:block md:w-1/4 sticky top-28 max-h-[calc(100vh-120px)] overflow-y-auto scrollbar-hide items-start">
    
           <Filter/>
        </div>


        {/* Filters Button for Mobile */}
<div className="lg:hidden  flex justify-between items-center bg-transparent shadow-md border  border-gray-200 rounded-lg px-5 w-80 md:w-100 m-auto py-3">
  <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
  <button
    onClick={() => setShowFilters((prev) => !prev)}  
    className="text-rose-800 font-semibold hover:underline"
  >
    {showFilters ? '✕' : 'SHOW'}
  </button>
</div>


{showFilters && (
  
  
    <div className="mt-0 m-auto mb-5 bg-white rounded-3xl shadow-lg w-[90%] sm:w-[70%] md:w-[50%] lg:hidden max-h-[90vh] flex flex-col animate-slideup">
      
    
      <div className="flex justify-between items-center p-4 border-b flex-shrink-0 sticky  bg-white z-10">
        
       
      </div>

    
      <div className="flex-1 overflow-y-auto p-4">
        <Filter />
      </div>

    
      <div className="p-4 border-t flex-shrink-0 sticky bottom-0 bg-white z-10">
        <button
          onClick={() => setShowFilters(false)}
          className="w-full bg-rose-800 text-white py-3 rounded-lg hover:bg-black transition"
        >
          Apply Filters
        </button>
      </div>
    </div>
  
)}

        {/* Rooms Section */}
        <div className="flex-1">
          {/* Heading */}
          <div className="flex flex-col items-center text-center lg:mt-2 mt-5 mb-12">
            <h1 className="text-3xl md:text-5xl font-semibold text-gray-800">
              Find Your Perfect Stay
            </h1>
            <p className="text-base md:text-lg text-gray-500 mt-4 max-w-2xl">
              Find stays that perfectly match your preferences — from serene getaways
              to vibrant city escapes, crafted for every kind of traveler.
            </p>
          </div>



          {/* Rooms Grid */}
          {filteredRooms.length === 0 ? (
            <p className="text-center text-gray-500 text-lg mt-10">
              No rooms match your filters 😔
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
              {filteredRooms.map((room) => (
                <div
                  key={room.id}
                  className="group bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative">
                    <img
                      src={room.image[0]}
                      alt={room.name}
                      className="w-full h-64 object-cover rounded-t-3xl transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Wishlist */}
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
                    {/* Badge */}
                    <span
                      className={`absolute top-4 left-4 px-4 py-1 text-sm font-medium rounded-full shadow-sm ${
                        badgeColors[room.type] || "bg-indigo-100 text-indigo-700"
                      }`}
                    >
                      {room.type}
                    </span>
                  </div>

                  {/* Room Info */}
                  <div
                    onClick={() => navigate(`/rooms/${room.id}`)}
                    className="p-6 flex flex-col gap-3"
                  >
                    <h2 className="text-xl font-semibold text-gray-900 group-hover:text-rose-600 transition">
                      {room.name}
                    </h2>
                    <p className="text-gray-500 text-sm flex items-center gap-2">
                      <FontAwesomeIcon icon={faLocationDot} />
                      {room.location}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <div>
                        {"⭐".repeat(Math.round(room.rating))}
                        <span> ({room.reviews} reviews)</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <p className="text-lg font-semibold text-gray-900">
                        {room.price}
                      </p>
                      <button className="px-5 py-2.5 bg-rose-800 hover:bg-black text-white rounded-full shadow-md transition">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}
