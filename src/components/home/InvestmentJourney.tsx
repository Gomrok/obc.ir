import { Check, CircleDotDashed } from 'lucide-react';
import { useEffect, useRef, useState, type CSSProperties } from 'react';
import type { HomeContent } from './homeContent';
import { Reveal, SectionHeading, useReducedMotion } from './HomePrimitives';

interface InvestmentJourneyProps {
  content: HomeContent['journey'];
}

export default function InvestmentJourney({ content }: InvestmentJourneyProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef<Array<HTMLLIElement | null>>([]);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visibleEntry) return;
        const index = Number((visibleEntry.target as HTMLElement).dataset.journeyIndex);
        if (Number.isInteger(index)) setActiveIndex(index);
      },
      { threshold: [0.2, 0.45, 0.7], rootMargin: '-34% 0px -34% 0px' },
    );

    stepRefs.current.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [reducedMotion]);

  const progress = (activeIndex + 1) / content.steps.length;
  const visualStyle = {
    '--journey-progress': progress,
    '--journey-phase': activeIndex,
  } as CSSProperties;

  return (
    <section className="obc-section obc-journey" aria-labelledby="journey-title">
      <div className="obc-container">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          titleId="journey-title"
        />

        <div className="obc-journey__layout">
          <div className="obc-journey__visual-column" aria-hidden="true">
            <div className="obc-journey__visual" style={visualStyle}>
              <div className="obc-journey__visual-grid" />
              <div className="obc-journey__orbit obc-journey__orbit--one" />
              <div className="obc-journey__orbit obc-journey__orbit--two" />
              <div className="obc-journey__center">
                <span>{String(activeIndex + 1).padStart(2, '0')}</span>
                <strong>{content.steps[activeIndex]?.title}</strong>
              </div>
              <div className="obc-journey__milestones">
                {content.steps.map((step, index) => (
                  <span
                    key={step.title}
                    className="obc-journey__milestone"
                    data-active={index <= activeIndex}
                    style={{ '--milestone-index': index } as CSSProperties}
                  />
                ))}
              </div>
              <div className="obc-journey__visual-caption">
                <CircleDotDashed />
                <span>{content.visualKicker}</span>
                <strong>{Math.round(progress * 100)}%</strong>
              </div>
            </div>
          </div>

          <ol className="obc-journey__steps">
            {content.steps.map((step, index) => (
              <li
                key={step.title}
                ref={(element) => {
                  stepRefs.current[index] = element;
                }}
                data-journey-index={index}
                data-active={index === activeIndex}
                className="obc-journey__step"
              >
                <Reveal>
                  <div className="obc-journey__step-index">
                    {index < activeIndex ? <Check aria-hidden="true" /> : String(index + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
