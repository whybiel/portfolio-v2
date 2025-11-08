'use client'

import React, { useState } from 'react'
import ProjectCard from './projectCard'
import ProjectModal from './projectModal'
import { motion } from 'framer-motion'
import {FolderKanban} from 'lucide-react'

type Project = {
  id: number
  title: string
  subtitle?: string
  images: string[]
  description?: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: 'AquaWash Pro',
    subtitle: 'Site para agendamento de serviços de lavajato',
    images: [
      'lavajato-1.png',
      'lavajato-2.png',
      'lavajato-3.png',
      'lavajato-4.png',
       
    ],
    description: ['Aplicação desenvolvida para otimizar o agendamento e a gestão de serviços de lava jato, com foco em experiência do usuário e controle operacional. Possui autenticação, dashboard de agendamentos e monitoramento de erros, tudo em uma interface moderna e responsiva. Tecnologias: React, TypeScript, Vite, TailwindCSS, Redux Toolkit, React Router, Jest, Cypress, Sentry']
  }
]

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section
      id='projects'
      className='max-w-4xl mx-auto mt-24 min-h-dvh px-6'
      data-aos='fade-up'
    >
      <motion.h2
        className='text-4xl text-center     mb-10'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <FolderKanban className='inline mb-1 mr-2' color='#5D0EC0' />
        Projetos
      </motion.h2>

      <motion.div
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
        initial='hidden'
        whileInView='visible'
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
        }}
      >
        {projects.map((p) => (
          <motion.div
            key={p.id}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <ProjectCard project={p} onClick={() => setSelected(p)} />
          </motion.div>
        ))}
      </motion.div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}
