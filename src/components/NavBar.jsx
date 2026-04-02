import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { animated, useSpring } from '@react-spring/web'
import { useNavLayout } from '../context/NavLayoutContext'

const SCROLL_THRESHOLD = 72
const CLOSE_DELAY_MS = 420
const COLLAPSED_W = 12
const EXPANDED_W = 256

function AnimatedNavLink({ to, children, active }) {
  const [hover, setHover] = useState(false)
  const spring = useSpring({
    transform: hover && !active ? 'translateY(-3px) scale(1.02)' : 'translateY(0px) scale(1)',
    config: { tension: 400, friction: 24 },
  })

  return (
    <animated.div
      style={spring}
      className="inline-block"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link
        to={to}
        className={`font-headline border-b-2 pb-1 transition-colors duration-200 ${
          active
            ? 'border-[#00daf3] font-bold text-[#00daf3]'
            : 'border-transparent text-[#e5e1e7] hover:text-[#00daf3]'
        }`}
      >
        {children}
      </Link>
    </animated.div>
  )
}

function SidebarNavLink({ to, children, active }) {
  const [hover, setHover] = useState(false)
  const spring = useSpring({
    transform: hover && !active ? 'translateX(4px)' : 'translateX(0px)',
    config: { tension: 380, friction: 26 },
  })

  return (
    <animated.div style={spring} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <Link
        to={to}
        className={`font-headline block rounded-r-lg border-l-2 py-2.5 pl-4 pr-3 text-sm transition-colors duration-200 ${
          active
            ? 'border-[#00daf3] bg-[#00daf3]/10 font-bold text-[#00daf3]'
            : 'border-transparent text-[#e5e1e7] hover:border-white/10 hover:bg-white/5 hover:text-[#00daf3]'
        }`}
      >
        {children}
      </Link>
    </animated.div>
  )
}

function BrandMark({ compact = false }) {
  return (
    <Link
      to="/"
      aria-label="ASTRA — inicio"
      className={`group flex outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#00daf3]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#131317] ${
        compact ? 'flex-col items-center gap-2 border-b border-white/10 pb-6' : 'items-center gap-3.5'
      }`}
    >
      <img
        src="/infi.svg"
        alt=""
        width={52}
        height={37}
        className="h-8 w-auto shrink-0 drop-shadow-[0_0_14px_rgba(0,229,255,0.35)] transition-[filter,transform] duration-300 group-hover:drop-shadow-[0_0_18px_rgba(0,229,255,0.5)] md:h-9"
      />
      <span
        className={`border-white/10 font-headline text-[0.95rem] font-semibold uppercase leading-none tracking-[0.26em] text-[#00daf3] antialiased sm:text-[1.05rem] md:text-lg ${
          compact ? 'border-0 pl-0 text-center' : 'border-l pl-3.5'
        }`}
      >
        ASTRA
      </span>
    </Link>
  )
}

export function NavBar() {
  const { pathname } = useLocation()
  const { sidebarMode, setSidebarMode, sidebarExpanded, setSidebarExpanded } = useNavLayout()
  const closeTimerRef = useRef(null)

  const dockSpring = useSpring({
    width: sidebarExpanded ? EXPANDED_W : COLLAPSED_W,
    config: sidebarExpanded
      ? { mass: 0.65, tension: 210, friction: 26 }
      : { mass: 0.55, tension: 280, friction: 34 },
  })

  const innerSpring = useSpring({
    opacity: sidebarExpanded ? 1 : 0,
    x: sidebarExpanded ? 0 : -6,
    config: sidebarExpanded
      ? { mass: 0.4, tension: 300, friction: 32 }
      : { mass: 0.35, tension: 380, friction: 36 },
  })

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
  }

  const scheduleClose = () => {
    clearCloseTimer()
    closeTimerRef.current = window.setTimeout(() => setSidebarExpanded(false), CLOSE_DELAY_MS)
  }

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')

    const sync = () => {
      setSidebarMode(mq.matches && window.scrollY > SCROLL_THRESHOLD)
    }

    sync()
    window.addEventListener('scroll', sync, { passive: true })
    mq.addEventListener('change', sync)
    return () => {
      window.removeEventListener('scroll', sync)
      mq.removeEventListener('change', sync)
    }
  }, [setSidebarMode])

  useEffect(() => {
    if (!sidebarMode) {
      clearCloseTimer()
      setSidebarExpanded(false)
    }
  }, [sidebarMode, setSidebarExpanded])

  useEffect(() => () => clearCloseTimer(), [])

  if (sidebarMode) {
    return (
      <animated.div
        className="fixed top-0 left-0 z-50 hidden h-screen overflow-hidden md:block"
        style={{
          width: dockSpring.width.to((w) => `${w}px`),
        }}
        onMouseEnter={() => {
          clearCloseTimer()
          setSidebarExpanded(true)
        }}
        onMouseLeave={scheduleClose}
      >
        <div
          className="pointer-events-none absolute top-0 left-0 z-10 h-full w-3 bg-gradient-to-b from-[#00daf3]/30 via-[#00daf3]/10 to-transparent"
          aria-hidden
        />
        <animated.aside
          className="relative flex h-full w-64 flex-col border-r border-outline-variant/15 bg-[#131317]/85 py-6 pr-2 pl-5 shadow-[4px_0_40px_rgba(0,218,243,0.06)] backdrop-blur-xl"
          style={{
            opacity: innerSpring.opacity,
            transform: innerSpring.x.to((x) => `translate3d(${x}px,0,0)`),
            pointerEvents: sidebarExpanded ? 'auto' : 'none',
          }}
          aria-label="Navegación lateral"
        >
          <BrandMark compact />
          <nav className="mt-8 flex flex-1 flex-col gap-1 overflow-y-auto py-2 font-headline">
            <SidebarNavLink to="/" active={pathname === '/'}>
              Home
            </SidebarNavLink>
            <SidebarNavLink to="/earth" active={pathname === '/earth'}>
              Earth
            </SidebarNavLink>
            <SidebarNavLink to="/solar-system" active={pathname === '/solar-system'}>
              Solar System
            </SidebarNavLink>
            <SidebarNavLink to="/universe" active={pathname === '/universe'}>
              Universe
            </SidebarNavLink>
          </nav>
          <div className="mt-auto flex flex-col gap-4 border-t border-white/10 pt-6">
            <div className="flex items-center rounded-xl border border-outline-variant/20 bg-surface-container-lowest px-3 py-2">
              <span className="material-symbols-outlined mr-2 text-sm text-on-surface-variant">search</span>
              <input
                className="min-w-0 flex-1 border-none bg-transparent text-xs placeholder:text-on-surface-variant/50 focus:ring-0"
                placeholder="Scan quadrants..."
                type="text"
                readOnly
              />
            </div>
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-xl py-2 transition-all hover:bg-[#1f1f23]/50"
            >
              <span className="material-symbols-outlined text-[#00daf3]">account_circle</span>
              <span className="font-headline text-xs text-[#e5e1e7]/80">Profile</span>
            </button>
          </div>
        </animated.aside>
      </animated.div>
    )
  }

  return (
    <nav className="fixed top-0 z-50 flex w-full max-w-none items-center justify-between bg-[#131317]/60 px-8 py-4 shadow-[0_0_40px_rgba(0,218,243,0.06)] backdrop-blur-xl">
      <BrandMark />
      <div className="hidden items-center space-x-8 font-headline md:flex">
        <AnimatedNavLink to="/" active={pathname === '/'}>
          Home
        </AnimatedNavLink>
        <AnimatedNavLink to="/earth" active={pathname === '/earth'}>
          Earth
        </AnimatedNavLink>
        <AnimatedNavLink to="/solar-system" active={pathname === '/solar-system'}>
          Solar System
        </AnimatedNavLink>
        <AnimatedNavLink to="/universe" active={pathname === '/universe'}>
          Universe
        </AnimatedNavLink>
      </div>
      <div className="flex items-center space-x-6">
        <div className="hidden items-center rounded-full border border-outline-variant/20 bg-surface-container-lowest px-4 py-1.5 lg:flex">
          <span className="material-symbols-outlined mr-2 text-sm text-on-surface-variant">search</span>
          <input
            className="w-48 border-none bg-transparent text-sm placeholder:text-on-surface-variant/50 focus:ring-0"
            placeholder="Scan quadrants..."
            type="text"
            readOnly
          />
        </div>
        <button
          type="button"
          className="scale-95 rounded-full p-2 transition-all duration-300 hover:bg-[#1f1f23]/50 hover:backdrop-blur-md active:scale-90"
        >
          <span className="material-symbols-outlined text-[#00daf3]">account_circle</span>
        </button>
      </div>
    </nav>
  )
}
