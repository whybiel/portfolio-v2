import Image from 'next/image'

type ExperienceItem = {
  cargo: string
  periodo: string
  responsabilidades: string[]
}

const experiences: ExperienceItem[] = [
  {
    cargo: 'Desenvolvedor Front-End Pleno | Dadoteca',
    periodo: 'ago 2025 - momento',
    responsabilidades: [
      'Liderou o desenvolvimento Front-End em produtos internos, implementando dashboards interativos, chats em tempo real e autenticação com JWT.',
      'Otimizou a performance de aplicações com code splitting e lazy loading, reduzindo o tempo de carregamento e aumentando a responsividade.',
      'Implementou testes automatizados com Cypress e realizou análises de SEO em sites legados, aprimorando a visibilidade e a manutenção.',
      'Conduziu refatorações de projetos em HTML para ReactJS, padronizando código e melhorando a escalabilidade.',
      'Ofereceu mentoria sobre ReactJS para colaboradores de Power Apps, promovendo o desenvolvimento técnico da equipe.',
      'Tecnologias: ReactJS, TypeScript, Cypress, JWT, TailwindCSS, SEO, Vite, APIs REST, React Hook Form, Zod'
    ]
  },
  {
    cargo: 'Desenvolvedor Front-End Pleno | 1STi',
    periodo: 'ago 2024 - jul 2025',
    responsabilidades: [
      'Foco na solidificação das minhas habilidades técnicas e interpessoais, aprimorando minha comunicação e domínio das linguagens utilizadas no dia a dia.',
      'Contribuo para a criação de componentes de formulário integrados com React Hook Form e Zod, otimizando a eficiência do produto e eliminando validações manuais repetitivas.',
      'Auxilio na integração de desenvolvedores juniores ao produto, apresentando a história, estrutura do código e boas práticas para manter um alto padrão de qualidade.',
      'Tecnologias utilizadas: JavaScript, ReactJS, Cypress, Zustand, TypeScript, Azure DevOps'
    ]
  },
  {
    cargo: 'Desenvolvedor Front-End Jnr. II | 1STi',
    periodo: 'set 2023 - ago 2024',
    responsabilidades: [
      'Me aprofundei no desenvolvimento de formulários web, propondo e implementando melhorias para o time.',
      'Contribuí para a refatoração de código usando TypeScript para minimizar bugs e aumentar a segurança, além de ajudar na criação de testes automatizados com Cypress e validações com Zod.',
      'Customizei diversos componentes de um Design System para atender a necessidades específicas, como tooltips, inputs, selects e calendários.',
      'Tecnologias utilizadas: JavaScript, ReactJS, Cypress, Redux, TypeScript, Azure DevOps.'
    ]
  },
  {
    cargo: 'Desenvolvedor Front-End Jnr. I | 1STi',
    periodo: 'jul 2022 - set 2023',
    responsabilidades: [
      'Participei da criação de um projeto para o Centro Cirúrgico de um hospital de referência na América Latina.',
      'Colaborei na criação de formulários com validações personalizadas, integrações com APIs e adaptação de Design Systems.',
      'Tecnologias utilizadas: JavaScript, ReactJS, Styled Components, Redux.'
    ]
  }
  
]

export default function Experience() {
  return (
    <section
      id='experience'
      className='max-w-4xl mx-auto mt-24 min-h-dvh'
      data-aos='fade-up'
    >
      <span className='flex items-center justify-center gap-2 mb-4'>
        <Image
          src={'/timeline.png'}
          alt='ícone de timeline'
          width={30}
          height={30}
        />
        <h2 className='text-4xl text-center'>Experiências</h2>
      </span>

      <section className='md:pl-7 lg:pl-0'>
        <div className='container max-w-5xl py-12 mx-auto'>
          <div className='grid gap-4 sm:grid-cols-12'>
            <div className='relative col-span-12 px-4 space-y-6 sm:col-span-9'>
              <div className='col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300'>
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className='flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600'
                  >
                    <h3 className='text-xl font-semibold tracking-wide'>
                      {exp.cargo}
                    </h3>
                    <time className='text-xs tracking-wide uppercase text-violet-600'>
                      {exp.periodo}
                    </time>
                    <ul className='mt-3 list-disc list-inside'>
                      {exp.responsabilidades.map((item, i) => (
                        <li
                          key={i}
                          className={`font-light ${i > 0 ? 'mt-4' : ''}`}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
