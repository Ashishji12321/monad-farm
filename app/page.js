"use client";
import { useState } from "react";

const tasks = [
  {
    title: "Deploy a contract on Monad testnet",
    description: "Open the Monad explorer and connect your wallet.",
    link: "https://explorer.testnet.monad.xyz/", // Explorer link
    guide: [
      {
        step: "Go to the Monad testnet faucet and request test tokens.",
        link: "https://faucet.testnet.monad.xyz/",
      },
      {
        step: "Open the Monad explorer and connect your wallet.",
        link: "https://explorer.testnet.monad.xyz/",
      },
      {
        step: "Click 'Deploy Contract', paste contract code, and deploy.",
      },
      {
        step: "Wait for transaction confirmation.",
      },
    ],
  },
  {
    title: "Swap tokens on Ambient DEX",
    description: "Connect your wallet.",
    link: "https://testnet.ambient.exchange/",
    guide: [
      {
        step: "Go to Ambient DEX (testnet).",
        link: "https://testnet.ambient.exchange/",
      },
      {
        step: "Connect your wallet.",
      },
      {
        step: "Select the tokens you want to swap and input the amount.",
      },
      {
        step: "Click 'Swap' and approve the transaction in your wallet.",
      },
    ],
  },
  {
    title: "Mint an NFT on Opals",
    description: "Connect your wallet.",
    link: "https://opals.io/",
    guide: [
      {
        step: "Visit the Opals dApp on Monad testnet.",
        link: "https://opals.io/",
      },
      {
        step: "Connect your wallet.",
      },
      {
        step: "Choose any NFT to mint.",
      },
      {
        step: "Click 'Mint' and confirm in your wallet.",
      },
      {
        step: "Wait for the success message.",
      },
    ],
  },
];

export default function Home() {
  const [openGuide, setOpenGuide] = useState(null);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-2"
      style={{
        background: "linear-gradient(135deg, #141e30 0%, #243b55 100%)",
        animation: "bgMove 12s ease-in-out infinite alternate",
      }}
    >
      <style>
        {`
          @keyframes bgMove {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
          .neon {
            text-shadow:
              0 0 8px #3af,
              0 0 20px #3af,
              0 0 24px #0ff,
              0 0 48px #6cf;
          }
          .glassmorph {
            backdrop-filter: blur(16px) saturate(120%);
            background: rgba(255,255,255,0.32) !important;
            border: 1px solid rgba(255,255,255,0.18);
          }
        `}
      </style>
      <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-white tracking-tight drop-shadow-lg neon">
        Monad Airdrop Tasks
      </h1>
      <ul className="w-full max-w-2xl space-y-10">
        {tasks.map((task, idx) => (
          <li
            key={idx}
            className="bg-white/10 border border-white/30 rounded-2xl p-8 shadow-xl backdrop-blur-md hover:scale-[1.03] transition-all duration-300 group"
            style={{
              boxShadow:
                "0 4px 32px 0 rgba(0,0,0,0.24), 0 1.5px 12px 0 rgba(85,180,255,0.13)",
            }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition">
              {task.title}
            </h2>
            <p className="mb-5 text-gray-100 opacity-90">{task.description}</p>
            <a
              href={task.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-4 px-5 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-xl shadow hover:from-pink-400 hover:to-purple-700 transition-all mr-3"
              style={{
                textShadow: "0 2px 8px #3af",
                letterSpacing: "1px",
              }}
            >
              Open dApp
            </a>
            <button
              onClick={() => setOpenGuide(openGuide === task.title ? null : task.title)}
              className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-medium rounded-xl shadow-lg hover:from-pink-400 hover:to-purple-700 transition-all focus:outline-none focus:ring-4 focus:ring-cyan-200 active:scale-95"
              style={{
                textShadow: "0 2px 8px #3af",
                letterSpacing: "1px",
              }}
            >
              {openGuide === task.title ? "Hide Guide" : "Show Guide"}
            </button>
            {openGuide === task.title && (
              <ol className="mt-6 bg-white/70 rounded-xl p-4 text-gray-800 shadow-inner glassmorph">
                {task.guide.map((step, i) => (
                  <li key={i} className="mb-2 text-lg">
                    {i + 1}.{" "}
                    {step.link ? (
                      <a
                        href={step.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 underline hover:text-pink-600 transition-all"
                      >
                        {step.step}
                      </a>
                    ) : (
                      step.step
                    )}
                  </li>
                ))}
              </ol>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
