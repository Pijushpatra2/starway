import Image from "next/image";
import { MoveRight, ChevronsDown, Sparkle } from "lucide-react";
import TabsSection from "@/components/TabsSection";
import BottomSection from "@/components/BottomSection";
import ClientSection from "@/components/ClientSection";
import FAQ from "@/components/Home/FAQ";
import AIOptimization from "@/components/AIOptimization";
import HeroSection from "@/components/Home/HeroSection";
import ServicesSection from "@/components/Home/ServicesSection";
import StatsGrid from "@/components/Home/StatsGrid";
import PortfolioSection from "@/components/Home/PortfoiloSection";
import TestimonialsSection from "@/components/Home/Testimonials";
import AboutUs from "@/components/Home/AboutUs";
import ScrollOverlayFramer from "@/components/Home/ScrollOverlayFramer";
import FinalCTA from "@/components/Common/FinalCTA";
import TestimonialSection from "@/components/Home/Testimonial";

export default function Home() {


  return (
    <div className="w-full mx-auto pt-25">
      <HeroSection />
      {/* Services Section */}
      <ServicesSection />

      {/* About Us Section */}
      <AboutUs />

      {/* AI Optimization Section */}
      <ScrollOverlayFramer />

      {/* Portfolio Section */}

      <PortfolioSection />
      {/* Testimonials */}

      <StatsGrid />

      {/* Clients Section */}
      <TestimonialSection />
      <FAQ />
      {/* Bottom section */}
      <div className="w-[80%] mx-auto"></div>
      <FinalCTA />
    </div>
  );
}
