import type { Language } from '../../types';
import type { HomeContent } from './homeContent';
import { CountUp, Reveal } from './HomePrimitives';

interface InvestmentMetricsProps {
  items: HomeContent['metrics'];
  lang: Language;
}

export default function InvestmentMetrics({ items, lang }: InvestmentMetricsProps) {
  return (
    <section className="obc-metrics" aria-label="Investment metrics">
      <div className="obc-container">
        <Reveal className="obc-metrics__panel">
          {items.map((item, index) => (
            <div className="obc-metric" key={item.label}>
              <span className="obc-metric__index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <CountUp
                className="obc-metric__value"
                value={item.value}
                prefix={item.prefix}
                suffix={item.suffix}
                lang={lang}
              />
              <span className="obc-metric__label">{item.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
