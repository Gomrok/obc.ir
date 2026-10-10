import React, { useState } from 'react';
import {
  Search,
  BookOpen,
  FileText,
  Video,
  PieChart,
  TrendingUp,
  Clock,
  Eye,
  Bookmark,
  Send,
  CheckCircle2,
  Filter,
  UserCheck
} from 'lucide-react';
import { ArticleItem, NavigationTab, Language } from '../../types';
import { getLocalizedData, images } from '../../data';
import { translations } from '../../i18n/translations';

interface KnowledgeViewProps {
  lang: Language;
  setActiveTab: (tab: NavigationTab) => void;
  onSelectArticle: (article: ArticleItem) => void;
  onOpenConsult: () => void;
}

export default function KnowledgeView({
  lang,
  setActiveTab,
  onSelectArticle,
  onOpenConsult
}: KnowledgeViewProps) {
  const t = translations[lang];
  const { articles, knowledgeAuthors } = getLocalizedData(lang);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSent, setNewsletterSent] = useState(false);

  const categories = [
    { id: 'ALL', name: t.all, count: '300+' },
    { id: 'Agri', name: lang === 'FA' ? 'کشاورزی و غذا' : lang === 'AR' ? 'الزراعة والغذاء' : 'Agriculture & Food', count: '60+' },
    { id: 'Economy', name: lang === 'FA' ? 'اقتصاد و بازار' : lang === 'AR' ? 'الاقتصاد والأسواق' : 'Economy & Markets', count: '50+' },
    { id: 'Energy', name: lang === 'FA' ? 'انرژی و منابع' : lang === 'AR' ? 'الطاقة والموارد' : 'Energy & Resources', count: '45+' },
    { id: 'Logistics', name: lang === 'FA' ? 'لجستیک و حمل‌ونقل' : lang === 'AR' ? 'اللوجستيات والشحن' : 'Logistics & Shipping', count: '40+' },
  ];

  const contentTypes = [
    { title: lang === 'FA' ? 'اینفوگرافیک' : lang === 'AR' ? 'إنفوجرافيك' : 'Infographics', desc: lang === 'FA' ? 'اطلاعات کلیدی در قالب اینفوگرافیک‌های کاربردی' : lang === 'AR' ? 'معلومات بيانية مكثفة ودقيقة' : 'High-impact structured visual digests', icon: PieChart },
    { title: lang === 'FA' ? 'ویدیو و وبینار' : lang === 'AR' ? 'فيديو وندوات' : 'Webinars & Video', desc: lang === 'FA' ? 'وبینارها و مصاحبه‌های تخصصی با کارشناسان' : lang === 'AR' ? 'ندوات وحوارات تفصيلية مع الخبراء' : 'Expert panels, masterclasses, and interviews', icon: Video },
    { title: lang === 'FA' ? 'راهنماهای کاربردی' : lang === 'AR' ? 'أدلة عملية' : 'Practical Guides', desc: lang === 'FA' ? 'دستورالعمل‌ها و راهنماهای عملی برای کسب‌وکارها' : lang === 'AR' ? 'إرشادات تطبيقية للمستثمرين والشركات' : 'Step-by-step corporate playbooks', icon: BookOpen },
    { title: lang === 'FA' ? 'گزارش‌های بازار' : lang === 'AR' ? 'تقارير الأسواق' : 'Market Reports', desc: lang === 'FA' ? 'گزارش‌های جامع از روند بازارها و فرصت‌های سرمایه‌گذاری' : lang === 'AR' ? 'دراسات استشرافية لاتجاهات الأسواق' : 'In-depth macroeconomic quarterly outlooks', icon: TrendingUp },
    { title: lang === 'FA' ? 'مقالات تحلیلی' : lang === 'AR' ? 'مقالات تحليلية' : 'Analytical Articles', desc: lang === 'FA' ? 'تحلیل‌های تخصصی و دیدگاه‌های کارشناسان' : lang === 'AR' ? 'تحليلات ورؤى الخبراء في مختلف القطاعات' : 'Deep-dive analytical research briefs', icon: FileText },
  ];

  const filteredArticles = articles.filter(a => {
    const matchSearch = searchTerm === '' || a.title.toLowerCase().includes(searchTerm.toLowerCase()) || a.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCat = selectedCategory === 'ALL' ||
      (selectedCategory === 'Agri' && (a.category.includes('کشاورزی') || a.category.includes('زراع') || a.category.includes('Agri'))) ||
      (selectedCategory === 'Economy' && (a.category.includes('اقتصاد') || a.category.includes('اقتصاد') || a.category.includes('Economy'))) ||
      (selectedCategory === 'Energy' && (a.category.includes('انرژی') || a.category.includes('طاقة') || a.category.includes('Energy'))) ||
      (selectedCategory === 'Logistics' && (a.category.includes('لجستیک') || a.category.includes('لوجست') || a.category.includes('Logistics')));
    return matchSearch && matchCat;
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSent(true);
    setTimeout(() => {
      setNewsletterSent(false);
      setNewsletterEmail('');
    }, 3000);
  };

  return (
    <div id="knowledge-page" className="space-y-16 pb-12 animate-in fade-in">
      
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-slate-900 text-white rounded-3xl mx-4 sm:mx-6 lg:mx-8 mt-4">
        <div className="absolute inset-0 z-0">
          <img
            src={images.laptopFinance}
            alt={t.knowledgeHeroTitle}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/85 to-slate-900/60"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 sm:py-20 text-center space-y-5">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-teal-300">
            <button type="button" onClick={() => setActiveTab('خانه')} className="hover:underline hover:text-white cursor-pointer">
              {t.navHome}
            </button>
            <span>&gt;</span>
            <span className="text-white">{t.navKnowledge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            {t.knowledgeHeroTitle}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {t.knowledgeHeroDesc}
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

      {/* Content Formats Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {contentTypes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-shadow text-start space-y-2">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-xs">{item.title}</h4>
                <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Articles Search, Filter & Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Search & Categories */}
        <div className="bg-white p-4 sm:p-6 rounded-3xl border border-slate-100 shadow-md space-y-4 text-start">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-600/30 pe-10 ps-4"
            />
            <Search className="w-4 h-4 text-slate-400 absolute end-3.5 top-3" />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-teal-700 text-white font-bold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span>{cat.name}</span>
                <span className="text-[10px] opacity-70 ms-1 font-mono">({cat.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredArticles.map((art) => (
            <div
              key={art.id}
              onClick={() => onSelectArticle(art)}
              className="group bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-xs hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between text-start"
            >
              <div>
                <div className="relative h-44 w-full overflow-hidden">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 start-3">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${art.tagColor}`}>
                      {art.tag}
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-2.5">
                  <div className="flex items-center gap-3 text-[11px] text-slate-400">
                    <span>{art.date}</span>
                    <span>•</span>
                    <span>{art.readTime}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-teal-700 transition-colors line-clamp-2">
                    {art.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {art.summary}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-teal-700 font-bold">
                  <span>{t.viewDetails}</span>
                  <BookOpen className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Authors / Expert Contributors */}
      <section className="bg-slate-50 py-16 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">{t.authorsTitle}</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">{t.authorsTitle}</h2>
            <p className="text-xs sm:text-sm text-slate-500">{t.authorsSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {knowledgeAuthors.map((author, idx) => (
              <div key={idx} className="bg-white p-5 rounded-3xl border border-slate-100 shadow-xs text-center space-y-3">
                <div className="w-16 h-16 rounded-full overflow-hidden mx-auto border-2 border-teal-600/30 p-0.5">
                  <img src={author.avatar} alt={author.name} className="w-full h-full object-cover rounded-full" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs">{author.name}</h4>
                  <span className="text-[10px] text-teal-700 font-semibold">{author.role}</span>
                </div>
                <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">{author.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-r from-teal-900 to-slate-900 text-white rounded-3xl p-8 sm:p-10 space-y-4">
          <h3 className="text-xl sm:text-2xl font-black">{t.newsletterTitle}</h3>
          <p className="text-xs sm:text-sm text-teal-100/90 max-w-xl mx-auto leading-relaxed">
            {t.newsletterDesc}
          </p>

          {newsletterSent ? (
            <div className="p-3 bg-teal-800/80 rounded-xl text-xs font-bold text-teal-200">
              {t.sentSuccess}
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-md mx-auto pt-2">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="name@company.com"
                className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 font-mono text-start"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs shadow-md transition-colors cursor-pointer whitespace-nowrap"
              >
                {t.newsletterBtn}
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
}
