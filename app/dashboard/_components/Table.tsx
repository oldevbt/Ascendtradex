import React from "react";

function MarketTradesTable() {
  const trades = [
    { time: "10:47:00", price: "40591", amount: "2286.67518", total: "11637" },
    { time: "10:46:50", price: "40611", amount: "9185.0169", total: "37327" },
    // ... other trades
  ];

  return (
    <table className="table-auto border-collapse border border-gray-300 w-full">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">Time</th>
          <th className="border border-gray-300 px-4 py-2">Price (USDT)</th>
          <th className="border border-gray-300 px-4 py-2">Amount (BTC)</th>
          <th className="border border-gray-300 px-4 py-2">Total (USDT)</th>
        </tr>
      </thead>
      <tbody>
        {trades.map((trade) => (
          <tr key={trade.time}>
            <td className="border border-gray-300 px-4 py-2">{trade.time}</td>
            <td className="border border-gray-300 px-4 py-2">{trade.price}</td>
            <td className="border border-gray-300 px-4 py-2">{trade.amount}</td>
            <td className="border border-gray-300 px-4 py-2">{trade.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MarketTradesTable;
