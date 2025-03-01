
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PhoneMockup from "@/components/PhoneMockup";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Set dark theme by default
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#0A0A0A] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Header />
        <main>
          <HeroSection />
          <PhoneMockup />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
