import Image from "next/image";
import { MoveRight, ChevronsDown, Sparkle } from "lucide-react";
import TabsSection from "@/components/TabsSection";
import BottomSection from "@/components/BottomSection";
import ClientSection from "@/components/ClientSection";
import FAQ from "@/components/FAQ";
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
  const services = [
    {
      title: "PPC",
      desc: "Drive targeted traffic instantly with optimized pay-per-click campaigns. We create high performing Google & amp Meta ad strategies that bring real leads, not just clicks. ",
    },
    {
      title: "SEO",
      desc: "Rank higher, get found, and grow organically. Our SEO strategies improve your website visibility and attract high-intent customers searching for your services.",
    },
    {
      title: "SMM",
      desc: "Boost your online presence and build brand engagement across popular platforms. We create purposeful content that connects, influences, and converts.",
    },
    {
      title: "UI/UX",
      desc: "We design visually appealing, user-friendly, and high-performing websites &amp; apps tailored to your business. Our goal is to enhance user experience and maximize conversions.",
    },
    {
      title: "GMB",
      desc: "Dominate local search and appear where your customers are looking Google Maps. We optimize your GMB profile to drive calls, visits, and inquiries.",
    },
    {
      title: "content marketing",
      desc: "Tell your brand’s story with compelling content that attracts, educates, and converts. We produce content that is SEO friendly and aligned with your growth goals.",
    },
    {
      title: "Website Development",
      desc: "We build fast, responsive, and modern websites that showcase your brand. Our expert team ensures every site is optimized, user-friendly to boost your online presence.",
    },
    {
      title: "App Development",
      desc: "We craft powerful, intuitive mobile apps that bring your ideas to life and connect you with your audience. Each app is built for performance and a seamless user experience across all devices.",
    },
  ];

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
      <div className="w-[80%] mx-auto">
        
      </div>
      <FinalCTA />
    </div>
  );
}
