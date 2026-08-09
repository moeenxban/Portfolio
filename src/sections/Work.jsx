import { useRef } from 'react'
import gsap from 'gsap'
import SplitText from 'gsap/SplitText'
import useGsapLayout from '../hooks/useGsapLayout'
import SectionLabel from '../components/SectionLabel'
import Marquee from '../components/Marquee'
import { mediaFeatures, skills } from '../data'
import { EASE, prefersReducedMotion } from '../motion'

export default function Work() {
  const ref = useRef(null)

  useGsapLayout(
    () => {
      const el = ref.current
      if (!el || prefersReducedMotion()) return
      const split = new SplitText(el.querySelector('[data-statement]'), {
        type: 'words',
      })
      gsap.fromTo(
        split.words,
        { yPercent: 100, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.9,
          ease: EASE.out,
          stagger: 0.03,
          scrollTrigger: { trigger: el, start: 'top 70%', once: true },
        }
      )
      return () => split.revert()
    },
    { scope: ref }
  )

  const marqueeItems = [
    ...mediaFeatures.map((f) => f.outlet),
    ...skills.flatMap((s) => s.items),
  ]

  return (
    <section
      id="work"
      ref={ref}
      className="relative z-20 -mt-[18vh] rounded-t-[2.5rem] bg-bg px-6 pb-24 pt-20 shadow-[0_-40px_80px_rgba(0,0,0,0.55)] md:-mt-[24vh] md:rounded-t-[4rem] md:px-10 md:pb-32 md:pt-28"
    >
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel
          index="01 · Work"
          title="What I Do"
          detail="Agentic AI, RAG and computer vision. Shipped to real institutions, published in peer reviewed journals."
        />

        <p
          data-statement
          className="max-w-4xl font-display text-[clamp(1.6rem,4vw,3.2rem)] leading-[1.15] tracking-tight text-fg/90"
        >
          I turn research into deployed AI products: agentic systems, offline RAG
          pipelines, and vision tools that run where they&apos;re needed most. And I&apos;m
          chasing the dream every coder has, the farm life.
        </p>

        <Marquee items={marqueeItems} className="mt-16 md:mt-24" />
      </div>
    </section>
  )
}
