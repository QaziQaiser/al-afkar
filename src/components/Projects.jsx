import React, { useState } from 'react';
import { 
  MapPin, 
  Zap, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  Filter,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Projects({ lang, onSelectProject, onOpenQuoteModal }) {
  const { projects } = companyData;
  const isAr = lang === 'ar';

  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', labelEn: 'All Projects', labelAr: 'جميع المشاريع' },
    { id: 'transmission', labelEn: 'Transmission Lines', labelAr: 'خطوط نقل الطاقة' },
    { id: 'civil', labelEn: 'Civil & Substation', labelAr: 'الأعمال المدنية' },
    { id: 'renewable', labelEn: 'Renewable Energy', labelAr: 'الطاقة المتجددة' }
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Transmission Wire Subtle Grid */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #22c55e 1px, transparent 1px), linear-gradient(to bottom, #22c55e 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Exact Reference Layout Match) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 text-start">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-block px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-400 text-xs font-bold tracking-wider uppercase border border-emerald-500/30">
              {isAr ? 'المشاريع البارزة' : 'Featured Projects'}
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              {isAr ? 'سجل مشاريعنا وإنجازاتنا الميدانية' : 'Our Projects'}
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              {isAr 
                ? 'نفذنا بنجاح ونواصل تنفيذ مشاريع حيوية في قطاع خطوط النقل الهوائية ومحطات التحويل والأعمال المدنية ومشاريع الطاقة المتجددة في مختلف مناطق المملكة.'
                : 'We have successfully completed and are currently working on several transmission line and infrastructure projects across Saudi Arabia. Our experience includes 380kV, 500kV and 765kV transmission lines, civil works and renewable energy projects.'
              }
            </p>
          </div>

          {/* Action CTA: View All Projects */}
          <div className="flex-shrink-0">
            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-lg shadow-lg shadow-emerald-500/20 transition-all group"
            >
              <span>{isAr ? 'طلب مشاركة في مشروع' : 'View All Projects'}</span>
              <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${isAr ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
            </button>
          </div>
        </div>

        {/* Category Filters (Pills) */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
              }`}
            >
              {isAr ? cat.labelAr : cat.labelEn}
            </button>
          ))}
        </div>

        {/* Projects Grid (Exact Reference Layout Match) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => {
            const isCompleted = project.status === 'Completed';

            return (
              <div
                key={project.id}
                className="bg-slate-800/80 rounded-xl overflow-hidden border border-slate-700/80 hover:border-emerald-500/50 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
              >
                {/* Project Image Header */}
                <div className="relative h-44 overflow-hidden bg-slate-950">
                  <img 
                    src={project.image} 
                    alt={isAr ? project.titleAr : project.titleEn}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>

                  {/* Voltage Tag */}
                  <div className="absolute top-3 right-3 bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-mono font-bold text-emerald-400 border border-slate-700">
                    {project.voltage}
                  </div>
                </div>

                {/* Project Body */}
                <div className="p-5 flex-1 flex flex-col justify-between text-start space-y-4">
                  <div className="space-y-2.5">
                    {/* Project Title */}
                    <h3 className="font-heading font-bold text-base text-white group-hover:text-emerald-400 transition-colors leading-snug">
                      {isAr ? project.titleAr : project.titleEn}
                    </h3>

                    {/* Location */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span className="truncate">{isAr ? project.locationAr : project.locationEn}</span>
                    </div>

                    {/* Technical Scope */}
                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                      {isAr ? project.specsAr : project.specsEn}
                    </p>
                  </div>

                  {/* Card Bottom: Status Pill & View Details */}
                  <div className="pt-3 border-t border-slate-700/80 flex items-center justify-between">
                    {/* Status Badge */}
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold ${
                      isCompleted 
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                        : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${isCompleted ? 'bg-emerald-400' : 'bg-cyan-400 animate-ping'}`}></span>
                      {isAr ? project.statusAr : project.status}
                    </span>

                    {/* Quick Modal Trigger */}
                    <button
                      onClick={() => onSelectProject(project)}
                      className="text-xs text-slate-400 hover:text-emerald-400 flex items-center gap-1 transition-colors"
                      title={isAr ? "تفاصيل المشروع" : "Project Specs"}
                    >
                      <span className="text-[11px]">{isAr ? 'التفاصيل' : 'Details'}</span>
                      <ExternalLink className="w-3 h-3" />
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
