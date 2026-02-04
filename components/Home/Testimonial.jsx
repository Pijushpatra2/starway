// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowLeft, ArrowRight } from "lucide-react";
// import clsx from "clsx";
// import { twMerge } from "tailwind-merge";

// function cn(...inputs) {
//   return twMerge(clsx(inputs));
// }

// const TESTIMONIALS = [
//   {
//     id: 1,
//     name: "Jack O'Holleran",
//     role: "Co-Founder / CEO at Skale",
//     image: "https://i.pravatar.cc/150?u=jack",
//     content:
//       "The Piqo team delivered all our requirements in the best possible way and on time. We are very happy to collaborate with this team.",
//   },
//   {
//     id: 2,
//     name: "Allison Casals",
//     role: "Board Member at Beta",
//     image: "https://i.pravatar.cc/150?u=allison",
//     content:
//       "We were delighted with the 3D map for our website. The attention to detail and smooth animations truly elevated our user experience.",
//   },
//   {
//     id: 3,
//     name: "Marcus Chen",
//     role: "CTO at TechFlow",
//     image: "https://i.pravatar.cc/150?u=marcus",
//     content:
//       "Exceptional design patterns and code quality. It's rare to find a team that bridges the gap between design and engineering so flawlessly.",
//   },
//   {
//     id: 4,
//     name: "Sarah Miller",
//     role: "Product Lead at Metafy",
//     image: "https://i.pravatar.cc/150?u=sarah",
//     content:
//       "Their understanding of modern SaaS aesthetics is unmatched. They transformed our clunky dashboard into a work of art.",
//   },
// ];

// const LOGOS = [
//   "Skale",
//   "Metafy",
//   "UX Cabin",
//   "Digikala",
//   "Citizen",
//   "Unsplash",
//   "Bettermotion",
//   "Sololearn",
//   "Bubblehouse",
// ];

// const cardVariants = {
//   enter: (direction) => ({
//     x: direction > 0 ? 140 : -140,
//     opacity: 0,
//     scale: 0.95,
//     zIndex: 3,
//   }),

//   center: {
//     x: 0,
//     opacity: 1,
//     scale: 1,
//     zIndex: 3,
//     transition: {
//       type: "spring",
//       stiffness: 260,
//       damping: 28,
//     },
//   },

//   side: {
//     x: 260,
//     opacity: 0.55,
//     scale: 0.96,
//     filter: "blur(0px)",
//     zIndex: 1,
//     transition: {
//       type: "spring",
//       stiffness: 260,
//       damping: 28,
//     },
//   },

//   exit: (direction) => ({
//     x: direction > 0 ? -140 : 140,
//     opacity: 0,
//     scale: 0.9,
//     zIndex: 0,
//   }),
// };

// export default function TestimonialSection() {
//   const [[active, direction], setActive] = useState([0, 0]);

//   const handleNext = () =>
//     setActive(([p]) => [(p + 1) % TESTIMONIALS.length, 1]);

//   const handlePrev = () =>
//     setActive(([p]) => [
//       (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
//       -1,
//     ]);

//   const visible = [
//     TESTIMONIALS[active],
//     TESTIMONIALS[(active + 1) % TESTIMONIALS.length],
//   ];

//   return (
//     <section className="bg-secondary py-16 overflow-hidden">
//       <style jsx global>{`
//         @keyframes marquee {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-100%);
//           }
//         }

//         .animate-marquee {
//           animation: marquee 35s linear infinite;
//         }

//         .animate-marquee:hover {
//           animation-play-state: paused;
//         }
//       `}</style>

//       <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">

//         {/* LEFT */}
//         <div className="lg:col-span-5 space-y-8">
//           <span className="uppercase tracking-[0.2em] text-xs text-gray-500 font-bold">
//             Clients
//           </span>

//           <h2 className="text-5xl font-bold leading-tight">
//             What people say
//             <br />
//             about us?
//           </h2>

//           <div className="flex gap-4">
//             <button
//               onClick={handlePrev}
//               className="h-12 w-12 rounded-full hover:bg-white flex items-center justify-center shadow-sm active:scale-95"
//             >
//               <ArrowLeft />
//             </button>

//             <button
//               onClick={handleNext}
//               className="h-12 w-12 rounded-full hover:bg-white flex items-center justify-center shadow-sm active:scale-95"
//             >
//               <ArrowRight />
//             </button>
//           </div>
//         </div>

//         {/* RIGHT */}
//         <div className="lg:col-span-7 relative h-[420px]">
//           <AnimatePresence custom={direction}>
//             {visible.map((t, i) => (
//               <motion.div
//                 key={t.id}
//                 custom={direction}
//                 variants={cardVariants}
//                 initial={i === 0 ? "enter" : false}
//                 animate={i === 0 ? "center" : "side"}
//                 exit="exit"
//                 className="absolute top-1/2 left-0 w-[480px] rounded-3xl bg-white p-10 shadow-xl border border-gray-100"
//                 style={{
//                   transform: "translateY(-50%)",
//                   pointerEvents: i === 0 ? "auto" : "none",
//                 }}
//               >
//                 <div className="flex gap-4 items-center mb-6">
//                   <img
//                     src={t.image}
//                     className="h-14 w-14 rounded-full object-cover"
//                   />
//                   <div>
//                     <h3 className="font-bold">{t.name}</h3>
//                     <p className="text-sm text-gray-400">{t.role}</p>
//                   </div>
//                 </div>

//                 <p className="text-lg leading-relaxed text-gray-700">
//                   {t.content}
//                 </p>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* MARQUEE */}
//       <div className="mt-20 overflow-hidden">
//         <div className="flex animate-marquee whitespace-nowrap">
//           {[...LOGOS, ...LOGOS].map((logo, i) => (
//             <div
//               key={i}
//               className="mx-16 text-xl font-bold text-gray-400 hover:text-gray-900 transition"
//             >
//               {logo}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



// "use client";

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowLeft, ArrowRight } from "lucide-react";
// import clsx from "clsx";
// import { twMerge } from "tailwind-merge";

// function cn(...inputs) {
//   return twMerge(clsx(inputs));
// }

// const TESTIMONIALS = [
//   {
//     id: 1,
//     name: "Jack O'Holleran",
//     role: "Co-Founder / CEO at Skale",
//     image: "https://i.pravatar.cc/150?u=jack",
//     content:
//       "The Piqo team delivered all our requirements in the best possible way and on time. We are very happy to collaborate with this team.",
//   },
//   {
//     id: 2,
//     name: "Allison Casals",
//     role: "Board Member at Beta",
//     image: "https://i.pravatar.cc/150?u=allison",
//     content:
//       "We were delighted with the 3D map for our website. The attention to detail and smooth animations truly elevated our user experience.",
//   },
//   {
//     id: 3,
//     name: "Marcus Chen",
//     role: "CTO at TechFlow",
//     image: "https://i.pravatar.cc/150?u=marcus",
//     content:
//       "Exceptional design patterns and code quality. It's rare to find a team that bridges the gap between design and engineering so flawlessly.",
//   },
//   {
//     id: 4,
//     name: "Sarah Miller",
//     role: "Product Lead at Metafy",
//     image: "https://i.pravatar.cc/150?u=sarah",
//     content:
//       "Their understanding of modern SaaS aesthetics is unmatched. They transformed our clunky dashboard into a work of art.",
//   },
// ];

// const LOGOS = [
//   "Skale",
//   "Metafy",
//   "UX Cabin",
//   "Digikala",
//   "Citizen",
//   "Unsplash",
//   "Bettermotion",
//   "Sololearn",
//   "Bubblehouse",
// ];

// const cardVariants = {
//   enter: (direction) => ({
//     x: direction > 0 ? 140 : -140,
//     opacity: 0,
//     scale: 0.95,
//     zIndex: 3,
//   }),

//   center: {
//     x: 0,
//     opacity: 1,
//     scale: 1,
//     zIndex: 3,
//     transition: {
//       type: "spring",
//       stiffness: 260,
//       damping: 28,
//     },
//   },

//   side: {
//     x: 260,
//     opacity: 0.55,
//     scale: 0.96,
//     zIndex: 1,
//     transition: {
//       type: "spring",
//       stiffness: 260,
//       damping: 28,
//     },
//   },

//   exit: (direction) => ({
//     x: direction > 0 ? -140 : 140,
//     opacity: 0,
//     scale: 0.9,
//     zIndex: 0,
//   }),
// };

// export default function TestimonialSection() {
//   const [[active, direction], setActive] = useState([0, 0]);

//   const handleNext = () =>
//     setActive(([p]) => [(p + 1) % TESTIMONIALS.length, 1]);

//   const handlePrev = () =>
//     setActive(([p]) => [
//       (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
//       -1,
//     ]);

// useEffect(() => {
//   const interval = setInterval(() => {
//     setActive(([p]) => [(p + 1) % TESTIMONIALS.length, 1]);
//   }, 2000); // increased speed

//   return () => clearInterval(interval);
// }, []);

//   const visible = [
//     TESTIMONIALS[active],
//     TESTIMONIALS[(active + 1) % TESTIMONIALS.length],
//   ];

//   return (
//     <section className="bg-secondary py-16 overflow-hidden">
//       <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
//         <div className="lg:col-span-5 space-y-8">
//           <span className="uppercase tracking-[0.2em] text-xs text-gray-500 font-bold">
//             Clients
//           </span>

//           <h2 className="text-5xl font-bold leading-tight">
//             What people say
//             <br />
//             about us?
//           </h2>

//           <div className="flex gap-4">
//             <button
//               onClick={handlePrev}
//               className="h-12 w-12 rounded-full hover:bg-white flex items-center justify-center shadow-sm active:scale-95"
//             >
//               <ArrowLeft />
//             </button>

//             <button
//               onClick={handleNext}
//               className="h-12 w-12 rounded-full hover:bg-white flex items-center justify-center shadow-sm active:scale-95"
//             >
//               <ArrowRight />
//             </button>
//           </div>
//         </div>

//         <div className="lg:col-span-7 relative h-[420px]">
//           <AnimatePresence custom={direction}>
//             {visible.map((t, i) => (
//               <motion.div
//                 key={t.id}
//                 custom={direction}
//                 variants={cardVariants}
//                 initial={i === 0 ? "enter" : false}
//                 animate={i === 0 ? "center" : "side"}
//                 exit="exit"
//                 className="absolute top-1/2 left-0 w-[480px] rounded-3xl bg-white p-10 shadow-xl border border-gray-100"
//                 style={{
//                   transform: "translateY(-50%)",
//                   pointerEvents: i === 0 ? "auto" : "none",
//                 }}
//               >
//                 <div className="flex gap-4 items-center mb-6">
//                   <img
//                     src={t.image}
//                     className="h-14 w-14 rounded-full object-cover"
//                   />
//                   <div>
//                     <h3 className="font-bold">{t.name}</h3>
//                     <p className="text-sm text-gray-400">{t.role}</p>
//                   </div>
//                 </div>

//                 <p className="text-lg leading-relaxed text-gray-700">
//                   {t.content}
//                 </p>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Jack O'Holleran",
    role: "Co-Founder / CEO at Skale",
    image: "https://i.pravatar.cc/150?u=jack",
    content:
      "The Piqo team delivered all our requirements in the best possible way and on time. We are very happy to collaborate with this team.",
  },
  {
    id: 2,
    name: "Allison Casals",
    role: "Board Member at Beta",
    image: "https://i.pravatar.cc/150?u=allison",
    content:
      "We were delighted with the 3D map for our website. The attention to detail and smooth animations truly elevated our user experience.",
  },
  {
    id: 3,
    name: "Marcus Chen",
    role: "CTO at TechFlow",
    image: "https://i.pravatar.cc/150?u=marcus",
    content:
      "Exceptional design patterns and code quality. It's rare to find a team that bridges the gap between design and engineering so flawlessly.",
  },
  {
    id: 4,
    name: "Sarah Miller",
    role: "Product Lead at Metafy",
    image: "https://i.pravatar.cc/150?u=sarah",
    content:
      "Their understanding of modern SaaS aesthetics is unmatched. They transformed our clunky dashboard into a work of art.",
  },
];

const LOGOS = [
  { src: "/images/clients/1.svg" },
  { src: "/images/clients/2.svg" },
  { src: "/images/clients/3.svg" },
  { src: "/images/clients/4.svg" },
  { src: "/images/clients/5.svg"},
  { src: "/images/clients/6.svg"},
  { src: "/images/clients/7.svg"},
  { src: "/images/clients/8.svg" },
  { src: "/images/clients/9.svg" },
  { src: "/images/clients/10.svg" },
  { src: "/images/clients/11.webp" },
  { src: "/images/clients/12.webp" },
  { src: "/images/clients/13.webp" },
  { src: "/images/clients/14.webp" },
  { src: "/images/clients/15.svg" },
  { src: "/images/clients/16.webp" },
  { src: "/images/clients/17.webp" },
  { src: "/images/clients/18.avif" },
  { src: "/images/clients/19.png" },
  // { src: "/images/clients/20.webp" },
  { src: "/images/clients/21.png" },
  { src: "/images/clients/22.png" },
  { src: "/images/clients/23.webp" },
  { src: "/images/clients/24.webp" },
  { src: "/images/clients/25.png" },
  { src: "/images/clients/26.webp" },
  { src: "/images/clients/27.png"},

];


const cardVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 140 : -140,
    opacity: 0,
    scale: 0.95,
    zIndex: 3,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    zIndex: 3,
    transition: { type: "spring", stiffness: 260, damping: 28 },
  },
  side: {
    x: 260,
    opacity: 0.55,
    scale: 0.96,
    zIndex: 1,
    transition: { type: "spring", stiffness: 260, damping: 28 },
  },
  exit: (direction) => ({
    x: direction > 0 ? -140 : 140,
    opacity: 0,
    scale: 0.9,
    zIndex: 0,
  }),
};

export default function TestimonialSection() {
  const [[active, direction], setActive] = useState([0, 0]);

  const handleNext = () =>
    setActive(([p]) => [(p + 1) % TESTIMONIALS.length, 1]);

  const handlePrev = () =>
    setActive(([p]) => [
      (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
      -1,
    ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(([p]) => [(p + 1) % TESTIMONIALS.length, 1]);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const visible = [
    TESTIMONIALS[active],
    TESTIMONIALS[(active + 1) % TESTIMONIALS.length],
  ];

  return (
    <section className="w-full bg-secondary pt-10 pb-16 overflow-hidden">
      {/* MAIN */}
      <div className="w-[70%] mx-auto grid lg:grid-cols-12 gap-12 items-center min-h-[420px]">
        {/* LEFT */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
          <span className="uppercase tracking-[0.2em] text-xs text-gray-500 font-bold">
            Clients
          </span>

          <h2 className="text-5xl font-bold leading-tight text-destructive">
            What people say
            <br />
            about us?
          </h2>

          <div className="flex gap-4 pt-2">
            <button
              onClick={handlePrev}
              className="h-12 w-12 rounded-full text-destructive hover:bg-white flex items-center justify-center shadow-sm active:scale-95"
            >
              <ArrowLeft />
            </button>

            <button
              onClick={handleNext}
              className="h-12 w-12 rounded-full text-destructive hover:bg-white flex items-center justify-center shadow-sm active:scale-95"
            >
              <ArrowRight />
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-7 relative h-[420px] flex items-center">
          <AnimatePresence custom={direction}>
            {visible.map((t, i) => (
              <motion.div
                key={t.id}
                custom={direction}
                variants={cardVariants}
                initial={i === 0 ? "enter" : false}
                animate={i === 0 ? "center" : "side"}
                exit="exit"
                className="absolute left-0 w-[480px] rounded-3xl bg-white p-10 border border-gray-100 shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
                style={{ pointerEvents: i === 0 ? "auto" : "none" }}
              >
                <div className="flex gap-4 items-center mb-6">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold">{t.name}</h3>
                    <p className="text-sm text-gray-400">{t.role}</p>
                  </div>
                </div>

                <p className="text-lg leading-relaxed text-gray-700">
                  {t.content}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* LOGO MARQUEE */}
      <div className="mt-12">
        <div className="w-[70%] mx-auto">
          <Marquee speed={60} pauseOnHover gradient={false}>
            {LOGOS.map((logo, i) => (
              <div
                key={i}
                className="mx-14 flex items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={40}
                  className="object-contain transition"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
