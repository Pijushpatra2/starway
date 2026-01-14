"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* GRID */}
        <motion.div
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 mb-14"
        >
          {/* LOGO */}
          <motion.div variants={fadeUp} className="text-center sm:text-left">
            <div className="inline-block bg-white rounded-xl p-3 mb-5 shadow-md">
              <Image
                src="/images/logo.svg"
                width={180}
                height={45}
                alt="Starway logo"
              />
            </div>

            <p className="text-gray-300 text-sm leading-relaxed max-w-sm mx-auto sm:mx-0">
              Transforming your digital vision into impactful results through
              cutting-edge marketing solutions.
            </p>

            <div className="flex justify-center sm:justify-start gap-4 mt-6">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.15, rotate: 4 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className="w-10 h-10 rounded-full bg-blue-600 hover:bg-orange-500 flex items-center justify-center"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* COMPANY */}
          <motion.div variants={fadeUp}>
            <h3 className="text-lg font-bold mb-5">Company</h3>
            <ul className="space-y-3 text-sm">
              {["Home","Services","Portfolio","Plans","About","Contact","Blog"].map((item) => (
                <li key={item}>
                  <Link href="/" className="text-gray-300 hover:text-orange-400 transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* INDUSTRIES */}
          <motion.div variants={fadeUp}>
            <h3 className="text-lg font-bold mb-5">Industries</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>Automotive</li>
              <li>Edutech</li>
              <li>Healthcare</li>
              <li>Retail / E-Commerce</li>
              <li className="text-orange-400 font-semibold">+ More</li>
            </ul>
          </motion.div>

          {/* CONTACT */}
          <motion.div variants={fadeUp}>
            <h3 className="text-lg font-bold mb-5">Contact</h3>
            <div className="space-y-4 text-sm text-gray-300">
              <a href="mailto:info@starwaywebdigital.com" className="flex gap-3 hover:text-orange-400">
                <Mail className="w-5 h-5 text-orange-400" />
                info@starwaywebdigital.com
              </a>

              <a href="tel:+918240669415" className="flex gap-3 hover:text-orange-400">
                <Phone className="w-5 h-5 text-orange-400" />
                +91 8240669415
              </a>

              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-1" />
                <div>
                  <p className="font-semibold text-white">India – Head Office</p>
                  <p>26E, Golam Jilani Khan Road, Kolkata 700039</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* DIVIDER */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-6 origin-left"
        />

        {/* BOTTOM */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400"
        >
          <p>Starway Web Digital © {new Date().getFullYear()} | All Rights Reserved</p>

          <div className="flex gap-6">
            {["Privacy Policy","Refund Policy","Terms & Conditions"].map((item) => (
              <a key={item} href="#" className="hover:text-orange-400 transition">
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
