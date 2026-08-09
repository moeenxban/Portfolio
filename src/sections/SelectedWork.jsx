import { useRef } from 'react'
import gsap from 'gsap'
import useGsapLayout from '../hooks/useGsapLayout'
import SectionLabel from '../components/SectionLabel'
import { projects } from '../data'
import { prefersReducedMotion } from '../motion'

export default function SelectedWork() {
  const sectionRef = useRef(null)
  const rowRef = useRef(null)
  const reduced = prefersReducedMotion()

  useGsapLayout(
    () => {
      const section = sectionRef.current
      const row = rowRef.current
      if (!section || !row || reduced) return

      const mm = gsap.matchMedia()

      mm.add('(min-width: 1024px) and (pointer: fine)', () => {
        const getDist = () => row.scrollWidth - window.innerWidth
        const tween = gsap.to(row, {
          x: () => -getDist(),
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => '+=' + getDist(),
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })
        return () => {
          tween.scrollTrigger?.kill()
          tween.kill()
        }
      })

      return () => mm.revert()
    },
    { scope: sectionRef }
  )

  return (
    <section id="selected" ref={sectionRef} className="relative px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel
          index="02B · Gallery"
          title="Selected Work"
          detail="Other projects and research builds, from vision to LLM pipelines. Fine pointer + wide screen → the gallery pins and scrubs sideways as you scroll."
        />
      </div>

      <div
        ref={rowRef}
        className={
          'mt-10 flex w-full flex-col gap-8 lg:gap-10 ' +
          (reduced ? '' : 'lg:w-max lg:flex-row lg:pl-[calc((100vw-1400px)/2)] lg:pr-[10vw]')
        }
      >
        {projects.map((project, i) => (
          <article
            key={project.title}
            className={
              'group relative aspect-[4/5] w-full shrink-0 overflow-hidden rounded-3xl border border-line ' +
              (reduced ? '' : 'lg:h-[58vh] lg:w-[34vw] lg:aspect-auto')
            }
            data-cursor
          >
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                  {String(i + 1).padStart(2, '0')} · {project.tag}
                </span>
                {project.url && <span className="text-accent">↗</span>}
              </div>
              <h3 className="mt-2 font-display text-2xl uppercase tracking-tight md:text-3xl">
                {project.title}
              </h3>
              <p className="mt-1 font-mono text-xs text-white/60">{project.subtitle}</p>
            </div>
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="absolute inset-0"
                aria-label={`Open ${project.title}`}
              />
            ) : null}
          </article>
        ))}
      </div>

      <p className="mt-10 hidden text-center font-mono text-[11px] uppercase tracking-[0.3em] text-muted lg:block">
        Scroll, the gallery slides sideways
      </p>
    </section>
  )
}
