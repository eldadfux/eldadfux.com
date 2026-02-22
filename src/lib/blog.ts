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

// Import each post so both client and server bundles include the content.
// When adding a new post: add the file under src/content/blog/<slug>.md then add one line below.
import aiEntryBarrierEngineers from '../content/blog/ai-entry-barrier-engineers.md?raw'

const blogPosts: Record<string, string> = {
  'ai-entry-barrier-engineers': aiEntryBarrierEngineers,
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
