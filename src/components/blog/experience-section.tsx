'use client'

import { motion } from 'motion/react'

export function ExperienceSection() {
  return (
    <section className="py-32 md:py-40 px-6 md:px-12 lg:px-20 border-t border-[#2a2825]">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-[11px] uppercase tracking-[0.35em] text-[#8a8580] font-medium mb-16"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          Experience
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <p
            className="text-lg md:text-xl text-[#e6e2db] leading-relaxed"
            style={{ fontFamily: 'Fraunces, serif' }}
          >
            These days, I build{' '}
            <a
              href="https://appwrite.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2dd4bf] hover:underline underline-offset-2"
            >
              Appwrite
            </a>
            {' '}and{' '}
            <a
              href="https://imagine.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2dd4bf] hover:underline underline-offset-2"
            >
              Imagine
            </a>
            .
          </p>
          <p
            className="text-lg md:text-xl text-[#e6e2db] leading-relaxed"
            style={{ fontFamily: 'Fraunces, serif' }}
          >
            Before that, I co-founded{' '}
            <a
              href="https://careerpage.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2dd4bf] hover:underline underline-offset-2"
            >
              Careerpage
            </a>
            {' '}as CTO. Earlier in my career, I joined{' '}
            <a
              href="https://walla.co.il"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2dd4bf] hover:underline underline-offset-2"
            >
              Walla!
            </a>
            {' '}as a junior developer and, over time, grew into the CTO role. Same company, different chapters.
          </p>
          <p
            className="text-lg md:text-xl text-[#e6e2db] leading-relaxed"
            style={{ fontFamily: 'Fraunces, serif' }}
          >
            I&apos;ve been a Manchester United supporter since 1998. Which, in a way, means I grew up believing that nothing is out of reach. It&apos;s a useful bias to carry into tech, where the ideas that eventually define a category usually sound unrealistic when you first say them out loud.
          </p>
          <p
            className="text-lg md:text-xl text-[#e6e2db] leading-relaxed"
            style={{ fontFamily: 'Fraunces, serif' }}
          >
            The thread through all of it is simple: start small, build consistently, and give things enough time to become real.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
