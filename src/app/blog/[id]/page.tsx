// /app/blog/[id]/page.tsx
import BackBlog from '@/app/components/backBlog'
import { getArticleById } from '@/app/lib/getArticles'
import './style.css'

export const revalidate = 3600

export default async function BlogPostPage({
  params
}: {
  params:Promise<{id: string}>
}) {
  const { id } = await params
  const articleId = Number(id)
  const article = await getArticleById(articleId)

  return (
    <main className='max-w-3xl mx-auto p-6'>
      <BackBlog />
      <h1 className='text-3xl font-bold mb-4'>{article.title}</h1>
      <p className='text-sm text-gray-500 mb-6'>
        Publicado em {new Date(article.published_at).toLocaleDateString()}
      </p>
      <div
        className='article-body'
        dangerouslySetInnerHTML={{ __html: article.body_html }}
      />
    </main>
  )
}
