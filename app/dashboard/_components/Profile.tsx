import React, { useState, useEffect } from "react";
import { AiOutlineCheck } from "react-icons/ai";

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  mobileNumber: string;
}

const Profile: React.FC = () => {
  const checkboxes = [
    "Deposit",
    "Withdrawal",
    "Trade",
    "Account Update",
    "Login Notification",
  ];

  const [formValues, setFormValues] = useState<UserData>({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    mobileNumber: "",
  });

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch user data from the API
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/getCurrentUser");
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await response.json();
        if (data.error) {
          throw new Error(data.error);
        }

        // Update form values with the fetched user data
        setFormValues({
          firstName: data.firstName || "",
          lastName: data.lastName || "",
          email: data.email || "",
          country: data.country || "",
          mobileNumber: data.number || "",
        });
        setError(null);
      } catch (err: any) {
        setError(err.message || "An error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with values:", formValues);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* First Name */}
        <div>
          <label className="block text-gray-300 text-sm mb-2">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formValues.firstName}
            onChange={handleChange}
            className="w-full bg-gray-800 text-white p-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        {/* Last Name */}
        <div>
          <label className="block text-gray-300 text-sm mb-2">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formValues.lastName}
            onChange={handleChange}
            className="w-full bg-gray-800 text-white p-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        {/* Email */}
        <div>
          <label className="block text-gray-300 text-sm mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            className="w-full bg-gray-800 text-white p-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        {/* Country */}
        <div>
          <label className="block text-gray-300 text-sm mb-2">Country</label>
          <input
            type="text"
            name="country"
            value={formValues.country}
            onChange={handleChange}
            className="w-full bg-gray-800 text-white p-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        {/* Mobile Number */}
        <div>
          <label className="block text-gray-300 text-sm mb-2">
            Mobile Number
          </label>
          <input
            type="text"
            name="mobileNumber"
            value={formValues.mobileNumber}
            onChange={handleChange}
            className="w-full bg-gray-800 text-white p-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>
      {/* Notification Preferences */}
      <div className="grid grid-cols-2 gap-4 mt-20">
        <div>
          <h3 className="text-lg text-gray-300 mb-2">Email</h3>
          {checkboxes.map((label, index) => (
            <div key={index} className="flex items-center mb-3">
              <div className="relative">
                <input
                  type="checkbox"
                  checked
                  className="h-6 w-6 appearance-none rounded-md bg-gray-900 border-2 border-gray-600 checked:bg-[#7d4edc] checked:border-[#614499] focus:ring-2 focus:ring-[#614499]"
                />
                <div className="absolute left-0 -top-1 text-white w-full h-full flex justify-center items-center">
                  <AiOutlineCheck size={15} />
                </div>
              </div>
              <span className="ml-3 text-gray-300 text-sm">{label}</span>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-lg text-gray-300 mb-2">Notification</h3>
          {checkboxes.map((label, index) => (
            <div key={index} className="flex items-center mb-3">
              <div className="relative">
                <input
                  type="checkbox"
                  checked
                  className="h-6 w-6 appearance-none rounded-md bg-gray-900 border-2 border-gray-600 checked:bg-[#7d4edc] checked:border-[#614499] focus:ring-2 focus:ring-[#614499]"
                />
                <div className="absolute left-0 -top-1 text-white w-full h-full flex justify-center items-center">
                  <AiOutlineCheck size={15} />
                </div>
              </div>
              <span className="ml-3 text-gray-300 text-sm">{label}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Submit Button */}
      {/* <button
        type="submit"
        className="bg-purple-500 text-white p-2 rounded-md hover:bg-purple-600 focus:outline-none"
      >
        Save Changes
      </button> */}
    </form>
  );
};

export default Profile;
