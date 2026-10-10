import React, { useState } from 'react';
import { X, MapPin, Calendar, Clock, Eye, Sparkles, Send, CheckCircle2, ChevronLeft, ChevronRight, Search, TrendingUp, ShieldCheck, Scale, Compass, BarChart3, Coins, Users, Store } from 'lucide-react';
import { Opportunity, ServiceItem, ArticleItem, NavigationTab, Language } from '../types';
import { translations } from '../i18n/translations';

interface SharedModalsProps {
  lang: Language;
  // Search Modal
  isSearchOpen: boolean;
  onCloseSearch: () => void;
  onNavigateTab: (tab: NavigationTab) => void;
  // Opportunity Modal
  selectedOpportunity: Opportunity | null;
  onCloseOpportunity: () => void;
  // Service Modal
  selectedService: ServiceItem | null;
  onCloseService: () => void;
  // Article Modal
  selectedArticle: ArticleItem | null;
  onCloseArticle: () => void;
  // Consult / Project Modal
  isConsultOpen: boolean;
  onCloseConsult: () => void;
  // All searchable data
  allOpportunities: Opportunity[];
  allServices: ServiceItem[];
  allArticles: ArticleItem[];
}

export default function SharedModals({
  lang,
  isSearchOpen,
  onCloseSearch,
  onNavigateTab,
  selectedOpportunity,
  onCloseOpportunity,
  selectedService,
  onCloseService,
  selectedArticle,
  onCloseArticle,
  isConsultOpen,
  onCloseConsult,
  allOpportunities,
  allServices,
  allArticles,
}: SharedModalsProps) {
  const t = translations[lang];
  const isRtl = lang === 'FA' || lang === 'AR';

  // Search state
  const [searchQuery, setSearchQuery] = useState('');

  // Consult form state
  const [consultForm, setConsultForm] = useState({
    name: '',
    phone: '',
    email: '',
    type: t.typeInvestor,
    subject: '',
    message: ''
  });
  const [consultSuccess, setConsultSuccess] = useState(false);

  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConsultSuccess(true);
    setTimeout(() => {
      setConsultSuccess(false);
      onCloseConsult();
      setConsultForm({ name: '', phone: '', email: '', type: t.typeInvestor, subject: '', message: '' });
    }, 2500);
  };

  // Filtered search items
  const q = searchQuery.toLowerCase().trim();
  const matchedOpps = q
    ? allOpportunities.filter(o => o.title.toLowerCase().includes(q) || o.description.toLowerCase().includes(q) || o.category.toLowerCase().includes(q))
    : allOpportunities.slice(0, 3);
  const matchedServices = q
    ? allServices.filter(s => s.title.toLowerCase().includes(q) || s.shortDesc.toLowerCase().includes(q))
    : allServices.slice(0, 3);
  const matchedArticles = q
    ? allArticles.filter(a => a.title.toLowerCase().includes(q) || a.summary.toLowerCase().includes(q))
    : allArticles.slice(0, 3);

  const renderServiceIcon = (name: string) => {
    switch (name) {
      case 'Users': return <Users className="w-6 h-6 text-teal-600" />;
      case 'Coins': return <Coins className="w-6 h-6 text-teal-600" />;
      case 'BarChart3': return <BarChart3 className="w-6 h-6 text-teal-600" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-teal-600" />;
      case 'Scale': return <Scale className="w-6 h-6 text-teal-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-teal-600" />;
      case 'Compass': return <Compass className="w-6 h-6 text-teal-600" />;
      case 'Store': return <Store className="w-6 h-6 text-teal-600" />;
      default: return <Sparkles className="w-6 h-6 text-teal-600" />;
    }
  };

  return (
    <>
      {/* 1. Global Live Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-100 overflow-hidden text-start">
            {/* Search Input Bar */}
            <div className="p-4 border-b border-slate-100 flex items-center gap-3">
              <button
                type="button"
                onClick={onCloseSearch}
                className="w-8 h-8 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 flex items-center justify-center cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="relative flex-1">
                <input
                  type="text"
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t.searchPlaceholder}
                  className="w-full bg-slate-50 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-600/30 text-start pe-10 ps-4"
                />
                <Search className="w-4 h-4 text-slate-400 absolute end-3.5 top-3.5" />
              </div>
            </div>

            {/* Results sections */}
            <div className="max-h-[65vh] overflow-y-auto p-4 space-y-5">
              {/* Opportunities */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t.navOpportunities}</span>
                  <button
                    type="button"
                    onClick={() => { onCloseSearch(); onNavigateTab('فرصت‌های سرمایه‌گذاری'); }}
                    className="text-xs text-teal-700 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>{t.viewAll}</span>
                    {isRtl ? <ChevronLeft className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <div className="space-y-2">
                  {matchedOpps.map(opp => (
                    <div
                      key={opp.id}
                      onClick={() => { onCloseSearch(); onNavigateTab('فرصت‌های سرمایه‌گذاری'); }}
                      className="p-3 rounded-xl hover:bg-slate-50 border border-slate-100 cursor-pointer flex items-center justify-between gap-3 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <img src={opp.image} alt={opp.title} className="w-12 h-12 rounded-lg object-cover" />
                        <div>
                          <h4 className="text-xs font-bold text-slate-800">{opp.title}</h4>
                          <span className="text-[11px] text-slate-500">{opp.location} • {opp.requiredCapital}</span>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-teal-50 text-teal-700">
                        {opp.expectedIrr} IRR
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t.navServices}</span>
                  <button
                    type="button"
                    onClick={() => { onCloseSearch(); onNavigateTab('راهکارها و خدمات'); }}
                    className="text-xs text-teal-700 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>{t.viewAll}</span>
                    {isRtl ? <ChevronLeft className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <div className="space-y-2">
                  {matchedServices.map(srv => (
                    <div
                      key={srv.id}
                      onClick={() => { onCloseSearch(); onNavigateTab('راهکارها و خدمات'); }}
                      className="p-3 rounded-xl hover:bg-slate-50 border border-slate-100 cursor-pointer flex items-center justify-between gap-3 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center shrink-0">
                          {renderServiceIcon(srv.iconName)}
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-slate-800">{srv.title}</h4>
                          <p className="text-[11px] text-slate-500 line-clamp-1">{srv.shortDesc}</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                        {srv.category}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Articles */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t.navKnowledge}</span>
                  <button
                    type="button"
                    onClick={() => { onCloseSearch(); onNavigateTab('دانش و بینش'); }}
                    className="text-xs text-teal-700 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>{t.viewAll}</span>
                    {isRtl ? <ChevronLeft className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <div className="space-y-2">
                  {matchedArticles.map(art => (
                    <div
                      key={art.id}
                      onClick={() => { onCloseSearch(); onNavigateTab('دانش و بینش'); }}
                      className="p-3 rounded-xl hover:bg-slate-50 border border-slate-100 cursor-pointer flex items-center justify-between gap-3 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <img src={art.image} alt={art.title} className="w-12 h-12 rounded-lg object-cover" />
                        <div>
                          <h4 className="text-xs font-bold text-slate-800">{art.title}</h4>
                          <span className="text-[11px] text-slate-500">{art.date} • {art.readTime}</span>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700">
                        {art.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. Opportunity Detail Modal */}
      {selectedOpportunity && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[90vh] flex flex-col text-start">
            <div className="relative h-64 sm:h-72 w-full shrink-0">
              <img src={selectedOpportunity.image} alt={selectedOpportunity.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"></div>
              <button
                type="button"
                onClick={onCloseOpportunity}
                className="absolute top-4 end-4 w-9 h-9 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white flex items-center justify-center cursor-pointer transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 start-6 end-6 text-white space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-600 text-white">
                    {selectedOpportunity.category}
                  </span>
                  {selectedOpportunity.status && (
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/80 text-white">
                      {selectedOpportunity.status}
                    </span>
                  )}
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white">{selectedOpportunity.title}</h3>
                <p className="text-xs text-slate-300 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-teal-400" />
                  {selectedOpportunity.location}
                </p>
              </div>
            </div>

            <div className="p-6 overflow-y-auto space-y-6 flex-1">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                  <span className="text-[11px] text-slate-500 block">{t.requiredCapital}</span>
                  <span className="text-xs font-bold text-slate-900 mt-0.5 block">{selectedOpportunity.requiredCapital}</span>
                </div>
                <div className="p-3 rounded-2xl bg-teal-50/60 border border-teal-100 text-center">
                  <span className="text-[11px] text-teal-700 block">{t.expectedIrr}</span>
                  <span className="text-xs font-black text-teal-900 mt-0.5 block">{selectedOpportunity.expectedIrr}</span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                  <span className="text-[11px] text-slate-500 block">{t.paybackPeriod}</span>
                  <span className="text-xs font-bold text-slate-900 mt-0.5 block">{selectedOpportunity.paybackPeriod}</span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                  <span className="text-[11px] text-slate-500 block">{t.riskLevel}</span>
                  <span className="text-xs font-bold text-emerald-700 mt-0.5 block">{selectedOpportunity.riskLevel}</span>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-bold text-slate-900">{t.viewDetails}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{selectedOpportunity.description}</p>
              </div>

              {selectedOpportunity.tags && selectedOpportunity.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {selectedOpportunity.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs font-medium">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onCloseOpportunity}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer"
              >
                {t.close}
              </button>
              <button
                type="button"
                onClick={() => {
                  onCloseOpportunity();
                  onNavigateTab('تماس با ما');
                }}
                className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-teal-700 hover:bg-teal-800 transition-colors shadow-md shadow-teal-700/20 cursor-pointer"
              >
                {t.requestConsult}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col text-start">
            <div className="p-6 border-b border-slate-100 flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center">
                  {renderServiceIcon(selectedService.iconName)}
                </div>
                <div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-teal-100 text-teal-800">
                    {selectedService.category}
                  </span>
                  <h3 className="text-lg font-black text-slate-900 mt-1">{selectedService.title}</h3>
                </div>
              </div>
              <button
                type="button"
                onClick={onCloseService}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{selectedService.fullDesc}</p>
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-bold text-slate-900">{t.audienceSolutionsTitle}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedService.features.map(f => (
                    <div key={f} className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onCloseService}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer"
              >
                {t.close}
              </button>
              <button
                type="button"
                onClick={() => {
                  onCloseService();
                  onNavigateTab('تماس با ما');
                }}
                className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-teal-700 hover:bg-teal-800 transition-colors shadow-md shadow-teal-700/20 cursor-pointer"
              >
                {t.requestConsult}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[90vh] flex flex-col text-start">
            <div className="relative h-60 w-full shrink-0">
              <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>
              <button
                type="button"
                onClick={onCloseArticle}
                className="absolute top-4 end-4 w-9 h-9 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white flex items-center justify-center cursor-pointer transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 start-6 end-6 text-white space-y-1">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${selectedArticle.tagColor}`}>
                  {selectedArticle.tag}
                </span>
                <h3 className="text-xl font-black text-white">{selectedArticle.title}</h3>
                <div className="flex items-center gap-4 text-xs text-slate-300 pt-1">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{selectedArticle.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{selectedArticle.readTime}</span>
                  {selectedArticle.views && <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5" />{selectedArticle.views}</span>}
                </div>
              </div>
            </div>

            <div className="p-6 overflow-y-auto space-y-4 flex-1">
              <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-100 text-xs sm:text-sm text-teal-950 font-medium leading-relaxed">
                {selectedArticle.summary}
              </div>
              <div className="space-y-3 pt-2">
                {selectedArticle.content.map((paragraph, idx) => (
                  <p key={idx} className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
              <button
                type="button"
                onClick={() => alert(t.sentSuccess)}
                className="text-xs font-bold text-teal-700 hover:underline flex items-center gap-1.5 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{t.share}</span>
              </button>
              <button
                type="button"
                onClick={onCloseArticle}
                className="px-6 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-200 hover:bg-slate-300 transition-colors cursor-pointer"
              >
                {t.close}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 5. Consultation & Submit Project Modal */}
      {isConsultOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl border border-slate-100 overflow-hidden text-start">
            <div className="p-6 bg-gradient-to-r from-teal-900 to-teal-800 text-white relative">
              <button
                type="button"
                onClick={onCloseConsult}
                className="absolute top-5 end-5 w-8 h-8 rounded-full bg-teal-950/50 hover:bg-teal-950 text-white flex items-center justify-center cursor-pointer transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <h3 className="text-xl font-black text-white">{t.consultModalTitle}</h3>
              <p className="text-xs text-teal-100/90 mt-1">{t.consultModalSubtitle}</p>
            </div>

            {consultSuccess ? (
              <div className="p-10 text-center space-y-3">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
                <h4 className="text-base font-black text-slate-900">{t.sentSuccess}</h4>
                <p className="text-xs text-slate-600">{t.consultSuccessMsg}</p>
              </div>
            ) : (
              <form onSubmit={handleConsultSubmit} className="p-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">{t.fullName}</label>
                    <input
                      required
                      type="text"
                      value={consultForm.name}
                      onChange={(e) => setConsultForm({ ...consultForm, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-teal-600/30 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">{t.phone}</label>
                    <input
                      required
                      type="tel"
                      value={consultForm.phone}
                      onChange={(e) => setConsultForm({ ...consultForm, phone: e.target.value })}
                      placeholder="+98 912 000 0000"
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-teal-600/30 focus:outline-none text-start font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">{t.email}</label>
                    <input
                      required
                      type="email"
                      value={consultForm.email}
                      onChange={(e) => setConsultForm({ ...consultForm, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-teal-600/30 focus:outline-none text-start font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">{t.userType}</label>
                    <select
                      value={consultForm.type}
                      onChange={(e) => setConsultForm({ ...consultForm, type: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-teal-600/30 focus:outline-none"
                    >
                      <option value={t.typeInvestor}>{t.typeInvestor}</option>
                      <option value={t.typeProjectOwner}>{t.typeProjectOwner}</option>
                      <option value={t.typeCompany}>{t.typeCompany}</option>
                      <option value={t.typeAdvisor}>{t.typeAdvisor}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">{t.subject}</label>
                  <input
                    required
                    type="text"
                    value={consultForm.subject}
                    onChange={(e) => setConsultForm({ ...consultForm, subject: e.target.value })}
                    placeholder="e.g. Solar 50MW Co-Investment"
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-teal-600/30 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">{t.message}</label>
                  <textarea
                    rows={3}
                    value={consultForm.message}
                    onChange={(e) => setConsultForm({ ...consultForm, message: e.target.value })}
                    placeholder="..."
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-teal-600/30 focus:outline-none resize-none"
                  ></textarea>
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={onCloseConsult}
                    className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    {t.close}
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-teal-700 hover:bg-teal-800 transition-colors shadow-md shadow-teal-700/20 cursor-pointer flex items-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{t.submitConsult}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
