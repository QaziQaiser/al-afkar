import React from 'react';
import { 
  Award, 
  FileCheck, 
  Receipt, 
  ShieldCheck, 
  Users, 
  Landmark, 
  ExternalLink, 
  CheckCircle2,
  Lock,
  Building
} from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Accreditations({ lang, onSelectCert }) {
  const { accreditations, profile } = companyData;
  const isAr = lang === 'ar';

  const getCertIcon = (iconName) => {
    switch (iconName) {
      case 'Award': return <Award className="w-6 h-6 text-emerald-600" />;
      case 'FileCheck': return <FileCheck className="w-6 h-6 text-emerald-600" />;
      case 'Receipt': return <Receipt className="w-6 h-6 text-emerald-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      case 'Users': return <Users className="w-6 h-6 text-emerald-600" />;
      case 'Landmark': return <Landmark className="w-6 h-6 text-emerald-600" />;
      default: return <Award className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-start mb-12 space-y-2">
          <div className="inline-block px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-400 text-xs font-bold tracking-wider uppercase border border-emerald-500/30">
            {isAr ? 'الاعتمادات والتراخيص الرسمية' : 'Accreditations & Government Compliance'}
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            {isAr ? 'شهادات واعتمادات رسمية من الهيئات والوزارات السعودية' : 'Verified Accreditations & Regulatory Compliance'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-3xl">
            {isAr 
              ? 'تلتزم المؤسسة بجميع اشتراطات الهيئات والجهات الرسمية في المملكة العربية السعودية لضمان أعلى مستويات الحوكمة والنزاهة والسلامة المهنية.'
              : 'Officially certified and compliant with the Saudi Contractors Authority, Ministry of Commerce, ZATCA, GOSI, QIWA, and Makkah Chamber.'
            }
          </p>
        </div>

        {/* Accreditations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {accreditations.map((cert) => (
            <div
              key={cert.id}
              onClick={() => onSelectCert(cert)}
              className="bg-slate-800/90 rounded-2xl p-6 border border-slate-700/80 hover:border-emerald-400/60 shadow-lg hover:shadow-2xl transition-all cursor-pointer group flex flex-col justify-between text-start hover:-translate-y-1.5"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all">
                    {getCertIcon(cert.icon)}
                  </div>
                  <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-1 rounded-full">
                    {isAr ? cert.badgeAr : cert.badge}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-base text-white group-hover:text-emerald-300 transition-colors">
                    {isAr ? cert.nameAr : cert.nameEn}
                  </h3>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-xs text-slate-400">{isAr ? 'رقم العضوية/السجل:' : 'Reg/ID:'}</span>
                    <span className="text-xs font-mono font-bold text-emerald-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-700">
                      {cert.memberNo}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {isAr ? cert.descriptionAr : cert.descriptionEn}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-700/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{isAr ? cert.validityAr : cert.validity}</span>
                </span>
                <span className="text-slate-400 group-hover:text-emerald-400 flex items-center gap-1 font-semibold">
                  <span>{isAr ? 'فحص الوثيقة' : 'Verify'}</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Official Address Proof Card */}
        <div className="mt-8 bg-gradient-to-r from-slate-800 to-slate-800/60 rounded-2xl p-6 border border-slate-700 flex flex-col lg:flex-row items-center justify-between gap-6 text-start">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
              <Building className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-base text-white">
                {isAr ? 'إثبات العنوان الوطني الرسمي للمؤسسة' : 'Official Saudi National Address Proof'}
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                {isAr ? profile.fullAddressAr : profile.fullAddressEn}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono bg-slate-900 text-emerald-400 px-3 py-1.5 rounded-lg border border-slate-700">
              Short Address: {profile.nationalAddress.shortAddress}
            </span>
            <span className="text-xs font-mono bg-slate-900 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700">
              Proof No: {profile.nationalAddress.addressProofNo}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
