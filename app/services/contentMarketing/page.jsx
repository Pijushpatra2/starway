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
  Users,
  PenTool,
  FileText,
  Search,
  MessageSquare,
  Calendar,
  Clock,
  Award,
  Shield,
  BookOpen,
  Mail,
  Share2,
  ThumbsUp,
  Sparkles,
  Star,
  TrendingDown,
  Rocket,
  Filter,
  ChevronRight,
  Play,
  Download,
  Phone,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Twitter,
  Edit,
  Layers,
  PieChart,
  LineChart,
  Book,
  Type,
  Quote,
  ClipboardCheck,
  GraduationCap,
  Globe,
  Users as UsersIcon,
  Target as TargetIcon,
  Filter as FilterIcon,
  MessageCircle,
  Brain,
  Lightbulb,
  PieChart as PieChartIcon,
  Users as Users2,
  Shield as Shield2,
  TrendingUp as TrendingUp2,
  Search as Search2,
  Award as Award2
} from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function ContentMarketingPage() {
  // Why content builds trust
  const trustBenefits = [
    {
      icon: Shield,
      title: "Builds Credibility & Expertise",
      description: "Position your brand as an industry authority through valuable insights",
      stat: "3.8x more trusted"
    },
    {
      icon: GraduationCap,
      title: "Educates Before Selling",
      description: "Guide customers through their buying journey with helpful content",
      stat: "72% better conversion"
    },
    {
      icon: Search,
      title: "Supports SEO & Organic Traffic",
      description: "Attract qualified leads through search-optimized content",
      stat: "5.2x more organic traffic"
    },
    {
      icon: MessageSquare,
      title: "Strengthens Brand Messaging",
      description: "Create consistent brand voice across all touchpoints",
      stat: "68% brand recall"
    },
    {
      icon: TrendingUp,
      title: "Improves Conversion Rates",
      description: "Qualified traffic converts better than cold audiences",
      stat: "45% higher conversions"
    }
  ];

  // Services included
  const services = [
    {
      icon: Type,
      title: "Website Copywriting",
      description: "Compelling brand messaging for your digital presence",
      features: [
        "Homepage & About Page",
        "Service/Product Pages",
        "Landing Page Copy",
        "Value Proposition"
      ],
      color: "from-blue-600 to-indigo-600"
    },
    {
      icon: FileText,
      title: "Blog Articles & SEO",
      description: "Search-optimized content that drives organic traffic",
      features: [
        "SEO Topic Research",
        "Long-form Blog Articles",
        "Topic Clusters",
        "Keyword Optimization"
      ],
      color: "from-green-600 to-emerald-600"
    },
    {
      icon: BookOpen,
      title: "Case Studies & Stories",
      description: "Social proof that demonstrates real-world results",
      features: [
        "Customer Success Stories",
        "Detailed Case Studies",
        "Testimonial Collection",
        "Social Proof Integration"
      ],
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: Quote,
      title: "Testimonials & Proof",
      description: "Build trust through authentic customer experiences",
      features: [
        "Testimonial Strategy",
        "Review Collection",
        "Social Proof Pages",
        "Trust-Building Content"
      ],
      color: "from-amber-600 to-orange-600"
    },
    {
      icon: Calendar,
      title: "Content Planning",
      description: "Strategic roadmap for consistent content delivery",
      features: [
        "Editorial Calendar",
        "Content Strategy",
        "Publishing Schedule",
        "Campaign Planning"
      ],
      color: "from-red-600 to-rose-600"
    },
    {
      icon: BarChart,
      title: "Performance Tracking",
      description: "Data-driven optimization for maximum ROI",
      features: [
        "Content Analytics",
        "ROI Measurement",
        "Performance Reports",
        "Optimization Strategy"
      ],
      color: "from-indigo-600 to-blue-800"
    }
  ];

  // Our process
  const process = [
    {
      step: "01",
      title: "Discovery & Research",
      description: "Deep dive into your brand, audience, and competitive landscape",
      activities: [
        "Brand Voice Analysis",
        "Audience Persona Development",
        "Competitor Content Audit",
        "Keyword Research"
      ],
      icon: Search
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Create comprehensive content strategy aligned with business goals",
      activities: [
        "Content Pillars Definition",
        "Topic Cluster Planning",
        "Content Calendar Creation",
        "Distribution Strategy"
      ],
      icon: Target
    },
    {
      step: "03",
      title: "Content Creation",
      description: "Produce high-quality, strategic content across formats",
      activities: [
        "Copywriting & Editing",
        "SEO Optimization",
        "Visual Content Creation",
        "Quality Assurance"
      ],
      icon: PenTool
    },
    {
      step: "04",
      title: "Distribution & Amplification",
      description: "Strategic publishing and promotion across channels",
      activities: [
        "Multi-Channel Publishing",
        "Social Media Promotion",
        "Email Integration",
        "Repurposing Strategy"
      ],
      icon: Share2
    },
    {
      step: "05",
      title: "Analysis & Optimization",
      description: "Continuous improvement based on performance data",
      activities: [
        "Performance Analytics",
        "ROI Measurement",
        "Content Refresh Strategy",
        "Strategy Refinement"
      ],
      icon: BarChart
    }
  ];

  // Types of content
  const contentTypes = [
    {
      icon: Globe,
      title: "Website Copy",
      description: "Foundational content that tells your brand story",
      examples: ["Homepage", "About Us", "Services", "Contact"],
      format: "Core Pages",
      color: "bg-gradient-to-br from-blue-100 to-blue-50"
    },
    {
      icon: Book,
      title: "Blog Articles",
      description: "Educational content that builds expertise",
      examples: ["How-to Guides", "Industry Insights", "Trend Analysis", "Educational"],
      format: "Long-form",
      color: "bg-gradient-to-br from-green-100 to-green-50"
    },
    {
      icon: Users,
      title: "Case Studies",
      description: "Social proof that demonstrates results",
      examples: ["Success Stories", "Client Results", "Project Reviews", "Testimonials"],
      format: "Storytelling",
      color: "bg-gradient-to-br from-purple-100 to-purple-50"
    },
    {
      icon: Mail,
      title: "Email Content",
      description: "Direct communication that nurtures relationships",
      examples: ["Newsletters", "Drip Campaigns", "Educational Series", "Updates"],
      format: "Nurturing",
      color: "bg-gradient-to-br from-amber-100 to-amber-50"
    },
    {
      icon: MessageSquare,
      title: "Social Media",
      description: "Engaging content that builds community",
      examples: ["LinkedIn Articles", "Twitter Threads", "Facebook Posts", "Instagram"],
      format: "Social",
      color: "bg-gradient-to-br from-red-100 to-red-50"
    },
    {
      icon: Layers,
      title: "Repurposed Content",
      description: "Maximize content ROI across formats",
      examples: ["Infographics", "Videos", "Podcasts", "Presentations"],
      format: "Multi-format",
      color: "bg-gradient-to-br from-indigo-100 to-indigo-50"
    }
  ];

  // Expected outcomes
  const outcomes = [
    {
      metric: "4.2x",
      title: "Brand Authority",
      description: "Position as industry thought leader",
      icon: Award
    },
    {
      metric: "68%",
      title: "Customer Trust",
      description: "Higher trust scores from educated customers",
      icon: Shield2
    },
    {
      metric: "3.5x",
      title: "Quality Leads",
      description: "Better-qualified inbound inquiries",
      icon: TargetIcon
    },
    {
      metric: "5.8x",
      title: "SEO Visibility",
      description: "Higher organic search rankings",
      icon: Search2
    },
    {
      metric: "42%",
      title: "Conversion Lift",
      description: "Improved conversion from traffic",
      icon: TrendingUp2
    },
    {
      metric: "24/7",
      title: "Lead Generation",
      description: "Continuous lead generation engine",
      icon: Users2
    }
  ];

  // Who it's best for
  const targetAudiences = [
    {
      title: "Brands Building Trust",
      description: "Companies establishing long-term credibility and authority",
      icon: Shield,
      industries: ["Enterprise", "Professional Services", "Consulting"],
      benefits: ["Industry authority", "Thought leadership", "Premium positioning"]
    },
    {
      title: "SaaS & B2B Companies",
      description: "Complex solutions needing educational content",
      icon: Brain,
      industries: ["Technology", "Software", "Enterprise"],
      benefits: ["Lead nurturing", "Product education", "Sales enablement"]
    },
    {
      title: "Service Businesses",
      description: "Expertise-based services requiring proof of results",
      icon: Users,
      industries: ["Consulting", "Agencies", "Professional Services"],
      benefits: ["Case studies", "Testimonials", "Expert positioning"]
    },
    {
      title: "Startups & Scale-ups",
      description: "New businesses establishing market presence",
      icon: Rocket,
      industries: ["Startups", "Scale-ups", "Innovation"],
      benefits: ["Market education", "Brand building", "Investor confidence"]
    },
    {
      title: "SEO-Focused Businesses",
      description: "Companies leveraging content for organic growth",
      icon: Search,
      industries: ["E-commerce", "Education", "Information"],
      benefits: ["Organic traffic", "Keyword dominance", "Backlink opportunities"]
    }
  ];

  // Why choose us
  const whyChooseUs = [
    {
      icon: Target,
      title: "Strategy-Driven Content",
      description: "Every piece serves a strategic purpose, not just filler content"
    },
    {
      icon: PenTool,
      title: "Brand Voice Alignment",
      description: "Consistent messaging that sounds like you"
    },
    {
      icon: BookOpen,
      title: "Business-Focused Storytelling",
      description: "Content that drives business outcomes, not just engagement"
    },
    {
      icon: PieChartIcon,
      title: "Data-Backed Topics",
      description: "Content planning based on search data and audience insights"
    },
    {
      icon: Award,
      title: "Quality Consistency",
      description: "Maintain high standards across all content production"
    },
    {
      icon: Lightbulb,
      title: "Creative Innovation",
      description: "Fresh approaches to content that stands out"
    }
  ];

  // Case studies
  const caseStudies = [
    {
      client: "B2B SaaS Platform",
      industry: "Technology",
      challenge: "Low brand awareness in competitive market",
      solution: "Educational content hub with industry insights",
      results: [
        "312% organic traffic growth",
        "45 high-quality leads/month",
        "Industry award for content excellence",
        "Featured in top publications"
      ],
      metrics: {
        before: { traffic: "2.8k", leads: "8/month", authority: "Low" },
        after: { traffic: "11.5k", leads: "53/month", authority: "High" }
      }
    },
    {
      client: "Financial Advisory Firm",
      industry: "Finance",
      challenge: "Trust deficit in crowded market",
      solution: "Educational content building financial literacy",
      results: [
        "68% increase in consultation requests",
        "4.8/5 trust rating from clients",
        "Regular industry speaking invitations",
        "Published book based on content"
      ],
      metrics: {
        before: { trust: "3.2/5", leads: "12/month", recognition: "Local" },
        after: { trust: "4.8/5", leads: "42/month", recognition: "National" }
      }
    },
    {
      client: "Healthcare Technology",
      industry: "Healthcare",
      challenge: "Complex product requiring education",
      solution: "Patient and provider educational content",
      results: [
        "5.2x website engagement increase",
        "28% faster sales cycle",
        "Industry partnerships formed",
        "Regulatory compliance excellence"
      ],
      metrics: {
        before: { education: "Basic", adoption: "Slow", authority: "Low" },
        after: { education: "Comprehensive", adoption: "Fast", authority: "Leader" }
      }
    }
  ];

  // FAQ
  const faqs = [
    {
      question: "How long does content marketing take to show results?",
      answer: "Initial engagement improvements typically appear within 30-60 days. Meaningful organic traffic growth takes 4-6 months, with significant authority and lead generation results evident by 8-12 months. We provide monthly progress reports throughout."
    },
    {
      question: "Do you write SEO-optimized content?",
      answer: "Absolutely. All our content is optimized for SEO. This includes keyword research, semantic SEO, topic clustering, and technical optimization. We focus on creating content that ranks well while providing genuine value to readers."
    },
    {
      question: "Can you match our brand voice?",
      answer: "Yes, we start every engagement with comprehensive brand voice analysis. We create detailed voice and tone guidelines and ensure all content aligns perfectly with your brand personality and communication style."
    },
    {
      question: "How often should we publish content?",
      answer: "Frequency depends on your goals, resources, and industry. We typically recommend 2-4 high-quality pieces per week for blogs, plus supporting content. The key is consistency and quality over quantity. We'll create a custom publishing schedule that works for your business."
    },
    {
      question: "Is content marketing worth it for my business?",
      answer: "If you're looking for sustainable, cost-effective growth, absolutely. Content marketing generates 3x more leads than traditional marketing and costs 62% less. It builds long-term assets that continue working for you 24/7."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <InnerHero
        title="Content Marketing That Builds Authority"
        subtitle="Turn your brand into a trusted expert customers choose first"
        bgImage="/content-marketing-services.jpg"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Content Marketing" },
        ]}
        ctaButtons={[
          {
            text: "Get a Content Strategy Call",
            icon: ArrowRight,
            variant: "primary"
          },
          {
            text: "Build My Brand Authority",
            icon: Award,
            variant: "secondary"
          }
        ]}
      />

      {/* What Is Content Marketing - Typography Focused */}
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
              {/* Typography decorative element */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl -z-10 opacity-50"></div>
              
              <div className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                    <PenTool className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">The Art of Earning Trust</h3>
                    <p className="text-gray-600 text-sm">Through Strategic Communication</p>
                  </div>
                </div>
                
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Content Marketing is How Brands Earn Trust
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-600 mb-6">
                    Content marketing is how brands earn trust before selling. By sharing valuable, relevant, 
                    and consistent content, you position your business as the expert customers rely on when 
                    making decisions.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-600">
                    It's not about selling—it's about serving. It's about becoming the go-to resource in your 
                    industry so that when customers are ready to buy, they choose you first.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Educational Foundation</h3>
                    <p className="text-gray-600">Build knowledge before asking for business</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-100 to-indigo-50 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Trust Building</h3>
                    <p className="text-gray-600">Establish credibility through consistent value</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Sustainable Growth</h3>
                    <p className="text-gray-600">Long-term results vs. short-term tactics</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center flex-shrink-0">
                    <Search className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">SEO Asset Creation</h3>
                    <p className="text-gray-600">Build search assets that work 24/7</p>
                  </div>
                </div>
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mt-12">
                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-1">3x</div>
                  <div className="text-gray-700 text-sm">More leads than traditional</div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                  <div className="text-2xl font-bold text-green-600 mb-1">62%</div>
                  <div className="text-gray-700 text-sm">Lower cost per lead</div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                  <div className="text-2xl font-bold text-purple-600 mb-1">24/7</div>
                  <div className="text-gray-700 text-sm">Lead generation engine</div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                  <div className="text-2xl font-bold text-amber-600 mb-1">5x</div>
                  <div className="text-gray-700 text-sm">Higher trust scores</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Content Builds Trust - Circular Flow */}
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
              Why Content Builds Trust & Drives Growth
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The strategic advantage of becoming a trusted industry resource
            </p>
          </motion.div>

          <div className="relative">
            {/* Mobile view */}
            <div className="lg:hidden space-y-8">
              {trustBenefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                        <p className="text-gray-600 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50">
                        <span className="text-blue-700 font-semibold">{benefit.stat}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Desktop view - Circular */}
            <div className="hidden lg:block">
              <div className="relative h-[600px]">
                {/* Center circle */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex flex-col items-center justify-center text-white">
                  <span className="text-sm">Trust → Growth</span>
                  <span className="text-2xl font-bold">Process</span>
                </div>

                {/* Benefit circles */}
                {trustBenefits.map((benefit, idx) => {
                  const Icon = benefit.icon;
                  const angle = (idx / trustBenefits.length) * 2 * Math.PI;
                  const radius = 240;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 0, y: 0 }}
                      whileInView={{ opacity: 1, x: x, y: y }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="absolute left-1/2 top-1/2 w-64 transform -translate-x-1/2 -translate-y-1/2"
                      style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                    >
                      <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900">{benefit.title}</h3>
                            <p className="text-gray-600 text-sm">{benefit.description}</p>
                          </div>
                        </div>
                        <div className="pt-4 border-t border-gray-100">
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50">
                            <span className="text-blue-700 font-semibold text-sm">{benefit.stat}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included - Typography Grid */}
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
              <PenTool className="w-4 h-4" />
              Comprehensive Content Solutions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What's Included in Our Content Marketing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end content strategy, creation, and optimization
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
                    {/* Gradient background effect */}
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

      {/* Our Process - Typography Timeline */}
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
              Our Strategic Content Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to building authority through content
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical Timeline */}
            <div className="hidden lg:block absolute left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-indigo-200 to-purple-200"></div>
            
            <div className="space-y-12">
              {process.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-24"
                  >
                    {/* Step indicator */}
                    <div className="absolute left-0 top-0 w-24 flex items-center">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                        {step.step}
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                      <div className="flex flex-col md:flex-row md:items-start gap-6">
                        <div className="md:w-1/3">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                              <Icon className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                              <p className="text-gray-600 text-sm">{step.description}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="md:w-2/3">
                          <div className="grid grid-cols-2 gap-4">
                            {step.activities.map((activity, aIdx) => (
                              <div key={aIdx} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">{activity}</span>
                              </div>
                            ))}
                          </div>
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

      {/* Types of Content - Visual Grid */}
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
              Types of Content We Create
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Versatile content formats for every stage of the customer journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentTypes.map((content, idx) => {
              const Icon = content.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className={`${content.color} rounded-2xl p-8 border border-gray-200 group-hover:border-blue-300 group-hover:shadow-xl transition-all h-full`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-gray-700" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-500">{content.format}</div>
                        <h3 className="text-xl font-bold text-gray-900">{content.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6">
                      {content.description}
                    </p>
                    
                    <div className="space-y-2">
                      {content.examples.map((example, eIdx) => (
                        <div key={eIdx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                          <span className="text-gray-700 text-sm">{example}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expected Outcomes - Metric Dashboard */}
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
              Expected Content Marketing Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What strategic content delivers for your business
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
                    
                    {/* Progress indicator */}
                    <div className="mt-4">
                      <div className="flex justify-between text-sm text-gray-500 mb-1">
                        <span>Industry Average</span>
                        <span>Our Average</span>
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
                <div className="text-3xl font-bold mb-2">3.5x</div>
                <div className="text-blue-200 text-sm">More Qualified Leads</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">42%</div>
                <div className="text-blue-200 text-sm">Higher Conversion Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">5.2x</div>
                <div className="text-blue-200 text-sm">Organic Traffic Growth</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">4.8/5</div>
                <div className="text-blue-200 text-sm">Trust & Authority Score</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who This Service Is Best For - Profile Cards */}
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
              Who Needs Strategic Content Marketing?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our approach delivers exceptional results for businesses that fit these profiles
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
                        {audience.benefits.map((benefit, bIdx) => (
                          <div key={bIdx} className="flex items-center gap-3">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{benefit}</span>
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
              Why Choose Us for Content Marketing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What sets our strategic content approach apart
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

      {/* Case Studies - Content Samples */}
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
              Content Marketing Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from brands we've helped build authority through content
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
                        Case Study
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.client}</h3>
                      <div className="text-gray-600 text-sm mb-4">
                        <strong>Industry:</strong> {study.industry}
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

                  {/* Metrics Comparison */}
                  <div>
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-6 text-center">Results Comparison</h4>
                      <div className="space-y-6">
                        <div>
                          <div className="flex justify-between text-sm text-gray-600 mb-2">
                            <span>Website Traffic</span>
                            <div className="flex gap-4">
                              <span>Before: {study.metrics.before.traffic}</span>
                              <span>After: {study.metrics.after.traffic}</span>
                            </div>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-3 rounded-full" style={{ width: '85%' }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm text-gray-600 mb-2">
                            <span>Monthly Leads</span>
                            <div className="flex gap-4">
                              <span>Before: {study.metrics.before.leads}</span>
                              <span>After: {study.metrics.after.leads}</span>
                            </div>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full" style={{ width: '78%' }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm text-gray-600 mb-2">
                            <span>Brand Authority</span>
                            <div className="flex gap-4">
                              <span>Before: {study.metrics.before.authority}</span>
                              <span>After: {study.metrics.after.authority}</span>
                            </div>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full" style={{ width: '92%' }}></div>
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

      {/* FAQs - Accordion Style */}
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
              Content Marketing FAQs
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about strategic content marketing
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
                    <div className="text-blue-600 font-bold text-lg">?</div>
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

      {/* Final CTA - Authority Focused */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700">
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
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Build Unshakeable Brand Authority?
                </h3>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Get a free content strategy session and discover how we can position your brand as the industry expert customers trust and choose first.
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
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Schedule Your Strategy Session</h4>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Business Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">What's Your Biggest Content Challenge?</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors">
                      <option value="">Select your biggest challenge</option>
                      <option value="authority">Building Brand Authority</option>
                      <option value="traffic">Generating Organic Traffic</option>
                      <option value="leads">Generating Quality Leads</option>
                      <option value="consistency">Maintaining Content Consistency</option>
                      <option value="seo">Improving SEO Performance</option>
                      <option value="other">Other Challenge</option>
                    </select>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="flex-1 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold text-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-5 h-5" />
                      Schedule Strategy Call
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      className="flex-1 px-8 py-4 bg-gray-100 text-gray-900 rounded-lg font-semibold text-lg hover:bg-gray-200 transition-all inline-flex items-center justify-center gap-2"
                    >
                      <Download className="w-5 h-5" />
                      Download Content Guide
                    </motion.button>
                  </div>
                  
                  <p className="text-gray-500 text-sm text-center">
                    By submitting, you agree to our Privacy Policy. We'll never spam you.
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