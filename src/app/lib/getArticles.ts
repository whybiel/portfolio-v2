import { Article } from '../blog/[id]/types'

export async function getArticles(): Promise<Article[]> {
  const response = await fetch(`https://dev.to/api/articles?username=gabs_xd`)
  const articles = await response.json()
  return articles
}

export async function getArticleById(id: number) {
  const res = await fetch(`https://dev.to/api/articles/${id}`)
  if (!res.ok) throw new Error('Artigo não encontrado')
  return res.json()
}