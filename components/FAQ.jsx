// "use client";

// import { useState } from "react";
// import { ChevronDown, ChevronUp } from "lucide-react";

// export default function FAQ() {
//   const faqs = [
//     {
//       question: "Do I have to take every service?",
//       answer: "No we create a custom growth plan based on your goals and stage."
//     },
//     {
//       question: "How soon will I see results?",
//       answer:
//         "PPC & Social Ads → Immediate. SEO & AI Search → 30–90 Days (Sustained growth)."
//     },
//     {
//       question: "Can you work with any location?",
//       answer: "Yes we serve India, UAE, USA, UK & Global markets."
//     },
//     {
//       question: "Do you provide services globally?",
//       answer: "Yes we work with businesses worldwide across all time zones."
//     },
//     {
//       question: "What does AI Search Optimization mean?",
//       answer: "It means improving your visibility in AI assistants like ChatGPT, Gemini, Copilot & Perplexity so your brand is recommended in answers, not just Google results."
//     },
//     {
//       question: "Will this also improve my Google ranking?",
//       answer: "Yes AI optimization strengthens brand authority, which helps your Google SEO performance."
//     },
//     {
//       question: "How fast can results be seen?",
//       answer: "SEO and AI visibility growth typically begin within 30–90 days, depending on competition and niche."
//     },
//     {
//       question: "Do you work internationally?",
//       answer: "Yes we work with clients across India, UAE, USA, UK & Global markets."
//     },
//     {
//       question: "What makes your PPC campaigns different?",
//       answer: "We optimize for lead quality, not just clicks — ensuring every ad spend delivers meaningful ROI."
//     },
//     {
//       question: "Is there a monthly plan available?",
//       answer: "Yes we offer flexible subscription plans based on goals and business size."
//     }
//   ];

//   const faqSchema = {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     "mainEntity": faqs.map((faq) => ({
//       "@type": "Question",
//       "name": faq.question,
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": faq.answer
//       }
//     }))
//   };

//   const [visibleIndex, setVisibleIndex] = useState(null);
//   const toggleAnswer = (index) => {
//     setVisibleIndex(visibleIndex === index ? null : index);
//   };

//   const half = Math.ceil(faqs.length / 2);  // safe split

//   return (
//     <div className="w-full mx-auto mt-20 mb-20 text-white bg-[#14336C] px-6 md:px-20 py-20 rounded-2xl" style={{ boxShadow: "rgba(255, 255, 255, 0.12) 0px 2px 4px 0px, rgba(255, 255, 255, 0.32) 0px 2px 16px 0px" }}>
//       <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">FAQ</h2>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
//         {/* First half */}
//         <div className="space-y-6">
//           {faqs.slice(0, half).map((faq, index) => (
//             <div key={index} className="bg-white p-5 rounded-2xl shadow-lg">
//               <button
//                 onClick={() => toggleAnswer(index)}
//                 className="flex items-center justify-between w-full text-left"
//               >
//                 <h3 className="text-lg sm:text-2xl font-semibold text-blue-900">{faq.question}</h3>

//                 <span className="transition-transform duration-300">
//                   {visibleIndex === index ? (
//                     <ChevronUp className="w-6 h-6 text-blue-900" />
//                   ) : (
//                     <ChevronDown className="w-6 h-6 text-blue-900" />
//                   )}
//                 </span>
//               </button>

//               <div
//                 className={`overflow-hidden transition-all duration-300 ${visibleIndex === index ? "max-h-40 mt-3" : "max-h-0"
//                   }`}
//               >
//                 <p className="text-lg text-[#04325d]">{faq.answer}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Second half */}
//         <div className="space-y-6">
//           {faqs.slice(half).map((faq, index) => {
//             const realIndex = index + half;

//             return (
//               <div key={realIndex} className="bg-white p-5 rounded-2xl shadow-lg">
//                 <button
//                   onClick={() => toggleAnswer(realIndex)}
//                   className="flex items-center justify-between w-full text-left"
//                 >
//                   <h3 className="text-lg sm:text-2xl font-semibold text-blue-900">{faq.question}</h3>

//                   <span className="transition-transform duration-300">
//                     {visibleIndex === realIndex ? (
//                       <ChevronUp className="w-6 h-6 text-blue-900" />
//                     ) : (
//                       <ChevronDown className="w-6 h-6 text-blue-900" />
//                     )}
//                   </span>
//                 </button>

//                 <div
//                   className={`overflow-hidden transition-all duration-300 ${visibleIndex === realIndex ? "max-h-40 mt-3" : "max-h-0"
//                     }`}
//                 >
//                   <p className="text-lg text-[#04325d]">{faq.answer}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* JSON-LD Schema for SEO */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
//       />
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  Target,
  Settings,
  TrendingUp,
  CreditCard,
  FileText,
  ShieldCheck,
  Users,
  Globe,
} from "lucide-react";

/* Roll animations */
const rollContainer = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.45, ease: "easeOut", staggerChildren: 0.08 },
  },
  exit: { height: 0, opacity: 0, transition: { duration: 0.35 } },
};

const rollItem = {
  hidden: {
    opacity: 0,
    rotateX: -35,
    transformOrigin: "top",
  },
  visible: {
    opacity: 1,
    rotateX: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    rotateX: -35,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

export default function FaqSection() {
  const [open, setOpen] = useState(false);

  /* DIGITAL MARKETING CONTENT */
  const baseFaqs = [
    {
      icon: Target,
      title: "What digital marketing services do you offer?",
      desc: "We help businesses grow faster with ROI-driven SEO, paid ads (Google & Meta), social media marketing, content creation, email automation, CRO, and full-funnel performance marketing — all under one roof.",
    },
    {
      icon: BarChart3,
      title: "How do you measure campaign success?",
      desc: "We focus on real business outcomes, not vanity metrics. Every campaign is measured by leads, conversions, ROAS, customer acquisition cost, and revenue growth — tracked transparently in live reports.",
    },
    {
      icon: Settings,
      title: "Can you create a custom strategy for my business?",
      desc: "Absolutely. We don’t use templates. Your strategy is built around your goals, audience, competitors, and budget — designed to maximize conversions and long-term scalability.",
    },
    {
      icon: TrendingUp,
      title: "How quickly can I expect results?",
      desc: "Paid campaigns can generate leads within weeks. SEO and organic growth typically take 3–6 months but deliver compounding, long-term results that lower acquisition costs over time.",
    },
    {
      icon: CreditCard,
      title: "How does pricing work?",
      desc: "Our pricing is flexible and transparent. We offer monthly retainers and performance-focused plans based on your growth goals — no hidden fees and no long-term lock-ins.",
    },
    {
      icon: FileText,
      title: "Will I get regular performance reports?",
      desc: "Yes. You receive clear, easy-to-understand reports showing what’s working, what’s improving, and what we’re optimizing next — so you always know where your budget is going.",
    },
  ];

  const moreFaqs = [
    {
      icon: ShieldCheck,
      title: "Is my data and ad account secure?",
      desc: "100%. Your data, ad accounts, and access credentials are fully protected. We follow strict security practices and only access what’s required to manage and optimize your campaigns.",
    },
    {
      icon: Users,
      title: "Do you work with startups and established brands?",
      desc: "Yes. We work with startups, growing businesses, and enterprise brands — scaling strategies smoothly as your business grows without disrupting momentum.",
    },
    {
      icon: Globe,
      title: "Can you run international marketing campaigns?",
      desc: "Definitely. We manage global campaigns using geo-targeting, localized messaging, multilingual ads, and region-specific strategies to help brands scale worldwide.",
    },
  ];

  return (
    <section className="relative bg-primary py-14 sm:py-20 overflow-hidden">
      {/* subtle shading */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-primary to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-white">
              Digital Marketing FAQs
            </h2>
            <p className="mt-2 max-w-xl text-sm sm:text-base text-gray-200">
              Everything you need to know about our digital marketing services,
              process, and results.
            </p>
          </div>
          <div>
            <button className="rounded-lg border border-gray-300 px-6 py-2 text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 shadow-lg hover:scale-105 transition-transform cursor-pointer">
              View Case Studies
            </button>
          </div>
        </div>

        {/* Base FAQs */}
        <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {baseFaqs.map((faq, i) => {
            const Icon = faq.icon;
            return (
              <div
                key={i}
                className="flex gap-4 sm:gap-5 items-start border-b border-white/10 pb-6"
              >
                {/* Icon Box */}
                <div className="mt-0.5 flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl border-2 border-white/15 text-white/80">
                  <Icon size={20} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-white tracking-tight leading-snug">
                    {faq.title}
                  </h4>

                  {/* small separator */}
                  <div className="mt-2 h-[2px] w-10 rounded-full bg-white/20" />

                  <p className="mt-3 text-sm sm:text-base text-gray-200/90 leading-relaxed">
                    {faq.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Roll In / Roll Out */}
        <AnimatePresence>
          {open && (
            <motion.div
              variants={rollContainer}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mt-10 grid gap-x-12 gap-y-10 sm:grid-cols-2 overflow-hidden perspective-[1200px]"
            >
              {moreFaqs.map((faq, i) => {
                const Icon = faq.icon;
                return (
                  <motion.div
                    key={i}
                    variants={rollItem}
                    className="flex gap-4"
                  >
                    <div
                      key={i}
                      className="flex gap-4 sm:gap-5 items-start border-b border-white/10 pb-6"
                    >
                      {/* Icon Box */}
                      <div className="mt-0.5 flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl border-2 border-white/15 text-white/80">
                        <Icon size={20} />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-white tracking-tight leading-snug">
                          {faq.title}
                        </h4>

                        {/* small separator */}
                        <div className="mt-2 h-[2px] w-10 rounded-full bg-white/20" />

                        <p className="mt-3 text-sm sm:text-base text-gray-200/90 leading-relaxed">
                          {faq.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle */}
        <div className="mt-14 text-center">
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg border border-gray-300 px-6 py-2 text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 shadow-lg hover:scale-105 transition-transform cursor-pointer"
          >
            {open ? "Show less" : "Load more"}
          </button>
        </div>
      </div>
    </section>
  );
}
