import React from "react";
import Image from "next/image";
import PhoneTrade from "@/assets/phone-trade.png";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <div className="flex max-h-screen overflow-y-hidden">
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
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
          <div className="text-center mb-6 mt-6">
            <h1 className="text-3xl font-bold text-gray-800">Sign Up</h1>
            <p className="text-gray-600">
              We handle the stress so you can relax and earn
            </p>
          </div>

          <form>
            {/* First Row: Email & First Name */}
            <div className="flex gap-4 mb-4">
              <div className="flex-1">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  E-Mail Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="E-Mail Address"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="firstName"
                  className="block text-gray-700 font-medium mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
            </div>

            {/* Second Row: Last Name & Country */}
            <div className="flex-1 gap-4 mb-4">
              <div className="flex-1">
                <label
                  htmlFor="lastName"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="country"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Country
                </label>
                <select
                  id="country"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                >
                  <option>Nigeria</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                </select>
              </div>
            </div>

            {/* Mobile & Password */}
            <div className="flex gap-4 mb-4">
              <div className="flex-1">
                <label
                  htmlFor="mobile"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Mobile
                </label>
                <input
                  type="tel"
                  id="mobile"
                  placeholder="+"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              <div className="flex-1">
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
            </div>

            {/* Confirm Password */}
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 font-medium mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            {/* Agreement Checkbox */}
            <div className="flex items-center mb-4">
              <input type="checkbox" id="agree" className="mr-2" />
              <label htmlFor="agree" className="text-sm text-gray-600">
                I agree with Regulations
              </label>
            </div>

            {/* Sign-Up Button */}
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition"
            >
              Sign Up
            </button>
          </form>

          {/* Already Have Account */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <Link href="/Login" className="text-purple-600 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
