import { useNavigate } from 'react-router-dom'
import { CosmicStatsPanel } from '../components/CosmicStatsPanel'
import { HeroEntranceImage } from '../components/HeroEntranceImage'

export function HomePage() {
  const navigate = useNavigate()

  return (
    <main className="text-on-background selection:bg-primary selection:text-on-primary relative min-h-screen overflow-hidden pt-16">
      <div className="star-field pointer-events-none fixed inset-0" />

      <section className="relative flex min-h-[921px] items-center px-8 py-20 md:px-20">
        <div className="absolute inset-0 z-0">
          <HeroEntranceImage
            gentle
            fadeOpacity={0.5}
            className="h-full w-full object-cover"
            alt="Stunning panoramic view of a vibrant purple and cyan interstellar nebula with glowing star clusters and deep cosmic dust clouds"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_p6kHPUTKZLfdJQyqvNt6dwoo-QrZygPLqwMt8EnKLKy7PX2XN_oIoxDp4qHw7uMtNkDfKZZNl9EjBFXYnXvnA1P4V-O-FGqFrx3j4QDU1gm3ZO6WBNKlpgjHT3tFLu68bXw6aouXkNPkFFV50ZetXwsZx9WsGah1oWaT7TSvRSH8nHkfIn28cWtwLkNxXvtmqXBuGwpyKXE0ba_yHE7n00dOIPGx1N29iwXydh6SpmdPbjtTdXvIVtgVawx9NYOI9tpsTytlysE"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>
        <div className="relative z-10 max-w-4xl">
          <div className="mb-6">
            <span className="font-label text-tertiary tracking-[0.2em] bg-tertiary-container/40 rounded-full px-4 py-1.5 text-sm uppercase backdrop-blur-sm">
              System Online: Observation Deck
            </span>
          </div>
          <h1 className="font-headline text-on-surface mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-8xl">
            Beyond the <br />
            <span className="from-primary to-tertiary bg-gradient-to-r bg-clip-text text-transparent">
              Infinite Horizon
            </span>
          </h1>
          <p className="font-body text-on-surface/80 mb-10 max-w-2xl text-xl leading-relaxed md:text-2xl">
            Witness the grandeur of the cosmos through the lens of precision telemetry. From the fragile blue
            marble of Earth to the birth of distant quasars, your journey into the macrocosm begins here.
          </p>
          <div className="flex flex-wrap gap-6">
            <button
              type="button"
              className="font-headline from-primary to-on-primary-container text-on-primary rounded-xl bg-gradient-to-br px-8 py-4 font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(0,218,243,0.3)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,218,243,0.5)] active:scale-95"
              onClick={() => {
                navigate('/solar-system')
                window.scrollTo(0, 0)
              }}
            >
              Initiate Voyage
            </button>
            <button
              type="button"
              className="font-headline border-outline-variant/15 text-primary bg-surface-container-high/40 rounded-xl border px-8 py-4 font-bold uppercase tracking-wider backdrop-blur-md transition-all duration-300 hover:border-primary/40"
              onClick={() => {
                navigate('/universe')
                window.scrollTo(0, 0)
              }}
            >
              View Star Map
            </button>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-8 py-24 md:px-20">
        <div className="mb-16 flex flex-col items-end justify-between gap-8 md:flex-row">
          <div className="max-w-xl">
            <h2 className="font-headline text-on-surface mb-4 text-4xl font-bold">Cosmic Coordinates</h2>
            <p className="text-on-surface/60 text-lg">
              Navigate the tiers of existence, from our home world to the cold depths of interstellar space.
            </p>
          </div>
          <div className="bg-outline-variant/20 mx-8 hidden h-px flex-grow md:block" />
          <div className="text-right">
            <span className="font-label text-secondary-fixed-dim text-xs uppercase tracking-widest">
              Universal Telemetry
            </span>
            <div className="font-headline text-2xl font-light">
              3.2 x 10<sup>22</sup> Stars Observed
            </div>
          </div>
        </div>

        <div className="grid auto-rows-[300px] grid-cols-1 gap-6 md:grid-cols-12">
          <div className="group border-outline-variant/10 bg-surface-container relative overflow-hidden rounded-xl border md:col-span-7">
            <img
              className="absolute inset-0 h-full w-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-110"
              alt="Detailed view of Earth from space with city lights illuminating the dark side and the curve of the horizon in blue light"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKijY1ycSCYhFat8p1aAo_hFs9GkgmEjcrOhsdTd0MRydLRoE3LM-wxEfyNFk1kPXGqpk_LFoCW34P7esl0BFIX6eEdWyNEMaddLF9z0kCe-I7-BDVgtysoSXjTA88klL4O9vhxWdqHUH8JRiTkufEo0CGvgW1fULIrsjJIQf6DF509cSYgs3ZxFEZTW88h0aIGRudaPs0j6o22M8S8dVuPmiUp6FoYGRjEKT7mkGNi6nd7C-g9NuFKNTIZRZfa05jyDT3NVkDFa0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80" />
            <div className="relative flex h-full flex-col justify-end p-8">
              <span className="font-label text-primary mb-2 text-xs uppercase tracking-widest">
                Terrestrial Observation
              </span>
              <h3 className="font-headline text-on-surface mb-2 text-3xl font-bold">Earth: The Pale Blue Dot</h3>
              <p className="text-on-surface/70 max-w-md">
                Explore our unique biosphere through high-resolution satellite telemetry and atmospheric data.
              </p>
              <a className="text-primary mt-4 flex items-center gap-2 transition-all hover:gap-4" href="#">
                <span className="font-headline text-sm font-bold uppercase tracking-widest">Entry Protocol</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </div>

          <CosmicStatsPanel />

          <div className="group border-outline-variant/10 bg-surface-container relative overflow-hidden rounded-xl border md:col-span-4">
            <img
              className="absolute inset-0 h-full w-full object-cover opacity-30 transition-transform duration-[2000ms] group-hover:rotate-6"
              alt="The planet Saturn with its majestic rings glowing against the black void of space"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDJ2EIjLNMZh7nMa6cixsg_Hc2mB12n5wRyITykZoLp0kduHtSRBnp2pk3he54CtM_IMsdCKcUdt09ymbMWfWoudGpGXy23Jd5z4AzM_hgX4j9QRFRzDtp6_ychkDiIsthA_PKq_6xPJDT0suV57aEpxPzNdU1wzUz1rm8rtZeuiG19HjCzbNpbfaOAEKPuI75umf7FLqrKpNb7uVW5-9A4mYDOBaMhIqu9JPFtvKdf45WW8hvPwujDihUvR57_3frB5HiLsVMzH4"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent" />
            <div className="relative flex h-full flex-col justify-end p-8">
              <span className="font-label text-secondary-fixed-dim mb-2 text-xs uppercase tracking-widest">
                Planetary Survey
              </span>
              <h4 className="font-headline text-on-surface text-2xl font-bold">Solar System</h4>
              <p className="text-on-surface/60 mt-2 text-sm">
                A guided tour through our celestial neighbors, from Mercury&apos;s heat to Pluto&apos;s ice.
              </p>
            </div>
          </div>

          <div className="group border-outline-variant/10 bg-surface-container relative overflow-hidden rounded-xl border md:col-span-8">
            <img
              className="absolute inset-0 h-full w-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
              alt="Wide field of distant spiral and elliptical galaxies captured by a deep space telescope in dark blue and gold tones"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUlVe4u-n52pp-rlxVUhH4cZYd_IX3NyyQpVzk_nAXYxqyAZz5D82tSJKRKF0Fo2V4h4tGdOdOGWzPY3i7Wyn4kQ8pnj94qR1zsRuiBhY4hEH54IUGIjXj97l5B8sZUw8aPK4mac8TYznS62f1_X3yJb6LFsG0NH5mrp0lj_PdIlUjoPFPxPZITh2er8AOkh0Y9FHaMBBoIwJ2fMuQmD7uygqUWJB0XcEPyqW_b41RLVjHMQRiYq_ZAJ8BxI6vB3s0Dr6gJHeyDRI"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface-container-highest/90 to-transparent" />
            <div className="relative flex h-full max-w-md flex-col justify-center p-8">
              <span className="font-label text-tertiary mb-2 text-xs uppercase tracking-widest">
                Deep Space Network
              </span>
              <h4 className="font-headline text-on-surface text-2xl font-bold">The Universe</h4>
              <p className="text-on-surface/60 mt-2 text-sm leading-relaxed">
                Venture into the cosmic web. Understand dark matter, galaxy formation, and the eventual fate of
                all things in the deep future.
              </p>
              <button
                type="button"
                className="font-headline text-tertiary border-tertiary/20 bg-tertiary/10 mt-6 w-fit rounded-lg border px-6 py-2 text-sm uppercase tracking-widest transition-colors hover:bg-tertiary/20"
              >
                Access Database
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-lowest relative px-8 py-32 md:px-20">
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
          <div className="space-y-8">
            <h2 className="font-headline text-on-surface text-5xl font-bold tracking-tight">
              Our Mission: <span className="text-secondary-fixed-dim">Democratizing Discovery</span>
            </h2>
            <p className="text-on-surface/80 text-xl leading-relaxed">
              The Celestial Observer serves as a bridge between complex astrophysical data and human curiosity. We
              leverage real-time feeds from orbital observatories and deep-space arrays to provide an interactive
              medium for exploration.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div className="space-y-2">
                <span className="material-symbols-outlined text-primary text-3xl">satellite_alt</span>
                <h5 className="font-headline text-on-surface text-sm font-bold uppercase tracking-widest">
                  Real-time Data
                </h5>
                <p className="text-on-surface/60 text-sm">Live telemetry from Mars rovers and the JWST.</p>
              </div>
              <div className="space-y-2">
                <span className="material-symbols-outlined text-tertiary text-3xl">rocket_launch</span>
                <h5 className="font-headline text-on-surface text-sm font-bold uppercase tracking-widest">
                  Flight Logs
                </h5>
                <p className="text-on-surface/60 text-sm">
                  Historical archives of every major human spaceflight.
                </p>
              </div>
            </div>
          </div>
          <div className="group relative">
            <div className="absolute -inset-4 rounded-full bg-primary/10 blur-3xl transition-colors group-hover:bg-primary/20" />
            <div className="border-outline-variant/20 relative aspect-square overflow-hidden rounded-2xl border">
              <img
                className="h-full w-full object-cover"
                alt="Modern high-tech space telescope station interior with glowing blue interfaces and view of the stars through a massive viewport"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuEjFVVT6DaWKpQITuReOjl7DS_u0wY8PKD5kRuvzPIHAxw7O-xhEvb2TrFoGLblm069tEu5lyQzSshMhnjCaYysiL5lup5YrnuCKDXLkxRvJ88qXNQgzpVAa-ojGB6_u93pkc_gB8DbVd1A46v0OoidGgW3zO5Kc_TmIlYhBuBakl0n_O-MlIxRqb2KngkpMuunEOeshqgLYwAq-eeXZugA19j6i-kDDkc9iwPzCfUjmsIDe6I3i1cI7sNiM8TvDyERrrB24If7g"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
