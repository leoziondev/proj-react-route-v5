import { useFetch } from "../hooks/useFetch"

import './Home.css'

export function HomePage() {
  const { data:articles, isPending, error } = useFetch('http://localhost:3000/articles')

  return (
    <div className="home">
      <h1>Articles</h1>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}

      {articles && articles.map((article) => (
        <article key={article.id} className="card">
          <h2>{article.title}</h2>
          <p><strong>Author</strong>: {article.author}</p>
        </article>
      ))}
    </div>
  )
}