// src/components/Loading.jsx
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const loadingTexts = [
  'Fetching powerful ideas...',
  'Loading vibrant stories...',
  'Curating thoughts for you...',
  'Bringing Ashley’s articles...',
  'Just a moment more...',
]

const Loading = () => {
  const [textIndex, setTextIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex(prev => (prev + 1) % loadingTexts.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className=" flex flex-col h-[420px] items-center justify-center text-center px-4">
      <motion.div
        className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-6"
        initial={{ scale: 0.6 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      />
      <motion.p
        key={textIndex}
        className="text-lg sm:text-xl font-medium text-blue-800"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.6 }}
      >
        {loadingTexts[textIndex]}
      </motion.p>
    </div>
  )
}

export default Loading
