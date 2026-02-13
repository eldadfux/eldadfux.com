'use client'

import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { getAllBlogPosts } from '@/lib/blog'

export function BlogPostsSection() {
  const blogPosts = getAllBlogPosts()

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
        Thoughts about...
      </motion.h2>

      <div className="space-y-8">
        {blogPosts.map((post, index) => (
          <motion.a
            key={post.slug}
            href={`/blog/${post.slug}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group block py-6 border-b border-black/5 hover:border-black/20 transition-colors duration-300"
          >
            <div className="flex items-start justify-between gap-8">
              <div className="flex-1 space-y-3">
                <div className="flex items-baseline gap-4">
                  <h3 className="text-2xl md:text-3xl font-medium group-hover:opacity-60 transition-opacity duration-300">
                    {post.title}
                  </h3>
                  <span
                    className="text-xs uppercase tracking-[0.2em] text-black/30 font-medium whitespace-nowrap"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    {post.date}
                  </span>
                </div>
                <p className="text-base md:text-lg text-black/50 font-light leading-relaxed">
                  {post.description}
                </p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-black/20 group-hover:text-black/60 transition-colors duration-300 flex-shrink-0 mt-2" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
