import { useRef } from 'react'
import gsap from 'gsap'
import useGsapLayout from '../hooks/useGsapLayout'
import { isFinePointer } from '../motion'

export default function Cursor() {
  const rootRef = useRef(null)

  useGsapLayout(() => {
    const root = rootRef.current
    if (!root || !isFinePointer()) return

    const dot = root.querySelector('[data-cursor-dot]')
    const ring = root.querySelector('[data-cursor-ring]')
    const dotX = gsap.quickTo(dot, 'x', { duration: 0.12, ease: 'power3.out' })
    const dotY = gsap.quickTo(dot, 'y', { duration: 0.12, ease: 'power3.out' })
    const ringX = gsap.quickTo(ring, 'x', { duration: 0.4, ease: 'power3.out' })
    const ringY = gsap.quickTo(ring, 'y', { duration: 0.4, ease: 'power3.out' })

    const move = (e) => {
      dotX(e.clientX)
      dotY(e.clientY)
      ringX(e.clientX)
      ringY(e.clientY)
    }
    const over = (e) => {
      const interactive = e.target.closest('a, button, [data-cursor]')
      gsap.to(ring, {
        scale: interactive ? 1.9 : 1,
        opacity: interactive ? 0.4 : 1,
        duration: 0.3,
        ease: 'power2.out',
      })
      gsap.to(dot, { scale: interactive ? 0.5 : 1, duration: 0.3 })
    }
    window.addEventListener('mousemove', move, { passive: true })
    window.addEventListener('mouseover', over, { passive: true })
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
    }
  }, { scope: rootRef })

  return (
    <div
      ref={rootRef}
      className="pointer-events-none fixed left-0 top-0 z-[240] hidden pointer-fine:block"
      aria-hidden="true"
    >
      <div
        data-cursor-dot
        className="absolute -ml-[4px] -mt-[4px] h-2 w-2 rounded-full bg-accent"
      />
      <div
        data-cursor-ring
        className="absolute -ml-[14px] -mt-[14px] h-7 w-7 rounded-full border border-accent/70"
      />
    </div>
  )
}
