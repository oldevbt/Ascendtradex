import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import Profile from "./Profile";
import Referral from "./Referral";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("profile");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black  bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#242731] text-white w-full h-full md:w-[800px] md:h-[850px] max-w-[100%] max-h-[95%] rounded-xl border border-gray-500 shadow-lg p-5 relative overflow-auto">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-200"
          onClick={onClose}
        >
          <CgClose size={20} />
        </button>

        {/* Modal Header */}
        <h2 className="text-xl font-bold mb-4 text-center">Account Settings</h2>

        {/* Tab Navigation */}
        <div className="flex justify-center items-center px-4 space-x-4 mb-6">
          <button
            onClick={() => setActiveTab("profile")}
            className={`py-2 px-8  text-sm  p-4 rounded-full ${
              activeTab === "profile"
                ? "text-[#614499] bg-[#191B20]"
                : "bg-gray-700"
            }`}
          >
            Profile
          </button>
          <button
            onClick={() => setActiveTab("referrals")}
            className={`py-2 px-8  text-sm  rounded-full ${
              activeTab === "referrals"
                ? "text-[#614499] bg-[#191B20]"
                : "bg-gray-700"
            }`}
          >
            Referrals
          </button>
          <button
            onClick={() => setActiveTab("password")}
            className={`py-2 px-8 text-sm  rounded-full ${
              activeTab === "password"
                ? "text-[#614499] bg-[#191B20]"
                : "bg-gray-700"
            }`}
          >
            Password
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "profile" && <Profile />}
        {activeTab === "referrals" && <Referral />}
        {activeTab === "password" && (
          <div className="space-y-4 mt-6 flex flex-col h-[50vh]">
            <div>
              <label className="block text-gray-300 text-sm mb-2">
                Current Password
              </label>
              <input
                type="password"
                placeholder="Enter your current password"
                className="w-full bg-gray-800 text-white p-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-2">
                New Password
              </label>
              <input
                type="password"
                placeholder="Enter your new password"
                className="w-full bg-gray-800 text-white p-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="flex justify-center mt-10">
          <button
            onClick={onClose}
            className="bg-purple-600 px-6 py-3 rounded-md text-sm font-medium text-white hover:bg-purple-700"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
