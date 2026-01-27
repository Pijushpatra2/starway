"use client";

import { motion } from "framer-motion";

export default function ContactSplit() {
  return (
    <section className="relative bg-secondary xl:py-30 px-4 overflow-hidden">
      {/* Background grid boxes */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff40_1px,transparent_1px),linear-gradient(to_bottom,#ffffff40_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* Soft blur accents */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#5b7cfa]/30 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-xl bg-white gap-2"
        >
          {/* LEFT PANEL */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-b from-[#5b7cfa] to-[#abc2ed] text-white p-10"
          >
            <h3 className="text-2xl font-semibold mb-8">Get in touch</h3>

            <div className="space-y-6 text-sm">
              <Info
                title="Visit us"
                text="Come say hello at our office HQ.
67 Wisteria Way, Croydon South VIC 3136 AU"
              />

              <Info
                title="Chat to us"
                text="Our friendly team is here to help.
hello@paysphere.com"
              />

              <Info
                title="Call us"
                text="Mon–Fri from 8am to 5pm
(+995) 555-55-55-55"
              />

              <div>
                <p className="font-medium mb-2">Social media</p>
                <div className="flex gap-4 text-lg opacity-90">
                  <span>🌐</span>
                  <span>💼</span>
                  <span>📸</span>
                  <span>🐦</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-10 ml-5"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="First Name" placeholder="Randomfirst" />
                <Input label="Last Name" placeholder="Randomlast" />
              </div>

              <Input label="Company Name" placeholder="RandomCompany" />
              <Input label="Email" placeholder="Random@gmail.com" />
              <Input label="Phone Number" placeholder="(+995) 555-55-55-55" />

              <div>
                <label className="text-sm font-medium text-gray-600">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell us what we can help you with"
                  className="mt-1 w-full rounded-lg border border-gray-200
                  bg-[#f5f8ff] px-4 py-3
                  focus:ring-2 focus:ring-[#5b7cfa] focus:outline-none"
                />
              </div>

              <label className="flex items-start gap-2 text-sm text-gray-600">
                <input type="checkbox" className="mt-1" />
                <span>
                  I’d like to receive more information about company, I
                  understand and agree to the{" "}
                  <span className="text-[#5b7cfa] underline cursor-pointer">
                    Privacy Policy
                  </span>
                </span>
              </label>

              <button
                type="submit"
                className="w-full bg-[#2f4fe0] text-white py-3 rounded-lg
                font-medium hover:bg-[#243cc9] transition shadow-md"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* -------- Components -------- */

function Input({ label, placeholder }) {
  return (
    <div>
      <label className="text-sm font-medium text-gray-600">{label}</label>
      <input
        placeholder={placeholder}
        className="mt-1 w-full rounded-lg border border-gray-200
        bg-[#f5f8ff] px-4 py-3
        focus:ring-2 focus:ring-[#5b7cfa] focus:outline-none"
      />
    </div>
  );
}

function Info({ title, text }) {
  return (
    <div>
      <p className="font-medium mb-1">{title}</p>
      <p className="opacity-90 whitespace-pre-line">{text}</p>
    </div>
  );
}
