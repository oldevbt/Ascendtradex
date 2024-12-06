"use client";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa"; // Import close icon

const KycVerification = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-gray-900 font-poppins min-h-screen">
      <div className="mb-6">
        <h1 className="p-6 text-3xl text-center md:text-left">
          KYC Verification
        </h1>
        <p className="px-6 text-xl text-center md:text-left">
          To comply with regulation, each participant will have to go through
          identity verification (KYC/AML) to prevent fraud causes.
        </p>
      </div>
      <div className="flex flex-col mt-10 md:mt-40 items-center justify-center px-4">
        <div className="bg-gray-800 p-6 md:p-8 rounded-lg shadow-md max-w-3xl w-full h-auto text-left">
          <h2 className="text-2xl font-bold text-white mb-4">
            Hey, Wisdom 👋!
          </h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            To ensure a secure and trustworthy environment for all our users, we
            kindly request you to submit your verification documents. Completing
            this process is quick and easy, and it helps us maintain the
            integrity of our platform. It only takes a few minutes to complete
            the verification process.
          </p>
          <button
            onClick={handleOpenModal}
            className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded text-white font-bold"
          >
            Click here to Submit
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
          <div className="bg-gray-800 p-6 w-full max-w-4xl h-[95vh] rounded-xl border border-gray-500 shadow-lg text-white relative overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 text-2xl"
            >
              <FaTimes />
            </button>

            <div className="flex flex-col space-y-6">
              <h2 className="text-2xl font-bold mb-4">Verification</h2>
              <p className="text-gray-400">
                Your submitted data will be verified by the system's admin. If
                all of your information is correct, the admin will approve the
                KYC data and you'll be able to make withdrawal requests.
              </p>

              <div className="mb-4">
                <label
                  htmlFor="identity-card"
                  className="block text-gray-300 mb-2"
                >
                  Choose Type of Identity Card (ID)
                </label>
                <select
                  id="identity-card"
                  className="bg-gray-700 text-white w-full px-4 py-2 rounded-lg"
                >
                  <option value="government-id">
                    Government Approved Means Of Identification
                  </option>
                  <option value="passport">International Passport</option>
                  <option value="driver-license">Driver’s License</option>
                  <option value="national-id">National ID Card</option>
                </select>
              </div>

              <div className="bg-gray-700 p-4 rounded-lg mb-6">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <div className="bg-purple-600 rounded w-6 h-6 flex items-center justify-center">
                      <div className="text-white text-sm">
                        <FaCheck />
                      </div>
                    </div>
                    <span className="text-gray-300">
                      Chosen credential must not be expired.
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="bg-purple-600 rounded w-6 h-6 flex items-center justify-center">
                      <div className="text-white text-sm">
                        <FaCheck />
                      </div>
                    </div>
                    <span className="text-gray-300">
                      Document should be in good condition and clearly visible.
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="bg-purple-600 rounded w-6 h-6 flex items-center justify-center">
                      <div className="text-white text-sm">
                        <FaCheck />
                      </div>
                    </div>
                    <span className="text-gray-300">
                      Make sure that there is no light glare on the card.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <label htmlFor="upload-id" className="block text-gray-300 mb-2">
                  Upload ID Here
                </label>
                <input
                  type="file"
                  id="upload-id"
                  className="bg-gray-700 text-gray-400 w-full px-4 py-2 rounded-lg"
                />
              </div>

              <div className="flex justify-end">
                <button
                  onClick={handleCloseModal}
                  className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded text-white font-bold"
                >
                  Submit Document
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KycVerification;
