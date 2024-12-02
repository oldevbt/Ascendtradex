import React from "react";
import Image from "next/image";
import PhoneTrade from "@/assets/phone-trade.png";

const LoginPage = () => {
  return (
    <div className="flex h-screen ">
      {/* Left Section */}
      <div className="relative flex-1">
        {/* Image */}
        <Image src={PhoneTrade} alt="" className="w-full h-full object-cover" />

        {/* Overlay and Text */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center">
          <p className="text-white text-3xl font-bold mb-20 text-center px-4">
            We Deal With The Stress, <br />
            While You Relax & Earn
          </p>
        </div>
      </div>
      {/* Right Section */}
      <div className="flex w-full lg:w-1/2 items-center justify-center bg-gray-900">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 text-center">
            Sign In Trading Account
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Stock trade Provider covering 6 asset classes and 2000+ products
          </p>
          <form>
            {/* Email Input */}
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
                placeholder="Email"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            {/* Password Input */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            {/* Keep me Logged in */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <input type="checkbox" id="keep-logged-in" className="mr-2" />
                <label
                  htmlFor="keep-logged-in"
                  className="text-sm text-gray-600"
                >
                  Keep me Logged in
                </label>
              </div>
              <a href="#" className="text-sm text-purple-600 hover:underline">
                Forgot Password?
              </a>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition"
            >
              Sign In
            </button>
          </form>
          <p className="text-center text-sm text-gray-600 mt-4">
            Do not have an account?{" "}
            <a href="#" className="text-purple-600 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
