import React, { useState } from 'react';
import {
  Users,
  Coins,
  BarChart3,
  TrendingUp,
  Globe,
  Scale,
  Briefcase,
  Store,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Building2,
  Compass,
  Award,
  Sparkles,
  Layers,
  FileText
} from 'lucide-react';
import { ServiceItem, NavigationTab, Opportunity, Language } from '../../types';
import { getLocalizedData, images } from '../../data';
import { translations } from '../../i18n/translations';

interface ServicesViewProps {
  lang: Language;
  setActiveTab: (tab: NavigationTab) => void;
  onSelectService: (service: ServiceItem) => void;
  onSelectOpportunity: (opp: Opportunity) => void;
  onOpenConsult: () => void;
}

export default function ServicesView({
  lang,
  setActiveTab,
  onSelectService,
  onSelectOpportunity,
  onOpenConsult
}: ServicesViewProps) {
  const t = translations[lang];
  const { services, faqList } = getLocalizedData(lang);
  const isRtl = lang === 'FA' || lang === 'AR';

  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const categories = [
    { id: 'ALL', label: t.all },
    { id: 'Investment', label: lang === 'FA' ? 'سرمایه‌گذاری' : lang === 'AR' ? 'الاستثمار' : 'Investment' },
    { id: 'Finance', label: lang === 'FA' ? 'مالی' : lang === 'AR' ? 'التمويل' : 'Finance' },
    { id: 'Market', label: lang === 'FA' ? 'بازار و تحقیقات' : lang === 'AR' ? 'السوق' : 'Market' },
    { id: 'Risk', label: lang === 'FA' ? 'ریسک و انطباق' : lang === 'AR' ? 'المخاطر والامتثال' : 'Risk & Compliance' },
    { id: 'Operations', label: lang === 'FA' ? 'اجرایی' : lang === 'AR' ? 'تشغيلي' : 'Operations' }
  ];

  const filteredServices = activeCategory === 'ALL'
    ? services
    : services.filter(s => {
        if (activeCategory === 'Investment') return s.category === 'سرمایه‌گذاری' || s.category === 'الاستثمار' || s.category === 'Investment';
        if (activeCategory === 'Finance') return s.category === 'مالی' || s.category === 'التمويل' || s.category === 'Finance';
        if (activeCategory === 'Market') return s.category === 'بازار' || s.category === 'السوق' || s.category === 'Market';
        if (activeCategory === 'Risk') return s.category === 'ریسک و انطباق' || s.category === 'المخاطر والامتثال' || s.category === 'Risk & Compliance' || s.category === 'حقوقی' || s.category === 'قانوني' || s.category === 'Legal';
        if (activeCategory === 'Operations') return s.category === 'اجرایی' || s.category === 'تشغيلي' || s.category === 'Operations';
        return true;
      });

  const renderServiceIcon = (name: string) => {
    switch (name) {
      case 'Users': return <Users className="w-6 h-6 text-teal-600" />;
      case 'Coins': return <Coins className="w-6 h-6 text-teal-600" />;
      case 'BarChart3': return <BarChart3 className="w-6 h-6 text-teal-600" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-teal-600" />;
      case 'Globe': return <Globe className="w-6 h-6 text-teal-600" />;
      case 'Scale': return <Scale className="w-6 h-6 text-teal-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-teal-600" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-teal-600" />;
      case 'Store': return <Store className="w-6 h-6 text-teal-600" />;
      default: return <Sparkles className="w-6 h-6 text-teal-600" />;
    }
  };

  return (
    <div id="services-page" className="space-y-16 pb-12 animate-in fade-in">
      
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-slate-900 text-white rounded-3xl mx-4 sm:mx-6 lg:mx-8 mt-4">
        <div className="absolute inset-0 z-0">
          <img
            src={images.boardroomMeeting}
            alt={t.servicesHeroTitle}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/85 to-slate-900/60"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 sm:py-20 text-center space-y-5">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-teal-300">
            <button type="button" onClick={() => setActiveTab('خانه')} className="hover:underline hover:text-white cursor-pointer">
              {t.navHome}
            </button>
            <span>&gt;</span>
            <span className="text-white">{t.navServices}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            {t.servicesHeroTitle}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {t.servicesHeroDesc}
          </p>

          <div className="pt-2">
            <button
              type="button"
              onClick={onOpenConsult}
              className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-black text-xs shadow-lg shadow-teal-700/30 transition-all cursor-pointer"
            >
              {t.requestConsult}
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid & Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Category Selector */}
        <div className="obc-services-categories flex items-center justify-start gap-2 overflow-x-auto overflow-y-hidden pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-teal-700 text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((srv) => (
            <div
              key={srv.id}
              onClick={() => onSelectService(srv)}
              className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xs hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between space-y-4 text-start"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center">
                  {renderServiceIcon(srv.iconName)}
                </div>
                <h3 className="font-bold text-slate-900 text-sm">{srv.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{srv.shortDesc}</p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <span className="text-xs text-teal-700 font-bold flex items-center gap-1">
                  <span>{t.viewDetails}</span>
                  {isRtl ? <ChevronLeft className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Target Audiences Grid */}
      <section className="bg-slate-50 py-16 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">{t.audienceSolutionsTitle}</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">{t.audienceSolutionsTitle}</h2>
            <p className="text-xs sm:text-sm text-slate-500">{t.audienceSolutionsSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-xs text-start space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
                <Coins className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">{t.typeInvestor}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{t.audienceSolutionsSubtitle}</p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-xs text-start space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">{t.typeProjectOwner}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{t.audienceSolutionsSubtitle}</p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-xs text-start space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">{t.typeCompany}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{t.audienceSolutionsSubtitle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">{t.faqTitle}</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">{t.faqTitle}</h2>
          <p className="text-xs sm:text-sm text-slate-500">{t.faqSubtitle}</p>
        </div>

        <div className="space-y-3">
          {faqList.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-xs text-start"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-start font-bold text-xs sm:text-sm text-slate-800 hover:text-teal-700 cursor-pointer"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-teal-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 text-xs text-slate-600 leading-relaxed border-t border-slate-50 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
