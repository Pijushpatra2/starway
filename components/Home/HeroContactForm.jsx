"use client"

import { motion } from "framer-motion"

export default function HeroLeadForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative max-w-xl mx-auto"
    >
      {/* Form Card */}
      <div className="relative z-10 p-6 sm:p-8 rounded-3xl bg-destructive border border-white/20 shadow-2xl">
        <h3 className="text-xl sm:text-2xl font-semibold text-white text-center mb-6">
          Get a Free Consultation
        </h3>

        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Full Name */}
          <div>
            <label className="sr-only">Full Name</label>
            <input
              type="text"
              required
              placeholder="Full Name"
              className="form-input"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="sr-only">Mobile Number</label>
            <input
              type="tel"
              required
              placeholder="Mobile Number"
              className="form-input"
            />
          </div>

          {/* Email */}
          <div>
            <label className="sr-only">Email Address</label>
            <input
              type="email"
              required
              placeholder="Email Address"
              className="form-input"
            />
          </div>

          {/* Job Title */}
          <div>
            <label className="sr-only">Job Title</label>
            <input
              type="text"
              placeholder="Job Title"
              className="form-input"
            />
          </div>

          {/* Website */}
          <div className="sm:col-span-2">
            <label className="sr-only">Website URL</label>
            <input
              type="url"
              placeholder="Website URL (optional)"
              className="form-input"
            />
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label className="sr-only">Challenges</label>
            <textarea
              rows={4}
              required
              placeholder="Tell us about your challenges"
              className="form-input resize-none"
            />
          </div>

          {/* Submit */}
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-[#abc2ed] text-[#0B1D3A] font-semibold shadow-lg hover:scale-[1.03] hover:shadow-xl transition-all duration-300"
            >
              Get Free Consultation
            </button>
          </div>
        </form>

        <p className="text-xs text-white/70 mt-4 text-center">
          We respect your privacy. No spam, ever.
        </p>
      </div>
    </motion.div>
  )
}
