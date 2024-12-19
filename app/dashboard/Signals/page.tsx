"use client";
import React, { useState, useEffect } from "react";
import { FaBitcoin } from "react-icons/fa";

const Signals = [
  {
    name: "MACD Pro",
    price: "$75000",
    Strength: "50%",
  },
  {
    name: "TX - 74",
    price: "$123000",
    Strength: "100%",
  },
  {
    name: "GD - V4",
    price: "$200000",
    Strength: "100%",
  },
  {
    name: "DTS - V2",
    price: "$300000",
    Strength: "27%",
  },
  {
    name: "TSLA Max",
    price: "$155000",
    Strength: "100%",
  },
  {
    name: "GME Elite",
    price: "$25000",
    Strength: "88%",
  },
];

const CopyTrading: React.FC = () => {
  const [showPurchased, setShowPurchased] = useState(false);

  const [userData, setUserData] = useState({
    copyTradingBalance: 0,
    profit: 0,
    subscriptionType: "None",
  });

  useEffect(() => {
    // Fetch the current user's data from the API
    const fetchUserData = async () => {
      try {
        const response = await fetch("/api/getCurrentUser");
        if (!response.ok) throw new Error("Failed to fetch user data");

        const data = await response.json();
        console.log("the user data :", data);
        setUserData({
          copyTradingBalance: data.copyTradingBalance || 0,
          profit: data.profit || 0,
          subscriptionType: data.subscriptionType || "None",
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <div className="p-6 bg-[#1C1F25] text-white rounded-xl">
        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Current Deposit Card */}
          <div className="flex items-center p-4 rounded-xl border border-gray-700">
            <div className="text-orange-500">
              <FaBitcoin size={28} />
            </div>
            <div className="ml-4">
              <p className="text-gray-400 text-sm">Current Deposit</p>
              <p className="text-xl font-semibold">
                ${userData.copyTradingBalance.toFixed(2)}
              </p>
            </div>
          </div>

          {/* Current Subscription Card */}
          <div className="flex items-center p-4 rounded-lg border border-gray-700">
            <div>
              <p className="text-gray-400 text-sm">Current Subscription</p>
              <p className="text-xl font-semibold">
                {userData.subscriptionType}
              </p>
            </div>
          </div>

          {/* Profit Card */}
          <div className="flex items-center p-4 rounded-lg border border-gray-700">
            <div>
              <p className="text-gray-400 text-sm">Profit</p>
              <p className="text-xl font-semibold">
                ${userData.profit.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-center mt-20">
        <div className="flex gap-x-2">
          {/* Buttons */}
          <button
            onClick={() => setShowPurchased(false)}
            className="bg-white text-purple-600 p-2 rounded-md text-[13px]"
          >
            View Signals
          </button>
          <button
            onClick={() => setShowPurchased(true)}
            className="text-white bg-purple-600 p-2 rounded-md text-[13px]"
          >
            View Purchased Signals
          </button>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Conditionally render signals */}
          {showPurchased ? (
            <div className="text-center col-span-full text-gray-400">
              No purchased signals yet.
            </div>
          ) : (
            Signals.map((signal, key) => (
              <div
                key={key}
                className="border-2 border-[#8256D0]  bg-[#12142D] p-4 rounded-lg"
              >
                <div className="text-[21px] font-bold text-[#8256D0]">
                  {signal.name}
                </div>
                <div>
                  <h1>
                    <span className="font-bold text-[14px] mr-1">Price:</span>
                    {signal.price}
                  </h1>
                  <h1>
                    <span className="font-bold text-[14px] mr-1">
                      Strength:
                    </span>
                    {signal.Strength}
                  </h1>
                </div>
                <button className="text-[13.3px] p-1 rounded-md mt-5 bg-[#8256d0]">
                  Purchase
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CopyTrading;
