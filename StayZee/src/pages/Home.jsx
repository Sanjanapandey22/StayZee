import Hero from "../Components/Hero";
import roomsData from "./rooms";
import HotelCard from "../Components/HotelCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ExclusiveOffers from "../Components/ExclusiveOffers";
import About from "../Components/About";
import Reviews from "../Components/Reviews";
import { useNavigate } from "react-router-dom";
import JoinNowSection from "../Components/JoinNowSection";

export default function Home() {
  // Separate hotel and villa data
  const hotelRooms = roomsData.filter((room) => room.category === "hotel");
  const villaRooms = roomsData.filter((room) => room.category === "villa");

  const navigate = useNavigate();

  return (
    <div id="home" className="w-full overflow-x-hidden ">
      <Hero />

    
      <div className="">
      <div className="flex flex-col  pt-10  pb-10 justify-center items-center px-4 sm:px-8 md:px-16 lg:px-24">
        
        <h2 className="text-3xl font-semibold text-gray-900 text-center mt-10">
          Pick What You Love
        </h2>
        <p className=" text-gray-600 text-center max-w-4xl mt-4">
          Choose from thousands of handpicked stays — luxury hotels, cozy villas, 
          beachside resorts, private cottages, and more. Whatever your vibe, 
          we’ve got the perfect place waiting for you.
        </p>

  
        <div className="w-full mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 ml-6 text-left">
            Luxurious Hotels
          </h2>
          <HotelCard rooms={hotelRooms} />
       
        </div>
         <div className="flex text-xl mt-10 text-center items-center gap-4">
           <p>Explore More</p> 
           <FontAwesomeIcon onClick={() => navigate('/rooms')} icon={faArrowRight} 
            className="text-xl py-2.5 px-2 border-2 text-gray-400 rounded-full
            transition-transform duration-300 hover:translate-x-1 "/></div>

      
        <div className="w-full mt-5">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 ml-6 text-left">
            Villas & Airbnb Stays
          </h2>
          <HotelCard rooms={villaRooms} />
        </div>
       <div className="flex text-xl mt-10 text-center items-center gap-4 cursor-pointer">
  <p>Explore More</p>
  <FontAwesomeIcon
    icon={faArrowRight}
    className="text-xl py-2.5 px-2 border-2 text-gray-400 rounded-full 
               transition-transform duration-300 
               hover:translate-x-1 "
  />
</div>

      </div>
      <div className="mt-10 ">
      <ExclusiveOffers/>
      </div>
    
    <div>
      <About/>
    </div>
      
      
        <Reviews/>
      
     <JoinNowSection/>

      
    </div>
    </div>
  );
}
