import Image from "next/image";
import Link from "next/link";

export default function Contacts() {
  return (
    <section id='contact' className='max-w-4xl mr-auto ml-auto mt-24 mb-40 '>
      <span className='flex items-center justify-center gap-2 mb-4'>
        <Image
          src={'/contatos.png'}
          alt='ícone de contatos'
          width={30}
          height={30}
        />
        <h2 className='text-4xl text-center'>Contatos</h2>
      </span>
      <div className='grid grid-cols-1 gap-12 justify-center md:grid-cols-2 md:gap-4 lg:grid-cols-4'>
        <Link
          href='mailto:gabrimoraes2004@gmail.com'
          target='_blank'
          className='flex flex-col items-center justify-center mt-8 gap-4 hover:scale-110 transition-transform duration-300 ease-in-out'
        >
          <div className='bg-gray-700 h-14 w-14 rounded-full flex items-center justify-center'>
            <Image
              src={'/email.png'}
              alt='ícone de email'
              width={40}
              height={40}
            />
          </div>
          <p className='text-2xl'>E-mail</p>
          <p className='font-light'>
            gabrimoraes2004@gmail.com
          </p>
        </Link>
        <Link
          href='https://www.linkedin.com/in/moraes-gabriel/'
          target='_blank'
          className='flex flex-col items-center justify-center mt-8 gap-4 hover:scale-110 transition-transform duration-300 ease-in-out'
        >
          <div className='bg-gray-700 h-14 w-14 rounded-full flex items-center justify-center'>
            <Image
              src={'/linkedin.png'}
              alt='ícone de linkedin'
              width={35}
              height={35}
            />
          </div>
          <p className='text-2xl'>Linkedin</p>
          <p className='font-light text-color-gray-400'>@moraes-gabriel</p>
        </Link>
        <Link
          href='https://wa.me/5521935010371?text=Olá,%20tudo%20bem?'
          target='_blank'
          className='flex flex-col items-center justify-center mt-8 gap-4 hover:scale-110 transition-transform duration-300 ease-in-out'
        >
          <div className='bg-gray-700 h-14 w-14 rounded-full flex items-center justify-center'>
            <Image
              src={'/telefone.png'}
              alt='ícone de telefone'
              width={35}
              height={35}
            />
          </div>
          <p className='text-2xl'>Telefone</p>
          <p className='font-light text-color-gray-400'>(21) 93501-0371</p>
        </Link>
        <Link
          href='https://github.com/whybiel'
          target='_blank'
          className='flex flex-col items-center justify-center mt-8 gap-4 hover:scale-110 transition-transform duration-300 ease-in-out'
        >
          <div className='bg-gray-700 h-14 w-14 rounded-full flex items-center justify-center'>
            <Image
              src={'/github.png'}
              alt='ícone de github'
              width={35}
              height={35}
            />
          </div>
          <p className='text-2xl'>Github</p>
          <p className='font-light text-color-gray-400'>@whybiel</p>
        </Link>
      </div>
    </section>
  )
}