import { createFileRoute, notFound } from '@tanstack/react-router'
import { getBlogPost } from '@/lib/blog'
import { getBaseUrl } from '@/server/functions/request'
import {
  createOGMetaTags,
  generateOGImageUrl,
} from '@/lib/og-config'
import { BlogPostPage } from '@/components/blog/blog-post-page'

export const Route = createFileRoute('/_public/blog/$slug')({
  component: BlogPostPageRoute,
  loader: async ({ params }) => {
    const post = getBlogPost(params.slug)
    if (!post) {
      throw notFound()
    }
    const baseUrl = await getBaseUrl()
    return { post, baseUrl }
  },
  head: ({ loaderData, params }) => {
    const { post, baseUrl } = loaderData ?? {}
    if (!post || !baseUrl) return {}

    const url = `${baseUrl.replace(/\/$/, '')}/blog/${params.slug}`
    const ogImageUrl = generateOGImageUrl(
      {
        isCustom: true,
        title: post.title,
        description: post.description,
      },
      baseUrl,
    )
    const ogTags = createOGMetaTags({
      title: post.title,
      description: post.description,
      image: ogImageUrl,
      url,
      type: 'article',
    })

    const publishedDate = post.date ? new Date(post.date) : null
    const publishedTime =
      publishedDate && !Number.isNaN(publishedDate.getTime())
        ? publishedDate.toISOString().slice(0, 10)
        : undefined

    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      description: post.description,
      url,
      ...(publishedTime && { datePublished: publishedTime }),
      author: {
        '@type': 'Person',
        name: 'Eldad Fux',
      },
    }

    return {
      meta: [
        { title: `${post.title} | Eldad Fux` },
        ...ogTags.meta,
        ...(publishedTime
          ? [{ property: 'article:published_time', content: publishedTime }]
          : []),
        { property: 'article:author', content: 'Eldad Fux' },
        { property: 'article:section', content: 'Blog' },
      ],
      links: [{ rel: 'canonical', href: url }],
      scripts: [
        {
          type: 'application/ld+json',
          children: JSON.stringify(articleSchema),
        },
      ],
    }
  },
})

function BlogPostPageRoute() {
  const { post } = Route.useLoaderData()
  return <BlogPostPage post={post} />
}
