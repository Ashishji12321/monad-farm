"use client";
import { useState } from "react";

const tasks = [
  {
    title: "Deploy a contract on Monad testnet",
    description: "Open the Monad explorer and connect your wallet.",
    guide: [
      {
        step: (
          <>
            Go to the Monad testnet faucet and request test tokens from{" "}
            <a
              href="https://faucet.testnet.monad.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-pink-600 transition"
            >
              Faucet
            </a>
            .
          </>
        ),
      },
      {
        step: (
          <>
            Open the{" "}
            <a
              href="https://explorer.testnet.monad.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-pink-600 transition"
            >
              Monad Explorer
            </a>{" "}
            and connect your wallet.
          </>
        ),
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
    guide: [
      {
        step: (
          <>
            Go to{" "}
            <a
              href="https://testnet.ambient.exchange/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-pink-600 transition"
            >
              Ambient
            </a>{" "}
            DEX (testnet).
          </>
        ),
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
    guide: [
      {
        step: (
          <>
            Visit the{" "}
            <a
              href="https://opals.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-pink-600 transition"
            >
              Opals
            </a>{" "}
            dApp on Monad testnet.
          </>
        ),
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
        background: "linear-gradient(135deg, #171f2c 0%, #232c43 100%)",
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
            backdrop-filter: blur(18px) saturate(120%);
            background: rgba(255,255,255,0.22) !important;
            border: 1px solid rgba(255,255,255,0.14);
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
            className="bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl backdrop-blur-xl hover:scale-[1.01] transition-all duration-300 group"
            style={{
              boxShadow:
                "0 2px 24px 0 rgba(0,0,0,0.16), 0 1.5px 8px 0 rgba(85,180,255,0.09)",
            }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-cyan-200 transition">
              {task.title}
            </h2>
            <p className="mb-5 text-gray-100 opacity-90">{task.description}</p>
            <button
              onClick={() => setOpenGuide(openGuide === task.title ? null : task.title)}
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:from-pink-400 hover:to-purple-700 transition-all focus:outline-none focus:ring-4 focus:ring-cyan-200 active:scale-95"
              style={{
                textShadow: "0 2px 8px #3af",
                letterSpacing: "1px",
              }}
            >
              {openGuide === task.title ? "Hide Guide" : "Show Guide"}
            </button>
            {openGuide === task.title && (
              <ol className="mt-6 bg-white/85 rounded-xl p-4 text-gray-900 shadow-inner glassmorph">
                {task.guide.map((stepObj, i) => (
                  <li key={i} className="mb-2 text-lg">
                    {i + 1}. {stepObj.step}
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
