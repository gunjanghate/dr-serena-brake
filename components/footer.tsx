"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Heart, Shield } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/20 py-20 px-6">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border border-teal-300 rounded-full" />
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-blue-200 rounded-lg rotate-45" />
        <div className="absolute top-1/2 left-1/4 w-12 h-12 border-2 border-slate-300 rotate-12" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-medium text-lg">SB</span>
              </div>
              <div>
                <h3 className="text-xl font-medium text-slate-800">Dr. Serena Blake, PsyD</h3>
                <p className="text-slate-500 text-sm">Licensed Clinical Psychologist</p>
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed mb-6 max-w-md">
              Providing compassionate, evidence-based therapy to help you overcome challenges and build resilience.
              Creating a safe space for healing and growth in Los Angeles and virtually.
            </p>

            {/* Specialties */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center space-x-2 bg-white/60 px-3 py-2 rounded-full">
                <Heart className="w-4 h-4 text-teal-500" />
                <span className="text-sm text-slate-600">Anxiety & Stress</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/60 px-3 py-2 rounded-full">
                <Shield className="w-4 h-4 text-blue-500" />
                <span className="text-sm text-slate-600">Trauma Recovery</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-medium text-slate-800 mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-teal-600" />
                </div>
                <div>
                  <p className="font-medium text-slate-800">(323) 555-0192</p>
                  <p className="text-sm text-slate-500">Call or text for appointments</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-slate-800">serena@blakepsychology.com</p>
                  <p className="text-sm text-slate-500">Professional inquiries</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-indigo-600" />
                </div>
                <div>
                  <p className="font-medium text-slate-800">1287 Maplewood Drive</p>
                  <p className="text-sm text-slate-500">Los Angeles, CA 90026</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Office Hours & Fees */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-medium text-slate-800 mb-6">Practice Details</h4>

            {/* Office Hours */}
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-3">
                <Clock className="w-4 h-4 text-teal-500" />
                <span className="font-medium text-slate-700">Office Hours</span>
              </div>
              <div className="space-y-2 text-sm text-slate-600 ml-6">
                <div className="flex justify-between">
                  <span>In-Person:</span>
                  <span>Tue & Thu</span>
                </div>
                <div className="text-xs text-slate-500 ml-auto">10 AM – 6 PM</div>
                <div className="flex justify-between">
                  <span>Virtual:</span>
                  <span>Mon, Wed, Fri</span>
                </div>
                <div className="text-xs text-slate-500 ml-auto">1 PM – 5 PM</div>
              </div>
            </div>

            {/* Session Fees */}
            <div>
              <h5 className="font-medium text-slate-700 mb-3">Session Fees</h5>
              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex justify-between">
                  <span>Individual:</span>
                  <span className="font-medium">$200</span>
                </div>
                <div className="flex justify-between">
                  <span>Couples:</span>
                  <span className="font-medium">$240</span>
                </div>
                <p className="text-xs text-slate-500 mt-2">Superbills provided for insurance reimbursement</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-slate-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-slate-500 text-sm">
                © {new Date().getFullYear()} Dr. Serena Blake, PsyD. All rights reserved.
              </p>
              <p className="text-slate-400 text-xs mt-1">
                Licensed Clinical Psychologist • California License #PSY12345
              </p>
            </div>

            <div className="flex items-center space-x-6 text-sm text-slate-500">
              <a href="#" className="hover:text-teal-600 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-teal-600 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="hover:text-teal-600 transition-colors duration-200">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
