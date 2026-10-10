import React, { useState, useMemo } from 'react';
import {
  Search,
  Filter,
  RotateCcw,
  Zap,
  TrendingUp,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Layers,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building2,
  Clock,
  Compass,
  Coins
} from 'lucide-react';
import { Opportunity, NavigationTab, ArticleItem, Language } from '../../types';
import { getLocalizedData, images } from '../../data';
import { translations } from '../../i18n/translations';

interface OpportunitiesViewProps {
  lang: Language;
  setActiveTab: (tab: NavigationTab) => void;
  onSelectOpportunity: (opp: Opportunity) => void;
  onSelectArticle: (art: ArticleItem) => void;
  onOpenConsult: () => void;
}

export default function OpportunitiesView({
  lang,
  setActiveTab,
  onSelectOpportunity,
  onSelectArticle,
  onOpenConsult
}: OpportunitiesViewProps) {
  const t = translations[lang];
  const { opportunities, specialOpportunity } = getLocalizedData(lang);
  const isRtl = lang === 'FA' || lang === 'AR';

  // Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('ALL');

  const industriesList = [
    { id: 'ALL', label: t.all },
    { id: 'Energy', label: lang === 'FA' ? 'انرژی' : lang === 'AR' ? 'الطاقة' : 'Energy' },
    { id: 'Logistics', label: lang === 'FA' ? 'زیرساخت و لجستیک' : lang === 'AR' ? 'اللوجستيات' : 'Logistics' },
    { id: 'Manufacturing', label: lang === 'FA' ? 'صنعت و تولید' : lang === 'AR' ? 'الصناعة' : 'Manufacturing' },
    { id: 'Agri', label: lang === 'FA' ? 'کشاورزی و غذا' : lang === 'AR' ? 'الزراعة' : 'Agriculture' },
    { id: 'Tourism', label: lang === 'FA' ? 'گردشگری و مهمان‌نوازی' : lang === 'AR' ? 'السياحة' : 'Hospitality' },
  ];

  // Filtering logic
  const filteredOpportunities = useMemo(() => {
    return opportunities.filter(opp => {
      const matchSearch = searchTerm === '' ||
        opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        opp.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        opp.location.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchIndustry = selectedIndustry === 'ALL' || 
        opp.category.toLowerCase().includes(selectedIndustry.toLowerCase()) ||
        (selectedIndustry === 'Energy' && (opp.category.includes('انرژی') || opp.category.includes('طاقة') || opp.category.includes('Energy'))) ||
        (selectedIndustry === 'Logistics' && (opp.category.includes('لجستیک') || opp.category.includes('لوجست') || opp.category.includes('Logistics'))) ||
        (selectedIndustry === 'Manufacturing' && (opp.category.includes('صنعت') || opp.category.includes('صناع') || opp.category.includes('Manufacturing'))) ||
        (selectedIndustry === 'Agri' && (opp.category.includes('کشاورزی') || opp.category.includes('زراع') || opp.category.includes('Agri'))) ||
        (selectedIndustry === 'Tourism' && (opp.category.includes('گردشگری') || opp.category.includes('سياح') || opp.category.includes('Tourism')));
      
      return matchSearch && matchIndustry;
    });
  }, [opportunities, searchTerm, selectedIndustry]);

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedIndustry('ALL');
  };

  return (
    <div id="opportunities-page" className="space-y-16 pb-12 animate-in fade-in">
      
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-slate-900 text-white rounded-3xl mx-4 sm:mx-6 lg:mx-8 mt-4">
        <div className="absolute inset-0 z-0">
          <img
            src={images.heroGlobe}
            alt={t.oppsHeroTitle}
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
            <span className="text-white">{t.navOpportunities}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            {t.oppsHeroTitle}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {t.oppsHeroDesc}
          </p>

          <div className="pt-2">
            <button
              type="button"
              onClick={onOpenConsult}
              className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-black text-xs shadow-lg shadow-teal-700/30 transition-all cursor-pointer"
            >
              {t.submitProject}
            </button>
          </div>
        </div>
      </section>

      {/* Featured Special Project Card */}
      {specialOpportunity && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            onClick={() => onSelectOpportunity(specialOpportunity)}
            className="relative rounded-3xl bg-gradient-to-r from-teal-950 via-teal-900 to-slate-900 text-white p-6 sm:p-10 overflow-hidden shadow-2xl cursor-pointer group"
          >
            <div className="absolute inset-0 z-0 opacity-20 group-hover:scale-105 transition-transform duration-700">
              <img src={specialOpportunity.image} alt={specialOpportunity.title} className="w-full h-full object-cover" />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-start">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-500/20 text-teal-300 border border-teal-500/30">
                    ★ {t.featuredProjectBadge}
                  </span>
                  <span className="text-xs text-teal-300 font-medium">
                    {specialOpportunity.category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-teal-200 transition-colors">
                  {specialOpportunity.title}
                </h3>

                <p className="text-xs sm:text-sm text-teal-100/90 leading-relaxed max-w-2xl">
                  {specialOpportunity.description}
                </p>

                <div className="flex flex-wrap gap-4 pt-2 text-xs">
                  <div className="flex items-center gap-1.5 text-teal-200">
                    <MapPin className="w-4 h-4 text-teal-400" />
                    <span>{specialOpportunity.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-teal-200">
                    <Coins className="w-4 h-4 text-teal-400" />
                    <span>{specialOpportunity.requiredCapital}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center gap-4">
                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center w-full sm:w-auto">
                  <span className="text-[11px] text-teal-200 block">{t.expectedIrr}</span>
                  <span className="text-2xl font-black text-white font-mono">{specialOpportunity.expectedIrr}</span>
                </div>
                <button
                  type="button"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs shadow-lg transition-colors cursor-pointer"
                >
                  {t.viewDetails}
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="bg-white p-4 sm:p-6 rounded-3xl border border-slate-100 shadow-md space-y-4 text-start">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={t.searchProject}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-600/30 pe-10 ps-4"
              />
              <Search className="w-4 h-4 text-slate-400 absolute end-3.5 top-3" />
            </div>

            {/* Clear button */}
            <button
              type="button"
              onClick={handleResetFilters}
              className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t.clearFilters}</span>
            </button>
          </div>

          {/* Industry Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {industriesList.map((ind) => (
              <button
                key={ind.id}
                type="button"
                onClick={() => setSelectedIndustry(ind.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedIndustry === ind.id
                    ? 'bg-teal-700 text-white font-bold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {ind.label}
              </button>
            ))}
          </div>
        </div>

        {/* Opportunity Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOpportunities.map((opp) => (
            <div
              key={opp.id}
              onClick={() => onSelectOpportunity(opp)}
              className="group bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between text-start"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={opp.image}
                    alt={opp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 start-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-md text-slate-800 shadow-sm">
                      {opp.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 end-3">
                    <span className="px-2.5 py-0.5 rounded-lg text-xs font-bold bg-teal-800 text-white font-mono shadow-md">
                      {opp.expectedIrr} IRR
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span>{opp.location}</span>
                  </div>
                  <h3 className="font-black text-slate-900 text-base group-hover:text-teal-700 transition-colors">
                    {opp.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {opp.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500">{t.requiredCapital}:</span>
                  <span className="font-bold text-slate-900 font-mono">{opp.requiredCapital}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5-Step Process Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">{t.howToInvestTitle}</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">{t.howToInvestTitle}</h2>
          <p className="text-xs sm:text-sm text-slate-500">{t.howToInvestDesc}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { num: '01', title: lang === 'FA' ? 'شناسایی و تطبیق' : lang === 'AR' ? 'الفحص والمطابقة' : 'Screening & Matching', desc: lang === 'FA' ? 'بررسی اهداف سرمایه‌گذار و انتخاب پروژه‌ها' : lang === 'AR' ? 'تحديد أهداف المستثمر ومطابقة الفرص' : 'Target calibration and project profiling' },
            { num: '02', title: lang === 'FA' ? 'راستی‌آزمایی' : lang === 'AR' ? 'التدقيق الشامل' : 'Due Diligence', desc: lang === 'FA' ? 'دسترسی به اتاق داده و ارزیابی فنی و مالی' : lang === 'AR' ? 'فتح غرف البيانات والفحص الفني والمالي' : 'Virtual data room access & financial audit' },
            { num: '03', title: lang === 'FA' ? 'ساختاردهی مالی' : lang === 'AR' ? 'الهيكلة المالية' : 'Deal Structuring', desc: lang === 'FA' ? 'طراحی مدل تامین مالی و تقسیم ریسک' : lang === 'AR' ? 'صياغة نموذج التمويل وتوزيع المخاطر' : 'Capital stack design & risk distribution' },
            { num: '04', title: lang === 'FA' ? 'نهایی‌سازی سرمایه‌گذاری' : lang === 'AR' ? 'إتمام الاستثمار' : 'Investment Closing', desc: lang === 'FA' ? 'نهایی‌سازی ساختار و انتقال سرمایه' : lang === 'AR' ? 'استكمال الهيكلة وتحويل رأس المال' : 'Finalize the structure and deploy capital' },
            { num: '05', title: lang === 'FA' ? 'پایش و بازده' : lang === 'AR' ? 'المتابعة والتشغيل' : 'Monitoring & Yield', desc: lang === 'FA' ? 'نظارت بر اجرا تا تحقق سودآوری' : lang === 'AR' ? 'الإشراف على التشغيل وتحقيق الأرباح' : 'Project monitoring & dividend yield' },
          ].map((st, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-100 shadow-xs text-start space-y-2">
              <span className="text-xl font-black text-teal-700 font-mono">{st.num}</span>
              <h4 className="text-xs font-bold text-slate-900">{st.title}</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">{st.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
