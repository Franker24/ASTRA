import { HeroEntranceImage } from '../components/HeroEntranceImage'

function PlanetStatGrid({ accentClass, moons, day, dist }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="border-outline-variant/10 bg-surface-container rounded-2xl border p-6 text-center">
        <span className={`material-symbols-outlined mb-2 ${accentClass}`}>nights_stay</span>
        <p className="font-label text-[10px] uppercase opacity-50">Moons</p>
        <p className="font-headline text-lg font-bold">{moons}</p>
      </div>
      <div className="border-outline-variant/10 bg-surface-container rounded-2xl border p-6 text-center">
        <span className={`material-symbols-outlined mb-2 ${accentClass}`}>rotate_right</span>
        <p className="font-label text-[10px] uppercase opacity-50">Day</p>
        <p className="font-headline text-lg font-bold">{day}</p>
      </div>
      <div className="border-outline-variant/10 bg-surface-container rounded-2xl border p-6 text-center">
        <span className={`material-symbols-outlined mb-2 ${accentClass}`}>explore</span>
        <p className="font-label text-[10px] uppercase opacity-50">Dist</p>
        <p className="font-headline text-lg font-bold">{dist}</p>
      </div>
    </div>
  )
}

function PlanetRow({
  reverse,
  glowClass,
  label,
  labelClass,
  title,
  body,
  imgSrc,
  imgAlt,
  stats,
  overlay,
}) {
  const flexDir = reverse ? 'md:flex-row-reverse' : 'md:flex-row'
  return (
    <div className={`flex flex-col items-center gap-16 ${flexDir}`}>
      <div className="group relative md:w-1/2">
        <div
          className={`absolute -inset-8 rounded-full blur-3xl transition-all duration-700 ${glowClass}`}
        />
        <div className="relative z-10">
          <img
            className="planet-glow relative z-10 h-[400px] w-full object-contain transition-transform duration-700 group-hover:scale-105"
            alt={imgAlt}
            src={imgSrc}
          />
          {overlay}
        </div>
      </div>
      <div className="md:w-1/2">
        <span className={`font-label mb-2 block text-xs uppercase tracking-[0.4em] ${labelClass}`}>
          {label}
        </span>
        <h2 className="font-headline mb-6 text-7xl font-bold tracking-tighter">{title}</h2>
        <p className="text-on-surface/70 mb-8 text-xl font-light leading-relaxed">{body}</p>
        <PlanetStatGrid {...stats} />
      </div>
    </div>
  )
}

export function SolarSystemPage() {
  return (
    <main className="text-on-surface selection:bg-primary selection:text-on-primary relative overflow-hidden">
      <section className="relative flex min-h-screen items-center justify-center pb-32 pt-24">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <HeroEntranceImage
            className="h-full w-full object-cover opacity-40 mix-blend-screen"
            toScale={1.1}
            alt="extreme close up of the sun surface with turbulent solar flares and glowing orange plasma texture covering the entire background"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlTxU663IlQ7QVXCR0OEE151OASD_rwJSfCntW6EMjGrq0YFfa1-VnJXqTDoMg2mVzyMnVaVkukaJogzMJF1cpzJtv6N9HK26LO3Ot_DsXzsJ7pJbERjcSPZw_bOG9Dil1osUHTJR7epDqABmw7TjxTuiP8E--LumdfnB4AdcEmHgm9HKtLQMvsTwMc5zHJZlUUyjyokNUyTo85PnBPG9DPVTN5Raxh9H7VWhdqfozyQn0qay0_fgEWX1dWdNc17Aol3uofEDk2KQ"
          />
          <div className="sun-hero-gradient absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>
        <div className="relative z-10 container mx-auto flex flex-col items-center px-8 text-center">
          <div className="mb-12 flex gap-12">
            <div className="border-secondary/30 border-l py-2 pl-4 text-left">
              <p className="font-label text-secondary-fixed-dim text-[10px] uppercase tracking-widest">
                Spectral Class
              </p>
              <p className="font-headline text-on-surface text-2xl font-bold">G2V</p>
            </div>
            <div className="border-secondary/30 border-l py-2 pl-4 text-left">
              <p className="font-label text-secondary-fixed-dim text-[10px] uppercase tracking-widest">
                Core Temp
              </p>
              <p className="font-headline text-on-surface text-2xl font-bold">15M °C</p>
            </div>
          </div>
          <h1 className="font-headline text-on-surface mb-8 text-7xl font-extrabold tracking-tighter md:text-9xl">
            SOLAR{' '}
            <span className="text-primary drop-shadow-[0_0_30px_rgba(0,218,243,0.4)]">DOMINION</span>
          </h1>
          <p className="text-on-surface/80 mb-12 max-w-3xl text-xl font-light leading-relaxed md:text-2xl">
            The furnace of the heavens. It contains 99.8% of the total mass in our system, anchoring a collection
            of diverse worlds through sheer gravitational will.
          </p>
          <div className="flex gap-6">
            <button
              type="button"
              className="bg-primary text-on-primary rounded-xl px-10 py-4 text-lg font-bold transition-all hover:shadow-[0_0_30px_rgba(0,218,243,0.5)]"
            >
              Initiate Orrery
            </button>
            <button
              type="button"
              className="border-outline-variant/40 text-on-surface rounded-xl border px-10 py-4 text-lg font-bold backdrop-blur-sm transition-all hover:border-primary/50"
            >
              Telemetry Data
            </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto space-y-48 px-8 py-32">
        <PlanetRow
          label="Terrestrial Messenger"
          labelClass="text-on-surface-variant"
          title="Mercury"
          body="The smallest and innermost planet. Mercury is a desolate, cratered world where temperatures fluctuate from lead-melting heat to bone-chilling cold in a single day."
          imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuB6ZmU22ouCcawDU8qwrmvoQ8YzUy6Ic1vLk1LRp1pfrPvqoo9WbpPMdQS4hiSmEPjE6i_qEku6exiSq5vm0RqKuqqdwmeHctS8pNEXQGMpRGDYI9bOpgHrlpL6wFfzlTRauU41UPYT8A4vTAyXnG5HSmGv8asai5pxZSPcVrw33NrMERgncymgUly2cFro7KnFwhWTiy5QEG40uBi-6SdF5VhkMCKzALYFQzfiqXz-os8ZOfNT_HWgzMC4Vez1DMJq_IrHZ5dMwLo"
          imgAlt="rocky gray cratered surface of planet mercury against pitch black space background"
          glowClass="bg-on-surface-variant/5 group-hover:bg-on-surface-variant/10"
          stats={{ accentClass: 'text-primary', moons: '0', day: '59d', dist: '0.39 AU' }}
        />
        <PlanetRow
          reverse
          label="Toxic Twin"
          labelClass="text-secondary-fixed-dim"
          title="Venus"
          body="Similar in size and structure to Earth, but choked by a runaway greenhouse effect. Its thick atmosphere traps heat, creating the hottest surface in the solar system."
          imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuD4c1uQPAYW3HOIvfHWnK3n1z_ak26EXXjO1QBf3dvUEj3iIG3EgIZJ2Xv9QehM0wj_be3ay9Rr7BdFoFeZWgLQXDw397vqxfIdnQnaaL0ZkOA7BuEOzhZqBp6jnCrIZmpjebVOTupqBxXuYR7UeFpGVaDWclrQRHuN_sA31olEbnuxdJkQ-tMIHAolAmJGWGJUd-2sYJ_p3VaCnO45Yj3UeSvFhKgKjBnXnIT3qVdlN33hn3W2ttfCq9VfT_YWifvWmcxkO6h8KwE"
          imgAlt="dense swirling yellow and orange clouds covering the entire surface of venus"
          glowClass="bg-secondary-container/10 group-hover:bg-secondary-container/20"
          stats={{ accentClass: 'text-secondary-fixed-dim', moons: '0', day: '243d', dist: '0.72 AU' }}
        />
        <PlanetRow
          label="The Blue Marble"
          labelClass="text-primary"
          title="Earth"
          body="The only world known to harbor life. A fragile oasis of liquid water and nitrogen-oxygen atmosphere, perfectly situated within the Sun&apos;s habitable zone."
          imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuCUoOq-M9M1OFqPwsEeaOZERZ4VRl_I0xSY-ivZ3oxodQK_r4J7UM9BV_QuozL0tGd66BrKQOogXraN3W8bMQ4lcKP7bp7FRpkT0Osw5A0jB7VDaIYO_H1nAHybydgGxkYB2ow0fvKg5k1DjPUCcAUild5xDqMAt2HFXVwNvJCh2hYmCCOjFFIYDYwASshIfzNB40cdoYhpd8wdtLglkLbwX7w0RUsGt7Ri2eWqCRVaRERFEUt5-9duK4vEn3NXS4lW1eo6t32Un60"
          imgAlt="stunning marble of earth with vibrant blue oceans white clouds and brown land masses from space"
          glowClass="bg-primary/10 group-hover:bg-primary/20"
          stats={{ accentClass: 'text-primary', moons: '1', day: '24h', dist: '1.0 AU' }}
        />
        <PlanetRow
          reverse
          label="The Red Frontier"
          labelClass="text-error"
          title="Mars"
          body="A cold, desert world with a thin atmosphere. Mars hosts the solar system&apos;s largest volcano, its deepest canyon, and the tantalizing promise of ancient water."
          imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuB1aYNq0qpBHnVR7S6_dkugFyXBV6rHnzjtVUe77c9iC-8y7p2IW6pvEIM1Aqk84U0r60kRKKqVG8m1X3qv8XQauBqmuy213sE_9DeGh1eqxpUtsMsF0wIYmU1h1J2xTaPXViOo48yV-9mHptfIuzvRZ32ZSprEJZ227avf2mvbR-3xPKj0RXHn4d7UXUr-qP2jXIv58twmnNMTTE7WQMbisU7f9hQnb_RUZsAsyHb0RuIdgMlUPzZ87sFDPzc_Nd6oluuj-8Ma6Wg"
          imgAlt="red dusty surface of mars with visible polar ice caps and canyon systems"
          glowClass="bg-error/10 group-hover:bg-error/20"
          stats={{ accentClass: 'text-error', moons: '2', day: '24.6h', dist: '1.52 AU' }}
        />
        <PlanetRow
          label="The King of Planets"
          labelClass="text-primary"
          title="Jupiter"
          body="Twice as massive as all other planets combined. Jupiter is a storm-wracked gas giant that protects the inner solar system from cosmic debris."
          imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ37gRHPni0HfVxsvXxA718iL4sV-DD5UiHluQGmZdNDH-SMl0ICUfppnKZ6KW8WrX_XJ-LKy14kmDAizcmgJBGAW1nRebL0oNl6VMc-34-m-eZzZtyb0sHjk2Arv81HB7qCWPiaD6UGOAO-KwaoP53Fk6zUb3H3K57Lg7Fg6JTzX4NhGWUtXKMxtgVJjT_SCAHqiLkrSowQAHjwJ0WNKZZ8swT-E8hHRTq5PIdc3Rppk-ikYeddjSA4ZTWUQvtgntdZ_FXvob4No"
          imgAlt="jupiter giant gas planet with horizontal atmospheric bands and the visible great red spot"
          glowClass="bg-primary/10 group-hover:bg-primary/20"
          stats={{ accentClass: 'text-primary', moons: '95', day: '9.9h', dist: '5.20 AU' }}
        />
        <PlanetRow
          reverse
          label="Ringed Majesty"
          labelClass="text-secondary-fixed-dim"
          title="Saturn"
          body="Defined by its spectacular ring system composed of billions of individual ice and rock particles. Its density is so low it could float in a terrestrial ocean."
          imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuBvmwYfaQRiz2F_RH0qUnKRK3L5n2tzs3WpKMGmVzFHcudzOJztm8cESrxEkvzPe33Y2pKy6XU9YwqMyI2RyERhdjhjIYw3rT2L0tFw4QT1iryQFOB_4gv-zxlbkwzLddFNNzX2lXPfPSQwwUENUmBEU38gcEAEOgbGZb3nBdIhkLl1GiXVpgDetM7wUsOfHtAJvnmfo52PLlGTXwRXaAZF5Bdpn3caHrXyzJMiK-dC0X4R9juzSzSEUSm31ziXyrTNy2AysAk9Pk8"
          imgAlt="saturn with its magnificent icy rings clearly visible tilted on its axis against the black void"
          glowClass="bg-secondary-container/10 group-hover:bg-secondary-container/20"
          stats={{ accentClass: 'text-secondary-fixed-dim', moons: '146', day: '10.7h', dist: '9.58 AU' }}
        />
        <PlanetRow
          label="The Sideways Giant"
          labelClass="text-primary"
          title="Uranus"
          body="An ice giant with a unique 98-degree tilt. Uranus orbits the Sun on its side, resulting in extreme seasonal variations and a distinct pale cyan appearance."
          imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuBAOIn04kUaGzPj8C5pWpGqDqU3W9kR9_m9m5Fj5Q1W5E0_G5_v_T_o_e_x_a_m_p_l_e_1"
          imgAlt="smooth pale blue-green ice giant uranus tilted significantly on its side"
          glowClass="bg-primary/10 group-hover:bg-primary/20"
          stats={{ accentClass: 'text-primary', moons: '28', day: '17.2h', dist: '19.2 AU' }}
          overlay={
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="h-64 w-64 rounded-full bg-primary/20 blur-2xl" />
            </div>
          }
        />
        <PlanetRow
          reverse
          label="The Blue Abyss"
          labelClass="text-tertiary"
          title="Neptune"
          body="The most distant planet. Neptune is a dark, cold world whipped by supersonic winds. It is an ice giant composed mostly of a thick soup of water, ammonia, and methane."
          imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuBAOIn04kUaGzPj8C5pWpGqDqU3W9kR9_m9m5Fj5Q1W5E0_G5_v_T_o_e_x_a_m_p_l_e_2"
          imgAlt="vibrant deep blue planet neptune with faint white clouds and a visible dark storm spot"
          glowClass="bg-on-tertiary-fixed-variant/10 group-hover:bg-on-tertiary-fixed-variant/20"
          stats={{ accentClass: 'text-tertiary', moons: '16', day: '16.1h', dist: '30.1 AU' }}
          overlay={
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="h-64 w-64 rounded-full bg-on-tertiary-fixed-variant/20 blur-2xl" />
            </div>
          }
        />
      </section>

      <section className="bg-surface-container-lowest relative w-full overflow-hidden py-32">
        <div className="relative z-10 container mx-auto px-8">
          <div className="max-w-2xl">
            <span className="font-label text-secondary-fixed-dim mb-4 block text-xs uppercase tracking-[0.3em]">
              Orbital Boundary
            </span>
            <h2 className="font-headline mb-8 text-6xl font-bold tracking-tighter">The Main Asteroid Belt</h2>
            <p className="text-on-surface/60 mb-10 text-xl italic leading-relaxed">
              &ldquo;A debris field of primordial remnants, spanning 140 million miles of void between the inner
              and outer systems.&rdquo;
            </p>
            <div className="flex items-center gap-8">
              <div className="border-outline-variant/20 bg-surface-container-high rounded-2xl border p-6">
                <p className="font-label text-tertiary mb-1 text-[12px] uppercase tracking-widest">
                  Ceres Diameter
                </p>
                <p className="font-headline text-3xl font-bold">940 KM</p>
              </div>
              <div className="border-outline-variant/20 bg-surface-container-high rounded-2xl border p-6">
                <p className="font-label text-tertiary mb-1 text-[12px] uppercase tracking-widest">Total Mass</p>
                <p className="font-headline text-3xl font-bold">4% of Moon</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <img
            className="mask-vignette absolute right-0 top-0 h-full w-1/2 object-cover opacity-50"
            alt="abstract cosmic background with floating dust particles and distant nebula clouds in deep violet and blue"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-Uhc1XR_hRUebdQIpBQc_4kKNORL3wJpuSh1IzNqIy62ceQC2CX9jignTepsbcbLATHxmFXEurow8ceiHlUWAqSLqPJURuA_Q93L8o-r3FEk6UWRievTikj_hx68Dihe_bxcuVV-wHKstj4s0tQqmf3ciBXkJsq8mjIoFqe2CM-RYfzaP8HIVu7w5GKQyPQQOL974_ji9trQ9p6xNyJMSaoiE4u3VF2acM6c3UcHyZMtOJr0VPJXQnrEbMhjul27zZo1QVhCmq5Q"
          />
        </div>
      </section>

      <section className="container mx-auto px-8 py-48">
        <div className="border-outline-variant/10 bg-surface-container-high relative overflow-hidden rounded-3xl border p-16">
          <div className="absolute right-0 top-0 h-full w-1/2 overflow-hidden opacity-50">
            <img
              className="h-full w-full object-cover"
              alt="icy cold dwarf planet on the edge of the solar system with dim sunlight and dark jagged landscape"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDi7y_2dtP_i1FxVak_u3MFTnIRdyUe4yqGTwWg_oOugRIfyj_Krpo7EycvFArR1x5sHiQPP84X2ZnLnagmMEbUERc-8ZSuIq7Xsw_tox5KrVHxpuKZO6EET-iRBDfv9-aqW6_RbqnH0qlGzJkdkBnOTaJPUq281x4fuyrdt6HwZuUW-yQT0-US3m0d0ufPB2Zq0IXr_gtwwjjycCOUntHO9orDhHQRjNH8rlSvp4CSR-LolVNzpZNMUnfHwK6QId_DzD-NQ2mszjY"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface-container-high via-surface-container-high/60 to-transparent" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <span className="font-label text-tertiary mb-4 block text-xs uppercase tracking-[0.4em]">
              The Final Frontier
            </span>
            <h3 className="font-headline mb-6 text-5xl font-bold tracking-tight">The Kuiper Belt</h3>
            <p className="text-on-surface/70 mb-12 text-xl font-light leading-relaxed">
              Extending far beyond the orbit of Neptune, the Kuiper Belt is a vast realm of icy objects and dwarf
              planets. It is the frontier of our sun&apos;s immediate reach, housing Pluto, Eris, and the seeds of
              long-period comets.
            </p>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {[
                ['Pluto', 'Heart of Ice'],
                ['Haumea', 'Rapid Rotator'],
                ['Makemake', 'Bright Red'],
                ['Eris', 'Distant Discord'],
              ].map(([name, tag]) => (
                <div key={name} className="group">
                  <p className="font-label text-tertiary group-hover:text-primary mb-1 text-[11px] uppercase tracking-widest transition-colors">
                    {name}
                  </p>
                  <p className="font-headline text-lg font-bold">{tag}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
