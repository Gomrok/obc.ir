import { Check } from 'lucide-react';
import { useRef, type CSSProperties } from 'react';
import type { HomeContent } from './homeContent';
import { Reveal, SectionHeading, useScrollProgress } from './HomePrimitives';

interface InvestmentProcessProps {
  content: HomeContent['process'];
  isRtl: boolean;
}

export default function InvestmentProcess({ content, isRtl }: InvestmentProcessProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(sectionRef, { startViewportRatio: 0.75, endViewportRatio: 0.26 });
  const activeIndex = Math.min(Math.floor(progress * content.steps.length), content.steps.length - 1);
  const style = {
    '--process-progress': progress,
    '--process-origin': isRtl ? 'right' : 'left',
  } as CSSProperties;

  return (
    <section ref={sectionRef} className="obc-section obc-process" aria-labelledby="process-title">
      <div className="obc-container">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          titleId="process-title"
          align="center"
        />

        <Reveal className="obc-process__frame" delay={110}>
          <ol className="obc-process__track" style={style}>
            <span className="obc-process__line" aria-hidden="true"><span /></span>
            {content.steps.map((step, index) => {
              const complete = index < activeIndex;
              const active = index === activeIndex;
              return (
                <li key={step.title} data-active={active} data-complete={complete} aria-current={active ? 'step' : undefined}>
                  <span className="obc-process__node" aria-hidden="true">
                    {complete ? <Check /> : String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
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
