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

export default function Home() {
  return (
    <div className="bg-[#101828]">
      <div className=" bg-custom-gradient  h-screen">
        <Header />
        <Hero />
      </div>
      <div className="mt-[450px]">
        <FirstSection />
        <RealTimeMarketAnalytics />
        <Stats />
        <Features />
        <FeatureTwo />
        <Feature3 />

        <StepsSection />
        <BrokerStatement />
        <TradeScanners />
        <PaymentOptions />
        <Logo />
        <Footer />
      </div>
    </div>
  );
}
