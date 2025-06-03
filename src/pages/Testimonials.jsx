import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  { name: "Alihanka", text: "Amazing collection and great recommendations!" },
  { name: "Ali", text: "I love how easy it is to find books I enjoy." },
  { name: "Zara", text: "A magical place for book lovers. Highly recommend it!" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const Testimonials = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,  // чтобы включалось и выключалось при скролле
    threshold: 0.2,       // когда 20% блока видимо — активировать
  });

  return (
    <section
      ref={ref}
      className="relative bg-white py-20 text-center overflow-hidden"
    >
      {/* Заголовок */}
      <motion.div
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={{
          hidden: { opacity: 0, y: -20 },
          show: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.7 }}
      >
        <h3 className="text-4xl font-bold text-blue-800 mb-10 italic font-serif">
          What Readers Say
        </h3>
      </motion.div>

      {/* Отзывы */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="flex flex-wrap justify-center gap-10 px-6 z-10 relative"
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ scale: 1.03, y: -5 }}
            className="bg-white border border-blue-100 p-6 rounded-2xl shadow-lg max-w-sm transition-all duration-300"
          >
            <Quote className="w-8 h-8 text-blue-300 mx-auto mb-4" />
            <p className="italic text-gray-700 mb-4">"{t.text}"</p>
            <p className="font-bold text-blue-600">— {t.name}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Декор */}
      <Quote className="absolute top-10 left-10 text-blue-100 opacity-20 w-20 h-20 rotate-[20deg]" />
      <Quote className="absolute bottom-16 right-16 text-pink-100 opacity-20 w-24 h-24 -rotate-12" />
    </section>
  );
};

export default Testimonials;
