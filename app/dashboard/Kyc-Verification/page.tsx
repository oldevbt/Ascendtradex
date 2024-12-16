"use client";
import React, { useState, useEffect } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from "react-spinners";

const KycVerification = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Fetch user data from the API
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("/api/getCurrentUser");
        const data = await response.json();
        console.log("user name", data.firstName);

        if (response.ok) {
          setUsername(data.firstName || "User"); // Default to "User" if no name is found
        } else {
          console.error("Failed to fetch user data:", data.error);
          setUsername("User"); // Fallback for error cases
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUsername("User"); // Fallback for network errors
      }
    };

    fetchUserData();
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = () => {
    setIsLoading(true);

    // Simulate file upload delay
    setTimeout(() => {
      setIsLoading(false);
      setIsModalOpen(false);
      toast.success(
        "Your document has been submitted successfully! It will be reviewed shortly."
      );
    }, 3000);
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
            Hey, {username} 👋!
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
                {isLoading ? (
                  <div className="flex items-center space-x-4">
                    <ClipLoader color="#fff" size={25} />
                    <span>Submitting...</span>
                  </div>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded text-white font-bold"
                  >
                    Submit Document
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      <ToastContainer />
    </div>
  );
};

export default KycVerification;
