'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function BackBlog() {

  return (
    <Link href='/blog'>
      <span className='max-w-2xs border mb-15 flex items-center rounded-md py-2 px-4 text-center text-2xl transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'>
        <Image
          src={'/seta-direita.png'}
          alt='Voltar para o blog'
          className='rotate-180'
          width={20}
          height={20}
        />
        Blog
      </span>
    </Link>
  )
}
