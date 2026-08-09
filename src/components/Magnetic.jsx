import { useRef } from 'react'
import gsap from 'gsap'
import useGsapLayout from '../hooks/useGsapLayout'
import { isFinePointer } from '../motion'

export default function Magnetic({ children, strength = 0.35, className = '' }) {
  const ref = useRef(null)

  useGsapLayout(() => {
    const el = ref.current
    if (!el || !isFinePointer()) return
    const xTo = gsap.quickTo(el, 'x', { duration: 0.45, ease: 'power3.out' })
    const yTo = gsap.quickTo(el, 'y', { duration: 0.45, ease: 'power3.out' })
    const enter = (e) => {
      const r = el.getBoundingClientRect()
      xTo((e.clientX - (r.left + r.width / 2)) * strength)
      yTo((e.clientY - (r.top + r.height / 2)) * strength)
    }
    const leave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.8, ease: 'elastic.out(1, 0.4)' })
    }
    el.addEventListener('mousemove', enter)
    el.addEventListener('mouseleave', leave)
    return () => {
      el.removeEventListener('mousemove', enter)
      el.removeEventListener('mouseleave', leave)
    }
  }, { scope: ref })

  return (
    <span ref={ref} className={'inline-block will-change-transform ' + className}>
      {children}
    </span>
  )
}
