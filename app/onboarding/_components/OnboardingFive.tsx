import React, { useState } from "react";

const OnboardingFour: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className=" flex items-center justify-center  text-white px-4">
      <div className=" p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Title */}
        <h2 className="text-xl font-bold mb-2">
          Which asset classes Interest you the most?
        </h2>

        {/* Subtitle */}
        <p className="text-sm text-gray-400 mb-6">Chose one or more options</p>

        {/* Options */}
        <div className="space-y-4">
          {["Stocks", "Cryptocurrency", "Venture Capital", "Real Estate"].map(
            (option) => (
              <div
                key={option}
                onClick={() => handleOptionSelect(option)}
                className={`flex items-center space-x-4 p-4 border rounded-lg cursor-pointer transition-all ${
                  selectedOption === option
                    ? "border-purple-500 bg-gray-700"
                    : "border-gray-600 hover:border-gray-500"
                }`}
              >
                {/* Custom Checkbox */}
                <div
                  className={`h-5 w-5 flex items-center justify-center rounded border-2 transition-all ${
                    selectedOption === option
                      ? "bg-purple-500 border-purple-500"
                      : "bg-gray-800 border-gray-600"
                  }`}
                >
                  {selectedOption === option && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                {/* Option Text */}
                <span className="text-sm">{option}</span>
              </div>
            )
          )}
        </div>

        {/* Navigation Buttons */}
      </div>
    </div>
  );
};

export default OnboardingFour;
