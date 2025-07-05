"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react"

const faqs = [
  {
    question: "Do you accept insurance?",
    answer:
      "No, but a superbill is provided for self-submission to your insurance provider for potential reimbursement.",
  },
  {
    question: "Are online sessions available?",
    answer: "Yes—all virtual sessions are conducted via Zoom for your convenience and comfort.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "24-hour notice is required for cancellations to avoid being charged for the session.",
  },
  {
    question: "What are your session fees?",
    answer: "Individual sessions are $200 and couples sessions are $240. Payment is due at the time of service.",
  },
  {
    question: "How long are therapy sessions?",
    answer: "Standard therapy sessions are 50 minutes long, allowing time for meaningful therapeutic work.",
  },
]

export default function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" ref={ref} className="relative py-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(14,165,233,0.08),transparent_50%)]" />
      </div>

      {/* Floating question marks */}
      <motion.div
        className="absolute top-20 left-10 text-teal-200 text-6xl opacity-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        ?
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-10 text-blue-200 text-4xl opacity-20"
        animate={{
          y: [0, -15, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        ?
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <HelpCircle className="w-4 h-4" />
            <span>Frequently Asked Questions</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4">
            Questions? We've Got{" "}
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Answers</span>
          </h2>
          <p className="text-xl text-slate-600">Common questions about therapy and my practice</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Animated border for active item */}
              {openIndex === index && (
                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-500 rounded-xl opacity-50 animate-pulse" />
              )}

              <div className="relative bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/50 overflow-hidden hover:shadow-xl transition-all duration-300">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-50/50 transition-colors duration-200 group"
                >
                  <div className="flex items-center space-x-3">
                    <motion.div
                      animate={{
                        rotate: openIndex === index ? 180 : 0,
                        scale: openIndex === index ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.2 }}
                      className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center"
                    >
                      <Sparkles className="w-4 h-4 text-teal-600" />
                    </motion.div>
                    <span className="text-lg font-medium text-slate-800 pr-4">{faq.question}</span>
                  </div>

                  <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="w-5 h-5 text-slate-500 group-hover:text-teal-600 transition-colors duration-200" />
                  </motion.div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <motion.div
                    initial={{ y: -10 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="px-6 pb-5 ml-11"
                  >
                    <div className="text-slate-600 leading-relaxed bg-slate-50/50 p-4 rounded-lg">{faq.answer}</div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
