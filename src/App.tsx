import { lazy, Suspense, useEffect, useState } from 'react';
import type { ArticleItem, Language, NavigationTab, Opportunity, ServiceItem } from './types';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HomeView from './components/pages/HomeView';
import { getLocalizedData } from './data';
import { translations } from './i18n/translations';

const AboutView = lazy(() => import('./components/pages/AboutView'));
const OpportunitiesView = lazy(() => import('./components/pages/OpportunitiesView'));
const ServicesView = lazy(() => import('./components/pages/ServicesView'));
const TargetRegionsView = lazy(() => import('./components/pages/TargetRegionsView'));
const KnowledgeView = lazy(() => import('./components/pages/KnowledgeView'));
const SharedModals = lazy(() => import('./components/SharedModals'));

const pageDescriptions: Record<Language, string> = {
  FA: 'OBC فرصت‌های سرمایه‌گذاری معتبر را به سرمایه‌گذاران بین‌المللی متصل و مسیر سرمایه‌گذاری فرامرزی را تسهیل می‌کند.',
  AR: 'تربط OBC فرص الاستثمار الموثوقة بالمستثمرين الدوليين وتيسّر الاستثمار العابر للحدود.',
  EN: 'OBC connects credible investment opportunities with international investors and facilitates cross-border investment.',
};

const LANGUAGE_STORAGE_KEY = 'obc.language.v1';
const supportedLanguages: readonly Language[] = ['FA', 'AR', 'EN'];

function isLanguage(value: string | null): value is Language {
  return value !== null && supportedLanguages.includes(value as Language);
}

function readPersistedLanguage(): Language {
  if (typeof window === 'undefined') return 'FA';

  try {
    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return isLanguage(storedLanguage) ? storedLanguage : 'FA';
  } catch {
    return 'FA';
  }
}

function persistLanguage(language: Language): boolean {
  if (typeof window === 'undefined') return false;

  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    return true;
  } catch {
    return false;
  }
}

function ViewFallback() {
  return (
    <div className="obc-view-fallback" role="status" aria-live="polite">
      <span aria-hidden="true" />
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState<NavigationTab>('خانه');
  const [lang, setLang] = useState<Language>(() => readPersistedLanguage());
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedOpportunity, setSelectedOpportunity] = useState<Opportunity | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const [isConsultOpen, setIsConsultOpen] = useState(false);

  const { opportunities, services, articles } = getLocalizedData(lang);
  const isRtl = lang === 'FA' || lang === 'AR';
  const isHome = activeTab === 'خانه' || activeTab === 'home';
  const hasOpenModal = Boolean(
    isSearchOpen || selectedOpportunity || selectedService || selectedArticle || isConsultOpen,
  );
  const t = translations[lang];

  useEffect(() => {
    persistLanguage(lang);
  }, [lang]);

  useEffect(() => {
    const html = document.documentElement;
    html.dir = isRtl ? 'rtl' : 'ltr';
    html.lang = lang.toLowerCase();
    html.dataset.language = lang.toLowerCase();

    document.title = isHome ? `${t.brandName} | ${t.heroTitle}` : `${t.brandName} | ${t.brandTagline}`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', pageDescriptions[lang]);
  }, [isHome, isRtl, lang, t.brandName, t.brandTagline, t.heroTitle]);

  const handleModalNavigation = (tab: NavigationTab) => {
    setIsSearchOpen(false);
    if (tab === 'تماس با ما' || tab === 'contact') {
      document.getElementById('footer-section')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="obc-app" dir={isRtl ? 'rtl' : 'ltr'}>
      <a className="obc-skip-link" href="#main-content">
        {lang === 'FA' ? 'رفتن به محتوای اصلی' : lang === 'AR' ? 'انتقل إلى المحتوى الرئيسي' : 'Skip to main content'}
      </a>

      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        lang={lang}
        setLang={setLang}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenConsult={() => setIsConsultOpen(true)}
        isHome={isHome}
      />

      <main id="main-content" className={`app-main${isHome ? ' app-main--home' : ''}`} tabIndex={-1}>
        {isHome ? (
          <HomeView
            lang={lang}
            setActiveTab={setActiveTab}
            onSelectOpportunity={setSelectedOpportunity}
            onSelectService={setSelectedService}
            onSelectArticle={setSelectedArticle}
            onOpenConsult={() => setIsConsultOpen(true)}
          />
        ) : (
          <Suspense fallback={<ViewFallback />}>
            {(activeTab === 'درباره ما' || activeTab === 'about') && (
              <AboutView lang={lang} setActiveTab={setActiveTab} onOpenConsult={() => setIsConsultOpen(true)} />
            )}
            {(activeTab === 'فرصت‌های سرمایه‌گذاری' || activeTab === 'opportunities') && (
              <OpportunitiesView
                lang={lang}
                setActiveTab={setActiveTab}
                onSelectOpportunity={setSelectedOpportunity}
                onSelectArticle={setSelectedArticle}
                onOpenConsult={() => setIsConsultOpen(true)}
              />
            )}
            {(activeTab === 'راهکارها و خدمات' || activeTab === 'services') && (
              <ServicesView
                lang={lang}
                setActiveTab={setActiveTab}
                onSelectService={setSelectedService}
                onSelectOpportunity={setSelectedOpportunity}
                onOpenConsult={() => setIsConsultOpen(true)}
              />
            )}
            {(activeTab === 'مناطق هدف' || activeTab === 'regions') && (
              <TargetRegionsView
                lang={lang}
                setActiveTab={setActiveTab}
                onSelectOpportunity={setSelectedOpportunity}
                onOpenConsult={() => setIsConsultOpen(true)}
              />
            )}
            {(activeTab === 'دانش و بینش' || activeTab === 'knowledge') && (
              <KnowledgeView
                lang={lang}
                setActiveTab={setActiveTab}
                onSelectArticle={setSelectedArticle}
                onOpenConsult={() => setIsConsultOpen(true)}
              />
            )}
          </Suspense>
        )}
      </main>

      <Footer
        lang={lang}
        setActiveTab={setActiveTab}
        onOpenConsult={() => setIsConsultOpen(true)}
        showPreFooterCta={!isHome}
      />

      {hasOpenModal ? (
        <Suspense fallback={null}>
          <SharedModals
            lang={lang}
            isSearchOpen={isSearchOpen}
            onCloseSearch={() => setIsSearchOpen(false)}
            onNavigateTab={handleModalNavigation}
            selectedOpportunity={selectedOpportunity}
            onCloseOpportunity={() => setSelectedOpportunity(null)}
            selectedService={selectedService}
            onCloseService={() => setSelectedService(null)}
            selectedArticle={selectedArticle}
            onCloseArticle={() => setSelectedArticle(null)}
            isConsultOpen={isConsultOpen}
            onCloseConsult={() => setIsConsultOpen(false)}
            allOpportunities={opportunities}
            allServices={services}
            allArticles={articles}
          />
        </Suspense>
      ) : null}
    </div>
  );
}
