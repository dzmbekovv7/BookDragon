import React from 'react';
import Hero from './Hero';
import RecommendedBooks from './RecommendedBooks';
import Categories from './Categories';
import Testimonials from './Testimonials';
import Books from './Books';
import ReadingBenefitsSection from './AboutSection'
import QuoteSection from './QuoteSection';
import Features from './Features';
import CallToAction from './CallToAction';
const Home = () => (
  <div>
    <Hero />
    <Books />
    <Categories />
    <ReadingBenefitsSection/>
    <Testimonials />
    <CallToAction/>
    <Features/>
  </div>
);

export default Home;
