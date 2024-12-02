import React from "react";

const steps = [
  {
    number: "1",
    title: "Register",
    description:
      "Select your preferred account type and swiftly complete our secure registration form.",
  },
  {
    number: "2",
    title: "Verify Account",
    description:
      "Utilize our digital onboarding system for swift verification.",
  },
  {
    number: "3",
    title: "Fund Account",
    description:
      "Deposit funds into your trading account through an extensive array of funding methods.",
  },
  {
    number: "4",
    title: "Copy Traders",
    description: "Choose a plan, start copying top traders while they trade.",
  },
];

const StepsSection = () => {
  return (
    <section className="bg-[#101223] py-16 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">
          Open an account in 4 simple steps
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-lg p-6 shadow-lg text-left"
              style={{
                background:
                  "radial-gradient(circle, rgba(148, 99, 233, 0.4) 0%, rgba(255, 255, 255, 0) 80%)", // Soft radial gradient
                boxShadow: "0 4px 20px rgba(148, 99, 233, 0.5)", // Soft glowing effect
                padding: "20px",
              }}
            >
              <div className="text-5xl font-bold text-blue-500 mb-4">
                {step.number}
              </div>
              <h3 className="text-lg  font-poppins font-bold mb-2">
                {step.title}
              </h3>
              <p className="text-[15px] font-poppins text-white">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
