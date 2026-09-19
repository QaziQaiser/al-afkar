import React from 'react';
import { 
  Calendar, 
  Building2, 
  Zap, 
  Users, 
  Truck 
} from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Stats({ lang }) {
  const { statistics } = companyData;
  const isAr = lang === 'ar';

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Calendar': return <Calendar className="w-7 h-7 text-emerald-600" />;
      case 'Building2': return <Building2 className="w-7 h-7 text-emerald-600" />;
      case 'Zap': return <Zap className="w-7 h-7 text-emerald-600" />;
      case 'Users': return <Users className="w-7 h-7 text-emerald-600" />;
      case 'Truck': return <Truck className="w-7 h-7 text-emerald-600" />;
      default: return <Zap className="w-7 h-7 text-emerald-600" />;
    }
  };

  return (
    <section className="bg-white border-y border-slate-200 py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 5-Column Responsive Counter Grid (Exact Reference Layout Match) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {statistics.map((stat, idx) => (
            <div 
              key={stat.id}
              className={`flex flex-col items-center text-center p-3 ${idx > 0 && !isAr ? 'md:border-l md:border-slate-100' : ''} ${idx > 0 && isAr ? 'md:border-r md:border-slate-100' : ''}`}
            >
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-3 shadow-sm hover:scale-110 transition-transform">
                {getIcon(stat.icon)}
              </div>

              {/* Number Value */}
              <div className="font-heading font-black text-2xl sm:text-3xl text-slate-900 tracking-tight flex items-baseline gap-1">
                <span>{stat.value}</span>
                {stat.suffix && <span className="text-sm font-bold text-emerald-600">{stat.suffix}</span>}
              </div>

              {/* Metric Label */}
              <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
                {isAr ? stat.labelAr : stat.labelEn}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
