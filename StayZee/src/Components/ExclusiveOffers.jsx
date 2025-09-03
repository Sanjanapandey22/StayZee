import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ExclusiveOffers() {
  const exclusiveOffers = [
    {
      _id: 1,
      title: "Summer Escape Package",
      description: "Enjoy a complimentary night and daily breakfast",
      priceOff: 25,
      expiryDate: "Aug 31",
      image: "/exclusiveOfferCardImg1.png",
    },
    {
      _id: 2,
      title: "Romantic Getaway",
      description: "Special couples package including spa treatment",
      priceOff: 20,
      expiryDate: "Sep 20",
      image: "/exclusiveOfferCardImg2.png",
    },
    {
      _id: 3,
      title: "Luxury Retreat",
      description:
        "Book 60 days in advance and save on your stay at any of our luxury properties worldwide.",
      priceOff: 30,
      expiryDate: "Sep 25",
      image: "/exclusiveOfferCardImg3.png",
    },
  ];

  return (
    <div className="w-full px-6 md:px-16 py-20 mt-10 pb-20 bg-gradient-to-b from-purple-200/60 via-blue-300/60 backdrop-blur-lg  shadow-sm">
      
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Exclusive Offers
          </h2>
          <p className="text-gray-600 mt-2 max-w-xl">
            Take advantage of our limited-time offers and special packages to enhance
            your stay and create unforgettable memories.
          </p>
        </div>

        <button className="hidden md:flex items-center gap-2 text-lg font-medium text-gray-900  ">
          View All Offers
          <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
        </button>
      </div>

  
      <div className="flex flex-wrap  gap-8 ">
        {exclusiveOffers.map((offer) => (
          <div
            key={offer._id}
            className="relative group rounded-2xl lg:w-[430px] md:w-[300px] md:m-auto overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            
            <img
              src={offer.image}
              alt={offer.title}
              className="w-full h-72 object-cover  group-hover:scale-110 transition-transform duration-500"
            />

            
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

          
            <span className="absolute top-4 left-4 bg-rose-600/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
              {offer.priceOff}% OFF
            </span>

        
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-xl md:text-xl font-semibold mb-1">
                {offer.title}
              </h3>
              <p className="text-sm md:text-base opacity-90">
                {offer.description}
              </p>
              <p className="text-xs opacity-80 mt-1">
                Expires {offer.expiryDate}
              </p>

              
              <div className="mt-4 inline-flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-full shadow hover:bg-gray-100 transition">
                View Offers
                <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

