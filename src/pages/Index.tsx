
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import DashboardPreview from "../components/DashboardPreview";
import Technology from "../components/Technology";
import Footer from "../components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Reset scroll position when the page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <DashboardPreview />
        <Technology />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
