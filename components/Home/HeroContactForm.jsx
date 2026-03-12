// "use client"

// import { motion } from "framer-motion"

// export default function HeroLeadForm() {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       viewport={{ once: true }}
//       className="relative max-w-5xl lg:max-w-xl mx-auto"
//     >
//       {/* Form Card */}
//       <div className="relative z-10 p-6 sm:p-6 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/20 shadow-[0_10px_60px_rgba(0,0,0,0.4)]">

//         {/* Heading */}
//         <div className="text-center mb-5">
//           <h3 className="text-2xl sm:text-3xl font-serif text-white">
//             Get a Free Consultation
//           </h3>
//         </div>

//         <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">

//           {/* Full Name */}
//           <div className="relative w-full">
//             <input
//               id="fullname"
//               type="text"
//               required
//               placeholder=" "
//               className="peer w-full bg-transparent border-b border-white/30 px-1 pt-7 pb-3 text-white text-base outline-none focus:border-[#abc2ed] transition-all"
//             />
//             <label
//               htmlFor="fullname"
//               className="absolute left-1 top-5 text-base text-white/70 transition-all duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#abc2ed] peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-[#abc2ed]"
//             >
//               Full Name *
//             </label>
//           </div>

//           {/* Mobile */}
//           <div className="relative w-full">
//             <input
//               id="phone"
//               type="tel"
//               required
//               placeholder=" "
//               className="peer w-full bg-transparent border-b border-white/30 px-1 pt-7 pb-3 text-white text-base outline-none focus:border-[#abc2ed] transition-all"
//             />
//             <label
//               htmlFor="phone"
//               className="absolute left-1 top-5 text-base text-white/70 transition-all duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#abc2ed] peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-[#abc2ed]"
//             >
//               Mobile Number *
//             </label>
//           </div>

//           {/* Email */}
//           <div className="relative w-full">
//             <input
//               id="email"
//               type="email"
//               required
//               placeholder=" "
//               className="peer w-full bg-transparent border-b border-white/30 px-1 pt-7 pb-3 text-white text-base outline-none focus:border-[#abc2ed] transition-all"
//             />
//             <label
//               htmlFor="email"
//               className="absolute left-1 top-5 text-base text-white/70 transition-all duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#abc2ed] peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-[#abc2ed]"
//             >
//               Email Address *
//             </label>
//           </div>

//           {/* Job Title */}
//           <div className="relative w-full">
//             <input
//               id="designation"
//               type="text"
//               placeholder=" "
//               className="peer w-full bg-transparent border-b border-white/30 px-1 pt-7 pb-3 text-white text-base outline-none focus:border-[#abc2ed] transition-all"
//             />
//             <label
//               htmlFor="designation"
//               className="absolute left-1 top-5 text-base text-white/70 transition-all duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#abc2ed] peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-[#abc2ed]"
//             >
//               Designation
//             </label>
//           </div>

//           {/* Website */}
//           <div className="relative w-full sm:col-span-2">
//             <input
//               id="website"
//               type="text"
//               placeholder=" "
//               className="peer w-full bg-transparent border-b border-white/30 px-1 pt-7 pb-3 text-white text-base outline-none focus:border-[#abc2ed] transition-all"
//             />
//             <label
//               htmlFor="website"
//               className="absolute left-1 top-5 text-base text-white/70 transition-all duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#abc2ed] peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-[#abc2ed]"
//             >
//               Website URL (Optional)
//             </label>
//           </div>

//           {/* Challenges */}
//           <div className="relative w-full sm:col-span-2">
//             <textarea
//               id="message"
//               rows={1}
//               required
//               placeholder=" "
//               className="peer w-full bg-transparent border-b border-white/30 px-1 pt-7 pb-3 text-white text-base outline-none focus:border-[#abc2ed] transition-all resize-none"
//             />
//             <label
//               htmlFor="message"
//               className="absolute left-1 top-5 text-base text-white/70 transition-all duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#abc2ed] peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-[#abc2ed]"
//             >
//               Your Challenges *
//             </label>
//           </div>

//           {/* Submit */}
//           <div className="sm:col-span-2 pt-4">
//             <button
//               type="submit"
//               className="w-full py-4 rounded-2xl bg-destructive text-white text-base font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
//             >
//               Get Free Consultation
//             </button>
//           </div>
//         </form>

//         <p className="text-xs text-white/60 mt-5 text-center leading-relaxed">
//           We respect your privacy. Your details are secure and never shared.
//         </p>
//       </div>
//     </motion.div>
//   )
// }

//==================================================================

"use client";

import { motion } from "framer-motion";

export default function HeroLeadForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-full max-w-xl sm:max-w-xl mx-auto sm:px-4"
    >
      {/* Form Card */}
      {/* <div className="relative z-10 p-5 sm:p-7 lg:p-8 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/20 shadow-[0_10px_60px_rgba(0,0,0,0.4)]">

        <div className="text-center mb-3">
          <h3 className="text-xl sm:text-2xl font-serif text-white">
            Get a Free Consultation
          </h3>
        </div>

        <form className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">

          <div className="relative w-full">
            <input
              id="fullname"
              type="text"
              required
              placeholder=" "
              className="peer w-full bg-transparent border-b border-white/30 px-1 pt-5 pb-2 text-white text-sm sm:text-base outline-none focus:border-[#abc2ed]"
            />
            <label
              htmlFor="fullname"
              className="absolute left-1 top-4 text-sm text-white/70 transition-all duration-300
              peer-placeholder-shown:top-5 peer-placeholder-shown:text-base
              peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#abc2ed]
              peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-[#abc2ed]"
            >
              Full Name *
            </label>
          </div>


          <div className="relative w-full">
            <input
              id="phone"
              type="tel"
              required
              placeholder=" "
              className="peer w-full bg-transparent border-b border-white/30 px-1 pt-5 pb-2 text-white text-sm sm:text-base outline-none focus:border-[#abc2ed]"
            />
            <label
              htmlFor="phone"
              className="absolute left-1 top-4 text-sm text-white/70 transition-all duration-300
              peer-placeholder-shown:top-5 peer-placeholder-shown:text-base
              peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#abc2ed]
              peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-[#abc2ed]"
            >
              Mobile Number *
            </label>
          </div>


          <div className="relative w-full">
            <input
              id="email"
              type="email"
              required
              placeholder=" "
              className="peer w-full bg-transparent border-b border-white/30 px-1 pt-5 pb-2 text-white text-sm sm:text-base outline-none focus:border-[#abc2ed]"
            />
            <label
              htmlFor="email"
              className="absolute left-1 top-4 text-sm text-white/70 transition-all duration-300
              peer-placeholder-shown:top-5 peer-placeholder-shown:text-base
              peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#abc2ed]
              peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-[#abc2ed]"
            >
              Email Address *
            </label>
          </div>


          <div className="relative w-full">
            <input
              id="designation"
              type="text"
              placeholder=" "
              className="peer w-full bg-transparent border-b border-white/30 px-1 pt-5 pb-2 text-white text-sm sm:text-base outline-none focus:border-[#abc2ed]"
            />
            <label
              htmlFor="designation"
              className="absolute left-1 top-4 text-sm text-white/70 transition-all duration-300
              peer-placeholder-shown:top-5 peer-placeholder-shown:text-base
              peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#abc2ed]
              peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-[#abc2ed]"
            >
              Designation
            </label>
          </div>


          <div className="relative w-full sm:col-span-2">
            <input
              id="website"
              type="text"
              placeholder=" "
              className="peer w-full bg-transparent border-b border-white/30 px-1 pt-5 pb-2 text-white text-sm sm:text-base outline-none focus:border-[#abc2ed]"
            />
            <label
              htmlFor="website"
              className="absolute left-1 top-4 text-sm text-white/70 transition-all duration-300
              peer-placeholder-shown:top-5 peer-placeholder-shown:text-base
              peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#abc2ed]
              peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-[#abc2ed]"
            >
              Website URL (Optional)
            </label>
          </div>


          <div className="relative w-full sm:col-span-2">
            <textarea
              id="message"
              rows={2}
              required
              placeholder=" "
              className="peer w-full bg-transparent border-b border-white/30 px-1 pt-5 pb-2 text-white text-sm sm:text-base outline-none focus:border-[#abc2ed] resize-none"
            />
            <label
              htmlFor="message"
              className="absolute left-1 top-5 text-sm text-white/70 transition-all duration-300
              peer-placeholder-shown:top-6 peer-placeholder-shown:text-base
              peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#abc2ed]
              peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-[#abc2ed]"
            >
              Your Challenges *
            </label>
          </div>


          <div className="sm:col-span-2 mt-2">
            <h3 className="text-sm 2xl:text-base font-normal text-white mb-3">
              How can we help?
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs xl:text-sm text-white/80">
              {[
                "E-Commerce / WooCommerce",
                "PPC Advertising",
                "Web Design & Development",
                "Lead Generation",
                "SEO / AEO / GEO",
                "Social Media Marketing",
              ].map((item, index) => (
                <label key={index} className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 accent-white" />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>


          <div className="sm:col-span-2 pt-3">
            <button
              type="submit"
              className="w-full py-2 sm:py-3 rounded-xl bg-destructive text-white text-sm sm:text-base font-semibold shadow-lg hover:scale-[1.02] transition-all"
            >
              Get Free Consultation
            </button>
          </div>
        </form>
        <p className="text-xs text-white/60 mt-2 text-center leading-relaxed">
          We respect your privacy. Your details are secure and never shared.
        </p>
      </div> */}

      <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 2xl:p-8 max-w-4xl mx-auto shadow-lg md:shadow-[0_10px_40px_rgba(0,0,0,0.35)] border border-white/20">
        {/* Full Name */}
        <input
          type="text"
          placeholder="Full Name"
          className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-xs 2xl:text-sm text-white placeholder-white/60 mb-4 focus:outline-none focus:ring-2 focus:ring-white/40"
        />

        {/* Email + Phone */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <input
            type="email"
            placeholder="Work Email"
            className="bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-xs 2xl:text-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-xs 2xl:text-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
          />
        </div>

        {/* Project Overview */}
        <textarea
          rows="3"
          placeholder="Provide us with a quick overview of the issues you're dealing with"
          className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-xs 2xl:text-sm text-white placeholder-white/60 mb-4 focus:outline-none focus:ring-2 focus:ring-white/40 resize-none"
        />

        {/* Website URL */}
        <input
          type="url"
          placeholder="Website Url"
          className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-xs 2xl:text-sm text-white placeholder-white/60 mb-6 focus:outline-none focus:ring-2 focus:ring-white/40"
        />

        {/* Help Section */}
        <h3 className="text-base font-semibold text-white mb-3">
          How can we help?
        </h3>

        <div className="grid md:grid-cols-2 gap-3 text-xs 2xl:text-sm mb-6">
          {[
            "E-Commerce / WooCommerce",
            "PPC Advertising",
            "Web Design & Development",
            "Lead Generation",
            "SEO / AEO / GEO",
            "Social Media Marketing",
          ].map((item, index) => (
            <label
              key={index}
              className="flex items-center gap-2 2xl:gap-3 text-white/80"
            >
              <input type="checkbox" className="w-4 h-4 accent-white" />
              <span>{item}</span>
            </label>
          ))}
        </div>

        {/* Submit */}
        <button className="py-2 px-7 rounded-2xl bg-white text-black text-lg font-normal shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
          Submit
        </button>
      </div>
    </motion.div>
  );
}
