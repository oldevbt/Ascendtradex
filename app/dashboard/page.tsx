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
import btcImage from "@/assets/btc.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bitcoin from "@/assets/bitcoin.png";

// Define allowed deposit methods
type DepositMethods =
  | "BTC"
  | "Litecoin"
  | "ethereum"
  | "usdt-trc20"
  | "usdt-erc20";

// Wallet addresses for each method
const walletAddresses: Record<DepositMethods, string> = {
  BTC: "bc1qduppyqrnlnewzs2zxte3hmvxxa9zpqqkmtqm2d",
  Litecoin: "Lcqc8xYyHy51g7FGw4k5Yve7euGui4cALK",
  ethereum: "0xC3070FF3E6dB5201BB36C7838c392616662D4416",
  "usdt-trc20": "TVgB9AnQsLhSvPxjqPbqCn1Lu3YM3Prq4Q",
  "usdt-erc20": "0xC3070FF3E6dB5201BB36C7838c392616662D4416",
};

// Wallet image URLs for each method
const walletImages: Record<DepositMethods, StaticImageData> = {
  BTC: btcImage,
  Litecoin: LitecoinImage,
  ethereum: EthereumImage,
  "usdt-trc20": UsdtTrc20Image,
  "usdt-erc20": UsdtTrc20Image,
};

const Dashboard = () => {
  const [mounted, setMounted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState<DepositMethods | "">("");
  const [amount, setAmount] = useState("");
  const [wallet, setWallet] = useState("");
  const [walletTwo, setWalletTwo] = useState("");

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const toggleWithdrawModal = () =>
    setIsWithdrawModalOpen(!isWithdrawModalOpen);

  const CopyButton = ({
    fetchWalletAddress,
  }: {
    fetchWalletAddress: () => string;
  }) => {
    const handleCopyAddress = () => {
      const walletAddress = fetchWalletAddress();
      navigator.clipboard
        .writeText(walletAddress)
        .then(() => {
          toast.success("Copied to clipboard!");
        })
        .catch(() => {
          toast.error("Failed to copy!");
        });
    };

    return (
      <button
        className="bg-purple-600 text-white px-2 py-1 rounded-md ml-2 hover:bg-purple-700"
        onClick={handleCopyAddress}
      >
        Copy
      </button>
    );
  };

  const [balance, setBalance] = useState({
    usd: 0.0,
    btc: 0, // Hardcoded BTC value
  });

  const fetchBalance = async () => {
    try {
      const response = await fetch("/api/getCurrentUser", { method: "GET" });
      if (!response.ok) {
        throw new Error("Failed to fetch balance");
      }
      const data = await response.json();

      // Assuming the balance is part of the response. Adjust according to your API structure.
      setBalance({
        usd: data.balance || 0.0,
        btc: data.Btcbalance, // Hardcoded BTC value
      });
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
  };

  useEffect(() => {
    fetchBalance();
  }, []);

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
    <div className="">
      {/* <div className="rounded-lg border  w-[370px] lg:w-full border-dashed bg-[#705D3E] pt-4 my-4 p-4  flex flex-wrap justify-between items-center">
        <h1 className="text-white  text-[6px] lg:text-sm">
          Empty Balance! Your balance is empty. Please make a deposit for your
          next trade. Click on the deposit button.
        </h1>

        <div className="text-black text-lg cursor-pointer">
          <CgClose />
        </div>
      </div> */}

      {/* Balance Section */}
      <div className="bg-[#1F2129] p-6 rounded-lg flex flex-col gap-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Balance Card */}
          <BalanceCard />

          {/* Button Group */}
          <div className="flex flex-row gap-2">
            {/* Withdraw Button */}
            <button
              className="bg-[#8256D0] rounded-lg py-3 px-6 text-white flex items-center gap-x-2 font-bold transition duration-200 hover:bg-[#6a45a5]"
              onClick={toggleWithdrawModal}
            >
              <div className="text-lg">
                <BsBoxArrowInUpRight />
              </div>
              Withdraw
            </button>

            {/* Deposit Button */}
            <button
              className="border-2 border-[#8256D0] bg-transparent rounded-lg py-3 px-6 text-white flex items-center gap-x-2 font-bold transition duration-200 hover:bg-[#8256D0] hover:text-white"
              onClick={toggleModal}
            >
              <div className="text-lg">
                <BsBoxArrowRight />
              </div>
              Deposit
            </button>
          </div>
        </div>
        <WalletSection />
      </div>

      {/* Deposit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 rounded-xl w-[1400px] max-w-lg h-[70vh] items-center mx-3 md:h-[70vh] p-6 relative">
            <button
              onClick={toggleModal}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              <CgClose />
            </button>

            <div className=" font-poppins text-left">
              <div className="flex flex-col">
                <div className="flex flex-row gap-x-3">
                  <div>
                    <Image src={bitcoin} alt="" className="w-10 h-10" />
                  </div>
                  <div>
                    <h2 className="text-lg font-medium  font-poppins text-white">
                      Deposit Funds
                    </h2>
                    <h2 className="text-[13px] font-medium  font-poppins text-[#808191]">
                      USD
                    </h2>
                  </div>
                </div>

                <div className="flex items-center gap-x-2">
                  <h1 className="text-[40px] font-semibold">
                    ${balance.usd.toFixed(2)}{" "}
                  </h1>
                  <div className="text-[16px] font-semibold bg-blue-400 rounded-lg px-3">
                    USD
                  </div>
                </div>
                <div className="text-gray-500">Account Balance</div>

                <div className="border-b-[0.5px] my-10 border-gray-500"></div>
              </div>

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
                  <option value="BTC">BTC</option>
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
      {/* Deposit Modal */}
      {isWithdrawModalOpen && (
        <div className="fixed inset-0  bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 rounded-xl w-[1400px] max-w-lg h-[70vh] items-center mx-3 md:h-[70vh] p-6 relative">
            <button
              onClick={toggleWithdrawModal}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              <CgClose />
            </button>

            <div className=" font-poppins">
              <div className="flex flex-col">
                <div className="flex flex-row gap-x-3">
                  <div>
                    <Image src={bitcoin} alt="" className="w-10 h-10" />
                  </div>
                  <div>
                    <h2 className="text-lg font-medium  font-poppins text-white">
                      Withdraw Funds
                    </h2>
                    <h2 className="text-[13px] font-medium  font-poppins text-[#808191]">
                      USD
                    </h2>
                  </div>
                </div>

                <div className="flex items-center gap-x-2">
                  <h1 className="text-[40px] font-semibold">
                    ${balance.usd.toFixed(2)}{" "}
                  </h1>
                  <div className="text-[16px] font-semibold bg-blue-400 rounded-lg px-3">
                    USD
                  </div>
                </div>
                <div className="text-gray-500">Account Balance</div>

                <div className="border-b-[0.5px] mt-4 border-gray-500"></div>
              </div>

              <div className="mt-6 text-left">
                <label className="text-gray-400 text-sm mb-2 block">
                  Select Wallet
                </label>
                <select
                  className="w-full bg-gray-700 text-white rounded-md py-2 px-4 outline-none"
                  value={selectedMethod}
                  onChange={(e) =>
                    setSelectedMethod(e.target.value as DepositMethods)
                  }
                >
                  <option value=""> Deposit Wallet</option>
                  <option value="BTC">Interest Wallet</option>
                </select>
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
                  <option value="Ethereum">Ethereum</option>
                  <option value="Bitcoin">Bitcoin</option>
                  <option value="Usdt-Tr20">Usdt-Tr20</option>
                </select>
              </div>
            </div>

            <div className="text-left mt-4">
              <label className="text-gray-400 text-sm mb-2 block">Wallet</label>
              <input
                type="text"
                placeholder=""
                className="w-full bg-gray-700 text-white rounded-md py-2 px-4 outline-none"
                value={wallet}
                onChange={(e) => setWallet(e.target.value)}
              />
            </div>

            <div className="text-left mt-4">
              <label className="text-gray-400 text-sm mb-2 block">
                Enter Amount (USD)
              </label>
              <input
                type="text"
                placeholder=""
                className="w-full bg-gray-700 text-white rounded-md py-2 px-4 outline-none"
                value={walletTwo}
                onChange={(e) => setWalletTwo(e.target.value)}
              />
            </div>
            <button
              onClick={handleProceed}
              className="mt-6 bg-purple-600 w-full py-2 rounded-md text-white hover:bg-purple-500"
            >
              Proceed
            </button>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {isModal2Open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ">
          <div className="bg-gray-800 rounded-xl w-[1400px] pt-20 max-w-lg h-[70vh] items-center mx-3 md:h-[70vh] p-6 relative">
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
                <span className="lg:text-sm text-[10px]">
                  {getWalletAddress()}
                </span>
                <CopyButton fetchWalletAddress={getWalletAddress} />
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
