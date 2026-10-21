import { useRef } from 'react'
import gsap from 'gsap'
import useGsapLayout from '../hooks/useGsapLayout'
import Magnetic from '../components/Magnetic'
import { profile } from '../data'
import { prefersReducedMotion } from '../motion'

export default function Contact() {
  const ref = useRef(null)

  useGsapLayout(
    () => {
      const el = ref.current
      if (!el || prefersReducedMotion()) return
      gsap.fromTo(
        el.querySelector('[data-giant-headline]'),
        { scale: 0.86, opacity: 0.5 },
        {
          scale: 1,
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 80%', end: 'top 30%', scrub: 1 },
        }
      )
    },
    { scope: ref }
  )

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden px-6 py-28 md:px-10 md:py-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[60vh] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1400px] text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-accent">
          06 · Contact
        </p>

        <h2
          data-giant-headline
          className="mx-auto mt-6 max-w-5xl font-display text-[clamp(3rem,9vw,8rem)] uppercase leading-[0.95] tracking-tight"
        >
          Let&apos;s build
          <br />
          <span className="text-outline">something</span>
        </h2>

        <p className="mx-auto mt-8 max-w-md text-sm leading-relaxed text-fg/70">
          ...and maybe retire to the farm together. Through FAYSA AI I take on agentic AI, RAG
          and computer vision builds, remote or in Pakistan.
        </p>

        <Magnetic strength={0.4} className="mt-12">
          <a
            href={`mailto:${profile.email}?subject=Let's%20build%20something`}
            className="group inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 font-mono text-sm font-medium text-[#04120e] transition-shadow hover:shadow-[0_0_60px_rgba(53,227,189,0.4)]"
            data-cursor
          >
            <span className="roll">
              <span className="roll-inner">
                <span>Tell me about it</span>
                <span>Tell me about it</span>
              </span>
            </span>
            <span aria-hidden="true">→</span>
          </a>
        </Magnetic>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">
          <a href={`mailto:${profile.email}`} className="hover:text-accent">
            {profile.email}
          </a>
          <span className="hidden text-line md:inline">|</span>
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-accent">
            GitHub
          </a>
          <span className="hidden text-line md:inline">|</span>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">
            LinkedIn
          </a>
          <span className="hidden text-line md:inline">|</span>
          <a href={profile.resume} download className="hover:text-accent">
            Résumé ↓
          </a>
        </div>
      </div>
    </section>
  )
}
