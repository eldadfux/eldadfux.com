import { createFileRoute } from '@tanstack/react-router'
import { getBaseUrl } from '@/server/functions/request'
import { HeroSection } from '@/components/blog/hero-section'
import { BlogPostsSection } from '@/components/blog/blog-posts-section'
import { FooterSection } from '@/components/blog/footer-section'

export const Route = createFileRoute('/_public/')({
  component: Index,
  loader: async () => {
    const baseUrl = await getBaseUrl()
    return { baseUrl }
  },
  head: ({ loaderData }) => {
    const baseUrl = loaderData?.baseUrl ?? ''
    const canonical = baseUrl ? `${baseUrl.replace(/\/$/, '')}/` : undefined
    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Eldad Fux Personal Blog',
      url: canonical,
      description:
        'Thoughts on open source, engineering, and building dev tools—from the founder of Appwrite and Imagine.dev.',
    }
    return {
      links: [...(canonical ? [{ rel: 'canonical', href: canonical }] : [])],
      scripts: [
        {
          type: 'application/ld+json',
          children: JSON.stringify(websiteSchema),
        },
      ],
    }
  },
})

function Index() {
  return (
    <div className="min-h-screen bg-[#0d0c0a] text-[#e6e2db]">
      <div className="relative">
        <HeroSection />
        <BlogPostsSection />
        <FooterSection />
      </div>
    </div>
  )
}
