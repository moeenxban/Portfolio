import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import useGsapLayout from '../hooks/useGsapLayout'

export default function Progress() {
  const topRef = useRef(null)
  const sideRef = useRef(null)

  useGsapLayout(() => {
    const pageEnd = () => ScrollTrigger.maxScroll(window)
    gsap.to(topRef.current, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: { start: 0, end: pageEnd, scrub: 0.3, invalidateOnRefresh: true },
    })
    gsap.to(sideRef.current, {
      scaleY: 1,
      ease: 'none',
      scrollTrigger: { start: 0, end: pageEnd, scrub: 0.3, invalidateOnRefresh: true },
    })
  })

  return (
    <>
      <div
        ref={topRef}
        className="fixed inset-x-0 top-0 z-[110] h-[3px] origin-left scale-x-0 bg-gradient-to-r from-accent/70 to-accent/30"
        aria-hidden="true"
      />
      <div
        ref={sideRef}
        className="fixed left-6 top-0 z-[110] hidden h-screen w-px origin-top scale-y-0 bg-gradient-to-b from-accent to-transparent lg:block"
        aria-hidden="true"
      />
    </>
  )
}
