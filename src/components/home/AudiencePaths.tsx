import { BriefcaseBusiness, Building2, Check } from 'lucide-react';
import type { HomeContent } from './homeContent';
import { DirectionalArrow, Reveal, SectionHeading } from './HomePrimitives';

interface AudiencePathsProps {
  content: HomeContent['audiences'];
  isRtl: boolean;
  onInvestor: () => void;
  onProjectOwner: () => void;
}

function AudienceCard({
  path,
  type,
  isRtl,
  onAction,
}: {
  path: HomeContent['audiences']['investor'];
  type: 'investor' | 'project-owner';
  isRtl: boolean;
  onAction: () => void;
}) {
  const Icon = type === 'investor' ? BriefcaseBusiness : Building2;

  return (
    <Reveal as="article" className="obc-audience-card">
      <div className="obc-audience-card__wash" aria-hidden="true" />
      <div className="obc-audience-card__top">
        <span className="obc-audience-card__icon">
          <Icon aria-hidden="true" />
        </span>
        <span className="obc-audience-card__eyebrow">{path.eyebrow}</span>
      </div>
      <h3>{path.title}</h3>
      <p>{path.description}</p>
      <ol className="obc-audience-card__steps">
        {path.steps.map((step, index) => (
          <li key={step}>
            <span aria-hidden="true">{index === path.steps.length - 1 ? <Check /> : String(index + 1).padStart(2, '0')}</span>
            {step}
          </li>
        ))}
      </ol>
      <button type="button" className="obc-audience-card__action" onClick={onAction}>
        <span>{path.action}</span>
        <DirectionalArrow isRtl={isRtl} diagonal />
      </button>
    </Reveal>
  );
}

export default function AudiencePaths({
  content,
  isRtl,
  onInvestor,
  onProjectOwner,
}: AudiencePathsProps) {
  return (
    <section className="obc-section obc-audiences" aria-labelledby="audiences-title">
      <div className="obc-container">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          titleId="audiences-title"
          align="center"
        />
        <div className="obc-audiences__grid">
          <AudienceCard path={content.investor} type="investor" isRtl={isRtl} onAction={onInvestor} />
          <AudienceCard path={content.projectOwner} type="project-owner" isRtl={isRtl} onAction={onProjectOwner} />
        </div>
      </div>
    </section>
  );
}
