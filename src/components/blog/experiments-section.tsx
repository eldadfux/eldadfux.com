'use client'

import { motion } from 'motion/react'

const experiments = [
  {
    name: 'Refetech.io',
    description:
      'A Hacker News alternative built with modern web technologies.',
    url: 'https://refetech.io',
    tags: ['News Aggregator', 'Community'],
  },
  {
    name: 'Cortext',
    description: 'AI-powered content management system for the modern web.',
    url: '#',
    tags: ['AI', 'CMS'],
  },
]

export function ExperimentsSection() {
  return (
    <section className="py-24 border-t border-black/10">
      <div className="mb-16 space-y-3">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-sm uppercase tracking-[0.3em] font-medium text-black/40"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          Experiments
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-base text-black/50 font-light max-w-2xl"
        >
          Quick vibe-coding experiments and side projects built for fun and
          learning.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {experiments.map((experiment, index) => {
          return (
            <motion.a
              key={experiment.name}
              href={experiment.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group block p-8 border border-black/10 hover:border-[#0066FF]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#0066FF]/5"
            >
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3
                    className="text-2xl md:text-3xl font-bold group-hover:text-[#0066FF] transition-colors duration-300"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    {experiment.name}
                  </h3>

                  <p className="text-base md:text-lg text-black/60 leading-relaxed font-light">
                    {experiment.description}
                  </p>

                  <div className="flex gap-2 pt-2">
                    {experiment.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs uppercase tracking-[0.15em] px-3 py-1 bg-black/5 text-black/40 font-medium"
                        style={{ fontFamily: 'JetBrains Mono, monospace' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          )
        })}
      </div>
    </section>
  )
}
