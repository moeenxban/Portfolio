import { useRef } from 'react'
import gsap from 'gsap'
import useGsapLayout from '../hooks/useGsapLayout'
import SectionLabel from '../components/SectionLabel'
import { certifications, mediaFeatures } from '../data'
import { EASE } from '../motion'

const highlights = [
  {
    label: 'Peer Reviewed Research',
    value: '2 papers',
    detail: 'Published in IJIST, covering generative AI for speech therapy and Sentinel-2 crop classification.',
  },
  {
    label: 'Model Accuracy',
    value: '97.3%',
    detail: 'Breast cancer detection network, a CNN architecture trained on real medical data.',
  },
  {
    label: 'Data Analyzed',
    value: '260K+',
    detail: 'BTC/USDT candles backtested with an engine that refuses to peek at the future.',
  },
  {
    label: 'Live Deployments',
    value: '2 schools',
    detail: 'Fauji Foundation School and Edwardes College, running AI systems on site.',
  },
]

export default function Awards() {
  const ref = useRef(null)

  useGsapLayout(
    () => {
      const cards = ref.current.querySelectorAll('[data-award-card]')
      gsap.fromTo(
        cards,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: EASE.out,
          stagger: 0.12,
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
          index="02A · Recognition"
          title="Awards & Recognition"
          detail="Featured in the press, certified by Anthropic, DeepLearning.AI and IBM, with research and live deployments to back it up."
        />

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <div key={h.label} data-award-card className="bg-bg p-6 md:p-7">
              <p className="font-display text-3xl text-accent md:text-4xl">{h.value}</p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                {h.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-fg/60">{h.detail}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-16 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
          Press & Media
        </h3>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {mediaFeatures.map((f) => (
            <a
              key={f.outlet}
              href={f.url}
              target="_blank"
              rel="noreferrer"
              data-award-card
              data-cursor
              className="group flex flex-col justify-between gap-4 rounded-2xl border border-line bg-card p-6 transition-colors duration-300 hover:border-accent/40"
            >
              <div>
                <p className="font-display text-2xl leading-tight tracking-tight text-fg/90">
                  {f.outlet}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-fg/60">{f.label}</p>
              </div>
              <span className="inline-flex items-center gap-2 font-mono text-sm text-accent">
                Watch feature <span aria-hidden="true">↗</span>
              </span>
            </a>
          ))}
        </div>

        <h3 className="mt-16 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
          Certifications
        </h3>
        <ul className="mt-4 grid gap-2 font-mono text-xs text-fg/70 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <li
              key={cert}
              data-award-card
              className="flex items-start gap-2 rounded-lg border border-line bg-card px-4 py-3"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {cert}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
