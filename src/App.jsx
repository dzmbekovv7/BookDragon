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
import CategoryArticlesPage from './pages/CategoryArticlesPage'

function App() {

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
          <Route path='/reviews' element={<AnimatedPage><Testimonials></Testimonials></AnimatedPage>}></Route>
          <Route path="/articles" element={<AnimatedPage><AshleyArticlesPage /></AnimatedPage>} />
          <Route path="/articles/:slug"  element={<AnimatedPage><AshleyArticleDetailPage /></AnimatedPage>} />
          <Route path="/type/:typename" element={<AnimatedPage><CategoryArticlesPage /></AnimatedPage>} />
          <Route path='/privacy' element={<AnimatedPage><Privacy/></AnimatedPage>}></Route>

        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
