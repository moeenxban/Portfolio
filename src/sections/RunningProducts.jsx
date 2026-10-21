import { useRef } from 'react'
import gsap from 'gsap'
import SectionLabel from '../components/SectionLabel'
import Magnetic from '../components/Magnetic'
import useGsapLayout from '../hooks/useGsapLayout'
import { products } from '../data'
import { scrollTo } from '../lib/scroll'
import { prefersReducedMotion } from '../motion'

export default function RunningProducts() {
  const rootRef = useRef(null)
  const goToRef = useRef(null)
  const reduced = prefersReducedMotion()

  useGsapLayout(
    () => {
      if (reduced) return
      const root = rootRef.current
      if (!root) return
      const slides = root.querySelector('[data-slides]')
      const dots = root.querySelector('[data-dots]')
      const counter = root.querySelector('[data-counter]')
      if (!slides || !dots || !counter) return

      const slideEls = Array.from(slides.children)
      const dotEls = Array.from(dots.children)
      const n = products.length
      if (n === 0) return

      gsap.set(slideEls[0], { opacity: 1, yPercent: 0, scale: 1, pointerEvents: 'auto' })
      slideEls.forEach((s, i) => {
        if (i !== 0) gsap.set(s, { pointerEvents: 'none' })
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: 'top top',
          end: () => '+=' + root.offsetHeight,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const idx = Math.min(n - 1, Math.floor(self.progress * n))
            counter.textContent = String(idx + 1).padStart(2, '0') + ' / ' + String(n).padStart(2, '0')
            for (let d = 0; d < dotEls.length; d += 1) {
              dotEls[d].dataset.active = d === idx ? 'true' : 'false'
            }
            for (let d = 0; d < slideEls.length; d += 1) {
              if (slideEls[d] && slideEls[d].style) {
                slideEls[d].style.pointerEvents = d === idx ? 'auto' : 'none'
              }
            }
          },
        },
      })

      products.forEach((_, i) => {
        const slide = slideEls[i]
        if (!slide) return
        const curtain = slide.querySelector('[data-curtain]')
        if (i === 0) {
          tl.to(
            slide,
            { opacity: 0, yPercent: -6, scale: 1.01, duration: 0.35, ease: 'power2.in' },
            0.8
          )
          return
        }
        tl.fromTo(
          slide,
          { opacity: 0, yPercent: 6, scale: 0.98 },
          { opacity: 1, yPercent: 0, scale: 1, duration: 0.45, ease: 'power2.out' },
          i
        )
        if (curtain) {
          tl.fromTo(
            curtain,
            { clipPath: 'inset(100% 0 0 0)' },
            { clipPath: 'inset(0% 0 0 0)', duration: 0.75, ease: 'power4.inOut' },
            i + 0.1
          )
        }
        tl.to(
          slide,
          { opacity: 0, yPercent: -6, scale: 1.01, duration: 0.35, ease: 'power2.in' },
          i + 0.8
        )
      })

      const goTo = (idx) => {
        const st = tl.scrollTrigger
        const p = n <= 1 ? 0 : idx / (n - 1)
        scrollTo(st.start + p * (st.end - st.start), { offset: 0 })
      }
      goToRef.current = goTo
    },
    { scope: rootRef }
  )

  if (reduced) {
    return (
      <section id="products" className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <SectionLabel index="02 · Products" title="Running Products" />
          <div className="grid gap-10">
            {products.map((product, i) => (
              <article key={product.title} className="grid gap-6 md:grid-cols-12 md:items-center">
                <div className="md:col-span-5">
                  <p className="font-mono text-xs tracking-[0.3em] text-accent">
                    {String(i + 1).padStart(2, '0')} · {product.tag}
                  </p>
                  <h3 className="mt-3 font-display text-3xl uppercase tracking-tight">
                    {product.title}
                  </h3>
                  <p className="mt-2 font-mono text-sm text-muted">{product.subtitle}</p>
                  <p className="mt-4 text-sm leading-relaxed text-fg/70">{product.summary}</p>
                  {product.url ? (
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-mono text-sm font-medium text-[#04120e]"
                    >
                      Visit {product.title} <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <p className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-muted">
                      {product.note}
                    </p>
                  )}
                </div>
                <div className="md:col-span-7">
                  <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    className="aspect-video w-full rounded-2xl border border-line object-cover"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="products" className="relative">
      <div className="px-6 pt-24 md:px-10 md:pt-32">
        <div className="mx-auto max-w-[1400px]">
          <SectionLabel
            index="02 · Products"
            title="Running Products"
            detail="Five builds in the lab and in production. Scroll to fly through each one."
          />
        </div>
      </div>

      <div ref={rootRef} className="relative mt-10 md:mt-16" style={{ height: `calc(${products.length} * var(--pin-slide-vh))` }}>
        <div className="sticky top-0 h-dvh overflow-hidden">
          <div data-slides className="h-full">
            {products.map((product) => (
              <article key={product.title} className="absolute inset-0 px-6 py-10 md:px-10 md:py-16">
                <div className="mx-auto grid h-full max-w-[1400px] items-center gap-8 md:grid-cols-12 md:gap-12">
                  <div className="md:col-span-5">
                    <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                      {product.tag}
                    </span>
                    <h3 className="mt-5 font-display text-[clamp(2.4rem,5vw,4.5rem)] uppercase leading-none tracking-tight">
                      {product.title}
                    </h3>
                    <p className="mt-3 font-mono text-sm text-muted">{product.subtitle}</p>
                    <p className="mt-5 max-w-md text-sm leading-relaxed text-fg/70 md:hidden">
                      {product.summary}
                    </p>
                    <p className="mt-5 hidden max-w-md text-sm leading-relaxed text-fg/70 md:block">
                      {product.summary}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {product.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-fg/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {product.url ? (
                      <Magnetic className="mt-8">
                        <a
                          href={product.url}
                          target="_blank"
                          rel="noreferrer"
                          className="group inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3 font-mono text-sm font-medium text-[#04120e] transition-shadow hover:shadow-[0_0_40px_rgba(53,227,189,0.35)]"
                          data-cursor
                        >
                          <span className="roll">
                            <span className="roll-inner">
                              <span>Visit {product.title}</span>
                              <span>Visit {product.title}</span>
                            </span>
                          </span>
                          <span aria-hidden="true">↗</span>
                        </a>
                      </Magnetic>
                    ) : (
                      <p className="mt-8 font-mono text-xs uppercase tracking-[0.25em] text-muted">
                        {product.note}
                      </p>
                    )}
                  </div>
                  <div className="relative md:col-span-7">
                    <div
                      data-curtain
                      className="overflow-hidden rounded-2xl border border-line"
                      style={{ clipPath: 'inset(0% 0 0 0)' }}
                    >
                      <img
                        src={product.image}
                        alt={product.title}
                        className="aspect-video w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="pointer-events-none absolute -bottom-6 -left-6 -z-10 h-3/4 w-3/4 rounded-full bg-accent/10 blur-3xl" />
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p
            data-counter
            className="absolute left-6 top-6 z-10 font-mono text-xs tracking-[0.3em] text-accent md:left-10 md:top-10"
          >
            01 / {String(products.length).padStart(2, '0')}
          </p>

          <div
            data-dots
            className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3"
          >
            {products.map((product, i) => (
              <button
                key={product.title}
                type="button"
                ref={(el) => {
                  if (el) el.dataset.active = i === 0 ? 'true' : 'false'
                }}
                onClick={() => goToRef.current?.(i)}
                aria-label={`Go to ${product.title}`}
                className="h-1.5 w-1.5 rounded-full bg-fg/25 transition-all duration-300 data-[active=true]:w-8 data-[active=true]:bg-accent"
              />
            ))}
          </div>

          <p className="absolute bottom-6 right-6 hidden font-mono text-[10px] uppercase tracking-[0.3em] text-fg/40 md:block">
            Keep scrolling ↓
          </p>
        </div>
      </div>
    </section>
  )
}
