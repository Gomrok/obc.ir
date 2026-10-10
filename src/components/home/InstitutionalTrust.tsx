import type { HomeContent } from './homeContent';
import { Reveal, SectionHeading } from './HomePrimitives';

interface PartnerMark {
  name: string;
  subtitle: string;
}

interface InstitutionalTrustProps {
  content: HomeContent['institutions'];
  partners: PartnerMark[];
}

function PartnerGroup({ partners, hidden = false }: { partners: PartnerMark[]; hidden?: boolean }) {
  return (
    <div className="obc-institutions__group" aria-hidden={hidden || undefined}>
      {partners.map((partner) => (
        <div className="obc-institution-mark" key={`${hidden ? 'clone-' : ''}${partner.name}`}>
          <strong>{partner.name}</strong>
          <span>{partner.subtitle}</span>
        </div>
      ))}
    </div>
  );
}

export default function InstitutionalTrust({ content, partners }: InstitutionalTrustProps) {
  return (
    <section className="obc-section obc-institutions" aria-labelledby="institutions-title">
      <div className="obc-container">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          titleId="institutions-title"
          align="center"
        />
      </div>

      <Reveal className="obc-institutions__marquee" delay={100}>
        <div className="obc-institutions__track">
          <PartnerGroup partners={partners} />
          <PartnerGroup partners={partners} hidden />
        </div>
      </Reveal>
    </section>
  );
}
