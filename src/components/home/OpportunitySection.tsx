import { MapPin } from 'lucide-react';
import type { Opportunity } from '../../types';
import type { HomeContent } from './homeContent';
import { DirectionalArrow, Reveal, SectionHeading } from './HomePrimitives';

interface OpportunitySectionProps {
  content: HomeContent['opportunities'];
  opportunities: Opportunity[];
  isRtl: boolean;
  onSelect: (opportunity: Opportunity) => void;
  onViewAll: () => void;
}

function OpportunityCard({
  opportunity,
  content,
  isRtl,
  onSelect,
  index,
}: {
  opportunity: Opportunity;
  content: HomeContent['opportunities'];
  isRtl: boolean;
  onSelect: (opportunity: Opportunity) => void;
  index: number;
  key?: string;
}) {
  return (
    <Reveal as="article" className="obc-opportunity-card" delay={index * 90}>
      <div className="obc-opportunity-card__media">
        <img
          src={opportunity.image}
          alt={opportunity.title}
          width="1200"
          height="896"
          loading="lazy"
          decoding="async"
          sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1199px) 45vw, 380px"
        />
        <div className="obc-opportunity-card__media-overlay" aria-hidden="true" />
        <div className="obc-opportunity-card__topline">
          <span>{opportunity.category}</span>
          <span data-status>{opportunity.status}</span>
        </div>
        <div className="obc-opportunity-card__return">
          <strong dir="ltr">{opportunity.expectedIrr}</strong>
          <span>{content.return}</span>
        </div>
      </div>

      <div className="obc-opportunity-card__body">
        <div className="obc-opportunity-card__location">
          <MapPin aria-hidden="true" />
          <span>{opportunity.location}</span>
        </div>
        <h3>{opportunity.title}</h3>
        <p>{opportunity.description}</p>

        <dl className="obc-opportunity-card__facts">
          <div>
            <dt>{content.capital}</dt>
            <dd dir="auto">{opportunity.requiredCapital}</dd>
          </div>
          <div>
            <dt>{content.stage}</dt>
            <dd>{opportunity.stage}</dd>
          </div>
          <div>
            <dt>{content.type}</dt>
            <dd>{opportunity.type}</dd>
          </div>
        </dl>

        <button
          type="button"
          className="obc-text-link obc-opportunity-card__action"
          onClick={() => onSelect(opportunity)}
          aria-label={`${content.viewOpportunity}: ${opportunity.title}`}
        >
          <span>{content.viewOpportunity}</span>
          <DirectionalArrow isRtl={isRtl} />
        </button>
      </div>
    </Reveal>
  );
}

export default function OpportunitySection({
  content,
  opportunities,
  isRtl,
  onSelect,
  onViewAll,
}: OpportunitySectionProps) {
  return (
    <section className="obc-section obc-opportunities" aria-labelledby="opportunities-title">
      <div className="obc-container">
        <div className="obc-section-toolbar">
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
            titleId="opportunities-title"
          />
          <Reveal delay={100}>
            <button type="button" className="obc-text-link obc-text-link--large" onClick={onViewAll}>
              <span>{content.viewAll}</span>
              <DirectionalArrow isRtl={isRtl} />
            </button>
          </Reveal>
        </div>

        <div className="obc-opportunities__grid">
          {opportunities.slice(0, 3).map((opportunity, index) => (
            <OpportunityCard
              key={opportunity.id}
              opportunity={opportunity}
              content={content}
              isRtl={isRtl}
              onSelect={onSelect}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
