import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../supabase'
import Loading from '../components/Loading'

const CategoryArticlesPage = () => {
  const { typename } = useParams()
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchArticles = async () => {
      const { data, error } = await supabase
        .from('ashley_articles')
        .select('*')
        .eq('type', typename)
        .order('published_date', { ascending: false })

      if (error) {
        setError(error.message)
      } else {
        setArticles(data)
      }
      setLoading(false)
    }

    fetchArticles()
  }, [typename])

  const slugify = (text) =>
    text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "")

  return (
    <div className="min-h-screen bg-gradient-to-b via-white to-blue-50 py-16 px-4">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-800 text-center mb-10">
          {typename}
        </h1>

        {loading ? (
          <Loading />
        ) : error ? (
          <p className="text-center text-red-600">Error: {error}</p>
        ) : articles.length === 0 ? (
          <p className="text-center text-gray-600">No articles found for "{typename}"</p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map(article => (
              <Link
                key={article.id}
                to={`/articles/${slugify(article.title)}`}
                className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col transform hover:-translate-y-1 animate-fade-in"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5 flex flex-col flex-grow">
                  <h2 className="text-xl font-semibold text-blue-800 mb-2">{article.title}</h2>
                  <p className="text-gray-600 text-sm mb-3">{article.summary}</p>
                  <div className="text-xs text-gray-500 mb-2">
                    🕒 {article.reading_time} min • 📅 {new Date(article.published_date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <img src={article.avatar} alt={article.author} className="w-7 h-7 rounded-full" />
                    <span className="text-sm font-medium text-gray-700">{article.author}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default CategoryArticlesPage
