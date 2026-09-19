import React from 'react';
import { 
  Eye, 
  Target, 
  ArrowRight, 
  CheckCircle2, 
  ShieldAlert, 
  Award, 
  HardHat,
  FileText
} from 'lucide-react';
import { companyData } from '../data/companyData';

export default function About({ lang, onOpenCertModal }) {
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
    <section id="about" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Construction Image (Exact Reference Match: Worker with hardhat & safety vest facing power lines) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d0fbb180c5f7?auto=format&fit=crop&w=900&q=80" 
                alt="Al-Afkar Site Engineers inspecting foundation work" 
                className="w-full h-[450px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay Badge with Official Registration */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-700 text-white shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                      <HardHat className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-sm font-bold text-white">
                        {isAr ? 'مؤسسة سعودية معتمدة' : 'Verified Saudi Contractor'}
                      </h2>
                      <p className="text-xs text-emerald-400 font-mono">
                        SCA: {profile.scaNumber} • CR: {profile.crNumber}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Offset Glow Behind */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>
          </div>

          {/* Right Side: Section Content (Exact Reference Layout Match) */}
          <div className="lg:col-span-7 space-y-6 text-start">
            
            {/* Section Pill */}
            <div className="inline-block px-3 py-1 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wider uppercase">
              {isAr ? 'عن المؤسسة' : 'About Us'}
            </div>

            {/* Main Heading */}
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {isAr ? (
                <>
                  مؤسسة الأفكار المتفردة للمقاولات <br />
                  <span className="text-emerald-700 text-xl sm:text-2xl font-bold">
                    ريادة هندسية في خطوط النقل والأعمال الإنشائية
                  </span>
                </>
              ) : (
                <>
                  Al Afkar Al Mutafaridah Establishment
                </>
              )}
            </h2>

            {/* Description paragraph */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              {isAr ? (
                <>
                  نحن مؤسسة وطنية سعودية متخصصة في مقاولات البنية التحتية للطاقة والأعمال المدنية وشبكات المياه والطاقة المتجددة. نمتلك سجلاً حافلاً بالخبرة والاحترافية لتنفيذ خطوط النقل الهوائية (OHTL) من الأساسات الخرسانية حتى تركيب صواميل الأمان (Paul Nut) وسحب كابلات الألياف البصرية OPGW بموثوقية عالية.
                </>
              ) : (
                <>
                  We are a Saudi-based construction and power infrastructure company with a strong commitment to quality, safety and excellence. With a skilled workforce, modern equipment and vast experience, we deliver reliable and sustainable solutions for transmission lines, civil construction, water infrastructure and renewable energy projects.
                </>
              )}
            </p>

            {/* CTA Button: Learn More */}
            <div className="pt-1">
              <button
                onClick={() => scrollToSection('services')}
                className="inline-flex items-center gap-2 bg-[#0b192c] hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-md shadow-md transition-all group"
              >
                <span>{isAr ? 'المزيد عن خدماتنا' : 'Learn More'}</span>
                <ArrowRight className={`w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform ${isAr ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
              </button>
            </div>

            {/* Two Feature Cards Side-by-Side: Our Vision & Our Mission (Exact Reference Match) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4">
              
              {/* Card 1: Our Vision */}
              <div className="bg-white p-6 rounded-xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                    <Eye className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-slate-900">
                    {isAr ? 'رؤيتنا' : 'Our Vision'}
                  </h3>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {isAr ? profile.vision.ar : profile.vision.en}
                </p>
              </div>

              {/* Card 2: Our Mission */}
              <div className="bg-white p-6 rounded-xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-slate-900">
                    {isAr ? 'رسالتنا' : 'Our Mission'}
                  </h3>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {isAr ? profile.mission.ar : profile.mission.en}
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
