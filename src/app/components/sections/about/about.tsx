// import Button from "../../button/buttons";
import Image from 'next/image'
import Link from 'next/link'

export default function About() {

  return (
    <section
      id='about'
      className='relative min-h-dvh max-w-4xl mr-auto ml-auto mt-32'
      data-aos='fade-up'
    >
      <div className='grid sm:grid-cols-[20fr_1fr] sm:gap-4 sm:p-4'>
        <div className='grid sm:grid-cols-[1fr_2fr] sm:gap-4 '>
          <Image
            src={'/eu.jpg'}
            alt='foto de perfil de gabriel moraes'
            width={280}
            height={280}
            className='ml-auto mr-auto sm:mr-0 sm:ml-0 rounded-full border-4 border-violet-800'
          />
          <aside className='ml-8 mt-4'>
            <h1 className='text-5xl '>
              Olá, sou o <br />
              <b className='text-violet-800 font-bold'>Gabriel Moraes</b>
            </h1>

            <p className='font-light mt-3.5 mb-3.5'>Desenvolvedor Front-End</p>
            <p className='font-light'>Rio de Janeiro, Brasil</p>
          </aside>
        </div>
        <div className='mt-16 mr-auto ml-auto grid grid-cols-3 gap-17 w-auto sm:mr-0 sm:ml-0 sm:grid-cols-1 sm:gap-3 sm:mt-8'>
          <Link
            href='https://www.linkedin.com/in/moraes-gabriel/'
            target='_blank'
          >
            <Image
              src={'/linkedin.png'}
              alt='icone linkedin'
              width={40}
              height={40}
            />
          </Link>
          <Link href='mailto:gabrimoraes2004@gmail.com' target='_blank'>
            <Image
              src={'/google.png'}
              alt='icone linkedin'
              width={40}
              height={40}
            />
          </Link>
          <Link
            href='https://wa.me/5521935010371?text=Olá,%20tudo%20bem?'
            target='_blank'
          >
            <Image
              src={'/whatsapp.png'}
              alt='icone linkedin'
              width={40}
              height={40}
            />
          </Link>
        </div>
      </div>
      <div className='mt-24 pl-7 pr-7 md:pl-7 md:pr-7 lg:pl-0 lg:pr-0'>
        <span className='flex items-center justify-center gap-2 mb-4'>
          <Image src={'/me.png'} alt='tags de código' width={30} height={30} />
          <h2 className='text-4xl text-center'>Sobre Mim</h2>
        </span>
        <p className='text-justify'>
          Sou Gabriel Henrique, desenvolvedor Front-end com mais de 2 anos de
          experiência, apaixonado por criar interfaces modernas, acessíveis e
          funcionais. Atualmente, atuo como Desenvolvedor Pleno na 1STi, onde
          contribuo para o desenvolvimento de soluções web voltadas à área da
          saúde, utilizando ReactJS, TypeScript, Cypress e outras tecnologias
          modernas.
        </p>
        <p className='mt-4 text-justify'>
          Tenho experiência sólida em arquitetura Front-end, construção de
          componentes reutilizáveis e testes automatizados. Prezo por código
          limpo, boas práticas e colaboração entre times. Também valorizo o
          aprendizado contínuo, buscando constantemente aprimorar tanto minhas
          habilidades técnicas quanto interpessoais.
        </p>
      </div>
    </section>
  )
}
