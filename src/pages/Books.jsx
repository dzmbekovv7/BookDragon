import React, { useRef } from 'react';
import BookCard from '../components/BookCard';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Books = () => {
  const scrollRef = useRef(null);
  const { ref: inViewRef, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  // Функция, объединяющая два рефа
  const setRefs = (node) => {
    scrollRef.current = node; // для скролла
    inViewRef(node); // для анимации
  };
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const books = [
    {
      title: '1984',
      author: 'George Orwell',
      image: 'https://ndc.book24.ru/resize/440x568/pim/products/images/93/c9/01961941-cf05-701e-960c-251c64fb93c9.jpg',
    },
    {
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      image: 'https://covers.openlibrary.org/b/id/6979861-L.jpg',
    },
    {
      title: 'Clean Code',
      author: 'Robert C. Martin',
      image: 'https://m.media-amazon.com/images/I/41jEbK-jG+L.jpg',
    },
    {
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      image: 'https://everyday-reading.com/wp-content/uploads/2023/01/Books-If-You-Are-Getting-Back-Into-Reading.png',
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt & David Thomas',
      image: 'https://m.media-amazon.com/images/I/41as+WafrFL.jpg',
    },
    {
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      image: 'https://covers.openlibrary.org/b/id/6979861-L.jpg',
    },
    {
      title: 'Clean Code',
      author: 'Robert C. Martin',
      image: 'https://m.media-amazon.com/images/I/41jEbK-jG+L.jpg',
    },
    {
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      image: 'https://everyday-reading.com/wp-content/uploads/2023/01/Books-If-You-Are-Getting-Back-Into-Reading.png',
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt & David Thomas',
      image: 'https://m.media-amazon.com/images/I/41as+WafrFL.jpg',
    },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white px-6 py-16 relative">
      <h2 className="text-3xl font-extrabold text-center text-blue-800 mb-10">📚 Featured Books</h2>

      {/* Стрелки */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-4 top-[50%] z-20 p-2 bg-white rounded-full shadow-md hover:bg-blue-100 transition hidden md:block"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute right-4 top-[50%] z-20 p-2 bg-white rounded-full shadow-md hover:bg-blue-100 transition hidden md:block"
      >
        <ChevronRight />
      </button>

      {/* Карусель */}
      <motion.div
  ref={setRefs}
  variants={containerVariants}
  initial="hidden"
  animate={inView ? 'show' : 'hidden'}
  className="flex overflow-x-auto no-scrollbar gap-6 scroll-smooth"
>
  {books.map((book, idx) => (
    <BookCard key={idx} idx={idx} {...book} />
  ))}
</motion.div>

    </div>
  );
};

export default Books;
