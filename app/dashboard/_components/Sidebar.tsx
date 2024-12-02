// app/components/Sidebar.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import { BsWallet2 } from "react-icons/bs";
import {
  FaHome,
  FaCopy,
  FaSignal,
  FaWallet,
  FaUserCheck,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { RxClipboardCopy, RxDashboard } from "react-icons/rx";
import { SlGraph } from "react-icons/sl";
import Modal from "../_components/Modal";

const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="h-screen font-poppins w-64 bg-gray-800 text-white flex flex-col">
      <h1 className="text-xl font-bold p-4 border-b border-gray-700">
        AscendTradex
      </h1>
      <nav className="flex-1 flex-col p-4  ">
        <Link href="/dashboard" className="text-white hover:text-purple-200">
          <div className="flex items-center mb-5 space-x-3 hover:bg-gray-700 p-2 rounded">
            <RxDashboard />
            <span>Home</span>
          </div>
        </Link>
        <Link
          href="/dashboard/Copy-Trading"
          className="text-white hover:text-purple-400"
        >
          <div className="flex items-center mb-5 space-x-3 hover:bg-gray-700 p-2 rounded">
            <RxClipboardCopy />
            <span>Copy Trading</span>
          </div>
        </Link>
        <Link
          href="/dashboard/Signals"
          className="text-white hover:text-purple-400"
        >
          <div className="flex items-center mb-5 space-x-3 hover:bg-gray-700 p-2 rounded">
            <FaSignal />
            <span>Signals</span>
          </div>
        </Link>
        <Link
          href="/dashboard/Live-Trading"
          className="text-white hover:text-purple-400"
        >
          <div className="flex items-center  mb-5 space-x-3 hover:bg-gray-700 p-2 rounded">
            <SlGraph />
            <span>Live Trade</span>
          </div>
        </Link>
        <Link
          href="/dashboard/Transactions"
          className="text-white hover:text-purple-400"
        >
          <div className="flex items-center mb-5 space-x-3 hover:bg-gray-700 p-2 rounded">
            <BsWallet2 />
            <span>Transactions</span>
          </div>
        </Link>
        <Link
          href="/dashboard/Kyc-Verification"
          className="text-white hover:text-purple-400"
        >
          <div className="flex items-center mb-5 space-x-3 hover:bg-gray-700 p-2 rounded">
            <FaUserCheck />
            <span>KYC Verification</span>
          </div>
        </Link>

        <button
          className="flex items-center mb-5 space-x-3 hover:bg-gray-700 p-2 rounded w-full text-left"
          onClick={() => setIsModalOpen(true)}
        >
          <IoSettingsOutline />
          <span>Settings</span>
        </button>
      </nav>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Link href="/logout" className="text-white hover:text-purple-400">
        <div className="flex items-center space-x-3 p-4 hover:bg-red-700">
          <FaSignOutAlt />
          <span>Logout</span>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
