import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import SplitText from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import useGsapLayout from '../hooks/useGsapLayout'
import { profile } from '../data'
import { EASE, isFinePointer, prefersReducedMotion } from '../motion'
import { scrollTo } from '../lib/scroll'

gsap.registerPlugin(ScrollTrigger)

function RotatingRole() {
  const [index, setIndex] = useState(0)
  const frameRef = useRef(null)

  useEffect(() => {
    const frame = frameRef.current
    if (!frame) return
    if (prefersReducedMotion()) return
    gsap.set(frame.children, { opacity: 0, yPercent: 110 })
    gsap.to(frame.children[0], {
      opacity: 1,
      yPercent: 0,
      duration: 0.6,
      ease: EASE.expo,
      delay: 0.9,
    })
    if (prefersReducedMotion()) return
    const id = setInterval(() => {
      const cur = frame.children[index]
      const next = (index + 1) % frame.children.length
      const nxt = frame.children[next]
      gsap.to(cur, { yPercent: -110, opacity: 0, duration: 0.35, ease: EASE.soft })
      gsap.fromTo(
        nxt,
        { yPercent: 110, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.45, ease: EASE.expo }
      )
      setIndex(next)
    }, 2200)
    return () => clearInterval(id)
  }, [index])

  return (
    <span
      ref={frameRef}
      className="relative inline-grid h-[1.5em] overflow-hidden text-accent"
      aria-live="off"
    >
      {profile.roles.map((role) => (
        <span
          key={role}
          className="col-start-1 row-start-1 whitespace-nowrap leading-none"
        >
          {role}
        </span>
      ))}
    </span>
  )
}

export default function Hero() {
  const wrapRef = useRef(null)
  const videoRef = useRef(null)
  const overlayRef = useRef(null)
  const titleRef = useRef(null)

  useGsapLayout(
    () => {
      const wrap = wrapRef.current
      const video = videoRef.current
      if (!wrap) return

      const reduced = prefersReducedMotion()
      if (reduced) {
        gsap.set(video, { opacity: 1 })
        return
      }

      const split = new SplitText(titleRef.current, {
        type: 'lines,words',
        linesClass: 'split-line',
      })
      gsap.fromTo(
        split.words,
        { yPercent: 130 },
        { yPercent: 0, duration: 1.3, ease: EASE.expo, stagger: 0.05, delay: 0.25 }
      )
      gsap.fromTo(
        wrap.querySelectorAll('[data-hero-fade]'),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, ease: EASE.out, stagger: 0.09, delay: 0.8 }
      )

      gsap.fromTo(
        video,
        { scale: 1, y: 0 },
        {
          scale: 1.18,
          y: -140,
          ease: 'none',
          scrollTrigger: { trigger: wrap, start: 'top top', end: 'bottom bottom', scrub: 1 },
        }
      )
      gsap.fromTo(
        titleRef.current,
        { y: 0, opacity: 1 },
        {
          y: -120,
          opacity: 0.35,
          ease: 'none',
          scrollTrigger: { trigger: wrap, start: 'top top', end: 'bottom bottom', scrub: 1 },
        }
      )
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0.85 },
        {
          opacity: 0.35,
          ease: 'none',
          scrollTrigger: { trigger: wrap, start: 'top top', end: 'bottom 55%', scrub: 1 },
        }
      )

      let scrubbing = false
      let pausedAt = 0

      const st = ScrollTrigger.create({
        trigger: wrap,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
          if (!isFinePointer() || video.readyState < 1) return
          const p = self.progress
          if (p < 0.15) {
            if (scrubbing) {
              scrubbing = false
              video.currentTime = pausedAt
              video.play().catch(() => {})
            }
          } else if (!scrubbing) {
            scrubbing = true
            video.pause()
            pausedAt = video.currentTime || 0
          }
          if (scrubbing && video.duration) {
            const t = pausedAt + (video.duration - pausedAt) * ((p - 0.15) / 0.85)
            if (!Number.isNaN(t)) video.currentTime = Math.min(t, video.duration)
          }
        },
      })

      return () => {
        st.kill()
        split.revert()
      }
    },
    { scope: wrapRef }
  )

  return (
    <div ref={wrapRef} className="relative h-[260vh]">
      <section className="sticky top-0 h-dvh overflow-hidden">
        <div className="absolute inset-0 bg-bg" />
        <video
          ref={videoRef}
          src={profile.heroVideo}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-bg"
          style={{ opacity: 0.85 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/70" />

        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 md:px-10 md:pb-20">
          <p
            data-hero-fade
            className="mb-6 font-mono text-[11px] uppercase tracking-[0.35em] text-fg/70"
          >
            AI Engineer & Founder · {profile.location}
          </p>

          <div data-hero-fade className="mb-4 md:mb-6">
            <span className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-2 font-mono text-xs text-fg/90">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <RotatingRole />
            </span>
          </div>

          <h1
            ref={titleRef}
            className="font-display text-[clamp(3.5rem,13vw,11rem)] uppercase leading-[0.92] tracking-tight"
          >
            <span className="block">Moeen</span>
            <span className="block">Banoori</span>
          </h1>

          <p
            data-hero-fade
            className="mt-6 max-w-md border-l border-accent/50 pl-4 text-sm leading-relaxed text-fg/70 md:absolute md:bottom-16 md:right-10 md:mt-0 md:max-w-xs md:border-l-0 md:border-r md:text-right"
          >
            {profile.tagline}
          </p>
        </div>

        <button
          type="button"
          data-hero-fade
          onClick={() => scrollTo('#work')}
          className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-bounce font-mono text-[10px] uppercase tracking-[0.3em] text-fg/50"
          aria-label="Scroll to work"
        >
          ↓ Scroll
        </button>
      </section>
    </div>
  )
}
