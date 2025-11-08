'use client'

import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

type Project = {
  id: number
  title: string
  subtitle?: string
  images: string[]
  description?: string[]
}

export default function ProjectModal({
  project,
  onClose
}: {
  project: Project | null
  onClose: () => void
}) {
  const [index, setIndex] = useState(0)

  useEffect(() => setIndex(0), [project])
  if (!project) return null

  const prev = () => setIndex((i) => (i - 1 + project.images.length) % project.images.length)
  const next = () => setIndex((i) => (i + 1) % project.images.length)

  return createPortal(
    <AnimatePresence>
      <motion.div
        key={project.id}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm overflow-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="max-w-4xl w-full bg-white/95 dark:bg-gray-900/95 rounded-2xl overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
        >
          <div className="relative">
            <img
              src={project.images[index]}
              alt={`${project.title} screenshot ${index + 1}`}
              className="w-full h-80 object-cover"
            />
            {project.images.length > 1 && (
              <>
                <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 dark:bg-gray-800/70 p-2 rounded-full">
                  <ChevronLeft />
                </button>
                <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 dark:bg-gray-800/70 p-2 rounded-full">
                  <ChevronRight />
                </button>
              </>
            )}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 bg-white/70 dark:bg-gray-800/70 p-2 rounded-full"
            >
              <X />
            </button>
          </div>

          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {project.subtitle}
              </p>
            )}
            {project.description && (
              <div className="mt-4 space-y-2 text-gray-700 dark:text-gray-300 max-h-[200px] overflow-y-auto pr-2">
                {project.description.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  )
}
