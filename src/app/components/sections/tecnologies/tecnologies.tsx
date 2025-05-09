import Image from 'next/image'

interface Technology {
  name: string
  color: string
  width: string
  textColor: string
}

const technologies: Technology[] = [
  {
    name: 'ReactJS',
    color: 'bg-blue-600',
    width: 'w-3/4',
    textColor: 'text-blue-700 dark:text-blue-500'
  },
  {
    name: 'Zustand',
    color: 'bg-green-600 dark:bg-green-500',
    width: 'w-1/2',
    textColor: 'text-green-700 dark:text-green-500'
  },
  {
    name: 'Typescript',
    color: 'bg-yellow-400',
    width: 'w-1/2',
    textColor: 'text-yellow-700 dark:text-yellow-500'
  },
  {
    name: 'TailwindCSS',
    color: 'bg-indigo-600 dark:bg-indigo-500',
    width: 'w-2/5',
    textColor: 'text-indigo-700 dark:text-indigo-500'
  },
  {
    name: 'NextJS',
    color: 'bg-purple-600 dark:bg-purple-500',
    width: 'w-2/5',
    textColor: 'text-purple-700 dark:text-purple-500'
  },
  {
    name: 'NodeJS',
    color: 'bg-red-600 dark:bg-red-500',
    width: 'w-1/3',
    textColor: 'text-red-700 dark:text-red-500'
  }
]

export default function Tecnologies() {
  return (
    <section
      id='tecnologies'
      className='max-w-4xl mr-auto ml-auto mt-24  mb-44'
      data-aos='fade-up'
    >
      <span className='flex items-center justify-center gap-2 mb-4'>
        <Image
          src={'/html.png'}
          alt='ícone de tag de código'
          width={30}
          height={30}
        />
        <h2 className='text-4xl text-center'>Tecnologias</h2>
      </span>

      {technologies.map((tech, index) => (
        <div key={index} className='pl-7 pr-7 md:pl-7 md:pr-7 lg:pl-0 lg:pr-0'>
          <div className={`mb-1 text-base font-medium ${tech.textColor}`}>
            {tech.name}
          </div>
          <div className='w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700'>
            <div
              className={`${tech.color} h-2.5 rounded-full ${tech.width}`}
            ></div>
          </div>
        </div>
      ))}
    </section>
  )
}
