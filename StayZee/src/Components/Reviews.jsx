import React from "react";

export default function Reviews() {
  const testimonials = [
    {
      name: "Aarav Sharma",
      role: "Traveler",
      image:
        "/ReviewImg2.jpg",
      feedback:
        "Absolutely loved our stay! The cozy rooms, stunning views, and peaceful vibe made this the perfect weekend escape.",
      rating: 5,
    },
    {
      name: "Meera Kapoor",
      role: "Content Creator",
      image:
        "/ReviewImg4.jpg",
      feedback:
        "The entire experience was magical — from the warm hospitality to waking up to serene mountain views every morning.",
      rating: 5,
    },
    {
      name: "Kabir Malhotra",
      role: "Photographer",
      image:
        "/ReviewImg3.jpg",
      feedback:
        "The place is a hidden gem! Perfectly blends comfort and nature. I captured some of my best sunrise shots here.",
      rating: 4,
    },
  ]

  return (
    <div className=" bg-gradient-to-r from-gray-400/70 via-blue-200/40 pb-20 pt-5 shadow-md shadow-gray-300">
    
        <h3 className="text-center text-gray-800 pt-10 text-3xl  font-semibold" >What Our Guests Say</h3>
        <p className="text-gray-600 text-center mt-3 mb-4">"Real stories — from travelers who found their perfect escape."</p>

    <div className="flex flex-wrap items-stretch justify-center gap-8 pt-16 pb-1 ">
           
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className=" w-80  text-sm border border-gray-200 rounded-xl bg-white shadow-gray-500 shadow-sm hover:transition-all duration-300 relative"
        >
          <div className="flex flex-col items-center px-5 py-8 relative">
            {/* Profile Image */}
            <img
              className="h-24 w-24 absolute -top-12 rounded-full  shadow-md object-cover"
              src={testimonial.image}
              alt={testimonial.name}
            />
            {/* Name & Role */}
            <div className="pt-14 text-center">
              <h1 className="text-lg font-semibold text-gray-800">
                {testimonial.name}
              </h1>
              <p className="text-gray-500 text-sm">{testimonial.role}</p>
            </div>
          </div>

          {/* Feedback */}
          <p className="text-gray-600 px-6 text-center leading-relaxed">
            “{testimonial.feedback}”
          </p>

          {/* Rating */}
          <div className="flex justify-center pt-4 pb-6">
            <div className="flex gap-1 text-yellow-400">
              <p>⭐⭐⭐⭐⭐</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

