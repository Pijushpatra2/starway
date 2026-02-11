"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { Facebook, Linkedin, Youtube, Twitter } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-secondary px-4 pt-28 pb-16 font-sans overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff40_1px,transparent_1px),linear-gradient(to_bottom,#ffffff40_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* MAIN CARD */}
      <div className="relative w-full max-w-7xl rounded-[32px] border-[3px] border-[#101828] shadow-xl bg-white p-3 sm:p-4">
        {/* INNER WRAPPER */}
        <div className="w-full rounded-[28px] overflow-hidden flex flex-col lg:flex-row bg-white">
          {/* LEFT PANEL */}
          <div className="w-full lg:w-[38%] bg-white px-8 py-10 lg:px-10 lg:py-12 flex flex-col justify-between">
            <div>
              {/* CONTACT INFO */}
              <div className="space-y-10">
                {/* Chat */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center shrink-0">
                    <Mail className="w-[18px] h-[18px] text-gray-900" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg lg:text-xl font-medium text-gray-900 tracking-tight">
                      Chat to us
                    </h3>

                    <p className="text-[15px] lg:text-[17px] text-gray-600 leading-relaxed">
                      Our friendly team is here to help.
                    </p>

                    <p className="text-[15px] lg:text-[17px] font-medium text-gray-900">
                      hi@untitledui.com
                    </p>
                  </div>
                </div>

                {/* Visit */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center shrink-0">
                    <MapPin className="w-[18px] h-[18px] text-gray-900" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg lg:text-xl font-medium text-gray-900 tracking-tight">
                      Visit us
                    </h3>

                    <p className="text-[15px] lg:text-[17px] text-gray-600 leading-relaxed">
                      Come say hello at our office HQ.
                    </p>

                    <p className="text-[15px] lg:text-[15px] font-medium text-gray-900">
                      100 Smith Street <br />
                      Collingwood VIC 3066 AU
                    </p>
                  </div>
                </div>

                {/* Call */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center shrink-0">
                    <Phone className="w-[18px] h-[18px] text-gray-900" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg lg:text-xl font-medium text-gray-900 tracking-tight">
                      Call us
                    </h3>

                    <p className="text-[15px] lg:text-[17px] text-gray-600 leading-relaxed">
                      Mon-Fri from 8am to 5pm.
                    </p>

                    <p className="text-[15px] lg:text-[17px] font-medium text-gray-900">
                      +1 (555) 000-0000
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-3 mt-12">
              {[
                {
                  icon: <Facebook className="w-5 h-5" />,
                  link: "https://facebook.com",
                },
                {
                  icon: <Twitter className="w-5 h-5" />,
                  link: "https://twitter.com",
                },
                {
                  icon: <Linkedin className="w-5 h-5" />,
                  link: "https://linkedin.com",
                },
                {
                  icon: <Youtube className="w-5 h-5" />,
                  link: "https://youtube.com",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-800 hover:bg-gray-900 hover:text-white transition-all duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT FORM PANEL */}
          <div className="w-full lg:w-[62%] bg-secondary px-8 py-10 md:px-10 md:py-12 lg:px-14 lg:py-16 flex flex-col justify-center rounded-[24px] m-3 sm:m-4 md:m-0 lg:m-3">

            {/* Heading */}
            <h2 className="text-[32px] sm:text-[38px] lg:text-[44px] font-semibold text-gray-900 leading-[1.15] tracking-tight">
              Got ideas? We’ve got <br />
              the skills. Let’s team up.
            </h2>

            <p className="text-[14px] sm:text-[15px] text-gray-800 mt-5 max-w-lg leading-relaxed">
              Tell us more about yourself and what you’ve got in mind.
            </p>

            {/* FORM */}
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              {/* Full Name */}
              <div className="relative w-full">
                <input
                  id="fullname"
                  type="text"
                  required
                  placeholder=" "
                  className="peer w-full bg-transparent border-b border-gray-900/40 px-1 pt-7 pb-3 text-gray-900 text-[15px] outline-none focus:border-gray-900 transition-all"
                />
                <label
                  htmlFor="fullname"
                  className="absolute left-1 top-5 text-[15px] text-gray-900/70 transition-all duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-[15px] peer-focus:top-2 peer-focus:text-[13px] peer-focus:text-gray-900 peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-[13px] peer-not-placeholder-shown:text-gray-900"
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
                  className="peer w-full bg-transparent border-b border-gray-900/40 px-1 pt-7 pb-3 text-gray-900 text-[15px] outline-none focus:border-gray-900 transition-all"
                />
                <label
                  htmlFor="phone"
                  className="absolute left-1 top-5 text-[15px] text-gray-900/70 transition-all duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-[15px] peer-focus:top-2 peer-focus:text-[13px] peer-focus:text-gray-900 peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-[13px] peer-not-placeholder-shown:text-gray-900"
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
                  className="peer w-full bg-transparent border-b border-gray-900/40 px-1 pt-7 pb-3 text-gray-900 text-[15px] outline-none focus:border-gray-900 transition-all"
                />
                <label
                  htmlFor="email"
                  className="absolute left-1 top-5 text-[15px] text-gray-900/70 transition-all duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-[15px] peer-focus:top-2 peer-focus:text-[13px] peer-focus:text-gray-900 peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-[13px] peer-not-placeholder-shown:text-gray-900"
                >
                  Email Address *
                </label>
              </div>

              {/* Designation */}
              <div className="relative w-full">
                <input
                  id="designation"
                  type="text"
                  placeholder=" "
                  className="peer w-full bg-transparent border-b border-gray-900/40 px-1 pt-7 pb-3 text-gray-900 text-[15px] outline-none focus:border-gray-900 transition-all"
                />
                <label
                  htmlFor="designation"
                  className="absolute left-1 top-5 text-[15px] text-gray-900/70 transition-all duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-[15px] peer-focus:top-2 peer-focus:text-[13px] peer-focus:text-gray-900 peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-[13px] peer-not-placeholder-shown:text-gray-900"
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
                  className="peer w-full bg-transparent border-b border-gray-900/40 px-1 pt-7 pb-3 text-gray-900 text-[15px] outline-none focus:border-gray-900 transition-all"
                />
                <label
                  htmlFor="website"
                  className="absolute left-1 top-5 text-[15px] text-gray-900/70 transition-all duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-[15px] peer-focus:top-2 peer-focus:text-[13px] peer-focus:text-gray-900 peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-[13px] peer-not-placeholder-shown:text-gray-900"
                >
                  Website URL (Optional)
                </label>
              </div>

              {/* Challenges */}
              <div className="relative w-full sm:col-span-2 pt-2">
                <textarea
                  id="message"
                  rows={1}
                  required
                  placeholder=" "
                  className="peer w-full bg-transparent border-b border-gray-900/40 px-1 pt-7 pb-3 text-gray-900 text-[15px] outline-none focus:border-gray-900 transition-all resize-none"
                />
                <label
                  htmlFor="message"
                  className="absolute left-1 top-7 text-[15px] text-gray-900/70 transition-all duration-300 peer-placeholder-shown:top-8 peer-placeholder-shown:text-[15px] peer-focus:top-3 peer-focus:text-[13px] peer-focus:text-gray-900 peer-not-placeholder-shown:top-3 peer-not-placeholder-shown:text-[13px] peer-not-placeholder-shown:text-gray-900"
                >
                  Your Challenges *
                </label>
              </div>

              {/* Submit */}
              <div className="sm:col-span-2 pt-5">
                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-[#0A2458] text-white text-[15px] font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                >
                  Get Free Consultation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
