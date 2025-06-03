import React from 'react';
import { BookOpen, Heart, Moon, Sparkles, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-white via-blue-50 to-blue-100 relative overflow-hidden"
    >
      {/* Заголовок */}
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
        <motion.p
          variants={itemVariants}
          className="text-gray-600 mb-10"
        >
          Choose your next journey through genres that ignite your imagination.
        </motion.p>
      </motion.div>

      {/* Категории */}
      <motion.div
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        variants={containerVariants}
        className="flex flex-wrap justify-center gap-8 px-4"
      >
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ scale: 1.08, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="p-6 bg-white rounded-2xl shadow-xl w-44 cursor-pointer transition-all hover:shadow-2xl"
          >
            <div className="mb-3">{cat.icon}</div>
            <p className="font-semibold text-blue-800 text-lg">{cat.name}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Декор */}
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-200 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-pink-200 opacity-20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Categories;
