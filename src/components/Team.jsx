import React from 'react';
import { 
  Phone, 
  Mail, 
  User, 
  ShieldCheck, 
  Award, 
  ArrowUpRight,
  HardHat,
  MessageSquare
} from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Team({ lang }) {
  const { management } = companyData;
  const isAr = lang === 'ar';

  return (
    <section id="team" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-start mb-12 space-y-2">
          <div className="inline-block px-3 py-1 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wider uppercase">
            {isAr ? 'القيادة الفنية والإدارية' : 'Executive Management & Key Engineers'}
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            {isAr ? 'فريق القيادة والمهندسون المشرفون على المشاريع' : 'Leadership & Senior Engineering Personnel'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-3xl">
            {isAr 
              ? 'يقود مؤسسة الأفكار المتفردة نخبة من الكفاءات الإدارية والهندسية المتخصصة في إدارة وتنسيق مشاريع خطوط النقل والإنشاءات الكبرى.'
              : 'Direct points of contact for executive decision making, site operations, technical estimations, and QHSE compliance.'
            }
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {management.map((person, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 hover:border-emerald-500/50 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between text-start group hover:-translate-y-1.5"
            >
              <div className="space-y-4">
                
                {/* Header with Photo & Badge */}
                <div className="flex items-start justify-between gap-3">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-gradient-to-br from-[#0b192c] to-[#064e3b] border-2 border-emerald-500/40 shadow-md flex-shrink-0 group-hover:border-emerald-400 transition-all">
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
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-full text-center">
                    {isAr ? person.badgeAr : person.badge}
                  </span>
                </div>

                {/* Name & Title */}
                <div>
                  <h3 className="font-heading font-black text-lg text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {isAr ? person.nameAr : person.nameEn}
                  </h3>
                  <p className="text-xs font-bold text-emerald-600 tracking-wide uppercase mt-0.5">
                    {isAr ? person.titleAr : person.titleEn}
                  </p>
                </div>

                {/* Bio Description */}
                <p className="text-xs text-slate-600 leading-relaxed">
                  {isAr ? person.bioAr : person.bioEn}
                </p>

              </div>

              {/* Direct Contact Links */}
              <div className="pt-4 mt-6 border-t border-slate-200/80 space-y-2.5">
                <a
                  href={`tel:${person.phoneRaw}`}
                  className="flex items-center justify-between p-2.5 rounded-lg bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 border border-slate-200/70 transition-colors text-xs font-semibold group/link"
                >
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-emerald-600" />
                    <span className="font-mono dir-ltr">{person.phone}</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover/link:opacity-100" />
                </a>

                <a
                  href={`mailto:${person.email}`}
                  className="flex items-center justify-between p-2.5 rounded-lg bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 border border-slate-200/70 transition-colors text-xs font-semibold group/link truncate"
                >
                  <div className="flex items-center gap-2 truncate">
                    <Mail className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span className="truncate font-mono text-[11px]">{person.email}</span>
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
