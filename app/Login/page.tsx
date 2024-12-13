"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import PhoneTrade from "@/assets/phone-trade.png";
import { RingLoader } from "react-spinners"; // Add a spinner component
import Link from "next/link";
import Titan from "@/assets/Ascend Logo.png";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Track loading state

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true); // Set loading state to true when form is submitted

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false, // Prevent automatic redirect
    });

    setLoading(false); // Reset loading state after login attempt

    if (result?.error) {
      toast.error("Invalid email or password.");
    } else {
      toast.success("Login successful!");
      setTimeout(() => {
        window.location.href = "/dashboard"; // Adjust to your desired path
      }, 2000); // Delay to allow the user to see the success message
    }
  };

  return (
    <div className="flex h-screen">
      <ToastContainer position="top-right" autoClose={3000} />
      {/* Left Section */}
      <div className="relative flex-1 hidden lg:flex">
        <Image src={PhoneTrade} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center">
          <p className="text-white text-3xl font-bold mb-20 text-center px-4">
            We Deal With The Stress, <br />
            While You Relax & Earn
          </p>
        </div>
      </div>
      {/* Right Section */}
      <div className="flex w-full lg:w-1/2 lg:mx-auto mx-3  h-screen lg:h-auto  items-center justify-center bg-gray-900">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <div className="flex items-center mb-8 ">
            <Image src={Titan} alt="Logo" className="w-10 h-10" />
            <h1 className="text-lg font-bold text-black">AscendTradex</h1>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 text-center">
            Sign In Trading Account
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Stock trade Provider covering 6 asset classes and 2000+ products
          </p>
          <form onSubmit={handleSubmit}>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full border border-gray-300 text-black px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full border border-gray-300 text-black px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            {/* Submit Button */}
            {/* <p className="text-center text-sm text-gray-600 mt-4">
              <Link href="/SignUp" className="text-purple-600 hover:underline">
                forgot password
              </Link>
            </p> */}
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition"
              disabled={loading} // Disable the button when loading
            >
              {loading ? (
                <>
                  <RingLoader size={20} color={"#fff"} /> {/* Spinner */}
                  <span className="ml-2">Logging in...</span>{" "}
                  {/* Loading text */}
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>
          <p className="text-center text-sm text-gray-600 mt-4">
            Do not have an account?{" "}
            <Link href="/SignUp" className="text-purple-600 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
