import { HeroEntranceImage } from '../components/HeroEntranceImage'

export function UniversePage() {
  return (
    <main className="text-on-surface selection:bg-primary/30 pt-24">
      <section className="relative flex h-[921px] items-center overflow-hidden px-12 lg:px-24">
        <div className="absolute inset-0 z-0">
          <HeroEntranceImage
            className="h-full w-full object-cover opacity-60"
            alt="stunning high resolution nebula with deep purple and magenta gas clouds and bright sparkling stars in deep space"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbxy6mYuv0a5Xqy3PHUIO1WF4KtwsC82JapR08iLEggAzePKtX54p1Hx1SQNok0ivaeozk2a9mjNzU9_3ovtZID7SPIeUSHhp2aUM4PNO3W5gtkmr0eow254VcKV_IuXNfhQQuK1Z1CZLamYjmeQhmXL9fnrwxsPkTdfbQbNsxM6m0N272Yvm2cVQ5IfzMkvpU4RRo829QJ88v9jAP2ni_UEJ1bYJF5hYvuQ7OwaGx6Ob0oDldojVp7prHvHAy21J-dAQwog6z0ow"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl">
          <div className="border-tertiary/10 bg-tertiary-container mb-6 inline-flex items-center space-x-2 rounded-full border px-4 py-1 text-tertiary-fixed-dim">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
              auto_awesome
            </span>
            <span className="font-label text-xs uppercase tracking-widest">Cosmic Genesis</span>
          </div>
          <h1 className="font-headline text-on-surface mb-8 text-7xl font-bold leading-none tracking-tighter md:text-9xl">
            THE <span className="text-primary italic">INFINITE</span>
            <br />
            EXPANSE
          </h1>
          <p className="text-on-surface-variant mb-10 max-w-2xl text-xl font-light leading-relaxed md:text-2xl">
            From the singular point of the Big Bang to the unfathomable reach of the cosmic web, explore the
            fabric of existence itself.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              className="ion-glow text-on-primary font-headline rounded-xl px-8 py-4 font-bold shadow-[0_0_20px_rgba(0,218,243,0.3)] transition-transform hover:scale-105"
            >
              CHART THE VOID
            </button>
            <button
              type="button"
              className="border-outline-variant/30 bg-surface-container-high/40 text-on-surface rounded-xl border px-8 py-4 backdrop-blur-md transition-colors hover:bg-surface-container-high"
            >
              VIEW TELEMETRY
            </button>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-lowest px-8 py-24 lg:px-24">
        <div className="grid h-auto grid-cols-1 gap-6 md:h-[900px] md:grid-cols-12">
          <div className="group border-outline-variant/10 bg-surface-container relative flex flex-col justify-end overflow-hidden rounded-xl p-10 md:col-span-7">
            <img
              className="absolute inset-0 h-full w-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-110"
              alt="dramatic artistic representation of a supermassive black hole with glowing accretion disk bending light"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMPg0NEesO4GKhI3hHY0ihYfwMYXTcp9ad6bu3gFV0LhaQtMzJs5qzSQ3Fz2Wb3vCF-iE3ekOZes60mVu6TdWTDqvYXAMSU51vVTtOMizEuprEzbC8tfkLAvwh7G1ooh2VfhMm_TgVzlw0sfAxrZAEQ5fDX0m6BuPpr_Knvpfi7cJ1ITg_zV0IZa3f-8i4_KSMRNRIBrex8V8sAmTs_mbj9nzli_CwAqdmPp55kr9vrkkef3oh2ecBfXZR0D_HxWmMLj_Fq9jLhZs"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent" />
            <div className="relative">
              <span className="font-label text-secondary-fixed-dim text-xs uppercase tracking-[0.2em]">
                Event Horizon
              </span>
              <h3 className="font-headline mt-2 mb-4 text-4xl font-bold">Singularity Points</h3>
              <p className="text-on-surface-variant max-w-md">
                Regions where gravity is so intense that nothing, not even light, can escape. They are the engines
                at the heart of most galaxies.
              </p>
            </div>
          </div>

          <div className="border-tertiary/10 bg-surface-container-high relative flex flex-col overflow-hidden rounded-xl p-10 md:col-span-5">
            <div className="cosmic-gradient absolute inset-0 opacity-50" />
            <div className="relative flex h-full flex-col justify-between">
              <div>
                <span className="font-label text-tertiary text-xs uppercase tracking-[0.2em]">
                  Invisible Scaffold
                </span>
                <h3 className="font-headline mt-2 mb-4 text-4xl font-bold">Dark Matter</h3>
              </div>
              <div className="space-y-6">
                <p className="text-on-surface-variant">
                  Comprising roughly 27% of the universe, it provides the gravitational glue that prevents galaxies
                  from flying apart.
                </p>
                <div className="border-outline-variant/20 border-t pt-6">
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="font-label text-on-surface-variant">OBSERVABLE MASS</span>
                    <span className="text-primary">5%</span>
                  </div>
                  <div className="bg-surface-container-lowest h-1 w-full overflow-hidden rounded-full">
                    <div className="bg-primary h-full w-[5%] shadow-[0_0_10px_#00daf3]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-outline-variant/10 bg-surface-container-high relative overflow-hidden rounded-xl p-10 md:col-span-5">
            <div className="absolute top-0 right-0 p-8">
              <span className="material-symbols-outlined text-secondary/30 text-4xl">sensors</span>
            </div>
            <h3 className="font-headline mb-4 text-3xl font-bold">The Afterglow</h3>
            <p className="text-on-surface-variant mb-6 leading-relaxed">
              The Cosmic Microwave Background (CMB) is the oldest light in the universe, imprinted on the sky when
              the universe was just 380,000 years old.
            </p>
            <div className="border-outline-variant/10 bg-surface-container-lowest rounded-lg border p-6">
              <span className="font-label text-primary mb-2 block text-xs">SIGNAL FREQUENCY</span>
              <div className="flex h-12 items-end gap-1">
                <div className="bg-primary/20 h-4 w-1" />
                <div className="bg-primary/40 h-8 w-1" />
                <div className="bg-primary h-12 w-1" />
                <div className="bg-primary/60 h-6 w-1" />
                <div className="bg-primary/30 h-10 w-1" />
                <div className="bg-primary/80 h-9 w-1" />
              </div>
            </div>
          </div>

          <div className="border-outline-variant/10 bg-surface-container relative flex items-center justify-between overflow-hidden rounded-xl p-10 md:col-span-7">
            <div className="relative z-10 max-w-sm">
              <span className="font-label text-primary-fixed text-xs uppercase tracking-[0.2em]">
                Hubble&apos;s Legacy
              </span>
              <h3 className="font-headline mt-2 mb-4 text-4xl font-bold">Constant Expansion</h3>
              <p className="text-on-surface-variant mb-6">
                Space itself is stretching. Every galaxy is moving away from every other, at an accelerating rate
                driven by Dark Energy.
              </p>
              <a className="text-primary group inline-flex items-center font-bold" href="#">
                Explore Redshift
                <span className="material-symbols-outlined ml-2 transition-transform group-hover:translate-x-2">
                  arrow_forward
                </span>
              </a>
            </div>
            <div className="relative hidden h-64 w-64 lg:block">
              <div className="border-primary/10 absolute inset-0 animate-pulse rounded-full border-2" />
              <div className="border-primary/20 absolute inset-4 rounded-full border" />
              <div className="border-primary/40 absolute inset-12 rounded-full border" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-primary h-4 w-4 rounded-full shadow-[0_0_20px_#00daf3]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-8 py-32 lg:px-24">
        <div className="bg-tertiary/5 absolute -left-20 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full blur-[120px]" />
        <div className="flex flex-col gap-20 lg:flex-row">
          <div className="space-y-8 lg:w-1/3">
            <h2 className="font-headline text-on-surface text-5xl font-bold tracking-tight">
              MIND
              <br />
              BENDING
              <br />
              <span className="text-tertiary">REALITIES</span>
            </h2>
            <p className="text-on-surface-variant text-lg">
              The universe operates on scales that defy human intuition. Here, time and space weave a complex
              tapestry of the impossible.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:w-2/3">
            <div className="border-outline-variant/30 hover:border-primary space-y-4 border-l py-4 pl-8 transition-colors">
              <span className="font-label text-primary text-2xl font-bold">93.02B</span>
              <h4 className="font-headline text-xl font-semibold">Light-Year Diameter</h4>
              <p className="text-on-surface-variant text-sm">
                The diameter of the observable universe, even though it&apos;s only 13.8 billion years old.
              </p>
            </div>
            <div className="border-outline-variant/30 hover:border-tertiary space-y-4 border-l py-4 pl-8 transition-colors">
              <span className="font-label text-tertiary text-2xl font-bold">2 TRILLION</span>
              <h4 className="font-headline text-xl font-semibold">Estimated Galaxies</h4>
              <p className="text-on-surface-variant text-sm">
                Each galaxy contains hundreds of billions of stars, potentially hosting quadrillions of worlds.
              </p>
            </div>
            <div className="border-outline-variant/30 hover:border-secondary-fixed-dim space-y-4 border-l py-4 pl-8 transition-colors">
              <span className="font-label text-secondary-fixed-dim text-2xl font-bold">SPAGHETTIFICATION</span>
              <h4 className="font-headline text-xl font-semibold">Vertical Tides</h4>
              <p className="text-on-surface-variant text-sm">
                Falling into a black hole would stretch your body into a thin strand of atoms due to extreme tidal
                forces.
              </p>
            </div>
            <div className="border-outline-variant/30 hover:border-primary space-y-4 border-l py-4 pl-8 transition-colors">
              <span className="font-label text-primary text-2xl font-bold">95% UNKNOWN</span>
              <h4 className="font-headline text-xl font-semibold">The Invisible Bulk</h4>
              <p className="text-on-surface-variant text-sm">
                Dark matter and dark energy make up 95% of everything. Everything we see—stars, planets, us—is just
                5%.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-24 lg:px-24">
        <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
          <div>
            <span className="font-label text-primary uppercase tracking-widest">The Great Islands</span>
            <h2 className="font-headline mt-4 text-6xl font-bold">GALACTIC REALMS</h2>
          </div>
          <div className="flex space-x-4">
            <button
              type="button"
              className="border-outline-variant flex h-12 w-12 items-center justify-center rounded-full border transition-colors hover:bg-surface-container"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button
              type="button"
              className="border-outline-variant flex h-12 w-12 items-center justify-center rounded-full border transition-colors hover:bg-surface-container"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-8 lg:flex-row">
          {[
            {
              sub: 'Local Group',
              title: 'Andromeda (M31)',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxQHhVQUXFhiLxBs7j-EigDmhWCFNCQgJPqKAk1Ctf90rlwithjSVW8T8lily4G53N0BqUjq_EmFJW1_eZSs26XgfHUcT7mwOw4373y8CZwHRn6bU4GZBQoUicH6XJxuZeJtDUojwLXxSfSpBZTMFKcpoxgd8R3rYWejwXIDkjkX2LH1IsN3rITLVP9mtZV86xMpIkIFmTw06RPyUL4rxWuvjzSYBH4sWh-9ixwLT5sY9v_qpIlver9cDKLPrCMP6poHJ-eLrwcTs',
              alt: 'the Andromeda galaxy M31 with its distinctive spiral arms and bright core against a star studded black sky',
              subClass: 'text-primary',
              offset: '',
            },
            {
              sub: 'Virgo Cluster',
              title: 'Sombrero Galaxy',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTp9oCCyBzFSeJItyiuhLQb_KcH62kQ582dyJFqMrJhkV0y_qsuapPRPV-BiKHVr3ePi9eMIQ-FQNziJD-ZwnLc8pzZ0aGOATwRiAQcE9lu-m3pzlqpDNXwKwGWRXgbLBkmMT9hy4lrwgI06I9zwD0tUwaL5cxaTKZ_1XSLdpA8BFzAzTldtDRtRqSxNUTximZQAcB6hR8mcQ7F4eOX1pJk7iNECD7eZiyecRuPA7MnKwbg2VvWgq6_KtTerJPd1KOqC3mM7TV05w',
              alt: 'the Sombrero galaxy with its prominent dark dust lane and brilliant white core appearing like a wide-brimmed hat',
              subClass: 'text-tertiary',
              offset: 'lg:mt-12',
            },
            {
              sub: 'Canes Venatici',
              title: 'Whirlpool (M51)',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_c5Mz1iUI_buVoDJ_dmGWGuprc7VcG3yoU0thdTIuPrHaZdWOBkpWwnittlc7Iiy28k2PTQAV_7PB0L12EAxm3PHYt03BuFbs2_-fzwsLj3fDd7GKRjxIeFN5yK0vgD9jqS2ifjwki-wzNO9o_1eV43kzfGRonwBfTLeJvd9WQ2Cg1MhRAsXuqxeodDvIaBsmcHM3Cv4gV-ash1h_uubZcpsU6QCG00ZiyYF6yi9qbxB1oZ6W4GTdTvQaIlC6YmjCTysq1VdZacc',
              alt: 'vibrant spiral whirlpool galaxy M51 with glowing blue star forming regions and golden core',
              subClass: 'text-secondary-fixed-dim',
              offset: 'lg:mt-24',
            },
          ].map((g) => (
            <div key={g.title} className={`group flex-1 cursor-pointer ${g.offset}`}>
              <div className="relative mb-6 h-[500px] overflow-hidden rounded-xl">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt={g.alt}
                  src={g.img}
                />
                <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/0" />
                <div className="border-outline-variant/20 bg-surface-container/60 absolute bottom-6 left-6 right-6 rounded-xl border p-6 backdrop-blur-xl">
                  <span className={`font-label text-[10px] uppercase tracking-widest ${g.subClass}`}>{g.sub}</span>
                  <h4 className="font-headline text-2xl font-bold">{g.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-32 lg:px-24">
        <div className="border-outline-variant/10 bg-surface-container relative flex flex-col items-center overflow-hidden rounded-3xl p-12 text-center lg:p-24">
          <div className="absolute top-0 left-0 h-full w-full">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#00daf310_0%,transparent_70%)]" />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-headline mb-8 text-5xl leading-tight font-bold md:text-7xl">
              YOU ARE THE UNIVERSE OBSERVING ITSELF
            </h2>
            <p className="text-on-surface-variant mb-12 text-xl">
              &ldquo;The cosmos is within us. We are made of star-stuff. We are a way for the cosmos to know
              itself.&rdquo; — Carl Sagan
            </p>
            <button
              type="button"
              className="ion-glow text-on-primary font-headline rounded-full px-10 py-5 text-lg font-extrabold tracking-widest uppercase transition-all hover:shadow-[0_0_30px_rgba(0,218,243,0.4)]"
            >
              BEGIN VOYAGE
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
