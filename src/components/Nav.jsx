import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data'
import { scrollTo } from '../lib/scroll'

function RollLink({ label, index, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative flex items-center gap-3 py-2 text-left"
    >
      <span className="font-mono text-[10px] text-accent/70">{index}</span>
      <span className="roll">
        <span className="roll-inner">
          <span className="text-sm text-fg/80 transition-colors group-hover:text-fg">{label}</span>
          <span className="text-sm text-accent">{label}</span>
        </span>
      </span>
    </button>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (href) => {
    setOpen(false)
    scrollTo(href)
  }

  return (
    <>
      <header
        className={
          'fixed inset-x-0 top-0 z-[100] transition-all duration-500 ' +
          (scrolled ? 'glass' : 'bg-transparent')
        }
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-display text-xl tracking-tight text-fg"
            aria-label="Back to top"
          >
            M<span className="text-accent">.</span>
          </button>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {navLinks.map((link, i) => (
              <RollLink
                key={link.href}
                index={`0${i + 1}`}
                label={link.label}
                onClick={() => go(link.href)}
              />
            ))}
          </nav>

          <button
            type="button"
            className="relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span
              className={
                'h-px w-6 bg-fg transition-transform duration-300 ' +
                (open ? 'translate-y-[3.5px] rotate-45' : '')
              }
            />
            <span
              className={
                'h-px w-6 bg-fg transition-transform duration-300 ' +
                (open ? '-translate-y-[3.5px] -rotate-45' : '')
              }
            />
          </button>
        </div>
      </header>

      <div
        data-lenis-prevent
        className={
          'fixed inset-0 z-[90] flex flex-col justify-center gap-2 bg-bg/95 px-8 backdrop-blur-xl transition-opacity duration-300 md:hidden ' +
          (open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0')
        }
      >
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.35em] text-accent">
          {profile.location}
        </p>
        {navLinks.map((link, i) => (
          <RollLink
            key={link.href}
            index={`0${i + 1}`}
            label={link.label}
            onClick={() => go(link.href)}
          />
        ))}
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 font-display text-2xl text-fg/80 underline decoration-accent/50 underline-offset-4"
        >
          {profile.email}
        </a>
      </div>
    </>
  )
}
