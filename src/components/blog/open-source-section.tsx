'use client'

import { motion } from 'motion/react'

export function OpenSourceSection() {
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
          Open source
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
            A lot of what I care about happens in open source - projects built with others for developers. I get to work on{' '}
            <a
              href="https://github.com/appwrite/appwrite"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2dd4bf] hover:underline underline-offset-2"
            >
              Appwrite
            </a>
            , and on efforts under{' '}
            <a
              href="https://github.com/utopia-php"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2dd4bf] hover:underline underline-offset-2"
            >
              Utopia PHP
            </a>
            ,{' '}
            <a
              href="https://github.com/open-runtimes/open-runtimes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2dd4bf] hover:underline underline-offset-2"
            >
              Open Runtimes
            </a>
            , and{' '}
            <a
              href="https://github.com/refetch-io/refetch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2dd4bf] hover:underline underline-offset-2"
            >
              Refetch
            </a>
            . If you&apos;re curious, it&apos;s all on{' '}
            <a
              href="https://github.com/eldadfux"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2dd4bf] hover:underline underline-offset-2"
            >
              GitHub
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  )
}
