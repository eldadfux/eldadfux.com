import { createFileRoute } from '@tanstack/react-router'
import { HeroSection } from '@/components/blog/hero-section'
import { CompaniesSection } from '@/components/blog/companies-section'
import { BlogPostsSection } from '@/components/blog/blog-posts-section'
import { FooterSection } from '@/components/blog/footer-section'

export const Route = createFileRoute('/_public/')({
  component: Index,
})

function Index() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
        <HeroSection />
        <CompaniesSection />
        <BlogPostsSection />
        <FooterSection />
      </div>
    </div>
  )
}
