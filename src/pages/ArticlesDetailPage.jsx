import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../supabase';
import Loading from '../components/Loading';
import { MessageCircle, User, Clock } from 'lucide-react'; // ← если используешь lucide-react
const AshleyArticleDetailPage = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [otherArticles, setOtherArticles] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const slugify = (text) =>
    text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

  useEffect(() => {
    const fetchArticle = async () => {
      const { data, error } = await supabase.from('ashley_articles').select('*');

      if (!error && data) {
        const found = data.find((a) => slugify(a.title) === slug);
        if (found) {
          setArticle(found);
          const others = data
            .filter((a) => slugify(a.title) !== slug)
            .sort(() => 0.5 - Math.random())
            .slice(0, 6);
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

    // Обновляем comments внутри статьи
    const updatedComments = article.comments ? [...article.comments, newComment] : [newComment];

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

  return (
    <div className="max-w-6xl mx-auto p-6 mt-10 flex flex-col lg:flex-row gap-10">
      {/* Main Article */}
      <div className="lg:w-2/3 bg-white rounded-xl shadow-lg p-6">
        <img src={article.image} alt={article.title} className="w-full h-64 object-cover rounded-md mb-6" />
        <h1 className="text-3xl font-bold text-blue-900 mb-4">{article.title}</h1>
        <div className="flex items-center gap-3 text-gray-600 text-sm mb-6">
          <img src={article.avatar} alt={article.author} className="w-8 h-8 rounded-full" />
          <span>{article.author}</span>
          <span>•</span>
          <span>{new Date(article.published_date).toLocaleDateString()}</span>
          <span>•</span>
          <span>{article.reading_time} min read</span>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">{article.content}</p>

        {/* Comment Section */}
        <div className="mt-12">
  <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-6">
    <MessageCircle className="w-6 h-6 text-blue-600" />
    Discussion
  </h2>

  {/* Comment Form */}
  <form
    onSubmit={handleCommentSubmit}
    className="mb-8 bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm space-y-5"
  >
    <div className="flex items-center gap-3">
      <User className="w-5 h-5 text-gray-500" />
      <input
        type="text"
        placeholder="Your name"
        className="flex-1 bg-white border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>

    <div className="flex items-start gap-3">
      <MessageCircle className="w-5 h-5 text-gray-500 mt-2" />
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
            <User className="w-4 h-4 text-gray-500" />
            {comment.name}
          </div>
          <p className="text-gray-700 whitespace-pre-line mb-1">{comment.message}</p>
          <div className="text-xs text-gray-400 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {new Date(comment.created_at).toLocaleString()}
          </div>
        </div>
      ))
  ) : (
    <p className="text-gray-500 italic">Be the first to comment!</p>
  )}
</div>
      </div>

      {/* Sidebar - Other Articles */}
      <div className="lg:w-1/3 space-y-6">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Other Articles</h2>
        {otherArticles.map((a) => (
          <div
            key={a.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex gap-4"
          >
            <img src={a.image} alt={a.title} className="w-24 h-24 object-cover rounded-md" />
            <div>
              <h3 className="font-semibold text-md text-blue-800 line-clamp-2">{a.title}</h3>
              <p className="text-xs text-gray-500 mt-1">{a.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AshleyArticleDetailPage;
