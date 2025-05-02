import React from 'react'
import Header from '../components/header/header'
import Image from 'next/image'

export default function Blog() {
  return (
    <div>
      <Header />
      <div className='flex flex-col justify-center align-middle items-center mt-30 mr-auto ml-auto'>
        <Image
          src={'/work.jpg'}
          alt='Work in progress'
          width={250}
          height={250}
        />
        <h2 className='text-5xl mt-10 font-bold text-violet-600'>Work in progress...</h2>
      </div>
    </div>
  )
}
