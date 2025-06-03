import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Introduction from './pages/Introduction';
import Books from './pages/Books';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import AshleyArticlesPage from './pages/Articles';
import AshleyArticleDetailPage from './pages/ArticlesDetailPage';
import AnimatedPage from './components/FadeTransition';
import Testimonials from './pages/Reviews';
const loadingMessages = [
  "Just a second... your stories are being written.",
  "Turning the pages of something magical...",
  "Hold tight, the bookshelf is coming together.",
  "A story for every soul... Almost there!",
  "Summoning your next favorite book..."
];

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [loadingText, setLoadingText] = useState('');

  useEffect(() => {
    const message = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
    setLoadingText(message);

    const timer = setTimeout(() => setIsLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-pink-100 via-blue-100 to-blue-100 text-center px-4">
        {/* Анимация — красивая анимированная книжка */}
        <motion.img
          src="https://cdn-icons-png.flaticon.com/512/3377/3377731.png"
          alt="Loading book"
          className="w-24 h-24 mb-6"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-semibold max-w-md">
          {loadingText}
        </h2>
      </div>
    );
  }

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
          <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
          <Route path="/introduction" element={<AnimatedPage><Introduction /></AnimatedPage>} />
          <Route path="/books" element={<AnimatedPage><Books /></AnimatedPage>} />

          <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
          <Route path="/privacy" element={<AnimatedPage><Privacy /></AnimatedPage>} />
          <Route path='/reviews' element={<AnimatedPage><Testimonials></Testimonials></AnimatedPage>}></Route>
          <Route path="/articles" element={<AnimatedPage><AshleyArticlesPage /></AnimatedPage>} />
          <Route path="/articles/:slug"  element={<AnimatedPage><AshleyArticleDetailPage /></AnimatedPage>} />

        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
