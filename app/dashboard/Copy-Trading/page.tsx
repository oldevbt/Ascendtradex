"use client";
import React from "react";
import { FaBitcoin } from "react-icons/fa";

const CopyTrading: React.FC = () => {
  return (
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
            <p className="text-xl font-semibold">$0</p>
          </div>
        </div>

        {/* Current Subscription Card */}
        <div className="flex items-center p-4 rounded-lg border border-gray-700">
          <div>
            <p className="text-gray-400 text-sm">Current Subscription</p>
            <p className="text-xl font-semibold">None</p>
          </div>
        </div>

        {/* Profit Card */}
        <div className="flex items-center p-4 rounded-lg border border-gray-700">
          <div>
            <p className="text-gray-400 text-sm">Profit</p>
            <p className="text-xl font-semibold">$0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyTrading;
