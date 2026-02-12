"use client"

import { motion } from "framer-motion"

export default function HeroLeadForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative max-w-5xl lg:max-w-xl mx-auto"
    >
      {/* Form Card */}
      <div className="relative z-10 p-6 sm:p-6 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/20 shadow-[0_10px_60px_rgba(0,0,0,0.4)]">

        {/* Heading */}
        <div className="text-center mb-5">
          <h3 className="text-2xl sm:text-3xl font-serif text-white">
            Get a Free Consultation
          </h3>
        </div>

        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          {/* Full Name */}
          <div className="relative w-full">
            <input
              id="fullname"
              type="text"
              required
              placeholder=" "
              className="peer w-full bg-transparent border-b border-white/30 px-1 pt-7 pb-3 text-white text-base outline-none focus:border-[#abc2ed] transition-all"
            />
            <label
              htmlFor="fullname"
              className="absolute left-1 top-5 text-base text-white/70 transition-all duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#abc2ed] peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-[#abc2ed]"
            >
              Full Name *
            </label>
          </div>

          {/* Mobile */}
          <div className="relative w-full">
            <input
              id="phone"
              type="tel"
              required
              placeholder=" "
              className="peer w-full bg-transparent border-b border-white/30 px-1 pt-7 pb-3 text-white text-base outline-none focus:border-[#abc2ed] transition-all"
            />
            <label
              htmlFor="phone"
              className="absolute left-1 top-5 text-base text-white/70 transition-all duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#abc2ed] peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-[#abc2ed]"
            >
              Mobile Number *
            </label>
          </div>

          {/* Email */}
          <div className="relative w-full">
            <input
              id="email"
              type="email"
              required
              placeholder=" "
              className="peer w-full bg-transparent border-b border-white/30 px-1 pt-7 pb-3 text-white text-base outline-none focus:border-[#abc2ed] transition-all"
            />
            <label
              htmlFor="email"
              className="absolute left-1 top-5 text-base text-white/70 transition-all duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#abc2ed] peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-[#abc2ed]"
            >
              Email Address *
            </label>
          </div>

          {/* Job Title */}
          <div className="relative w-full">
            <input
              id="designation"
              type="text"
              placeholder=" "
              className="peer w-full bg-transparent border-b border-white/30 px-1 pt-7 pb-3 text-white text-base outline-none focus:border-[#abc2ed] transition-all"
            />
            <label
              htmlFor="designation"
              className="absolute left-1 top-5 text-base text-white/70 transition-all duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#abc2ed] peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-[#abc2ed]"
            >
              Designation
            </label>
          </div>

          {/* Website */}
          <div className="relative w-full sm:col-span-2">
            <input
              id="website"
              type="text"
              placeholder=" "
              className="peer w-full bg-transparent border-b border-white/30 px-1 pt-7 pb-3 text-white text-base outline-none focus:border-[#abc2ed] transition-all"
            />
            <label
              htmlFor="website"
              className="absolute left-1 top-5 text-base text-white/70 transition-all duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#abc2ed] peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-[#abc2ed]"
            >
              Website URL (Optional)
            </label>
          </div>

          {/* Challenges */}
          <div className="relative w-full sm:col-span-2">
            <textarea
              id="message"
              rows={1}
              required
              placeholder=" "
              className="peer w-full bg-transparent border-b border-white/30 px-1 pt-7 pb-3 text-white text-base outline-none focus:border-[#abc2ed] transition-all resize-none"
            />
            <label
              htmlFor="message"
              className="absolute left-1 top-5 text-base text-white/70 transition-all duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#abc2ed] peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-[#abc2ed]"
            >
              Your Challenges *
            </label>
          </div>

          {/* Submit */}
          <div className="sm:col-span-2 pt-4">
            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-destructive text-white text-base font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              Get Free Consultation
            </button>
          </div>
        </form>

        <p className="text-xs text-white/60 mt-5 text-center leading-relaxed">
          We respect your privacy. Your details are secure and never shared.
        </p>
      </div>
    </motion.div>
  )
}
