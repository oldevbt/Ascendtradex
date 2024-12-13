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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const stockLogos: Record<"TSLA" | "META" | "GOOGL" | "NFLX" | "JPM", string> = {
  TSLA: Tesla,
  META: Meta,
  GOOGL: Google,
  NFLX: Netflix,
  JPM: Bitcoin,
};

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

// Explicitly type the `stockData` array
const stockData: Array<{
  symbol: keyof typeof stockLogos;
  price: string;
  change: string;
  chartData: {
    labels: string[];
    datasets: Array<{
      data: number[];
      borderColor: string;
      borderWidth: number;
      tension: number;
    }>;
  };
}> = [
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

interface StockCardProps {
  symbol: keyof typeof stockLogos;
  price: string;
  change: string;
  chartData: any;
}

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
        options={{ responsive: true, plugins: { legend: { display: false } } }}
        height={60}
      />
    </div>
  </div>
);

const Chart = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <p>Loading...</p>;

  return (
    <div className="p-5 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {stockData.map((stock) => (
        <StockCard key={stock.symbol} {...stock} />
      ))}
    </div>
  );
};

export default Chart;
