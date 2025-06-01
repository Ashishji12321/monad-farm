"use client";
import { useState, useEffect } from "react";
import { MagnifyingGlass, BellSimple } from "@phosphor-icons/react";

export default function Home() {
  // Your Sheet.best API URL:
  const SHEET_URL = "https://api.sheetbest.com/sheets/778987b8-6b96-49dd-9335-9f5d3ea95db7";

  const [airdrops, setAirdrops] = useState([]);
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState("Live");

  useEffect(() => {
    fetch(SHEET_URL)
      .then(res => res.json())
      .then(setAirdrops)
      .catch(console.error);
  }, []);

  const filtered = airdrops.filter(
    drop =>
      (drop.Status?.toLowerCase() || "").includes(tab.toLowerCase()) &&
      (
        (drop.Name?.toLowerCase() || "").includes(search.toLowerCase()) ||
        (drop.Project?.toLowerCase() || "").includes(search.toLowerCase())
      )
  );

  return (
    <div
      className="min-h-screen flex flex-col bg-gradient-to-br from-blue-400 via-purple-400 to-indigo-500"
      style={{
        fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif",
      }}
    >
      {/* NAVBAR */}
      <nav className="w-full flex justify-between items-center px-8 py-4 bg-white/40 shadow-md backdrop-blur-md">
        <span className="text-2xl font-extrabold text-purple-800">🪂 AirdropTracker</span>
        <ul className="flex items-center space-x-7 text-lg font-medium">
          {["Home", "Live", "Upcoming", "Completed"].map((label) => (
            <li key={label}>
              <button
                className={`pb-1 ${
                  tab === label ? "border-b-2 border-purple-600 text-purple-900" : "text-gray-700"
                } hover:text-purple-700`}
                onClick={() => setTab(label)}
              >
                {label}
              </button>
            </li>
          ))}
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
      <div className="flex-1 flex flex-col items-center justify-center px-2 text-center mb-0">
        <h1 className="mt-8 mb-5 text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          Never Miss a Crypto Airdrop Again
        </h1>
        <p className="mb-8 text-lg md:text-2xl text-white/90 max-w-2xl">
          Track, participate, and get updates on the latest cryptocurrency airdrops all in one place.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 w-full max-w-2xl">
          {/* Search bar */}
          <div className="flex flex-1 items-center bg-white/90 rounded-xl px-4 py-2 shadow-md">
            <MagnifyingGlass size={28} className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search for airdrops..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="flex-1 bg-transparent outline-none text-lg text-gray-700 placeholder-gray-400"
            />
          </div>
          {/* Add Custom Airdrop */}
          <button
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLScWMEdrrPM6PYaFygnx9x_5L_7HY7zxkV360QHpzJ6cjFBw-A/viewform?usp=dialog",
                "_blank"
              )
            }
            className="flex items-center justify-center px-6 py-3 bg-white text-purple-700 font-semibold text-lg rounded-xl shadow-md hover:bg-purple-600 hover:text-white transition space-x-2"
          >
            <span className="text-2xl">+</span>
            <span>Add Custom Airdrop</span>
          </button>
        </div>
      </div>

      {/* Airdrop Cards */}
      <div className="max-w-4xl w-full mx-auto px-4 mt-2 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.length === 0 && (
            <div className="col-span-2 text-center text-white text-xl mt-8">
              No airdrops found.
            </div>
          )}
          {filtered.map((airdrop, i) => (
            <div
              key={i}
              className="bg-white/80 rounded-xl p-5 shadow-lg flex flex-col items-start hover:shadow-2xl transition"
            >
              <div className="flex items-center mb-3">
                {airdrop.Image && (
                  <img
                    src={airdrop.Image}
                    alt=""
                    className="w-14 h-14 rounded-xl mr-3"
                    onError={e => (e.target.style.display = "none")}
                  />
                )}
                <div>
                  <h2 className="text-xl font-bold text-purple-900">{airdrop.Name}</h2>
                  <div className="text-sm text-gray-600">{airdrop.Project}</div>
                  <span
                    className={`inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-semibold ${
                      airdrop.Status === "Live"
                        ? "bg-green-100 text-green-700"
                        : airdrop.Status === "Upcoming"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-gray-300 text-gray-700"
                    }`}
                  >
                    {airdrop.Status}
                  </span>
                </div>
              </div>
              <div className="mb-2 text-gray-700">{airdrop.Description}</div>
              <div className="flex space-x-2 mt-auto">
                {airdrop.Website && (
                  <a
                    href={airdrop.Website}
                    target="_blank"
                    className="px-3 py-1 text-white bg-purple-600 rounded-lg font-medium hover:bg-purple-800 text-sm transition"
                  >
                    Visit Site
                  </a>
                )}
                {airdrop.Guide && (
                  <a
                    href={airdrop.Guide}
                    target="_blank"
                    className="px-3 py-1 text-purple-700 bg-purple-100 rounded-lg font-medium hover:bg-purple-200 text-sm transition"
                  >
                    Guide
                  </a>
                )}
              </div>
              <div className="mt-3 text-xs text-gray-400">
                {airdrop.StartDate} – {airdrop.EndDate}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
