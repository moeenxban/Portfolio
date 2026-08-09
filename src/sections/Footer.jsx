import { useRef } from 'react'
import gsap from 'gsap'
import useGsapLayout from '../hooks/useGsapLayout'
import { profile } from '../data'

export default function Footer() {
  const ref = useRef(null)

  useGsapLayout(
    () => {
      const chars = ref.current.querySelectorAll('[data-handle-char]')
      const handleEnter = () => {
        gsap.to(chars, {
          yPercent: -45,
          color: '#35e3bd',
          duration: 0.5,
          stagger: 0.025,
          ease: 'power2.out',
          overwrite: 'auto',
        })
      }
      const handleLeave = () => {
        gsap.to(chars, {
          yPercent: 0,
          color: 'rgba(236,233,228,0.15)',
          duration: 0.5,
          stagger: 0.025,
          ease: 'power2.out',
          overwrite: 'auto',
        })
      }
      const el = ref.current.querySelector('[data-handle]')
      el.addEventListener('mouseenter', handleEnter)
      el.addEventListener('mouseleave', handleLeave)
      return () => {
        el.removeEventListener('mouseenter', handleEnter)
        el.removeEventListener('mouseleave', handleLeave)
      }
    },
    { scope: ref }
  )

  return (
    <footer ref={ref} className="relative border-t border-line px-6 pb-10 pt-16 md:px-10 md:pt-24">
      <div className="mx-auto max-w-[1400px]">
        <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-muted">
          Get in touch
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-4 block font-display text-[clamp(1.6rem,5vw,4rem)] tracking-tight text-fg transition-colors hover:text-accent"
        >
          {profile.email}
        </a>

        <div
          data-handle
          className="mt-14 select-none font-display text-[clamp(3rem,12vw,10rem)] uppercase leading-none tracking-tight text-fg/15"
          aria-label={`GitHub handle ${profile.github}`}
        >
          {'@moeenxban'.split('').map((ch, i) => (
            <span key={i} data-handle-char className="inline-block will-change-transform">
              {ch}
            </span>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-line pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-xs leading-relaxed text-muted">
            Peshawar, Pakistan. Or wherever the fields are.
            <br />
            Always learning, always building.
          </p>
          <div className="flex flex-wrap gap-6 font-mono text-xs uppercase tracking-[0.2em] text-fg/60">
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-accent">
              GitHub ↗
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">
              LinkedIn ↗
            </a>
            <a href={profile.resume} download className="hover:text-accent">
              Résumé ↓
            </a>
          </div>
          <p className="font-mono text-xs text-muted">© {new Date().getFullYear()} Moeen Banoori</p>
        </div>
      </div>
    </footer>
  )
}
