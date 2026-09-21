import React from 'react';
import { 
  Phone, 
  Mail, 
  User, 
  ShieldCheck, 
  Award, 
  ArrowUpRight,
  HardHat,
  Quote,
  Sparkles
} from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Team({ lang }) {
  const { profile, management } = companyData;
  const isAr = lang === 'ar';
  const ceo = profile.ceoMessage;

  return (
    <section id="team" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Subtle background ambient gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-start mb-12 space-y-2">
          <div className="inline-block px-3 py-1 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wider uppercase">
            {isAr ? 'القيادة التنفيذية والإدارية' : 'Executive Leadership & Engineering Management'}
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            {isAr ? 'فريق القيادة ورؤية الإدارة التنفيذية' : 'Leadership & Senior Management Personnel'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-3xl">
            {isAr 
              ? 'يقود مؤسسة الأفكار المتفردة نخبة من الكفاءات الوطنية والهندسية المتخصصة في قيادة وتنسيق أضخم مشاريع خطوط النقل والإنشاءات بالمملكة.'
              : 'Direct points of contact for executive governance, site operations, technical estimations, and QHSE compliance.'
            }
          </p>
        </div>

        {/* ========================================================================= */}
        {/* CEO Vision & Executive Statement Hero Card */}
        {/* ========================================================================= */}
        {ceo && (
          <div className="mb-14 relative rounded-3xl bg-gradient-to-br from-[#07101e] via-[#0b192c] to-[#043328] text-white p-6 sm:p-8 lg:p-10 border border-emerald-500/30 shadow-2xl overflow-hidden group">
            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl group-hover:bg-emerald-500/30 transition-all duration-700 pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* CEO Portrait Column */}
              <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-start">
                <div className="relative">
                  {/* Glowing border ring */}
                  <div className="absolute -inset-1.5 bg-gradient-to-tr from-emerald-500 via-emerald-300 to-amber-400 rounded-3xl blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative w-40 h-48 sm:w-48 sm:h-56 rounded-2xl overflow-hidden bg-slate-900 border-2 border-emerald-400/80 shadow-2xl">
                    <img 
                      src={ceo.image} 
                      alt={isAr ? ceo.nameAr : ceo.nameEn}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>

                  {/* Badge overlay */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-emerald-500 text-slate-950 px-3.5 py-1 rounded-full text-[11px] font-black tracking-wide uppercase shadow-lg flex items-center gap-1.5 border border-white/40">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{isAr ? 'الرئيس التنفيذي' : 'Chief Executive Officer'}</span>
                  </div>
                </div>

                <div className="mt-6 text-center sm:text-start">
                  <h3 className="font-heading font-black text-xl sm:text-2xl text-white tracking-tight">
                    {isAr ? ceo.nameAr : ceo.nameEn}
                  </h3>
                  <p className="text-xs font-bold text-emerald-400 tracking-wider uppercase mt-1">
                    {isAr ? ceo.titleAr : ceo.titleEn}
                  </p>
                  <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                    {isAr ? 'مؤسسة الأفكار المتفردة للمقاولات' : 'Al Afkar Al Mutafaridah Establishment'}
                  </p>
                </div>
              </div>

              {/* CEO Message Content Column */}
              <div className="lg:col-span-8 flex flex-col justify-between space-y-6 text-start">
                
                {/* Header Tag */}
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                    <Quote className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{isAr ? 'رسالة الرئيس التنفيذي' : 'Message from the CEO'}</span>
                  </div>
                  <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                    KSA Vision 2030 Alignment
                  </span>
                </div>

                {/* Quote Text */}
                <div className="relative">
                  <p className="text-slate-100 text-base sm:text-lg lg:text-xl font-normal leading-relaxed italic border-s-4 border-emerald-500 ps-5 sm:ps-6 py-1">
                    "{isAr ? ceo.quoteAr : ceo.quoteEn}"
                  </p>
                </div>

                {/* Focus Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="bg-slate-900/60 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-3 text-start">
                    <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
                      {isAr ? 'التركيز الأساسي' : 'Primary Focus'}
                    </div>
                    <div className="text-xs font-semibold text-white mt-0.5">
                      {isAr ? 'خطوط النقل والطاقة' : 'Power & Transmission (OHTL)'}
                    </div>
                  </div>

                  <div className="bg-slate-900/60 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-3 text-start">
                    <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
                      {isAr ? 'التميز الميداني' : 'Field Capabilities'}
                    </div>
                    <div className="text-xs font-semibold text-white mt-0.5">
                      {isAr ? 'تجميع ونصب الأبراج' : 'Tower Assembly & Erection'}
                    </div>
                  </div>

                  <div className="bg-slate-900/60 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-3 text-start">
                    <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
                      {isAr ? 'الرؤية الوطنية' : 'National Vision'}
                    </div>
                    <div className="text-xs font-semibold text-white mt-0.5">
                      {isAr ? 'بنية تحتية موثوقة بالمملكة' : 'Trusted Infrastructure in KSA'}
                    </div>
                  </div>
                </div>

                {/* Contact CTA Link */}
                <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-800">
                  <a
                    href="tel:+966500309040"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-md"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>050 030 9040</span>
                  </a>
                  <a
                    href="mailto:uic.ideas.est@outlook.sa"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-medium text-xs border border-slate-700 transition-all"
                  >
                    <Mail className="w-3.5 h-3.5 text-emerald-400" />
                    <span>uic.ideas.est@outlook.sa</span>
                  </a>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* Section Sub-heading for Full Management Directory */}
        <div className="text-start mb-8">
          <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900">
            {isAr ? 'الدليل الإداري والهندسي المباشر' : 'Executive & Engineering Key Contacts'}
          </h3>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            {isAr ? 'للتواصل المباشر مع مديري المشاريع والمالية والإدارة الهندسية بالمؤسسة' : 'Direct contact channels for project coordinators, financial officers, and technical management.'}
          </p>
        </div>

        {/* Team Cards Grid (3 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {management.map((person, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-slate-200/90 hover:border-emerald-500/50 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between text-start group hover:-translate-y-1.5"
            >
              <div className="space-y-4">
                
                {/* Header with Photo & Badge */}
                <div className="flex items-start justify-between gap-2">
                  <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-2xl overflow-hidden bg-gradient-to-br from-[#0b192c] to-[#064e3b] border-2 border-emerald-500/40 shadow-md flex-shrink-0 group-hover:border-emerald-400 transition-all">
                    {person.image ? (
                      <img 
                        src={person.image} 
                        alt={isAr ? person.nameAr : person.nameEn}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-emerald-400">
                        <User className="w-8 h-8" />
                      </div>
                    )}
                  </div>
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-full text-center leading-tight">
                    {isAr ? person.badgeAr : person.badge}
                  </span>
                </div>

                {/* Name & Title */}
                <div>
                  <h4 className="font-heading font-black text-base text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {isAr ? person.nameAr : person.nameEn}
                  </h4>
                  <p className="text-[11px] font-bold text-emerald-600 tracking-wide uppercase mt-0.5">
                    {isAr ? person.titleAr : person.titleEn}
                  </p>
                </div>

                {/* Bio Description */}
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {isAr ? person.bioAr : person.bioEn}
                </p>

              </div>

              {/* Direct Contact Links */}
              <div className="pt-4 mt-5 border-t border-slate-100 space-y-2">
                <a
                  href={`tel:${person.phoneRaw}`}
                  className="flex items-center justify-between p-2 rounded-lg bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 border border-slate-200/70 transition-colors text-xs font-semibold group/link"
                >
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span className="font-mono dir-ltr text-[11px]">{person.phone}</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover/link:opacity-100 flex-shrink-0" />
                </a>

                <a
                  href={`mailto:${person.email}`}
                  className="flex items-center justify-between p-2 rounded-lg bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 border border-slate-200/70 transition-colors text-xs font-semibold group/link truncate"
                >
                  <div className="flex items-center gap-1.5 truncate">
                    <Mail className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span className="truncate font-mono text-[10px]">{person.email}</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover/link:opacity-100 flex-shrink-0" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
