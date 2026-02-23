'use client'

import { motion } from 'motion/react'
import { ExternalLink } from 'lucide-react'

const companies = [
  {
    name: 'Appwrite',
    description:
      'Open-source backend-as-a-service platform for secure web, mobile, and Flutter apps.',
    url: 'https://appwrite.io',
    role: 'Founder & CEO',
  },
  {
    name: 'Imagine.dev',
    description:
      'AI-powered platform that turns ideas into production-ready applications.',
    url: 'https://imagine.dev',
    role: 'Founder & CEO',
  },
]

export function CompaniesSection() {
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
          Companies
        </motion.p>
        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {companies.map((company, index) => (
            <motion.a
              key={company.name}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group block p-8 md:p-10 rounded-2xl bg-[#161412] border border-[#2a2825] hover:border-[#3d3a36] hover:bg-[#1c1a17] transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3
                  className="text-3xl md:text-4xl font-semibold text-[#e6e2db] group-hover:text-[#2dd4bf] transition-colors tracking-tight"
                  style={{ fontFamily: 'Fraunces, serif' }}
                >
                  {company.name}
                </h3>
                <ExternalLink className="w-5 h-5 text-[#5a5652] group-hover:text-[#2dd4bf] transition-colors flex-shrink-0 mt-1" />
              </div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#8a8580] font-medium mb-3">
                {company.role}
              </p>
              <p className="text-[#a8a39e] leading-relaxed text-base md:text-lg">
                {company.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
