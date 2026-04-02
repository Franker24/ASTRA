import { useEffect, useRef, useState } from 'react'
import { animated, useSpring } from '@react-spring/web'

export function CosmicStatsPanel() {
  const rootRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    const ob = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true)
      },
      { rootMargin: '-12% 0px', threshold: 0.2 }
    )
    ob.observe(el)
    return () => ob.disconnect()
  }, [])

  const frame = useSpring({
    opacity: inView ? 1 : 0,
    y: inView ? 0 : 24,
    config: { mass: 0.85, tension: 200, friction: 28 },
  })

  const statA = useSpring({
    opacity: inView ? 1 : 0,
    x: inView ? 0 : -12,
    config: { mass: 0.7, tension: 240, friction: 28 },
    delay: inView ? 100 : 0,
  })

  const statB = useSpring({
    opacity: inView ? 1 : 0,
    x: inView ? 0 : -12,
    config: { mass: 0.7, tension: 240, friction: 28 },
    delay: inView ? 240 : 0,
  })

  const ageN = useSpring({
    val: inView ? 13.8 : 0,
    from: { val: 0 },
    config: { mass: 1, tension: 36, friction: 22 },
    delay: inView ? 160 : 0,
  })

  const lyN = useSpring({
    val: inView ? 93 : 0,
    from: { val: 0 },
    config: { mass: 1, tension: 36, friction: 22 },
    delay: inView ? 300 : 0,
  })

  const divider = useSpring({
    scaleX: inView ? 1 : 0,
    config: { mass: 0.55, tension: 180, friction: 26 },
    delay: inView ? 180 : 0,
  })

  return (
    <div
      ref={rootRef}
      className="border-tertiary/10 from-tertiary-container/30 relative flex flex-col justify-center overflow-hidden rounded-xl border bg-gradient-to-br via-[#131317]/90 to-surface-container p-8 shadow-[inset_0_1px_0_0_rgba(0,218,243,0.06)] backdrop-blur-sm md:col-span-5"
    >
      <div
        className="pointer-events-none absolute -top-12 right-0 h-40 w-40 rounded-full bg-tertiary/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-16 -left-8 h-44 w-44 rounded-full bg-primary/10 blur-3xl"
        aria-hidden
      />

      <animated.div style={frame} className="relative flex flex-col justify-center space-y-10">
        <animated.div style={statA} className="relative pl-5">
          <span
            className="bg-primary/40 absolute top-1/2 left-0 h-14 w-0.5 -translate-y-1/2 rounded-full shadow-[0_0_14px_rgba(0,218,243,0.45)]"
            aria-hidden
          />
          <div className="font-headline flex flex-wrap items-baseline gap-x-2 gap-y-1 leading-none">
            <span className="from-tertiary via-[#a855f7] to-primary bg-gradient-to-r bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
              <animated.span className="tabular-nums">
                {ageN.val.to((v) => (v < 0.08 ? '0.0' : v.toFixed(1)))}
              </animated.span>
            </span>
            <span className="from-tertiary via-[#c4b5fd] to-primary bg-gradient-to-r bg-clip-text text-2xl font-bold tracking-tight text-transparent md:text-3xl">
              Billion
            </span>
          </div>
          <div className="text-on-surface/50 font-label mt-3 text-xs uppercase tracking-widest">
            Years Since Singularity
          </div>
        </animated.div>

        <div className="relative h-px w-full overflow-visible bg-tertiary/10">
          <animated.div
            className="via-primary/50 absolute inset-y-0 left-0 h-px w-full origin-left bg-gradient-to-r from-transparent to-transparent"
            style={divider}
          />
        </div>

        <animated.div style={statB} className="relative pl-5">
          <span
            className="absolute top-1/2 left-0 h-14 w-0.5 -translate-y-1/2 rounded-full bg-primary/50 shadow-[0_0_12px_rgba(0,218,243,0.35)]"
            aria-hidden
          />
          <div className="font-headline flex flex-wrap items-baseline gap-x-2 gap-y-1 leading-none">
            <span className="from-primary via-tertiary to-primary bg-gradient-to-r bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
              <animated.span className="tabular-nums">
                {lyN.val.to((v) => String(Math.round(v)))}
              </animated.span>
            </span>
            <span className="from-primary via-tertiary to-primary bg-gradient-to-r bg-clip-text text-2xl font-bold tracking-tight text-transparent md:text-3xl">
              Billion
            </span>
          </div>
          <div className="text-on-surface/50 font-label mt-3 text-xs uppercase tracking-widest">
            Light Years (Diameter)
          </div>
        </animated.div>
      </animated.div>
    </div>
  )
}
