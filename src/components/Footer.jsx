import { Link, useLocation } from 'react-router-dom'

export function Footer() {
  const { pathname } = useLocation()

  const links = (
    <>
      <Link
        to="#"
        className="text-[#e5e1e7]/60 transition-colors duration-300 hover:text-[#ebb2ff] font-['Manrope'] text-sm tracking-wide"
      >
        Privacy Policy
      </Link>
      <Link
        to="#"
        className="text-[#e5e1e7]/60 transition-colors duration-300 hover:text-[#ebb2ff] font-['Manrope'] text-sm tracking-wide"
      >
        Star Maps
      </Link>
      <Link
        to="#"
        className="text-[#e5e1e7]/60 transition-colors duration-300 hover:text-[#ebb2ff] font-['Manrope'] text-sm tracking-wide"
      >
        Telemetry Data
      </Link>
      <Link
        to="#"
        className="text-[#e5e1e7]/60 transition-colors duration-300 hover:text-[#ebb2ff] font-['Manrope'] text-sm tracking-wide"
      >
        Contact
      </Link>
    </>
  )

  if (pathname === '/solar-system') {
    return (
      <footer className="w-full border-t border-outline-variant/20 bg-[#131317] py-16">
        <div className="flex w-full flex-col items-center justify-between gap-8 px-12 md:flex-row">
          <div className="flex flex-col items-center md:items-start">
            <div className="font-headline mb-2 text-xl uppercase tracking-[0.2em] text-tertiary">
              THE CELESTIAL OBSERVER
            </div>
            <p className="font-body text-sm tracking-wide text-on-surface/60">
              © 2024 THE CELESTIAL OBSERVER. BEYOND THE INFINITE HORIZON.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 font-body text-sm tracking-wide text-on-surface/80">
            {links}
          </div>
        </div>
      </footer>
    )
  }

  if (pathname === '/earth') {
    return (
      <footer className="flex w-full flex-col items-center justify-between border-t border-[#2a292e]/30 bg-[#131317] px-12 py-12 md:flex-row">
        <div className="mb-8 md:mb-0">
          <span className="font-['Space_Grotesk'] text-xl uppercase tracking-[0.2em] text-[#ebb2ff]">
            THE CELESTIAL OBSERVER
          </span>
        </div>
        <div className="mb-8 flex gap-12 md:mb-0">{links}</div>
        <div className="font-['Manrope'] text-xs tracking-wide text-[#e5e1e7]/40">
          © 2024 THE CELESTIAL OBSERVER. BEYOND THE INFINITE HORIZON.
        </div>
      </footer>
    )
  }

  /* Home + Universe share similar 3-column footer */
  return (
    <footer className="flex w-full flex-col items-center justify-between gap-8 border-t border-[#2a292e]/30 bg-[#131317] px-12 py-12 md:flex-row">
      <div className="flex flex-col items-center gap-4 md:items-start">
        <div className="font-['Space_Grotesk'] text-lg uppercase tracking-[0.2em] text-[#ebb2ff]">
          THE CELESTIAL OBSERVER
        </div>
        <p className="font-['Manrope'] text-sm tracking-wide text-[#e5e1e7] opacity-60">
          © 2024 THE CELESTIAL OBSERVER. BEYOND THE INFINITE HORIZON.
        </p>
      </div>
      <div className="flex gap-8">{links}</div>
      <div className="flex gap-4">
        <span className="material-symbols-outlined cursor-pointer text-[#e5e1e7]/40 transition-colors hover:text-[#00daf3]">
          public
        </span>
        <span className="material-symbols-outlined cursor-pointer text-[#e5e1e7]/40 transition-colors hover:text-[#00daf3]">
          hub
        </span>
        <span className="material-symbols-outlined cursor-pointer text-[#e5e1e7]/40 transition-colors hover:text-[#00daf3]">
          science
        </span>
      </div>
    </footer>
  )
}
