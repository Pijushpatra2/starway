"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, RefreshCw, Rocket, ShoppingBag } from "lucide-react";

const impactByAudience = [
  {
    key: "startup",
    title: "Product-First Startups",
    description: "Early-stage teams validating ideas, usability, and adoption",
    icon: Rocket,
    impact: [
      { metric: "38%", label: "Higher Conversions" },
      { metric: "52%", label: "Lower Bounce Rate" },
      { metric: "2× Faster", label: "MVP Iterations" },
    ],
    outcomes: [
      "Stronger product–market fit",
      "Clearer user journeys",
      "Faster validation cycles",
      "Improved early retention",
    ],
    focus: ["Onboarding UX", "Core feature clarity", "Rapid usability testing"],
  },
  {
    key: "saas",
    title: "SaaS & Tech Platforms",
    description: "Feature-rich platforms requiring clarity and scalability",
    icon: Cpu,
    impact: [
      { metric: "45%", label: "Faster Task Completion" },
      { metric: "4.8/5", label: "User Satisfaction" },
      { metric: "30%", label: "Feature Adoption" },
    ],
    outcomes: [
      "Lower support dependency",
      "Improved feature discoverability",
      "Higher long-term retention",
      "Reduced churn",
    ],
    focus: ["Design systems", "Workflow simplification", "Scalable UI patterns"],
  },
  {
    key: "ecommerce",
    title: "E-commerce Brands",
    description: "Conversion-driven stores and shopping experiences",
    icon: ShoppingBag,
    impact: [
      { metric: "34%", label: "Checkout Completion" },
      { metric: "41%", label: "Lower Cart Abandonment" },
      { metric: "+22%", label: "Higher AOV" },
    ],
    outcomes: [
      "More completed purchases",
      "Improved mobile conversions",
      "Stronger buyer trust",
      "Higher repeat purchases",
    ],
    focus: ["Checkout UX", "Product discovery", "Mobile-first shopping"],
  },
  {
    key: "redesign",
    title: "Website Redesigns",
    description: "Modernizing outdated digital experiences",
    icon: RefreshCw,
    impact: [
      { metric: "62%", label: "Lower Bounce Rate" },
      { metric: "More Leads", label: "Higher Engagement" },
      { metric: "Stronger Trust", label: "Brand Credibility" },
    ],
    outcomes: [
      "Modern visual identity",
      "Improved engagement metrics",
      "Higher-quality inbound leads",
      "Future-ready scalability",
    ],
    focus: ["Information architecture", "Visual hierarchy", "Performance UX"],
  },
];

export default function DesignImpactTabs() {
  const [active, setActive] = useState(impactByAudience[0]);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-destructive mb-4">
            Design Impact by Business Type
          </h2>
          <p className="text-xl text-gray-600">
            UI/UX strategies tailored to how different businesses grow and scale.
          </p>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-12">
          {/* LEFT TABS */}
          {/* LEFT — Tabs */}
<div className="grid grid-cols-2 gap-3 lg:flex lg:flex-col">
  {impactByAudience.map((item) => {
    const Icon = item.icon;
    const isActive = active.key === item.key;

    return (
      <button
        key={item.key}
        onClick={() => setActive(item)}
        className={`flex items-center gap-3 px-4 py-4 rounded-xl text-left transition-all
          ${
            isActive
              ? "bg-blue-600 text-white shadow-lg"
              : "bg-white text-gray-800 border border-gray-200 hover:bg-blue-50"
          }`}
      >
        <Icon className="w-5 h-5 shrink-0" />
        <span className="font-semibold leading-tight">
          {item.title}
        </span>
      </button>
    );
  })}
</div>


          {/* RIGHT CONTENT */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl border border-gray-200"
              >
                {/* TITLE */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {active.title}
                  </h3>
                  <p className="text-gray-600 max-w-xl">
                    {active.description}
                  </p>
                </div>

                {/* METRICS */}
                <div className="grid sm:grid-cols-3 gap-6 mb-10">
                  {active.impact.map((i, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl bg-blue-50 p-4"
                    >
                      <div className="text-3xl font-extrabold text-blue-600">
                        {i.metric}
                      </div>
                      <div className="text-sm font-medium text-gray-800 mt-1">
                        {i.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* OUTCOMES */}
                <div className="mb-10">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Business Outcomes
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {active.outcomes.map((o, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <span className="text-blue-600">✓</span>
                        <span>{o}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FOCUS AREAS */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">
                    UX Focus Areas
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {active.focus.map((f, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
