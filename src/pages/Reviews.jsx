import React from 'react'

// Расширенные отзывы
const testimonialsData = [
  {
    id: 1,
    name: 'Sophia Johnson',
    avatar: 'https://i.pravatar.cc/100?img=32',
    title: 'Amazing Experience!',
    content: 'Working with Ashley’s articles has transformed how I approach my work. Truly inspiring and insightful!',
  },
  {
    id: 2,
    name: 'Liam Smith',
    avatar: 'https://i.pravatar.cc/100?img=15',
    title: 'Highly Recommended',
    content: 'I love the quality and depth of these articles. Each one feels like a conversation with a mentor.',
  },
  {
    id: 3,
    name: 'Emma Wilson',
    avatar: 'https://i.pravatar.cc/100?img=7',
    title: 'Fresh Perspectives',
    content: 'The diversity of topics and writing style kept me hooked. Perfect for curious minds!',
  },
  {
    id: 4,
    name: 'Noah Brown',
    avatar: 'https://i.pravatar.cc/100?img=25',
    title: 'Insightful & Clear',
    content: 'Concise and impactful articles that give you just the right amount of info without fluff.',
  },
  {
    id: 5,
    name: 'Isabella Martinez',
    avatar: 'https://i.pravatar.cc/100?img=29',
    title: 'Professional and Personal',
    content: 'There’s a unique mix of professionalism and personal touch in these posts. I always look forward to the next one.',
  },
  {
    id: 6,
    name: 'Oliver Davis',
    avatar: 'https://i.pravatar.cc/100?img=8',
    title: 'Inspirational Reads',
    content: 'Every time I read an article, I feel motivated to improve and think differently. That’s powerful!',
  },
  {
    id: 7,
    name: 'Ava Thompson',
    avatar: 'https://i.pravatar.cc/100?img=44',
    title: 'Brilliant Content',
    content: 'I appreciate the depth of thought that goes into every piece. So relevant and relatable!',
  },
]

// Фоновый паттерн крестиков и ноликов
const BackgroundPattern = () => {
  const patternItems = []
  const cols = 20
  const rows = 12

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const isX = (x + y) % 2 === 0
      patternItems.push(
        <span
          key={`${x}-${y}`}
          style={{
            position: 'absolute',
            top: `${(y / rows) * 100}%`,
            left: `${(x / cols) * 100}%`,
            transform: 'translate(-50%, -50%)',
            fontSize: '2rem',
            color: 'rgba(100, 116, 139, 0.07)',
            userSelect: 'none',
            pointerEvents: 'none',
            fontWeight: '900',
            fontFamily: 'monospace',
            zIndex: 0,
          }}
        >
          {isX ? 'X' : 'O'}
        </span>
      )
    }
  }

  return <>{patternItems}</>
}

const Testimonials = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 overflow-hidden py-20 px-6 sm:px-12">
      {/* Фоновый паттерн */}
      <div className="absolute inset-0 overflow-hidden">
        <BackgroundPattern />
      </div>

      {/* Вводный текст */}
      <div className="relative z-10 max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-900 mb-6 drop-shadow-lg">
          What People Say About Us
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          We believe in building genuine connections through impactful writing.
          But don’t just take our word for it—see what others are saying about our work and the value they’ve found in it.
        </p>
      </div>

      {/* Отзывы */}
      <div className="relative z-10 max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {testimonialsData.map(({ id, name, avatar, title, content }) => (
          <div
            key={id}
            className="bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-lg p-6 flex flex-col hover:shadow-2xl transition-shadow duration-500"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={avatar}
                alt={name}
                className="w-14 h-14 rounded-full border-2 border-indigo-400 shadow-sm"
              />
              <div>
                <h3 className="text-lg font-semibold text-indigo-800">{name}</h3>
                <p className="text-indigo-600 text-sm italic">{title}</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed text-[17px]">{content}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Testimonials
