"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Line } from "react-chartjs-2";
import Tesla from "@/assets/tesla.svg";
import Meta from "@/assets/meta.svg";
import Google from "@/assets/google.svg";
import Netflix from "@/assets/netflix (1).svg";
import Bitcoin from "@/assets/jpmorgan.svg";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Define stock logos with explicit type
const stockLogos: Record<"TSLA" | "META" | "GOOGL" | "NFLX" | "JPM", string> = {
  TSLA: Tesla,
  META: Meta,
  GOOGL: Google,
  NFLX: Netflix,
  JPM: Bitcoin,
};

// Example chart data generator
const exampleChartData = (color: string) => ({
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
  datasets: [
    {
      data: [182, 185, 183, 186, 182],
      borderColor: color,
      borderWidth: 1.5,
      tension: 0.4,
    },
  ],
});

// Stock data array
const stockData = [
  {
    symbol: "TSLA",
    price: "182.65",
    change: "0.96",
    chartData: exampleChartData("#4caf50"),
  },
  {
    symbol: "META",
    price: "457.77",
    change: "-0.35",
    chartData: exampleChartData("#FF5733"),
  },
  {
    symbol: "GOOGL",
    price: "145.20",
    change: "0.23",
    chartData: exampleChartData("#4caf50"),
  },
  {
    symbol: "NFLX",
    price: "555.90",
    change: "12.23",
    chartData: exampleChartData("#FF5733"),
  },
  {
    symbol: "JPM",
    price: "167.86",
    change: "-1.46",
    chartData: exampleChartData("#FF5733"),
  },
];

// Define props for StockCard
interface StockCardProps {
  symbol: keyof typeof stockLogos; // Enforce valid keys from stockLogos
  price: string;
  change: string;
  chartData: any; // You can further specify this if needed
}

// Stock Card Component
const StockCard = ({ symbol, price, change, chartData }: StockCardProps) => (
  <div className="p-3 bg-[#1F2129] rounded-lg shadow-lg text-sm">
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Image
          src={stockLogos[symbol]}
          alt={`${symbol} logo`}
          width={20}
          height={20}
        />
        <h2 className="text-white font-bold">{symbol}</h2>
      </div>
      <span className="text-xs bg-[#8256D0] px-2 py-1 rounded text-white">
        24H
      </span>
    </div>
    <h2 className="text-xl font-bold text-white">{price} USD</h2>
    <p
      className={`text-xs font-semibold ${
        parseFloat(change) > 0 ? "text-green-500" : "text-red-500"
      }`}
    >
      {parseFloat(change) > 0 ? "+" : ""}
      {change}%
    </p>
    <div className="mt-2">
      <Line
        data={chartData}
        options={{
          responsive: true,
          plugins: { legend: { display: false } },
          scales: {
            x: { display: false },
            y: { display: false },
          },
        }}
        height={60}
      />
    </div>
  </div>
);

// Main Dashboard Component
const Chart = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <p>Loading...</p>;

  return (
    <div className="p-5 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Stock Cards Section */}
      <div className="lg:col-span-2 flex gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 flex-grow">
          {stockData.slice(0, 4).map((stock, index) => (
            <StockCard
              key={index}
              symbol={stock.symbol as keyof typeof stockLogos} // Explicit cast
              price={stock.price}
              change={stock.change}
              chartData={stock.chartData}
            />
          ))}
        </div>
        <div className="w-1 bg-gray-600"></div>
      </div>

      {/* Column for Two Additional Cards */}
      <div className="space-y-4">
        {stockData.slice(4, 6).map((stock, index) => (
          <StockCard
            key={index}
            symbol={stock.symbol as keyof typeof stockLogos} // Explicit cast
            price={stock.price}
            change={stock.change}
            chartData={stock.chartData}
          />
        ))}
      </div>
    </div>
  );
};

export default Chart;
