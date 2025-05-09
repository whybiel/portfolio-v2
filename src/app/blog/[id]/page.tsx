// app/blog/[id]/page.tsx
import BackBlog from '@/app/components/backBlog';
import './style.css'

export const revalidate = 3600;

async function getArticle(id: string) {
  const res = await fetch(`https://dev.to/api/articles/${id}`);
  return res.json();
}

export default async function BlogPostPage({ params }: { params: { id: string } }) {
  const article = await getArticle(params.id);
  return (
    <main className='max-w-3xl mx-auto p-6'>
      <BackBlog/>
      <h1 className='text-3xl font-bold mb-4'>{article.title}</h1>
      <p className='text-sm text-gray-500 mb-6'>
        Publicado em {new Date(article.published_at).toLocaleDateString()}
      </p>
      <div className='article-body' dangerouslySetInnerHTML={{ __html: article.body_html }} />
    </main>
  )
}
