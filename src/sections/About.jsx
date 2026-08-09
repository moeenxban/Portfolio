import { useRef } from 'react'
import gsap from 'gsap'
import SplitText from 'gsap/SplitText'
import useGsapLayout from '../hooks/useGsapLayout'
import SectionLabel from '../components/SectionLabel'
import Counter from '../components/Counter'
import { certifications, profile, skills, stats } from '../data'
import { EASE, prefersReducedMotion } from '../motion'

export default function About() {
  const ref = useRef(null)

  useGsapLayout(
    () => {
      const el = ref.current
      if (!el) return
      if (prefersReducedMotion()) return

      gsap.set(el.querySelector('[data-portrait]'), { clipPath: 'inset(100% 0 0 0)' })
      gsap.fromTo(
        el.querySelector('[data-portrait]'),
        { clipPath: 'inset(100% 0 0 0)' },
        {
          clipPath: 'inset(0% 0 0 0)',
          duration: 1.3,
          ease: 'power4.inOut',
          scrollTrigger: { trigger: el, start: 'top 70%', once: true },
        }
      )

      const split = new SplitText(el.querySelector('[data-bio]'), { type: 'words' })
      gsap.fromTo(
        split.words,
        { yPercent: 40, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.7,
          ease: EASE.out,
          stagger: 0.02,
          scrollTrigger: { trigger: el, start: 'top 60%', once: true },
        }
      )
      return () => split.revert()
    },
    { scope: ref }
  )

  return (
    <section id="about" ref={ref} className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel
          index="04 · About"
          title="The Engineer"
          detail="Research born, product driven. Peshawar, Pakistan."
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div
              data-portrait
              className="overflow-hidden rounded-3xl border border-line"
            >
              <img
                src={profile.photo}
                alt={profile.fullName}
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </div>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.3em] text-muted">
              {profile.location} · {profile.email}
            </p>
          </div>

          <div className="lg:col-span-7">
            <p
              data-bio
              className="font-display text-[clamp(1.4rem,3vw,2.3rem)] leading-[1.25] tracking-tight text-fg/90"
            >
              AI Engineer and published researcher specializing in agentic AI, RAG and computer
              vision. I take ideas from research and prototyping through to deployed products:
              memory enabled agents and offline RAG pipelines that run without paid LLM APIs,
              built for resource constrained institutions. Delivered AI systems for Fauji Foundation
              School and Edwardes College, and published research spanning generative AI for speech
              therapy and Sentinel-2 crop classification.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-bg p-6">
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals ?? 0}
                    className="font-display text-4xl text-accent md:text-5xl"
                  />
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {skills.map((group) => (
                <div key={group.group} className="border-l border-line pl-5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
                    {group.group}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-fg/70"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
                Certifications
              </p>
              <ul className="mt-4 grid gap-2 font-mono text-xs text-fg/70 sm:grid-cols-2">
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
