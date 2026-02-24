'use client'

import { Link } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { ArrowLeft } from 'lucide-react'
import { parseMarkdownContent } from '@/lib/blog'
import type { BlogPost } from '@/lib/blog'

interface BlogPostPageProps {
  post: BlogPost
}

function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export function BlogPostPage({ post }: BlogPostPageProps) {
  const contentElements = parseMarkdownContent(post.content)

  return (
    <div className="min-h-screen bg-[#0d0c0a] text-[#e6e2db]">
      {/* Nav */}
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="sticky top-0 z-10 border-b border-[#2a2825] bg-[#0d0c0a]/90 backdrop-blur-md"
      >
        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-6 flex items-center justify-between">
          <Link
            to="/"
            className="text-xl font-semibold text-[#e6e2db] hover:text-[#2dd4bf] transition-colors"
            style={{ fontFamily: 'Fraunces, serif' }}
          >
            Eldad A. Fux
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#8a8580] hover:text-[#2dd4bf] transition-colors group"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            Back
          </Link>
        </div>
      </motion.header>

      <div className="max-w-5xl px-6 md:px-12 lg:px-20 pt-14 pb-16 mx-auto">
        <div className="min-w-0">
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16"
          >
            <p
              className="text-[11px] uppercase tracking-[0.25em] text-[#8a8580] font-medium mb-5"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              {post.date}
            </p>
            <h1
              className="text-4xl md:text-5xl font-bold leading-[1.12] tracking-tight text-[#e6e2db] mb-6"
              style={{ fontFamily: 'Fraunces, serif' }}
            >
              {post.title}
            </h1>
            <p className="text-xl text-[#a8a39e] leading-relaxed">
              {post.description}
            </p>
          </motion.header>

          <motion.article
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="min-w-0"
          >
            <div className="max-w-2xl space-y-8 text-[#a8a39e] leading-relaxed">
              {contentElements.map((element, index) => {
                if (element.type === 'h2') {
                  const id = slugifyHeading(element.content)
                  return (
                    <h2
                      key={index}
                      id={id}
                      className="text-2xl font-semibold mt-14 mb-6 scroll-mt-24 text-[#e6e2db]"
                      style={{ fontFamily: 'Fraunces, serif' }}
                    >
                      {element.content}
                    </h2>
                  )
                }
                if (element.type === 'hr') {
                  return (
                    <hr
                      key={index}
                      className="border-0 h-px bg-[#2a2825] my-12"
                    />
                  )
                }
                if (index === 0) {
                  return (
                    <p
                      key={index}
                      className="text-lg md:text-xl text-[#a8a39e] first-letter:text-4xl first-letter:font-bold first-letter:text-[#e6e2db] first-letter:mr-2 first-letter:float-left first-letter:leading-none first-letter:mt-1"
                      style={{ fontFamily: 'Fraunces, serif' }}
                    >
                      {element.content}
                    </p>
                  )
                }
                return (
                  <p key={index} className="text-[#a8a39e]">
                    {element.content}
                  </p>
                )
              })}
            </div>

            <footer className="mt-20 pt-10 border-t border-[#2a2825] flex flex-wrap items-center justify-between gap-6">
              <div>
                <p
                  className="text-lg font-semibold text-[#e6e2db]"
                  style={{ fontFamily: 'Fraunces, serif' }}
                >
                  Eldad A. Fux
                </p>
              </div>
              <Link
                to="/"
                className="text-[11px] uppercase tracking-[0.2em] text-[#8a8580] hover:text-[#2dd4bf] transition-colors font-medium"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                All posts →
              </Link>
            </footer>
          </motion.article>
        </div>
      </div>

      {/* Site footer — matches main section width */}
      <footer className="py-16 md:py-20 px-6 md:px-12 lg:px-20 border-t border-[#2a2825]">
        <div className="max-w-5xl mx-auto">
          <p
            className="text-[11px] text-[#5a5652] tracking-[0.12em] uppercase"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            Built with {' '}
            <a
              href="https://imagine.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8a8580] hover:text-[#2dd4bf] transition-colors"
            >
              Imagine
            </a>
            , powered by{' '}
            <a
              href="https://appwrite.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8a8580] hover:text-[#2dd4bf] transition-colors"
            >
              Appwrite
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
