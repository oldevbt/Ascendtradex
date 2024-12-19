"use client";

import { useEffect, useState } from "react";
import { BsBoxArrowInUpRight, BsBoxArrowRight } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import Image from "next/image";
import BlueCircle from "@/assets/circle-blue.svg";
import PurpleCircle from "@/assets/circle-purple.svg";

const WalletSection = () => {
  const [walletData, setWalletData] = useState({
    deposit: 0,
    interest: 0,
    equity: 0,
    totalWithdrawal: 0,
  });

  useEffect(() => {
    // Fetch wallet data from the API
    const fetchWalletData = async () => {
      try {
        const response = await fetch("/api/getCurrentUser");
        if (!response.ok) throw new Error("Failed to fetch wallet data");

        const data = await response.json();

        setWalletData({
          deposit: data.balance || 0,
          interest: data.interestBalances || 0,
          equity: data.equity || 0,
          totalWithdrawal: data.totalWithdrawal || 0,
        });
      } catch (error) {
        console.error("Error fetching wallet data:", error);
      }
    };

    fetchWalletData();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 rounded-lg px-4">
        {/* Deposit Wallet */}
        <div className="border border-[#373A43] rounded-xl p-6">
          <div className="flex flex-col items-center gap-y-2">
            <div className="flex items-center gap-x-2">
              <Image src={PurpleCircle} alt="" />
              <h1 className="text-[#747584] text-[8px] lg:text-sm">
                Deposit Wallet
              </h1>
            </div>
            <div className="text-center text-lg">
              ${walletData.deposit.toFixed(2)}
            </div>
          </div>
        </div>

        {/* Interest Balances */}
        <div className="border border-[#373A43] rounded-xl p-6">
          <div className="flex flex-col items-center gap-y-2">
            <div className="flex items-center gap-x-2">
              <Image src={BlueCircle} alt="" />
              <h1 className="text-[#747584] text-[8px] lg:text-sm">
                Interest Balances
              </h1>
            </div>
            <div className="text-center text-lg">
              ${walletData.interest.toFixed(2)}
            </div>
          </div>
        </div>

        {/* Equity */}
        <div className="border border-[#373A43] rounded-xl p-6">
          <div className="flex flex-col items-center gap-y-2">
            <div className="flex items-center gap-x-2">
              <Image src={PurpleCircle} alt="" />
              <h1 className="text-[#747584] text-[8px] lg:text-sm">Equity</h1>
            </div>
            <div className="text-center text-lg">
              ${walletData.equity.toFixed(2)}
            </div>
          </div>
        </div>

        {/* Total Withdrawal */}
        <div className="border border-[#373A43] rounded-xl p-6">
          <div className="flex flex-col items-center gap-y-2">
            <div className="flex items-center gap-x-2">
              <Image src={PurpleCircle} alt="" />
              <h1 className="text-[#747584] text-[8px] lg:text-sm">
                Total Withdrawal
              </h1>
            </div>
            <div className="text-center text-lg">
              ${walletData.totalWithdrawal.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletSection;
