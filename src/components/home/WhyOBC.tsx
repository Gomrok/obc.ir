import type { ServiceItem } from '../../types';
import type { HomeContent } from './homeContent';
import { DirectionalArrow, HomeIcon, Reveal, SectionHeading } from './HomePrimitives';

interface WhyOBCProps {
  content: HomeContent['why'];
  services: ServiceItem[];
  isRtl: boolean;
  onSelectService: (service: ServiceItem) => void;
}

export default function WhyOBC({ content, services, isRtl, onSelectService }: WhyOBCProps) {
  return (
    <section className="obc-section obc-why" aria-labelledby="why-obc-title">
      <div className="obc-container">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          titleId="why-obc-title"
          align="center"
        />

        <div className="obc-why__grid">
          {content.items.map((item, index) => {
            const relatedService = services[index];
            return (
              <Reveal as="article" className="obc-why-card" key={item.title} delay={(index % 3) * 90}>
                <div className="obc-why-card__topline">
                  <span className="obc-why-card__icon">
                    <HomeIcon name={item.icon} />
                  </span>
                  <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {relatedService ? (
                  <button
                    type="button"
                    className="obc-text-link obc-why-card__action"
                    onClick={() => onSelectService(relatedService)}
                    aria-label={`${content.serviceAction}: ${relatedService.title}`}
                  >
                    <span>{content.serviceAction}</span>
                    <DirectionalArrow isRtl={isRtl} />
                  </button>
                ) : null}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
