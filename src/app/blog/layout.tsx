import React from 'react'
import Header from '../components/header/header'

export default function BlogLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Header />
      <main className='max-w-4xl mt-30 m-auto'>
        {children}
      </main>
    </div>
  )
}
