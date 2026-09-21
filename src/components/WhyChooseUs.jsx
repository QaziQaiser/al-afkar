import React from 'react';
import { 
  Users, 
  Zap, 
  Truck, 
  ShieldCheck, 
  Award, 
  Clock, 
  CheckCircle2 
} from 'lucide-react';
import { companyData } from '../data/companyData';

export default function WhyChooseUs({ lang }) {
  const { whyChooseUs } = companyData;
  const isAr = lang === 'ar';

  const getPillarIcon = (iconName) => {
    switch (iconName) {
      case 'UsersCheck': return <Users className="w-5 h-5 text-emerald-600" />;
      case 'Zap': return <Zap className="w-5 h-5 text-emerald-600" />;
      case 'Truck': return <Truck className="w-5 h-5 text-emerald-600" />;
      case 'ShieldAlert': return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      case 'Award': return <Award className="w-5 h-5 text-emerald-600" />;
      case 'ClockCheck': return <Clock className="w-5 h-5 text-emerald-600" />;
      default: return <Award className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section id="hse" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-start mb-12 space-y-2">
          <div className="inline-block px-3 py-1 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wider uppercase">
            {isAr ? 'لماذا تختارنا' : 'Why Choose Us'}
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            {isAr ? 'نجاح مشروعكم أولويتنا القصوى' : 'Your Success is Our Priority'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-3xl">
            {isAr 
              ? 'نجمع بين الخبرة الهندسية المتعمقة، المعايير القياسية للسلامة، والأسطول الحديث لتسليم مشاريع خطوط النقل والإنشاءات بدقة متناهية.'
              : 'Combining specialized engineering capability, rigid QHSE safety protocols, and modern equipment to guarantee milestone execution.'
            }
          </p>
        </div>

        {/* Two-Column Layout: Left (6 Value Pillars Grid) | Right (Team Photo Banner) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: 6 Pillars Grid (Exact Reference Layout Match) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {whyChooseUs.map((pillar) => (
              <div 
                key={pillar.id}
                className="bg-white p-5 rounded-xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all space-y-2 text-start flex flex-col justify-start group hover:border-emerald-500/50"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  {getPillarIcon(pillar.icon)}
                </div>

                <h3 className="font-heading font-bold text-sm text-slate-900 group-hover:text-emerald-700 transition-colors leading-tight">
                  {isAr ? pillar.titleAr : pillar.titleEn}
                </h3>

                <p className="text-slate-600 text-xs leading-relaxed">
                  {isAr ? pillar.descAr : pillar.descEn}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Professional On-Site Team Banner (Exact Reference Match) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
              <img 
                src="media/images/img/heavy-crane-tower-erection.jpg" 
                alt="Al-Afkar on-site engineering team with high-vis safety vests" 
                className="w-full h-[440px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Bottom Gradient with Motto Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07101e] via-[#07101e]/30 to-transparent"></div>
              
              <div className="absolute bottom-5 left-5 right-5 text-start">
                <div className="inline-flex items-center gap-2 bg-emerald-500 text-slate-950 px-3 py-1 rounded text-xs font-black uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{isAr ? 'بيئة عمل آمنة 100%' : '100% Zero Incident HSE'}</span>
                </div>
                <h4 className="text-white font-heading font-bold text-base sm:text-lg leading-tight">
                  {isAr ? 'كوادر متخصصة في خطوط الجهد العالي والربط الشبكي' : 'Certified Riggers & High-Voltage Transmission Experts'}
                </h4>
                <p className="text-slate-300 text-xs mt-1">
                  {isAr ? 'فريق عمل متكامل جاهز للتعبئة الفورية في كافة مناطق المملكة.' : 'Mobilizing across Riyadh, Makkah, Tabuk, Al Qassim, and beyond.'}
                </p>
              </div>
            </div>

            {/* Subtle glow background */}
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>
          </div>

        </div>

      </div>
    </section>
  );
}
