import { useState, useEffect } from "react";
import Image from "next/image";

const BalanceCard = () => {
  const [balance, setBalance] = useState({
    usd: 0.0,
    btc: 0.0, // Hardcoded BTC value
  });

  const fetchBalance = async () => {
    try {
      const response = await fetch("/api/getCurrentUser", { method: "GET" });
      if (!response.ok) {
        throw new Error("Failed to fetch balance");
      }
      const data = await response.json();
      console.log(data);

      // Assuming the balance is part of the response. Adjust according to your API structure.
      setBalance({
        usd: data.balance,
        btc: data.Btcbalance, // Hardcoded BTC value
      });
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
  };

  useEffect(() => {
    fetchBalance();
  }, []);

  return (
    <div className="flex flex-col font-poppins space-y-1 py-4 px-8">
      <h1 className="font-bold text-[18px]">Total Balance</h1>
      <h1 className="text-[40px] font-bold">
        ${balance.usd.toFixed(2)}{" "}
        <span className="font-inter bg-[#FF9E38] rounded-full text-[18px] px-4 py-2">
          USD
        </span>
      </h1>
      <h1 className="text-[#808191] font-poppins text-[24px] font-normal">
        {balance.btc} BTC
      </h1>
    </div>
  );
};

export default BalanceCard;
