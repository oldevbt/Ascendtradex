"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import Step1 from "./OnboardingOne";
import Step2 from "./OnboardingTwo";
import Step3 from "./OnboardingFour";
import Step4 from "./OnboardingFive";
import Step5 from "./OnboardingSix";
import Step6 from "./OnboardingSeven";
import Step7 from "./OnboardingEight";

const steps = [Step1, Step2, Step3, Step4, Step5, Step6, Step7];

const Onboarding: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter(); // Initialize useRouter

  const CurrentStepComponent = steps[currentStep];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      router.push("/dashboard"); // Redirect to the dashboard on the last step
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1e1e23]">
      <div className="w-full h-full sm:w-[600px] sm:h-auto min-h-[500px] sm:min-h-[600px] flex flex-col bg-[#242731] shadow-lg p-6 sm:p-8 rounded-none sm:rounded-3xl relative overflow-y-auto">
        {/* Step Number */}
        <div className="absolute top-4 left-4 text-gray-400 text-sm">
          {`${currentStep + 1} / ${steps.length}`}
        </div>

        {/* Step Content */}
        <div className="flex-grow text-center text-white mt-6">
          <CurrentStepComponent />
        </div>

        {/* Navigation Buttons */}
        <div className="flex space-y-4 sm:space-y-0 sm:space-x-4 mt-8 justify-center flex-col sm:flex-row">
          {currentStep === 0 ? (
            <button
              onClick={handleNext}
              className="w-full sm:w-auto px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            >
              Let’s Get Started
            </button>
          ) : (
            <>
              <button
                onClick={handlePrevious}
                className="w-full sm:w-auto px-6 py-3 bg-transparent border border-purple-500 text-purple-500 rounded-md hover:bg-gray-600"
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                className={`w-full sm:w-auto px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 ${
                  currentStep === steps.length - 1 ? "disabled:opacity-50" : ""
                }`}
              >
                {currentStep === steps.length - 1 ? "Finish" : "Next"}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
