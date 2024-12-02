import React from "react";
import Image from "next/image";
import Reset from "@/assets/reset.png";

const ResetPassword = () => {
  return (
    <div className="flex h-screen overflow-y-hidden">
      {/* Left Section */}
      <div className="relative flex-1 bg-gray-900">
        {/* Image */}
        <Image
          src={Reset}
          alt=""
          className="w-full h-[95%] object-cover flex justify-center rounded-3xl my-5"
        />

        {/* Overlay and Text */}
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-end justify-center">
          <p className="text-white text-3xl font-bold mb-20 text-center px-4">
            We Deal With The Stress, <br />
            While You Relax & Earn
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex w-full lg:w-1/2 items-center justify-center bg-gray-900">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
          {/* Logo and Header */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Reset Password</h1>
            <p className="text-gray-600">
              To recover your account please provide your email address.
            </p>
          </div>

          {/* Form */}
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter email here"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition"
            >
              Submit
            </button>
          </form>

          {/* Already have an account */}
          <p className="text-center text-sm text-gray-600 mt-20">
            Already have an account?{" "}
            <a href="#" className="text-purple-600 hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </div>

      {/* Floating Notification (Optional) */}
      <div className="fixed bottom-4 left-4 bg-purple-600 text-white rounded-lg p-4 shadow-lg flex items-center space-x-3">
        <div className="w-10 h-10 bg-white text-purple-600 rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405C19.865 15.27 20 14.62 20 14c0-2.21-1.79-4-4-4s-4 1.79-4 4c0 .62.135 1.27.405 1.595L9 21H4v-2l9-9c.62-.62 1.27-.905 1.595-.905C15.275 9 15 8.275 15 8c0-2.21-1.79-4-4-4s-4 1.79-4 4c0 .62.135 1.27.405 1.595L9 21H4v-2l9-9c.62-.62 1.27-.905 1.595-.905"
            />
          </svg>
        </div>
        <div>
          <p className="text-sm font-medium">New Registration</p>
          <p className="text-xs">
            Daryl from Garland registered on the site via Email
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
