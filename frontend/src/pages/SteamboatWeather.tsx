import { useState } from 'react';

import { WindyEmbed } from '../components/weather/WindyEmbed';

const steamboatSurfaceWindsUrl =
  'https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=default&metricTemp=default&metricWind=default&zoom=10&overlay=wind&product=ecmwf&level=surface&lat=40.453&lon=-106.752&detailLat=40.430&detailLon=-106.809&detail=true&pressure=true&message=true';
const steamboatWindsAloft10kUrl =
  'https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=default&metricTemp=default&metricWind=default&zoom=10&overlay=wind&product=ecmwf&level=700h&lat=40.453&lon=-106.752&detailLat=40.430&detailLon=-106.809&detail=true&pressure=true&message=true';
const steamboatWindsAloft14kUrl =
  'https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=default&metricTemp=default&metricWind=default&zoom=10&overlay=wind&product=ecmwf&level=600h&lat=40.453&lon=-106.752&detailLat=40.430&detailLon=-106.809&detail=true&pressure=true&message=true';
const steamboatCloudsUrl =
  'https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=default&metricTemp=default&metricWind=default&zoom=10&overlay=clouds&product=ecmwf&level=surface&lat=40.453&lon=-106.752&detailLat=40.430&detailLon=-106.809&detail=true&pressure=true&message=true';
const steamboatRadarUrl =
  'https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=default&metricTemp=default&metricWind=default&zoom=10&overlay=radar&product=radar&level=surface&lat=40.453&lon=-106.752&detailLat=40.430&detailLon=-106.809&detail=true&pressure=true&message=true';
const steamboatThunderUrl =
  'https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=default&metricTemp=default&metricWind=default&zoom=10&overlay=thunder&product=ecmwf&level=surface&lat=40.453&lon=-106.752&detailLat=40.430&detailLon=-106.809&detail=true&pressure=true&message=true';
const raspWindgramUrl = 'https://flymarshall.com/co-4k/show_windgram.php?site=Steamboat&day=0';
const skewTUrl = 'https://flymarshall.com/co-4k/show_sounding.php?site=sounding18'
const cameraUrls = [
  {
    title: 'Christie Cam',
    src: 'https://www.youtube.com/embed/nfTQNv3jdSQ',
  },
  {
    title: 'Steamboat Square Cam',
    src: 'https://www.youtube.com/embed/2UJDLWcSADk',
  },
  {
    title: 'Four Points Cam',
    src: 'https://www.youtube.com/embed/Zf21nwFUyUs',
  },
] as const;

const forecastDiscussionUrl =
  'https://forecast.weather.gov/product.php?site=GJT&issuedby=GJT&product=AFD&format=CI&version=1&glossary=1';
const detailedForecastUrl = 'https://forecast.weather.gov/MapClick.php?lon=-106.74814224243163&lat=40.45269477619004';
const currentWindReportUrl = 'https://www.weather.gov/wrh/LocalWeather?zone=COZ004';
const steamboatForecastUrl =
  'http://www.usairnet.com/cgi-bin/launch/code.cgi?Submit=Go&sta=KSBS&state=CO';
const mtWernerForecastUrl =
  'http://www.usairnet.com/cgi-bin/launch/code.cgi?Submit=Go&sta=K3MW&state=CO';
const windsAloftUrl =
  'http://www.usairnet.com/cgi-bin/Winds/Aloft.cgi?location=GJT&Submit=Get+Forecast&hour=06&course=azimuth';
const telegramUrl = 'https://t.me/+TkCeyOEfTxo4MTgx';
const phoneUrl = 'tel:303.888.1255';
const emailUrl = 'mailto:freeflight@steamboatairforce.org';

const sectionCardClass =
  'overflow-hidden rounded-3xl border border-white/15 bg-black/40 shadow-2xl backdrop-blur-sm';
const resourceLinkClass =
  'rounded-full border border-white/15 bg-black/30 px-4 py-2 text-sm transition hover:bg-white/10';

export function SteamboatWeather() {
  const [activeCameraIndex, setActiveCameraIndex] = useState(0);
  const activeCamera = cameraUrls[activeCameraIndex];

  function showPreviousCamera() {
    setActiveCameraIndex((currentIndex) => (currentIndex - 1 + cameraUrls.length) % cameraUrls.length);
  }

  function showNextCamera() {
    setActiveCameraIndex((currentIndex) => (currentIndex + 1) % cameraUrls.length);
  }

  return (
    <section className="flex flex-1 items-center px-4 pb-16 sm:px-6 lg:px-10">
      <div className="w-full space-y-10">
        <div className="max-w-3xl space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Steamboat Forecast</h1>
          <p className="text-sm text-white/80">
            Steamboat Springs winds, clouds, and forecast discussion in one place.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Live Cameras</h2>
          <div className={`${sectionCardClass} overflow-hidden`}>
            <div className="flex items-stretch justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-6">
              <button
                type="button"
                className="rounded-full border border-white/15 bg-black/30 px-4 py-2 text-sm transition hover:bg-white/10"
                onClick={showPreviousCamera}
                aria-label="Previous camera"
              >
                ←
              </button>
              <div className="flex flex-col items-center justify-center text-center">
                <span className="text-sm font-semibold text-white/90">{activeCamera.title}</span>
                <span className="text-xs text-white/60">
                  {activeCameraIndex + 1} of {cameraUrls.length}
                </span>
              </div>
              <button
                type="button"
                className="rounded-full border border-white/15 bg-black/30 px-4 py-2 text-sm transition hover:bg-white/10"
                onClick={showNextCamera}
                aria-label="Next camera"
              >
                →
              </button>
            </div>
            <iframe
              width={550}
              height={309}
              title={activeCamera.title}
              className="h-[309px] w-full"
              src={activeCamera.src}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              frameBorder="0"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Surface Winds</h2>
          <div className={sectionCardClass}>
            <iframe
              width={650}
              height={450}
              title="Steamboat surface winds"
              className="h-[450px] w-full max-w-[650px]"
              src={steamboatSurfaceWindsUrl}
              loading="lazy"
              frameBorder="0"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Windy Layers</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className={sectionCardClass}>
              <WindyEmbed
                title="Steamboat 10,000 ft winds"
                className="h-[22rem] w-full"
                src={steamboatWindsAloft10kUrl}
              />
            </div>
            <div className={sectionCardClass}>
              <WindyEmbed
                title="Steamboat 14,000 ft winds"
                className="h-[22rem] w-full"
                src={steamboatWindsAloft14kUrl}
              />
            </div>
            <div className={sectionCardClass}>
              <WindyEmbed
                title="Steamboat cloud coverage"
                className="h-[22rem] w-full"
                src={steamboatCloudsUrl}
              />
            </div>
            <div className={sectionCardClass}>
              <WindyEmbed title="Steamboat radar" className="h-[22rem] w-full" src={steamboatRadarUrl} />
            </div>
          </div>
          <div className={sectionCardClass}>
            <WindyEmbed
              title="Steamboat thunder"
              className="h-[30rem] w-full"
              src={steamboatThunderUrl}
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-3">
            <a
              className={resourceLinkClass}
              href={forecastDiscussionUrl}
              target="_blank"
              rel="noreferrer"
            >
              Area Forecast Discussion
            </a>
            <a
              className={resourceLinkClass}
              href={detailedForecastUrl}
              target="_blank"
              rel="noreferrer"
            >
              Steamboat forecast map
            </a>
            <a
              className={resourceLinkClass}
              href={currentWindReportUrl}
              target="_blank"
              rel="noreferrer"
            >
              Current wind report
            </a>
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
              title="skew T"
              className="h-[70vh] min-h-[24rem] w-full"
              src={skewTUrl}
              loading="lazy"
              frameBorder="0"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-3">
            <a className={resourceLinkClass} href={steamboatForecastUrl} target="_blank" rel="noreferrer">
              NOAA Forecast
            </a>
            <a className={resourceLinkClass} href={mtWernerForecastUrl} target="_blank" rel="noreferrer">
              US Airnet Mt Werner
            </a>
            <a className={resourceLinkClass} href={windsAloftUrl} target="_blank" rel="noreferrer">
              Winds Aloft
            </a>
            <a className={resourceLinkClass} href={telegramUrl} target="_blank" rel="noreferrer">
              Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}