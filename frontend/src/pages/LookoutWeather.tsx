import { WindyEmbed } from '../components/weather/WindyEmbed';

const lookoutDetailedUrl =
  'https://widget.holfuy.com/?station=1295&su=mph&t=F&lang=en&mode=detailed';
const lookoutAverageUrl =
  'https://widget.holfuy.com/?station=1295&su=mph&t=F&lang=en&mode=average&avgrows=32';
const nwtcWindsUrl = 'https://midcdmz.nrel.gov/nwtc_m2/display/';
const windsMapUrl = 'https://www.wilderadventures.com/widget/winds/colorado/front-range';
const surfaceWindsForecastUrl =
  'https://embed.windy.com/embed2.html?lat=39.364&lon=-105.233&detailLat=39.746&detailLon=-105.239&width=1050&height=550&zoom=8&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=true&metricWind=mph&metricTemp=%C2%B0F&radarRange=-1';
const nwsGraphicalUrl =
  'https://forecast.weather.gov/MapClick.php?lat=39.7567&lon=-105.225&unit=0&lg=english&FcstType=graphical';
const windsAloft10kUrl =
  'https://embed.windy.com/embed2.html?lat=39.748&lon=-105.240&detailLat=39.746&detailLon=-105.235&width=400&height=300&zoom=5&level=700h&overlay=wind&product=ecmwf&menu=&message=true&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=mph&metricTemp=%C2%B0F&radarRange=-1';
const windsAloft14kUrl =
  'https://embed.windy.com/embed2.html?lat=39.748&lon=-105.240&detailLat=39.746&detailLon=-105.235&width=400&height=300&zoom=5&level=600h&overlay=wind&product=ecmwf&menu=&message=true&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=mph&metricTemp=%C2%B0F&radarRange=-1';
const lowCloudsUrl =
  'https://embed.windy.com/embed2.html?lat=39.748&lon=-105.240&detailLat=39.746&detailLon=-105.235&width=1050&height=450&zoom=7&level=600h&overlay=lclouds&product=ecmwf&menu=&message=true&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=mph&metricTemp=%C2%B0F&radarRange=-1';
const midCloudsUrl =
  'https://embed.windy.com/embed2.html?lat=39.749&lon=-105.239&detailLat=39.732&detailLon=-104.863&width=1050&height=450&zoom=7&level=surface&overlay=mclouds&product=ecmwf&menu=&message=true&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=mph&metricTemp=%C2%B0F&radarRange=-1';
const highCloudsUrl =
  'https://embed.windy.com/embed2.html?lat=39.748&lon=-105.240&detailLat=39.746&detailLon=-105.235&width=1050&height=450&zoom=7&level=600h&overlay=hclouds&product=ecmwf&menu=&message=true&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=mph&metricTemp=%C2%B0F&radarRange=-1';
const thunderUrl =
  'https://embed.windy.com/embed2.html?lat=39.748&lon=-105.240&detailLat=39.746&detailLon=-105.235&width=1050&height=450&zoom=7&level=surface&overlay=thunder&product=ecmwf&menu=&message=true&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=mph&metricTemp=%C2%B0F&radarRange=-1';
const radarUrl =
  'https://embed.windy.com/embed2.html?lat=39.748&lon=-105.240&detailLat=39.746&detailLon=-105.235&width=1050&height=450&zoom=7&level=surface&overlay=radar&product=radar&menu=&message=true&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=mph&metricTemp=%C2%B0F&radarRange=-1';
const raspWindgramUrl = 'https://flymarshall.com/co-4k/show_windgram.php?site=MtZion&day=0';
const raspSiteUrl = 'https://flymarshall.com/co-4k/';
const bigPictureUrl =
  'https://embed.windy.com/embed2.html?lat=37.719&lon=-101.250&zoom=3&level=surface&overlay=wind&menu=&message=true&marker=&calendar=now&pressure=true&type=map&location=coordinates&detail=&detailLat=39.893&detailLon=-105.219&metricWind=mph&metricTemp=%C2%B0F&radarRange=-1';

const sectionCardClass =
  'overflow-hidden rounded-3xl border border-white/15 bg-black/40 shadow-2xl backdrop-blur-sm';

export function LookoutWeather() {
  return (
    <section className="flex flex-1 items-center px-4 pb-16 sm:px-6 lg:px-10">
      <div className="w-full space-y-10">
        <div className="max-w-3xl space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Lookout Forecast</h1>
          <p className="text-sm text-white/80">Live winds, model guidance, and stability tools.</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Live Surface Winds</h2>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div className="space-y-6">
              <div className={sectionCardClass}>
                <iframe
                  title="Lookout detailed station"
                  className="h-[16rem] w-full"
                  frameBorder="0"
                  marginHeight={1}
                  marginWidth={1}
                  scrolling="no"
                  src={lookoutDetailedUrl}
                />
              </div>
              <div className={sectionCardClass}>
                <iframe
                  title="Lookout station averages"
                  className="h-[13rem] w-full"
                  frameBorder="0"
                  marginHeight={1}
                  marginWidth={1}
                  scrolling="no"
                  src={lookoutAverageUrl}
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className={sectionCardClass}>
                <iframe
                  title="NWTC wind summary"
                  className="h-[18rem] w-full"
                  src={nwtcWindsUrl}
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
          <div className={sectionCardClass}>
            <iframe
              title="NWS graphical forecast"
              className="h-[70vh] min-h-[24rem] w-full"
              src={nwsGraphicalUrl}
              loading="lazy"
              frameBorder="0"
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
            <WindyEmbed title="Low clouds" className="h-[22rem] w-full" src={lowCloudsUrl} />
          </div>
          <div className={sectionCardClass}>
            <WindyEmbed title="Mid clouds" className="h-[22rem] w-full" src={midCloudsUrl} />
          </div>
          <div className={sectionCardClass}>
            <WindyEmbed title="High clouds" className="h-[22rem] w-full" src={highCloudsUrl} />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Overdevelopment</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className={sectionCardClass}>
              <WindyEmbed title="ECMWF thunder" className="h-[22rem] w-full" src={thunderUrl} />
            </div>
            <div className={sectionCardClass}>
              <WindyEmbed title="Radar" className="h-[22rem] w-full" src={radarUrl} />
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
          <div className={sectionCardClass}>
            <WindyEmbed
              title="Big picture winds"
              className="h-[70vh] min-h-[24rem] w-full"
              src={bigPictureUrl}
            />
          </div>
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
              href="https://www.aviationweather.gov/progchart/sfc"
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
