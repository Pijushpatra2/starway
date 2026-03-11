"use client";
import { useState } from "react";
import {
  Check,
  X,
  ChevronRight,
  Sparkles,
  TrendingUp,
  Zap,
  Target,
  Globe,
  Smartphone,
  Palette,
  Code,
  Megaphone,
  PenTool,
  Search,
  DollarSign,
  Users,
  Award,
  MessageCircle,
  BarChart,
  Clock,
  Shield,
  Headphones,
  Rocket,
  Star,
  ArrowRight,
  HelpCircle,
  Calendar,
} from "lucide-react";
import InnerHero from "@/components/Common/InnerHero";
import FaqAccordion from "@/components/FaqAccordion";
import ServiceCTA from "@/components/Services/ServiceCTA";

const services = [
  {
    id: "googleLocalRanking",
    name: "Google Location Ranking",
    icon: Globe,
    description: "Win local search",
    color: "from-blue-600 to-indigo-500",
  },

  {
    id: "seo",
    name: "SEO & Local Ranking",
    icon: Search,
    description: "Dominate search results",
    color: "from-orange-500 to-yellow-500",
  },

  {
    id: "webdev",
    name: "Website Development",
    icon: Code,
    description: "Build performant digital products",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "social",
    name: "Social Media Marketing",
    icon: Users,
    description: "Engage & grow your audience",
    color: "from-indigo-500 to-blue-500",
  },

  {
    id: "ppc",
    name: "PPC Advertising",
    icon: DollarSign,
    description: "Maximize ad ROI",
    color: "from-red-500 to-pink-500",
  },

  {
    id: "appDevelopment",
    name: "App Development",
    icon: Sparkles,
    description: "Create exceptional user experiences",
    color: "from-blue-500 to-cyan-500",
  },

  {
    id: "content",
    name: "Content Marketing",
    icon: PenTool,
    description: "Create compelling content",
    color: "from-teal-500 to-green-500",
  },

  {
    id: "branding",
    name: "Branding",
    icon: Palette,
    description: "Build a memorable brand identity",
    color: "from-purple-500 to-pink-500",
  },

  {
    id: "ai",
    name: "AI Search Optimization",
    icon: Zap,
    description: "Rank on AI platforms",
    color: "from-violet-500 to-purple-500",
  },
];

const plansData = {

  googleLocalRanking: {
    name: "Google Location Ranking",
    plans: [
      {
        name: "Google Maps Dominance",
        tagline: "Lifetime GMB + 1 Year Marketing",
        description:
          "Complete Google Business Profile optimization and local ranking campaign to dominate Google Maps results.",
        price: "$1500 + GST",
        billing: "One-time (Includes 12 months marketing)",
        popular: true,
        idealFor: "Local businesses, clinics, shops, restaurants",
        features: [
          { text: "Google Business Profile setup/optimization", included: true },
          { text: "Local keyword targeting", included: true },
          { text: "Service area optimization", included: true },
          { text: "Photo & content optimization", included: true },
          { text: "Local citations building", included: true },
          { text: "Review strategy setup", included: true },
          { text: "Competitor tracking", included: true },
          { text: "Monthly performance reports", included: true },
          { text: "1 year local SEO marketing support", included: true },
        ],
        cta: "Start Ranking",
      },
    ],
  },

  seo: {
    name: "SEO",
    plans: [
      {
        name: "Basic",
        tagline: "Start ranking on Google",
        price: "$500 + GST",
        billing: "Per month",
        popular: false,
        idealFor: "Small businesses & startups",
        features: [
          { text: "SEO audit & analysis", included: true },
          { text: "Keyword research (10 keywords)", included: true },
          { text: "On-page optimization (5 pages)", included: true },
          { text: "Meta tag optimization", included: true },
          { text: "Technical SEO fixes", included: true },
          { text: "Google Search Console setup", included: true },
          { text: "Monthly performance report", included: true },
        ],
        cta: "Get Started",
      },

      {
        name: "Standard",
        tagline: "Grow traffic & leads",
        price: "$800 + GST",
        billing: "Per month",
        popular: true,
        idealFor: "Growing businesses",
        features: [
          { text: "Everything in Basic", included: true },
          { text: "Keyword research (25 keywords)", included: true },
          { text: "On-page optimization (10 pages)", included: true },
          { text: "Blog writing (2/month)", included: true },
          { text: "Backlink building (5/month)", included: true },
          { text: "Competitor SEO analysis", included: true },
        ],
        cta: "Choose Standard",
      },

      {
        name: "Advanced",
        tagline: "Dominate search results",
        price: "$1500 + GST",
        billing: "Per month",
        popular: false,
        idealFor: "Competitive industries",
        features: [
          { text: "Everything in Standard", included: true },
          { text: "Keyword research (50+ keywords)", included: true },
          { text: "On-page optimization (20+ pages)", included: true },
          { text: "High quality backlinks (10+/month)", included: true },
          { text: "Guest posting strategy", included: true },
          { text: "Advanced technical SEO", included: true },
          { text: "Weekly reporting", included: true },
        ],
        cta: "Choose Advanced",
      },
    ],
  },

  webdev: {
    name: "Website Development",
    plans: [
      {
        name: "Standard",
        tagline: "Professional business website",
        price: "$1500 + GST",
        billing: "One-time project",
        popular: false,
        idealFor: "Small businesses",
        features: [
          { text: "Custom modern UI design", included: true },
          { text: "Mobile responsive website", included: true },
          { text: "Up to 5 pages", included: true },
          { text: "SEO friendly structure", included: true },
          { text: "Contact form integration", included: true },
          { text: "Basic speed optimization", included: true },
        ],
        cta: "Get Started",
      },

      {
        name: "Advanced",
        tagline: "High-performance premium website",
        price: "$2000 + GST",
        billing: "One-time project",
        popular: true,
        idealFor: "Growing brands",
        features: [
          { text: "Everything in Standard", included: true },
          { text: "Up to 10 pages", included: true },
          { text: "Advanced animations", included: true },
          { text: "CMS / blog integration", included: true },
          { text: "Lead capture forms", included: true },
          { text: "WhatsApp integration", included: true },
        ],
        cta: "Choose Advanced",
      },

      {
        name: "Custom",
        tagline: "Custom enterprise website",
        price: "Custom + GST",
        billing: "Project based",
        popular: false,
        idealFor: "Large businesses",
        features: [
          { text: "Unlimited pages", included: true },
          { text: "Custom backend system", included: true },
          { text: "API integrations", included: true },
          { text: "Advanced UI/UX", included: true },
          { text: "Admin dashboard", included: true },
          { text: "Performance optimization", included: true },
        ],
        cta: "Contact Sales",
      },
    ],
  },

  social: {
    name: "Social Media Marketing",
    plans: [
      {
        name: "Standard",
        tagline: "Grow your social presence",
        price: "$450 + GST",
        billing: "Per month",
        popular: true,
        idealFor: "Local businesses & brands",
        features: [
          { text: "Social media strategy", included: true },
          { text: "Monthly content calendar", included: true },
          { text: "10–12 posts/month", included: true },
          { text: "Graphic design posts", included: true },
          { text: "Hashtag & caption writing", included: true },
          { text: "Instagram & Facebook management", included: true },
          { text: "Monthly performance report", included: true },
        ],
        cta: "Get Started",
      },
    ],
  },

  ppc: {
    name: "PPC Advertising",
    plans: [
      {
        name: "Campaign Setup",
        tagline: "Launch high converting ads",
        price: "$400 + GST",
        billing: "One-time setup",
        popular: true,
        idealFor: "Businesses wanting instant leads",
        features: [
          { text: "Google Ads account setup", included: true },
          { text: "Campaign structure setup", included: true },
          { text: "Keyword targeting strategy", included: true },
          { text: "Ad copywriting", included: true },
          { text: "Conversion tracking setup", included: true },
          { text: "Audience targeting", included: true },
          { text: "Negative keyword setup", included: true },
          { text: "7-day performance report", included: true },
        ],
        adsBudget: "Ads budget depends on industry ($500 – $5000 recommended)",
        cta: "Start PPC Setup",
      },
    ],
  },

  appDevelopment: {
    name: "App Development",
    plans: [
      {
        name: "Starter",
        tagline: "Launch MVP mobile app",
        price: "$2500 + GST",
        billing: "One-time project",
        popular: false,
        idealFor: "Startups",
        features: [
          { text: "Android app development", included: true },
          { text: "Up to 5 screens", included: true },
          { text: "Basic authentication", included: true },
          { text: "API integration", included: true },
          { text: "Play Store publishing", included: true },
        ],
        cta: "Get Started",
      },

      {
        name: "Standard",
        tagline: "Professional business app",
        price: "$4500 + GST",
        billing: "One-time project",
        popular: true,
        idealFor: "Business platforms",
        features: [
          { text: "Android + iOS app", included: true },
          { text: "Custom UI/UX", included: true },
          { text: "Admin dashboard", included: true },
          { text: "Push notifications", included: true },
          { text: "Google Maps integration", included: true },
        ],
        cta: "Choose Standard",
      },

      {
        name: "Premium",
        tagline: "Enterprise scale application",
        price: "$8000 + GST",
        billing: "One-time project",
        popular: false,
        idealFor: "Enterprise apps",
        features: [
          { text: "Custom backend development", included: true },
          { text: "Advanced admin panel", included: true },
          { text: "Payment integration", included: true },
          { text: "Subscription system", included: true },
          { text: "1 month free maintenance", included: true },
        ],
        cta: "Contact Sales",
      },
    ],
  },

  branding: {
    name: "Branding",
    plans: [
      {
        name: "Brand Identity",
        tagline: "Create a strong brand",
        price: "$2499 + GST",
        billing: "One-time project",
        popular: true,
        idealFor: "Startups & businesses",
        features: [
          { text: "Logo design", included: true },
          { text: "Brand color palette", included: true },
          { text: "Typography system", included: true },
          { text: "Social media brand kit", included: true },
          { text: "Brand guidelines document", included: true },
        ],
        cta: "Start Branding",
      },
    ],
  },

  content: {
    name: "Content Marketing",
    plans: [
      {
        name: "Content Growth",
        tagline: "Build authority with content",
        price: "$700 + GST",
        billing: "Per month",
        popular: true,
        idealFor: "SEO & brand authority",
        features: [
          { text: "Content strategy", included: true },
          { text: "SEO blog writing (4/month)", included: true },
          { text: "Keyword research", included: true },
          { text: "Content optimization", included: true },
          { text: "Publishing support", included: true },
        ],
        cta: "Start Content Marketing",
      },
    ],
  },

  ai: {
    name: "AI Search Optimization",
    plans: [
      {
        name: "Starter",
        tagline: "Rank in AI search results",
        price: "$999 + GST",
        billing: "Per month",
        popular: true,
        idealFor: "Businesses targeting AI traffic",
        features: [
          { text: "AI visibility audit", included: true },
          { text: "AI optimized content", included: true },
          { text: "Entity optimization", included: true },
          { text: "ChatGPT visibility strategy", included: true },
          { text: "Monthly performance report", included: true },
        ],
        cta: "Start AI Optimization",
      },
    ],
  },

}; 

const pricingFaqs = [
  {
    question: "What’s included in your digital marketing plans?",
    answer:
      "Each plan includes a tailored marketing strategy, campaign setup, performance tracking, and monthly reporting. Depending on the plan, it may also include SEO, Google Ads management, social media marketing, content creation, and lead generation support.",
  },
  {
    question: "Do you offer custom pricing for businesses?",
    answer:
      "Yes. Every business has different requirements, so we offer custom plans based on your goals, industry, target location, and monthly marketing budget.",
  },
  {
    question: "Is there any setup or onboarding fee?",
    answer:
      "Most plans include free onboarding. For advanced projects like full campaign setup, analytics integration, or website optimization, a one-time setup fee may apply depending on the scope.",
  },
  {
    question: "Can I upgrade or downgrade my plan anytime?",
    answer:
      "Yes. You can upgrade, downgrade, or switch plans anytime. We keep the process flexible so your marketing grows along with your business needs.",
  },
  {
    question: "Do you offer a contract or monthly billing?",
    answer:
      "We offer both monthly plans and long-term packages. Monthly billing is best for flexibility, while 3–6 month packages provide better pricing and stronger long-term growth results.",
  },
  {
    question: "How do payments work?",
    answer:
      "Payments are typically billed monthly in advance. Once payment is confirmed, we start planning, execution, and reporting immediately. We also provide invoices for every transaction.",
  },
  {
    question: "Will I get a report every month?",
    answer:
      "Yes. You’ll receive a detailed monthly report including performance metrics, campaign progress, leads generated, and recommendations for improvement.",
  },
  {
    question: "Do you guarantee leads or sales?",
    answer:
      "We don’t promise unrealistic guarantees, but we do guarantee strategic execution and optimization. Our goal is always to maximize ROI, improve conversions, and scale your growth consistently.",
  },
];

export default function Pricing() {
  const [activeService, setActiveService] = useState("ai");
  const [showModal, setShowModal] = useState(false);
  const [modalService, setModalService] = useState("ai");
  const [billingCycle, setBillingCycle] = useState("monthly");
  const activePlans = plansData[modalService]?.plans || plansData.ai.plans;

  const openModal = (serviceId) => {
    setModalService(serviceId);
    setShowModal(true);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setShowModal(false);
    // Restore body scrolling
    document.body.style.overflow = "auto";
  };

  const handleServiceClick = (serviceId) => {
    setActiveService(serviceId);
    openModal(serviceId);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <InnerHero
        title="Our Pricing"
        subtitle="Affordable plans designed to grow your brand and boost results."
        bgImage="/innerHero.jpg"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Pricing" }]}
      />

      {/* How it Works */}
      <div className="w-full py-12 bg-[#96b3e9]">
        <div className="rounded-2xl p-8 text-center max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How Our Pricing Works
          </h2>
          <p className="text-gray-600 max-w-5xl mx-auto text-lg">
            Click on any service to view its plans in detail. Each service
            includes three tailored tiers to match your needs and growth stage.
          </p>
        </div>
      </div>

      {/* Service Tabs */}
      <div className="w-full py-8 bg-secondary">
        <div className="mb-10 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            Select Your Service
          </h2>

          {/* Desktop Tabs */}
          <div className="hidden lg:grid grid-cols-3 gap-4">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => handleServiceClick(service.id)}
                className={`group p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                  activeService === service.id
                    ? "border-blue-500 bg-gradient-to-br from-white to-blue-50 shadow-lg shadow-blue-500/10"
                    : "border-gray-200 hover:border-blue-300 hover:shadow-md"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center`}
                  >
                    <service.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {service.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {service.description}
                    </p>
                    <div
                      className={`mt-3 text-sm font-medium ${
                        activeService === service.id
                          ? "text-blue-600"
                          : "text-gray-500 group-hover:text-blue-500"
                      }`}
                    >
                      View plans →
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Mobile Select */}
          <div className="lg:hidden">
            <select
              value={activeService}
              onChange={(e) => handleServiceClick(e.target.value)}
              className="w-full p-4 border-2 border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:border-blue-500"
            >
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.name} - {service.description}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Main Content - No plans shown here, just other sections */}

        {/* FAQs */}
        <FaqAccordion
          title="Pricing FAQs"
          subtitle="Everything you need to know about our plans and pricing."
          linkText="Talk to our pricing experts."
          linkHref="/contact"
          faqs={pricingFaqs}
          defaultOpenIndex={0}
        />
        {/* Custom Plan CTA */}
        <ServiceCTA />
      </div>

      {/* Modal/Popup for Plans */}
      {showModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeModal}
          />

          {/* Modal Content */}
          <div className="relative min-h-screen flex items-center justify-center p-4">
            <div className="relative bg-white rounded-3xl w-full max-w-6xl max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-8 pt-6 pb-4 rounded-t-3xl">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      {plansData[modalService]?.name || "Plans"} Pricing
                    </h2>
                    <p className="text-gray-600 mt-2">
                      Choose the perfect plan for your needs
                    </p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X size={28} className="text-gray-500" />
                  </button>
                </div>

                {/* Billing Toggle inside Modal */}
                <div className="flex justify-center mb-6">
                  <div className="inline-flex bg-gray-100 p-1 rounded-xl">
                    <button
                      onClick={() => setBillingCycle("monthly")}
                      className={`px-6 py-3 rounded-lg font-medium transition-all ${
                        billingCycle === "monthly"
                          ? "bg-white shadow text-blue-600"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      Monthly Billing
                    </button>
                    <button
                      onClick={() => setBillingCycle("yearly")}
                      className={`px-6 py-3 rounded-lg font-medium transition-all ${
                        billingCycle === "yearly"
                          ? "bg-white shadow text-blue-600"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      Yearly Billing{" "}
                      <span className="text-green-600 text-sm ml-1">
                        (Save 20%)
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Modal Body - Plans Grid */}
              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  {activePlans.map((plan, index) => (
                    <div
                      key={index}
                      className={`relative rounded-3xl border-2 transition-all duration-300 hover:shadow-xl ${
                        plan.popular
                          ? "border-blue-500 shadow-lg shadow-blue-500/20"
                          : "border-gray-200 hover:border-blue-300"
                      }`}
                    >
                      {plan.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <div className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-full whitespace-nowrap">
                            Most Popular
                          </div>
                        </div>
                      )}

                      <div className="p-8">
                        {/* Plan Header */}
                        <div className="mb-8">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-2xl font-bold text-gray-900">
                              {plan.name}
                            </h3>
                            {plan.popular && (
                              <Star
                                className="text-yellow-400 fill-yellow-400"
                                size={20}
                              />
                            )}
                          </div>
                          <p className="text-lg font-bold text-gray-900 mb-1">
                            {plan.price}
                          </p>
                          <p className="text-gray-500 text-sm mb-4">
                            {plan.billing}
                          </p>
                          <p className="text-gray-600">{plan.description}</p>
                        </div>

                        {/* Ideal For */}
                        <div className="mb-8 p-4 bg-gray-50 rounded-xl">
                          <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                            <Target size={16} />
                            <span>Ideal for:</span>
                          </div>
                          <p className="font-medium text-gray-900">
                            {plan.idealFor}
                          </p>
                        </div>

                        {/* Features */}
                        <div className="space-y-4 mb-8">
                          <h4 className="font-bold text-gray-900">
                            What's included:
                          </h4>
                          {plan.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              {feature.included ? (
                                <Check
                                  className="text-green-500 mt-1 flex-shrink-0"
                                  size={18}
                                />
                              ) : (
                                <X
                                  className="text-gray-300 mt-1 flex-shrink-0"
                                  size={18}
                                />
                              )}
                              <span
                                className={`text-sm ${feature.included ? "text-gray-700" : "text-gray-400"}`}
                              >
                                {feature.text}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* CTA Button */}
                        <button
                          className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                            plan.popular
                              ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-lg hover:shadow-blue-500/30"
                              : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                          }`}
                        >
                          {plan.cta}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Plan Comparison inside Modal */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
                    Compare Plan Features
                  </h2>

                  <div className="overflow-x-auto rounded-2xl border border-gray-200">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="p-6 text-left text-gray-900 font-bold">
                            Features
                          </th>
                          {activePlans.map((plan, index) => (
                            <th key={index} className="p-6 text-center">
                              <div className="font-bold text-gray-900">
                                {plan.name}
                              </div>
                              <div className="text-sm text-gray-500 mt-1">
                                {plan.price}
                              </div>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { feature: "Strategy Session", icon: Target },
                          { feature: "Customization", icon: Sparkles },
                          { feature: "Reporting & Analytics", icon: BarChart },
                          { feature: "Support Level", icon: Headphones },
                          { feature: "Response Time", icon: Clock },
                          { feature: "Performance Guarantee", icon: Shield },
                        ].map((row, rowIndex) => (
                          <tr
                            key={rowIndex}
                            className={
                              rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"
                            }
                          >
                            <td className="p-6 font-medium text-gray-900">
                              <div className="flex items-center gap-3">
                                <row.icon size={20} className="text-blue-500" />
                                {row.feature}
                              </div>
                            </td>
                            {activePlans.map((plan, planIndex) => (
                              <td key={planIndex} className="p-6 text-center">
                                {rowIndex === 0 &&
                                  plan.features[0]?.included && (
                                    <div className="flex items-center justify-center gap-2">
                                      <Check
                                        className="text-green-500"
                                        size={20}
                                      />
                                      <span className="text-sm text-gray-600">
                                        Included
                                      </span>
                                    </div>
                                  )}
                                {rowIndex === 1 && (
                                  <span className="text-gray-700 font-medium">
                                    {plan.name === "Starter"
                                      ? "Basic"
                                      : plan.name === "Growth"
                                        ? "Advanced"
                                        : "Full"}
                                  </span>
                                )}
                                {rowIndex === 2 && (
                                  <span className="text-gray-700 font-medium">
                                    {plan.name === "Starter"
                                      ? "Monthly"
                                      : plan.name === "Growth"
                                        ? "Bi-weekly"
                                        : "Weekly + Live"}
                                  </span>
                                )}
                                {rowIndex === 3 && (
                                  <span className="text-gray-700 font-medium">
                                    {plan.name === "Starter"
                                      ? "Email"
                                      : plan.name === "Growth"
                                        ? "Priority"
                                        : "Dedicated"}
                                  </span>
                                )}
                                {rowIndex === 4 && (
                                  <span className="text-gray-700 font-medium">
                                    {plan.name === "Starter"
                                      ? "48h"
                                      : plan.name === "Growth"
                                        ? "24h"
                                        : "4h"}
                                  </span>
                                )}
                                {rowIndex === 5 && (
                                  <span
                                    className={`font-medium ${
                                      plan.name === "Starter"
                                        ? "text-gray-400"
                                        : plan.name === "Growth"
                                          ? "text-green-600"
                                          : "text-green-600"
                                    }`}
                                  >
                                    {plan.name === "Starter"
                                      ? "No"
                                      : plan.name === "Growth"
                                        ? "Partial"
                                        : "Full"}
                                  </span>
                                )}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
