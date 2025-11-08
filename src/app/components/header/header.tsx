'use client'

import Image from 'next/image';
import { useState } from 'react'
import ThemeToggle from '../theme/theme';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className='border-b-2 border-violet-800 fixed top-0 z-10 bg-gray-950 w-full h-16 shadow-md'>
      <div className='flex justify-between items-center h-full px-4'>
        <Image
          src={'/logo.png'}
          alt='Logo'
          width={100}
          height={100}
          className=''
        />

        <nav className='hidden md:flex items-center gap-6'>
          <MenuLink href='/#' label='Sobre' />
          <MenuLink href='/#experience' label='Experiência' />
          <MenuLink href='/#projects' label='Projetos' />
          <MenuLink href='/#contact' label='Contato' />
          <MenuLink href='/blog' label='Blog' />
        </nav>

        <div className='flex items-center gap-4 '>
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='md:hidden text-violet-400 hover:text-white transition duration-300'
          >
            {menuOpen ? (
              <Image src={'/x.png'} alt='close menu' width={28} height={28} />
            ) : (
              <Image src={'/menu.png'} alt='open menu' width={28} height={28} />
            )}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className='md:hidden flex flex-col items-center gap-4 bg-gray-900 border-t border-violet-800 py-4'>
          <MenuLink href='/#' label='Sobre' />
          <MenuLink href='/#experience' label='Experiência' />
          <MenuLink href='/#projects' label='Projetos' />
          <MenuLink href='/#contact' label='Contato' />
          <MenuLink href='/blog' label='Blog' />
        </nav>
      )}
    </header>
  )
}

function MenuLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-white relative hover:text-violet-400 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-violet-800 after:transition-all after:duration-300"
    >
      {label}
    </Link>
  )
}
