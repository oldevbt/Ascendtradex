import React, { useState, useRef } from "react";
import { CgClose } from "react-icons/cg";
import { AiOutlineCheck } from "react-icons/ai"; // Import the checkmark icon

const Profile = () => {
  const checkboxes = [
    "Deposit",
    "Withdrawal",
    "Trade",
    "Account Update",
    "Login Notification",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-gray-300 text-sm mb-2">First Name</label>
          <input
            type="text"
            value=""
            className="w-full bg-gray-800 text-white p-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label className="block text-gray-300 text-sm mb-2">Last Name</label>
          <input
            type="text"
            value=""
            className="w-full bg-gray-800 text-white p-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label className="block text-gray-300 text-sm mb-2">Email</label>
          <input
            type="email"
            value=""
            className="w-full bg-gray-800 text-white p-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label className="block text-gray-300 text-sm mb-2">Country</label>
          <input
            type="text"
            value=""
            className="w-full bg-gray-800 text-white p-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label className="block text-gray-300 text-sm mb-2">
            Mobile Number
          </label>
          <input
            type="text"
            value=""
            className="w-full bg-gray-800 text-white p-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-20">
        <div>
          <h3 className="text-lg text-gray-300 mb-2">Email</h3>
          {checkboxes.map((label, index) => (
            <div key={index} className="flex items-center mb-3">
              <div className="relative">
                <input
                  type="checkbox"
                  checked
                  className="h-6 w-6 appearance-none rounded-md bg-gray-900 border-2 border-gray-600 checked:bg-[#7d4edc] checked:border-[#614499] focus:ring-2 focus:ring-[#614499]"
                />
                <div className="absolute left-0 -top-1 text-white w-full h-full flex justify-center items-center">
                  <AiOutlineCheck size={15} />
                </div>
              </div>
              <span className="ml-3 text-gray-300 text-sm">{label}</span>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-lg text-gray-300 mb-2">Notification</h3>
          {checkboxes.map((label, index) => (
            <div key={index} className="flex items-center mb-3">
              <div className="relative">
                <input
                  type="checkbox"
                  checked
                  className="h-6 w-6 appearance-none rounded-md bg-gray-900 border-2 border-gray-600 checked:bg-[#7d4edc] checked:border-[#614499] focus:ring-2 focus:ring-[#614499]"
                />
                <div className="absolute left-0 -top-1 text-white w-full h-full flex justify-center items-center">
                  <AiOutlineCheck size={15} />
                </div>
              </div>
              <span className="ml-3 text-gray-300 text-sm">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
