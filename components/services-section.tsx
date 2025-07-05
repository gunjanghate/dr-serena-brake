"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Heart, Users, Shield } from "lucide-react"

const services = [
  {
    icon: Heart,
    title: "Anxiety & Stress Management",
    description:
      "Learn evidence-based techniques to manage anxiety, reduce stress, and develop healthy coping strategies for life's challenges.",
    gradient: "from-red-400/20 to-pink-400/20",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
  },
  {
    icon: Users,
    title: "Relationship Counseling",
    description:
      "Strengthen your relationships through improved communication, conflict resolution, and deeper emotional connection.",
    gradient: "from-blue-400/20 to-cyan-400/20",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Shield,
    title: "Trauma Recovery",
    description:
      "Heal from past trauma using compassionate, evidence-based approaches in a safe and supportive environment.",
    gradient: "from-green-400/20 to-teal-400/20",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Services
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4">How I Can Help You</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Specialized therapy services tailored to your unique needs and goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              {/* Slower animated border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-500 rounded-2xl animate-pulse"
                  style={{ animationDuration: "2s" }}
                />
              </div>

              {/* Card content */}
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.2, ease: "easeInOut" } }}
                className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100"
              >
                {/* Grid background overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className={`w-16 h-16 ${service.iconBg} rounded-full flex items-center justify-center mb-6`}
                  >
                    <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                  </motion.div>

                  <h3 className="text-xl font-semibold text-slate-800 mb-4 group-hover:text-slate-900 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Floating elements */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
