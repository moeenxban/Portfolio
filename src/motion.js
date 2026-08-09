import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const EASE = {
  out: 'power4.out',
  expo: 'expo.out',
  none: 'none',
  soft: 'power2.out',
}

export const DURATION = 1.1
export const STAGGER = 0.12

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const isFinePointer = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(pointer: fine)').matches

export const BREAKPOINT = {
  desktop: 1024,
}

export const smooth = (vars) => ({
  ease: EASE.none,
  scrollTrigger: {
    scrub: 1,
    anticipatePin: 1,
    invalidateOnRefresh: true,
    ...vars,
  },
})

export const killSectionTriggers = (container) => {
  if (!container) return
  ScrollTrigger.getAll().forEach((st) => {
    if (container.contains(st.trigger)) st.kill()
  })
}
