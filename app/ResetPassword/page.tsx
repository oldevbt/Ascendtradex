"use client";

import React, { useState, FormEvent, ChangeEvent } from "react";
import Image from "next/image";
import Reset from "@/assets/reset.png";

interface Message {
  type: "success" | "error";
  text: string;
}

const VerifyPassword: React.FC = () => {
  const [email, setEmail] = useState<string>(""); // State for email input
  const [message, setMessage] = useState<Message | null>(null); // State for success or error message
  const [loading, setLoading] = useState<boolean>(false); // State for form submission

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/forgotPassword", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        setMessage({ type: "success", text: data.message });
      } else {
        setMessage({ type: "error", text: data.message });
      }
    } catch (error) {
      setLoading(false);
      setMessage({
        type: "error",
        text: "Something went wrong. Try again later.",
      });
      console.error("Error submitting reset password request:", error);
    }
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <div className="flex h-screen overflow-y-hidden">
      {/* Left Section */}
      <div className="relative flex-1 bg-gray-900 hidden lg:flex">
        <Image
          src={Reset}
          alt="Reset Password Illustration"
          className="w-full h-[95%] object-cover flex justify-center rounded-3xl my-5"
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-end justify-center">
          <p className="text-white text-3xl font-bold mb-20 text-center px-4">
            We Deal With The Stress, <br />
            While You Relax & Earn
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex w-full lg:w-1/2 h-screen lg:h-auto items-center justify-center bg-gray-900">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Reset Password</h1>
            <p className="text-gray-600">
              Enter your email to reset your password
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
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
                value={email}
                onChange={handleEmailChange}
                className="w-full border border-gray-300 text-black px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 px-4 rounded-md transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-purple-600 text-white hover:bg-purple-700"
              }`}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>

          {/* Message */}
          {message && (
            <div
              className={`mt-4 text-center ${
                message.type === "success" ? "text-green-500" : "text-red-500"
              }`}
            >
              {message.text}
            </div>
          )}

          <p className="text-center text-sm text-gray-600 mt-20">
            Already have an account?{" "}
            <a href="#" className="text-purple-600 hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyPassword;
