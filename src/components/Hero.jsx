import React from 'react';
import { 
  ArrowRight, 
  Zap, 
  Building2, 
  Sun, 
  ShieldCheck, 
  Award, 
  FileDown, 
  CheckCircle,
  Activity
} from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Hero({ lang, onOpenQuoteModal }) {
  const { profile } = companyData;
  const isAr = lang === 'ar';

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-16 overflow-hidden bg-[#07101e]"
    >
      {/* Background Image with High-Voltage Transmission Tower at Sunset */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2000&q=85" 
          alt="Power Grid Transmission Towers" 
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-10000 hover:scale-100"
        />
        {/* Deep Emerald & Slate Corporate Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07101e]/95 via-[#0b192c]/85 to-[#064e3b]/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#07101e]/60 to-[#07101e]/95"></div>
      </div>

      {/* Decorative Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#22c55e 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Text Content & CTAs */}
          <div className="lg:col-span-8 text-start space-y-6">
            
            {/* Tag/Badge: POWERING PROGRESS */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/40 backdrop-blur-md">
              <Zap className="w-4 h-4 text-emerald-400 animate-bounce" />
              <span className="text-emerald-400 font-extrabold text-xs tracking-widest uppercase">
                {isAr ? profile.heroBadge.ar : profile.heroBadge.en}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span className="text-slate-300 text-xs font-semibold">
                {isAr ? 'المملكة العربية السعودية' : 'KSA Power Grid'}
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.15] tracking-tight">
              {isAr ? (
                <>
                  شريككم الموثوق في <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-200">بنية الطاقة التحتية</span> والإنشاءات الكبرى
                </>
              ) : (
                <>
                  Your Trusted Partner in <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-200">Power Infrastructure</span> &amp; Construction
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
              {isAr ? profile.heroSubtitle.ar : profile.heroSubtitle.en}
            </p>

            {/* Credential Micro Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-300">
              <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-700/60">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>SCA Member: {profile.scaNumber}</span>
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-700/60">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>C.R: {profile.crNumber}</span>
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-700/60">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Up to 765 kV OHTL</span>
              </span>
            </div>

            {/* Action Buttons (Exact Reference Layout Match) */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => scrollToSection('services')}
                className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm sm:text-base px-7 py-3.5 rounded-lg shadow-xl shadow-emerald-500/25 transition-all transform hover:-translate-y-1 group"
              >
                <span>{isAr ? 'خدماتنا الهندسية' : 'Our Services'}</span>
                <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isAr ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
              </button>

              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center gap-2 bg-slate-800/90 hover:bg-slate-700/90 text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-lg border border-slate-600/80 backdrop-blur-md transition-all hover:border-emerald-500/50"
              >
                <span>{isAr ? 'طلب عرض أسعار فوري' : 'Get a Project Quote'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Floating Side Capability Badges (Exact Reference Layout Match) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            
            {/* Card 1: Transmission Lines */}
            <div 
              onClick={() => scrollToSection('services')}
              className="floating-badge cursor-pointer p-5 rounded-2xl flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-700/30 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all flex-shrink-0 shadow-lg">
                <Zap className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-white font-heading font-bold text-lg group-hover:text-emerald-300 transition-colors">
                  {isAr ? 'خطوط نقل الطاقة' : 'Transmission Lines'}
                </h2>
                <p className="text-slate-400 text-xs mt-0.5">
                  {isAr ? 'أبراج OHTL حتى 765 ك.ف وسحب OPGW' : '110kV – 765kV OHTL & OPGW Stringing'}
                </p>
              </div>
            </div>

            {/* Card 2: Civil Construction */}
            <div 
              onClick={() => scrollToSection('services')}
              className="floating-badge cursor-pointer p-5 rounded-2xl flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-700/30 border border-blue-500/40 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-slate-950 transition-all flex-shrink-0 shadow-lg">
                <Building2 className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-white font-heading font-bold text-lg group-hover:text-blue-300 transition-colors">
                  {isAr ? 'الإنشاءات والأعمال المدنية' : 'Civil Construction'}
                </h2>
                <p className="text-slate-400 text-xs mt-0.5">
                  {isAr ? 'قواعد الأبراج والمحطات والحفريات' : 'Tower & Substation Foundations'}
                </p>
              </div>
            </div>

            {/* Card 3: Renewable Energy */}
            <div 
              onClick={() => scrollToSection('services')}
              className="floating-badge cursor-pointer p-5 rounded-2xl flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-700/30 border border-amber-500/40 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all flex-shrink-0 shadow-lg">
                <Sun className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-white font-heading font-bold text-lg group-hover:text-amber-300 transition-colors">
                  {isAr ? 'الطاقة المتجددة والربط' : 'Renewable Energy'}
                </h2>
                <p className="text-slate-400 text-xs mt-0.5">
                  {isAr ? 'مزارع الطاقة الشمسية والربط الشبكي' : 'Solar Farm Civil & Grid Links'}
                </p>
              </div>
            </div>

            {/* Quick Live Status Card */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="font-semibold text-white">
                  {isAr ? 'جاهزية التعبئة الميدانية الفورية' : 'Rapid Site Mobilization Ready'}
                </span>
              </div>
              <span className="text-emerald-400 font-mono font-bold">100% KSA</span>
            </div>

          </div>
        </div>
      </div>

      {/* Subtle Bottom Curve Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#f8fafc] to-transparent pointer-events-none"></div>
    </section>
  );
}
