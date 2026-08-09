import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { setLenis } from './lib/scroll'
import Cursor from './components/Cursor'
import Progress from './components/Progress'
import Nav from './components/Nav'
import Hero from './sections/Hero'
import Work from './sections/Work'
import RunningProducts from './sections/RunningProducts'
import Awards from './sections/Awards'
import SelectedWork from './sections/SelectedWork'
import Research from './sections/Research'
import About from './sections/About'
import Journey from './sections/Journey'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true })
    setLenis(lenis)
    lenis.on('scroll', ScrollTrigger.update)

    const raf = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('load', refresh)
    const t = setTimeout(refresh, 1200)

    return () => {
      clearTimeout(t)
      window.removeEventListener('load', refresh)
      gsap.ticker.remove(raf)
      lenis.destroy()
      setLenis(null)
    }
  }, [])

  return (
    <div className="relative min-h-screen">
      <div className="aurora" aria-hidden="true" />
      <Progress />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Work />
        <RunningProducts />
        <Awards />
        <SelectedWork />
        <Research />
        <About />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
