import Link from "next/link"

const DEVTO_USERNAME = 'gabs_xd'

export const revalidate = 3600

interface Article {
  id: number
  title: string
  description: string
  published_at: string
  slug: string
  url: string
}


export async function getArticles(slug:string) {
  const response = await fetch(`https://dev.to/api/articles?username=${slug}`)
  const articles = await response.json()
  console.log(articles)
  return articles
}


export default async function BlogPage() {
  const articles = await getArticles(DEVTO_USERNAME)
  console.log(articles)

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
