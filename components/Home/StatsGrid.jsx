"use client";

import { motion } from "framer-motion";
import {
  Star,
  Handshake,
  Users,
  ShoppingBag,
  DollarSign,
} from "lucide-react";

const stats = [
  {
    icon: Star,
    value: "4.8",
    label: "High ratings from satisfied clients.",
    stars: true,
  },
  {
    icon: Handshake,
    value: "98%",
    label: "Trusted worldwide by 98% happy clients.",
  },
  {
    icon: Users,
    value: "7+",
    label: "Years of industry experience",
  },
  {
    icon: ShoppingBag,
    value: "150+",
    label: "Brands grown successfully",
  },
  {
    icon: DollarSign,
    value: "15M+",
    label: "$15M+ client revenue generated",
  },
];

export default function StatsSection({
  iconSize = "w-7 h-7",
  valueSize = "text-2xl",
  cardBg = "bg-gray-200",
  borderColor = "border-gray-400",
  textColor = "text-black",
  iconColor = "text-black",
}) {
  return (
    <section className="w-full py-20 bg-primary">
      <div className="max-w-[80%] mx-auto px-6">

        {/* 🔹 Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Proven Results That Speak for Themselves
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-white">
            Our experience, performance, and client satisfaction define the
            success we deliver consistently.
          </p>
        </motion.div>

        {/* 🔹 Stats Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className={`border ${borderColor} p-4 flex justify-center`}
              >
                {/* INNER CARD */}
                <div
                  className={`
                    ${cardBg}
                    w-full aspect-square
                    flex flex-col items-center justify-center
                    text-center px-4
                  `}
                >
                  {/* Icon / Stars */}
                  {item.stars ? (
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < 4 ? "fill-black" : "stroke-black"
                          }`}
                        />
                      ))}
                    </div>
                  ) : (
                    <Icon
                      className={`${iconSize} mb-3 ${iconColor}`}
                    />
                  )}

                  {/* Value */}
                  <h3 className={`${valueSize} font-bold ${textColor}`}>
                    {item.value}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs text-gray-700 leading-snug">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
