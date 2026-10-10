import type { ArticleItem } from '../../types';
import type { HomeContent } from './homeContent';
import { DirectionalArrow, Reveal, SectionHeading } from './HomePrimitives';

interface InsightsSectionProps {
  content: HomeContent['insights'];
  articles: ArticleItem[];
  isRtl: boolean;
  onSelect: (article: ArticleItem) => void;
  onViewAll: () => void;
}

function InsightCard({
  article,
  content,
  isRtl,
  onSelect,
  featured,
  index,
}: {
  article: ArticleItem;
  content: HomeContent['insights'];
  isRtl: boolean;
  onSelect: (article: ArticleItem) => void;
  featured?: boolean;
  index: number;
  key?: string;
}) {
  return (
    <Reveal
      as="article"
      className={`obc-insight-card${featured ? ' obc-insight-card--featured' : ''}`}
      delay={index * 70}
    >
      <div className="obc-insight-card__media">
        <img
          src={article.image}
          alt={article.title}
          width="1376"
          height="768"
          loading="lazy"
          decoding="async"
          sizes={featured ? '(max-width: 1023px) calc(100vw - 40px), 56vw' : '(max-width: 767px) calc(100vw - 40px), 30vw'}
        />
        <div aria-hidden="true" />
      </div>
      <div className="obc-insight-card__body">
        <div className="obc-insight-card__meta">
          <span>{article.tag}</span>
          <span>{article.date}</span>
          <span>{article.readTime}</span>
        </div>
        <h3>{article.title}</h3>
        {featured ? <p>{article.summary}</p> : null}
        <button
          type="button"
          className="obc-text-link"
          onClick={() => onSelect(article)}
          aria-label={`${content.readArticle}: ${article.title}`}
        >
          <span>{content.readArticle}</span>
          <DirectionalArrow isRtl={isRtl} />
        </button>
      </div>
    </Reveal>
  );
}

export default function InsightsSection({
  content,
  articles,
  isRtl,
  onSelect,
  onViewAll,
}: InsightsSectionProps) {
  return (
    <section className="obc-section obc-insights" aria-labelledby="insights-title">
      <div className="obc-container">
        <div className="obc-section-toolbar">
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
            titleId="insights-title"
          />
          <Reveal delay={100}>
            <button type="button" className="obc-text-link obc-text-link--large" onClick={onViewAll}>
              <span>{content.action}</span>
              <DirectionalArrow isRtl={isRtl} />
            </button>
          </Reveal>
        </div>

        <div className="obc-insights__grid">
          {articles.slice(0, 4).map((article, index) => (
            <InsightCard
              key={article.id}
              article={article}
              content={content}
              isRtl={isRtl}
              onSelect={onSelect}
              featured={index === 0}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
