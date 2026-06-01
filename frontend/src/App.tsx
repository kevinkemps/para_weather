import { useEffect, useRef, useState } from 'react';

const heroImageUrl = '/photos/grad_flight.jpg';
const lookoutImageUrl = '/photos/lookout.jpg';
const lookoutEmbedUrl =
  'https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=default&metricTemp=default&metricWind=default&zoom=11&overlay=wind&product=ecmwf&level=surface&lat=39.712&lon=-105.262&detailLat=39.756&detailLon=-105.243&detail=true&pressure=true';

type Route = 'home' | 'lookout';

function getRoute(): Route {
  if (typeof window === 'undefined') {
    return 'home';
  }

  return window.location.pathname.startsWith('/weather/lookout') ? 'lookout' : 'home';
}

function LookoutContent() {
  return (
    <section className="flex flex-1 items-center px-4 pb-16 sm:px-6 lg:px-10">
      <div className="w-full">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
          <div className="order-first lg:order-none lg:col-start-2 lg:flex lg:justify-end">
            <iframe
              title="Lookout detailed station"
              className="h-[250px] w-full max-w-[580px] rounded-2xl border border-white/15 bg-black/40"
              frameBorder="0"
              marginHeight={1}
              marginWidth={1}
              scrolling="no"
              src="https://widget.holfuy.com/?station=1295&su=mph&t=C&lang=en&mode=detailed"
            />
          </div>
          <div className="space-y-4 lg:col-start-1 lg:max-w-3xl">
            <iframe
              title="Lookout station averages"
              className="h-[170px] w-full rounded-2xl border border-white/15 bg-black/40"
              frameBorder="0"
              marginHeight={1}
              marginWidth={1}
              scrolling="no"
              src="https://widget.holfuy.com/?station=1295&su=mph&t=C&lang=en&mode=average&avgrows=32"
            />
            <div className="overflow-hidden rounded-3xl border border-white/15 bg-black/40 shadow-2xl backdrop-blur-sm">
              <iframe
                title="Windy forecast for Lookout"
                className="h-[70vh] min-h-[22rem] w-full"
                src={lookoutEmbedUrl}
                loading="lazy"
                frameBorder="0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const route = getRoute();
  const heroImage = route === 'lookout' ? lookoutImageUrl : heroImageUrl;
  const [isWeatherOpen, setIsWeatherOpen] = useState(false);
  const weatherMenuRef = useRef<HTMLDetailsElement | null>(null);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (!isWeatherOpen) {
        return;
      }

      const target = event.target as Node | null;
      if (weatherMenuRef.current && target && !weatherMenuRef.current.contains(target)) {
        setIsWeatherOpen(false);
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isWeatherOpen]);

  return (
    <main className="min-h-screen text-white">
      <div className="relative min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${heroImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/70" />

        <div className="relative z-10 flex min-h-screen flex-col">
          <header className="relative z-20 flex items-center justify-between px-4 py-6 text-xs uppercase tracking-[0.3em] sm:px-6 sm:text-sm lg:px-10">
            <a className="p-2" href="/" aria-label="Home">
              <img
                className="h-12 w-12 rounded-full object-cover brightness-0 invert"
                src="/photos/pg_logo.png"
                alt="Paragliding Weather home"
              />
            </a>
            <nav className="relative z-20 flex items-center gap-4 text-[0.7rem] sm:gap-6 sm:text-sm">
              <details
                ref={weatherMenuRef}
                className="group relative z-20"
                open={isWeatherOpen}
                onToggle={(event) =>
                  setIsWeatherOpen((event.currentTarget as HTMLDetailsElement).open)
                }
              >
                <summary className="flex cursor-pointer list-none items-center gap-2 font-semibold transition hover:text-amber-200">
                  Weather
                  <span className="text-base">▾</span>
                </summary>
                <div className="absolute right-0 top-9 z-30 hidden min-w-[10rem] rounded-2xl border border-white/15 bg-black/70 p-3 text-sm shadow-lg backdrop-blur-sm group-open:block">
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

          {route === 'lookout' ? (
            <LookoutContent />
          ) : (
            <section className="flex flex-1 items-center px-4 pb-16 sm:px-6 lg:px-10">
              <div className="max-w-2xl" />
            </section>
          )}
        </div>
      </div>
    </main>
  );
}