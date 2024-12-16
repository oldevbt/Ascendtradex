"use client";
import React, { useState } from "react";
import Image from "next/image";
import PhoneTrade from "@/assets/phone-trade.png";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RingLoader } from "react-spinners"; // Import the spinner
import { useRouter } from "next/navigation";
import Titan from "@/assets/Ascend Logo.png";
import Select from "react-select";
import countryList from "react-select-country-list";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    country: { value: "US", label: "United States" }, // Default country
    number: "",
    referralId: "", // New field for referral ID
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false); // Add loading state
  const router = useRouter();

  // Country options from react-select-country-list
  const countryOptions = countryList().getData();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleCountryChange = (
    newValue: { value: string; label: string } | null
  ) => {
    if (newValue) {
      setFormData({ ...formData, country: newValue });
    } else {
      toast.error("Please select a valid country.");
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate fields
    const {
      email,
      firstName,
      lastName,
      country,
      number,
      referralId,
      password,
      confirmPassword,
    } = formData;

    if (
      !email ||
      !password ||
      !confirmPassword ||
      !firstName ||
      !lastName ||
      !country ||
      !number
    ) {
      toast.error("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    setLoading(true); // Set loading to true when submitting

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          firstName,
          lastName,
          country: country.label, // Send only the label of the country
          number,
          referralId, // Include referral ID in the request body
          password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        toast.error(errorData.error || "Failed to sign up.");
        setLoading(false); // Set loading to false after the request
        return;
      }

      const data = await response.json();
      toast.success("Please check your email for verification.");
      router.push("/Verify");
      setFormData({
        email: "",
        firstName: "",
        lastName: "",
        country: { value: "US", label: "United States" },
        number: "",
        referralId: "", // Reset referral ID
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setLoading(false); // Always set loading to false after request completes
    }
  };

  return (
    <div className="flex max-h-screen overflow-y-hidden">
      {/* Left Section */}
      <div className="relative flex-1 hidden lg:flex">
        <Image
          src={PhoneTrade}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center">
          <p className="text-white text-3xl font-bold mb-20 text-center px-4">
            We Deal With The Stress, <br /> While You Relax & Earn
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex w-full lg:w-1/2 lg:mx-auto mx-3 h-screen lg:h-auto items-center justify-center bg-gray-900">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
          <div className="flex items-center mb-8">
            <Image src={Titan} alt="Logo" className="w-10 h-10" />
            <h1 className="text-lg font-bold text-black">AscendTradex</h1>
          </div>
          <div className="text-center mb-6 mt-6">
            <h1 className="text-3xl font-bold text-gray-800">Sign Up</h1>
            <p className="text-gray-600">
              We handle the stress so you can relax and earn
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            {/* Mobile Number */}

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
                  className="w-full border border-gray-300 px-4 py-2 rounded-md"
                  value={formData.email}
                  onChange={handleChange}
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
                  className="w-full border border-gray-300 px-4 py-2 rounded-md"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Second Row: Last Name & Country */}
            <div className="flex gap-4 mb-4">
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
                  className="w-full border border-gray-300 px-4 py-2 rounded-md"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="country"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Country
                </label>
                <Select
                  id="country"
                  options={countryOptions}
                  value={formData.country}
                  onChange={handleCountryChange}
                  className="w-full"
                />
              </div>
            </div>

            {/* Third Row: Password & Confirm Password */}
            <div className="flex gap-4 mb-4">
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
                  className="w-full border border-gray-300 px-4 py-2 rounded-md"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="flex-1">
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
                  className="w-full border border-gray-300 px-4 py-2 rounded-md"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex gap-4 mb-4">
              <div className="flex-1">
                <label
                  htmlFor="number"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Mobile Number
                </label>
                <input
                  type="text"
                  id="number"
                  placeholder="Mobile Number"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md"
                  value={formData.number}
                  onChange={handleChange}
                />
              </div>

              {/* Referral ID */}
              <div className="flex-1">
                <label
                  htmlFor="referralId"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Referral ID (Optional)
                </label>
                <input
                  type="text"
                  id="referralId"
                  placeholder="Referral ID"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md"
                  value={formData.referralId}
                  onChange={handleChange}
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition"
              disabled={loading}
            >
              {loading ? (
                <RingLoader color="white" loading={loading} size={24} />
              ) : (
                "Sign Up"
              )}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <Link href="/Login" className="text-purple-600 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default SignUpPage;
