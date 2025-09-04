import React from "react";
import roomsData from "./rooms";

export default function Profile() {
  // Dummy booking data mapped to rooms
  const bookings = [
    {
      roomId: 1,
      date: "10 Sep 2025",
      time: "2:00 PM",
      paymentStatus: "Paid",
      paymentAmount: "₹18,000",
    },
    {
      roomId: 2,
      date: "5 Oct 2025",
      time: "11:30 AM",
      paymentStatus: "Pending",
      paymentAmount: "₹14,500",
    },
    {
      roomId: 5,
      date: "20 Dec 2025",
      time: "4:30 PM",
      paymentStatus: "Paid",
      paymentAmount: "₹25,000",
    },
  ];

  
  const bookedRooms = bookings.map((booking) => {
    const room = roomsData.find((r) => r.id === booking.roomId);
    return { ...room, ...booking };
  });
 
  return (
      <div className= "pt-20 pb-20 px-6 md:px-20 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mt-20 mb-8 ml-12 text-left">
        <h2 className="text-4xl font-semibold text-gray-800">My Bookings</h2>
        <p className="text-gray-600 mt-3 max-w-2xl text-lg">
          Easily manage your past, current, and upcoming hotel reservations in one
          place. Plan your trips seamlessly with just a few clicks.
        </p>
      </div>

      {/* Table Header */}
      <div className="flex justify-between items-center text-gray-800 px-10 md:px-10 py-4 text-xl sm:text-md font-semibold">
        <p className="flex-1 ml-5">Hotel</p>
        <p className="w-48 text-center mr-8">Date & Timing</p>
        <p className="w-32 text-center mr-5">Payment</p>
      </div>

      <div className="border border-stone-300 mx-4 md:mx-10 mb-6"></div>

      {/* Bookings Section */}
      {bookedRooms.length === 0 ? (
        <p className="text-gray-500 text-lg">You haven’t booked any rooms yet.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {bookedRooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 mx-4 md:mx-10 p-4 flex flex-col md:flex-row items-start md:items-center gap-6"
            >
              {/* Hotel Info */}
              <div className="flex items-start gap-4 flex-1">
                <img
                  src={room.image[0]}
                  alt={room.name}
                  className="h-24 w-32 object-cover rounded-xl"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {room.name}
                  </h3>
                  <p className="text-gray-600 text-sm flex items-center gap-1">
                    📍 {room.location}
                  </p>
                  <p className="text-gray-500 text-sm">Hosted by {room.hostedBy}</p>
                  <p className="text-lg font-semibold text-rose-700 mt-1">
                    {room.price}
                  </p>
                </div>
              </div>

              {/* Date & Time */}
              <div className="w-48 text-center">
                <p className="text-gray-700 font-medium">{room.date}</p>
                <p className="text-gray-500 text-sm">{room.time}</p>
              </div>

              {/* Payment */}
              <div className="w-32 text-center">
                <p
                  className={`font-semibold ${
                    room.paymentStatus === "Paid"
                      ? "text-green-600"
                      : "text-yellow-600"
                  }`}
                >
                  {room.paymentStatus}
                </p>
                <p className="text-gray-600 text-sm">{room.paymentAmount}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
