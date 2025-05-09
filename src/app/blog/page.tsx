 
import Link from "next/link"
import { getArticles } from "../lib/getArticles"
import { Article } from "./[id]/types"

export const revalidate = 3600

export default async function BlogPage() {
  const articles = await getArticles()

  return (
    <main className='max-w-4xl mx-auto p-6'>
      <h1 className='text-3xl font-bold mb-6'>Blog</h1>
      <ul className='space-y-4'>
        {articles.map((article: Article) => (
          <li key={article.id}>
            <Link
              href={`/blog/${article.id}`}
              className='block border rounded-lg p-4 hover:scale-105 transition hover:border-violet-700'
            >
              <h2 className='text-xl font-semibold'>{article.title}</h2>
              <p className='text-gray-600'>{article.description}</p>
              <p className='text-sm text-gray-500'>
                {new Date(article.published_at).toLocaleDateString()}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
