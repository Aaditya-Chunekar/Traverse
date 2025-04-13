import React from 'react';
import { Link } from 'react-router-dom';
import pic01 from '../Images/signup.jpeg';

const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn", "Neptune", "Andromeda Prime", "Zeta-7"];

const SignUp = () => {
  return (
    <div className="flex flex-col h-screen md:flex-row items-center justify-center w-full 
                    bg-[#0A1F44] relative overflow-hidden"> 
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 p-8 md:p-16 bg-[#0A1F44]/50 backdrop-blur-lg rounded-xl z-10">
        <h2 className="text-4xl font-extrabold text-center text-purple-300 glow mb-6">
          Sign Up to Traverse the Universe 🌌
        </h2>

        <div className="space-y-4">
          <input 
            type="text" 
            placeholder="Enter your Galactic Name" 
            className="w-full p-3 border border-purple-400 rounded-full focus:ring-2 focus:ring-purple-400 
                      bg-[#0A1F44] text-purple-200 placeholder-gray-400 shadow-lg"
          />
          <input 
            type="email" 
            placeholder="Enter your Email Frequency Code" 
            className="w-full p-3 border border-purple-400 rounded-full focus:ring-2 focus:ring-purple-400 
                      bg-[#0A1F44] text-purple-200 placeholder-gray-400 shadow-lg"
          />
          <input 
            type="password" 
            placeholder="Set Your Access Code" 
            className="w-full p-3 border border-purple-400 rounded-full focus:ring-2 focus:ring-purple-400 
                      bg-[#0A1F44] text-purple-200 placeholder-gray-400 shadow-lg"
          />

          {/* Planet Selection Dropdown */}
          <select className="w-full p-3 border border-purple-400 rounded-full focus:ring-2 focus:ring-purple-400 
                              bg-[#0A1F44] text-purple-200 placeholder-gray-400 shadow-lg">
            <option value="" disabled selected>Select Your Home Planet </option>
            {planets.map((planet, index) => (
              <option key={index} value={planet}>{planet}</option>
            ))}
          </select>
        </div>

        <Link to="../Home">
          <button className="w-full mt-6 py-3 bg-purple-400 text-black rounded-full font-semibold text-lg 
                            hover:bg-purple-300 transition duration-300 shadow-lg shadow-purple-500/50">
            Begin Your Journey
          </button>
        </Link>

        <p className="text-center mt-4 text-purple-200">
          Already have an access code? <Link to="#" className="text-purple-400 hover:underline">Log In</Link>
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-1/2 hidden md:block z-10">
        <img src={pic01} alt="Sign Up" className="w-full h-full object-cover brightness-75" />
      </div>
    </div>
  );
};

export default SignUp;
