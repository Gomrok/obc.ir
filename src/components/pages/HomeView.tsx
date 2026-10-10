import { useCallback } from 'react';
import type { ArticleItem, Language, NavigationTab, Opportunity, ServiceItem } from '../../types';
import { getLocalizedData } from '../../data';
import AudiencePaths from '../home/AudiencePaths';
import FeaturedOpportunity from '../home/FeaturedOpportunity';
import FinalCTA from '../home/FinalCTA';
import GlobalNetwork from '../home/GlobalNetwork';
import HeroSection from '../home/HeroSection';
import { homeContent } from '../home/homeContent';
import InsightsSection from '../home/InsightsSection';
import InstitutionalTrust from '../home/InstitutionalTrust';
import InvestmentJourney from '../home/InvestmentJourney';
import InvestmentMetrics from '../home/InvestmentMetrics';
import InvestmentProcess from '../home/InvestmentProcess';
import OpportunitySection from '../home/OpportunitySection';
import SectorExplorer from '../home/SectorExplorer';
import TrustChain from '../home/TrustChain';
import WhyOBC from '../home/WhyOBC';

interface HomeViewProps {
  lang: Language;
  setActiveTab: (tab: NavigationTab) => void;
  onSelectOpportunity: (opportunity: Opportunity) => void;
  onSelectService: (service: ServiceItem) => void;
  onSelectArticle: (article: ArticleItem) => void;
  onOpenConsult: () => void;
}

export default function HomeView({
  lang,
  setActiveTab,
  onSelectOpportunity,
  onSelectService,
  onSelectArticle,
  onOpenConsult,
}: HomeViewProps) {
  const content = homeContent[lang];
  const { opportunities, services, articles, specialOpportunity, partnerLogos, targetRegions } = getLocalizedData(lang);
  const isRtl = lang === 'FA' || lang === 'AR';

  const navigate = useCallback(
    (tab: NavigationTab) => {
      setActiveTab(tab);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [setActiveTab],
  );

  return (
    <div id="home-page" className="obc-home" data-language={lang.toLowerCase()}>
      <HeroSection
        content={content.hero}
        isRtl={isRtl}
        onExplore={() => navigate('فرصت‌های سرمایه‌گذاری')}
        onSubmitProject={onOpenConsult}
      />
      <InvestmentMetrics items={content.metrics} lang={lang} />
      <TrustChain content={content.trustChain} isRtl={isRtl} />
      <OpportunitySection
        content={content.opportunities}
        opportunities={opportunities}
        isRtl={isRtl}
        onSelect={onSelectOpportunity}
        onViewAll={() => navigate('فرصت‌های سرمایه‌گذاری')}
      />
      <InvestmentJourney content={content.journey} />
      <AudiencePaths
        content={content.audiences}
        isRtl={isRtl}
        onInvestor={() => navigate('فرصت‌های سرمایه‌گذاری')}
        onProjectOwner={onOpenConsult}
      />
      <SectorExplorer
        content={content.sectors}
        lang={lang}
        isRtl={isRtl}
        onViewAll={() => navigate('فرصت‌های سرمایه‌گذاری')}
      />
      <GlobalNetwork content={content.network} regions={targetRegions} lang={lang} />
      <WhyOBC
        content={content.why}
        services={services}
        isRtl={isRtl}
        onSelectService={onSelectService}
      />
      <InvestmentProcess content={content.process} isRtl={isRtl} />
      <FeaturedOpportunity
        content={content.featured}
        opportunity={specialOpportunity}
        isRtl={isRtl}
        onSelect={onSelectOpportunity}
      />
      <InsightsSection
        content={content.insights}
        articles={articles}
        isRtl={isRtl}
        onSelect={onSelectArticle}
        onViewAll={() => navigate('دانش و بینش')}
      />
      <InstitutionalTrust content={content.institutions} partners={partnerLogos} />
      <FinalCTA
        content={content.finalCta}
        isRtl={isRtl}
        onExplore={() => navigate('فرصت‌های سرمایه‌گذاری')}
        onSubmitProject={onOpenConsult}
      />
    </div>
  );
}
