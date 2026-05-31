const heroImageUrl = '/photos/grad_flight.jpg';

export default function App() {
  return (
    <main className="min-h-screen text-white">
      <div className="relative min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${heroImageUrl}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/70" />

        <div className="relative z-10 flex min-h-screen flex-col">
          <header className="flex items-center justify-between px-4 py-6 text-xs uppercase tracking-[0.3em] sm:px-6 sm:text-sm lg:px-10">
            <a className="p-2" href="/" aria-label="Home">
              <img
                className="h-12 w-12 rounded-full object-cover brightness-0 invert"
                src="/photos/pg_logo.png"
                alt="Paragliding Weather home"
              />
            </a>
            <nav className="flex items-center gap-4 text-[0.7rem] sm:gap-6 sm:text-sm">
              <details className="group relative">
                <summary className="flex cursor-pointer list-none items-center gap-2 font-semibold transition hover:text-amber-200">
                  Weather
                  <span className="text-base">▾</span>
                </summary>
                <div className="absolute right-0 top-9 hidden min-w-[10rem] rounded-2xl border border-white/15 bg-black/70 p-3 text-sm shadow-lg backdrop-blur-sm group-open:block">
                  <a
                    className="block rounded-lg px-3 py-2 text-white/90 transition hover:bg-white/10"
                    href="/weather/boulder"
                  >
                    Boulder
                  </a>
                  <a
                    className="mt-1 block rounded-lg px-3 py-2 text-white/90 transition hover:bg-white/10"
                    href="/weather/lookout"
                  >
                    Lookout
                  </a>
                </div>
              </details>
            </nav>
          </header>

          <section className="flex flex-1 items-center px-4 pb-16 sm:px-6 lg:px-10">
            <div className="max-w-2xl" />
          </section>
        </div>
      </div>
    </main>
  );
}