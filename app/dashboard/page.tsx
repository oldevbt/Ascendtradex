"use client";

import { BsBoxArrowInUpRight, BsBoxArrowRight } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";

import Chart from "./_components/Chart";
import Symbol from "./_components/SymbolOverview";
import BalanceCard from "./_components/BalanceCard";
import WalletSection from "./_components/WalletSection";

// Define allowed deposit methods
type DepositMethods = "Litecoin" | "ethereum" | "usdt-trc20" | "usdt-erc20";

// Wallet addresses for each method
const walletAddresses: Record<DepositMethods, string> = {
  Litecoin: "Lcqc8xYyHy51g7FGw4k5Yve7euGui4cALK",
  ethereum: "0xC3070FF3E6dB5201BB36C7838c392616662D4416",
  "usdt-trc20": "TVgB9AnQsLhSvPxjqPbqCn1Lu3YM3Prq4Q",
  "usdt-erc20": "0xC3070FF3E6dB5201BB36C7838c392616662D4416",
};

const Dashboard = () => {
  const [mounted, setMounted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState<DepositMethods | "">(""); // Add type
  const [amount, setAmount] = useState(""); // To store user input for amount

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // Get wallet address based on selected method
  const getWalletAddress = () => {
    return selectedMethod
      ? walletAddresses[selectedMethod]
      : "No address available";
  };

  // Ensure client-side rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <p>Loading dashboard...</p>;

  const handleProceed = () => {
    if (!amount || !selectedMethod) {
      alert("Please enter a valid amount and select a method.");
      return;
    }
    setIsModalOpen(false); // Close the first modal
    setIsModal2Open(true); // Open the second modal
  };

  return (
    <div>
      <div className="rounded-lg border border-r-2 mb-4 border-dashed border-3 bg-[#705D3E] flex justify-between items-center">
        <h1 className="py-4 px-3">
          Empty Balance! Your balance is empty. Please make a deposit for your
          next trade. Click on the deposit button.
        </h1>
        <div className="text-black px-2 font-bold">
          <CgClose />
        </div>
      </div>

      {/* Balance Section */}
      <div className="bg-[#1F2129] py-5 rounded-lg flex flex-col">
        <div className="rounded-lg px-10 flex items-center justify-between">
          <BalanceCard />

          <div>
            <div className="flex items-center gap-x-2">
              <button className="bg-[#8256D0] rounded-lg py-2 px-3 flex gap-x-2 items-center text-white font-bold">
                <BsBoxArrowInUpRight />
                <h1>Withdraw</h1>
              </button>
              <button
                className="border-[#8256D0] bg-transparent border-2 rounded-lg py-2 px-3 flex gap-x-2 items-center text-white font-bold"
                onClick={toggleModal}
              >
                <BsBoxArrowRight />
                <h1>Deposit</h1>
              </button>

              {/* First Modal */}
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
                      <h2 className="text-lg font-semibold mb-4">
                        Deposit Wallet
                      </h2>

                      {/* Input Amount */}
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

                      {/* Select Method */}
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
                          <option value="bitcoin">Bitcoin</option>
                          <option value="ethereum">Ethereum</option>
                          <option value="usdt-trc20">USDT TRC20</option>
                          <option value="usdt-erc20">USDT ERC20</option>
                          <option value="usdc-erc20">USDC ERC20</option>
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

              {/* Second Modal */}
              {isModal2Open && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <div className="bg-gray-800 text-white max-w-md w-full rounded-lg shadow-lg p-6 relative">
                    <h2 className="text-xl font-bold mb-4 text-center">
                      Your deposit order has been placed.
                    </h2>

                    <p className="text-sm mb-4 text-center">
                      Please send{" "}
                      <span className="text-purple-400 font-semibold">
                        ${amount} worth of {selectedMethod.toUpperCase()}
                      </span>{" "}
                      to the address below.
                    </p>

                    <div className="text-center">
                      <h3 className="text-lg font-bold mb-2">
                        Payment to the following Wallet Address
                      </h3>

                      <div className="flex justify-center mb-4">
                        <QRCodeSVG
                          value={getWalletAddress()}
                          size={150}
                          bgColor="#1F2129"
                          fgColor="#ffffff"
                        />
                      </div>

                      <div className="bg-gray-700 rounded-md p-2 flex items-center justify-between">
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
            </div>
          </div>
        </div>

        <WalletSection />
      </div>

      <div className="flex flex-col gap-4 mt-8">
        <Symbol />
        <Chart />
      </div>
    </div>
  );
};

export default Dashboard;
