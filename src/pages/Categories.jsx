import React, { useEffect, useState } from 'react';
import { BookOpen, Heart, Moon, Sparkles, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { supabase } from '../supabase';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const categories = [
  { name: 'Romantic', icon: <Heart className="w-8 h-8 text-pink-500" /> },
  { name: 'Mystery', icon: <Moon className="w-8 h-8 text-purple-600" /> },
  { name: 'Fantasy', icon: <Sparkles className="w-8 h-8 text-indigo-500" /> },
  { name: 'Sci-Fi', icon: <Rocket className="w-8 h-8 text-blue-600" /> },
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Categories = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticles = async () => {
      const { data, error } = await supabase
        .from('bookmark_articles')
        .select('*')
        .order('published_date', { ascending: false })
        .limit(6);

      if (data) setArticles(data);
      setLoading(false);
    };

    fetchArticles();
  }, []);
  const handleCategoryClick = (categoryName) => {
    navigate(`/articles?category=${encodeURIComponent(categoryName)}`);
  };
  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-white via-blue-50 to-blue-100 relative overflow-hidden"
    >
      {/* Заголовок категорий */}
      <motion.div
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        variants={containerVariants}
        className="text-center"
      >
        <motion.h3
          variants={itemVariants}
          className="text-4xl font-bold text-blue-800 mb-2 font-serif italic"
        >
          Popular Categories
        </motion.h3>
        <motion.p variants={itemVariants} className="text-gray-600 mb-10">
          Choose your next journey through genres that ignite your imagination.
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        variants={containerVariants}
        className="flex flex-wrap justify-center gap-8 px-4 mb-16"
      >
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ scale: 1.08, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="p-6 bg-white rounded-2xl shadow-xl w-44 cursor-pointer transition-all hover:shadow-2xl"
            onClick={() => handleCategoryClick(cat.name)} // добавлен переход
          >
            <div className="mb-3">{cat.icon}</div>
            <p className="font-semibold text-blue-800 text-lg">{cat.name}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Первые 6 статей */}
      <div className="max-w-6xl mx-auto px-4">
        <h4 className="text-2xl font-semibold text-blue-800 mb-6 text-center">
          Featured Articles
        </h4>
        {loading ? (
          <p className="text-center text-gray-600">Loading articles...</p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (

<Link
to="/articles"
key={article.id}
className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
>
<img
  src={article.image}
  alt={article.title}
  className="w-full h-48 object-cover"
/>
<div className="p-5 flex flex-col flex-grow">
  <h2 className="text-xl font-semibold text-blue-800 mb-2">{article.title}</h2>
  <p className="text-gray-600 text-sm mb-3 line-clamp-3">{article.summary}</p>
  <div className="text-xs text-gray-500">
    🕒 {article.reading_time} min • 📅{' '}
    {new Date(article.published_date).toLocaleDateString()}
  </div>
</div>
</Link>


            ))}
            
          </div>

        )}

        {/* Кнопка Смотреть больше */}
        <div className="text-center mt-10">
          <button
            onClick={() => navigate('/articles')}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full font-semibold hover:from-blue-600 hover:to-indigo-600 transition duration-300 shadow-lg hover:shadow-xl"
          >
            Show more
          </button>
        </div>
      </div>

      {/* Фоновые круги */}
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-200 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-indigo-300 opacity-30 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Categories;
