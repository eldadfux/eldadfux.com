export interface BlogPost {
  slug: string
  title: string
  date: string
  description: string
  content: string
}

// Simple markdown parser for frontmatter and content
function parseMarkdown(markdown: string): {
  frontmatter: Record<string, string>
  content: string
} {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/
  const match = markdown.match(frontmatterRegex)

  if (!match) {
    return { frontmatter: {}, content: markdown }
  }

  const frontmatterText = match[1]
  const content = match[2]

  const frontmatter: Record<string, string> = {}
  frontmatterText.split('\n').forEach((line) => {
    const [key, ...valueParts] = line.split(':')
    if (key && valueParts.length > 0) {
      frontmatter[key.trim()] = valueParts.join(':').trim()
    }
  })

  return { frontmatter, content }
}

// Convert markdown to HTML-like structure for rendering
export function parseMarkdownContent(content: string): Array<{
  type: 'p' | 'h2' | 'hr'
  content: string
}> {
  const lines = content.trim().split('\n')
  const elements: Array<{ type: 'p' | 'h2' | 'hr'; content: string }> = []
  let currentParagraph = ''

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()

    // Horizontal rule
    if (line === '---') {
      if (currentParagraph) {
        elements.push({ type: 'p', content: currentParagraph.trim() })
        currentParagraph = ''
      }
      elements.push({ type: 'hr', content: '' })
      continue
    }

    // H2 heading
    if (line.startsWith('## ')) {
      if (currentParagraph) {
        elements.push({ type: 'p', content: currentParagraph.trim() })
        currentParagraph = ''
      }
      elements.push({ type: 'h2', content: line.substring(3) })
      continue
    }

    // Empty line - end of paragraph
    if (line === '') {
      if (currentParagraph) {
        elements.push({ type: 'p', content: currentParagraph.trim() })
        currentParagraph = ''
      }
      continue
    }

    // Regular text - add to current paragraph
    if (currentParagraph) {
      currentParagraph += ' ' + line
    } else {
      currentParagraph = line
    }
  }

  // Add final paragraph if exists
  if (currentParagraph) {
    elements.push({ type: 'p', content: currentParagraph.trim() })
  }

  return elements
}

// Import markdown files
const blogPosts: Record<string, string> = {
  'why-open-source-wins': `---
title: Why Open Source Wins
date: Jan 2024
description: The economics and community dynamics that make open source the dominant force in modern software development.
---

After building Appwrite and watching it grow to over 10 million downloads, I've learned something fundamental: open source isn't just a licensing model—it's a competitive advantage that compounds over time.

The conventional wisdom in tech has always been that proprietary software wins because you can control the product, the roadmap, and most importantly, the revenue. But this thinking is increasingly outdated. Open source has fundamentally changed the economics of software development.

## The Network Effect of Trust

When you open source your code, you're not just sharing your work—you're building trust at scale. Developers can inspect, audit, and verify exactly what your software does. This transparency creates a trust network that's impossible to replicate with closed-source alternatives.

At Appwrite, we've seen this firsthand. Developers choose us not just because we're free, but because they can see exactly how we handle their data, how we implement security, and how we architect our systems. That visibility is worth more than any marketing campaign.

## Community as Competitive Moat

The most underrated aspect of open source is the community moat it creates. When thousands of developers contribute to your project, report bugs, suggest features, and build integrations, you're not just building software—you're building an ecosystem.

This ecosystem becomes your competitive advantage. New competitors can copy your code (that's the point), but they can't copy your community. They can't replicate the thousands of hours of collective problem-solving, the integrations, the tutorials, the Stack Overflow answers, and the tribal knowledge that accumulates around a successful open source project.

## The Economics of Distribution

Open source changes the economics of software distribution. Instead of spending millions on sales and marketing, you let developers discover, try, and adopt your software organically. The cost of customer acquisition drops dramatically.

But here's the key insight: open source doesn't mean free. It means transparent. You can still build a sustainable business through cloud hosting, enterprise features, support contracts, and professional services. The difference is that your users choose to pay you because they want to, not because they have to.

## Speed as a Feature

Open source projects move faster than their closed-source counterparts. When you have hundreds or thousands of contributors, you can parallelize development in ways that no single company can match. Bug fixes happen faster. Features ship faster. Innovation accelerates.

This speed compounds over time. While closed-source competitors are debating features in boardrooms, open source projects are shipping them. While proprietary vendors are negotiating enterprise contracts, open source projects are being deployed in production.

## The Future is Open

Looking at the landscape of modern software development, it's clear that open source has won. The most important infrastructure—Linux, Kubernetes, PostgreSQL, React, Node.js—is all open source. The tools developers reach for first are open source. The communities they trust are open source.

This isn't idealism. It's pragmatism. Open source wins because it aligns incentives better, distributes faster, builds trust more effectively, and creates stronger network effects than any proprietary alternative.

---

The question isn't whether to open source your next project. The question is: can you afford not to?`,
}

export function getAllBlogPosts(): BlogPost[] {
  return Object.entries(blogPosts).map(([slug, markdown]) => {
    const { frontmatter, content } = parseMarkdown(markdown)
    return {
      slug,
      title: frontmatter.title || 'Untitled',
      date: frontmatter.date || '',
      description: frontmatter.description || '',
      content,
    }
  })
}

export function getBlogPost(slug: string): BlogPost | null {
  const markdown = blogPosts[slug]
  if (!markdown) return null

  const { frontmatter, content } = parseMarkdown(markdown)
  return {
    slug,
    title: frontmatter.title || 'Untitled',
    date: frontmatter.date || '',
    description: frontmatter.description || '',
    content,
  }
}
