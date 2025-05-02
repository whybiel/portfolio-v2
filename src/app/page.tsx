// page.tsx
import 'aos/dist/aos.css'

import Header from './components/header/header'
import About from './components/sections/about/about'
import Contacts from './components/sections/contacts/contacts'
import Experience from './components/sections/experience/experience'
import Tecnologies from './components/sections/tecnologies/tecnologies'
import AOSInitializer from './components/AOS/aosInitialazer'
import Footer from './components/footer/footer'

export default function Home() {

  return (
    <div>
      <Header />
      <main className='mt-16'>
        <AOSInitializer />
        <About />
        <Tecnologies />
        <Experience />
        <Contacts />
      </main>
      <Footer/>
    </div>
  )
}
