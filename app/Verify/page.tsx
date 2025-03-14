import React from "react";
import Image from "next/image";
import Reset from "@/assets/reset.png";
import Link from "next/link";

const VerifyPassword = () => {
  return (
    <div className="flex h-screen overflow-y-hidden">
      {/* Left Section */}
      <div className="relative flex-1 bg-gray-900 hidden lg:flex">
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
      <div className="flex w-full lg:w-1/2  h-screen lg:h-auto  items-center justify-center bg-gray-900">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
          {/* Logo and Header */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Verify Email</h1>
            <p className="text-gray-600">
              If you did not get an email please provide your email address.
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
            <Link href="/SignUp" className="text-purple-600 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>

      {/* Floating Notification (Optional) */}
    </div>
  );
};

export default VerifyPassword;
