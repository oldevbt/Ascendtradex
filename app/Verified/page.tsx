import React from "react";
import Image from "next/image";
import Reset from "@/assets/reset.png";
import Link from "next/link";

const VerifiedPassword = () => {
  return (
    <div className="flex h-screen overflow-y-hidden">
      {/* Left Section */}
      <div className="relative flex-1 bg-gray-900">
        {/* Image */}
        <Image
          src={Reset}
          alt="Reset Password Illustration"
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
          {/* Success Message */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">
              Email Verification Successful!
            </h1>
            <p className="text-gray-600 mt-2">
              Your has been verified has been reset successfully. Click below to
              proceed to the onboarding process.
            </p>
          </div>

          {/* Onboarding Button */}
          <div className="mt-6 text-center">
            <Link
              href="/onboarding"
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition inline-block"
            >
              Proceed to Onboarding
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifiedPassword;
