// src/pages/AshleyArticlesPage.jsx (или Articles.jsx)
import React, { useEffect, useState } from 'react'
import { supabase } from '../supabase'
import { Search, Flame, Star, Clock } from 'lucide-react'
import Loading from '../components/Loading'  // импорт компонента Loading

const AshleyArticlesPage = () => {
  const [articles, setArticles] = useState([])
  const [visibleCount, setVisibleCount] = useState(6)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('newest')

  useEffect(() => {
    const fetchArticles = async () => {
      const { data, error } = await supabase
        .from('ashley_articles')
        .select('*')
        .order('published_date', { ascending: false })

      if (error) {
        setError(error.message)
      } else {
        setArticles(data)
      }
      setLoading(false)
    }

    fetchArticles()
  }, [])

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 6)
  }

  const filteredArticles = articles
    .filter(article => article.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (filter === 'newest') {
        return new Date(b.published_date) - new Date(a.published_date)
      } else if (filter === 'popular') {
        return b.reading_time - a.reading_time
      } else {
        return 0
      }
    })

  return (
    <div className="bg-gradient-to-b via-white to-blue-50 min-h-screen pb-16">
      {/* Animated Header */}
      <div className="relative overflow-hidden bg-gradient-to-tr from-blue-800 to-indigo-700 py-20 text-white text-center shadow-xl">
        <div className="relative z-10 px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate-fade-in-down">Ashley’s Article Collection</h1>
          <p className="text-lg sm:text-xl animate-fade-in-up">Dive into curated reads, powerful ideas & vibrant stories</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16">
        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
          <div className="relative w-full md:w-1/2 mx-auto group transition duration-300">
            <div className="flex items-center w-full bg-white rounded-full shadow-md ring-1 ring-blue-200 focus-within:ring-2 focus-within:ring-blue-500 px-5 py-3 transition-all duration-300">
              <Search className="text-blue-500 mr-3" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="flex-grow bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none text-sm sm:text-base"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="text-gray-400 hover:text-red-500 transition"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* <div className="flex gap-3 flex-wrap justify-center">
            <button
              onClick={() => setFilter('newest')}
              className={`px-4 py-2 rounded-full transition font-medium flex items-center gap-2 ${
                filter === 'newest' ? 'bg-blue-600 text-white' : 'bg-white text-blue-700 border border-blue-200'
              }`}
            >
              <Clock size={18} /> Newest
            </button>
            <button
              onClick={() => setFilter('popular')}
              className={`px-4 py-2 rounded-full transition font-medium flex items-center gap-2 ${
                filter === 'popular' ? 'bg-blue-600 text-white' : 'bg-white text-blue-700 border border-blue-200'
              }`}
            >
              <Flame size={18} /> Popular
            </button>
            <button
              onClick={() => setFilter('favorites')}
              className={`px-4 py-2 rounded-full transition font-medium flex items-center gap-2 ${
                filter === 'favorites' ? 'bg-blue-600 text-white' : 'bg-white text-blue-700 border border-blue-200'
              }`}
            >
              <Star size={18} /> My Favorites
            </button>
          </div> */}
        </div>

        {/* Articles Grid / Loading / Error */}
        {loading ? (
          <Loading />
        ) : error ? (
          <p className="text-center text-red-600 ">Error: {error}</p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.slice(0, visibleCount).map((article, index) => (
              <div
                key={article.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col transform hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 80}ms` }}
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
                  <span className="inline-block text-xs bg-blue-100 text-blue-700 rounded px-2 py-1 w-fit mb-4">
                    {article.type}
                  </span>
                  <details className="text-sm text-gray-700 cursor-pointer">
                    <summary className="font-medium text-blue-600">Read Full Content</summary>
                    <div className="mt-2 whitespace-pre-line leading-relaxed text-[17px]">{article.content}</div>
                  </details>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Show More */}
        {visibleCount < filteredArticles.length && !loading && (
          <div className="text-center mt-10">
            <button
              onClick={handleShowMore}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full font-semibold hover:from-blue-600 hover:to-indigo-600 transition duration-300 shadow-lg hover:shadow-xl animate-bounce-slow"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default AshleyArticlesPage
