import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.3, duration: 0.8 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const stickerVariants = {
  float: {
    y: [0, -15, 0],
    rotate: [0, 15, -15, 0],
    transition: {
      yoyo: Infinity,
      duration: 4,
      ease: 'easeInOut',
    },
  },
};

const ReadingBenefitsSection = () => {
  // Локальный стейт для отслеживания, видим ли мы контейнер
  const [isVisible, setIsVisible] = useState(false);

  return (
    <section className="relative bg-gradient-to-br from-blue-700 to-blue-900 py-20 px-6 flex justify-center">
      <motion.div
        className="relative bg-blue-800 text-white rounded-3xl shadow-2xl max-w-5xl w-full p-12"
        // Отслеживаем попадание в область видимости
        onViewportEnter={() => setIsVisible(true)}
        onViewportLeave={() => setIsVisible(false)}
      >
        {/* Стикеры с анимацией */}
        <motion.div
          className="absolute top-4 left-4 text-blue-300 opacity-40"
          variants={stickerVariants}
          animate="float"
        >
          <Quote size={48} />
        </motion.div>
        <motion.div
          className="absolute bottom-6 right-10 text-blue-300 opacity-30"
          variants={stickerVariants}
          animate="float"
          style={{ rotate: 25 }}
        >
          <Star size={40} />
        </motion.div>
        <motion.div
          className="absolute top-20 right-6 text-blue-400 opacity-50"
          variants={stickerVariants}
          animate="float"
          style={{ rotate: -20 }}
        >
          <Heart size={36} />
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-14 text-blue-300 opacity-40"
          variants={stickerVariants}
          animate="float"
          style={{ rotate: 10 }}
        >
          <Book size={44} />
        </motion.div>

        {/* Заголовок */}
        <motion.h2
          className="text-4xl font-extrabold text-center mb-14 tracking-wide drop-shadow-md"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Why Reading Books is Good for You
        </motion.h2>

        {/* Анимированное появление/исчезновение карточек */}
        <AnimatePresence mode="wait">
          {isVisible && (
            <motion.div
              className="grid md:grid-cols-3 gap-12"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {benefits.map(({ id, title, description }) => (
                <motion.div
                  key={id}
                  className="bg-blue-600 rounded-xl p-8 shadow-lg cursor-default hover:bg-blue-500 transition"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-semibold mb-3">{title}</h3>
                  <p className="text-blue-100 leading-relaxed">{description}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default ReadingBenefitsSection;
