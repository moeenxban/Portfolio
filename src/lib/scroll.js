let lenis = null

export const setLenis = (l) => {
  lenis = l
}

export const getLenis = () => lenis

export const scrollTo = (target, opts = {}) => {
  if (lenis) {
    lenis.scrollTo(target, { offset: -72, duration: 1.4, ...opts })
  } else if (typeof target === 'string') {
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
  }
}
