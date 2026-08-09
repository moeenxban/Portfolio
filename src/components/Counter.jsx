import { useRef } from 'react'
import gsap from 'gsap'
import useGsapLayout from '../hooks/useGsapLayout'
import { EASE, prefersReducedMotion } from '../motion'

export default function Counter({ value, suffix = '', decimals = 0, className = '' }) {
  const ref = useRef(null)

  useGsapLayout(
    () => {
      const el = ref.current
      if (!el) return
      if (prefersReducedMotion()) {
        el.textContent = value.toFixed(decimals) + suffix
        return
      }
      const obj = { v: 0 }
      gsap.to(obj, {
        v: value,
        duration: 1.8,
        ease: EASE.out,
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        onUpdate: () => {
          el.textContent = obj.v.toFixed(decimals) + suffix
        },
      })
    },
    { scope: ref, dependencies: [value, suffix, decimals] }
  )

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  )
}
