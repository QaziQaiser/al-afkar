import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Menu, 
  X, 
  ShieldCheck, 
  ChevronDown, 
  FileText, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Header({ lang, setLang, onOpenQuoteModal, onOpenCertModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const { profile } = companyData;
  const isAr = lang === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'services', 'projects', 'equipment', 'hse', 'renewable', 'team', 'gallery', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', labelEn: 'Home', labelAr: 'الرئيسية' },
    { id: 'about', labelEn: 'About Us', labelAr: 'عن المؤسسة' },
    { id: 'services', labelEn: 'Services', labelAr: 'خدماتنا' },
    { id: 'projects', labelEn: 'Projects', labelAr: 'مشاريعنا' },
    { id: 'equipment', labelEn: 'Equipment', labelAr: 'المعدات والآليات' },
    { id: 'hse', labelEn: 'HSE & Quality', labelAr: 'السلامة والجودة' },
    { id: 'renewable', labelEn: 'Renewable Energy', labelAr: 'الطاقة المتجددة' },
    { id: 'team', labelEn: 'Our Team', labelAr: 'فريق العمل' },
    { id: 'gallery', labelEn: 'Gallery', labelAr: 'معرض الأعمال' },
    { id: 'contact', labelEn: 'Contact Us', labelAr: 'اتصل بنا' }
  ];

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      {/* 1. Top Utility Header (Exact Reference Layout Match) */}
      <div className="bg-[#07101e] text-slate-300 text-xs py-2 px-4 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          {/* Left: Tagline & Subheading */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              {isAr ? profile.nameAr : "AL AFKAR AL MUTAFAREDAH ESTABLISHMENT"}
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-slate-400 italic">
              {isAr ? profile.taglines.ar : profile.taglines.en}
            </span>
          </div>

          {/* Right: Country Indicator & Language Switcher & Quick Contact */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-1.5 text-slate-300 bg-slate-800/70 px-2.5 py-0.5 rounded-full border border-slate-700/60">
              <span className="text-sm">🇸🇦</span>
              <span className="font-medium text-emerald-300">
                {isAr ? 'المملكة العربية السعودية' : 'Saudi Arabia'}
              </span>
              <span className="text-[10px] text-slate-400 bg-slate-900 px-1.5 py-0.2 rounded ml-1 font-mono">
                C.R: {profile.crNumber}
              </span>
            </div>

            {/* Direct Phone Quick Link */}
            <a 
              href="tel:+966500309040" 
              className="hidden lg:flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-mono text-[11px] dir-ltr">{profile.phone}</span>
            </a>

            {/* Language Switcher Button */}
            <button
              onClick={() => setLang(isAr ? 'en' : 'ar')}
              className="flex items-center gap-1 bg-emerald-600 hover:bg-emerald-500 text-white px-2.5 py-1 rounded text-xs font-semibold transition-colors shadow-sm"
              title={isAr ? "Switch to English" : "التحويل للغة العربية"}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{isAr ? 'English' : 'عربي'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <nav className={`transition-all duration-300 ${isScrolled ? 'glass-nav shadow-xl py-2.5' : 'bg-[#0b192c]/95 backdrop-blur-md py-3.5 border-b border-slate-800'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Company Brand Logo & Name */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br from-slate-900 to-emerald-950 p-1.5 rounded-lg border border-emerald-500/40 shadow-md group-hover:border-emerald-400 transition-all flex items-center justify-center">
              <img 
                src="/logo.svg" 
                alt="Al-Afkar Al-Mutafaredah Logo" 
                className="w-full h-full object-contain filter drop-shadow"
                onError={(e) => {
                  // Fallback if SVG fails to load
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-white text-base sm:text-lg tracking-tight leading-tight group-hover:text-emerald-400 transition-colors">
                {isAr ? profile.nameAr : profile.shortNameEn}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links - In-line Plain Text with Color Change on Active/Hover */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3.5 2xl:gap-5 flex-nowrap whitespace-nowrap flex-shrink-0">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`transition-colors whitespace-nowrap text-xs lg:text-[13px] 2xl:text-sm tracking-wide px-1 py-1 focus:outline-none ${
                    isActive 
                      ? 'text-emerald-400 font-bold' 
                      : 'text-slate-300 hover:text-emerald-400 font-medium'
                  }`}
                >
                  {isAr ? link.labelAr : link.labelEn}
                </button>
              );
            })}
          </div>

          {/* Mobile Hamburger Button (No Get a Quote button on desktop as requested) */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none border border-slate-700"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0b192c] border-b border-emerald-900/50 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pt-2 pb-3 border-b border-slate-800">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-start px-3 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                    isActive 
                      ? 'bg-emerald-500 text-slate-950 font-bold' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {isAr ? link.labelAr : link.labelEn}
                </button>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenQuoteModal(); }}
              className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider py-3 rounded-lg shadow-md"
            >
              <span>{isAr ? 'طلب تسعيرة سريعة (RFQ)' : 'Request a Quotation'}</span>
              <ArrowRight className={`w-4 h-4 ${isAr ? 'rotate-180' : ''}`} />
            </button>

            <div className="flex items-center justify-between text-xs text-slate-400 px-2 pt-2">
              <span className="flex items-center gap-1 font-mono">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                {profile.phone}
              </span>
              <span className="text-emerald-400 font-mono">CR: {profile.crNumber}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
