import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  ArrowRight, 
  Zap, 
  Building,
  Heart
} from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Footer({ lang, onOpenQuoteModal }) {
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
    <footer className="bg-[#07101e] text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Footer Grid (Exact Reference Layout Match) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800 text-start">
          
          {/* Col 1: Brand & Logo & Summary (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-slate-900 p-1.5 rounded-lg border border-emerald-500/40 shadow flex items-center justify-center">
                <img 
                  src="/logo.svg" 
                  alt="Al Afkar Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <div>
                <h3 className="font-heading font-black text-white text-base leading-tight tracking-tight">
                  {isAr ? profile.nameAr : "AL AFKAR AL MUTAFAREDAH"}
                </h3>
                <p className="text-[11px] text-emerald-400 font-semibold tracking-wider uppercase">
                  {isAr ? 'للمقاولات وتوصيل التيار الكهربائي' : 'Est. For Contracting & Power Supply'}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              {isAr ? profile.heroSubtitle.ar : profile.heroSubtitle.en}
            </p>

            <div className="flex flex-wrap gap-2 text-[11px] text-slate-400 font-mono pt-1">
              <span className="bg-slate-900 px-2.5 py-1 rounded border border-slate-800">CR: {profile.crNumber}</span>
              <span className="bg-slate-900 px-2.5 py-1 rounded border border-slate-800">SCA: {profile.scaNumber}</span>
              <span className="bg-slate-900 px-2.5 py-1 rounded border border-slate-800">VAT: {profile.vatNumber}</span>
            </div>
          </div>

          {/* Col 2: Quick Links (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              {isAr ? 'روابط سريعة' : 'Quick Links'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => scrollToSection('home')} className="hover:text-emerald-400 transition-colors">
                  {isAr ? 'الرئيسية' : 'Home'}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-emerald-400 transition-colors">
                  {isAr ? 'عن المؤسسة' : 'About Us'}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-emerald-400 transition-colors">
                  {isAr ? 'الخدمات الهندسية' : 'Services'}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('projects')} className="hover:text-emerald-400 transition-colors">
                  {isAr ? 'المشاريع والإنجازات' : 'Projects'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Capabilities & Links (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              {isAr ? 'التخصصات' : 'Capabilities'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => scrollToSection('equipment')} className="hover:text-emerald-400 transition-colors">
                  {isAr ? 'المعدات والآليات' : 'Equipment Fleet'}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('hse')} className="hover:text-emerald-400 transition-colors">
                  {isAr ? 'الجودة والسلامة' : 'HSE & Quality'}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-emerald-400 transition-colors">
                  {isAr ? 'الطاقة المتجددة' : 'Renewable Energy'}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-emerald-400 transition-colors">
                  {isAr ? 'اتصل بنا' : 'Contact Us'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Us & Get a Quote Card (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              {isAr ? 'التواصل وعروض الأسعار' : 'Contact Us & RFQ'}
            </h4>
            
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{isAr ? 'مكة المكرمة، المملكة العربية السعودية' : 'Makkah, Kingdom of Saudi Arabia'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="font-mono dir-ltr">{profile.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="font-mono text-[11px]">{profile.email}</span>
              </div>
            </div>

            {/* Get a Quote Box (Exact Reference Match) */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h5 className="text-xs font-bold text-white">
                {isAr ? 'هل لديك مشروع في بالك؟' : 'Have a Project in Mind?'}
              </h5>
              <p className="text-[11px] text-slate-400 leading-snug">
                {isAr ? 'دعنا نعمل معاً لبناء بنية تحتية مستدامة.' : "Let's work together to build a better tomorrow."}
              </p>
              <button
                onClick={onOpenQuoteModal}
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider py-2 rounded-lg shadow-md transition-all mt-1"
              >
                <span>{isAr ? 'طلب عرض أسعار' : 'Request a Quotation'}</span>
                <ArrowRight className={`w-3.5 h-3.5 ${isAr ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Safety Motto Bar (Exact Reference Match) */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 Al Afkar Al Mutafaridah Establishment. All Rights Reserved.
          </div>
          <div className="text-slate-400 font-semibold tracking-wide flex items-center gap-2">
            <span className="text-emerald-400 font-mono">✦</span>
            <span>{isAr ? 'أفراد آمنون | عمل متقن | مستقبل مستدام' : 'Safe People | Quality Work | Sustainable Future'}</span>
            <span className="text-emerald-400 font-mono">✦</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
