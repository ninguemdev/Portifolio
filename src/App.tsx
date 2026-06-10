import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Sobre from './components/sections/Sobre'
import Skills from './components/sections/Skills'
import Projetos from './components/sections/Projetos'

/**
 * Landing page única. Landmarks semânticos: <header> (nav fixa), <main> com o
 * hero e as seções, e <footer> (#contato). O fundo ambiente fica atrás de tudo.
 */
function App() {
  return (
    <>
      <div className="ambient" aria-hidden="true" />

      <a
        href="#sobre"
        className="bg-accent text-accent-contrast sr-only z-[100] rounded-md px-4 py-2 font-mono text-sm focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Pular para o conteúdo
      </a>

      <Header />

      <main>
        <Hero />
        <Sobre />
        <Skills />
        <Projetos />
      </main>

      <Footer />
    </>
  )
}

export default App
