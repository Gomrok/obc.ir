import { ArrowDown, CheckCircle2 } from 'lucide-react';
import type { CSSProperties } from 'react';
import type { HomeContent } from './homeContent';
import { DirectionalArrow, Reveal } from './HomePrimitives';

interface HeroSectionProps {
  content: HomeContent['hero'];
  isRtl: boolean;
  onExplore: () => void;
  onSubmitProject: () => void;
}

const networkNodes = [
  { x: 118, y: 144, label: 'EU' },
  { x: 224, y: 98, label: 'ME' },
  { x: 303, y: 168, label: 'CA' },
  { x: 396, y: 118, label: 'EA' },
  { x: 446, y: 226, label: 'SEA' },
  { x: 278, y: 272, label: 'AF' },
];

function InvestmentNetworkVisual({ label, note }: { label: string; note: string }) {
  return (
    <div className="obc-hero-visual" role="img" aria-label={label}>
      <div className="obc-hero-visual__halo" aria-hidden="true" />
      <svg viewBox="0 0 560 430" className="obc-network-globe" aria-hidden="true">
        <defs>
          <linearGradient id="obc-globe-stroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#199CCF" />
            <stop offset="1" stopColor="#0F30BB" />
          </linearGradient>
          <radialGradient id="obc-globe-fill" cx="38%" cy="30%" r="76%">
            <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.94" />
            <stop offset="0.58" stopColor="#199CCF" stopOpacity="0.16" />
            <stop offset="1" stopColor="#0F30BB" stopOpacity="0.08" />
          </radialGradient>
          <filter id="obc-node-glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <clipPath id="obc-globe-clip">
            <circle cx="280" cy="206" r="172" />
          </clipPath>
        </defs>

        <circle cx="280" cy="206" r="172" fill="url(#obc-globe-fill)" stroke="url(#obc-globe-stroke)" strokeWidth="1.5" />
        <g className="obc-network-globe__grid" clipPath="url(#obc-globe-clip)">
          <ellipse cx="280" cy="206" rx="73" ry="172" />
          <ellipse cx="280" cy="206" rx="132" ry="172" />
          <ellipse cx="280" cy="206" rx="172" ry="64" />
          <ellipse cx="280" cy="206" rx="172" ry="122" />
          <path d="M108 206H452" />
          <path d="M280 34V378" />
        </g>

        <g className="obc-network-globe__connections" clipPath="url(#obc-globe-clip)">
          <path d="M118 144C168 102 187 92 224 98" pathLength="1" />
          <path d="M224 98C267 120 276 143 303 168" pathLength="1" />
          <path d="M303 168C344 126 361 118 396 118" pathLength="1" />
          <path d="M396 118C432 148 447 186 446 226" pathLength="1" />
          <path d="M446 226C378 283 335 285 278 272" pathLength="1" />
          <path d="M278 272C211 265 159 220 118 144" pathLength="1" />
          <path d="M224 98C231 176 244 225 278 272" pathLength="1" />
          <path d="M303 168C342 202 383 221 446 226" pathLength="1" />
        </g>

        <g className="obc-network-globe__nodes">
          {networkNodes.map((node, index) => (
            <g key={node.label} style={{ '--node-delay': `${index * 320}ms` } as CSSProperties}>
              <circle cx={node.x} cy={node.y} r="14" className="obc-network-globe__pulse" />
              <circle cx={node.x} cy={node.y} r="5.5" filter="url(#obc-node-glow)" />
              <text x={node.x} y={node.y - 21} textAnchor="middle">
                {node.label}
              </text>
            </g>
          ))}
        </g>
      </svg>

      <div className="obc-hero-visual__card obc-hero-visual__card--top">
        <span className="obc-status-dot" aria-hidden="true" />
        <span>{label}</span>
      </div>
      <div className="obc-hero-visual__card obc-hero-visual__card--bottom">
        <CheckCircle2 aria-hidden="true" />
        <span>{note}</span>
      </div>
    </div>
  );
}

export default function HeroSection({ content, isRtl, onExplore, onSubmitProject }: HeroSectionProps) {
  return (
    <section className="obc-hero" aria-labelledby="obc-home-title">
      <div className="obc-hero__ambient" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="obc-container obc-hero__layout">
        <div className="obc-hero__copy">
          <Reveal delay={40}>
            <div className="obc-eyebrow obc-eyebrow--hero">
              <span aria-hidden="true" />
              {content.eyebrow}
            </div>
          </Reveal>
          <Reveal delay={110}>
            <h1 id="obc-home-title">{content.title}</h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="obc-hero__description">{content.description}</p>
          </Reveal>
          <Reveal delay={250} className="obc-hero__actions">
            <button type="button" className="obc-button obc-button--primary" onClick={onExplore}>
              <span>{content.primaryAction}</span>
              <DirectionalArrow isRtl={isRtl} />
            </button>
            <button type="button" className="obc-button obc-button--ghost" onClick={onSubmitProject}>
              <span>{content.secondaryAction}</span>
              <DirectionalArrow isRtl={isRtl} diagonal />
            </button>
          </Reveal>
        </div>

        <Reveal delay={180} className="obc-hero__visual-wrap">
          <InvestmentNetworkVisual label={content.visualLabel} note={content.visualNote} />
        </Reveal>
      </div>

      <div className="obc-hero__scroll-cue" aria-hidden="true">
        <span>SCROLL</span>
        <ArrowDown />
      </div>
    </section>
  );
}
