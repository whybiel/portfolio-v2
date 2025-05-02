'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Para evitar erro de hidratação
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className='flex flex-col text-violet-400 hover:text-white transition-colors duration-300'
    >
      {theme === 'dark' ? (
        <Image
          src={'/sol.png'}
          alt='Icone de Sol'
          width={24}
          height={24}
          className='cursor-pointer '
        />
      ) : (
        <Image
          src={'/lua.png'}
          alt='Icone de Lua'
          width={24}
          height={24}
          className='cursor-pointer '
        />
      )}
    </button>
  )
}
