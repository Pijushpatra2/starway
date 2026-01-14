// "use client"
// import { MoveRight } from "lucide-react";
// import BottomSection from "@/components/BottomSection";

// export default function About() {
//   return (
//     <div className="w-full pb-20">
//       <div className="w-[80%] mx-auto">
//         <h2 className="text-4xl md:text-5xl text-white font-bold text-center mt-20">
//           ABOUT US
//         </h2>
//         <h3 className="text-[#FFEE07] text-xl md:text-2xl text-center mt-5">
//           Empowering Your Digital Growth.​
//         </h3>
//         <p className="text-center text-white mt-5 text-xl">
//           Welcome to  <span className="text-[#00C8FF]">Starway,</span> your
//           trusted partner in digital marketing solutions. We are passionate
//           about helping businesses thrive in today’s fast-paced digital world.
//           With a combination of creativity, data-driven strategies, and
//           cutting-edge technology, we deliver impactful marketing solutions that
//           elevate brands and achieve measurable success.
//         </p>
//         <div className="mt-20 rounded-2xl flex flex-col gap-10 bg-white/30 backdrop-blur-sm p-5 md:p-10">
//           <div className="flex flex-col gap-2">
//             <h3 className="text-white text-2xl md:text-3xl text-center">
//               Transforming Businesses, One Pixel at a Time
//             </h3>
//             <p className="text-[#14336C] text-center text-xl">
//               Starway is a 360° digital marketing Consultancy that helps you
//               boost your business. Need to know more? Read on…
//             </p>
//           </div>
//           <div className="flex flex-col gap-2">
//             <h3 className="text-white text-2xl md:text-3xl text-center">
//               Empowering Your Digital Growth.​
//             </h3>
//             <p className="text-[#14336C] text-center text-xl">
//               Welcome to Starway, your trusted partner in digital marketing
//               solutions. We are passionate about helping businesses thrive in
//               today’s fast-paced digital world. With a combination of
//               creativity, data-driven strategies, and cutting-edge technology,
//               we deliver impactful marketing solutions that elevate brands and
//               achieve measurable success.
//             </p>
//           </div>
//           <div className="flex flex-col gap-2">
//             <h3 className="text-white text-2xl md:text-3xl text-center">
//               Proven Results with a Human Touch
//             </h3>
//             <p className="text-[#14336C] text-center text-xl">
//               To empower businesses of all sizes to unlock their full potential
//               in the digital age through innovative, results-driven marketing
//               strategies.
//             </p>
//           </div>
//           <div className="flex flex-col gap-2">
//             <h3 className="text-white text-2xl md:text-3xl text-center">Our Mission</h3>
//             <ol className="text-[#14336C] text-xl list-decimal ml-10">
//               <li>Innovative Thinking</li>
//               <li>Transparent Communication</li>
//               <li>Scalable Solutions</li>
//             </ol>
//           </div>
//           <div className="flex flex-col gap-2">
//             <h3 className="text-white text-2xl md:text-3xl text-center">
//               AWARDS & RECOGNITION
//             </h3>
//             <p className="text-[#14336C] text-center text-xl">
//               With a reputation built on excellence and innovation, Starway has
//               earned the respect of industry experts. We’re honored to share our
//               achievements, which inspire us to keep pushing the boundaries of
//               what’s possible for our clients.
//             </p>
//           </div>
//           <div className="flex flex-col gap-2">
//             <h3 className="text-white text-2xl md:text-3xl text-center">
//               Trusted By Over 1200+ Professionals & Users Globally.
//             </h3>
//             <ul className="list-disc text-[#14336C] text-xl ml-10">
//               <li>In Market Since 2012</li>
//               <li>1200+ Clients</li>
//               <li>Google Certified Project Managers</li>
//               <li>WordPress Specialist</li>
//               <li>Certified Android And Iphone Developers</li>
//               <li>Pay As You GO</li>
//             </ul>
//           </div>
//           <div className="flex flex-col gap-2">
//             <h2 className="text-4xl md:text-5xl text-center font-bold text-white">
//               Abdullah Ali
//             </h2>
//             <h3 className="text-[#14336C] text-2xl text-center font-bold">
//               Founder & CEO
//             </h3>
//             <p className="text-[#14336C] text-justify text-xl">
//               If you want to boost your business and web presence then we are
//               all you need. We provide the most responsive website development
//               and web design in australia with the help of Google certified
//               project managers, Android and iphone approved developers. Web
//               development and design require technical expertise and
//               professional skills, so we employ the best to give you the best of
//               digital marketing in australia. If you have been looking for the
//               most Affordable SMO Company in Australia, Canada, New Zealand and
//               India then you sure have been in search of us.
//             </p>
//           </div>
//           <div>
//             <h3 className="text-white text-2xl md:text-3xl text-center">
//               We Love Challenges
//             </h3>
//             <p className="text-[#14336C] text-justify text-xl mt-5">
//               Our passionate team of skillful technicians and web designers
//               churn out the most creative, responsive and innovative design with
//               the expertise in the web developing and designing industry. We
//               bring out the blend of innovation and functionality for our
//               diverse clientele looking for most navigable websites. We believe
//               in shaping your desires into a real picture by transforming an
//               ordinary website to an excellent one. We not only provide the most
//               Affordable SEO services in Australia, New Zealand, India but we
//               also provide personalized web designs solutions and seo service in
//               Australia for our clients.
//             </p>
//             <p className="text-[#14336C] text-justify text-xl">
//               We are known as the Best SMO Company in Australia for delivering
//               the most SEO friendly, interactive web design. We specialize in
//               developing websites for e-Commerce with dynamic designs and
//               responsive mobile adaptation with great resolution and befitting
//               screen size. We work with the agenda of making our clients happy
//               by delivering the best of seo services in australia. We stay in
//               constant touch with our clients by frequently following up if our
//               clients require any kind of help with the website.
//             </p>
//           </div>
//           <button className="bg-[#255EC8] text-xl flex items-center font-bold w-fit px-3 md:px-10 py-3 rounded-xl text-white gap-3 mx-auto">
//             GET STARTED <MoveRight />
//           </button>
//         </div>

//        {/* Bottom section */}
//       <BottomSection />
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Rocket,
  Users,
  Shield,
  TrendingUp,
  Zap,
  Sparkles,
  Lightbulb,
  Heart,
  Award,
  BarChart,
  Palette,
  Code,
  Smartphone,
  Search,
  MessageCircle,
  Globe,
  Building,
  GraduationCap,
  ShoppingCart,
  HeartPulse,
  Home,
  Clock,
  Star,
  ChevronRight,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Brain,
  Cpu,
  Database,
  Cloud,
  Lock,
  RefreshCw,
  CheckCircle,
  TargetIcon,
  Quote,
  Linkedin,
  Twitter,
  Calendar,
  Briefcase,
} from "lucide-react";
import InnerHero from "@/components/Common/InnerHero";

export default function AboutUsPage() {
  const [activeValue, setActiveValue] = useState("integrity");

  // Team data
  const teamMembers = [
    {
      role: "Strategy & Growth",
      members: [
        {
          name: "Alex Morgan",
          expertise: "Growth Strategy",
          experience: "10+ years",
        },
        {
          name: "Sarah Chen",
          expertise: "Digital Marketing",
          experience: "8+ years",
        },
      ],
    },
    {
      role: "Design & UX",
      members: [
        {
          name: "Marcus Rivera",
          expertise: "UI/UX Design",
          experience: "7+ years",
        },
        {
          name: "Lisa Park",
          expertise: "Brand Identity",
          experience: "6+ years",
        },
      ],
    },
    {
      role: "Technology",
      members: [
        {
          name: "David Kumar",
          expertise: "Full-Stack Dev",
          experience: "12+ years",
        },
        {
          name: "Emma Watson",
          expertise: "Mobile Apps",
          experience: "9+ years",
        },
      ],
    },
    {
      role: "AI & Innovation",
      members: [
        {
          name: "James Wilson",
          expertise: "AI Strategy",
          experience: "8+ years",
        },
        {
          name: "Priya Sharma",
          expertise: "Data Science",
          experience: "7+ years",
        },
      ],
    },
  ];

  // Values
  const values = {
    integrity: {
      title: "Integrity & Transparency",
      description:
        "We believe in honest communication and clear processes. No hidden fees, no empty promises — just real results delivered with complete transparency.",
      icon: Shield,
      principles: [
        "Clear Pricing",
        "Honest Reporting",
        "No Hidden Costs",
        "Open Communication",
      ],
    },
    innovation: {
      title: "Innovation & Adaptability",
      description:
        "Staying ahead of digital trends while adapting strategies to each client's unique needs. We embrace change and turn challenges into opportunities.",
      icon: Lightbulb,
      principles: [
        "Future-Forward Thinking",
        "Agile Methodology",
        "Continuous Learning",
        "Creative Problem Solving",
      ],
    },
    client: {
      title: "Client-First Thinking",
      description:
        "Your success is our success. We work as an extension of your team, deeply understanding your goals to deliver solutions that truly move the needle.",
      icon: Heart,
      principles: [
        "Partnership Approach",
        "Goal Alignment",
        "Regular Check-ins",
        "Long-term Support",
      ],
    },
    quality: {
      title: "Quality Over Quantity",
      description:
        "We focus on delivering exceptional work that drives meaningful results. Every project receives our full attention and dedication to excellence.",
      icon: Star,
      principles: [
        "Attention to Detail",
        "Best Practices",
        "Thorough Testing",
        "Performance Focus",
      ],
    },
    growth: {
      title: "Growth Mindset",
      description:
        "Continuous improvement is in our DNA. We're always learning, testing, and optimizing to help our clients achieve sustainable growth.",
      icon: TrendingUp,
      principles: [
        "Data-Driven Decisions",
        "Performance Tracking",
        "Strategy Refinement",
        "Market Adaptation",
      ],
    },
  };

  // Industries
  const industries = [
    {
      icon: Building,
      title: "Startups & SaaS",
      description:
        "Launch and scale tech products with growth-focused strategies",
      projects: 42,
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Build and optimize online stores for maximum conversions",
      projects: 58,
    },
    {
      icon: GraduationCap,
      title: "Education & EdTech",
      description: "Learning platforms and educational technology solutions",
      projects: 36,
    },
    {
      icon: HeartPulse,
      title: "Healthcare",
      description: "Digital health solutions and medical practice platforms",
      projects: 27,
    },
    {
      icon: Home,
      title: "Real Estate",
      description: "Property tech and real estate digital platforms",
      projects: 31,
    },
    {
      icon: Globe,
      title: "Service Businesses",
      description: "Local and professional service digital transformation",
      projects: 49,
    },
  ];

  // Services snapshot
  const services = [
    {
      icon: Search,
      title: "Digital Marketing",
      description: "Data-driven strategies for visibility and growth",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Brain,
      title: "AI Search Optimization",
      description: "Future-proof visibility in AI-powered search",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Palette,
      title: "Branding & UI/UX Design",
      description: "Memorable identities and intuitive interfaces",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Code,
      title: "Website Development",
      description: "High-performance websites with CMS",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native iOS and Android applications",
      color: "from-red-500 to-rose-500",
    },
    {
      icon: TrendingUp,
      title: "Growth Strategy",
      description: "Data-informed business growth planning",
      color: "from-indigo-500 to-violet-500",
    },
  ];

  // Approach steps
  const approach = [
    {
      number: "01",
      title: "Discovery & Analysis",
      description: "Deep dive into your business, goals, and market position",
      icon: Target,
      detail: "Comprehensive research and strategy planning",
    },
    {
      number: "02",
      title: "Strategy Development",
      description: "Data-driven roadmap tailored to your objectives",
      icon: BarChart,
      detail: "Custom growth plans and implementation timeline",
    },
    {
      number: "03",
      title: "Execution & Iteration",
      description: "Agile implementation with continuous optimization",
      icon: RefreshCw,
      detail: "Regular testing and performance monitoring",
    },
    {
      number: "04",
      title: "Measurement & Growth",
      description: "Track results and scale successful strategies",
      icon: TrendingUp,
      detail: "Ongoing optimization and expansion",
    },
  ];

  // Stats
  const stats = [
    { value: "98%", label: "Client Retention Rate", icon: Heart },
    { value: "240+", label: "Projects Delivered", icon: TargetIcon },
    { value: "4.9/5", label: "Average Client Rating", icon: Star },
    { value: "15+", label: "Industries Served", icon: Globe },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      {/* Hero Section - Animated Gradient */}
      <InnerHero
        title="About Us"
        subtitle="Your growth partner in digital marketing, design, and technology."
        bgImage="/innerHero.jpg"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      {/* Who We Are - Split Layout with Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-600 text-sm font-medium mb-6">
                <Users className="w-4 h-4" />
                Our Story
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Building Digital Foundations for Sustainable Growth
              </h2>

              <div className="space-y-4 text-lg text-gray-600 mb-8">
                <p>
                  We are a full-service digital growth agency helping businesses
                  build strong digital foundations, increase visibility, and
                  scale sustainably.
                </p>
                <p>
                  From digital marketing and AI search optimization to website
                  and mobile app development, we combine strategy, creativity,
                  and technology to deliver measurable impact that drives real
                  business growth.
                </p>
              </div>

              {/* Stats Grid */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Floating Elements */}
              <div className="relative bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 border border-blue-200 shadow-xl">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-10"></div>
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-10"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        Our Mission
                      </h3>
                      <p className="text-blue-600">Drive Meaningful Growth</p>
                    </div>
                  </div>

                  <p className="text-lg text-gray-700 mb-6">
                    To help brands grow
                    <span className="font-semibold">
                      smarter, faster, and stronger
                    </span>
                    using data-driven marketing, thoughtful design, and scalable
                    technology.
                  </p>

                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                        <Eye className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">
                          Our Vision
                        </h4>
                        <p className="text-gray-600">Looking Ahead</p>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      To become a trusted global digital partner for businesses
                      navigating the future of marketing, AI, and digital
                      transformation.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Do - Radial Service Display */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Full-Service Capability
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end digital solutions designed to drive growth at every
              stage
            </p>
          </motion.div>

          <div className="relative">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative group"
                  >
                    <div className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all h-full overflow-hidden">
                      
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity`}
                      ></div>

                      <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                          <div
                            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                          >
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {service.title}
                          </h3>
                        </div>

                        <p className="text-gray-600 mb-6">
                          {service.description}
                        </p>

                        <button className="inline-flex items-center gap-2 text-blue-600 font-medium group">
                          Explore Service
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section> */}

      {/* Our Approach - Process Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Strategic Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A methodical process that ensures clarity, efficiency, and results
            </p>
          </motion.div>

          {/* Process Timeline */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute left-0 top-1/2 w-full h-0.5 bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-purple-500/30 transform -translate-y-1/2"></div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative">
              {approach.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    {/* Step Card */}
                    <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all h-full">
                      <div className="lg:hidden flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-3xl font-bold text-gray-900 opacity-20">
                          {step.number}
                        </div>
                      </div>

                      <div className="text-3xl font-bold text-gray-900 opacity-20 mb-2 hidden lg:block">
                        {step.number}
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      <div className="text-sm text-blue-600 font-medium">
                        {step.detail}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Comparison Table */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Clients Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The difference between working with an agency and partnering with
              a growth team
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Our Approach */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 border border-blue-200 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Our Approach
                </h3>
              </div>

              <div className="space-y-4">
                {[
                  "One partner for marketing, design, and technology",
                  "Focus on measurable results, not vanity metrics",
                  "Expertise in AI-driven search & future visibility",
                  "Scalable solutions for startups to enterprises",
                  "Long-term partnership mindset",
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* The Difference */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  The Difference
                </h3>
              </div>

              <div className="space-y-4">
                {[
                  "Integrated solutions vs. fragmented services",
                  "Strategic partnership vs. transactional relationship",
                  "Future-focused vs. reactive approach",
                  "Data-informed decisions vs. gut feelings",
                  "Sustainable growth vs. quick fixes",
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-gray-600 text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values - Interactive Tabs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision and partnership
            </p>
          </motion.div>

          {/* Value Tabs */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-3">
              {Object.keys(values).map((valueKey) => {
                const valueData = values[valueKey];
                const Icon = valueData.icon;
                return (
                  <button
                    key={valueKey}
                    onClick={() => setActiveValue(valueKey)}
                    className={`px-6 py-3 rounded-xl font-medium transition-all flex items-center gap-2 ${
                      activeValue === valueKey
                        ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {valueData.title.split("&")[0].trim()}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Value Display */}
          <motion.div
            key={activeValue}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 border border-blue-200 shadow-lg"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    {(() => {
                      const Icon = values[activeValue].icon;
                      return <Icon className="w-8 h-8 text-white" />;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {values[activeValue].title}
                    </h3>
                    <p className="text-blue-600">Guiding Principle</p>
                  </div>
                </div>

                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {values[activeValue].description}
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  In Practice
                </h4>
                <div className="space-y-3">
                  {values[activeValue].principles.map((principle, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
                        <span className="text-blue-600 font-bold">
                          {index + 1}
                        </span>
                      </div>
                      <span className="text-gray-700">{principle}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Founder & CEO Section - 3D Perspective */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-600 text-sm font-medium mb-4 border border-blue-200">
              <Sparkles className="w-4 h-4" />
              Leadership
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Founder & CEO
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visionary leadership driving innovation and sustainable growth
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Founder Profile */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xl">
                {/* Founder Header */}
                <div className="flex items-center gap-6 mb-8">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Users className="w-12 h-12 text-white" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Abdullah Ali
                    </h3>
                    <p className="text-blue-600 font-medium">Founder & CEO</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-sm text-gray-500">
                        15+ Years Experience
                      </span>
                    </div>
                  </div>
                </div>

                {/* Founder Quote */}
                <div className="relative mb-8">
                  <div className="absolute -top-4 -left-4">
                    <Quote className="w-8 h-8 text-blue-200" />
                  </div>
                  <blockquote className="text-lg text-gray-700 italic pl-4 border-l-4 border-blue-500 py-2">
                    "Building digital solutions isn't just about technology—it's
                    about creating opportunities for businesses to grow and
                    thrive in an increasingly digital world."
                  </blockquote>
                </div>

                {/* Founder Bio */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    About Abdullah Ali
                  </h4>
                  <p className="text-gray-600 mb-4">
                    With over 15 years of experience in digital strategy and
                    technology, Alexandra founded the agency with a vision to
                    bridge the gap between innovative technology and real
                    business results. Her background spans digital marketing,
                    software development, and business strategy.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "Digital Strategy & Transformation",
                      "Growth Marketing",
                      "Technology Innovation",
                      "Business Development",
                    ].map((expertise, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">
                          {expertise}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                  <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg font-medium hover:bg-blue-100 transition-all inline-flex items-center gap-2">
                    <Linkedin className="w-4 h-4" />
                    Connect
                  </button>
                  <button className="px-4 py-2 bg-cyan-50 text-cyan-600 rounded-lg font-medium hover:bg-cyan-100 transition-all inline-flex items-center gap-2">
                    <Twitter className="w-4 h-4" />
                    Follow
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Founder Stats & Journey */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Journey Timeline */}
              <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 border border-blue-200 shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-blue-600" />{" "}
                  {/* Changed from Map to Briefcase */}
                  Leadership Journey
                </h4>

                <div className="space-y-4">
                  {[
                    {
                      year: "2018",
                      title: "Founded the Agency",
                      description:
                        "Started with a vision to merge technology and strategy",
                    },
                    {
                      year: "2020",
                      title: "Global Expansion",
                      description:
                        "Expanded services to serve clients across 20+ countries",
                    },
                    {
                      year: "2022",
                      title: "AI Integration",
                      description:
                        "Pioneered AI-driven digital solutions in the industry",
                    },
                    {
                      year: "2024",
                      title: "Industry Recognition",
                      description:
                        "Awarded for innovation in digital transformation",
                    },
                  ].map((milestone, index) => (
                    <div key={index} className="relative pl-8 pb-4 last:pb-0">
                      {/* Timeline line */}
                      {index < 3 && (
                        <div className="absolute left-3 top-6 w-0.5 h-full bg-gradient-to-b from-blue-300 to-cyan-300"></div>
                      )}

                      {/* Timeline dot */}
                      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      </div>

                      <div>
                        <div className="text-sm font-medium text-blue-600 mb-1">
                          {milestone.year}
                        </div>
                        <div className="font-semibold text-gray-900 mb-1">
                          {milestone.title}
                        </div>
                        <p className="text-sm text-gray-600">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team - Circle Network */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A multidisciplinary team of strategists, designers, developers,
              and innovators
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((team, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all h-full">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {team.role}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {team.members.map((member, idx) => (
                      <div
                        key={idx}
                        className="border-t border-gray-100 pt-4 first:border-t-0 first:pt-0"
                      >
                        <div className="font-semibold text-gray-900">
                          {member.name}
                        </div>
                        <div className="text-sm text-blue-600 mb-1">
                          {member.expertise}
                        </div>
                        <div className="text-xs text-gray-500">
                          {member.experience}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Industries We Serve - Hex Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep expertise across diverse sectors and business models
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all h-full overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-full -translate-y-12 translate-x-12"></div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {industry.title}
                          </h3>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <span className="text-sm text-gray-500">
                              {industry.projects} projects
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4">
                        {industry.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Growth Philosophy - Featured Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-cyan-600 to-purple-600">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-8 border border-white/20">
              <Target className="w-4 h-4" />
              Our Growth Philosophy
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              We Don't Chase Trends — We Build Foundations
            </h2>

            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
              Whether it's SEO, AI search optimization, or app development, our
              focus is on long-term visibility, scalability, and sustainable
              growth. We build digital foundations that stand the test of time.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  icon: Database,
                  title: "Foundation First",
                  description:
                    "Solid technical and strategic foundations for lasting success",
                },
                {
                  icon: TrendingUp,
                  title: "Sustainable Growth",
                  description:
                    "Strategies that scale with your business, not just quick wins",
                },
                {
                  icon: Shield,
                  title: "Future-Ready",
                  description:
                    "Solutions designed for tomorrow's challenges and opportunities",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                  >
                    <Icon className="w-8 h-8 text-white mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-blue-100 text-sm">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
