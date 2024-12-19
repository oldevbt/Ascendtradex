"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Container from "./components/Container";
import Logo from "./components/Logo";
import RealTimeMarketAnalytics from "./components/RealTimeMarketAnalytics";
import Features from "./components/Features";
import FeatureTwo from "./components/FeatureTwo";
import Stats from "./components/Stats";
import Feature3 from "./components/Feature3";
import FirstSection from "./components/FirstSection";
import DepositBonusSection from "./components/DepositBonus";
import StepsSection from "./components/StepsSection";
import TradeScanners from "./components/Traderscanners";
import BrokerStatement from "./components/BrokerStatement";
import PaymentOptions from "./components/PaymentOptions";
import VoiceflowWidget from "./components/VoiceflowWidget";
import FundYourAccount from "./components/FundAccount";
import Sectrions from "./components/Sectrions";
import CustomerReview from "./components/CustomerReview";
import Lovesection from "./components/Lovesection";
import GlobalMarket from "./components/GlobalMarket";

// Type definition for Notification
type NotificationType = {
  name: string;
  location: string;
  method: string;
  time: string;
};

export default function Home() {
  // State to hold notification
  const [notification, setNotification] = useState<NotificationType | null>(
    null
  );

  useEffect(() => {
    // Function to generate random notification
    const generateRandomNotification = () => {
      const names = ["John", "Sophia", "Liam", "Olivia", "Emma", "Noah"];
      const locations = [
        "New York",
        "California",
        "Texas",
        "Florida",
        "Washington",
      ];
      const methods = ["Email", "Google", "GitHub"];

      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomLocation =
        locations[Math.floor(Math.random() * locations.length)];
      const randomMethod = methods[Math.floor(Math.random() * methods.length)];

      return {
        name: randomName,
        location: randomLocation,
        method: randomMethod,
        time: "just now",
      };
    };

    // Show the first notification 5 seconds after page mounts
    const initialTimeout = setTimeout(() => {
      setNotification(generateRandomNotification());
      setTimeout(() => setNotification(null), 3000); // Clear the notification after 3 seconds
    }, 5000);

    // Set up interval to show notifications every 1 minute
    const interval = setInterval(() => {
      setNotification(generateRandomNotification());
      setTimeout(() => setNotification(null), 5000); // Clear each notification after 5 seconds
    }, 60000); // 1 minute

    // Cleanup function to clear timeouts and intervals
    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="bg-[#101828] relative">
      {notification && (
        <div className="fixed bottom-4 left-4 bg-purple-600 text-white px-6 py-4 rounded-lg shadow-md flex items-center space-x-4">
          <div className="bg-white text-purple-600 rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m2-4h.01M12 6v.01M12 12v6m8-2a9 9 0 11-16 0 9 9 0 0116 0z"
              />
            </svg>
          </div>
          <div>
            <p className="font-bold">New Registration</p>
            <p>
              <span className="font-semibold">{notification?.name}</span> from
              <span className="font-semibold"> {notification?.location}</span>
              registered on the site via
              <span className="italic"> {notification?.method}</span>.
            </p>
            <p className="text-sm text-gray-300">{notification?.time}</p>
          </div>
        </div>
      )}

      <div className="">
        <Header />
        <Hero />
      </div>

      <div className="">
        <FirstSection />
        <Sectrions />
        <Stats />
        <GlobalMarket />
        <Feature3 />
        <StepsSection />
        <BrokerStatement />
        <TradeScanners />
        <FundYourAccount />
        <CustomerReview />
        <VoiceflowWidget />
        <PaymentOptions />
        <Lovesection />
        <Footer />
      </div>
    </div>
  );
}
