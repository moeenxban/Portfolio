import { useRef } from 'react'
import gsap from 'gsap'
import useGsapLayout from '../hooks/useGsapLayout'
import SectionLabel from '../components/SectionLabel'
import { journey } from '../data'
import { EASE, prefersReducedMotion } from '../motion'

export default function Journey() {
  const ref = useRef(null)

  useGsapLayout(
    () => {
      const el = ref.current
      if (!el || prefersReducedMotion()) return

      gsap.fromTo(
        el.querySelector('[data-timeline-line]'),
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: el.querySelector('[data-timeline]'),
            start: 'top 75%',
            end: 'bottom 70%',
            scrub: 1,
          },
        }
      )

      gsap.fromTo(
        el.querySelectorAll('[data-journey-item]'),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: EASE.out,
          stagger: 0.12,
          scrollTrigger: { trigger: el, start: 'top 65%', once: true },
        }
      )
    },
    { scope: ref }
  )

  return (
    <section id="journey" ref={ref} className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel
          index="05 · Journey"
          title="The Path"
          detail="From UET to agentic AI in production."
        />

        <div data-timeline className="relative pl-8 md:pl-12">
          <div className="absolute bottom-0 left-[7px] top-0 w-px bg-line md:left-[11px]" />
          <div
            data-timeline-line
            className="absolute bottom-0 left-[7px] top-0 w-px origin-top bg-accent md:left-[11px]"
          />

          <ol className="space-y-14">
            {journey.map((entry) => (
              <li key={entry.org} data-journey-item className="relative">
                <span className="absolute -left-8 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-accent bg-bg md:-left-12" />
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="font-display text-2xl tracking-tight text-fg/90 md:text-3xl">
                      {entry.role}
                    </h3>
                    <p className="mt-1 font-mono text-sm text-accent">{entry.org}</p>
                  </div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                    {entry.period}
                  </p>
                </div>
                <ul className="mt-4 grid gap-2 text-sm leading-relaxed text-fg/60">
                  {entry.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                      {point}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
