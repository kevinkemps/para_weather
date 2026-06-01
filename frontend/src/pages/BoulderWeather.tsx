import { WindyEmbed } from '../components/weather/WindyEmbed';

const camEmbedUrl = 'https://www.wilderadventures.com/widget/paraglide-cam';
const liveSurfaceWindsUrl =
  'https://www.ecowitt.net/home/share?authorize=4X8Q1D&device_id=b0VFb0Y5eUVJRFdXYkVGVDhMTWk3QT09';
const windsTableUrl = 'https://www.wilderadventures.com/winds/table';
const windsMapUrl = 'https://www.wilderadventures.com/widget/winds/colorado/front-range';
const surfaceWindsForecastUrl =
  'https://embed.windy.com/embed2.html?lat=39.673&lon=-105.271&detailLat=40.053&detailLon=-105.300&width=1050&height=450&zoom=8&level=surface&overlay=wind&product=ecmwf&menu=&message=true&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=true&metricWind=mph&metricTemp=%C2%B0F&radarRange=-1';
const windsAloft10kUrl =
  'https://embed.windy.com/embed2.html?lat=40.070&lon=-105.312&detailLat=40.187&detailLon=-104.238&width=400&height=300&zoom=5&level=700h&overlay=wind&product=ecmwf&menu=&message=true&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=mph&metricTemp=%C2%B0F&radarRange=-1';
const windsAloft14kUrl =
  'https://embed.windy.com/embed2.html?lat=40.070&lon=-105.312&detailLat=40.187&detailLon=-104.238&width=400&height=300&zoom=5&level=600h&overlay=wind&product=ecmwf&menu=&message=true&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=mph&metricTemp=%C2%B0F&radarRange=-1';
const cloudCoverageUrl =
  'https://embed.windy.com/embed2.html?lat=40.051&lon=-105.110&detailLat=40.014&detailLon=-105.285&width=1050&height=450&zoom=8&level=surface&overlay=clouds&product=ecmwf&menu=&message=true&marker=&calendar=now&pressure=true&type=map&location=coordinates&detail=&metricWind=mph&metricTemp=%C2%B0F&radarRange=-1';
const radarUrl =
  'https://embed.windy.com/embed2.html?lat=39.902&lon=-104.793&detailLat=40.187&detailLon=-104.238&width=1050&height=450&zoom=8&level=surface&overlay=radar&product=radar&menu=&message=true&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=mph&metricTemp=%C2%B0F&radarRange=-1';
const overdevelopmentUrl =
  'https://embed.windy.com/embed2.html?lat=40.051&lon=-105.110&detailLat=40.014&detailLon=-105.285&width=1050&height=450&zoom=8&level=surface&overlay=thunder&product=ecmwf&menu=&message=true&marker=&calendar=now&pressure=true&type=map&location=coordinates&detail=&metricWind=mph&metricTemp=%C2%B0F&radarRange=-1';
const raspWindgramUrl = 'https://flymarshall.com/co-4k/show_windgram.php?site=Boulder&day=0';
const raspSiteUrl = 'https://flymarshall.com/co-4k/';

const sectionCardClass =
  'overflow-hidden rounded-3xl border border-white/15 bg-black/40 shadow-2xl backdrop-blur-sm';

export function BoulderWeather() {
  return (
    <section className="flex flex-1 items-center px-4 pb-16 sm:px-6 lg:px-10">
      <div className="w-full space-y-10">
        <div className="max-w-3xl space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Boulder Forecast</h1>
          <p className="text-sm text-white/80">Live cams, winds, and model guidance for Boulder.</p>
        </div>

        <div className={sectionCardClass}>
          <iframe
            title="Wilder Adventures paraglide cam"
            className="h-[70vh] min-h-[24rem] w-full"
            src={camEmbedUrl}
            loading="lazy"
            frameBorder="0"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Live Surface Winds</h2>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div className={sectionCardClass}>
              <iframe
                title="North Boulder Ridge Station"
                className="h-[26rem] w-full"
                src={liveSurfaceWindsUrl}
                loading="lazy"
                frameBorder="0"
              />
            </div>
            <div className="space-y-6">
              <div className={sectionCardClass}>
                <iframe
                  title="Regional winds table"
                  className="h-[18rem] w-full"
                  src={windsTableUrl}
                  loading="lazy"
                  frameBorder="0"
                />
              </div>
              <div className={sectionCardClass}>
                <iframe
                  title="Front Range wind map"
                  className="h-[22rem] w-full"
                  src={windsMapUrl}
                  loading="lazy"
                  frameBorder="0"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Surface Winds Forecast</h2>
          <div className={sectionCardClass}>
            <WindyEmbed
              title="ECMWF surface winds"
              className="h-[70vh] min-h-[24rem] w-full"
              src={surfaceWindsForecastUrl}
            />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Forecasted Winds Aloft</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className={sectionCardClass}>
              <WindyEmbed
                title="10,000 ft winds"
                className="h-[22rem] w-full"
                src={windsAloft10kUrl}
              />
            </div>
            <div className={sectionCardClass}>
              <WindyEmbed
                title="14,000 ft winds"
                className="h-[22rem] w-full"
                src={windsAloft14kUrl}
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Cloud Coverage</h2>
          <div className={sectionCardClass}>
            <WindyEmbed
              title="ECMWF cloud coverage"
              className="h-[70vh] min-h-[24rem] w-full"
              src={cloudCoverageUrl}
            />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Overdevelopment</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className={sectionCardClass}>
              <WindyEmbed title="Radar" className="h-[22rem] w-full" src={radarUrl} />
            </div>
            <div className={sectionCardClass}>
              <WindyEmbed
                title="ECMWF thunder"
                className="h-[22rem] w-full"
                src={overdevelopmentUrl}
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Atmospheric Stability</h2>
          <div className={sectionCardClass}>
            <iframe
              title="RASP Windgram"
              className="h-[70vh] min-h-[24rem] w-full"
              src={raspWindgramUrl}
              loading="lazy"
              frameBorder="0"
            />
          </div>
          <div className={sectionCardClass}>
            <iframe
              title="Colorado RASP"
              className="h-[70vh] min-h-[24rem] w-full"
              src={raspSiteUrl}
              loading="lazy"
              frameBorder="0"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Big Picture</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            <a
              className="rounded-full border border-white/15 bg-black/30 px-4 py-2 transition hover:bg-white/10"
              href="https://forecast.weather.gov/product.php?site=NWS&issuedby=BOU&product=AFD&format=CI&version=1&glossary=1"
              target="_blank"
              rel="noreferrer"
            >
              Area Forecast Discussion
            </a>
            <a
              className="rounded-full border border-white/15 bg-black/30 px-4 py-2 transition hover:bg-white/10"
              href="https://aviationweather-cprk.ncep.noaa.gov/progchart/sfc"
              target="_blank"
              rel="noreferrer"
            >
              Surface Prog Chart
            </a>
            <a
              className="rounded-full border border-white/15 bg-black/30 px-4 py-2 transition hover:bg-white/10"
              href="https://forecast.weather.gov/product.php?issuedby=BOU&product=SRG&site=bou"
              target="_blank"
              rel="noreferrer"
            >
              NWS Soaring Forecast
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
