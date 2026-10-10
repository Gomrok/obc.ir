import { MapPin } from 'lucide-react';
import type { Opportunity } from '../../types';
import type { HomeContent } from './homeContent';
import { DirectionalArrow, Reveal, SectionHeading } from './HomePrimitives';

interface FeaturedOpportunityProps {
  content: HomeContent['featured'];
  opportunity: Opportunity;
  isRtl: boolean;
  onSelect: (opportunity: Opportunity) => void;
}

export default function FeaturedOpportunity({
  content,
  opportunity,
  isRtl,
  onSelect,
}: FeaturedOpportunityProps) {
  const facts = [
    { label: content.capital, value: opportunity.requiredCapital },
    { label: content.stage, value: opportunity.stage },
    { label: content.type, value: opportunity.type ?? '—' },
    { label: content.return, value: opportunity.expectedIrr },
  ];

  return (
    <section className="obc-section obc-featured" aria-labelledby="featured-title">
      <div className="obc-container">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          titleId="featured-title"
        />

        <Reveal as="article" className="obc-featured__editorial" delay={100}>
          <div className="obc-featured__media">
            <img
              src={opportunity.image}
              alt={opportunity.title}
              width="1376"
              height="768"
              loading="lazy"
              decoding="async"
              sizes="(max-width: 1023px) calc(100vw - 40px), 56vw"
            />
            <div className="obc-featured__media-shade" aria-hidden="true" />
            <span className="obc-featured__sector">{opportunity.category}</span>
            <span className="obc-featured__folio" aria-hidden="true">OBC / 01</span>
          </div>

          <div className="obc-featured__content">
            <div className="obc-featured__location">
              <MapPin aria-hidden="true" />
              <span>{opportunity.location}</span>
            </div>
            <h3>{opportunity.title}</h3>
            <p>{opportunity.description}</p>
            <dl className="obc-featured__facts">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd dir="auto">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <button type="button" className="obc-button obc-button--dark" onClick={() => onSelect(opportunity)}>
              <span>{content.action}</span>
              <DirectionalArrow isRtl={isRtl} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
