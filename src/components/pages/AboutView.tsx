import React from 'react';
import {
  Award,
  Briefcase,
  Globe,
  Users,
  Coins,
  CheckCircle2,
  ShieldCheck,
  Eye,
  TrendingUp,
  Target,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Linkedin,
  MapPin,
  Building2,
  Lock,
  Compass
} from 'lucide-react';
import { NavigationTab, Language } from '../../types';
import { getLocalizedData, images } from '../../data';
import { translations } from '../../i18n/translations';

interface AboutViewProps {
  lang: Language;
  setActiveTab: (tab: NavigationTab) => void;
  onOpenConsult: () => void;
}

export default function AboutView({ lang, setActiveTab, onOpenConsult }: AboutViewProps) {
  const t = translations[lang];
  const { teamMembers, growthMilestones, partnerLogos } = getLocalizedData(lang);
  const isRtl = lang === 'FA' || lang === 'AR';

  return (
    <div id="about-page" className="space-y-16 pb-12 animate-in fade-in">
      
      {/* Breadcrumb & Hero Banner */}
      <section className="relative overflow-hidden bg-slate-900 text-white rounded-3xl mx-4 sm:mx-6 lg:mx-8 mt-4">
        <div className="absolute inset-0 z-0">
          <img
            src={images.boardroomMeeting}
            alt={t.aboutHeroTitle}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/60"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 sm:py-24 text-center space-y-6">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-teal-300">
            <button
              type="button"
              onClick={() => setActiveTab('خانه')}
              className="hover:underline hover:text-white cursor-pointer"
            >
              {t.navHome}
            </button>
            <span>&gt;</span>
            <span className="text-white">{t.navAbout}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
            {t.aboutHeroTitle}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {t.aboutHeroDesc}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <button
              type="button"
              onClick={onOpenConsult}
              className="px-7 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-black text-xs shadow-lg shadow-teal-700/30 transition-all cursor-pointer"
            >
              {t.contactUs}
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab('فرصت‌های سرمایه‌گذاری');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-7 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs backdrop-blur-md border border-white/20 transition-all cursor-pointer"
            >
              {t.navOpportunities}
            </button>
          </div>
        </div>
      </section>

      {/* Key Metrics Counters Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 sm:p-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 divide-y sm:divide-y-0 lg:divide-x lg:divide-x-reverse divide-slate-100 text-center">
            
            <div className="flex flex-col items-center pt-2 sm:pt-0">
              <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono tracking-tight">+14</div>
              <div className="text-xs font-semibold text-slate-500 mt-1">{t.statYearsExp}</div>
            </div>

            <div className="flex flex-col items-center pt-2 sm:pt-0">
              <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono tracking-tight">+50</div>
              <div className="text-xs font-semibold text-slate-500 mt-1">{t.statCompletedProjects}</div>
            </div>

            <div className="flex flex-col items-center pt-2 sm:pt-0">
              <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono tracking-tight">+4.5B$</div>
              <div className="text-xs font-semibold text-slate-500 mt-1">{t.statTotalValue}</div>
            </div>

            <div className="flex flex-col items-center pt-2 sm:pt-0">
              <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono tracking-tight">24</div>
              <div className="text-xs font-semibold text-slate-500 mt-1">{t.statCountriesCovered}</div>
            </div>

            <div className="flex flex-col items-center pt-2 sm:pt-0 col-span-2 sm:col-span-1">
              <div className="text-2xl sm:text-3xl font-black text-teal-700 font-mono tracking-tight">98%</div>
              <div className="text-xs font-semibold text-slate-500 mt-1">{t.statSatisfactionRate}</div>
            </div>

          </div>
        </div>
      </section>

      {/* Who We Are & Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6 text-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-bold border border-teal-100">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.whoWeAreTitle}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
              {t.whoWeAreTitle}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t.whoWeAreDesc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                <div className="w-8 h-8 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-slate-900 text-xs">{t.valuesTitle}</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">{t.valuesDesc}</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                <div className="w-8 h-8 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
                  <Target className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-slate-900 text-xs">{t.missionTitle}</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">{t.missionDesc}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={images.officeBuilding}
                alt="OBC Headquarters"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 start-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 max-w-xs text-start">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-700 text-white flex items-center justify-center font-bold text-lg">
                  24
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900 block">{t.regionsSubtitle}</span>
                  <span className="text-[10px] text-slate-500">{t.statCountriesCovered}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-slate-50 py-16 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">{t.teamTitle}</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">{t.teamTitle}</h2>
            <p className="text-xs sm:text-sm text-slate-500">{t.teamDesc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xs hover:shadow-lg transition-all text-center p-6 space-y-4"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto border-2 border-teal-600/30 p-1">
                  <img src={member.avatar} alt={member.name} className="w-full h-full object-cover rounded-full" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-black text-slate-900">{member.name}</h3>
                  <span className="text-xs font-bold text-teal-700 block">{member.role}</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Growth Milestones Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">{t.timelineTitle}</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">{t.timelineTitle}</h2>
          <p className="text-xs sm:text-sm text-slate-500">{t.timelineDesc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {growthMilestones.map((m, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-white border border-slate-100 shadow-xs hover:shadow-md transition-shadow text-start space-y-3">
              <span className="text-2xl font-black text-teal-700 font-mono">{m.year}</span>
              <h4 className="text-sm font-bold text-slate-900">{m.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partners Logos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t.partnersTitle}</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
          {partnerLogos.map((p, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-100 shadow-xs flex flex-col items-center justify-center text-center h-20">
              <span className="font-black text-slate-800 text-sm tracking-wide">{p.name}</span>
              <span className="text-[9px] text-slate-400 mt-0.5 line-clamp-1">{p.subtitle}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
