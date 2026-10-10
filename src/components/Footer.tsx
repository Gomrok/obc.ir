import { ArrowUp, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import type { Language, NavigationTab } from '../types';
import { translations } from '../i18n/translations';

interface FooterProps {
  setActiveTab: (tab: NavigationTab) => void;
  onOpenConsult: () => void;
  lang: Language;
  showPreFooterCta?: boolean;
}

export default function Footer({
  setActiveTab,
  onOpenConsult,
  lang,
  showPreFooterCta = true,
}: FooterProps) {
  const t = translations[lang];

  const navigate = (tab: NavigationTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer-section" className="obc-footer">
      <div className="obc-container">
        {showPreFooterCta ? (
          <section className="obc-footer__cta" aria-labelledby="footer-cta-title">
            <div className="obc-footer__cta-mesh" aria-hidden="true" />
            <div>
              <span className="obc-footer__cta-eyebrow">OBC / INVESTMENT ACCESS</span>
              <h2 id="footer-cta-title">{t.footerCtaTitle}</h2>
              <p>{t.footerCtaDesc}</p>
            </div>
            <div className="obc-footer__cta-actions">
              <button type="button" className="obc-button obc-button--light" onClick={onOpenConsult}>
                {t.contactUs}
              </button>
              <button
                type="button"
                className="obc-button obc-button--outline-light"
                onClick={() => navigate('فرصت‌های سرمایه‌گذاری')}
              >
                {t.navOpportunities}
              </button>
            </div>
          </section>
        ) : null}

        <div className="obc-footer__main">
          <div className="obc-footer__brand-column">
            <button type="button" className="obc-brand obc-brand--footer" onClick={() => navigate('خانه')}>
              <span className="obc-brand__mark" aria-hidden="true"><span /><span /></span>
              <span className="obc-brand__copy">
                <strong>{t.brandName}</strong>
                <small>{t.brandTagline}</small>
              </span>
            </button>
            <p>{t.footerDesc}</p>
            <div className="obc-footer__socials">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
              <a href="https://telegram.org" target="_blank" rel="noreferrer" aria-label="Telegram"><Send aria-hidden="true" /></a>
              <a href="https://whatsapp.com" target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle aria-hidden="true" /></a>
            </div>
          </div>

          <nav className="obc-footer__nav" aria-label={t.quickAccess}>
            <h2>{t.quickAccess}</h2>
            <button type="button" onClick={() => navigate('فرصت‌های سرمایه‌گذاری')}>{t.navOpportunities}</button>
            <button type="button" onClick={() => navigate('راهکارها و خدمات')}>{t.navServices}</button>
            <button type="button" onClick={() => navigate('مناطق هدف')}>{t.navRegions}</button>
            <button type="button" onClick={() => navigate('دانش و بینش')}>{t.navKnowledge}</button>
            <button type="button" onClick={onOpenConsult}>{t.submitProject}</button>
          </nav>

          <nav className="obc-footer__nav" aria-label={t.navAbout}>
            <h2>{t.navAbout}</h2>
            <button type="button" onClick={() => navigate('درباره ما')}>{t.whoWeAreTitle}</button>
            <button type="button" onClick={() => navigate('درباره ما')}>{t.teamTitle}</button>
            <button type="button" onClick={() => navigate('درباره ما')}>{t.partnersTitle}</button>
            <button type="button" onClick={() => navigate('درباره ما')}>{t.timelineTitle}</button>
            <button type="button" onClick={() => navigate('راهکارها و خدمات')}>{t.faqTitle}</button>
          </nav>

          <div className="obc-footer__contact">
            <h2>{t.contactInfo}</h2>
            <address>
              <div><MapPin aria-hidden="true" /><span>{t.addressText}</span></div>
              <a href="tel:+982112345678" dir="ltr"><Phone aria-hidden="true" />+98 21 1234 5678</a>
              <a href="mailto:info@obc-invest.com" dir="ltr"><Mail aria-hidden="true" />info@obc-invest.com</a>
              <small>{t.dubaiOffice}</small>
            </address>
          </div>
        </div>

        <div className="obc-footer__bottom">
          <p>{t.copyright}</p>
          <div>
            <a href="#privacy">{t.privacyPolicy}</a>
            <a href="#terms">{t.termsConditions}</a>
            <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label={t.backToHome}>
              <ArrowUp aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
