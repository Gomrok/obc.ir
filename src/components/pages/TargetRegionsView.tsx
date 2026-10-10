import React, { useState } from 'react';
import {
  Globe,
  MapPin,
  TrendingUp,
  Scale,
  ShieldCheck,
  CheckCircle2,
  Coins,
  Store,
  Layers,
  ArrowRight,
  Compass,
  Briefcase
} from 'lucide-react';
import { TargetRegion, NavigationTab, Opportunity, Language } from '../../types';
import { getLocalizedData, images } from '../../data';
import { translations } from '../../i18n/translations';

interface TargetRegionsViewProps {
  lang: Language;
  setActiveTab: (tab: NavigationTab) => void;
  onSelectOpportunity: (opp: Opportunity) => void;
  onOpenConsult: () => void;
}

export default function TargetRegionsView({
  lang,
  setActiveTab,
  onSelectOpportunity,
  onOpenConsult
}: TargetRegionsViewProps) {
  const t = translations[lang];
  const { targetRegions } = getLocalizedData(lang);
  const [selectedRegionId, setSelectedRegionId] = useState<string>('middle-east');

  const selectedRegion = targetRegions.find(r => r.id === selectedRegionId) || targetRegions[0];

  const criteriaList = [
    { title: lang === 'FA' ? 'پتانسیل رشد اقتصادی' : lang === 'AR' ? 'إمكانات النمو الاقتصادي' : 'Economic Growth Potential', desc: lang === 'FA' ? 'رشد پایدار GDP و شاخص‌های کلان اقتصادی و نوظهور.' : lang === 'AR' ? 'نمو ناتج محلي إجمالي مستدام ومؤشرات كلية واعدة.' : 'Sustainable GDP expansion and emerging macroeconomic indicators.' },
    { title: lang === 'FA' ? 'روابط تجاری منطقه‌ای' : lang === 'AR' ? 'العلاقات التجارية الإقليمية' : 'Regional Trade Corridors', desc: lang === 'FA' ? 'وجود زیرساخت و مسیرهای تجاری دوجانبه و چندجانبه.' : lang === 'AR' ? 'بنية تحتية ومسارات تجارية ثنائية ومتعددة الأطراف.' : 'Cross-border trade routes, preferential access, and corridor transit.' },
    { title: lang === 'FA' ? 'حجم بازار و تقاضا' : lang === 'AR' ? 'حجم السوق والطلب' : 'Market Size & Demand', desc: lang === 'FA' ? 'اندازه بازار هدف، قدرت خرید و کشش تقاضای رو به رشد.' : lang === 'AR' ? 'حجم السوق المستهدف والقدرة الشرائية المرتفعة.' : 'Demographic depth, purchasing power, and growing consumption.' },
    { title: lang === 'FA' ? 'پتانسیل رشد لجستیکی' : lang === 'AR' ? 'البنية اللوجستية' : 'Logistics & Connectivity', desc: lang === 'FA' ? 'دسترسی به کریدورهای ترانزیتی و بنادر بین‌المللی.' : lang === 'AR' ? 'الوصول إلى الموانئ البحرية وشبكات النقل الدولية.' : 'Deepwater ports, trans-continental rail, and air freight hubs.' },
    { title: lang === 'FA' ? 'مزیت‌های رقابتی' : lang === 'AR' ? 'المزايا التنافسية' : 'Competitive Advantages', desc: lang === 'FA' ? 'هزینه‌های رقابتی تولید، معافیت‌های مالیاتی و انرژی.' : lang === 'AR' ? 'تكاليف إنتاج منافسة وإعفاءات ضريبية وطاقة ملائمة.' : 'Competitive operational cost, tax free zones, and low-cost power.' },
    { title: lang === 'FA' ? 'دسترسی به منابع' : lang === 'AR' ? 'وفرة الموارد' : 'Resource Richness', desc: lang === 'FA' ? 'منابع غنی طبیعی، کانی‌ها، نیروی کار متخصص و انرژی.' : lang === 'AR' ? 'موارد طبيعية ومعادن وكوادر بشرية مؤهلة.' : 'Natural minerals, skilled engineering workforce, and clean energy.' },
    { title: lang === 'FA' ? 'سهولت کسب‌وکار' : lang === 'AR' ? 'سهولة ممارسة الأعمال' : 'Ease of Business', desc: lang === 'FA' ? 'سهولت ثبت شرکت، انطباق مالیاتی و قوانین حمایتی.' : lang === 'AR' ? 'إجراءات تأسيس مرنة وتشريعات حماية الاستثمار.' : 'Swift corporate registration, legal compliance, and FDI guarantees.' },
    { title: lang === 'FA' ? 'ثبات قانونی و اعتباری' : lang === 'AR' ? 'الاستقرار القانوني' : 'Legal & Sovereign Stability', desc: lang === 'FA' ? 'محیط امن حقوقی، مالکیت شفاف و حاکمیت پایدار قانون.' : lang === 'AR' ? 'بيئة تشريعية متينة وحماية الملكية والحوكمة المستقرة.' : 'Institutional governance, ownership clarity, and FX security.' }
  ];

  return (
    <div id="target-regions-page" className="space-y-16 pb-12 animate-in fade-in">
      
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-slate-900 text-white rounded-3xl mx-4 sm:mx-6 lg:mx-8 mt-4">
        <div className="absolute inset-0 z-0">
          <img
            src={images.heroGlobe}
            alt={t.regionsHeroTitle}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/60"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 sm:py-20 text-center space-y-5">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-teal-300">
            <button type="button" onClick={() => setActiveTab('خانه')} className="hover:underline hover:text-white cursor-pointer">
              {t.navHome}
            </button>
            <span>&gt;</span>
            <span className="text-white">{t.navRegions}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            {t.regionsHeroTitle}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {t.regionsHeroDesc}
          </p>

          <div className="pt-3">
            <button
              type="button"
              onClick={onOpenConsult}
              className="px-7 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-black text-xs shadow-lg shadow-teal-700/30 transition-all cursor-pointer"
            >
              {t.requestConsult}
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Region Selector & Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 space-y-8 text-start">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-black text-slate-900">{t.navRegions}</h2>
            <p className="text-xs text-slate-500 max-w-xl mx-auto">
              {t.regionsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Regions Nav list */}
            <div className="lg:col-span-4 space-y-2">
              {targetRegions.map((region) => {
                const isSelected = region.id === selectedRegion.id;
                return (
                  <button
                    key={region.id}
                    type="button"
                    onClick={() => setSelectedRegionId(region.id)}
                    className={`w-full p-4 rounded-2xl text-start transition-all cursor-pointer flex items-center justify-between border ${
                      isSelected
                        ? 'bg-teal-700 text-white border-teal-700 shadow-md'
                        : 'bg-slate-50 text-slate-700 border-slate-100 hover:bg-slate-100'
                    }`}
                  >
                    <div>
                      <h4 className="text-sm font-bold">{region.name}</h4>
                      <p className={`text-[11px] line-clamp-1 mt-0.5 ${isSelected ? 'text-teal-100' : 'text-slate-500'}`}>
                        {region.desc}
                      </p>
                    </div>
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-lg ${
                      isSelected ? 'bg-teal-800 text-white' : 'bg-slate-200 text-slate-700'
                    }`}>
                      {region.activeProjects}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Region Detail Panel */}
            <div className="lg:col-span-8 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-100 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/60 pb-5">
                <div>
                  <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">{t.navRegions}</span>
                  <h3 className="text-2xl font-black text-slate-900 mt-1">{selectedRegion.name}</h3>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-white border border-slate-200 text-center">
                    <span className="text-[10px] text-slate-500 block">{t.activeProjects}</span>
                    <span className="text-base font-black text-teal-700 font-mono">{selectedRegion.activeProjects}</span>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedRegion.desc}
              </p>

              {/* Key Sectors */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-900">{lang === 'FA' ? 'بخش‌های کلیدی' : lang === 'AR' ? 'القطاعات الرئيسية' : 'Key Sectors'}</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedRegion.keySectors.map((sector, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs">
                      {sector}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-900">{lang === 'FA' ? 'مزایای راهبردی' : lang === 'AR' ? 'المزايا الاستراتيجية' : 'Strategic Highlights'}</h4>
                <div className="space-y-2">
                  {selectedRegion.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-2xl bg-white border border-slate-200/80 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={onOpenConsult}
                  className="px-6 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs shadow-md transition-colors cursor-pointer"
                >
                  {t.requestConsult}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8 Selection Criteria */}
      <section className="bg-slate-50 py-16 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">{t.criteriaTitle}</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">{t.criteriaTitle}</h2>
            <p className="text-xs sm:text-sm text-slate-500">{t.criteriaSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {criteriaList.map((crit, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white border border-slate-100 shadow-xs text-start space-y-2">
                <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-700 font-bold flex items-center justify-center text-xs font-mono">
                  0{idx + 1}
                </div>
                <h4 className="font-bold text-slate-900 text-xs">{crit.title}</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">{crit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
