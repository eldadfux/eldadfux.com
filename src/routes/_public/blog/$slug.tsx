import { createFileRoute, notFound } from '@tanstack/react-router'
import { getBlogPost } from '@/lib/blog'
import { BlogPostPage } from '@/components/blog/blog-post-page'

export const Route = createFileRoute('/_public/blog/$slug')({
  component: BlogPostPageRoute,
  loader: ({ params }) => {
    const post = getBlogPost(params.slug)
    if (!post) {
      throw notFound()
    }
    return { post }
  },
})

function BlogPostPageRoute() {
  const { post } = Route.useLoaderData()
  return <BlogPostPage post={post} />
}
