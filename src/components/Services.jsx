import React from 'react';
import { 
  Zap, 
  Building2, 
  Droplets, 
  Sun, 
  ArrowRight, 
  Check, 
  ChevronRight,
  ShieldAlert
} from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Services({ lang, onSelectService }) {
  const { services } = companyData;
  const isAr = lang === 'ar';

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Zap': return <Zap className="w-5 h-5" />;
      case 'Building': return <Building2 className="w-5 h-5" />;
      case 'Droplets': return <Droplets className="w-5 h-5" />;
      case 'Sun': return <Sun className="w-5 h-5" />;
      default: return <Zap className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Exact Reference Layout Match) */}
        <div className="text-start mb-14 space-y-2">
          <div className="inline-block px-3 py-1 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wider uppercase">
            {isAr ? 'خدماتنا المتكاملة' : 'Our Services'}
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            {isAr ? 'حلول هندسية وإنشائية شاملة لمستقبل أقوى' : 'Comprehensive Solutions for a Stronger Future'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-3xl">
            {isAr 
              ? 'نقدم باقة متكاملة من الخدمات المتخصصة في شبكات الجهد الفائق والأعمال المدنية ومشاريع المياه والطاقة النظيفة بالمملكة.'
              : 'End-to-end specialized capabilities spanning transmission lines, civil infrastructure, bulk water piping, and renewable grid links.'
            }
          </p>
        </div>

        {/* 4 Card Grid (Exact Reference Layout Match) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const bullets = isAr ? service.bulletsAr : service.bulletsEn;
            
            return (
              <div 
                key={service.id}
                className="bg-white rounded-xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
              >
                {/* Card Top Image Header */}
                <div className="relative h-44 overflow-hidden bg-slate-900">
                  <img 
                    src={service.image} 
                    alt={isAr ? service.titleAr : service.titleEn}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>

                  {/* Circular Icon Badge Positioned at Bottom Center/Start of Image */}
                  <div className="absolute -bottom-4 left-5 w-11 h-11 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center shadow-lg border-2 border-white group-hover:bg-emerald-400 transition-colors">
                    {getIcon(service.icon)}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 pt-7 flex-1 flex flex-col justify-between text-start space-y-4">
                  <div>
                    {/* Service Title */}
                    <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                      {isAr ? service.titleAr : service.titleEn}
                    </h3>
                    
                    {/* Bullet List */}
                    <ul className="mt-4 space-y-2 text-xs text-slate-600">
                      {bullets.slice(0, 5).map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0"></span>
                          <span className="leading-tight">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Action Link: View Details */}
                  <div className="pt-2 border-t border-slate-100">
                    <button
                      onClick={() => onSelectService(service)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors group/btn"
                    >
                      <span>{isAr ? 'عرض التفاصيل الهندسية' : 'View Details'}</span>
                      <ArrowRight className={`w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform ${isAr ? 'rotate-180 group-hover/btn:-translate-x-1' : ''}`} />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
