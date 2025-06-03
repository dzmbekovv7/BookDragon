import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Heart, Sparkles, Quote} from 'lucide-react';
import { Link } from 'react-router-dom';
const fallingDotsCount = 40;

const Hero = () => {
  // Генерация падающих точек (используем абсолютное позиционирование и анимацию)
  const dots = Array.from({ length: fallingDotsCount }).map((_, i) => {
    const size = Math.random() * 4 + 2; // 2px — 6px
    const left = Math.random() * 100; // %
    const delay = Math.random() * 10; // сек
    const duration = Math.random() * 8 + 5; // 5-13 сек
    return (
      <motion.div
        key={i}
        style={{
          width: size,
          height: size,
          left: `${left}%`,
          bottom: '110%',
          borderRadius: '50%',
          backgroundColor: 'rgba(79, 70, 229, 0.15)', // синий прозрачный
          position: 'absolute',
          filter: 'blur(0.5px)',
        }}
        animate={{ y: ['0%', '120vh'] }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
          duration: duration,
          delay: delay,
        }}
      />
    );
  });

  return (
    <section className="relative overflow-hidden py-20 px-6 h-[600px] bg-transparent">

      {/* Падающие точки */}
      {dots}

      {/* Декоративные иконки */}
      <Quote className="absolute top-10 left-10 text-blue-100 opacity-30 w-16 h-16 rotate-12" />
      <Heart className="absolute bottom-10 left-20 text-pink-200 opacity-30 w-14 h-14 animate-pulse" />
      <BookOpen className="absolute top-20 right-20 text-yellow-300 opacity-20 w-16 h-16" />
      <Sparkles className="absolute bottom-16 right-10 text-purple-300 opacity-30 animate-spin-slow w-14 h-14" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 z-10 relative">
        {/* Текстовая часть */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-left flex-1"
        >
          <h2
            className="text-3xl sm:text-7xl font-extrabold font-serif italic mb-6"
            style={{
              background: 'linear-gradient(90deg, #4f46e5, #6366f1, #4f46e5)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'textGlow 3s ease-in-out infinite alternate',
            }}
          >
            Welcome to BookDragon
          </h2>
          <p className="text-gray-700 text-lg mb-4 max-w-md">
            Discover a world of books guarded by the mighty dragon.
          </p>
          <p className="text-gray-600 text-md mb-6 max-w-md">
            Explore ancient tomes, magical tales, and thrilling adventures — all in one place.
          </p>
          <Link to="/articles">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition transform hover:scale-105 hover:shadow-xl">
            Explore Books
          </button>
          </Link>
        </motion.div>

        {/* Картинка */}
        <motion.div
          initial={{ x: 100, opacity: 0, scale: 0.9 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/girl-is-reading-book-while-sitting-on-bean-bag-illustration-download-in-svg-png-gif-file-formats--woman-with-a-pack-people-illustrations-8500988.png?f=webp"
            alt="Reading"
            className="w-full max-w-md mx-auto"
          />
        </motion.div>
      </div>

      {/* Добавляем keyframes для мерцания текста */}
      <style>{`
        @keyframes textGlow {
          0% {
            filter: drop-shadow(0 0 5px #6366f1);
          }
          100% {
            filter: drop-shadow(0 0 15px #4f46e5);
          }
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        @keyframes spin {
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
