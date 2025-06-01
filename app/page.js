"use client";
import { MagnifyingGlass, BellSimple } from "@phosphor-icons/react";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col bg-gradient-to-br from-blue-400 via-purple-400 to-indigo-500"
      style={{
        minHeight: "100vh",
        fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif",
      }}
    >
      {/* NAVBAR */}
      <nav className="w-full flex justify-between items-center px-8 py-4 bg-white/40 shadow-md backdrop-blur-md">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-extrabold text-purple-800">🪂 AirdropTracker</span>
        </div>
        <ul className="flex items-center space-x-7 text-lg font-medium">
          <li>
            <a href="#" className="border-b-2 border-purple-600 text-purple-900 pb-1 hover:text-purple-700">Home</a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-purple-700">Live Airdrops</a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-purple-700">Upcoming</a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-purple-700">Completed</a>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <button className="flex items-center px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg shadow hover:bg-purple-800 transition">
            <BellSimple size={22} className="mr-2" />
            Notifications
          </button>
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User"
            className="w-10 h-10 rounded-full border-2 border-purple-300"
          />
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="flex-1 flex flex-col items-center justify-center px-2 text-center">
        <h1 className="mt-12 mb-5 text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          Never Miss a Crypto Airdrop Again
        </h1>
        <p className="mb-12 text-lg md:text-2xl text-white/90 max-w-2xl">
          Track, participate, and get updates on the latest cryptocurrency airdrops all in one place.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 w-full max-w-2xl">
          {/* Search bar */}
          <div className="flex flex-1 items-center bg-white/90 rounded-xl px-4 py-2 shadow-md">
            <MagnifyingGlass size={28} className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search for airdrops..."
              className="flex-1 bg-transparent outline-none text-lg text-gray-700 placeholder-gray-400"
            />
          </div>
          {/* Add Custom Airdrop */}
          <button className="flex items-center justify-center px-6 py-3 bg-white text-purple-700 font-semibold text-lg rounded-xl shadow-md hover:bg-purple-600 hover:text-white transition space-x-2">
            <span className="text-2xl">+</span>
            <span>Add Custom Airdrop</span>
          </button>
        </div>
      </div>
    </div>
  );
}
