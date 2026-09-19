import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Calculator, 
  CheckCircle2, 
  Clock, 
  Building, 
  Zap, 
  MessageSquare,
  ShieldCheck
} from 'lucide-react';
import { companyData } from '../data/companyData';

export default function ContactQuote({ lang }) {
  const { profile, management } = companyData;
  const isAr = lang === 'ar';

  // RFQ Calculator State
  const [projectType, setProjectType] = useState('ohtl');
  const [voltage, setVoltage] = useState('380kV');
  const [lengthKm, setLengthKm] = useState(25);
  const [location, setLocation] = useState('Makkah');

  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Power & Transmission Lines',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        service: 'Power & Transmission Lines',
        message: ''
      });
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#22c55e 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-start mb-14 space-y-2">
          <div className="inline-block px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-400 text-xs font-bold tracking-wider uppercase border border-emerald-500/30">
            {isAr ? 'تواصل معنا وطلب التسعير' : 'Get In Touch & RFQ'}
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            {isAr ? 'جاهزون لمناقشة متطلبات مشروعكم القادم' : 'Ready to Power Your Next Infrastructure Project'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-3xl">
            {isAr 
              ? 'تواصل مباشرة مع إدارتنا التنفيذية أو أرسل استفسارك للحصول على عرض فني ومالي مفصل لمشروعك خلال 24 ساعة.'
              : 'Contact our executive leadership directly or submit an RFQ to receive technical feasibility and commercial proposals.'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info & Executive Phone Directory */}
          <div className="lg:col-span-5 space-y-6 text-start">
            
            {/* Headquarters Card */}
            <div className="bg-slate-800/90 rounded-2xl p-6 border border-slate-700 space-y-4">
              <h3 className="font-heading font-bold text-lg text-white flex items-center gap-2">
                <Building className="w-5 h-5 text-emerald-400" />
                <span>{isAr ? 'المقر الرئيسي للمؤسسة' : 'Headquarters & Registration'}</span>
              </h3>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">
                      {isAr ? profile.fullAddressAr : profile.fullAddressEn}
                    </p>
                    <p className="text-slate-400 text-[11px] mt-0.5">
                      National Address: {profile.nationalAddress.shortAddress} (Proof No: {profile.nationalAddress.addressProofNo})
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <a href={`mailto:${profile.email}`} className="text-slate-200 hover:text-emerald-400 font-mono transition-colors">
                    {profile.email}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>SCA: {profile.scaNumber} • CR: {profile.crNumber} • VAT: {profile.vatNumber}</span>
                </div>
              </div>
            </div>

            {/* Direct Executive Hotline Cards */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                {isAr ? 'خطوط الاتصال المباشرة مع الإدارة' : 'Direct Executive Lines'}
              </h4>

              {management.map((person, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/80 flex items-center justify-between hover:border-emerald-500/50 transition-colors"
                >
                  <div>
                    <span className="text-xs font-bold text-white block">
                      {isAr ? person.nameAr : person.nameEn}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {isAr ? person.titleAr : person.titleEn}
                    </span>
                  </div>

                  <a
                    href={`tel:${person.phoneRaw}`}
                    className="flex items-center gap-1.5 bg-emerald-500/20 hover:bg-emerald-500 text-emerald-300 hover:text-slate-950 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all border border-emerald-500/30"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span className="dir-ltr">{person.phone}</span>
                  </a>
                </div>
              ))}
            </div>

            {/* Quick Interactive RFQ Estimator Card */}
            <div className="bg-gradient-to-br from-emerald-950/60 to-slate-800 p-5 rounded-2xl border border-emerald-500/30 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400">
                <Calculator className="w-5 h-5" />
                <h4 className="font-heading font-bold text-sm text-white">
                  {isAr ? 'مقدر تكاليف ونطاق خطوط النقل السريع' : 'Instant OHTL Scope Calculator'}
                </h4>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="text-slate-400 block mb-1">{isAr ? 'الجهد الكهربائي:' : 'Line Voltage:'}</label>
                  <select 
                    value={voltage} 
                    onChange={(e) => setVoltage(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-white font-mono"
                  >
                    <option value="110kV">110 kV</option>
                    <option value="230kV">230 kV</option>
                    <option value="380kV">380 kV</option>
                    <option value="500kV">500 kV</option>
                    <option value="765kV">765 kV</option>
                  </select>
                </div>

                <div>
                  <label className="text-slate-400 block mb-1">{isAr ? 'الطول التقريبي (كم):' : 'Estimated KM:'}</label>
                  <input 
                    type="number" 
                    min="1" 
                    max="500"
                    value={lengthKm}
                    onChange={(e) => setLengthKm(Number(e.target.value))}
                    className="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-white font-mono"
                  />
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-[11px] flex items-center justify-between text-slate-300">
                <span>{isAr ? 'تقدير الأبراج التقريبي:' : 'Estimated Towers:'}</span>
                <span className="font-mono font-bold text-emerald-400 text-xs">
                  ~ {Math.ceil(lengthKm * 2.8)} Towers (350m Spans)
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact / Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-800/90 rounded-2xl p-6 sm:p-8 border border-slate-700 shadow-2xl text-start">
              
              <h3 className="font-heading font-bold text-xl text-white mb-2">
                {isAr ? 'طلب عرض أسعار واستفسار فني' : 'Request a Project Quotation / Inquiry'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                {isAr 
                  ? 'يرجى ملء النموذج أدناه وسيتم التواصل معكم من قبل مهندسينا المختصين فوراً.'
                  : 'Please complete the form below. Our project engineers will review your inquiry and follow up promptly.'
                }
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 space-y-2 text-center">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="font-heading font-bold text-lg text-white">
                    {isAr ? 'تم استلام طلبكم بنجاح!' : 'Quotation Request Received!'}
                  </h4>
                  <p className="text-xs text-slate-300">
                    {isAr 
                      ? 'شكراً لتواصلكم مع مؤسسة الأفكار المتفردة للمقاولات. سيتواصل معكم فريقنا الفني خلال 24 ساعة.'
                      : 'Thank you for reaching out to Al-Afkar Al-Mutafaredah Est. Our engineering team will review your specifications and reply promptly.'
                    }
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {isAr ? 'الاسم الكامل *' : 'Full Name *'}
                      </label>
                      <input 
                        type="text" 
                        required
                        placeholder={isAr ? 'مثال: م. خالد المنصور' : 'e.g. Eng. Khalid Al-Mansoor'}
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-slate-900/90 border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {isAr ? 'اسم الشركة / الجهة *' : 'Company / Organization *'}
                      </label>
                      <input 
                        type="text" 
                        required
                        placeholder={isAr ? 'مثال: شركة المقاولات الكهربائية' : 'e.g. Energy Infrastructure Ltd.'}
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="w-full bg-slate-900/90 border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {isAr ? 'البريد الإلكتروني *' : 'Email Address *'}
                      </label>
                      <input 
                        type="email" 
                        required
                        placeholder="client@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-slate-900/90 border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {isAr ? 'رقم الجوال للتواصل *' : 'Phone / Mobile Number *'}
                      </label>
                      <input 
                        type="tel" 
                        required
                        placeholder="050-XXX-XXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-slate-900/90 border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {isAr ? 'الخدمة أو التخصص المطلوب *' : 'Required Service Domain *'}
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full bg-slate-900/90 border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500"
                    >
                      <option value="Power & Transmission Lines">
                        {isAr ? 'خطوط النقل الهوائية ونصب الأبراج (OHTL)' : 'Power & Transmission Lines (OHTL 110-765kV)'}
                      </option>
                      <option value="Tower Foundations & Civil Works">
                        {isAr ? 'القواعد الخرسانية ومحطات التحويل (Civil Works)' : 'Tower Foundations & Civil Works'}
                      </option>
                      <option value="Water Pipeline Infrastructure">
                        {isAr ? 'تمديد شبكات وأنابيب المياه (Water Infrastructure)' : 'Water Pipeline Infrastructure'}
                      </option>
                      <option value="Renewable Energy & Grid Interconnection">
                        {isAr ? 'الطاقة المتجددة والربط الشبكي (Renewable Energy)' : 'Renewable Energy & Grid Interconnection'}
                      </option>
                      <option value="Equipment Rental & Subcontracting">
                        {isAr ? 'تأجير المعدات ومقاولة الباطن (Subcontracting)' : 'Equipment Rental & Subcontracting'}
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {isAr ? 'تفاصيل المشروع ونطاق العمل' : 'Project Scope & Specifications'}
                    </label>
                    <textarea
                      rows={4}
                      placeholder={isAr ? 'يرجى تدوين تفاصيل الموقع، الجهد الكهربائي، المخططات أو أي متطلبات خاصة...' : 'Please specify location, line voltage, KM length, target deadlines, or any technical requirements...'}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-slate-900/90 border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider py-3.5 rounded-lg shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all transform hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isAr ? 'إرسال طلب التسعير الفوري' : 'Submit Project Inquiry / RFQ'}</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
