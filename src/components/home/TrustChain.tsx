import { Check } from 'lucide-react';
import { useMemo, useRef, type CSSProperties } from 'react';
import type { HomeContent } from './homeContent';
import { Reveal, SectionHeading, useScrollProgress } from './HomePrimitives';

interface TrustChainProps {
  content: HomeContent['trustChain'];
  isRtl: boolean;
}

export default function TrustChain({ content, isRtl }: TrustChainProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(sectionRef, { startViewportRatio: 0.78, endViewportRatio: 0.2 });
  const activeIndex = useMemo(
    () => Math.min(Math.floor(progress * content.steps.length), content.steps.length - 1),
    [content.steps.length, progress],
  );
  const progressStyle = { '--chain-progress': progress, '--chain-origin': isRtl ? 'right' : 'left' } as CSSProperties;

  return (
    <section ref={sectionRef} className="obc-section obc-trust-chain" aria-labelledby="trust-chain-title">
      <div className="obc-container">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          titleId="trust-chain-title"
        />

        <progress className="obc-visually-hidden" max={1} value={progress} aria-label={content.progressLabel} />

        <Reveal className="obc-trust-chain__viewport" delay={100}>
          <ol className="obc-trust-chain__track" style={progressStyle}>
            <span className="obc-trust-chain__line" aria-hidden="true">
              <span />
            </span>
            {content.steps.map((step, index) => {
              const status = index < activeIndex ? 'complete' : index === activeIndex ? 'active' : 'upcoming';
              return (
                <li
                  key={step.title}
                  className="obc-trust-chain__step"
                  data-status={status}
                  aria-current={status === 'active' ? 'step' : undefined}
                >
                  <span className="obc-trust-chain__node" aria-hidden="true">
                    {status === 'complete' ? <Check /> : <span>{String(index + 1).padStart(2, '0')}</span>}
                  </span>
                  <div className="obc-trust-chain__content">
                    <span className="obc-trust-chain__number">{String(index + 1).padStart(2, '0')}</span>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
