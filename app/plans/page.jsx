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
  name: "Google Local Ranking",
  plans: [
    {
      name: "Starter",
      tagline: "Boost local visibility fast",
      description:
        "Perfect for small businesses that want to improve Google Maps ranking and attract more local customers.",
      price: "$399",
      billing: "Per month",
      popular: false,
      idealFor: "Local shops & new businesses",
      features: [
        { text: "Google Business Profile audit", included: true },
        { text: "Profile optimization (title, category, services)", included: true },
        { text: "NAP consistency check", included: true },
        { text: "Basic keyword research for local SEO", included: true },
        { text: "Monthly performance report", included: true },
        { text: "Weekly Google posts (1 per week)", included: false },
        { text: "Review management & response support", included: false },
        { text: "Local citation building", included: false },
        { text: "Geo-targeted local backlinks", included: false },
      ],
      cta: "Get Started",
    },
    {
      name: "Growth",
      tagline: "Rank higher on Google Maps",
      description:
        "For businesses ready to dominate local search results and generate consistent calls, leads, and store visits.",
      price: "$799",
      billing: "Per month",
      popular: true,
      idealFor: "Growing local service businesses",
      features: [
        { text: "Everything in Starter", included: true },
        { text: "Advanced local keyword strategy", included: true },
        { text: "Google Business Profile weekly optimization", included: true },
        { text: "Google posts (2 per week)", included: true },
        { text: "Local citation building (10 citations/month)", included: true },
        { text: "Review management strategy", included: true },
        { text: "Competitor tracking & analysis", included: true },
        { text: "Location-based service area optimization", included: true },
        { text: "Local backlinks & authority building", included: false },
      ],
      cta: "Choose Growth",
    },
    {
      name: "Scale",
      tagline: "Dominate multiple locations",
      description:
        "A complete local SEO + Google Maps ranking solution for businesses targeting multiple areas or multiple branches.",
      price: "Custom",
      billing: "Tailored package",
      popular: false,
      idealFor: "Multi-location brands & franchises",
      features: [
        { text: "Everything in Growth", included: true },
        { text: "Multi-location Google profile management", included: true },
        { text: "Advanced citation building campaign", included: true },
        { text: "Geo-grid ranking tracking (local map pack)", included: true },
        { text: "Google posts (3–5 per week)", included: true },
        { text: "Ongoing review generation campaigns", included: true },
        { text: "High-authority local backlinks", included: true },
        { text: "Monthly strategy call & optimization plan", included: true },
        { text: "Dedicated account manager", included: true },
      ],
      cta: "Contact Sales",
    },
  ],
},

seo: {
  name: "SEO",
  plans: [
    {
      name: "Basic",
      tagline: "Start ranking on Google",
      description:
        "Perfect for small businesses looking to improve visibility and attract organic traffic with essential SEO work.",
      price: "$500",
      billing: "Per month",
      popular: false,
      idealFor: "Small businesses & startups",
      features: [
        { text: "Website SEO audit & analysis", included: true },
        { text: "Keyword research (10 keywords)", included: true },
        { text: "On-page SEO optimization (5 pages)", included: true },
        { text: "Meta title & description optimization", included: true },
        { text: "Technical SEO basic fixes", included: true },
        { text: "Google Search Console setup", included: true },
        { text: "Google Analytics setup", included: true },
        { text: "Monthly SEO performance report", included: true },
        { text: "Content writing & blog posting", included: false },
        { text: "Backlink building campaign", included: false },
        { text: "Local SEO optimization", included: false },
      ],
      cta: "Get Started",
    },

    {
      name: "Standard",
      tagline: "Grow traffic & generate leads",
      description:
        "Best for growing businesses that want consistent ranking improvements, higher traffic, and quality leads.",
      price: "$800",
      billing: "Per month",
      popular: true,
      idealFor: "Growing brands & service businesses",
      features: [
        { text: "Everything in Basic", included: true },
        { text: "Keyword research (25 keywords)", included: true },
        { text: "On-page SEO optimization (10 pages)", included: true },
        { text: "Technical SEO optimization & speed fixes", included: true },
        { text: "Internal linking optimization", included: true },
        { text: "Content plan & SEO strategy", included: true },
        { text: "Blog writing (2 blogs/month)", included: true },
        { text: "Backlink building (5 backlinks/month)", included: true },
        { text: "Local SEO setup (Google Business Profile)", included: true },
        { text: "Competitor SEO analysis", included: true },
        { text: "Monthly strategy call", included: false },
      ],
      cta: "Choose Standard",
    },

    {
      name: "Advanced",
      tagline: "Dominate search results",
      description:
        "Designed for businesses that want aggressive SEO growth, top rankings, and long-term authority building.",
      price: "$1500",
      billing: "Per month",
      popular: false,
      idealFor: "Enterprises & competitive industries",
      features: [
        { text: "Everything in Standard", included: true },
        { text: "Keyword research (50+ keywords)", included: true },
        { text: "On-page SEO optimization (20+ pages)", included: true },
        { text: "Advanced technical SEO fixes", included: true },
        { text: "Core Web Vitals & speed optimization", included: true },
        { text: "Content writing (4 blogs/month)", included: true },
        { text: "High-quality backlink building (10+ backlinks/month)", included: true },
        { text: "Guest posting & outreach strategy", included: true },
        { text: "Conversion rate optimization (CRO suggestions)", included: true },
        { text: "Advanced competitor tracking", included: true },
        { text: "Weekly performance reporting", included: true },
        { text: "Dedicated SEO manager", included: true },
      ],
      cta: "Choose Advanced",
    },
  ],
},



websiteDevelopment: {
  name: "Website Development",
  plans: [
    {
      name: "Standard",
      tagline: "Professional business website",
      description:
        "Perfect for startups and businesses that need a modern, responsive website to build trust and generate leads.",
      price: "$1500 + GST",
      billing: "One-time project",
      popular: false,
      idealFor: "Small businesses & service providers",
      features: [
        { text: "Custom modern UI design", included: true },
        { text: "Mobile responsive layout", included: true },
        { text: "Up to 5 pages website", included: true },
        { text: "SEO-friendly structure", included: true },
        { text: "Contact form integration", included: true },
        { text: "Basic speed optimization", included: true },
        { text: "Social media links integration", included: true },
        { text: "Google Analytics setup", included: true },
        { text: "Blog / CMS integration", included: false },
        { text: "Advanced animations (Framer Motion)", included: false },
        { text: "Payment gateway integration", included: false },
      ],
      cta: "Get Started",
    },

    {
      name: "Advanced",
      tagline: "High-performance premium website",
      description:
        "Best for businesses that want a premium website with advanced UI, animations, and higher conversion focus.",
      price: "$2000 + GST",
      billing: "One-time project",
      popular: true,
      idealFor: "Growing brands & agencies",
      features: [
        { text: "Everything in Standard", included: true },
        { text: "Up to 10 pages website", included: true },
        { text: "Custom animations & transitions", included: true },
        { text: "Advanced speed optimization", included: true },
        { text: "SEO optimization (on-page basics)", included: true },
        { text: "WhatsApp chat integration", included: true },
        { text: "Blog / CMS integration", included: true },
        { text: "Lead capture forms & CTA sections", included: true },
        { text: "Admin dashboard (basic)", included: false },
        { text: "Multi-language support", included: false },
        { text: "Custom API integration", included: false },
      ],
      cta: "Choose Advanced",
    },

    {
      name: "E-Commerce",
      tagline: "Sell online with full store setup",
      description:
        "Complete e-commerce website solution for online selling with product management, payments, and order tracking.",
      price: "$3000 + GST",
      billing: "One-time project",
      popular: false,
      idealFor: "Online stores & product-based businesses",
      features: [
        { text: "Custom e-commerce UI design", included: true },
        { text: "Mobile responsive store design", included: true },
        { text: "Product listing & category system", included: true },
        { text: "Cart & checkout system", included: true },
        { text: "Payment gateway integration", included: true },
        { text: "Order management dashboard", included: true },
        { text: "Customer login & accounts", included: true },
        { text: "Basic SEO setup for products", included: true },
        { text: "Shipping configuration support", included: true },
        { text: "Coupon & discount system", included: true },
        { text: "Advanced security & performance optimization", included: true },
        { text: "Training & handover support", included: true },
      ],
      cta: "Contact Sales",
    },
  ],
},
socialMediaMarketing: {
  name: "Social Media Marketing",
  plans: [
    {
      name: "Standard",
      tagline: "Grow your brand on social platforms",
      description:
        "Perfect for businesses looking to build a strong social presence, increase engagement, and attract more customers through consistent posting.",
      price: "$450 + GST",
      billing: "Per month",
      popular: true,
      idealFor: "Small businesses & growing brands",
      features: [
        { text: "Social media strategy & content planning", included: true },
        { text: "Monthly content calendar", included: true },
        { text: "10–12 creative posts per month", included: true },
        { text: "Professional post design (graphics)", included: true },
        { text: "Caption writing with hashtags", included: true },
        { text: "Instagram & Facebook management", included: true },
        { text: "Engagement support (basic)", included: true },
        { text: "Monthly performance report", included: true },
        { text: "Reels / video editing", included: false },
        { text: "Paid ads campaign management", included: false },
        { text: "Daily posting", included: false },
      ],
      cta: "Get Started",
    },
  ],
},
ppc: {
  name: "PPC (Google Ads)",
  plans: [
    {
      name: "Complete Setup",
      tagline: "Launch high-converting ad campaigns",
      description:
        "Perfect for businesses that want instant leads and sales through professionally managed Google Ads campaigns.",
      price: "$400 + GST",
      billing: "One-time setup",
      popular: true,
      idealFor: "Lead generation & quick business growth",
      features: [
        { text: "Google Ads account setup", included: true },
        { text: "Campaign structure planning", included: true },
        { text: "Keyword research & targeting", included: true },
        { text: "Search ads campaign setup", included: true },
        { text: "Ad copywriting (high-converting ads)", included: true },
        { text: "Conversion tracking setup (GA4 + Tag Manager)", included: true },
        { text: "Landing page recommendation & optimization tips", included: true },
        { text: "Audience & location targeting setup", included: true },
        { text: "Negative keyword setup", included: true },
        { text: "Basic remarketing setup", included: true },
        { text: "Performance report after 7 days", included: true },
        { text: "Ongoing monthly ads management", included: false },
      ],
      adsBudget: "Recommended Ads Budget: $500 – $2000 / month (depends on industry)",
      cta: "Start PPC Setup",
    },
  ],
},
appDevelopment: {
  name: "App Development",
  plans: [
    {
      name: "Starter",
      tagline: "Launch your MVP app",
      description:
        "Perfect for startups and small businesses looking to build a simple mobile app with essential features.",
      price: "$2500 + GST",
      billing: "One-time project",
      popular: false,
      idealFor: "MVP apps & early-stage startups",
      features: [
        { text: "UI/UX design (basic screens)", included: true },
        { text: "Android app development", included: true },
        { text: "Up to 5 screens/pages", included: true },
        { text: "Basic authentication (login/signup)", included: true },
        { text: "API integration (basic)", included: true },
        { text: "Firebase / database setup", included: true },
        { text: "Basic admin panel (optional)", included: false },
        { text: "Play Store publishing support", included: true },
        { text: "Push notifications", included: false },
        { text: "Payment gateway integration", included: false },
        { text: "iOS development", included: false },
      ],
      cta: "Get Started",
    },

    {
      name: "Standard",
      tagline: "Professional business app",
      description:
        "Best for businesses that need a fully functional app with modern design, advanced features, and better performance.",
      price: "$4500 + GST",
      billing: "One-time project",
      popular: true,
      idealFor: "Business apps & service platforms",
      features: [
        { text: "Everything in Starter", included: true },
        { text: "Android + iOS development", included: true },
        { text: "Up to 10–12 screens/pages", included: true },
        { text: "Custom UI/UX design", included: true },
        { text: "Advanced API integration", included: true },
        { text: "Admin panel dashboard (basic)", included: true },
        { text: "Push notifications setup", included: true },
        { text: "Google Maps integration", included: true },
        { text: "App performance optimization", included: true },
        { text: "Play Store + App Store publishing support", included: true },
        { text: "Payment gateway integration", included: false },
      ],
      cta: "Choose Standard",
    },

    {
      name: "Premium",
      tagline: "Full-scale enterprise app",
      description:
        "Complete app development solution with advanced features, payment systems, admin control, and scalable backend.",
      price: "$8000 + GST",
      billing: "One-time project",
      popular: false,
      idealFor: "Enterprises & scalable platforms",
      features: [
        { text: "Everything in Standard", included: true },
        { text: "Custom backend development (Node/Express)", included: true },
        { text: "Advanced admin dashboard", included: true },
        { text: "Payment gateway integration", included: true },
        { text: "Subscription / membership system", included: true },
        { text: "Role-based access control (RBAC)", included: true },
        { text: "Chat / messaging system (optional)", included: true },
        { text: "Real-time notifications", included: true },
        { text: "Advanced security implementation", included: true },
        { text: "Deployment + server setup support", included: true },
        { text: "1 month free maintenance support", included: true },
      ],
      cta: "Contact Sales",
    },
  ],
}, 

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
