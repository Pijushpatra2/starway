"use client";

import InnerHero from "@/components/Common/InnerHero";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle, 
  Target, 
  TrendingUp, 
  BarChart,
  Zap,
  MapPin,
  Phone,
  Navigation,
  Star,
  Shield,
  Users,
  Eye,
  Search,
  Calendar,
  Clock,
  Award,
  MessageSquare,
  FileText,
  Settings,
  ShieldCheck,
  AlertCircle,
  Building,
  Store,
  HeartPulse,
  Coffee,
  Home,
  ChevronRight,
  Play,
  Download,
  MessageCircle,
  PhoneCall,
  Map,
  Globe,
  Pin,
  Building2,
  ShoppingBag,
  Stethoscope,
  Utensils,
  Hammer,
  CheckSquare,
  XCircle
} from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation as SwiperNav } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function GoogleMapsPage() {
  // Why GMB matters
  const benefits = [
    {
      icon: MapPin,
      title: "Appear in Google's Local 3-Pack",
      description: "Secure a top 3 position in local search results",
      stat: "75% of clicks go to the 3-pack"
    },
    {
      icon: Phone,
      title: "Get More Calls & Direction Requests",
      description: "Direct customer actions from search results",
      stat: "2.8x more calls from optimized profiles"
    },
    {
      icon: Star,
      title: "Build Instant Credibility with Reviews",
      description: "Social proof that converts local searchers",
      stat: "68% trust businesses with 4+ stars"
    },
    {
      icon: Search,
      title: "Capture High-Intent Local Searches",
      description: "Reach customers ready to buy now",
      stat: "Near me' searches grew 500%+"
    },
    {
      icon: Target,
      title: "Outrank Nearby Competitors",
      description: "Stand out in your local market",
      stat: "Outrank 85% of local competitors"
    }
  ];

  // Services included
  const services = [
    {
      icon: Map,
      title: "Profile Optimization",
      description: "Complete GMB setup and optimization",
      features: [
        "Business Information Audit",
        "Category & Service Optimization",
        "Keyword Strategy",
        "NAP Consistency Check"
      ],
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: Star,
      title: "Review Management",
      description: "Build and maintain your online reputation",
      features: [
        "Review Generation Strategy",
        "Professional Response Templates",
        "Review Monitoring & Alerts",
        "Competitor Review Analysis"
      ],
      color: "from-amber-600 to-amber-800"
    },
    {
      icon: Globe,
      title: "Local SEO & Citations",
      description: "Build local authority across the web",
      features: [
        "Local Citation Building",
        "Directory Submissions",
        "NAP Consistency Audit",
        "Local Backlink Strategy"
      ],
      color: "from-green-600 to-green-800"
    },
    {
      icon: ImageIcon,
      title: "Visual Optimization",
      description: "Make your profile visually compelling",
      features: [
        "Professional Photo Uploads",
        "360° Virtual Tours",
        "Video Integration",
        "Post & Update Scheduling"
      ],
      color: "from-purple-600 to-purple-800"
    },
    {
      icon: ShieldCheck,
      title: "Profile Protection",
      description: "Secure and monitor your GMB presence",
      features: [
        "Spam Review Detection",
        "Competitor Hijack Prevention",
        "Profile Suspension Prevention",
        "24/7 Monitoring & Alerts"
      ],
      color: "from-red-600 to-red-800"
    },
    {
      icon: BarChart,
      title: "Performance Analytics",
      description: "Track and optimize your local performance",
      features: [
        "Call & Direction Tracking",
        "Search Query Analysis",
        "Competitor Performance",
        "Monthly Performance Reports"
      ],
      color: "from-indigo-600 to-indigo-800"
    }
  ];

  // Our process
  const process = [
    {
      step: "01",
      title: "Comprehensive Audit",
      description: "Analyze your current GMB profile and local competition",
      activities: [
        "Profile Health Check",
        "Competitor Analysis",
        "Keyword Research",
        "Local Ranking Assessment"
      ],
      icon: Search
    },
    {
      step: "02",
      title: "Strategic Optimization",
      description: "Implement data-driven optimization strategies",
      activities: [
        "Business Information Optimization",
        "Category & Service Setup",
        "Local Keyword Integration",
        "Visual Content Strategy"
      ],
      icon: Settings
    },
    {
      step: "03",
      title: "Authority Building",
      description: "Establish your local dominance and credibility",
      activities: [
        "Review Strategy Implementation",
        "Local Citation Building",
        "Content & Post Creation",
        "Local Backlink Outreach"
      ],
      icon: TrendingUp
    },
    {
      step: "04",
      title: "Ongoing Management",
      description: "Continuous monitoring and optimization",
      activities: [
        "Performance Monitoring",
        "Review Response Management",
        "Competitor Tracking",
        "Monthly Strategy Updates"
      ],
      icon: ShieldCheck
    }
  ];

  // Expected outcomes
  const outcomes = [
    {
      metric: "3.2x",
      title: "More Calls from Maps",
      description: "Direct phone calls from Google Maps & Search",
      icon: PhoneCall
    },
    {
      metric: "215%",
      title: "Direction Requests",
      description: "Customers asking for directions to your location",
      icon: Navigation
    },
    {
      metric: "Top 3",
      title: "Local Rankings",
      description: "Secure position in Google's Local 3-Pack",
      icon: Target
    },
    {
      metric: "4.8★",
      title: "Average Rating",
      description: "Build trust with exceptional reviews",
      icon: Star
    },
    {
      metric: "89%",
      title: "Profile Views",
      description: "Increased visibility in local searches",
      icon: Eye
    },
    {
      metric: "24/7",
      title: "Profile Protection",
      description: "Continuous monitoring & spam prevention",
      icon: Shield
    }
  ];

  // Who it's best for
  const targetAudiences = [
    {
      title: "Local Service Businesses",
      description: "Plumbers, electricians, contractors, and home services",
      icon: Hammer,
      industries: ["Home Services", "Contractors", "Maintenance"],
      metrics: ["+45% call volume", "Top 3 ranking", "25+ reviews/month"]
    },
    {
      title: "Retail Stores & Franchises",
      description: "Physical stores, shops, and multi-location businesses",
      icon: Store,
      industries: ["Retail", "Franchises", "Shopping"],
      metrics: ["+60% foot traffic", "+35% direction requests", "4.7★ rating"]
    },
    {
      title: "Healthcare Practices",
      description: "Clinics, hospitals, dentists, and medical specialists",
      icon: Stethoscope,
      industries: ["Healthcare", "Medical", "Wellness"],
      metrics: ["+55% appointment requests", "Trust badge established", "HIPAA compliant"]
    },
    {
      title: "Restaurants & Cafés",
      description: "Food service businesses and dining establishments",
      icon: Utensils,
      industries: ["Food & Beverage", "Restaurants", "Cafés"],
      metrics: ["+40% reservations", "+50% direction clicks", "Menu optimization"]
    },
    {
      title: "Real Estate & Property",
      description: "Agents, brokers, and property management services",
      icon: Home,
      industries: ["Real Estate", "Property", "Rental"],
      metrics: ["+75% lead generation", "Virtual tours integrated", "Area dominance"]
    }
  ];

  // Why choose us
  const whyChooseUs = [
    {
      icon: Target,
      title: "Local SEO Specialists",
      description: "Dedicated experts in local search optimization"
    },
    {
      icon: Star,
      title: "Proven Review Growth",
      description: "Systematic approach to generating authentic reviews"
    },
    {
      icon: Shield,
      title: "White-Hat Optimization",
      description: "Ethical practices that ensure long-term results"
    },
    {
      icon: BarChart,
      title: "Transparent Tracking",
      description: "Real-time dashboards showing call and ranking data"
    },
    {
      icon: ShieldCheck,
      title: "Ongoing Protection",
      description: "24/7 monitoring to prevent spam and hijacking"
    },
    {
      icon: Users,
      title: "Local Market Experts",
      description: "Deep understanding of local consumer behavior"
    }
  ];

  // Case studies
  const caseStudies = [
    {
      business: "HVAC Services Company",
      location: "Chicago, IL",
      duration: "3 Months",
      before: {
        ranking: "Page 2",
        calls: "12/week",
        reviews: "8 total",
        rating: "3.2★"
      },
      after: {
        ranking: "#1 Local Pack",
        calls: "48/week",
        reviews: "67 total",
        rating: "4.7★"
      },
      results: ["400% call increase", "#1 local ranking", "59 new reviews"]
    },
    {
      business: "Dental Practice",
      location: "Austin, TX",
      duration: "4 Months",
      before: {
        ranking: "Not ranking",
        calls: "8/week",
        reviews: "3 total",
        rating: "2.8★"
      },
      after: {
        ranking: "#2 Local Pack",
        calls: "35/week",
        reviews: "42 total",
        rating: "4.9★"
      },
      results: ["338% call growth", "First page ranking", "4.9★ average rating"]
    },
    {
      business: "Coffee Shop Chain",
      location: "3 Locations, Denver",
      duration: "2 Months",
      before: {
        ranking: "Page 3 average",
        calls: "Varies",
        reviews: "Mixed",
        rating: "3.5★ avg"
      },
      after: {
        ranking: "Top 3 all locations",
        calls: "Steady increase",
        reviews: "Consistent flow",
        rating: "4.6★ avg"
      },
      results: ["All locations ranking", "62% more walk-ins", "Review consistency"]
    }
  ];

  // FAQ
  const faqs = [
    {
      question: "How long does GMB optimization take?",
      answer: "Initial improvements are typically visible within 2-4 weeks. Full optimization and ranking improvements take 3-6 months depending on competition and local market factors. We provide weekly progress reports throughout the process."
    },
    {
      question: "Can you rank my business in Google Maps?",
      answer: "Yes, our primary focus is ranking businesses in Google Maps and the Local 3-Pack. We use proven local SEO strategies including citation building, review optimization, and local content to improve your Maps visibility."
    },
    {
      question: "Do you help with review generation?",
      answer: "Absolutely. We implement ethical review generation strategies that comply with Google's guidelines. This includes review request systems, follow-up processes, and professional response templates for all reviews."
    },
    {
      question: "Is this a one-time or ongoing service?",
      answer: "We recommend ongoing management for best results. Local SEO requires continuous monitoring, competitor response, and algorithm updates. However, we also offer one-time optimization packages with follow-up support."
    },
    {
      question: "Will this help me get more phone calls?",
      answer: "Yes, GMB optimization directly increases phone calls. We track call volume through GMB insights and implement call-to-action strategies that typically result in 200-400% more calls from Google Search and Maps."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <InnerHero
        title="Google Maps & GMB Optimization That Gets You Found"
        subtitle="Dominate local search and turn nearby customers into calls, visits, and trust"
        bgImage="/googleMapB.jpg"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Google Maps Optimization" },
        ]}
      />

      {/* What Is Google Maps & GMB Optimization - Map Visual */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Map Visualization */}
              <div className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Your Digital Storefront</h3>
                    <p className="text-gray-600 text-sm">As seen on Google Maps & Search</p>
                  </div>
                </div>
                
                {/* Map UI Mockup */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-20 h-2 bg-gray-300 rounded"></div>
                    </div>
                    <div className="text-sm text-gray-500">2 min away</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <Phone className="w-4 h-4 text-blue-600" />
                        </div>
                        <span className="text-gray-700">Call Now</span>
                      </div>
                      <div className="text-green-600 font-semibold">✓ Open Now</div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                          <Navigation className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-gray-700">Get Directions</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-amber-500 fill-current" />
                        <span className="font-semibold">4.8</span>
                        <span className="text-gray-500 text-sm">(142 reviews)</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                          <Eye className="w-4 h-4 text-purple-600" />
                        </div>
                        <span className="text-gray-700">View Photos</span>
                      </div>
                      <div className="text-blue-600 font-semibold">Save</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                <Target className="w-4 h-4" />
                Local Dominance Strategy
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Your Google Business Profile is Your Digital Storefront
              </h2>
              <div className="prose prose-lg text-gray-600 mb-8">
                <p className="text-lg leading-relaxed">
                  When optimized correctly, your Google Business Profile helps local customers find you, trust you, 
                  and choose you—before they even visit your website.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  It's the first impression that turns "near me" searches into calls, visits, and loyal customers.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-1">93%</div>
                  <div className="text-gray-700 text-sm">Start with local search</div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                  <div className="text-2xl font-bold text-green-600 mb-1">86%</div>
                  <div className="text-gray-700 text-sm">Use Google Maps</div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                  <div className="text-2xl font-bold text-amber-600 mb-1">4.2★</div>
                  <div className="text-gray-700 text-sm">Minimum trust threshold</div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                  <div className="text-2xl font-bold text-purple-600 mb-1">75%</div>
                  <div className="text-gray-700 text-sm">Never scroll past 3-pack</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Google Maps & GMB Matter - Interactive Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Local Search Dominance Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The competitive advantage of appearing when customers are ready to buy
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative h-full">
                    {/* Card background with gradient border */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white rounded-2xl transform group-hover:scale-105 transition-transform"></div>
                    
                    {/* Main card */}
                    <div className="relative bg-white rounded-2xl p-8 border border-gray-200 group-hover:border-blue-300 group-hover:shadow-xl transition-all h-full">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {benefit.description}
                      </p>
                      <div className="mt-auto pt-6 border-t border-gray-100">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50">
                          <span className="text-blue-700 font-semibold">{benefit.stat}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
            
            {/* Local Search Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="md:col-span-2 lg:col-span-3"
            >
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">76%</div>
                    <div className="text-blue-200 text-sm">Search locally on mobile</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">28%</div>
                    <div className="text-blue-200 text-sm">Result in a purchase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">24h</div>
                    <div className="text-blue-200 text-sm">Visit business after search</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">3x</div>
                    <div className="text-blue-200 text-sm">More likely to purchase</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Included - Hexagonal Grid with Map Integration */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete GMB Optimization Suite
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything needed to dominate your local market on Google
            </p>
          </motion.div>

          <div className="relative">
            {/* Map grid background */}
            <div className="absolute inset-0 bg-grid-map opacity-5"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
              {services.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="relative h-full">
                      {/* Hexagon shape */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white rounded-2xl transform rotate-3 group-hover:rotate-0 transition-transform"></div>
                      
                      <div className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-sm group-hover:shadow-xl transition-all h-full">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mb-6">
                          {service.description}
                        </p>
                        <div className="space-y-2">
                          {service.features.map((feature, fIdx) => (
                            <div key={fIdx} className="flex items-center gap-3">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our Process - Timeline with Map Integration */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our 4-Step Local Domination Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to ranking higher and getting more local business
            </p>
          </motion.div>

          <div className="relative">
            {/* Mobile view */}
            <div className="lg:hidden space-y-8">
              {process.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
                        idx === 0 ? 'from-blue-600 to-blue-800' :
                        idx === 1 ? 'from-green-600 to-green-800' :
                        idx === 2 ? 'from-amber-600 to-amber-800' :
                        'from-purple-600 to-purple-800'
                      } flex items-center justify-center`}>
                        <span className="text-white font-bold">{step.step}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        <p className="text-gray-600 text-sm">{step.description}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {step.activities.map((activity, aIdx) => (
                        <div key={aIdx} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                          <span className="text-gray-700 text-sm">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Desktop view - Horizontal Timeline */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-blue-200 via-green-200 to-purple-200 transform -translate-y-1/2"></div>
                
                <div className="grid grid-cols-4 gap-8 relative">
                  {process.map((step, idx) => {
                    const Icon = step.icon;
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="relative"
                      >
                        {/* Timeline dot */}
                        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                          <div className={`w-10 h-10 rounded-full border-4 border-white ${
                            idx === 0 ? 'bg-blue-600' :
                            idx === 1 ? 'bg-green-600' :
                            idx === 2 ? 'bg-amber-600' :
                            'bg-purple-600'
                          } flex items-center justify-center`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                        </div>
                        
                        {/* Content card */}
                        <div className="mt-12 bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                          <div className="text-center mb-4">
                            <div className="text-sm font-semibold text-blue-600">Step {step.step}</div>
                            <h3 className="text-lg font-bold text-gray-900 mt-1">{step.title}</h3>
                          </div>
                          <p className="text-gray-600 text-sm text-center mb-4">{step.description}</p>
                          <div className="space-y-1">
                            {step.activities.slice(0, 2).map((activity, aIdx) => (
                              <div key={aIdx} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                                <span className="text-gray-700 text-xs">{activity}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expected Outcomes - Metric Dashboard */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Expected Local Business Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What you can realistically expect from our GMB optimization
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {outcomes.map((outcome, idx) => {
              const Icon = outcome.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-blue-600" />
                      </div>
                      <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                        {outcome.metric}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {outcome.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {outcome.description}
                    </p>
                    
                    {/* Progress indicator */}
                    <div className="mt-4">
                      <div className="flex justify-between text-sm text-gray-500 mb-1">
                        <span>Before</span>
                        <span>After</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full"
                          style={{ width: `${70 + idx * 5}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Results Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">2.8x</div>
                <div className="text-blue-200 text-sm">More Phone Calls</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">215%</div>
                <div className="text-blue-200 text-sm">Direction Requests</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">84%</div>
                <div className="text-blue-200 text-sm">First Page Ranking</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">4.7★</div>
                <div className="text-blue-200 text-sm">Average Rating</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who This Service Is Best For - Industry Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Industries We Help Dominate Locally
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven results across all types of local businesses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {targetAudiences.map((audience, idx) => {
              const Icon = audience.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-gradient-to-b from-white to-blue-50 rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{audience.title}</h3>
                        <p className="text-gray-600 text-sm">{audience.description}</p>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {audience.industries.map((industry, iIdx) => (
                          <span key={iIdx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                            {industry}
                          </span>
                        ))}
                      </div>
                      
                      <div className="space-y-2">
                        {audience.metrics.map((metric, mIdx) => (
                          <div key={mIdx} className="flex items-center gap-3">
                            <TrendingUp className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-6 border-t border-gray-100">
                      <div className="text-xs text-gray-500 mb-2">Best For:</div>
                      <div className="text-sm text-gray-700">
                        Businesses with physical locations serving local customers
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Swiper Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Us for Local SEO
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What sets our Google Maps optimization apart
            </p>
          </motion.div>

          <Swiper
            modules={[Autoplay, SwiperNav]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="pb-12"
          >
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <SwiperSlide key={idx}>
                  <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all h-full">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>

      {/* Case Studies - Before/After Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Local Business Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from businesses dominating their local markets
            </p>
          </motion.div>

          <div className="space-y-12">
            {caseStudies.map((study, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-white to-blue-50 rounded-2xl p-8 border border-blue-100 hover:shadow-lg transition-all"
              >
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Before Column */}
                  <div>
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium">
                        <XCircle className="w-4 h-4" />
                        Before Optimization
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-400">{study.before.ranking}</div>
                        <div className="text-gray-500 text-sm">Local Ranking</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-400">{study.before.calls}</div>
                        <div className="text-gray-500 text-sm">Weekly Calls</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-400">{study.before.reviews}</div>
                        <div className="text-gray-500 text-sm">Total Reviews</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-400">{study.before.rating}</div>
                        <div className="text-gray-500 text-sm">Average Rating</div>
                      </div>
                    </div>
                  </div>

                  {/* Center - Client Info & Results */}
                  <div className="text-center">
                    <div className="mb-6">
                      <div className="text-blue-600 font-medium text-sm mb-2">{study.location} • {study.duration}</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.business}</h3>
                    </div>
                    <div className="space-y-3">
                      {study.results.map((result, rIdx) => (
                        <div key={rIdx} className="flex items-center justify-center gap-2">
                          <CheckSquare className="w-4 h-4 text-green-500" />
                          <span className="text-gray-700">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* After Column */}
                  <div>
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                        <CheckSquare className="w-4 h-4" />
                        After Optimization
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{study.after.ranking}</div>
                        <div className="text-green-700 text-sm font-medium">Local Ranking</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{study.after.calls}</div>
                        <div className="text-green-700 text-sm font-medium">Weekly Calls</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{study.after.reviews}</div>
                        <div className="text-green-700 text-sm font-medium">Total Reviews</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{study.after.rating}</div>
                        <div className="text-green-700 text-sm font-medium">Average Rating</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs - Accordion Style */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about Google Maps optimization
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center flex-shrink-0">
                    <div className="text-blue-600 font-bold text-lg">Q{idx + 1}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      {faq.question}
                    </h3>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-green-600 font-bold text-sm">A</span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Local Action Focused */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-8">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Dominate Your Local Market?
                </h3>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Get a free Google Business Profile audit and discover how we can increase your local visibility, drive more calls, and outrank competitors.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-white" />
                    <span className="text-white">Call us: (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-white" />
                    <span className="text-white">WhatsApp: +1 555-123-4567</span>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free GMB Audit</h4>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                      placeholder="Enter your business name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Industry / Business Type</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors">
                      <option value="">Select your industry</option>
                      <option value="service">Local Service Business</option>
                      <option value="retail">Retail Store</option>
                      <option value="healthcare">Healthcare Practice</option>
                      <option value="restaurant">Restaurant / Café</option>
                      <option value="realestate">Real Estate</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="flex-1 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold text-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2"
                    >
                      <ArrowRight className="w-5 h-5" />
                      Get Free Audit
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      className="flex-1 px-8 py-4 bg-gray-100 text-gray-900 rounded-lg font-semibold text-lg hover:bg-gray-200 transition-all inline-flex items-center justify-center gap-2"
                    >
                      <Phone className="w-5 h-5" />
                      Call Now
                    </motion.button>
                  </div>
                  
                  <p className="text-gray-500 text-sm text-center">
                    By submitting, you agree to our Privacy Policy. No spam, ever.
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

// Custom icon components
function ImageIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <circle cx="8.5" cy="8.5" r="1.5"></circle>
      <polyline points="21 15 16 10 5 21"></polyline>
    </svg>
  );
}