"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";


export default function FAQ() {
  const faqs = [
    {
      question: "Do I have to take every service?",
      answer: "No we create a custom growth plan based on your goals and stage."
    },
    {
      question: "How soon will I see results?",
      answer:
        "PPC & Social Ads → Immediate. SEO & AI Search → 30–90 Days (Sustained growth)."
    },
    {
      question: "Can you work with any location?",
      answer: "Yes we serve India, UAE, USA, UK & Global markets."
    },
    {
      question: "Do you provide services globally?",
      answer: "Yes we work with businesses worldwide across all time zones."
    },
    {
      question: "What does AI Search Optimization mean?",
      answer: "It means improving your visibility in AI assistants like ChatGPT, Gemini, Copilot & Perplexity so your brand is recommended in answers, not just Google results."
    },
    {
      question: "Will this also improve my Google ranking?",
      answer: "Yes AI optimization strengthens brand authority, which helps your Google SEO performance."
    },
    {
      question: "How fast can results be seen?",
      answer: "SEO and AI visibility growth typically begin within 30–90 days, depending on competition and niche."
    },
    {
      question: "Do you work internationally?",
      answer: "Yes we work with clients across India, UAE, USA, UK & Global markets."
    },
    {
      question: "What makes your PPC campaigns different?",
      answer: "We optimize for lead quality, not just clicks — ensuring every ad spend delivers meaningful ROI."
    },
    {
      question: "Is there a monthly plan available?",
      answer: "Yes we offer flexible subscription plans based on goals and business size."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const [visibleIndex, setVisibleIndex] = useState(null);
  const toggleAnswer = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  const half = Math.ceil(faqs.length / 2);  // safe split

  return (
    <div className="w-full mx-auto mt-20 mb-20 text-white bg-[#14336C] px-6 md:px-20 py-20 rounded-2xl" style={{ boxShadow: "rgba(255, 255, 255, 0.12) 0px 2px 4px 0px, rgba(255, 255, 255, 0.32) 0px 2px 16px 0px" }}>
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">FAQ</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* First half */}
        <div className="space-y-6">
          {faqs.slice(0, half).map((faq, index) => (
            <div key={index} className="bg-white p-5 rounded-2xl shadow-lg">
              <button
                onClick={() => toggleAnswer(index)}
                className="flex items-center justify-between w-full text-left"
              >
                <h3 className="text-lg sm:text-2xl font-semibold text-blue-900">{faq.question}</h3>

                <span className="transition-transform duration-300">
                  {visibleIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-blue-900" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-blue-900" />
                  )}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${visibleIndex === index ? "max-h-40 mt-3" : "max-h-0"
                  }`}
              >
                <p className="text-lg text-[#04325d]">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Second half */}
        <div className="space-y-6">
          {faqs.slice(half).map((faq, index) => {
            const realIndex = index + half;

            return (
              <div key={realIndex} className="bg-white p-5 rounded-2xl shadow-lg">
                <button
                  onClick={() => toggleAnswer(realIndex)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <h3 className="text-lg sm:text-2xl font-semibold text-blue-900">{faq.question}</h3>

                  <span className="transition-transform duration-300">
                    {visibleIndex === realIndex ? (
                      <ChevronUp className="w-6 h-6 text-blue-900" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-blue-900" />
                    )}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${visibleIndex === realIndex ? "max-h-40 mt-3" : "max-h-0"
                    }`}
                >
                  <p className="text-lg text-[#04325d]">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}
