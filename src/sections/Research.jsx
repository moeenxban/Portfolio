import { useRef } from 'react'
import gsap from 'gsap'
import useGsapLayout from '../hooks/useGsapLayout'
import SectionLabel from '../components/SectionLabel'
import { research } from '../data'
import { EASE } from '../motion'

export default function Research() {
  const ref = useRef(null)

  useGsapLayout(
    () => {
      const cards = ref.current.querySelectorAll('[data-research-card]')
      gsap.fromTo(
        cards,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: EASE.out,
          stagger: 0.15,
          scrollTrigger: { trigger: ref.current, start: 'top 70%', once: true },
        }
      )
    },
    { scope: ref }
  )

  return (
    <section ref={ref} className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel
          index="03 · Research"
          title="Published Work"
          detail="Peer reviewed papers in the International Journal of Innovations in Science & Technology."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {research.map((paper, i) => (
            <article
              key={paper.title}
              data-research-card
              className="flex flex-col justify-between rounded-2xl border border-line bg-card p-7 transition-colors duration-300 hover:border-accent/40"
            >
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                  Paper 0{i + 1}
                </p>
                <h3 className="mt-4 font-display text-2xl leading-tight tracking-tight text-fg/90">
                  {paper.title}
                </h3>
                <p className="mt-3 font-mono text-[11px] leading-relaxed text-muted">{paper.venue}</p>
                <p className="mt-4 text-sm leading-relaxed text-fg/60">{paper.summary}</p>
              </div>
              {paper.url ? (
                <a
                  href={paper.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-accent"
                >
                  Read paper <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <p className="mt-6 font-mono text-sm text-accent/70">In progress</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
