import React from "react";

const OnboardingForm: React.FC = () => {
  return (
    <div className="min-h-screen flex text-white font-poppins ">
      {/* Main Content */}
      <div className="flex-1 flex flex-col p-8">
        {/* Form */}
        <div className="p-8 rounded-lg max-w-2xl mx-auto">
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-2">
              Complete your Account Details
            </h2>
            <p className="text-gray-400">
              Kindly set account and provide your information below:
            </p>
          </div>

          <form className="space-y-4">
            {/* Account Currency */}
            <div>
              <label
                htmlFor="currency"
                className="block text-white text-left mb-2"
              >
                Account Currency
              </label>
              <select
                id="currency"
                className="w-full bg-black border border-gray-600 text-gray-400 px-4 py-2 rounded-lg focus:outline-none"
              >
                <option value="usd">USD - United States Dollar</option>
                <option value="eur">EUR - Euro</option>
                <option value="gbp">GBP - British Pound</option>
              </select>
            </div>

            {/* First Name */}
            <div>
              <label
                htmlFor="firstName"
                className="block text-white text-left mb-2"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="Your first name"
                className="w-full bg-black border border-gray-600 text-gray-400 px-4 py-2 rounded-lg focus:outline-none"
              />
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="lastName"
                className="block text-white text-left mb-2"
              >
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Your last name"
                className="w-full bg-black border border-gray-600 text-gray-400 px-4 py-2 rounded-lg focus:outline-none"
              />
            </div>

            {/* Address */}
            <div>
              <label
                htmlFor="address"
                className="block text-white text-left mb-2"
              >
                Address
              </label>
              <input
                id="address"
                type="text"
                placeholder="Your address"
                className="w-full bg-black border border-gray-600 text-gray-400 px-4 py-2 rounded-lg focus:outline-none"
              />
            </div>

            {/* State */}
            <div>
              <label
                htmlFor="state"
                className="block text-white text-left mb-2"
              >
                State
              </label>
              <input
                id="state"
                type="text"
                placeholder="Your state"
                className="w-full bg-black border border-gray-600 text-gray-400 px-4 py-2 rounded-lg focus:outline-none"
              />
            </div>

            {/* City */}
            <div>
              <label htmlFor="city" className="block text-white text-left mb-2">
                City
              </label>
              <input
                id="city"
                type="text"
                placeholder="Your city"
                className="w-full bg-black border border-gray-600 text-gray-400 px-4 py-2 rounded-lg focus:outline-none"
              />
            </div>

            {/* Zip Code */}
            <div>
              <label
                htmlFor="zipCode"
                className="block text-white text-left mb-2"
              >
                Zip Code
              </label>
              <input
                id="zipCode"
                type="text"
                placeholder="Your zipcode"
                className="w-full bg-black border border-gray-600 text-gray-400 px-4 py-2 rounded-lg focus:outline-none"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OnboardingForm;
