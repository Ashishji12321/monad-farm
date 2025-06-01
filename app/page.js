"use client";

import { useState } from "react";

const guides = {
  "Deploy a contract on Monad testnet": [
    "Go to the Monad testnet faucet and request test tokens.",
    "Open the Monad explorer and connect your wallet.",
    "Click 'Deploy Contract', paste contract code, and deploy.",
    "Wait for transaction confirmation.",
  ],
  "Swap tokens on Ambient DEX": [
    "Go to Ambient DEX (testnet).",
    "Connect your wallet.",
    "Select the tokens you want to swap and input the amount.",
    "Click 'Swap' and approve the transaction in your wallet.",
  ],
  "Mint an NFT on Opals": [
    "Visit the Opals dApp on Monad testnet.",
    "Connect your wallet.",
    "Choose any NFT to mint.",
    "Click 'Mint' and confirm in your wallet.",
    "Wait for the success message.",
  ],
};

export default function Home() {
  const tasks = Object.keys(guides);
  const [openGuide, setOpenGuide] = useState(null);

  return (
    <div className="p-10 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Monad Airdrop Tasks</h1>
      <ul>
        {tasks.map((title, idx) => (
          <li key={idx} className="mb-6 border rounded-xl p-5 bg-white/80 shadow">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-2 text-gray-700">{guides[title][1]}</p>
            <button
              onClick={() => setOpenGuide(openGuide === title ? null : title)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              {openGuide === title ? "Hide Guide" : "Show Guide"}
            </button>
            {openGuide === title && (
              <ol className="mt-4 list-decimal list-inside text-gray-900">
                {guides[title].map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
