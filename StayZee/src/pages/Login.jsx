
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faApple } from "@fortawesome/free-brands-svg-icons";

import { useState } from "react";

export default function Login() {
   
     const [signState, setSignState]= useState("Login")


  return (
    <div className="bg-white text-gray-500 max-w-96 mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
      
   {signState === 'login' ? <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
        Welcome back
      </h2> : <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
        Welcome
      </h2>
       }   
      
      <form>
        <input
          id="email"
          className="w-full bg-transparent border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
          type="email"
          placeholder="Enter your email"
          required
        />
        <input
          id="password"
          className="w-full bg-transparent border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
          type="password"
          placeholder="Enter your password"
          required
        />

      
        <div className="text-right py-4">
          <a className="text-blue-600 underline" href="#">
            Forgot Password?
          </a>
        </div>

      
        <button
          type="submit"
          className="w-full mb-3 bg-rose-800 py-2.5 rounded-full text-white hover:bg-black transition"
        >
         {signState}
        </button>
      </form>

    
     {signState === 'Login'? <p className="text-center mt-4">
        Don’t have an account?
        <span onClick={()=> {setSignState("Sign Up")}} className="text-blue-500 underline">Sign Up Now</span>
      </p> : <p className="text-center mt-4">Already have an account? <span onClick={()=> {setSignState("Login")}} className="text-blue-500 underline">Login</span></p> }

      
    {signState === 'Login'?  <button
        type="button"
        className="w-full flex items-center gap-3 justify-center mt-5 bg-black py-2.5 rounded-full text-white hover:bg-gray-900 transition"
      >
        <FontAwesomeIcon icon={faApple} className="text-lg" />
        Log in with Apple
      </button> : <button
        type="button"
        className="w-full flex items-center gap-3 justify-center mt-5 bg-black py-2.5 rounded-full text-white hover:bg-gray-900 transition"
      >
        <FontAwesomeIcon icon={faApple} className="text-lg" />
        Sign in with Apple
      </button> }

       {signState === 'Login'?   <button
        type="button"
        className="w-full flex items-center gap-3 justify-center my-3 bg-white border border-gray-500/30 py-2.5 rounded-full text-gray-800 hover:bg-gray-100 transition"
      >
        <FontAwesomeIcon icon={faGoogle} className="text-lg text-red-500" />
        Log in with Google
        </button> :  <button
        type="button"
        className="w-full flex items-center gap-3 justify-center my-3 bg-white border border-gray-500/30 py-2.5 rounded-full text-gray-800 hover:bg-gray-100 transition"
      >
        <FontAwesomeIcon icon={faGoogle} className="text-lg text-red-500" />
        Sign in with Google
        </button> }

      
    </div>
  );
}
