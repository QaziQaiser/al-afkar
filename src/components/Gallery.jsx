import React, { useState } from 'react';
import { 
  Eye, 
  Maximize2, 
  Layers, 
  ArrowRight,
  Camera
} from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Gallery({ lang, onSelectGalleryItem }) {
  const { gallery } = companyData;
  const isAr = lang === 'ar';

  const [activeFilter, setActiveFilter] = useState('All');

  const filterTabs = [
    { id: 'All', labelEn: 'All Photos', labelAr: 'كافة الأعمال' },
    { id: 'Civil Works', labelEn: 'Civil Works', labelAr: 'الأعمال المدنية' },
    { id: 'Assembly Works', labelEn: 'Assembly Works', labelAr: 'أعمال التجميع' },
    { id: 'Erection Works', labelEn: 'Erection Works', labelAr: 'أعمال الرفع والنصب' },
    { id: 'Stringing Works', labelEn: 'Stringing Works', labelAr: 'أعمال السحب والشد' },
    { id: 'Renewable Energy', labelEn: 'Renewable Energy', labelAr: 'الطاقة المتجددة' }
  ];

  const filteredGallery = activeFilter === 'All'
    ? gallery
    : gallery.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 text-start">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-block px-3 py-1 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wider uppercase">
              {isAr ? 'معرض الأعمال الميدانية' : 'Gallery of Work'}
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              {isAr ? 'توثيق ميداني لمراحل تنفيذ الأبراج والإنشاءات' : 'Visual Showcase of On-Site Execution'}
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              {isAr 
                ? 'لقطات حية توثق أعمال الحفر وصب القواعد، تجميع الهياكل الشبكية، ورفع الأبراج العملاقة بالأوناش التلسكوبية وسحب الكابلات.'
                : 'Direct field photography from our project sites illustrating foundation civil works, tower assembly, crane hoisting, and conductor sagging.'
              }
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeFilter === tab.id
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {isAr ? tab.labelAr : tab.labelEn}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectGalleryItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer h-72"
            >
              <img 
                src={item.image} 
                alt={isAr ? item.titleAr : item.titleEn}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>

              {/* Category Pill at Top Right */}
              <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-emerald-400 border border-slate-700">
                {isAr ? item.categoryAr : item.category}
              </div>

              {/* Bottom Details */}
              <div className="absolute bottom-4 left-4 right-4 text-start space-y-1 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                <h3 className="text-white font-heading font-bold text-base leading-snug group-hover:text-emerald-300 transition-colors">
                  {isAr ? item.titleAr : item.titleEn}
                </h3>
                <p className="text-slate-300 text-xs line-clamp-2">
                  {item.descriptionEn}
                </p>
                <div className="pt-2 flex items-center gap-1.5 text-xs text-emerald-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>{isAr ? 'عرض بالحجم الكامل' : 'Open Lightbox Preview'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
