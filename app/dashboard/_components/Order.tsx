import React from "react";

const MarketTrades = () => {
  const data = [
    {
      time: "10:57:09",
      price: 40191,
      amount: 2298.6758,
      total: 7537,
      trend: "red",
    },
    {
      time: "10:48:08",
      price: 39810,
      amount: 9193.6961,
      total: 587,
      trend: "red",
    },
    {
      time: "10:48:07",
      price: 42000,
      amount: 3401.1169,
      total: 7222,
      trend: "green",
    },
    {
      time: "10:48:05",
      price: 40658,
      amount: 1326.1595,
      total: 7238,
      trend: "red",
    },
    {
      time: "10:47:09",
      price: 40658,
      amount: 3448.4315,
      total: 7664,
      trend: "green",
    },
    {
      time: "10:47:08",
      price: 40600,
      amount: 3001.6411,
      total: 856,
      trend: "green",
    },
    {
      time: "10:47:06",
      price: 40658,
      amount: 4413.4369,
      total: 7693,
      trend: "green",
    },
    {
      time: "10:47:06",
      price: 40658,
      amount: 4413.4369,
      total: 7693,
      trend: "green",
    },
    {
      time: "10:47:06",
      price: 40658,
      amount: 4413.4369,
      total: 7693,
      trend: "green",
    },
    {
      time: "10:47:06",
      price: 40658,
      amount: 4413.4369,
      total: 7693,
      trend: "green",
    },
    {
      time: "10:47:06",
      price: 40658,
      amount: 4413.4369,
      total: 7693,
      trend: "green",
    },
    {
      time: "10:47:06",
      price: 40658,
      amount: 4413.4369,
      total: 7693,
      trend: "green",
    },
    {
      time: "10:47:06",
      price: 40658,
      amount: 4413.4369,
      total: 7693,
      trend: "green",
    },
    {
      time: "10:47:06",
      price: 40658,
      amount: 4413.4369,
      total: 7693,
      trend: "green",
    },
    {
      time: "10:47:06",
      price: 40658,
      amount: 4413.4369,
      total: 7693,
      trend: "green",
    },
    {
      time: "10:47:06",
      price: 40658,
      amount: 4413.4369,
      total: 7693,
      trend: "green",
    },
    {
      time: "10:47:06",
      price: 40658,
      amount: 4413.4369,
      total: 7693,
      trend: "green",
    },
    {
      time: "10:47:06",
      price: 40658,
      amount: 4413.4369,
      total: 7693,
      trend: "green",
    },
  ];

  return (
    <div className="p-6  text-white min-h-screen">
      <div className="max-w-full mx-auto bg-gray-800 rounded-lg shadow-lg p-4">
        <h2 className="text-lg font-semibold text-gray-100 mb-4">
          Market Trades
        </h2>
        <table className="w-full table-auto text-left border-collapse">
          <thead>
            <tr className="bg-gray-700">
              <th className="py-2 px-4 text-sm font-medium text-gray-300">
                TIME
              </th>
              <th className="py-2 px-4 text-sm font-medium text-gray-300">
                PRICE (USDT)
              </th>
              <th className="py-2 px-4 text-sm font-medium text-gray-300">
                AMOUNT (BTC)
              </th>
              <th className="py-2 px-4 text-sm font-medium text-gray-300">
                TOTAL (USDT)
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((trade, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"
                } hover:bg-gray-600`}
              >
                <td className="py-2 px-4 text-sm">{trade.time}</td>
                <td
                  className={`py-2 px-4 text-sm font-medium ${
                    trade.trend === "green" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {trade.price}
                </td>
                <td className="py-2 px-4 text-sm">{trade.amount}</td>
                <td className="py-2 px-4 text-sm">{trade.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MarketTrades;
