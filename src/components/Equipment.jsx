import React, { useState } from 'react';
import { 
  Truck, 
  Wrench, 
  ShieldCheck, 
  Layers, 
  Anchor, 
  CheckCircle, 
  Search,
  Sliders,
  Cpu,
  Box,
  HardHat
} from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Equipment({ lang, onOpenQuoteModal }) {
  const { equipmentList } = companyData;
  const isAr = lang === 'ar';

  const [filterCategory, setFilterCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'All', labelEn: 'All Equipment', labelAr: 'كافة المعدات والآليات' },
    { id: 'Heavy Lifting', labelEn: 'Heavy Lifting & Cranes', labelAr: 'الأوناش والرفع الثقيل' },
    { id: 'Rigging & Stringing', labelEn: 'Rigging & Stringing', labelAr: 'معدات السحب والشد' },
    { id: 'HSE & Safety', labelEn: 'HSE & PPE Kits', labelAr: 'السلامة ومعدات الوقاية' },
    { id: 'Erection Tools', labelEn: 'Erection Tools', labelAr: 'أدوات التركيب والعزم' },
    { id: 'Foundation & Civil', labelEn: 'Foundation & Civil', labelAr: 'القواعد والأعمال المدنية' }
  ];

  const filteredEquipment = equipmentList.filter(item => {
    const matchesCategory = filterCategory === 'All' || item.category === filterCategory;
    const name = isAr ? item.nameAr : item.nameEn;
    const matchesSearch = name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="equipment" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 text-start">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-block px-3 py-1 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wider uppercase">
              {isAr ? 'أسطول المعدات والآليات' : 'Equipment & Machinery Fleet'}
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              {isAr ? 'معدات متطورة وتقنيات متخصصة لتنفيذ أضخم المشاريع' : 'Modern Equipment Fleet & Tooling Inventory'}
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              {isAr 
                ? 'تمتلك المؤسسة أسطولاً متكاملاً من الأوناش التلسكوبية، حبال السحب الإيطالية، روافع الشد، قوالب صب القواعد 380 ك.ف، ومعدات الحماية الشخصية المعتمدة.'
                : 'Verified inventory including heavy telescopic cranes, Italian pulling ropes, calibrated torque sets, Hilti drills, and 380kV S1N form boxes.'
              }
            </p>
          </div>

          {/* Declaration Badge (From PDF Page 26) */}
          <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-start max-w-md shadow-sm">
            <div className="flex items-start gap-2.5">
              <ShieldCheck className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-emerald-900">
                  {isAr ? 'إقرار الجاهزية والقدرة التشغيلية' : 'Mobilization Declaration'}
                </h4>
                <p className="text-[11px] text-emerald-800 leading-snug mt-0.5">
                  {isAr 
                    ? 'تمتلك المؤسسة الكوادر البشرية والمعدات الكافية مع القدرة على حشد موارد إضافية فورية حسب متطلبات كل مشروع.'
                    : 'The Company has sufficient manpower and equipment resources and can mobilize additional resources as per project requirements.'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilterCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  filterCategory === cat.id
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {isAr ? cat.labelAr : cat.labelEn}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={isAr ? 'بحث في المعدات...' : 'Search equipment...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-800"
            />
          </div>
        </div>

        {/* Equipment Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredEquipment.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 p-4 rounded-xl border border-slate-200/90 hover:border-emerald-500/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-between text-start group hover:-translate-y-1"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-md">
                    {item.quantity}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-sm text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                  {isAr ? item.nameAr : item.nameEn}
                </h3>
              </div>

              <div className="pt-3 mt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1 text-emerald-600">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>{isAr ? 'جاهز للاستخدام الفوري' : 'Site Certified'}</span>
                </span>
                <span className="font-mono text-slate-400">ID #{item.id.toString().padStart(2, '0')}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
