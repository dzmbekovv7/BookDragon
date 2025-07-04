import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabase';
import Loading from '../components/Loading';
import { MessageCircle, User, Clock } from 'lucide-react';
import './Article.css'
const AshleyArticleDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [otherArticles, setOtherArticles] = useState([]);
  const [prevArticle, setPrevArticle] = useState(null);
  const [nextArticle, setNextArticle] = useState(null);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const slugify = (text) =>
    text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

  useEffect(() => {
    const fetchArticle = async () => {
      const { data, error } = await supabase.from('bookmark_articles').select('*');

      if (!error && data) {
        const found = data.find((a) => slugify(a.title) === slug);
        if (found) {
          setArticle(found);

          const sorted = data.sort(
            (a, b) => new Date(a.published_date) - new Date(b.published_date)
          );
          const currentIndex = sorted.findIndex((a) => slugify(a.title) === slug);

          setPrevArticle(sorted[currentIndex - 1] || null);
          setNextArticle(sorted[currentIndex + 1] || null);

          const others = data
            .filter((a) => slugify(a.title) !== slug)
            .sort(() => 0.5 - Math.random())
            .slice(0, 12);
          setOtherArticles(others);
        }
      }

      setLoading(false);
    };

    fetchArticle();
  }, [slug]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim() || !article) return;

    const newComment = {
      name,
      message,
      created_at: new Date().toISOString(),
    };

    const updatedComments = article.comments
      ? [...article.comments, newComment]
      : [newComment];

    const { error } = await supabase
      .from('ashley_articles')
      .update({ comments: updatedComments })
      .eq('id', article.id);

    if (!error) {
      setArticle((prev) => ({ ...prev, comments: updatedComments }));
      setName('');
      setMessage('');
    }
  };

  if (loading) return <Loading />;
  if (!article) return <p>Article not found</p>;
  function addClassToLinks(html) {
    if (!html) return "";
  
    // Используем регулярку для добавления класса к каждому <a ...>
    return html.replace(/<a /g, '<a class="custom-link" ');
  }
  
  const customMarkdown = (content) => {
    if (!content) return "";
  
    let html = content
      .replace(/^# (.*$)/gm, '<h1>$1</h1>')
      .replace(/^## (.*$)/gm, '<h2>$1</h2>')
      .replace(/^### (.*$)/gm, '<h3>$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong style="font-size: 30px; font-weight: 700;">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(
        /\[(.*?)\]\((.*?)\)/g,
        `<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>`
      )
      .replace(/<img>(.*?)<\/img>/g, '<img src="$1" style="width: 70%; height: 100%" loading="lazy" class="article-image-content" />')
      .split('\n')
      .map(line => line.trim() === '' ? '<br/>' : `<p>${line}</p>`)
      .join('');
  
    // Добавляем класс ко всем ссылкам
    return addClassToLinks(html);
  };
 return (
  <div className="max-w-6xl mx-auto p-6 mt-10 flex flex-col lg:flex-row gap-10">
    {/* Main Content */}
    <div className="lg:w-2/3">
      {/* Navigation Buttons */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row gap-6 w-full justify-between mt-10">
          {prevArticle && (
            <Link
              to={`/articles/${slugify(prevArticle.title)}`}
              className="flex-1 bg-white border border-gray-200 hover:shadow-md transition p-4 rounded-2xl flex items-center gap-4"
            >
              <div className="text-2xl text-blue-500 hidden sm:block">←</div>
              <img
                src={prevArticle.image}
                alt={prevArticle.title}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="flex flex-col">
                <span className="text-xs text-gray-500">Previous Article</span>
                <h4 className="text-md font-semibold text-blue-900 line-clamp-2">
                  {prevArticle.title}
                </h4>
                <span className="text-xs text-gray-400">
                  {new Date(prevArticle.published_date).toLocaleDateString()}
                </span>
              </div>
            </Link>
          )}

          {nextArticle && (
            <Link
              to={`/articles/${slugify(nextArticle.title)}`}
              className="flex-1 bg-white border border-gray-200 hover:shadow-md transition p-4 rounded-2xl flex items-center gap-4 justify-end"
            >
              <div className="flex flex-col text-right">
                <span className="text-xs text-gray-500">Next Article</span>
                <h4 className="text-md font-semibold text-blue-900 line-clamp-2">
                  {nextArticle.title}
                </h4>
                <span className="text-xs text-gray-400">
                  {new Date(nextArticle.published_date).toLocaleDateString()}
                </span>
              </div>
              <img
                src={nextArticle.image}
                alt={nextArticle.title}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="text-2xl text-blue-500 hidden sm:block">→</div>
            </Link>
          )}
        </div>
      </div>

      {/* Article Content */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-64 object-cover rounded-md mb-6"
        />
        <h1 className="text-3xl font-bold text-blue-900 mb-4">{article.title}</h1>
        <div className="flex items-center gap-3 text-gray-600 text-sm mb-6">
          <img
            src={article.avatar}
            alt={article.author}
            className="w-8 h-8 rounded-full"
          />
          <span>{article.author}</span>
          <span>•</span>
          <span>{new Date(article.published_date).toLocaleDateString()}</span>
          <span>•</span>
          <span>{article.reading_time} read</span>
        </div>
        <div
          className="text-gray-700 whitespace-pre-line"
          dangerouslySetInnerHTML={{ __html: customMarkdown(article.content) }}
        />

        {/* Comment Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-6">
            Discussion
          </h2>

          {/* Comment Form */}
          <form
            onSubmit={handleCommentSubmit}
            className="mb-8 bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm space-y-5"
          >
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Your name"
                className="flex-1 bg-white border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="flex items-start gap-3">
              <textarea
                placeholder="Your message..."
                className="flex-1 bg-white border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Post Comment
            </button>
          </form>

          {/* Show Comments */}
          {article.comments && article.comments.length > 0 ? (
            article.comments
              .slice()
              .reverse()
              .map((comment, index) => (
                <div key={index} className="mb-6 border-t pt-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-800 mb-1">
                    {comment.name}
                  </div>
                  <p className="text-gray-700 whitespace-pre-line mb-1">
                    {comment.message}
                  </p>
                  <div className="text-xs text-gray-400 flex items-center gap-1">
                    {new Date(comment.created_at).toLocaleString()}
                  </div>
                </div>
              ))
          ) : (
            <p className="text-gray-500 italic">Be the first to comment!</p>
          )}
        </div>
      </div>
    </div>

    {/* Sidebar - Other Articles */}
    <div className="lg:w-1/3 space-y-6">
      {/* Latest Updates */}
      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-800">Latest Updates</h2>
        <div className="grid grid-cols-2 gap-4">
          {otherArticles.slice(0, 6).map((a, index) => (
            <Link
              key={a.id}
              to={`/articles/${slugify(a.title)}`}
              className="group rounded-xl shadow-md hover:shadow-lg transition overflow-hidden bg-white hover:bg-gray-50 flex gap-4 p-4"
            >
              <img
                src={a.image}
                alt={a.title}
                className="w-full h-32 object-cover rounded-md"
              />
              <div className="flex flex-col justify-between">
                <h3 className="font-semibold text-md text-blue-800 group-hover:underline line-clamp-2">
                  {a.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1">{a.author}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Keywords Section */}
      <div className="mt-20 border-t border-blue-200 pt-12">
        <h2 className="text-2xl font-extrabold text-blue-800 mb-8 text-center tracking-wide uppercase">
          Keywords
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/type/Literary%20Lists"
            className="px-6 py-3 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 font-medium rounded-full hover:from-blue-200 hover:to-blue-300 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Literary Lists
          </Link>
          <Link
            to="/type/Book%20Reviews"
            className="px-6 py-3 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 font-medium rounded-full hover:from-blue-200 hover:to-blue-300 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Book Reviews
          </Link>
                  <Link    to="/type/Book%20Lifestyle"
            className="px-6 py-3 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 font-medium rounded-full hover:from-blue-200 hover:to-blue-300 transition-all duration-300 shadow-sm hover:shadow-md"
                  >   
                  Book Lifestyle</Link>

                          <Link        to="/type/Feminism%20&%20Culture" 
            className="px-6 py-3 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 font-medium rounded-full hover:from-blue-200 hover:to-blue-300 transition-all duration-300 shadow-sm hover:shadow-md"
                          >  Feminism & Culture</Link>
                  
        </div>
      </div>
    </div>
  </div>
);
};

export default AshleyArticleDetailPage;
