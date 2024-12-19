"use client";

import React, { useEffect, useState } from "react";
import { FaBitcoin } from "react-icons/fa";

const signals = [
  {
    name: "STARTER INVESTMENT",
    ROI: "150%",

    Duration: "60 Days",

    MinimumAmount: "$50,000.00",

    MaximumAmount: "$145,000.00",
  },
  {
    name: "CLASSIC INVESTMENT",
    ROI: "150%",

    Duration: "60 Days",

    MinimumAmount: " $150,000.00",

    MaximumAmount: " $350,000.00",
  },
  {
    name: "PRO INVESTMENT",
    ROI: "150%",

    Duration: "60 Days",

    MinimumAmount: "$500,000.00",

    MaximumAmount: " $2,000,000.00",
  },
];

const CopyTrading: React.FC = () => {
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

      <div className="mt-20">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-3">
          {signals.map((signal, index) => (
            <div
              key={index}
              className="border-2 border-[#8256D0] bg-[#12142D] p-4 rounded-lg"
            >
              <div className="text-[21px] font-bold text-[#8256D0]">
                {signal.name}
              </div>
              <div>
                <h1>
                  <span className="font-bold text-[14px] mr-1">Price:</span>
                  {signal.ROI}
                </h1>
                <h1>
                  <span className="font-bold text-[14px] mr-1">Strength:</span>
                  {signal.Duration}
                </h1>
                <h1>
                  <span className="font-bold text-[14px] mr-1">
                    Minimum Amount:
                  </span>
                  {signal.MaximumAmount}
                </h1>
                <h1>
                  <span className="font-bold text-[14px] mr-1">
                    Maximum Amount:
                  </span>
                  {signal.MinimumAmount}
                </h1>
              </div>
              <button className="text-[13.3px] p-1 rounded-md mt-5 bg-[#8256d0]">
                Subscribe
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CopyTrading;
