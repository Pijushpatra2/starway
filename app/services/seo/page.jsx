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
  Search,
  MapPin,
  Globe,
  Shield,
  Users,
  Eye,
  Clock,
  Award,
  TrendingDown,
  LineChart,
  PieChart,
  Filter,
  Settings,
  FileText,
  Calendar,
  MessageSquare,
  Phone,
  ChevronRight,
  Download,
  MessageCircle,
  Play,
  Building,
  Store,
  ShoppingBag,
  HeartPulse,
  Utensils,
  Home,
  Search as SearchIcon,
  Target as TargetIcon,
  TrendingUp as TrendingUpIcon,
  Shield as ShieldIcon,
  Users as UsersIcon,
  Award as AwardIcon,
  Filter as FilterIcon,
  Globe as GlobeIcon,
  MapPin as MapPinIcon,
  BarChart as BarChartIcon,
  CheckSquare,
  XCircle
} from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import FinalServiceCTA from "@/components/Services/InnerServiceCTA";

export default function SeoPage() {
  // Why SEO is critical
  const benefits = [
    {
      icon: Search,
      title: "Capture High-Intent Traffic",
      description: "Reach customers actively searching for your services",
      stat: "72% higher intent"
    },
    {
      icon: Clock,
      title: "Long-Term Visibility",
      description: "Unlike ads, SEO provides sustainable ranking",
      stat: "24/7 lead generation"
    },
    {
      icon: Shield,
      title: "Build Trust Through Rankings",
      description: "Google rankings establish instant credibility",
      stat: "3.5x more trusted"
    },
    {
      icon: Users,
      title: "Drive Qualified Leads",
      description: "Search traffic converts at higher rates",
      stat: "45% higher conversions"
    },
    {
      icon: TrendingUp,
      title: "Amplify Other Channels",
      description: "SEO enhances paid ads and content marketing",
      stat: "62% better ROAS"
    }
  ];

  // Services included
  const services = [
    {
      icon: SearchIcon,
      title: "Keyword Research",
      description: "Data-driven keyword strategy for maximum impact",
      features: [
        "Competitor Keyword Analysis",
        "Search Intent Mapping",
        "Local Keyword Research",
        "Seasonal Trend Analysis"
      ],
      color: "from-blue-600 to-indigo-600"
    },
    {
      icon: FileText,
      title: "On-Page SEO",
      description: "Optimize every page for search engines and users",
      features: [
        "Content Optimization",
        "Meta Tag Strategy",
        "Internal Linking",
        "SEO-Focused Content"
      ],
      color: "from-green-600 to-emerald-600"
    },
    {
      icon: Settings,
      title: "Technical SEO",
      description: "Optimize website infrastructure and performance",
      features: [
        "Core Web Vitals",
        "Site Speed Optimization",
        "Indexing & Crawling",
        "Mobile-First Optimization"
      ],
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: MapPinIcon,
      title: "Local SEO",
      description: "Dominate local search and Google Maps",
      features: [
        "Google Business Profile",
        "Local Citation Building",
        "NAP Consistency",
        "Local Review Strategy"
      ],
      color: "from-amber-600 to-orange-600"
    },
    {
      icon: GlobeIcon,
      title: "Authority Building",
      description: "Establish domain authority and trust",
      features: [
        "Backlink Strategy",
        "Content Authority",
        "Brand Mentions",
        "Industry Partnerships"
      ],
      color: "from-red-600 to-rose-600"
    },
    {
      icon: BarChartIcon,
      title: "SEO Analytics",
      description: "Track performance and optimize strategies",
      features: [
        "Rank Tracking",
        "Traffic Analysis",
        "Conversion Tracking",
        "Competitor Monitoring"
      ],
      color: "from-indigo-600 to-blue-800"
    }
  ];

  // Our process
  const process = [
    {
      step: "01",
      title: "Comprehensive SEO Audit",
      description: "Deep analysis of your website and competitive landscape",
      activities: [
        "Website Health Check",
        "Competitor Analysis",
        "Technical Assessment",
        "Keyword Gap Analysis"
      ],
      icon: Search
    },
    {
      step: "02",
      title: "Strategic Planning",
      description: "Develop data-driven SEO strategy aligned with business goals",
      activities: [
        "Keyword Strategy",
        "Content Roadmap",
        "Technical Requirements",
        "Local SEO Plan"
      ],
      icon: TargetIcon
    },
    {
      step: "03",
      title: "Implementation",
      description: "Execute optimization across all SEO pillars",
      activities: [
        "On-Page Optimization",
        "Technical Improvements",
        "Content Creation",
        "Local SEO Setup"
      ],
      icon: Settings
    },
    {
      step: "04",
      title: "Authority Building",
      description: "Establish credibility and trust signals",
      activities: [
        "Link Building",
        "Content Marketing",
        "Local Citations",
        "Review Management"
      ],
      icon: TrendingUpIcon
    },
    {
      step: "05",
      title: "Monitoring & Optimization",
      description: "Continuous improvement based on performance data",
      activities: [
        "Performance Tracking",
        "Strategy Adjustment",
        "Competitor Response",
        "Monthly Reporting"
      ],
      icon: BarChart
    }
  ];

  // Local SEO focus
  const localSeoFeatures = [
    {
      icon: MapPin,
      title: "Google Maps Optimization",
      description: "Secure top positions in local map pack results",
      metrics: "75% of clicks go to top 3"
    },
    {
      icon: Building,
      title: "Local Citation Building",
      description: "Consistent business information across directories",
      metrics: "42 directories managed"
    },
    {
      icon: Users,
      title: "Review Management",
      description: "Build trust through authentic customer reviews",
      metrics: "4.8★ average rating"
    },
    {
      icon: Target,
      title: "Local Keyword Strategy",
      description: "Optimize for near me and location-based searches",
      metrics: "500% growth in near me searches"
    }
  ];

  // Expected outcomes
  const outcomes = [
    {
      metric: "312%",
      title: "Organic Traffic Growth",
      description: "Sustainable increase in search engine traffic",
      icon: TrendingUp
    },
    {
      metric: "Top 3",
      title: "Local Rankings",
      description: "Secure position in Google's Local 3-Pack",
      icon: Target
    },
    {
      metric: "4.8x",
      title: "More Qualified Leads",
      description: "Higher quality leads from search traffic",
      icon: UsersIcon
    },
    {
      metric: "68%",
      title: "Call Increase",
      description: "More phone calls from Google search results",
      icon: Phone
    },
    {
      metric: "24/7",
      title: "Lead Generation",
      description: "Continuous traffic while you sleep",
      icon: Clock
    },
    {
      metric: "5.2x",
      title: "ROI",
      description: "Average return on SEO investment",
      icon: AwardIcon
    }
  ];

  // Who it's best for
  const targetAudiences = [
    {
      title: "Local Service Businesses",
      description: "Plumbers, electricians, contractors, and home services",
      icon: Home,
      industries: ["Home Services", "Contractors", "Maintenance"],
      results: ["Top 3 local ranking", "+45% call volume", "90% direction requests"]
    },
    {
      title: "Multi-Location Brands",
      description: "Franchises, chains, and businesses with multiple locations",
      icon: Building,
      industries: ["Franchises", "Retail Chains", "Service Networks"],
      results: ["Location-specific SEO", "Brand consistency", "Centralized management"]
    },
    {
      title: "E-commerce Websites",
      description: "Online stores driving organic product search traffic",
      icon: ShoppingBag,
      industries: ["E-commerce", "D2C Brands", "Online Retail"],
      results: ["Product page optimization", "Category ranking", "SEO-driven sales"]
    },
    {
      title: "Healthcare & Professional",
      description: "Clinics, hospitals, lawyers, and professional services",
      icon: HeartPulse,
      industries: ["Healthcare", "Legal", "Professional Services"],
      results: ["Trust building", "Local dominance", "Appointment bookings"]
    },
    {
      title: "Reducing Ad Dependency",
      description: "Businesses wanting sustainable growth beyond paid ads",
      icon: TrendingDown,
      industries: ["All Industries", "Growth-focused", "Sustainable"],
      results: ["Lower CAC", "Higher LTV", "Predictable growth"]
    }
  ];

  // Why choose us
  const whyChooseUs = [
    {
      icon: ShieldIcon,
      title: "White-Hat Strategies",
      description: "Ethical SEO that delivers sustainable results"
    },
    {
      icon: FilterIcon,
      title: "Search Intent Focus",
      description: "Optimize for user needs, not just keywords"
    },
    {
      icon: MapPin,
      title: "Local SEO Specialists",
      description: "Deep expertise in local search domination"
    },
    {
      icon: BarChartIcon,
      title: "Transparent Reporting",
      description: "Clear metrics showing real business impact"
    },
    {
      icon: Clock,
      title: "Long-Term Partnership",
      description: "Focus on sustainable growth, not quick wins"
    },
    {
      icon: UsersIcon,
      title: "Results-Driven Approach",
      description: "Everything we do drives measurable business outcomes"
    }
  ];

  // Case studies
  const caseStudies = [
    {
      client: "HVAC Services Company",
      location: "Chicago Metro",
      duration: "6 Months",
      challenge: "Not ranking for local HVAC searches",
      solution: "Comprehensive local SEO strategy",
      metrics: {
        before: { ranking: "Page 2", calls: "15/week", traffic: "120/month" },
        after: { ranking: "#1 Local Pack", calls: "68/week", traffic: "1,450/month" }
      },
      results: ["350% call increase", "#1 local ranking", "12x traffic growth"]
    },
    {
      client: "E-commerce Fashion Brand",
      location: "National",
      duration: "8 Months",
      challenge: "Low organic visibility for products",
      solution: "Technical SEO + content optimization",
      metrics: {
        before: { ranking: "Page 3-4", sales: "12/month", traffic: "850/month" },
        after: { ranking: "Page 1", sales: "142/month", traffic: "8,500/month" }
      },
      results: ["10x traffic growth", "Top 3 for 68 keywords", "92% sales increase"]
    },
    {
      client: "Dental Practice",
      location: "Austin, TX",
      duration: "4 Months",
      challenge: "New practice, zero local visibility",
      solution: "Local SEO + Google Maps optimization",
      metrics: {
        before: { ranking: "Not ranking", calls: "8/week", reviews: "0" },
        after: { ranking: "#2 Local Pack", calls: "42/week", reviews: "34" }
      },
      results: ["425% call growth", "34 new reviews", "First page dominance"]
    }
  ];

  // FAQ
  const faqs = [
    {
      question: "How long does SEO take to show results?",
      answer: "Initial technical improvements show within 30 days. Meaningful traffic growth typically appears within 3-4 months, with significant ranking improvements and lead generation by 6-8 months. SEO is a long-term strategy for sustainable growth."
    },
    {
      question: "Can you guarantee #1 rankings?",
      answer: "Ethical SEO agencies cannot guarantee specific rankings, as Google's algorithm changes frequently. However, we guarantee significant improvement in organic visibility, traffic, and lead generation based on our proven methodology and past client success."
    },
    {
      question: "Is SEO better than paid ads?",
      answer: "They work best together. SEO provides sustainable, long-term growth with higher credibility, while paid ads offer immediate traffic. SEO has lower long-term costs and builds assets that work for you 24/7. We recommend an integrated approach."
    },
    {
      question: "Do you handle local SEO?",
      answer: "Yes, local SEO is one of our specialties. We excel at Google Maps optimization, local citation building, review management, and location-based keyword strategies that drive calls and visits from nearby customers."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We have deep experience across all local service industries (plumbing, electrical, HVAC), healthcare, professional services, e-commerce, and multi-location businesses. Our strategies are adaptable to any industry with search presence."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <InnerHero
        title="SEO & Local Ranking That Drives Real Growth"
        subtitle="Rank where your customers are searching with proven, data-driven SEO strategies"
        bgImage="/seo-services.jpg"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "SEO & Local Ranking" },
        ]}
      />

      {/* What Is SEO & Local Ranking - Search Focused */}
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
              {/* Search UI Visualization */}
              <div className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                    <Search className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Google Search Results</h3>
                    <p className="text-gray-600 text-sm">How customers find you</p>
                  </div>
                </div>
                
                {/* Search results mockup */}
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4 py-2">
                    <div className="text-blue-600 font-medium">#1 - Your Business</div>
                    <div className="text-gray-800 font-semibold">Best Plumbing Services Near You</div>
                    <div className="text-gray-600 text-sm">★★★★★ (142 reviews) • Open now • 2 miles away</div>
                    <div className="flex gap-4 mt-2">
                      <span className="text-green-600 text-sm">(555) 123-4567</span>
                      <span className="text-blue-600 text-sm">Get Directions</span>
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-gray-300 pl-4 py-2 opacity-60">
                    <div className="text-gray-500">#2 - Competitor</div>
                    <div className="text-gray-700">Local Plumbing Services</div>
                    <div className="text-gray-500 text-sm">★★★★☆ (89 reviews)</div>
                  </div>
                  
                  <div className="border-l-4 border-gray-300 pl-4 py-2 opacity-40">
                    <div className="text-gray-500">#3 - Competitor</div>
                    <div className="text-gray-700">Emergency Plumbing</div>
                    <div className="text-gray-500 text-sm">★★★★☆ (67 reviews)</div>
                  </div>
                </div>
                
                {/* Search intent stats */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="text-lg font-bold text-blue-600">93%</div>
                    <div className="text-gray-700 text-sm">Start with search</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <div className="text-lg font-bold text-green-600">28%</div>
                    <div className="text-gray-700 text-sm">Result in purchase</div>
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
                Search Engine Dominance
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Be Found When Customers Search
              </h2>
              <div className="prose prose-lg text-gray-600 mb-8">
                <p className="text-lg leading-relaxed">
                  SEO helps your business appear when customers actively search for your products or services. 
                  Local SEO ensures you rank for "near me" searches, driving high-intent traffic, calls, and visits.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  It's not just about ranking—it's about being the obvious choice when customers are ready to buy.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-1">75%</div>
                  <div className="text-gray-700 text-sm">Never scroll past 3-pack</div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                  <div className="text-2xl font-bold text-green-600 mb-1">86%</div>
                  <div className="text-gray-700 text-sm">Use Google Maps locally</div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                  <div className="text-2xl font-bold text-purple-600 mb-1">4.2★</div>
                  <div className="text-gray-700 text-sm">Minimum trust threshold</div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                  <div className="text-2xl font-bold text-amber-600 mb-1">24/7</div>
                  <div className="text-gray-700 text-sm">Lead generation engine</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why SEO Is Critical - Search Pyramid */}
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
              Why SEO is Critical for Business Growth
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The strategic advantage of dominating search results
            </p>
          </motion.div>

          {/* Search Pyramid Visualization */}
          <div className="relative py-12">
            {/* Pyramid levels */}
            <div className="max-w-2xl mx-auto space-y-4">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                const levelHeight = 80 + idx * 20;
                
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div 
                      className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all"
                      style={{ marginLeft: `${idx * 20}px`, marginRight: `${idx * 20}px` }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 mb-1">{benefit.title}</h3>
                          <p className="text-gray-600 text-sm">{benefit.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-blue-700 font-semibold">{benefit.stat}</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Connecting line */}
                    {idx < benefits.length - 1 && (
                      <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-4">
                        <div className="w-1 h-4 bg-gradient-to-b from-blue-200 to-blue-100"></div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included - SEO Focus Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 text-sm font-medium mb-4">
              <Search className="w-4 h-4" />
              Comprehensive SEO Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What's Included in Our SEO Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end SEO optimization for maximum search visibility
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
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
                    {/* SEO background pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50 rounded-2xl transform rotate-1 group-hover:rotate-0 transition-transform"></div>
                    
                    <div className="relative bg-white rounded-2xl p-8 border border-gray-200 group-hover:border-blue-300 group-hover:shadow-xl transition-all h-full">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-7 h-7 text-white" />
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
                            <div className="w-2 h-2 rounded-full bg-blue-600"></div>
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
      </section>

      {/* Our Process - SEO Timeline */}
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
              Our 5-Step SEO Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to dominating search results
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
                        idx === 3 ? 'from-purple-600 to-purple-800' :
                        'from-indigo-600 to-indigo-800'
                      } flex items-center justify-center`}>
                        <span className="text-white font-bold">{step.step}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        <p className="text-gray-600 text-sm">{step.description}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {step.activities.map((activity, aIdx) => (
                        <div key={aIdx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                          <span className="text-gray-700 text-xs">{activity}</span>
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
                
                <div className="grid grid-cols-5 gap-4 relative">
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
                          <div className={`w-12 h-12 rounded-full border-4 border-white ${
                            idx === 0 ? 'bg-blue-600' :
                            idx === 1 ? 'bg-green-600' :
                            idx === 2 ? 'bg-amber-600' :
                            idx === 3 ? 'bg-purple-600' :
                            'bg-indigo-600'
                          } flex items-center justify-center`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        
                        {/* Content card */}
                        <div className="mt-16 bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
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

      {/* Local SEO Focus - Map Integration */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 text-sm font-medium mb-4">
              <MapPin className="w-4 h-4" />
              Local SEO Specialization
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Dominate "Near Me" Searches
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized strategies for local search domination
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Local SEO Features */}
            <div className="space-y-6">
              {localSeoFeatures.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon className="w-7 h-7 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-1">{feature.title}</h3>
                          <p className="text-gray-600 text-sm">{feature.description}</p>
                        </div>
                      </div>
                      <div className="pt-4 border-t border-gray-100">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50">
                          <span className="text-green-700 font-semibold text-sm">{feature.metrics}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Local Search Visualization */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Local Search Impact</h3>
                    <p className="text-gray-600 text-sm">How customers find local businesses</p>
                  </div>
                </div>

                {/* Local search stats */}
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>"Near me" searches</span>
                      <span className="font-semibold text-green-600">+500% growth</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Local pack clicks</span>
                      <span className="font-semibold text-blue-600">75% of total</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-3 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Mobile local searches</span>
                      <span className="font-semibold text-purple-600">76% on mobile</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full" style={{ width: '76%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Visit within 24 hours</span>
                      <span className="font-semibold text-amber-600">28% visit same day</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-amber-500 to-orange-500 h-3 rounded-full" style={{ width: '28%' }}></div>
                    </div>
                  </div>
                </div>

                {/* Local SEO tips */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-3">Local SEO Success Factors</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700 text-sm">NAP Consistency</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700 text-sm">Google Reviews</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700 text-sm">Local Keywords</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700 text-sm">Mobile Optimization</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expected Outcomes - SEO Dashboard */}
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
              Expected SEO Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What strategic SEO delivers for your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {outcomes.map((outcome, idx) => {
              const Icon = outcome.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center group-hover:scale-110 transition-transform">
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
                    
                    {/* Ranking progress */}
                    <div className="mt-4">
                      <div className="flex justify-between text-sm text-gray-500 mb-1">
                        <span>Before SEO</span>
                        <span>After 6 Months</span>
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
                <div className="text-3xl font-bold mb-2">312%</div>
                <div className="text-blue-200 text-sm">Traffic Growth</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">4.8x</div>
                <div className="text-blue-200 text-sm">More Qualified Leads</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">68%</div>
                <div className="text-blue-200 text-sm">Call Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">5.2x</div>
                <div className="text-blue-200 text-sm">ROI on SEO</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who This Service Is Best For - Industry Grid */}
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
              Who Needs Strategic SEO?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our approach delivers exceptional results for these business types
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
                  <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center group-hover:scale-110 transition-transform">
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
                        {audience.results.map((result, rIdx) => (
                          <div key={rIdx} className="flex items-center gap-3">
                            <TrendingUp className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{result}</span>
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
      </section>

      {/* Why Choose Us - Swiper Cards */}
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
              Why Choose Us for SEO
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What sets our SEO approach apart
            </p>
          </motion.div>

          <Swiper
            modules={[Autoplay, Navigation]}
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
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center mb-6">
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

      {/* Case Studies - SEO Dashboard */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              SEO Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from businesses dominating search results
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
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Client Info & Results */}
                  <div>
                    <div className="mb-6">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
                        SEO Case Study
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.client}</h3>
                      <div className="text-gray-600 text-sm mb-4">
                        <strong>Location:</strong> {study.location} • <strong>Duration:</strong> {study.duration}
                      </div>
                      <div className="text-gray-700 mb-4">
                        <strong>Challenge:</strong> {study.challenge}
                      </div>
                      <div className="text-gray-700">
                        <strong>Solution:</strong> {study.solution}
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {study.results.map((result, rIdx) => (
                        <div key={rIdx} className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-green-500" />
                          <span className="text-gray-700">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* SEO Metrics Dashboard */}
                  <div>
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-6 text-center">SEO Performance Dashboard</h4>
                      <div className="space-y-6">
                        <div>
                          <div className="flex justify-between text-sm text-gray-600 mb-2">
                            <span>Google Ranking</span>
                            <div className="flex gap-4">
                              <span className="text-gray-500">Before: {study.metrics.before.ranking}</span>
                              <span className="text-green-600 font-semibold">After: {study.metrics.after.ranking}</span>
                            </div>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-3 rounded-full" style={{ width: '92%' }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm text-gray-600 mb-2">
                            <span>Weekly Calls</span>
                            <div className="flex gap-4">
                              <span className="text-gray-500">Before: {study.metrics.before.calls}</span>
                              <span className="text-green-600 font-semibold">After: {study.metrics.after.calls}</span>
                            </div>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full" style={{ width: '78%' }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm text-gray-600 mb-2">
                            <span>Monthly Traffic</span>
                            <div className="flex gap-4">
                              <span className="text-gray-500">Before: {study.metrics.before.traffic}</span>
                              <span className="text-green-600 font-semibold">After: {study.metrics.after.traffic}</span>
                            </div>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full" style={{ width: '85%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs - SEO Focused */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              SEO FAQs
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about SEO & Local Ranking
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
                className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center flex-shrink-0">
                    <div className="text-blue-600 font-bold text-lg">Q</div>
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

      {/* Final CTA - SEO Focused */}
      <FinalServiceCTA
      icon={Search}
      title="Ready to Grow Your Online Visibility?"
      description="Get expert strategies tailored to your business goals and audience."
      formTitle="Get Your Free Strategy Session"
      challenges={[
        { value: "traffic", label: "Low Website Traffic" },
        { value: "leads", label: "Low Lead Generation" },
        { value: "ranking", label: "Poor Search Visibility" },
        { value: "conversion", label: "Low Conversion Rate" },
        { value: "other", label: "Other Challenge" },
      ]}
      primaryCta={{
        text: "Get Free Consultation",
        icon: Search,
      }}
      secondaryCta={{
        text: "Schedule a Call",
        icon: Phone,
      }}
      contactInfo={[
        { icon: Phone, text: "Call us: +91 98765 43210" },
        { icon: MessageCircle, text: "WhatsApp Available" },
      ]}
    />
    </main>
  );
}