import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  MapPin, 
  Zap, 
  ShieldCheck, 
  Send, 
  FileText, 
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Award
} from 'lucide-react';
import { companyData } from '../data/companyData';

export function ServiceModal({ service, onClose, lang, onOpenQuote }) {
  if (!service) return null;
  const isAr = lang === 'ar';
  const bullets = isAr ? service.bulletsAr : service.bulletsEn;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl max-h-[90vh] flex flex-col text-start">
        
        {/* Modal Header Image */}
        <div className="relative h-48 sm:h-56 bg-slate-950 flex-shrink-0">
          <img 
            src={service.image} 
            alt={isAr ? service.titleAr : service.titleEn}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-800">
              {isAr ? 'المجال الهندسي' : 'Specialized Engineering Domain'}
            </span>
            <h3 className="font-heading font-black text-xl sm:text-2xl text-white mt-1">
              {isAr ? service.titleAr : service.titleEn}
            </h3>
          </div>
        </div>

        {/* Modal Content Scrollable */}
        <div className="p-6 overflow-y-auto space-y-5 text-slate-300 text-xs sm:text-sm">
          <div>
            <h4 className="font-heading font-bold text-sm text-emerald-400 uppercase tracking-wider mb-2">
              {isAr ? 'نظرة عامة على الخدمة والقدرات' : 'Service Overview & Technical Capabilities'}
            </h4>
            <p className="leading-relaxed text-slate-300">
              {isAr ? service.detailsAr : service.detailsEn}
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-2">
              {isAr ? 'نطاق الأعمال المشمول' : 'Comprehensive Scope of Works'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {bullets.map((b, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-slate-800/80 p-2.5 rounded-lg border border-slate-700/60">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-200">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-4 flex-shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-400 hover:text-white"
          >
            {isAr ? 'إغلاق النافذة' : 'Close'}
          </button>
          
          <button
            onClick={() => { onClose(); onOpenQuote(); }}
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider shadow-lg shadow-emerald-500/20"
          >
            <span>{isAr ? 'طلب عرض سعر لهذه الخدمة' : 'Request RFQ for this Service'}</span>
            <ArrowRight className={`w-3.5 h-3.5 ${isAr ? 'rotate-180' : ''}`} />
          </button>
        </div>

      </div>
    </div>
  );
}

export function ProjectModal({ project, onClose, lang, onOpenQuote }) {
  if (!project) return null;
  const isAr = lang === 'ar';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl max-h-[90vh] flex flex-col text-start">
        
        <div className="relative h-52 bg-slate-950 flex-shrink-0">
          <img 
            src={project.image} 
            alt={isAr ? project.titleAr : project.titleEn}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-slate-300 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono font-bold bg-emerald-500 text-slate-950 px-2 py-0.5 rounded">
                {project.voltage}
              </span>
              <span className="text-xs font-bold text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded">
                {isAr ? project.categoryLabelAr : project.categoryLabelEn}
              </span>
            </div>
            <h3 className="font-heading font-black text-xl text-white">
              {isAr ? project.titleAr : project.titleEn}
            </h3>
          </div>
        </div>

        <div className="p-6 overflow-y-auto space-y-4 text-slate-300 text-xs sm:text-sm">
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 bg-slate-800/60 p-3 rounded-xl border border-slate-700">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>{isAr ? project.locationAr : project.locationEn}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Status: {isAr ? project.statusAr : project.status}</span>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm text-emerald-400 uppercase tracking-wider mb-1.5">
              {isAr ? 'نطاق التنفيذ والمواصفات الفنية' : 'Project Scope & Execution Details'}
            </h4>
            <p className="leading-relaxed text-slate-300">
              {isAr ? project.descriptionAr : project.descriptionEn}
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-1.5">
              {isAr ? 'المعدات والتقنيات المستخدمة' : 'Key Methodologies & Standards'}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {isAr 
                ? 'تم تطبيق أعلى معايير الجودة والسلامة المهنية التابعة للشركة السعودية للكهرباء (SEC) مع استخدام أوناش الرفع المتطورة وحبال الشد الإيطالية وأنظمة السلامة الشاملة.'
                : 'Executed strictly compliant with Saudi Electricity Company (SEC) benchmarks, utilizing heavy telescopic cranes, Italian tension lines, and certified fall protection.'
              }
            </p>
          </div>
        </div>

        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-4 flex-shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-400 hover:text-white"
          >
            {isAr ? 'إغلاق' : 'Close'}
          </button>
          
          <button
            onClick={() => { onClose(); onOpenQuote(); }}
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider shadow-lg"
          >
            <span>{isAr ? 'طلب تنفيذ مشروع مماثل' : 'Inquire on Similar Project'}</span>
            <ArrowRight className={`w-3.5 h-3.5 ${isAr ? 'rotate-180' : ''}`} />
          </button>
        </div>

      </div>
    </div>
  );
}

export function CertModal({ cert, onClose, lang }) {
  if (!cert) return null;
  const isAr = lang === 'ar';
  const { profile } = companyData;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl p-6 text-start space-y-5">
        
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                {isAr ? 'بيانات التوثيق الحكومي الرسمي' : 'Official Saudi Accreditation'}
              </span>
              <h3 className="font-heading font-bold text-base text-white">
                {isAr ? cert.nameAr : cert.nameEn}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-3 text-xs text-slate-300">
          <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-slate-400">{isAr ? 'اسم المنشأة:' : 'Establishment Name:'}</span>
              <span className="font-bold text-white text-end">{isAr ? profile.nameAr : profile.nameEn}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400">{isAr ? 'رقم السجل / العضوية:' : 'Registration / ID:'}</span>
              <span className="font-mono font-bold text-emerald-400 bg-slate-900 px-2 py-0.5 rounded">
                {cert.memberNo}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400">{isAr ? 'الحالة والصلاحية:' : 'Validity Status:'}</span>
              <span className="text-emerald-300 font-semibold">{isAr ? cert.validityAr : cert.validity}</span>
            </div>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            {isAr ? cert.descriptionAr : cert.descriptionEn}
          </p>

          <div className="p-3 bg-emerald-950/50 border border-emerald-800/60 rounded-lg flex items-center gap-2 text-emerald-300 text-[11px]">
            <ShieldCheck className="w-4 h-4 flex-shrink-0" />
            <span>
              {isAr 
                ? 'تم التحقق من صحة هذه الوثيقة وفق أنظمة وتراخيص الهيئات الحكومية السعودية.'
                : 'Verified authentic credentials registered with official Saudi Government authorities.'
              }
            </span>
          </div>
        </div>

        <div className="pt-2 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold px-4 py-2 rounded-lg"
          >
            {isAr ? 'إغلاق' : 'Close'}
          </button>
        </div>

      </div>
    </div>
  );
}

export function QuoteModal({ isOpen, onClose, lang }) {
  if (!isOpen) return null;
  const isAr = lang === 'ar';
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    scope: 'OHTL Transmission Line (110-765kV)',
    details: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl p-6 text-start space-y-4">
        
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <h3 className="font-heading font-black text-lg text-white">
              {isAr ? 'طلب عرض أسعار سريع (RFQ)' : 'Request a Fast Quotation (RFQ)'}
            </h3>
            <p className="text-xs text-slate-400">
              {isAr ? 'مؤسسة الأفكار المتفردة للمقاولات' : 'Al-Afkar Al-Mutafaredah Est.'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-2 text-emerald-400">
            <CheckCircle2 className="w-12 h-12 mx-auto text-emerald-400" />
            <h4 className="font-heading font-bold text-lg text-white">
              {isAr ? 'تم استلام طلبكم بنجاح!' : 'Quotation Request Submitted!'}
            </h4>
            <p className="text-xs text-slate-300">
              {isAr ? 'سيتواصل معكم كبير المهندسين خلال وقت وجيز.' : 'Our senior engineer will contact you shortly.'}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 text-xs">
            <div>
              <label className="text-slate-300 font-semibold block mb-1">{isAr ? 'الاسم والجهة *' : 'Name & Company *'}</label>
              <input 
                type="text" 
                required
                placeholder={isAr ? 'الاسم / اسم المؤسسة' : 'Your name / company'}
                value={form.name}
                onChange={(e) => setForm({...form, name: e.target.value})}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-slate-300 font-semibold block mb-1">{isAr ? 'رقم الهاتف *' : 'Phone Number *'}</label>
                <input 
                  type="tel" 
                  required
                  placeholder="050-XXX-XXXX"
                  value={form.phone}
                  onChange={(e) => setForm({...form, phone: e.target.value})}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="text-slate-300 font-semibold block mb-1">{isAr ? 'البريد الإلكتروني' : 'Email Address'}</label>
                <input 
                  type="email" 
                  placeholder="info@company.com"
                  value={form.email}
                  onChange={(e) => setForm({...form, email: e.target.value})}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            <div>
              <label className="text-slate-300 font-semibold block mb-1">{isAr ? 'نوع المشروع / الخدمة' : 'Project Domain'}</label>
              <select
                value={form.scope}
                onChange={(e) => setForm({...form, scope: e.target.value})}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-emerald-500"
              >
                <option value="OHTL Transmission Line">Overhead Transmission Lines (110kV-765kV)</option>
                <option value="Tower Civil Foundations">Tower Civil Foundations & Substation Works</option>
                <option value="Water Pipeline">Water Infrastructure & Pipelines</option>
                <option value="Solar Renewable">Solar Farm Civil Works & Grid Links</option>
                <option value="Equipment Rental">Equipment Fleet Subcontracting</option>
              </select>
            </div>

            <div>
              <label className="text-slate-300 font-semibold block mb-1">{isAr ? 'ملاحظات أو مواصفات إضافية' : 'Notes / Project Location'}</label>
              <textarea 
                rows={3}
                placeholder={isAr ? 'الموقع، عدد الأبراج أو أطوال الكيلومترات...' : 'Location, line length KM, target timelines...'}
                value={form.details}
                onChange={(e) => setForm({...form, details: e.target.value})}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-emerald-500 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider py-3 rounded-lg shadow-lg"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{isAr ? 'إرسال طلب التسعيرة' : 'Submit Quotation Request'}</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
}

export function GalleryLightboxModal({ item, onClose, lang }) {
  if (!item) return null;
  const isAr = lang === 'ar';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative max-w-4xl w-full bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col text-start">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/80 text-white hover:bg-slate-800"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="relative max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
          <img 
            src={item.image} 
            alt={isAr ? item.titleAr : item.titleEn}
            className="w-full h-full object-contain max-h-[70vh]"
          />
        </div>

        <div className="p-5 bg-slate-900 border-t border-slate-800 flex items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-bold text-emerald-400 bg-slate-800 px-2.5 py-0.5 rounded">
              {isAr ? item.categoryAr : item.category}
            </span>
            <h3 className="font-heading font-bold text-base text-white mt-1">
              {isAr ? item.titleAr : item.titleEn}
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              {item.descriptionEn}
            </p>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 text-xs text-slate-300 hover:text-white font-semibold flex-shrink-0"
          >
            {isAr ? 'إغلاق' : 'Close'}
          </button>
        </div>

      </div>
    </div>
  );
}
