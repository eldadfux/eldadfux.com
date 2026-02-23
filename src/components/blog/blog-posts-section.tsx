'use client'

import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { getAllBlogPosts } from '@/lib/blog'

export function BlogPostsSection() {
  const blogPosts = getAllBlogPosts()

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
          Writing
        </motion.p>
        <ul className="space-y-0">
          {blogPosts.map((post, index) => (
            <motion.li
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <a
                href={`/blog/${post.slug}`}
                className="group flex items-baseline gap-6 md:gap-8 py-6 md:py-7 border-b border-[#2a2825] hover:border-[#3d3a36] transition-colors"
              >
                <span
                  className="text-[#5a5652] text-sm tabular-nums shrink-0 group-hover:text-[#2dd4bf] transition-colors w-8"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="flex-1 min-w-0">
                  <h3
                    className="text-xl md:text-2xl font-semibold text-[#e6e2db] group-hover:text-[#2dd4bf] transition-colors leading-tight"
                    style={{ fontFamily: 'Fraunces, serif' }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-[#8a8580] text-sm md:text-base mt-1.5 leading-relaxed">
                    {post.description}
                  </p>
                </div>
                <span
                  className="text-[11px] uppercase tracking-[0.2em] text-[#5a5652] shrink-0 group-hover:text-[#8a8580] transition-colors"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {post.date}
                </span>
                <ArrowUpRight className="w-5 h-5 text-[#5a5652] group-hover:text-[#2dd4bf] shrink-0 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
