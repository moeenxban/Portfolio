import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

export default function useGsapLayout(callback, { scope, dependencies = [] } = {}) {
  const ownRef = useRef(null)
  const scopeRef = scope ?? ownRef

  useLayoutEffect(() => {
    let cleanup
    const el = scopeRef.current ?? undefined
    const ctx = gsap.context(() => {
      cleanup = callback()
    }, el)
    return () => {
      if (typeof cleanup === 'function') cleanup()
      ctx.revert()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies)

  return scopeRef
}
