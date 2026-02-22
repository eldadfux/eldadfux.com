'use client'

import { Link } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { ArrowLeft } from 'lucide-react'
import { parseMarkdownContent } from '@/lib/blog'
import type { BlogPost } from '@/lib/blog'

interface BlogPostPageProps {
  post: BlogPost
}

export function BlogPostPage({ post }: BlogPostPageProps) {
  const contentElements = parseMarkdownContent(post.content)

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* Minimized Hero */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="border-b border-black/10 bg-white/50 backdrop-blur-sm"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-2">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="text-base md:text-lg font-bold hover:opacity-60 transition-opacity duration-300"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              Eldad Fux
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs text-black/40 hover:text-black/60 transition-colors duration-300 group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300" />
              <span
                className="uppercase tracking-[0.2em] font-medium"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                Back
              </span>
            </Link>
          </div>
        </div>
      </motion.div>

      <div className="max-w-3xl mx-auto px-6 md:px-12 py-16">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 pb-12 border-b border-black/10"
        >
          <div className="space-y-6">
            <div className="space-y-4">
              <p
                className="text-xs uppercase tracking-[0.2em] text-black/40 font-medium"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                {post.date}
              </p>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                {post.title}
              </h1>
            </div>
            <p className="text-xl md:text-2xl font-light text-black/60 leading-relaxed">
              {post.description}
            </p>
          </div>
        </motion.header>

        {/* Article Content */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="prose prose-lg max-w-none"
        >
          <div className="space-y-8 text-black/70 leading-relaxed">
            {contentElements.map((element, index) => {
              if (element.type === 'h2') {
                return (
                  <h2
                    key={index}
                    className="text-2xl md:text-3xl font-bold mt-12 mb-6"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    {element.content}
                  </h2>
                )
              }

              if (element.type === 'hr') {
                return (
                  <div
                    key={index}
                    className="text-lg md:text-xl font-light text-black/60 mt-12 pt-8 border-t border-black/10"
                  />
                )
              }

              if (index === 0) {
                return (
                  <p
                    key={index}
                    className="text-lg md:text-xl font-light first-letter:text-5xl first-letter:font-bold first-letter:text-black first-letter:mr-1 first-letter:float-left first-letter:leading-none first-letter:mt-1"
                  >
                    {element.content}
                  </p>
                )
              }

              return <p key={index}>{element.content}</p>
            })}
          </div>
        </motion.article>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 pt-12 border-t border-black/10"
        >
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <p
                className="text-xl font-bold"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                Eldad Fux
              </p>
              <p className="text-sm text-black/40 font-light">
                Founder & CEO @ Appwrite
              </p>
            </div>
            <Link
              to="/"
              className="text-sm text-black/40 hover:text-black/60 transition-colors duration-300 uppercase tracking-[0.2em] font-medium"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              More Posts →
            </Link>
          </div>
        </motion.footer>
      </div>
    </div>
  )
}
