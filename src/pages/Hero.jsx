import React from 'react';
import { BookOpen, Heart, Sparkles, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 px-6 h-[600px] bg-transparent">

      {/* Декоративные иконки */}
      <Quote className="absolute top-10 left-10 text-blue-100 opacity-30 w-16 h-16 rotate-12" />
      <Heart className="absolute bottom-10 left-20 text-pink-200 opacity-30 w-14 h-14 animate-pulse" />
      <BookOpen className="absolute top-20 right-20 text-yellow-300 opacity-20 w-16 h-16" />
      <Sparkles className="absolute bottom-16 right-10 text-purple-300 opacity-30 animate-spin-slow w-14 h-14" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 z-10 relative">
        {/* Текстовая часть */}
        <div className="text-left flex-1">
          <h2
            className="text-3xl sm:text-7xl font-extrabold font-serif italic mb-6"
            style={{
              background: 'linear-gradient(90deg, #4f46e5, #6366f1, #4f46e5)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
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
        </div>

        {/* Картинка */}
        <div className="flex-1">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/girl-is-reading-book-while-sitting-on-bean-bag-illustration-download-in-svg-png-gif-file-formats--woman-with-a-pack-people-illustrations-8500988.png?f=webp"
            alt="Reading"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>

      {/* Анимация вращения для Sparkles */}
      <style>{`
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
