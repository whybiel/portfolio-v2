'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

type Project = {
  id: number
  title: string
  subtitle?: string
  images: string[]
}

export default function ProjectCard({
  project,
  onClick
}: {
  project: Project
  onClick: () => void
}) {
  const [index, setIndex] = useState(0)

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % project.images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [project.images.length])

  return (
    <motion.article
      layout
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      className="cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all bg-white dark:bg-gray-900 group"
    >
      <div className="relative h-48 w-full">
        <motion.img
          key={index}
          src={project.images[index]}
          alt={project.title}
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="p-4 flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          {project.subtitle && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {project.subtitle}
            </p>
          )}
        </div>
        <ExternalLink
          className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-violet-500 transition-colors"
          strokeWidth={2}
        />
      </div>
    </motion.article>
  )
}
