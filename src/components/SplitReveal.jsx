import { useRef } from 'react'
import gsap from 'gsap'
import SplitText from 'gsap/SplitText'
import useGsapLayout from '../hooks/useGsapLayout'
import { EASE, prefersReducedMotion } from '../motion'

export default function SplitReveal({
  children,
  as: Tag = 'h2',
  className = '',
  delay = 0,
  start = 'top 85%',
  stagger = 0.08,
}) {
  const ref = useRef(null)

  useGsapLayout(
    () => {
      const el = ref.current
      if (!el || prefersReducedMotion()) return
      const split = new SplitText(el, { type: 'lines,words', linesClass: 'split-line' })
      gsap.fromTo(
        split.words,
        { yPercent: 120 },
        {
          yPercent: 0,
          duration: 1.1,
          ease: EASE.out,
          stagger,
          delay,
          scrollTrigger: { trigger: el, start, once: true },
        }
      )
      return () => split.revert()
    },
    { scope: ref, dependencies: [children, delay, start, stagger] }
  )

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}
