"use client";

import { BsBoxArrowInUpRight, BsBoxArrowRight } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";

import Chart from "./_components/Chart";
import Symbol from "./_components/SymbolOverview";
import BalanceCard from "./_components/BalanceCard";
import WalletSection from "./_components/WalletSection";
import LitecoinImage from "@/assets/barcode/Usdt TRC20Exodus.jpg";
import EthereumImage from "@/assets/barcode/ExodusEth.jpg";
import UsdtTrc20Image from "@/assets/barcode/LITEExodus.jpg";

// Define allowed deposit methods
type DepositMethods = "Litecoin" | "ethereum" | "usdt-trc20" | "usdt-erc20";

// Wallet addresses for each method
const walletAddresses: Record<DepositMethods, string> = {
  Litecoin: "Lcqc8xYyHy51g7FGw4k5Yve7euGui4cALK",
  ethereum: "0xC3070FF3E6dB5201BB36C7838c392616662D4416",
  "usdt-trc20": "TVgB9AnQsLhSvPxjqPbqCn1Lu3YM3Prq4Q",
  "usdt-erc20": "0xC3070FF3E6dB5201BB36C7838c392616662D4416",
};

// Wallet image URLs for each method
const walletImages: Record<DepositMethods, StaticImageData> = {
  Litecoin: LitecoinImage,
  ethereum: EthereumImage,
  "usdt-trc20": UsdtTrc20Image,
  "usdt-erc20": UsdtTrc20Image,
};

const Dashboard = () => {
  const [mounted, setMounted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState<DepositMethods | "">("");
  const [amount, setAmount] = useState("");

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const getWalletAddress = () =>
    selectedMethod ? walletAddresses[selectedMethod] : "No address available";

  const getWalletImage = () =>
    selectedMethod ? walletImages[selectedMethod] : "";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <p>Loading dashboard...</p>;

  const handleProceed = () => {
    if (!amount || !selectedMethod) {
      alert("Please enter a valid amount and select a method.");
      return;
    }
    setIsModalOpen(false);
    setIsModal2Open(true);
  };

  return (
    <div className="px-4 lg:px-10">
      <div className="rounded-lg border border-dashed bg-[#705D3E] mb-4 p-4  flex flex-wrap justify-between items-center">
        <h1 className="text-white">
          Empty Balance! Your balance is empty. Please make a deposit for your
          next trade. Click on the deposit button.
        </h1>
        <div className="text-black text-lg cursor-pointer">
          <CgClose />
        </div>
      </div>

      {/* Balance Section */}
      <div className="bg-[#1F2129] p-6 rounded-lg flex flex-col gap-4">
        <div className="flex flex-col lg:flex-row justify-between gap-4">
          <BalanceCard />
          <div className="flex flex-wrap gap-2">
            <button className="bg-[#8256D0] rounded-lg py-2 px-4 text-white flex items-center gap-x-2 font-bold">
              <BsBoxArrowInUpRight />
              Withdraw
            </button>
            <button
              className="border-[#8256D0] bg-transparent border-2 rounded-lg py-2 px-4 text-white flex items-center gap-x-2 font-bold"
              onClick={toggleModal}
            >
              <BsBoxArrowRight />
              Deposit
            </button>
          </div>
        </div>
        <WalletSection />
      </div>

      {/* Deposit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 rounded-lg w-[90%] max-w-md h-[400px] p-6 relative">
            <button
              onClick={toggleModal}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              <CgClose />
            </button>

            <div className="text-center font-poppins">
              <h2 className="text-lg font-semibold mb-4 text-white">
                Deposit Wallet
              </h2>
              <div className="text-left">
                <label className="text-gray-400 text-sm mb-2 block">
                  Enter Amount (USD)
                </label>
                <input
                  type="number"
                  placeholder="Enter amount"
                  className="w-full bg-gray-700 text-white rounded-md py-2 px-4 outline-none"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              <div className="mt-6 text-left">
                <label className="text-gray-400 text-sm mb-2 block">
                  Select Method
                </label>
                <select
                  className="w-full bg-gray-700 text-white rounded-md py-2 px-4 outline-none"
                  value={selectedMethod}
                  onChange={(e) =>
                    setSelectedMethod(e.target.value as DepositMethods)
                  }
                >
                  <option value="">Select Deposit Method</option>
                  <option value="Litecoin">Litecoin</option>
                  <option value="ethereum">Ethereum</option>
                  <option value="usdt-trc20">USDT TRC20</option>
                  <option value="usdt-erc20">USDT ERC20</option>
                </select>
              </div>
              <button
                onClick={handleProceed}
                className="mt-6 bg-purple-600 w-full py-2 rounded-md text-white hover:bg-purple-500"
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {isModal2Open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 text-white max-w-md w-full rounded-lg p-6 relative">
            <h2 className="text-xl font-bold mb-4 text-center">
              Deposit Order Placed
            </h2>
            <p className="text-sm mb-4 text-center">
              Send{" "}
              <span className="text-purple-400 font-semibold">
                ${amount} worth of {selectedMethod.toUpperCase()}
              </span>{" "}
              to the address below.
            </p>
            <div className="text-center">
              <Image
                src={getWalletImage()}
                alt="Wallet"
                className="w-32 h-32 mx-auto object-contain"
              />
              <div className="bg-gray-700 rounded-md p-2 mt-4 flex items-center justify-between">
                <span className="text-sm">{getWalletAddress()}</span>
                <button
                  className="bg-purple-600 text-white px-2 py-1 rounded-md ml-2 hover:bg-purple-700"
                  onClick={() =>
                    navigator.clipboard.writeText(getWalletAddress())
                  }
                >
                  Copy
                </button>
              </div>
            </div>
            <button
              onClick={() => setIsModal2Open(false)}
              className="bg-purple-600 text-white px-6 py-2 rounded-md shadow-md mt-4 block mx-auto hover:bg-purple-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-4 mt-8">
        <Symbol />
        <Chart />
      </div>
    </div>
  );
};

export default Dashboard;
