"use client";
import { useState, useEffect } from "react";
import { MagnifyingGlass, Calendar, Info, Link as LinkIcon } from "@phosphor-icons/react";

export default function Home() {
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

  // Filtering logic
  const filtered = airdrops
    .filter(drop => 
      tab === "Home" ? true : (drop.Status?.toLowerCase() || "").includes(tab.toLowerCase())
    )
    .filter(
      drop =>
        (drop.Name?.toLowerCase() || "").includes(search.toLowerCase()) ||
        (drop.Project?.toLowerCase() || "").includes(search.toLowerCase())
    );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-purple-900 to-blue-800"
      style={{ fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif" }}>
      {/* NAVBAR */}
      <nav className="w-full flex justify-between items-center px-6 py-3 bg-white/10 shadow-md backdrop-blur-md">
        <span className="text-2xl font-extrabold text-purple-200 tracking-wide">🪂 AirdropTracker</span>
        <ul className="flex items-center space-x-6 text-base font-medium">
          {["Home", "Live", "Upcoming", "Completed"].map(label => (
            <li key={label}>
              <button
                className={`pb-1 px-2 rounded ${
                  tab === label
                    ? "border-b-2 border-purple-400 text-purple-100 bg-purple-900/30"
                    : "text-gray-300"
                } hover:text-purple-200 transition`}
                onClick={() => setTab(label)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLScWMEdrrPM6PYaFygnx9x_5L_7HY7zxkV360QHpzJ6cjFBw-A/viewform?usp=dialog", "_blank")}
          className="px-5 py-2 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition shadow">
          + Submit Airdrop
        </button>
      </nav>

      {/* HERO */}
      <div className="flex flex-col items-center mt-10 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-blue-400 to-blue-200 bg-clip-text text-transparent mb-4">
          Discover, Track, and Never Miss <br /> the Latest Crypto Airdrops!
        </h1>
        <p className="text-lg md:text-2xl text-white/90 max-w-2xl mb-8">
          Real-time tracker for the hottest airdrops.<br />
          Filter, search, and get official links, guides, and status updates — all in one place.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full max-w-xl">
          <div className="flex flex-1 items-center bg-white/90 rounded-xl px-4 py-2 shadow-md">
            <MagnifyingGlass size={26} className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search by name or project..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="flex-1 bg-transparent outline-none text-lg text-gray-700 placeholder-gray-400"
            />
          </div>
        </div>
      </div>

      {/* AIRDROP CARDS */}
      <div className="max-w-6xl w-full mx-auto px-4 mt-10 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filtered.length === 0 && (
            <div className="col-span-3 text-center text-white text-2xl mt-16">
              🚫 No airdrops found for your search/filter.
            </div>
          )}
          {filtered.map((airdrop, i) => (
            <div key={i} className="bg-gradient-to-br from-purple-800 via-blue-800 to-blue-700 rounded-2xl p-6 shadow-xl flex flex-col items-start hover:scale-105 transition">
              <div className="flex items-center mb-4">
                {airdrop.Image && (
                  <img
                    src={airdrop.Image}
                    alt="logo"
                    className="w-16 h-16 rounded-xl mr-4 bg-white/10"
                    onError={e => (e.target.style.display = "none")}
                  />
                )}
                <div>
                  <h2 className="text-2xl font-bold text-purple-100">{airdrop.Name}</h2>
                  <div className="text-base text-blue-200">{airdrop.Project}</div>
                  <span className={`inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-semibold ${
                      airdrop.Status === "Live"
                        ? "bg-green-200/70 text-green-900"
                        : airdrop.Status === "Upcoming"
                        ? "bg-yellow-200/70 text-yellow-900"
                        : "bg-gray-400/40 text-gray-900"
                    }`}>
                    {airdrop.Status}
                  </span>
                </div>
              </div>
              <div className="mb-3 text-white/90 min-h-[56px]">{airdrop.Description}</div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {airdrop.Website && (
                  <a href={airdrop.Website} target="_blank" rel="noopener noreferrer"
                    className="flex items-center px-3 py-1 text-white bg-blue-600 rounded-lg font-medium hover:bg-blue-800 text-sm transition gap-1">
                    <LinkIcon size={16} /> Website
                  </a>
                )}
                {airdrop.Guide && (
                  <a href={airdrop.Guide} target="_blank" rel="noopener noreferrer"
                    className="flex items-center px-3 py-1 text-blue-800 bg-blue-100 rounded-lg font-medium hover:bg-blue-300 text-sm transition gap-1">
                    <Info size={16} /> Guide
                  </a>
                )}
              </div>
              <div className="mt-4 flex items-center text-xs text-blue-200 gap-4">
                <span className="flex items-center gap-1">
                  <Calendar size={16} /> {airdrop.StartDate} → {airdrop.EndDate}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
