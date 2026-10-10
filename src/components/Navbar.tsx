import { Check, ChevronDown, Globe2, Menu, Search, X } from 'lucide-react';
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent as ReactKeyboardEvent,
} from 'react';
import type { Language, NavigationTab } from '../types';
import { translations } from '../i18n/translations';

interface NavbarProps {
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
  lang: Language;
  setLang: (lang: Language) => void;
  onOpenSearch: () => void;
  onOpenConsult: () => void;
  isHome?: boolean;
}

interface NavItem {
  key: NavigationTab;
  label: string;
}

const languages: Array<{ code: Language; label: string; nativeLabel: string }> = [
  { code: 'FA', label: 'FA', nativeLabel: 'فارسی' },
  { code: 'AR', label: 'AR', nativeLabel: 'العربية' },
  { code: 'EN', label: 'EN', nativeLabel: 'English' },
];

export default function Navbar({
  activeTab,
  setActiveTab,
  lang,
  setLang,
  onOpenSearch,
  onOpenConsult,
  isHome = false,
}: NavbarProps) {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);
  const firstMobileItemRef = useRef<HTMLButtonElement>(null);
  const t = translations[lang];

  const navItems: NavItem[] = [
    { key: 'خانه', label: t.navHome },
    { key: 'درباره ما', label: t.navAbout },
    { key: 'فرصت‌های سرمایه‌گذاری', label: t.navOpportunities },
    { key: 'راهکارها و خدمات', label: t.navServices },
    { key: 'مناطق هدف', label: t.navRegions },
    { key: 'دانش و بینش', label: t.navKnowledge },
    { key: 'تماس با ما', label: t.navContact },
  ];

  const isTabActive = (key: NavigationTab) => {
    if (activeTab === key) return true;
    const aliases: Partial<Record<NavigationTab, NavigationTab>> = {
      home: 'خانه',
      about: 'درباره ما',
      opportunities: 'فرصت‌های سرمایه‌گذاری',
      services: 'راهکارها و خدمات',
      regions: 'مناطق هدف',
      knowledge: 'دانش و بینش',
      contact: 'تماس با ما',
    };
    return aliases[activeTab] === key;
  };

  useEffect(() => {
    let frame = 0;
    const measure = () => {
      frame = 0;
      setIsScrolled(window.scrollY > 24);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        window.requestAnimationFrame(() => mobileToggleRef.current?.focus());
      }
      setIsLangOpen(false);
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.requestAnimationFrame(() => firstMobileItemRef.current?.focus());

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  const navigate = (item: NavItem) => {
    if (item.key === 'تماس با ما') {
      const footer = document.getElementById('footer-section');
      if (footer) footer.scrollIntoView({ behavior: 'smooth', block: 'start' });
      else onOpenConsult();
    } else {
      setActiveTab(item.key);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleLanguageKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') setIsLangOpen(false);
  };

  return (
    <>
      <header
        id="main-navbar"
        className="obc-navbar"
        data-scrolled={isScrolled || !isHome}
        data-menu-open={isMobileMenuOpen}
      >
        <div className="obc-container obc-navbar__inner">
          <button
            type="button"
            className="obc-brand"
            onClick={() => navigate({ key: 'خانه', label: t.navHome })}
            aria-label={`${t.brandName} — ${t.navHome}`}
          >
            <span className="obc-brand__mark" aria-hidden="true">
              <span />
              <span />
            </span>
            <span className="obc-brand__copy">
              <strong>{t.brandName}</strong>
              <small>{t.brandTagline}</small>
            </span>
          </button>

          <nav className="obc-navbar__desktop" aria-label="Primary navigation">
            {navItems.map((item) => (
              <button
                type="button"
                key={item.key}
                onClick={() => navigate(item)}
                className="obc-nav-link"
                data-active={isTabActive(item.key)}
                aria-current={isTabActive(item.key) ? 'page' : undefined}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="obc-navbar__actions">
            <button
              type="button"
              className="obc-icon-button obc-navbar__search"
              onClick={onOpenSearch}
              aria-label={t.searchPlaceholder}
            >
              <Search aria-hidden="true" />
            </button>

            <div className="obc-language" ref={langDropdownRef} onKeyDown={handleLanguageKeyDown}>
              <button
                type="button"
                className="obc-language__trigger"
                onClick={() => setIsLangOpen((open) => !open)}
                aria-expanded={isLangOpen}
                aria-controls="desktop-language-menu"
                aria-haspopup="menu"
              >
                <Globe2 aria-hidden="true" />
                <span>{lang}</span>
                <ChevronDown aria-hidden="true" />
              </button>
              <div
                id="desktop-language-menu"
                className="obc-language__menu"
                data-open={isLangOpen}
                role="menu"
                aria-hidden={!isLangOpen}
              >
                {languages.map((language) => (
                  <button
                    type="button"
                    key={language.code}
                    role="menuitemradio"
                    aria-checked={lang === language.code}
                    tabIndex={isLangOpen ? 0 : -1}
                    onClick={() => {
                      setLang(language.code);
                      setIsLangOpen(false);
                    }}
                  >
                    <span>{language.nativeLabel}</span>
                    <small>{language.label}</small>
                    {lang === language.code ? <Check aria-hidden="true" /> : null}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="obc-navbar__cta"
              onClick={() => navigate({ key: 'فرصت‌های سرمایه‌گذاری', label: t.navOpportunities })}
            >
              {t.navOpportunities}
            </button>

            <button
              ref={mobileToggleRef}
              type="button"
              className="obc-icon-button obc-navbar__menu-toggle"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              aria-label={
                isMobileMenuOpen
                  ? t.close
                  : lang === 'FA'
                    ? 'باز کردن منو'
                    : lang === 'AR'
                      ? 'فتح القائمة'
                      : 'Open menu'
              }
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-navigation" className="obc-mobile-nav" data-open={isMobileMenuOpen} aria-hidden={!isMobileMenuOpen}>
        <div className="obc-mobile-nav__ambient" aria-hidden="true" />
        <nav className="obc-container obc-mobile-nav__inner" aria-label="Mobile navigation">
          <div className="obc-mobile-nav__links">
            {navItems.map((item, index) => (
              <button
                ref={index === 0 ? firstMobileItemRef : undefined}
                type="button"
                key={item.key}
                tabIndex={isMobileMenuOpen ? 0 : -1}
                onClick={() => navigate(item)}
                data-active={isTabActive(item.key)}
                style={{ '--nav-item-index': index } as CSSProperties}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{item.label}</strong>
              </button>
            ))}
          </div>

          <div className="obc-mobile-nav__footer">
            <div className="obc-mobile-nav__languages" aria-label="Language">
              {languages.map((language) => (
                <button
                  type="button"
                  key={language.code}
                  tabIndex={isMobileMenuOpen ? 0 : -1}
                  data-active={lang === language.code}
                  onClick={() => setLang(language.code)}
                >
                  {language.nativeLabel}
                </button>
              ))}
            </div>
            <button
              type="button"
              tabIndex={isMobileMenuOpen ? 0 : -1}
              className="obc-button obc-button--primary"
              onClick={() => navigate({ key: 'فرصت‌های سرمایه‌گذاری', label: t.navOpportunities })}
            >
              {t.navOpportunities}
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
