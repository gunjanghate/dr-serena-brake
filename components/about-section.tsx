"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Heart, Users, BookOpen, Star, CheckCircle } from "lucide-react"

const achievements = [
  {
    icon: Award,
    title: "Licensed PsyD",
    description: "California Licensed Clinical Psychologist",
    color: "text-amber-600",
    bg: "bg-amber-100",
  },
  {
    icon: Users,
    title: "500+ Sessions",
    description: "Successful therapy sessions completed",
    color: "text-teal-600",
    bg: "bg-teal-100",
  },
  {
    icon: Heart,
    title: "8+ Years",
    description: "Dedicated experience in mental health",
    color: "text-rose-600",
    bg: "bg-rose-100",
  },
  {
    icon: BookOpen,
    title: "Evidence-Based",
    description: "CBT, mindfulness & proven approaches",
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
]

const specialties = [
  "Anxiety & Stress Management",
  "Relationship Counseling",
  "Trauma Recovery",
  "Mindfulness-Based Therapy",
  "Cognitive Behavioral Therapy",
  "Virtual & In-Person Sessions",
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="relative py-24 overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-slate-50 to-teal-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(14,165,233,0.06),transparent_50%)]" />
      </div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-teal-200/20 to-blue-200/20 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-200/15 to-pink-200/15 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-100 to-blue-100 text-teal-800 px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg"
          >
            <Star className="w-4 h-4" />
            <span>About Dr. Blake</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-serif text-slate-800 mb-4 leading-tight">
            Compassionate Care,{" "}
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Proven Results
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Image section with enhanced effects */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Animated background shapes */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-br from-teal-200/30 to-blue-200/30 rounded-3xl"
                animate={{
                  rotate: [0, 2, -2, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute -inset-2 bg-gradient-to-br from-blue-300/20 to-teal-300/20 rounded-2xl"
                animate={{
                  rotate: [0, -1, 1, 0],
                  scale: [1, 1.01, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              {/* Main image container */}
              <div className="relative bg-white rounded-2xl p-2 shadow-2xl">
                <Image
                  src="/images/therapist-headshot.png"
                  alt="Dr. Serena Blake, PsyD"
                  width={500}
                  height={600}
                  className="rounded-xl object-cover w-full shadow-lg"
                />

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-slate-100"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 text-sm">Licensed PsyD</p>
                      <p className="text-xs text-slate-500">California Licensed</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Content section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-3xl font-serif text-slate-800 mb-6 leading-tight"
              >
                Hi, I'm Dr. Serena Blake
              </motion.h3>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="prose prose-lg text-slate-600 leading-relaxed space-y-4 font-sans"
              >
                <p>
                  Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years
                  of experience and over 500 client sessions. She blends evidence-based approaches—like
                  cognitive-behavioral therapy and mindfulness—with compassionate, personalized care.
                </p>

                <p>
                  Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed
                  to creating a safe, supportive space where you can overcome anxiety, strengthen relationships, and
                  heal from trauma.
                </p>
              </motion.div>
            </div>

            {/* Specialties grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h4 className="text-lg font-serif text-slate-800 mb-4">Areas of Expertise</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {specialties.map((specialty, index) => (
                  <motion.div
                    key={specialty}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-white/50"
                  >
                    <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0" />
                    <span className="text-sm text-slate-700 font-medium">{specialty}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Achievement cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/50 group hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className={`w-10 h-10 ${achievement.bg} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200`}
                  >
                    <achievement.icon className={`w-5 h-5 ${achievement.color}`} />
                  </div>
                  <h5 className="font-semibold text-slate-800 text-sm mb-1">{achievement.title}</h5>
                  <p className="text-xs text-slate-600 leading-relaxed">{achievement.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
