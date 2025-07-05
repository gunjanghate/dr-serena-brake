"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  color: string
}

export default function AnimatedParticles({ intensity = "normal" }: { intensity?: "normal" | "high" }) {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = []
      const particleCount = intensity === "high" ? 80 : 50
      const colors = [
        "from-teal-400/30 to-blue-400/30",
        "from-blue-400/25 to-indigo-400/25",
        "from-teal-300/35 to-cyan-400/35",
        "from-purple-400/20 to-pink-400/20",
        "from-green-400/25 to-teal-400/25",
      ]

      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 6 + 2,
          duration: Math.random() * 15 + 8,
          delay: Math.random() * 5,
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      }
      setParticles(newParticles)
    }

    generateParticles()
  }, [intensity])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full bg-gradient-to-r ${particle.color} blur-sm`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0.4, 0.9, 0.4],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Enhanced floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-10 w-24 h-24 border-2 border-teal-300/40 rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute bottom-32 right-16 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-teal-400/20 rounded-2xl"
        animate={{
          rotate: -360,
          y: [0, -30, 0],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/3 right-1/4 w-16 h-16 border-3 border-blue-300/30 rotate-45"
        animate={{
          rotate: [45, 405],
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Additional enhanced shapes for high intensity */}
      {intensity === "high" && (
        <>
          <motion.div
            className="absolute top-1/4 left-1/3 w-12 h-12 bg-gradient-to-r from-purple-400/25 to-pink-400/25 rounded-full"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.3, 0.7, 0.3],
              rotate: 180,
            }}
            transition={{
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-14 h-14 border-2 border-cyan-300/40 rounded-lg rotate-12"
            animate={{
              rotate: [12, 372],
              y: [0, -25, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 16,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </>
      )}
    </div>
  )
}
