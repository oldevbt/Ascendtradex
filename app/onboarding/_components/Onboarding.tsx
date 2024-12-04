"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import Step1 from "./OnboardingOne";
import Step2 from "./OnboardingTwo";
import Step3 from "./OnboardingFour";
import Step4 from "./OnboardingFive";
import Step5 from "./OnboardingSix";
import Step6 from "./OnboardingSeven";

const steps = [Step1, Step2, Step3, Step4, Step5, Step6];

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
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-[600px] min-h-[500px] max-h-[700px] flex flex-col bg-[#242731] shadow-lg p-6 rounded-3xl relative overflow-y-auto">
        {/* Step Number */}
        <div className="absolute top-4 left-4 text-gray-400 mt-3 text-sm">
          {`${currentStep + 1} / ${steps.length}`}
        </div>

        {/* Step Content */}
        <div className="text-center text-white mt-4">
          <CurrentStepComponent />
        </div>

        {/* Navigation Buttons */}
        <div className="flex space-x-4 mt-6 justify-center">
          {currentStep === 0 ? (
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-transparent hover:text-white hover:border hover:border-purple-600"
            >
              Let’s Get Started
            </button>
          ) : (
            <>
              <button
                onClick={handlePrevious}
                className="px-4 py-2 bg-transparent border border-purple-500 text-purple-500 rounded-md hover:bg-gray-600"
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                className={`px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 ${
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
