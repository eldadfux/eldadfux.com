'use client'

import { motion } from 'motion/react'

export function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-[100vh] flex flex-col justify-center px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-5xl mx-auto w-full">
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(3.5rem,12vw,9rem)] font-bold leading-[0.88] tracking-[-0.03em] text-[#e6e2db] mb-12"
          style={{ fontFamily: 'Fraunces, serif' }}
        >
          Eldad Fux
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <p className="text-xl md:text-2xl font-light text-[#8a8580] leading-relaxed">
            Founder & CEO @{' '}
            <a
              href="https://appwrite.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2dd4bf] hover:text-[#5eead4] transition-colors font-medium"
            >
              Appwrite
            </a>{' '}
            and{' '}
            <a
              href="https://imagine.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2dd4bf] hover:text-[#5eead4] transition-colors font-medium"
            >
              Imagine.dev
            </a>
          </p>
          <p className="text-lg md:text-xl font-light text-[#8a8580] leading-relaxed">
            Thoughts about open source, developer tooling, product design, and
            vibe-coding.
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}
