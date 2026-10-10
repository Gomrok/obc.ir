import type { HomeContent } from './homeContent';
import { DirectionalArrow, Reveal } from './HomePrimitives';

interface FinalCTAProps {
  content: HomeContent['finalCta'];
  isRtl: boolean;
  onExplore: () => void;
  onSubmitProject: () => void;
}

export default function FinalCTA({ content, isRtl, onExplore, onSubmitProject }: FinalCTAProps) {
  return (
    <section className="obc-final-cta" aria-labelledby="final-cta-title">
      <div className="obc-final-cta__mesh" aria-hidden="true" />
      <div className="obc-container obc-final-cta__content">
        <Reveal>
          <div className="obc-eyebrow" data-inverse="true">
            <span aria-hidden="true" />
            {content.eyebrow}
          </div>
          <h2 id="final-cta-title">{content.title}</h2>
          <p>{content.description}</p>
          <div className="obc-final-cta__actions">
            <button type="button" className="obc-button obc-button--light" onClick={onExplore}>
              <span>{content.primaryAction}</span>
              <DirectionalArrow isRtl={isRtl} />
            </button>
            <button type="button" className="obc-button obc-button--outline-light" onClick={onSubmitProject}>
              <span>{content.secondaryAction}</span>
              <DirectionalArrow isRtl={isRtl} diagonal />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
