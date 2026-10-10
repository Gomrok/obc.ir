import { MapPin } from 'lucide-react';
import { useMemo, useState, type CSSProperties } from 'react';
import type { Language, TargetRegion } from '../../types';
import type { HomeContent } from './homeContent';
import { CountUp, Reveal, SectionHeading } from './HomePrimitives';

interface GlobalNetworkProps {
  content: HomeContent['network'];
  regions: TargetRegion[];
  lang: Language;
}

const mapShapes = [
  'M80 166L115 115L196 88L254 112L275 154L242 188L178 198L126 226L88 210Z',
  'M264 126L330 88L425 78L486 110L462 144L392 151L346 188L292 171Z',
  'M298 190L364 168L409 197L395 258L355 327L314 296L288 233Z',
  'M457 106L542 72L677 83L726 122L693 170L610 175L563 210L499 181Z',
  'M592 186L684 173L759 211L743 268L685 281L635 246Z',
  'M771 268L838 250L888 286L873 332L810 344L776 315Z',
];

export default function GlobalNetwork({ content, regions, lang }: GlobalNetworkProps) {
  const [activeId, setActiveId] = useState(regions[0]?.id ?? '');
  const activeRegion = regions.find((region) => region.id === activeId) ?? regions[0];
  const totalProjects = useMemo(
    () => regions.reduce((sum, region) => sum + region.activeProjects, 0),
    [regions],
  );

  if (!activeRegion) return null;

  return (
    <section className="obc-section obc-network" aria-labelledby="global-network-title">
      <div className="obc-network__ambient" aria-hidden="true" />
      <div className="obc-container">
        <div className="obc-network__header">
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
            inverse
            titleId="global-network-title"
          />
          <Reveal className="obc-network__stats" delay={100}>
            <div>
              <CountUp value={totalProjects} prefix="+" lang={lang} />
              <small>{content.projectsLabel}</small>
            </div>
            <div>
              <CountUp value={24} prefix="+" lang={lang} />
              <small>{content.countriesLabel}</small>
            </div>
            <div>
              <CountUp value={regions.length} lang={lang} />
              <small>{content.activeMarketsLabel}</small>
            </div>
          </Reveal>
        </div>

        <Reveal className="obc-network__stage" delay={120}>
          <div className="obc-network__map" role="group" aria-label={content.title}>
            <svg viewBox="0 0 960 430" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
              <defs>
                <linearGradient id="obc-map-fill" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#199CCF" stopOpacity="0.22" />
                  <stop offset="1" stopColor="#0F30BB" stopOpacity="0.1" />
                </linearGradient>
                <pattern id="obc-map-dots" width="18" height="18" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="#FFFFFF" fillOpacity="0.12" />
                </pattern>
              </defs>
              <rect width="960" height="430" fill="url(#obc-map-dots)" />
              <g className="obc-network__continents">
                {mapShapes.map((shape) => (
                  <path key={shape} d={shape} fill="url(#obc-map-fill)" />
                ))}
              </g>
              <g className="obc-network__routes">
                {regions.slice(1).map((region, index) => {
                  const previous = regions[index];
                  return (
                    <line
                      key={region.id}
                      x1={previous.coordinates.x * 9.6}
                      y1={previous.coordinates.y * 4.3}
                      x2={region.coordinates.x * 9.6}
                      y2={region.coordinates.y * 4.3}
                      pathLength="1"
                    />
                  );
                })}
              </g>
            </svg>

            {regions.map((region, index) => (
              <button
                key={region.id}
                type="button"
                className="obc-network-node"
                data-active={region.id === activeRegion.id}
                style={
                  {
                    left: `${region.coordinates.x}%`,
                    top: `${region.coordinates.y}%`,
                    '--network-delay': `${index * 180}ms`,
                  } as CSSProperties
                }
                onMouseEnter={() => setActiveId(region.id)}
                onFocus={() => setActiveId(region.id)}
                onClick={() => setActiveId(region.id)}
                aria-pressed={region.id === activeRegion.id}
                aria-label={`${region.name}: ${region.activeProjects} ${content.projectsLabel}`}
              >
                <span aria-hidden="true" />
              </button>
            ))}
          </div>

          <div className="obc-network__detail" aria-live="polite">
            <div className="obc-network__detail-topline">
              <span className="obc-network__pin"><MapPin aria-hidden="true" /></span>
              <span dir="ltr">{String(regions.findIndex((region) => region.id === activeRegion.id) + 1).padStart(2, '0')}</span>
            </div>
            <h3>{activeRegion.name}</h3>
            <p>{activeRegion.desc}</p>
            <div className="obc-network__project-count">
              <strong dir="ltr">{activeRegion.activeProjects}</strong>
              <span>{content.projectsLabel}</span>
            </div>
            <ul>
              {activeRegion.keySectors.slice(0, 3).map((sector) => (
                <li key={sector}>{sector}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
