import React, { useState } from 'react';
import { Quote, Book, Star, Heart } from 'lucide-react';

const benefits = [
  {
    id: 1,
    title: 'Boosts Mental Health',
    description: 'Reading reduces stress and improves brain connectivity, keeping your mind sharp and healthy.',
  },
  {
    id: 2,
    title: 'Enhances Empathy',
    description: 'Stories help us understand different perspectives, fostering compassion and emotional intelligence.',
  },
  {
    id: 3,
    title: 'Increases Knowledge',
    description: 'Books provide endless information and ideas, enriching your understanding of the world.',
  },
];

const ReadingBenefitsSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-700 to-blue-900 py-20 px-6 flex justify-center">
      <div className="relative bg-blue-800 text-white rounded-3xl shadow-2xl max-w-5xl w-full p-12">
        {/* Иконки */}
        <div className="absolute top-4 left-4 text-blue-300 opacity-40">
          <Quote size={48} />
        </div>
        <div className="absolute bottom-6 right-10 text-blue-300 opacity-30">
          <Star size={40} />
        </div>
        <div className="absolute top-20 right-6 text-blue-400 opacity-50">
          <Heart size={36} />
        </div>
        <div className="absolute bottom-20 left-14 text-blue-300 opacity-40">
          <Book size={44} />
        </div>

        {/* Заголовок */}
        <h2 className="text-4xl font-extrabold text-center mb-14 tracking-wide drop-shadow-md">
          Why Reading Books is Good for You
        </h2>

        {/* Карточки */}
        <div className="grid md:grid-cols-3 gap-12">
          {benefits.map(({ id, title, description }) => (
            <div
              key={id}
              className="bg-blue-600 rounded-xl p-8 shadow-lg cursor-default hover:bg-blue-500 transition"
            >
              <h3 className="text-2xl font-semibold mb-3">{title}</h3>
              <p className="text-blue-100 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReadingBenefitsSection;