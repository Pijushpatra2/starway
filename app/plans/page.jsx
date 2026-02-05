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

const services = [
  {
    id: "gmb",
    name: "Google Maps & GMB",
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
    name: "Website & App Development",
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
    id: "uiux",
    name: "UI/UX Design",
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
  branding: {
    name: "Branding",
    plans: [
      {
        name: "Starter",
        tagline: "Launch your brand identity",
        description:
          "Perfect for startups and small businesses looking to establish their visual presence.",
        price: "$2,499",
        billing: "One-time project",
        popular: false,
        idealFor: "Startups & new businesses",
        features: [
          { text: "Brand audit & strategy session", included: true },
          { text: "Logo design (2 concepts)", included: true },
          { text: "Color palette & typography", included: true },
          { text: "Basic brand guidelines PDF", included: true },
          { text: "Social media profile assets", included: true },
          { text: "Business card design", included: false },
          { text: "Full brand style guide", included: false },
          { text: "Brand messaging framework", included: false },
          { text: "Website design integration", included: false },
        ],
        cta: "Get Started",
      },
      {
        name: "Growth",
        tagline: "Complete brand system",
        description:
          "For growing businesses ready to scale with a professional brand identity.",
        price: "$4,999",
        billing: "One-time project",
        popular: true,
        idealFor: "Growing brands & scale-ups",
        features: [
          { text: "Everything in Starter", included: true },
          { text: "Logo variations & submarks", included: true },
          { text: "Complete visual identity system", included: true },
          { text: "Detailed brand guidelines", included: true },
          { text: "Brand asset library", included: true },
          { text: "Business collateral design", included: true },
          { text: "Brand voice & messaging", included: true },
          { text: "Website design templates", included: false },
          { text: "Brand launch strategy", included: false },
        ],
        cta: "Choose Growth",
      },
      {
        name: "Scale",
        tagline: "Enterprise brand excellence",
        description:
          "Comprehensive branding solution for established businesses and enterprises.",
        price: "Custom",
        billing: "Tailored package",
        popular: false,
        idealFor: "Enterprises & established brands",
        features: [
          { text: "Everything in Growth", included: true },
          { text: "Brand strategy workshop", included: true },
          { text: "Competitive analysis", included: true },
          { text: "Multi-channel brand system", included: true },
          { text: "Brand positioning framework", included: true },
          { text: "Employee brand guidelines", included: true },
          { text: "Brand launch campaign", included: true },
          { text: "Ongoing brand management", included: true },
          { text: "Quarterly brand reviews", included: true },
        ],
        cta: "Contact Sales",
      },
    ],
  },
  uiux: {
    name: "UI/UX Design",
    plans: [
      {
        name: "Starter",
        tagline: "Essential UX improvements",
        description: "Basic UX enhancements for existing products.",
        price: "$3,999",
        billing: "Project-based",
        popular: false,
        idealFor: "Product improvements",
        features: [
          { text: "UX audit & analysis", included: true },
          { text: "Wireframe prototypes", included: true },
          { text: "5 core screen designs", included: true },
          { text: "Basic design system", included: true },
          { text: "User flow optimization", included: false },
          { text: "Interactive prototypes", included: false },
          { text: "Mobile responsive designs", included: false },
          { text: "Design handoff to dev", included: false },
          { text: "User testing sessions", included: false },
        ],
        cta: "Start Project",
      },
      {
        name: "Growth",
        tagline: "Complete redesign",
        description: "Full product redesign with enhanced user experience.",
        price: "$8,999",
        billing: "Project-based",
        popular: true,
        idealFor: "Product redesigns",
        features: [
          { text: "Everything in Starter", included: true },
          { text: "Complete user research", included: true },
          { text: "High-fidelity UI designs", included: true },
          { text: "Advanced design system", included: true },
          { text: "Interactive prototypes", included: true },
          { text: "Mobile & tablet designs", included: true },
          { text: "Developer handoff", included: true },
          { text: "2 rounds of revisions", included: true },
          { text: "Ongoing support", included: false },
        ],
        cta: "Choose Growth",
      },
      {
        name: "Scale",
        tagline: "Enterprise design system",
        description: "Comprehensive design solution for complex products.",
        price: "Custom",
        billing: "Monthly retainer",
        popular: false,
        idealFor: "Enterprise products",
        features: [
          { text: "Everything in Growth", included: true },
          { text: "Advanced UX research", included: true },
          { text: "Complete design system", included: true },
          { text: "Multi-platform designs", included: true },
          { text: "Usability testing", included: true },
          { text: "Design operations setup", included: true },
          { text: "Team training & workshops", included: true },
          { text: "Dedicated designer", included: true },
          { text: "Priority support", included: true },
        ],
        cta: "Contact Sales",
      },
    ],
  },
  ai: {
    name: "AI Search Optimization",
    plans: [
      {
        name: "Starter",
        tagline: "AI Visibility Foundation",
        description: "Basic optimization to appear in AI search results.",
        price: "$999/mo",
        billing: "Monthly subscription",
        popular: false,
        idealFor: "Getting started with AI search",
        features: [
          { text: "AI visibility audit", included: true },
          { text: "Basic entity setup", included: true },
          { text: "AI-readable content optimization", included: true },
          { text: "Monthly performance report", included: true },
          { text: "ChatGPT optimization", included: true },
          { text: "Multi-platform AI optimization", included: false },
          { text: "Knowledge graph setup", included: false },
          { text: "Competitor tracking", included: false },
          { text: "Weekly optimization", included: false },
        ],
        cta: "Start AI Optimization",
      },
      {
        name: "Growth",
        tagline: "AI Search Dominance",
        description:
          "Comprehensive optimization across all major AI platforms.",
        price: "$2,499/mo",
        billing: "Monthly subscription",
        popular: true,
        idealFor: "Businesses serious about AI search",
        features: [
          { text: "Everything in Starter", included: true },
          { text: "Multi-platform optimization", included: true },
          { text: "Knowledge graph development", included: true },
          { text: "Weekly optimizations", included: true },
          { text: "Competitor analysis", included: true },
          { text: "Brand authority building", included: true },
          { text: "Advanced content structuring", included: true },
          { text: "Bi-weekly reports", included: true },
          { text: "Priority support", included: false },
        ],
        cta: "Choose Growth",
      },
      {
        name: "Scale",
        tagline: "Enterprise AI Authority",
        description: "Full-scale AI optimization with guaranteed results.",
        price: "Custom",
        billing: "Enterprise agreement",
        popular: false,
        idealFor: "Enterprises & market leaders",
        features: [
          { text: "Everything in Growth", included: true },
          { text: "Guaranteed AI rankings", included: true },
          { text: "Dedicated AI strategist", included: true },
          { text: "Daily monitoring & optimization", included: true },
          { text: "Custom AI integration strategy", included: true },
          { text: "Monthly strategy sessions", included: true },
          { text: "White-label reporting", included: true },
          { text: "24/7 priority support", included: true },
          { text: "Performance guarantees", included: true },
        ],
        cta: "Contact Enterprise",
      },
    ],
  },
  // Additional service plans can be added here
};

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
      <div className="w-[90%] max-w-7xl mx-auto py-8">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
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

        {/* Custom Plan CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-12 mb-20 text-center">
          <div className="max-w-2xl mx-auto">
            <Rocket className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              We create tailored growth plans combining multiple services based
              on your specific goals, timeline, and budget. Perfect for
              enterprises and businesses with unique requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openModal(activeService)}
                className="group px-8 py-4 bg-white rounded-xl flex items-center gap-3 text-lg font-bold text-blue-600 hover:shadow-xl transition-all duration-300"
              >
                View All Plans
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white rounded-xl text-lg font-bold text-white hover:bg-white/10 transition-all duration-300">
                Talk to Sales Team
              </button>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: "Can I upgrade or downgrade my plan later?",
                answer:
                  "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades apply at the next billing cycle.",
              },
              {
                question: "Are these monthly or one-time payments?",
                answer:
                  "It depends on the service. Most marketing services (SEO, PPC, Social) are monthly subscriptions. Design and development are typically one-time project fees.",
              },
              {
                question: "Do you offer custom pricing?",
                answer:
                  "Absolutely. For enterprises or businesses needing multiple services combined, we create custom packages with tailored pricing.",
              },
              {
                question: "What if I need multiple services?",
                answer:
                  "We offer bundled pricing for multiple services. Contact our sales team for a custom package that saves you 15-25% compared to individual services.",
              },
              {
                question: "Is there a minimum commitment?",
                answer:
                  "For monthly services, we require a 3-month minimum commitment to ensure we can deliver meaningful results. Project-based services have no minimum.",
              },
              {
                question: "Do you offer refunds?",
                answer:
                  "Yes, we offer a 14-day money-back guarantee for monthly services. Project-based work includes milestone-based payments with satisfaction guarantees.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <HelpCircle
                    className="text-blue-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-b from-white to-blue-50 rounded-3xl p-12">
          <MessageCircle className="w-16 h-16 text-blue-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Not Sure Which Plan Fits You?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Schedule a free consultation with our experts. We'll analyze your
            needs and recommend the perfect plan to achieve your goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openModal(activeService)}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center gap-3 text-lg font-bold text-white hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
            >
              View All Plans
              <Calendar className="group-hover:scale-110 transition-transform" />
            </button>
            <button className="px-8 py-4 border-2 border-blue-500 rounded-xl text-lg font-bold text-blue-600 hover:bg-blue-50 transition-all duration-300">
              Talk to an Expert
            </button>
            <button className="px-8 py-4 bg-gray-100 rounded-xl text-lg font-bold text-gray-900 hover:bg-gray-200 transition-all duration-300">
              Contact Us
            </button>
          </div>

          <div className="mt-10 text-gray-500">
            <p className="text-sm">
              Free consultation includes: Strategy review + Plan recommendation
              + Custom quote
            </p>
            <p className="text-sm mt-2">No commitment required</p>
          </div>
        </div>
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
