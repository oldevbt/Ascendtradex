"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Order from "../_components/Order";

// Dynamic imports for TradingView Widgets
const AdvancedRealTimeChart = dynamic(
  () =>
    import("react-ts-tradingview-widgets").then(
      (mod) => mod.AdvancedRealTimeChart
    ),
  { ssr: false, loading: () => <p>Loading main chart...</p> }
);

const MiniChart = dynamic(
  () => import("react-ts-tradingview-widgets").then((mod) => mod.MiniChart),
  { ssr: false, loading: () => <p>Loading mini chart...</p> }
);

const TickerTape = dynamic(
  () => import("react-ts-tradingview-widgets").then((mod) => mod.TickerTape),
  { ssr: false, loading: () => <p>Loading ticker tape...</p> }
);

const SymbolInfo = dynamic(
  () => import("react-ts-tradingview-widgets").then((mod) => mod.SymbolInfo),
  { ssr: false, loading: () => <p>Loading symbol info...</p> }
);

const Placeholder = ({ text }: { text: string }) => (
  <div
    style={{
      height: "100%",
      backgroundColor: "#333",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {text}
  </div>
);

const LiveTrading = () => {
  const [mounted, setMounted] = useState(false);
  const symbol = "BTCUSDT"; // Define symbol explicitly

  // Ensure client-side rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <p>Loading components...</p>;

  return (
    <div className="flex flex-col gap-4 p-4">
      {/* Main Chart */}
      <div style={{ height: "500px", width: "100%" }}>
        {AdvancedRealTimeChart ? (
          <AdvancedRealTimeChart theme="dark" autosize={true} symbol={symbol} />
        ) : (
          <Placeholder text="AdvancedRealTimeChart failed to load." />
        )}
      </div>

      {/* Ticker Tape */}
      <div style={{ height: "50px", width: "100%" }}>
        {TickerTape ? (
          <TickerTape colorTheme="dark" />
        ) : (
          <Placeholder text="TickerTape failed to load." />
        )}
      </div>
      <Order />
    </div>
  );
};

export default LiveTrading;
