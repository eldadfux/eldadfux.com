'use client'

import { motion } from 'motion/react'
import { ExternalLink } from 'lucide-react'

const companies = [
  {
    name: 'Appwrite',
    description:
      'Open-source backend-as-a-service platform for building secure web, mobile, and Flutter applications.',
    url: 'https://appwrite.io',
    role: 'Founder & CEO',
  },
  {
    name: 'Imagine.dev',
    description:
      'AI-powered development platform that transforms ideas into production-ready applications.',
    url: 'https://imagine.dev',
    role: 'Founder & CEO',
  },
]

export function CompaniesSection() {
  return (
    <section className="py-24 border-t border-black/10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-sm uppercase tracking-[0.3em] font-medium mb-16 text-black/40"
        style={{ fontFamily: 'JetBrains Mono, monospace' }}
      >
        Companies
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12">
        {companies.map((company, index) => (
          <motion.a
            key={company.name}
            href={company.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group block"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <h3
                  className="text-3xl md:text-4xl font-bold group-hover:opacity-60 transition-opacity duration-300"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {company.name}
                </h3>
                <ExternalLink className="w-5 h-5 text-black/30 group-hover:text-black/60 transition-colors duration-300 mt-2" />
              </div>

              <p className="text-xs uppercase tracking-[0.2em] text-black/40 font-medium">
                {company.role}
              </p>

              <p className="text-base md:text-lg text-black/60 leading-relaxed font-light">
                {company.description}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
