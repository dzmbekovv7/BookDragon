import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  { name: "Alihanka", text: "Amazing collection and great recommendations!" },
  { name: "Ali", text: "I love how easy it is to find books I enjoy." },
  { name: "Zara", text: "A magical place for book lovers. Highly recommend it!" },
];

const Testimonials = () => {
  return (
    <section className="relative bg-white py-20 text-center overflow-hidden">
      {/* Заголовок */}
      <h3 className="text-4xl font-bold text-blue-800 mb-10 italic font-serif">
        What Readers Say
      </h3>

      {/* Отзывы */}
      <div className="flex flex-wrap justify-center gap-10 px-6 z-10 relative">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white border border-blue-100 p-6 rounded-2xl shadow-lg max-w-sm transition-all duration-300"
          >
            <Quote className="w-8 h-8 text-blue-300 mx-auto mb-4" />
            <p className="italic text-gray-700 mb-4">"{t.text}"</p>
            <p className="font-bold text-blue-600">— {t.name}</p>
          </div>
        ))}
      </div>

      {/* Декор */}
      <Quote className="absolute top-10 left-10 text-blue-100 opacity-20 w-20 h-20 rotate-[20deg]" />
      <Quote className="absolute bottom-16 right-16 text-pink-100 opacity-20 w-24 h-24 -rotate-12" />
    </section>
  );
};

export default Testimonials;