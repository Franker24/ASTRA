import React from 'react';
import { useSpring, animated, config, useTrail } from '@react-spring/web';
import { HeroEntranceImage } from '../components/HeroEntranceImage';

export function EarthPage() {
  // --- LÓGICA DE INTERACCIÓN ---
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // --- ANIMACIONES (React Spring) ---

  // Entrada suave para el contenido del Hero
  const heroFade = useSpring({
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: config.molasses,
    delay: 300,
  });

  // Animación en cascada (trail) para las fases lunares
  const phases = [
    { icon: 'brightness_2', title: 'New Moon', txt: 'The Moon is between Earth and Sun; the side facing us is dark.' },
    { icon: 'brightness_3', title: 'First Quarter', txt: 'Half of the illuminated side is visible as the Moon waxes.' },
    { icon: 'brightness_5', title: 'Full Moon', txt: 'Earth is between Sun and Moon; the entire near side is lit.' },
    { icon: 'brightness_4', title: 'Last Quarter', txt: 'The Moon is waning, heading toward the next cycle.' },
  ];

  const trail = useTrail(phases.length, {
    from: { opacity: 0, x: -20 },
    to: { opacity: 1, x: 0 },
    config: config.stiff,
    delay: 500,
  });

  return (
    <main className="text-on-surface selection:bg-primary/30 selection:text-primary relative pt-24 bg-background overflow-x-hidden">

      {/* SECTION: HERO */}
      <section className="relative flex min-h-[921px] items-center overflow-hidden px-8 md:px-20">
        <div className="absolute inset-0 z-0">
          <HeroEntranceImage
            className="h-full w-full object-cover opacity-60"
            alt="stunning wide-angle view of earth's blue curvature against the deep black void of space with a brilliant sun glinting off the atmosphere"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcNTnksaZdrZEIGC5AUrKUsXA28eST07rFY7zin8mVjzUrejbVKZG-jg6zO1Di60Q62MY1-vzAXPo71wV1nXEmqj1kKScA8HDKKqv4N9OTgLewHn4Ix7MG_xUf4KlX5p_T9CkU1eQwjY1lrMKR1eAK_UagvDuBG2Cqoz1QjcxH0nitAfezA6ptCC7xLBkrxzMFUqNeVbHiCxkOt3tCkCJ541YIIMLWAci9aEZnSHQmBqD_J7X5ijYN_WWlqS2r_KX-oBFyB2D4CC8"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
          <div className="from-background absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t to-transparent" />
        </div>

        <animated.div style={heroFade} className="relative z-10 max-w-4xl">
          <span className="font-label text-tertiary mb-6 inline-block text-sm uppercase tracking-[0.2em]">
            Planetary Profile: 003
          </span>
          <h1 className="font-headline text-on-surface mb-8 text-6xl leading-[0.9] font-bold tracking-tighter md:text-9xl">
            Our Pale <br />
            <span className="text-primary drop-shadow-[0_0_15px_rgba(0,218,243,0.3)]">Blue Dot</span>
          </h1>
          <p className="text-on-surface-variant mb-10 max-w-2xl text-xl font-light leading-relaxed md:text-2xl">
            Suspended in a sunbeam, Earth is the only world known so far to harbor life. A fragile sanctuary of
            nitrogen, oxygen, and liquid water drifting through the cosmic vacuum.
          </p>
          <div className="flex flex-wrap gap-6">
            <button
              type="button"
              onClick={() => scrollToSection('telemetry-section')}
              className="from-primary to-on-primary-container text-on-primary rounded-xl bg-gradient-to-br px-8 py-4 font-bold shadow-[0_0_20px_rgba(0,218,243,0.3)] transition-all hover:scale-105 active:scale-95"
            >
              Explore Telemetry
            </button>
            <button
              type="button"
              className="border-outline-variant glass-effect text-on-surface rounded-xl border px-8 py-4 font-medium transition-all hover:border-primary/40 hover:bg-white/5 active:scale-95"
            >
              View Star Map
            </button>
          </div>
        </animated.div>
      </section>

      {/* SECTION: INTERNAL STRUCTURE */}
      <section className="bg-surface-container-lowest px-8 py-24 md:px-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          <div className="group border-outline-variant/10 bg-surface-container relative flex flex-col justify-between overflow-hidden rounded-xl p-8 md:col-span-2 md:row-span-2 transition-all hover:shadow-2xl hover:shadow-primary/5">
            <div className="relative z-10">
              <span className="font-label text-primary mb-4 block text-xs uppercase tracking-widest">
                Internal Structure
              </span>
              <h3 className="font-headline mb-4 text-3xl font-bold">Chemical Composition</h3>
              <p className="text-on-surface-variant mb-6 max-w-md leading-relaxed">
                Earth's mass is approximately 32.1% iron, 30.1% oxygen, 15.1% silicon, and 13.9% magnesium. The
                core remains a pressurized furnace of molten metal, generating our vital magnetic shield.
              </p>
            </div>
            <div className="mt-auto flex gap-4 relative z-10">
              <div className="bg-surface-container-high font-label text-tertiary rounded-full px-4 py-2 text-xs border border-white/5">
                IRON: 32%
              </div>
              <div className="bg-surface-container-high font-label text-tertiary rounded-full px-4 py-2 text-xs border border-white/5">
                OXYGEN: 30%
              </div>
            </div>
            <div className="bg-primary/10 group-hover:bg-primary/20 absolute -right-20 -bottom-20 h-64 w-64 rounded-full blur-[80px] transition-colors duration-500" />
          </div>

          <div className="border-outline-variant/10 bg-surface-container group relative rounded-xl p-8 transition-colors hover:bg-surface-container-high">
            <span className="material-symbols-outlined text-tertiary mb-4 group-hover:rotate-12 transition-transform">air</span>
            <h4 className="font-headline mb-2 text-xl font-bold">Atmosphere</h4>
            <p className="text-on-surface-variant text-sm font-light">
              78% Nitrogen, 21% Oxygen. The shield that breathes.
            </p>
          </div>

          <div className="border-outline-variant/10 bg-surface-container group relative rounded-xl p-8 transition-colors hover:bg-surface-container-high">
            <span className="material-symbols-outlined text-secondary-fixed-dim mb-4 group-hover:-translate-y-1 transition-transform">vertical_align_bottom</span>
            <h4 className="font-headline mb-2 text-xl font-bold">Gravity</h4>
            <p className="text-on-surface-variant text-sm font-light">
              9.807 m/s². The invisible tether to the surface.
            </p>
          </div>

          <div className="border-outline-variant/10 bg-surface-container group flex items-center justify-between rounded-xl p-8 md:col-span-2 transition-all hover:bg-surface-container-high">
            <div>
              <h4 className="font-headline mb-2 text-2xl font-bold">Orbital Dynamics</h4>
              <p className="text-on-surface-variant max-w-sm">
                Travelling at 67,000 mph, Earth completes one revolution around the Sun every 365.25 days.
              </p>
            </div>
            <div className="text-right">
              <span className="font-headline text-primary block text-4xl font-bold group-hover:scale-110 transition-transform">365.25</span>
              <span className="font-label text-outline text-xs uppercase tracking-tighter">Days Per Orbit</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: MAGNETIC FIELD */}
      <section className="relative overflow-hidden px-8 py-32 md:px-20">
        <div className="bg-tertiary/5 absolute top-0 left-1/4 h-[600px] w-[600px] rounded-full blur-[120px]" />
        <div className="flex flex-col items-center gap-20 md:flex-row">
          <div className="order-2 w-full md:order-1 md:w-1/2">
            <img
              className="border-surface-container-high aspect-square rounded-full border-4 object-cover shadow-[0_0_80px_rgba(235,178,255,0.15)] animate-[pulse_8s_ease-in-out_infinite]"
              alt="abstract artistic visualization of earth's magnetic field lines glowing in ethereal purple and blue hues protecting the planet from solar winds"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsAfySLswD46uMCWzn4yUmTHGGSn3ySLv30EuDRZ2LqH1HOnrj89niFMrhpAyMmeCOSCfmesImQpsmVApXdqz5n5hgF9HQulsI6T2V-Rj4rmTNali3F65clK9RTf2HPTuJGa1UjJeaPY-uty1oKa052aksGtiBs9Sm7H_OIervRRgo5ovWBD94iAzez3JtV6uauhrPQlLjordC0pNleM4tqk4YHESMGSM-Clqn4hDP8wq4Y5bq24eQUouwf2g6ViQyLzlRkgdPzXc"
            />
          </div>
          <div className="order-1 w-full space-y-6 md:order-2 md:w-1/2">
            <span className="font-label text-tertiary mb-4 block uppercase tracking-[0.15em]">The Invisible Shield</span>
            <h2 className="font-headline mb-8 text-5xl font-bold tracking-tight">The Magnetic Field</h2>
            <div className="text-on-surface-variant space-y-6 text-lg font-light leading-relaxed">
              <p>
                Earth is a giant magnet. This field is generated by the motion of molten iron alloys in its outer
                core. It extends tens of thousands of kilometers into space, forming the magnetosphere.
              </p>
              <p>
                Without this celestial armor, the solar wind—a stream of charged particles from the Sun—would strip
                away our atmosphere and oceans, rendering Earth as barren as Mars.
              </p>
              <div className="pt-6">
                <div className="mb-4 flex items-start gap-4 p-4 rounded-xl bg-surface-container-low border border-white/5 hover:bg-surface-container-high transition-colors">
                  <span className="material-symbols-outlined text-primary mt-1">shield</span>
                  <div>
                    <p className="text-on-surface font-bold">Deflecting Solar Radiation</p>
                    <p className="text-sm">Protects the planet from harmful cosmic rays and solar flares.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-low border border-white/5 hover:bg-surface-container-high transition-colors">
                  <span className="material-symbols-outlined text-primary mt-1">auto_awesome</span>
                  <div>
                    <p className="text-on-surface font-bold">The Aurora Phenomenon</p>
                    <p className="text-sm">Particles trapped in the field create the Northern and Southern Lights.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: THE LUNAR RHYTHM */}
      <section className="bg-surface-container-low relative overflow-hidden px-8 py-32 md:px-20">
        <div className="bg-secondary-fixed-dim/5 absolute top-0 right-0 h-[500px] w-[500px] rounded-full blur-[150px]" />
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="font-headline mb-10 text-5xl leading-tight font-bold tracking-tighter md:text-7xl">
              The <span className="text-secondary-fixed-dim">Lunar</span> Rhythm
            </h2>
            <p className="text-on-surface-variant mb-12 text-xl font-light leading-relaxed">
              Earth's relationship with its Moon is unique. The gravitational tug-of-war creates our tides and
              stabilizes our axial tilt, ensuring a predictable climate for billions of years.
            </p>
            <div className="space-y-8">
              <div className="border-secondary-fixed-dim bg-surface-container-high/40 group hover:bg-surface-container-highest flex items-center gap-8 rounded-xl border-l-4 p-6 transition-colors">
                <span className="font-headline text-5xl font-black text-secondary-fixed-dim/30 group-hover:text-secondary-fixed-dim/50">
                  01
                </span>
                <div>
                  <h6 className="text-on-surface mb-1 font-bold">Orbital Recession</h6>
                  <p className="text-sm">The Moon is slowly drifting away from Earth at a rate of 3.8cm per year.</p>
                </div>
              </div>
              <div className="border-primary bg-surface-container-high/40 group hover:bg-surface-container-highest flex items-center gap-8 rounded-xl border-l-4 p-6 transition-colors">
                <span className="font-headline text-primary/30 group-hover:text-primary/50 text-5xl font-black">02</span>
                <div>
                  <h6 className="text-on-surface mb-1 font-bold">Tidal Friction</h6>
                  <p className="text-sm">
                    Gravitational energy is slowing down Earth's rotation over millions of years.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative md:col-span-7">
            <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl md:ml-20">
              <img
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="long exposure shot of a dramatic rocky coastline at twilight with the moon hanging low in the sky reflecting on the rising tide"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk1Z_w_bcdF-UwFcH_5fsfd2MfYvevsI5Ku-a2B9V1cDBIJd4RtC8v1eB7k31E1fAN5cg3AvQCqBVE58jG0s8CuPYNKZB_aHW-b69p4HWAVpBj5XtaA7mHARSJQlayFkN8H5kQ_wzUWvIf_TJd__lq7emzlReHxWsqWK2ouVKxgi3gIWUIkPg8Scmryc4y3C7FB8DE4ZXlWR4HCyqjp7LzPTXVYUzoy1PYY9ayb3gEtTebXVzwkZXr4TffLryvrf5LPAForF5p7IM"
              />
              <div className="from-background/80 absolute inset-0 bg-gradient-to-t to-transparent" />
              <div className="absolute right-8 bottom-8 left-8">
                <span className="font-label text-secondary-fixed-dim mb-2 block text-xs uppercase tracking-widest">
                  Coastal Observatory
                </span>
                <p className="font-headline text-2xl font-bold">
                  71% of Earth is covered by water, sculpted by lunar gravity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: LUNAR GEOLOGY */}
      <section className="bg-surface-container-lowest px-8 py-32 md:px-20">
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <span className="font-label text-secondary-fixed-dim mb-4 block text-xs uppercase tracking-[0.3em]">
            A World of Silicates & Dust
          </span>
          <h2 className="font-headline mb-6 text-5xl font-bold">Lunar Geology</h2>
          <p className="text-on-surface-variant text-lg font-light leading-relaxed">
            The Moon's surface is a geological archive of the early Solar System, preserved for billions of years
            without the erosion of wind or water.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              t: 'Lunar Maria',
              d: 'Vast, dark plains formed by ancient volcanic eruptions. These "seas" cover about 16% of the surface, mostly on the side facing Earth.',
              src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBn2vY9G3f9wR0S3Jv9_Zp7V_oQWz7XyN7H7m6X1vQz7Z6V5U4T3R2Q1P0O9N8M7L6K5J4I3H2G1F0E9D8C7B6A5',
              alt: 'High detailed shot of the dark volcanic plains known as lunar maria',
            },
            {
              t: 'The Highlands',
              d: 'Light-colored, mountainous regions heavily scarred by billions of years of impact craters. Composed largely of anorthosite rock.',
              src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzHEfPoVPm4sfC4_fB-sGMKdi7U7WkrMpb_F3jOoIG9rk06zSKqn_fEEH7UvuyT56HT9rO7FQhcV_TBK-OyCeDA9R6OWj9eE4W9Diso4KLTgHGcXWEJDgnTwKWmsB6PRzhQdGhEyQpSB-I1tQDwMkfpXzyzb2Mo6hT3Nk18bd2EtOFg9Dy79q5wGk-yqTuSn-_WwwQ1QNMF05f3RoLA8sNC8Pv6imV516e39YvRAcaT2ACf_cuNiJKDH1txWVUhe6-8C51JMfILnA',
              alt: 'Detailed view of the bright, cratered lunar highlands',
            },
            {
              t: 'Impact Craters',
              d: 'From microscopic pits to basins hundreds of miles wide, the Moon is a historical record of cosmic collisions across the eons.',
              src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0M2gQpyGSXtK2wReh2O9b7AFUnXsXGhRjUKcOjr5BeXu-QG3SdYxbl5m8PInDBGjc8lpFTKk5cg5f7SzM-HcsPy0XjiXprvoLCgL1z3IFFlCkATFNAzoys7Fuk6iOcBmvJQ8MQaXUvm-BugZy8CZ-8UnjD-IbcTZrjWZsKOvGgZsQBk9bmr6C3MtfMRNHcFVTQD3FGPhCA5lxKR-9EPlfyKzXqVFZ3RP9w40dVDtM1TVf-9H5ZnndmEx9eTvYrrZAZcMWdZu7R94',
              alt: 'Extreme close up of Tycho crater on the moon surface',
            },
          ].map((c) => (
            <div
              key={c.t}
              className="group border-outline-variant/10 hover:shadow-primary/5 cursor-pointer rounded-2xl bg-surface-container p-1 transition-all hover:shadow-2xl"
            >
              <div className="relative mb-6 aspect-square overflow-hidden rounded-xl">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt={c.alt}
                  src={c.src}
                />
                <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-transparent" />
              </div>
              <div className="px-6 pb-8">
                <h4 className="font-headline text-secondary-fixed-dim mb-3 text-2xl font-bold">{c.t}</h4>
                <p className="text-on-surface-variant text-sm font-light">{c.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: PHASES OF LIGHT (Trail Animation) */}
      <section className="border-outline-variant/10 border-y px-8 py-32 md:px-20">
        <div className="flex flex-col items-center gap-16 md:flex-row">
          <div className="w-full md:w-1/2">
            <span className="font-label text-primary mb-4 block text-xs uppercase tracking-widest">
              The 29.5 Day Cycle
            </span>
            <h2 className="font-headline mb-8 text-5xl font-bold">The Phases of Light</h2>
            <p className="text-on-surface-variant mb-8 text-lg font-light leading-relaxed">
              The Moon does not produce its own light; it reflects the Sun. As it orbits Earth, the portion of its
              illuminated side visible to us changes, creating the lunar cycle.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {trail.map((style, index) => (
                <animated.div
                  key={phases[index].title}
                  style={style}
                  className="border-outline-variant/10 bg-surface-container-high/30 rounded-xl border p-5 hover:bg-surface-container-highest transition-all duration-300"
                >
                  <div className="mb-2 flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary-fixed-dim">{phases[index].icon}</span>
                    <span className="font-headline font-bold">{phases[index].title}</span>
                  </div>
                  <p className="text-on-surface-variant text-xs">{phases[index].txt}</p>
                </animated.div>
              ))}
            </div>
          </div>
          <div className="flex w-full justify-center md:w-1/2">
            <div className="relative flex items-center justify-center">
              <div className="bg-primary/5 absolute inset-0 rounded-full blur-[120px]" />
              <img
                className="moon-glow max-w-md animate-[pulse_10s_ease-in-out_infinite] w-full drop-shadow-[0_0_50px_rgba(255,255,255,0.1)] relative z-10"
                alt="Highly detailed photo of the full moon glowing against a pitch black background"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbixT61_D0IR3Y75iJl32wkwK1EZ1L6ip8AE5RmrEBx5hAclGLRSnRO96M0WP9f0nt8v7cizW9kxpviCx4ytMGFs20s7YR6YIKMbS-Svvh4bNY0xcqTVKhuPGFvSRPH1-7rNZLe0PpgX6SLV_paYPKocA8gflk_VdifShehe5LLULCVcr_MoHKHh-1dHwLJ1ZEcVryqQo62KnD7R_4ZYKY7480bIrMOAsw_fp2yuT7GSJl6aKdlfk6-dkPGyOxEbmO94Q4JHMJ6Vk"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: REAL-TIME TELEMETRY */}
      <section id="telemetry-section" className="px-8 py-32 text-center md:px-20 bg-surface-container-lowest/50">
        <div className="mx-auto mb-20 max-w-3xl">
          <span className="font-label text-primary mb-4 block text-xs uppercase tracking-[0.3em]">
            Data Visualization
          </span>
          <h2 className="font-headline mb-6 text-5xl font-bold">Real-Time Telemetry</h2>
          <p className="text-on-surface-variant">
            Continuous monitoring of our home world's vital signs through global satellite networks.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            { icon: 'thermostat', label: 'Surface Temp', val: '15°C', sub: '(Global Avg)', width: '66%' },
            { icon: 'rotate_right', label: 'Rotation Speed', val: '1,670', sub: 'km/h', width: '100%' },
            { icon: 'public', label: 'Surface Pressure', val: '101.3', sub: 'kPa', width: '50%' },
          ].map((item) => (
            <div key={item.label} className="group border-outline-variant/10 bg-surface-container-low hover:border-primary/30 rounded-2xl border p-10 transition-all duration-300">
              <span
                className="material-symbols-outlined text-primary mb-6 text-4xl block group-hover:scale-110 transition-transform"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {item.icon}
              </span>
              <h5 className="font-headline mb-2 text-xl font-bold">{item.label}</h5>
              <p className="font-headline text-on-surface mb-2 text-3xl font-bold">
                {item.val}{' '}
                <span className="text-on-surface-variant font-body text-sm font-normal">{item.sub}</span>
              </p>
              <div className="bg-surface-container-highest mt-4 h-1 w-full overflow-hidden rounded-full">
                <div className="bg-primary h-full transition-all duration-1000 group-hover:opacity-100 opacity-60" style={{ width: item.width }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: CELESTIAL PARTNER */}
      <section className="mb-20 px-8 py-24 md:px-20">
        <div className="border-outline-variant/10 from-surface-container to-surface-container-lowest relative overflow-hidden rounded-[2rem] border bg-gradient-to-br p-12 text-center shadow-2xl md:p-24">
          <div className="absolute inset-0 z-0">
            <img
              className="h-full w-full scale-125 object-cover opacity-20"
              alt="detailed close-up of the moon's cratered surface against a deep black starless sky"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBn2vY9G3f9wR0S3Jv9_Zp7V_oQWz7XyN7H7m6X1vQz7Z6V5U4T3R2Q1P0O9N8M7L6K5J4I3H2G1F0E9D8C7B6A5"
            />
            <div className="from-surface-container-lowest absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
          </div>
          <div className="relative z-10 mx-auto max-w-2xl">
            <span className="font-label text-secondary-fixed-dim mb-4 block text-sm uppercase tracking-[0.2em]">
              Celestial Partner
            </span>
            <h2 className="font-headline mb-8 text-4xl font-bold md:text-6xl">Our Lunar Sentinel</h2>
            <p className="text-on-surface-variant mb-12 text-lg">
              Locked in a tidal dance, the Moon's phases have guided humanity for millennia. From driving the
              rise and fall of our oceans to serving as the staging ground for the historic Apollo missions, our
              silver companion remains our closest window into the infinite.
            </p>
            <div className="flex flex-col justify-center gap-4 md:flex-row">
              <button
                type="button"
                className="bg-secondary-fixed-dim text-on-secondary-container rounded-xl px-10 py-5 font-bold transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(233,196,0,0.3)] active:scale-95"
              >
                Apollo Mission Logs
              </button>
              <button
                type="button"
                className="glass-effect border-outline-variant text-on-surface rounded-xl border px-10 py-5 transition-colors hover:bg-surface-container-high active:scale-95"
              >
                Tidal Activity Maps
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}