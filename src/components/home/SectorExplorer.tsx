import type { Language } from '../../types';
import type { HomeContent } from './homeContent';
import { CountUp, DirectionalArrow, HomeIcon, Reveal, SectionHeading } from './HomePrimitives';

interface SectorExplorerProps {
  content: HomeContent['sectors'];
  lang: Language;
  isRtl: boolean;
  onViewAll: () => void;
}

export default function SectorExplorer({ content, lang, isRtl, onViewAll }: SectorExplorerProps) {
  return (
    <section id="sectors" className="obc-section obc-sectors" aria-labelledby="sectors-title">
      <div className="obc-container">
        <div className="obc-section-toolbar">
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
            titleId="sectors-title"
          />
          <Reveal delay={100}>
            <button type="button" className="obc-text-link obc-text-link--large" onClick={onViewAll}>
              <span>{content.viewAll}</span>
              <DirectionalArrow isRtl={isRtl} />
            </button>
          </Reveal>
        </div>

        <div className="obc-sectors__grid">
          {content.items.map((sector, index) => (
            <Reveal
              as="article"
              key={sector.name}
              className="obc-sector-card"
              delay={(index % 4) * 70}
            >
              <div className="obc-sector-card__top">
                <span className="obc-sector-card__icon">
                  <HomeIcon name={sector.icon} />
                </span>
                <span className="obc-sector-card__number">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div>
                <h3>{sector.name}</h3>
                <p>{sector.description}</p>
              </div>
              <div className="obc-sector-card__count">
                <CountUp value={sector.count} lang={lang} />
                <span>{content.opportunityLabel}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
