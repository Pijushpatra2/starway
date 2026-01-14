"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"



export default function TechnologyStackGrid() {
    const technologies = {
  frontend: {
    title: "Frontend Technologies",
    description: "Modern frameworks for fast, responsive user interfaces",
    items: [
      { name: "React.js", image: "/images/services/techStackLogo/react.png" },
      { name: "Next.js", image: "/images/services/techStackLogo/nextjs.png" },
      { name: "TypeScript", image: "/images/services/techStackLogo/typescript.png" },
      { name: "Tailwind CSS", image: "/images/services/techStackLogo/tailwind.png" },
      { name: "Framer Motion", image: "/images/services/techStackLogo/framer.png" },
      { name: "Vue.js", image: "/images/services/techStackLogo/vue.png" },
    ],
  },
  backend: {
    title: "Backend & APIs",
    description: "Scalable backend systems and secure APIs",
    items: [
      { name: "Node.js", image: "/images/services/techStackLogo/nodejs.png" },
      { name: "Express.js", image: "/images/services/techStackLogo/express.png" },
      { name: "Python", image: "/images/services/techStackLogo/python.png" },
      { name: "REST APIs", image: "/images/services/techStackLogo/json.png" },
      { name: "Laravel", image: "/images/services/techStackLogo/laravel.png" },
      { name: "PHP", image: "/images/services/techStackLogo/php.png" },
    ],
  },
  mobile: {
    title: "Mobile Development",
    description: "Cross-platform and native mobile applications",
    items: [
      { name: "React Native", image: "/images/services/techStackLogo/reactNative.png" },
      { name: "Flutter", image: "/images/services/techStackLogo/fluter.png" },
      { name: "Swift", image: "/images/services/techStackLogo/swift.png" },
      { name: "Kotlin", image: "/images/services/techStackLogo/kotlin.png" },
      { name: "Firebase", image: "/images/services/techStackLogo/firebase.png" },
      { name: "Expo", image: "/images/services/techStackLogo/expo.png" },
    ],
  },
  cms: {
    title: "CMS & Content Management",
    description: "Flexible CMS solutions for easy content control",
    items: [
      { name: "Custom CMS", image: "/tech/cms.png" },
      { name: "Headless CMS", image: "/tech/headless.png" },
      { name: "Strapi", image: "/tech/strapi.png" },
      { name: "WordPress", image: "/tech/wordpress.png" },
      { name: "Sanity", image: "/tech/sanity.png" },
      { name: "Contentful", image: "/tech/contentful.png" },
    ],
  },
  devops: {
    title: "DevOps & Hosting",
    description: "Reliable infrastructure and cloud deployment",
    items: [
      { name: "AWS", image: "/tech/aws.png" },
      { name: "Vercel", image: "/tech/vercel.png" },
      { name: "Docker", image: "/tech/docker.png" },
      { name: "CI/CD", image: "/tech/cicd.png" },
      { name: "DigitalOcean", image: "/tech/digitalocean.png" },
      { name: "Firebase Hosting", image: "/tech/firebase.png" },
    ],
  },
}

  const [activeTech, setActiveTech] = useState("frontend")

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technology That Powers Scalable Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Modern, reliable technologies used to build fast, secure, and scalable digital solutions.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {Object.keys(technologies).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTech(key)}
              className={`px-6 py-3 rounded-xl font-medium transition-all
                ${
                  activeTech === key
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          key={activeTech}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {technologies[activeTech].items.map((tech, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl p-6 border border-gray-200
                         hover:shadow-xl hover:border-blue-300 transition-all text-center"
            >
              <div className="relative w-14 h-14 mx-auto mb-4">
                <Image
                  src={tech.image}
                  alt={tech.name}
                  fill
                  className="object-contain"
                />
              </div>

              <h4 className="font-semibold text-gray-900 text-sm">
                {tech.name}
              </h4>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
