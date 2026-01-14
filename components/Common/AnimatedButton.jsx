// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";

// export default function AnimatedButton({
//   href = "/",
//   label = "Click Me",
//   className = "",
// }) {
//   return (
//     <motion.div
//       whileHover="hover"
//       whileTap="tap"
//       initial="initial"
//       className="inline-block"
//     >
//       <Link
//         href={href}
//         className={`
//           group relative inline-flex items-center gap-4
//           bg-white text-[#2C63C9]
//           font-semibold px-6 py-4 rounded-full
//           shadow-lg overflow-hidden
//           ${className}
//         `}
//       >
//         {/* Background glow effect */}
//         <motion.div
//           className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2C63C9]/5 to-transparent"
//           variants={{
//             initial: { x: "-100%" },
//             hover: { x: "100%" }
//           }}
//           transition={{ duration: 0.6 }}
//         />
        
//         {/* Label with subtle shift */}
//         <motion.span
//           variants={{
//             initial: { x: 0 },
//             hover: { x: -2 }
//           }}
//           transition={{ duration: 0.2 }}
//           className="relative z-10"
//         >
//           {label}
//         </motion.span>

//         {/* Arrow container */}
//         <motion.span
//           className="
//             relative flex items-center justify-center
//             w-9 h-9 rounded-full
//             bg-[#2C63C9]/10
//             group-hover:bg-[#2C63C9]
//             transition-all duration-300
//           "
//         >
//           {/* Outer ring animation */}
//           <motion.div
//             className="absolute inset-0 rounded-full border-2 border-[#2C63C9]"
//             variants={{
//               initial: { scale: 1, opacity: 0 },
//               hover: { scale: 1.3, opacity: 0 }
//             }}
//             transition={{ duration: 0.4 }}
//           />
          
//           {/* Glow effect */}
//           <motion.div
//             className="absolute inset-0 rounded-full"
//             variants={{
//               initial: { boxShadow: "0 0 0 0 rgba(44, 99, 201, 0)" },
//               hover: { boxShadow: "0 0 0 10px rgba(44, 99, 201, 0.3)" }
//             }}
//             transition={{ duration: 0.4 }}
//           />
          
//           {/* Arrow animation */}
//           <motion.div
//             className="relative"
//             variants={{
//               initial: { rotate: 0 },
//               hover: { 
//                 rotate: 45,
//                 scale: 1.1
//               }
//             }}
//             transition={{
//               type: "spring",
//               stiffness: 400,
//               damping: 10
//             }}
//           >
//             <ArrowUpRight 
//               className="w-5 h-5 text-[#2C63C9] group-hover:text-white transition-colors duration-200" 
//             />
//           </motion.div>
//         </motion.span>
//       </Link>
//     </motion.div>
//   );
// }





"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function AnimatedButton({
  href = "/",
  label = "Click Me",
  className = "",
  glowIntensity = "medium", // low, medium, high
}) {
  const [isHovered, setIsHovered] = useState(false);

  const glowConfigs = {
    low: {
      buttonGlow: "group-hover:shadow-[0_0_25px_rgba(44,99,201,0.4)]",
      ringGlow: "0 0 15px rgba(44, 99, 201, 0.5)",
      pulseScale: 1.2
    },
    medium: {
      buttonGlow: "group-hover:shadow-[0_0_30px_rgba(44,99,201,0.5)]",
      ringGlow: "0 0 20px rgba(44, 99, 201, 0.6)",
      pulseScale: 1.3
    },
    high: {
      buttonGlow: "group-hover:shadow-[0_0_40px_rgba(44,99,201,0.6)]",
      ringGlow: "0 0 25px rgba(44, 99, 201, 0.7)",
      pulseScale: 1.4
    }
  };

  const glow = glowConfigs[glowIntensity] || glowConfigs.medium;

  return (
    <motion.div
      whileHover="hover"
      whileTap="tap"
      initial="initial"
      className="inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={href}
        className={`
          group relative inline-flex items-center gap-4
          bg-white text-[#2C63C9]
          font-semibold px-6 py-4 rounded-full
          shadow-lg overflow-hidden
          transition-all duration-300
          ${glow.buttonGlow}
          hover:scale-[1.02]
          ${className}
        `}
      >
        {/* Enhanced background glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2C63C9]/10 to-transparent"
          variants={{
            initial: { x: "-100%" },
            hover: { x: "100%" }
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />

        {/* Subtle background pulse */}
        <motion.div
          className="absolute inset-0 bg-[#2C63C9]/5 rounded-full"
          animate={{
            scale: isHovered ? [1, glow.pulseScale, 1] : 1,
            opacity: isHovered ? [0.3, 0.1, 0.3] : 0
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop"
          }}
        />

        {/* Label with subtle shift */}
        <motion.span
          variants={{
            initial: { x: 0 },
            hover: { x: -2 }
          }}
          transition={{ duration: 0.2 }}
          className="relative z-10"
        >
          {label}
        </motion.span>

        {/* Arrow container with enhanced glow effects */}
        <motion.span
          className="
            relative flex items-center justify-center
            w-9 h-9 rounded-full
            bg-[#2C63C9]/10
            group-hover:bg-[#2C63C9]
            transition-all duration-300
            overflow-visible
          "
        >
          {/* Multi-layer glow rings */}
          <motion.div
            className="absolute inset-0 rounded-full border border-[#2C63C9]/30"
            variants={{
              initial: { scale: 1, opacity: 0 },
              hover: { scale: 1.8, opacity: 0 }
            }}
            transition={{ duration: 0.5 }}
          />
          
          <motion.div
            className="absolute inset-0 rounded-full border border-[#2C63C9]/20"
            variants={{
              initial: { scale: 1, opacity: 0 },
              hover: { scale: 2.2, opacity: 0 }
            }}
            transition={{ duration: 0.6, delay: 0.1 }}
          />

          {/* Main glow effect with shadow spread */}
          <motion.div
            className="absolute inset-0 rounded-full"
            variants={{
              initial: { 
                boxShadow: "0 0 0 0 rgba(44, 99, 201, 0)",
                opacity: 0 
              },
              hover: { 
                boxShadow: glow.ringGlow,
                opacity: 1 
              }
            }}
            transition={{ duration: 0.4 }}
          />

          {/* Inner glow pulse */}
          <motion.div
            className="absolute inset-0 rounded-full bg-[#2C63C9]/20"
            animate={{
              scale: isHovered ? [1, 1.1, 1] : 1,
              opacity: isHovered ? [0.4, 0.2, 0.4] : 0
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />

          {/* Sparkle particles */}
          {isHovered && (
            <>
              <motion.div
                className="absolute w-1 h-1 bg-white rounded-full"
                initial={{ x: -4, y: -4, scale: 0, opacity: 0 }}
                animate={{ 
                  x: [-4, -8, -4], 
                  y: [-4, -8, -4],
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
              <motion.div
                className="absolute w-1 h-1 bg-white rounded-full"
                initial={{ x: 4, y: -4, scale: 0, opacity: 0 }}
                animate={{ 
                  x: [4, 8, 4], 
                  y: [-4, -8, -4],
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{ duration: 0.8, delay: 0.2, repeat: Infinity }}
              />
            </>
          )}

          {/* Arrow animation with glow trail */}
          <motion.div
            className="relative"
            variants={{
              initial: { 
                rotate: 0,
                scale: 1 
              },
              hover: { 
                rotate: 45,
                scale: 1.15
              }
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10
            }}
          >
            {/* Arrow icon with inner glow */}
            <div className="relative">
              <ArrowUpRight 
                className="w-5 h-5 text-[#2C63C9] group-hover:text-white transition-colors duration-200 relative z-10" 
              />
              
              {/* Glow behind arrow */}
              <motion.div
                className="absolute inset-0 bg-white/30 blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 0.5 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Continuous rotation effect on circle */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-transparent border-t-white/20 border-r-white/10"
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
        </motion.span>

        {/* Additional outer glow for the entire button */}
        <motion.div
          className="absolute -inset-2 rounded-full bg-[#2C63C9]/10 blur-xl -z-10"
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.8
          }}
          transition={{ duration: 0.3 }}
        />
      </Link>

      {/* Tap animation variants */}
      <style jsx>{`
        .tap {
          scale: 0.95;
        }
      `}</style>
    </motion.div>
  );
}