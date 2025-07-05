"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Star, Users, Award, Clock } from "lucide-react"
import AnimatedParticles from "./animated-particles"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-40 pb-32">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-teal-50/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(14,165,233,0.1),transparent_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(59,130,246,0.05),transparent_50%)]" />
      </div>

      {/* Animated particles */}
      <AnimatedParticles />

      <div className="relative z-10 text-center px-4  mx-auto flex flex-col justify-center items-center">
        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center flex-wrap gap-4 mb-8 text-sm font-serif w-[36vw] bg-transparent md:bg-gray-100 md:border-neutral-300 drop-shadow-md md:rounded-full md:border py-1 text-black"
        >
          <div className="flex items-center space-x-2 ">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="font-medium">Licensed PsyD</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-teal-500" />
            <span className="font-medium">500+ Sessions</span>
          </div>
          <div className="flex items-center space-x-2">
            <Award className="w-4 h-4 text-blue-500" />
            <span className="font-medium">8+ Years Experience</span>
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif text-slate-900 mb-6 leading-tight tracking-tight"
        >
          Helping You{" "}
          <span className="bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Heal & Thrive
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-600 mb-4 font-light max-w-4xl mx-auto leading-relaxed font-serif"
        >
          Dr. Serena Blake, PsyD – Evidence-Based Therapy With Heart
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg text-slate-500 mb-12 max-w-3xl mx-auto font-sans"
        >
          Transform your mental health with personalized, compassionate care. Available both in-person in Los Angeles
          and virtually via secure video sessions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
        >
          <Button
            size="lg"
            className="group relative overflow-hidden bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-4 text-lg rounded-2xl shadow-xl transition-all duration-300 font-sans"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-teal-700 via-blue-700 to-indigo-700 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            <span className="relative z-10 flex items-center">
              Book a Free Consult
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </span>
          </Button>

          <Button
            variant="ghost"
            size="lg"
            className="group relative overflow-hidden text-slate-700 px-8 py-4 text-lg rounded-2xl transition-all duration-300 font-sans"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-teal-50 to-blue-50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
            <span className="relative z-10 flex items-center group-hover:text-teal-700">
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              Watch Introduction
            </span>
          </Button>
        </motion.div>

        {/* Quick stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:scale-105 hover:-translate-y-1 transition-all duration-500">
            <div className="flex items-center justify-center w-12 h-12 bg-teal-100 rounded-xl mb-4 mx-auto hover:scale-110 transition-all duration-500">
              <Clock className="w-6 h-6 text-teal-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2 font-serif">Flexible Scheduling</h3>
            <p className="text-slate-600 text-sm font-sans">
              In-person & virtual sessions available to fit your lifestyle
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:scale-105 hover:-translate-y-1 transition-all duration-500">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4 mx-auto hover:scale-110 transition-all duration-500">
              <Award className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2 font-serif">Evidence-Based</h3>
            <p className="text-slate-600 text-sm font-sans">CBT, mindfulness, and proven therapeutic approaches</p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:scale-105 hover:-translate-y-1 transition-all duration-500">
            <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-xl mb-4 mx-auto hover:scale-110 transition-all duration-500">
              <Users className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2 font-serif">Personalized Care</h3>
            <p className="text-slate-600 text-sm font-sans">Tailored treatment plans for your unique needs and goals</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="w-1 h-3 bg-slate-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
