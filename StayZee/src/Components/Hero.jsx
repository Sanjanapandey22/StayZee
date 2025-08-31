import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  const cities = [
    "Dubai",
    "Bangalore",
    "Maldives",
    "London",
    "Manali",
    "Bali",
    "Goa",
    "Shimla",
    "Lonavla",
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden z-0">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 backdrop-grayscale-25"></div>

      
      <div className="relative z-10 mt-7">
        <Navbar />

        {/* Hero Text + Form */}
        <div className="">
        <div className="flex flex-col items-start justify-center px-6 sm:px-8 md:px-12 lg:px-20 text-white lg:max-w-[690px] mx-auto lg:ml-16  sm:mt-40 md:mt-20 lg:mt-50">
        
          <p className="bg-blue-400/50 px-4 w-fit py-2 rounded-full mb-4 lg:text-md sm:text-sm">
            The Ultimate Stay Experience
          </p>

          
          <h1 className="font-playfair lg:text-5xl md:text-4xl sm:text-3xl font-bold drop-shadow-lg lg:leading-10 sm:leading-3 lg:mb-4 sm:mb-2">
            Discover stays you’ll love, in places you’ll never forget
          </h1>

          
          <p className="text-gray-200 lg:leading-relaxed sm:leading-1 lg:text-lg sm:text-[10px]">
            Unparalleled experiences await — explore stays that make every trip unforgettable.
            Start your journey now.
          </p>

          
          <form className="bg-white text-gray-800 rounded-lg px-6 py-6 mt-5 flex flex-col md:flex-row lg:items-start md:items-center sm:items-center gap-4 lg:max-w-5xl sm:max-w-xl ">
            {/* Destination */}
            <div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCalendar} />
                <label htmlFor="destinationInput">Destination</label>
              </div>
              <input
                list="destinations"
                id="destinationInput"
                type="text"
                className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                placeholder="Type here"
                required
              />
              <datalist id="destinations">
                {cities.map((city, index) => (
                  <option value={city} key={index} />
                ))}
              </datalist>
            </div>

            {/* Check-in */}
            <div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCalendar} />
                <label htmlFor="checkIn">Check in</label>
              </div>
              <input
                id="checkIn"
                type="date"
                className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
              />
            </div>

            {/* Check-out */}
            <div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCalendar} />
                <label htmlFor="checkOut">Check out</label>
              </div>
              <input
                id="checkOut"
                type="date"
                className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
              />
            </div>

            {/* Guests */}
            <div className="flex md:flex-col max-md:gap-2 max-md:items-center">
              <label htmlFor="guests">Guests</label>
              <input
                min={1}
                max={4}
                id="guests"
                type="number"
                className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none max-w-16"
                placeholder="0"
              />
            </div>

            {/* Search Button */}
            <button className="flex items-center justify-center gap-1 rounded-md bg-rose-800 py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-2">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <span>Search</span>
            </button>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
}
