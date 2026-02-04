// "use client";

// import {
//   Video,
//   PenTool,
//   Share2,
//   MousePointerClick,
//   BarChart3,
//   Code2,
// } from "lucide-react";

// export default function DigitalMarketingExpertise() {
//   return (
//     <section className="w-full bg-secondary py-20">
//       <div className="max-w-[80%] mx-auto px-6">
//         {/* GRID WRAPPER */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {/* ===== TOP 4 CARDS ===== */}
//           <ServiceCard icon={Video} title="Video editing & Production" />
//           <ServiceCard icon={PenTool} title="Content Marketing" />
//           <ServiceCard icon={Share2} title="Social media Marketing" />
//           <ServiceCard icon={MousePointerClick} title="Pay per click (PPC)" />

//           {/* ===== BOTTOM LEFT (TEXT, spans 2 columns) ===== */}
//           <div className="lg:col-span-2  p-2">
//             <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-destructive leading-tight">
//               Our Digital <br /> Marketing Expertise
//             </h2>

//             <p className="mt-4 text-black max-w-xl">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
//               nonumy eirmod tempor Lorem ipsum dolor sit Lorem ipsum dolor sit
//               amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor
//               Lorem ipsum dolor sit
//             </p>
//           </div>

//           {/* ===== BOTTOM RIGHT 2 CARDS ===== */}
//           <ServiceCard
//             icon={BarChart3}
//             title="SEO, AEO, GEO, LLM Optimization"
//           />
//           <ServiceCard icon={Code2} title="Website design & Development" />
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ================= CARD COMPONENT ================= */

// function ServiceCard({ icon: Icon, title }) {
//   return (
//     // {/* <div
//     //   className="
//     //     group h-[250px] rounded-xl p-5
//     //     bg-gradient-to-b from-[#1E6FB7] to-[#0B3D68]
//     //     text-white shadow-lg
//     //     hover:scale-[1.03] transition-transform
//     //     font-light
//     //   "
//     // >
//     //   <div className="w-[90%] h-[95%] mx-auto flex flex-col justify-evenly">

//     //     {/* GLASS + NEON ICON */}
//     //     <div
//     //       className="
//     //         w-20 h-20 rounded-2xl
//     //         backdrop-blur-xl
//     //         bg-white/10
//     //         border border-white/20
//     //         shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)]
//     //         flex items-center justify-center
//     //         transition-all duration-300
//     //         group-hover:scale-110
//     //         group-hover:shadow-[0_0_35px_rgba(74,222,128,0.6)]
//     //       "
//     //     >
//     //       <Icon
//     //         className="
//     //           w-12 h-12 text-green-400
//     //           drop-shadow-[0_0_6px_rgba(74,222,128,0.6)]
//     //           drop-shadow-[0_0_14px_rgba(74,222,128,0.8)]
//     //           drop-shadow-[0_0_30px_rgba(74,222,128,1)]
//     //         "
//     //       />
//     //     </div>

//     //     <p className="text-[25px] font-semibold leading-snug">
//     //       {title}
//     //     </p>
//     //   </div>
//     // </div> */}

// <div
//       className="
//         group h-[250px] rounded-xl p-5
//         bg-gradient-to-b from-[#1E6FB7] to-[#0B3D68]
//         text-white shadow-lg
//         hover:scale-[1.03] transition-transform
//         font-light
//       "
//     >
//       <div className="w-[90%] h-[95%] mx-auto flex flex-col justify-evenly">
//         {/* ICON CONTAINER */}
//         <div
//           className="
//             relative w-20 h-20 rounded-2xl
//             bg-white/10 backdrop-blur-xl
//             border border-white/25
//             flex items-center justify-center
//             group-hover:bg-orange-500
//             transition-colors duration-300
//           "
//         >
//           {/* SVG BORDER FOLLOWER */}
//           <svg
//             className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
//             viewBox="0 0 80 80"
//           >
//             {/* Rounded rectangle path - adjusted coordinates */}
//             <rect
//               x="4"
//               y="4"
//               width="72"
//               height="72"
//               rx="16"
//               ry="16"
//               fill="none"
//               stroke="none"
//               pathLength="1"
//               id="borderPath"
//             />

//             {/* Moving dot with better visibility */}
//             <circle r="3" fill="#ffffff" className="drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]">
//               <animateMotion
//                 dur="3s"
//                 repeatCount="indefinite"
//                 rotate="auto"
//               >
//                 <mpath href="#borderPath" />
//               </animateMotion>
//             </circle>
//           </svg>

//           {/* ICON */}
//           <Icon className="w-12 h-12 text-white relative z-10" />
//         </div>

//         <p className="text-[25px] font-semibold leading-snug">
//           {title}
//         </p>
//       </div>
//     </div>

//   );
// }

"use client";

import {
  Video,
  PenTool,
  Share2,
  MousePointerClick,
  BarChart3,
  Code2,
} from "lucide-react";

export default function DigitalMarketingExpertise() {
  return (
    <section className="w-full bg-secondary py-20">
      <div className="w-[70%] mx-auto px-4 relative">
        {/* GRID WRAPPER */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* ===== TOP 4 CARDS ===== */}
          <ServiceCard icon={Video} title="Video editing & Production" />
          <ServiceCard icon={PenTool} title="Content Marketing" />
          <ServiceCard icon={Share2} title="Social media Marketing" />
          <ServiceCard icon={MousePointerClick} title="Pay per click (PPC)" />

          {/* ===== BOTTOM LEFT (TEXT, spans 2 columns) ===== */}
          <div className="lg:col-span-2 p-2">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-destructive leading-tight">
              Our Digital <br /> Marketing Expertise
            </h2>
            <p className="mt-4 text-black max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonumy eirmod tempor Lorem ipsum dolor sit Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor
            </p>
          </div>

          {/* ===== BOTTOM RIGHT 2 CARDS ===== */}
          <ServiceCard
            icon={BarChart3}
            title="SEO, AEO, GEO, LLM Optimization"
          />         
          <ServiceCard icon={Code2} title="Website design & Development" />
        </div>
        <div className="absolute bottom-[-160] left-[45%]">
          <button className="relative w-40 h-40 group">
            {/* Circular Text */}
            <svg
              viewBox="0 0 200 200"
              className="
              absolute inset-0 w-full h-full
              animate-spin-slow
              opacity-90
            "
            >
              <defs>
                <path
                  id="circlePath"
                  d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
                />
              </defs>

              <text
                fill="#EAF4FF"
                fontSize="13"
                letterSpacing="3"
                className="uppercase"
              >
                <textPath href="#circlePath">
                  SHOW MORE • CLICK ME • SHOW MORE •
                </textPath>
              </text>
            </svg>

            {/* Center Button */}
            <div
              className="
              absolute inset-6 rounded-full
              bg-gradient-to-br from-[#FF6B6B] to-[#1E3A8A]
              flex items-center justify-center
              shadow-[0_10px_30px_rgba(11,61,104,0.6)]
              transition-all duration-300
              group-hover:scale-105
              group-hover:shadow-[0_15px_40px_rgba(11,61,104,0.8)]
            "
            >
              {/* Arrow */}
              <svg
                className="w-14 h-14 text-white rotate-[315deg]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.8"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M13 6l6 6-6 6"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

/* ================= CARD COMPONENT ================= */

function ServiceCard({ icon: Icon, title }) {
  return (
    <div
      className="
        group h-[250px] rounded-xl p-5
        bg-gradient-to-b from-[#1E6FB7] to-[#0B3D68]
        text-white shadow-lg
        hover:scale-[1.03] transition-transform
        font-light
        cursor-pointer
      "
    >
      <div className="w-[90%] h-[95%] mx-auto flex flex-col justify-evenly">
        {/* ICON CONTAINER */}
        <div
          className="
            relative w-20 h-20 rounded-2xl
            backdrop-blur-xl
          bg-white/10
            border border-white/50
            flex items-center justify-center
            hover:scale-[1.03] transition-transform
            transition-all duration-300
            
          "
        >
          {/* CSS Animated Border Dot - Perfect for rounded corners */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div className="absolute w-[10px] h-[10px] bg-white rounded-full shadow-[0_0_10px_#ffffff] animate-border-orbit"></div>
          </div>

          {/* ICON */}
          <Icon className="w-12 h-12 text-white relative z-10" />
        </div>

        <p className="text-[25px] font-semibold leading-snug">{title}</p>
      </div>
    </div>
  );
}
