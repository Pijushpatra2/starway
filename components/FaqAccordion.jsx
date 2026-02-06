"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FaqAccordion({
  title = "General FAQs",
  subtitle = "Everything you need to know about the product and how it works.",
  linkText = "Please chat to our friendly team.",
  linkHref = "#",
  faqs = [],
  defaultOpenIndex = 0,
}) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#96b3e9] py-20">
      <div className="mx-auto max-w-7xl flex">
        {/* Left Content */}
        <div className="w-[40%]">
          <h2 className="text-4xl font-semibold text-gray-900">{title}</h2>

          <p className="mt-4 max-w-sm text-lg leading-relaxed text-gray-500">
            {subtitle}
            <a
              href={linkHref}
              className="font-medium text-gray-900 underline"
            >
              {linkText}
            </a>
          </p>
        </div>

        {/* Right Accordion */}
        <div className="w-[60%] border-t border-gray-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="border-b border-gray-200 py-6">
                {/* Question Row */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-6 text-left cursor-pointer"
                >
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {faq.question}
                  </h3>

                  {/* Toggle Button */}
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-300 text-gray-700"
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </motion.span>
                </button>

                {/* Answer Animation */}
                <AnimatePresence mode="wait">
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 pr-10 text-lg leading-relaxed text-gray-600">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
