'use client'

import { motion } from 'motion/react'

export function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-[70vh] flex flex-col justify-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="text-[clamp(3rem,8vw,7rem)] font-bold leading-[0.9] tracking-tight mb-8"
        style={{ fontFamily: 'JetBrains Mono, monospace' }}
      >
        Eldad Fux
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-2xl space-y-6"
      >
        <p className="text-xl md:text-2xl font-light text-black/60 leading-relaxed">
          Founder & CEO @{' '}
          <a
            href="https://appwrite.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black font-medium hover:opacity-60 transition-opacity duration-300 underline decoration-black/20"
          >
            Appwrite
          </a>{' '}
          and{' '}
          <a
            href="https://imagine.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black font-medium hover:opacity-60 transition-opacity duration-300 underline decoration-black/20"
          >
            Imagine.dev
          </a>
        </p>

        <p className="text-lg md:text-xl font-light text-black/50 leading-relaxed">
          Thoughts about open source, developer tooling, product design, and
          vibe-coding.
        </p>
      </motion.div>
    </motion.section>
  )
}
