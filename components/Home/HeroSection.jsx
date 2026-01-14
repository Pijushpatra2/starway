"use client";

import { motion } from "framer-motion";
import ServicesMarquee from "./ServicesMarquee";
import AnimatedButton from "../Common/AnimatedButton";
import HeroLeadForm from "./HeroContactForm";

export default function Hero() {
  return (
    <section className="w-full text-white relative overflow-hidden font-inter">
      <div className="max-w-[80%] mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight">
            Grow Your Business <br /> Visibility Everywhere <br />
            People Search
          </h1>

          <p className="mt-6 text-lg text-white/80 max-w-xl">
            We help your business rank across Google, Bing, Maps, Social Media,
            and now on AI platforms like ChatGPT, Gemini, Copilot, and
            Perplexity. Be discoverable not just through SEO but also through
            the next generation of AI-driven search.
          </p>

          <AnimatedButton
            href="/contact"
            label="Get a Free AI Visibility Audit"
            className="mt-8"
          />
        </motion.div>

        {/* RIGHT IMAGE BLOCK */}
        <motion.div
          className="relative"
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <HeroLeadForm />
        </motion.div>
      </div>

      {/* BOTTOM SERVICES TEXT */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="flex justify-center"
      >
        <div className="w-[80%]">
          <ServicesMarquee />
        </div>
      </motion.div>
    </section>
  );
}
