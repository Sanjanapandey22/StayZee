import { useNavigate } from "react-router-dom";
import Login from "../pages/Login";

export default function JoinNowSection() {
  

  return (
    <div className="bg-rose-900 text-white py-12 px-6 rounded-2xl shadow-xl flex flex-col items-center text-center space-y-6 mt-12 mb-12 mx-auto max-w-4xl">
      <h2 className="text-3xl font-bold leading-tight">
         Join Now & Get <span className="text-yellow-300">₹500 OFF</span> on Your First Booking!
      </h2>
      <p className="text-lg text-gray-100 max-w-xl">
        Sign up today and unlock exclusive discounts, early access to deals, and personalized recommendations for your next stay.
      </p>
      <button
    
        className="bg-yellow-300 text-rose-900 font-semibold px-8 py-3 rounded-xl shadow-md hover:bg-yellow-400 transition duration-300"
      >
        Join Now & Save
      </button>
      <p className="text-sm text-gray-200">
        * Offer valid for new users on their first booking only.
      </p>
    </div>
  );
}
