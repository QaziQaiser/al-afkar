// =============================================================================
// AL-AFKAR AL-MUTAFAREDAH EST. (مؤسسة الأفكار المتفردة للمقاولات)
// Master Application Script with Complete Bilingual Support & Interactivity
// =============================================================================

let currentLang = 'en'; // 'en' | 'ar'

// 1. Full Bilingual Dictionary
const translations = {
  en: {
    'company-short-name': 'AL AFKAR AL MUTAFAREDAH ESTABLISHMENT',
    'top-tagline': 'Building a Stronger Tomorrow with Sustainable Infrastructure',
    'country-name': 'Saudi Arabia',
    'brand-name': 'AL AFKAR AL MUTAFAREDAH',
    'brand-sub': 'Est. For Contracting & Power Infrastructure',
    
    'nav-home': 'Home',
    'nav-about': 'About Us',
    'nav-services': 'Services',
    'nav-projects': 'Projects',
    'nav-equipment': 'Equipment',
    'nav-hse': 'HSE & Quality',
    'nav-renewable': 'Renewable Energy',
    'nav-team': 'Our Team',
    'nav-gallery': 'Gallery',
    'nav-contact': 'Contact Us',
    
    'btn-quote': 'Get a Quote',
    'btn-request-quotation': 'Request a Quotation',
    
    'hero-badge': 'POWERING PROGRESS',
    'hero-badge-sub': 'KSA Power Infrastructure',
    'hero-headline-1': 'Your Trusted Partner in',
    'hero-headline-2': 'Power Infrastructure',
    'hero-headline-3': '& Construction',
    'hero-subtitle': 'We specialize in transmission line construction, civil works, water infrastructure and renewable energy projects across Saudi Arabia and beyond.',
    'btn-our-services': 'Our Services',
    'btn-project-quote': 'Get a Project Quote',
    
    'card-trans-title': 'Transmission Lines',
    'card-trans-sub': '110kV – 765kV OHTL & OPGW Stringing',
    'card-civil-title': 'Civil Construction',
    'card-civil-sub': 'Tower & Substation Foundations',
    'card-renew-title': 'Renewable Energy',
    'card-renew-sub': 'Solar Farm Civil & Grid Links',
    'mobilization-status': 'Rapid Site Mobilization Ready',
    
    'about-pill': 'About Us',
    'about-title': 'Al Afkar Al Mutafaridah Establishment',
    'about-desc': 'We are a Saudi-based construction and power infrastructure company with a strong commitment to quality, safety and excellence. With a skilled workforce, modern equipment and vast experience, we deliver reliable and sustainable solutions for transmission lines, civil construction, water infrastructure and renewable energy projects.',
    'about-card-verified': 'Verified Saudi Contractor',
    'btn-learn-more': 'Learn More',
    'vision-title': 'Our Vision',
    'vision-desc': 'To be a leading and trusted construction and power infrastructure company, delivering safe, reliable and sustainable solutions that contribute to the development of modern infrastructure and a cleaner energy future.',
    'mission-title': 'Our Mission',
    'mission-desc': 'To provide high-quality services through experienced manpower, modern equipment, strong safety practices and efficient project management, creating long-term value for our clients, communities and the environment.',
    
    'services-pill': 'Our Services',
    'services-headline': 'Comprehensive Solutions for a Stronger Future',
    'services-sub': 'End-to-end specialized capabilities spanning transmission lines, civil infrastructure, bulk water piping, and renewable grid links.',
    'srv-1-title': 'Power & Transmission',
    'srv-2-title': 'Civil Construction',
    'srv-3-title': 'Water Infrastructure',
    'srv-4-title': 'Renewable Energy',
    'btn-view-details': 'View Details',
    
    'proj-pill': 'Featured Projects',
    'proj-headline': 'Our Projects',
    'proj-sub': 'We have successfully completed and are currently working on several transmission line and infrastructure projects across Saudi Arabia. Our experience includes 380kV, 500kV and 765kV transmission lines, civil works and renewable energy projects.',
    'btn-view-all-projects': 'View All Projects',
    'tab-all': 'All Projects',
    'tab-transmission': 'Transmission Lines',
    'tab-civil': 'Civil & Substation',
    'tab-renewable': 'Renewable Energy',
    
    'proj-1-title': '765 kV Transmission Line',
    'proj-1-loc': 'Riyadh, Saudi Arabia',
    'proj-1-scope': 'Tower Erection, Stringing & OPGW Installation',
    'proj-2-title': '500 kV Transmission Line',
    'proj-2-loc': 'Tabuk, Saudi Arabia',
    'proj-2-scope': 'Tower Assembly, Crane Erection & Foundation Bolting',
    'proj-3-title': 'Road & Substation Civil Works',
    'proj-3-loc': 'Al Qassim, Saudi Arabia',
    'proj-3-scope': 'Excavation, Foundation Shuttering & Paving',
    'proj-4-title': 'Solar Power Grid Connection',
    'proj-4-loc': 'Riyadh Province, Saudi Arabia',
    'proj-4-scope': 'Civil Balance of Plant & Substation Interconnection',
    'badge-completed': 'Completed',
    'badge-ongoing': 'Ongoing',
    'btn-details': 'Details',
    
    'stat-years': 'Years of Experience',
    'stat-projects': 'Projects Completed',
    'stat-km': 'Transmission Line Experience',
    'stat-pros': 'Skilled Professionals',
    'stat-equipment': 'Equipment & Machinery',
    
    'why-pill': 'Why Choose Us',
    'why-headline': 'Your Success is Our Priority',
    'why-sub': 'Combining specialized engineering capability, rigid QHSE safety protocols, and modern equipment to guarantee milestone execution.',
    'why-1-title': 'Experienced Technical Team',
    'why-1-desc': 'Certified engineers, skilled riggers, and certified linemen with over a decade of OHTL experience across KSA.',
    'why-2-title': 'Transmission Line Expertise',
    'why-2-desc': 'Proven capability executing 110kV to 765kV lattice tower erection, OPGW stringing, and Sin Tower structures.',
    'why-3-title': 'Modern Equipment',
    'why-3-desc': 'Extensive inventory of heavy cranes, Italian ropes, tension pullers, Hilti drills, and 380kV S1N form boxes.',
    'why-4-title': 'Strong HSE Practices',
    'why-4-desc': 'Zero-accident philosophy with strict QHSE protocols, 150+ safety harnesses, and full GOSI/QIWA compliance.',
    'why-5-title': 'Quality-Focused Execution',
    'why-5-desc': 'Compliance with Saudi Electricity Company (SEC) and international ISO quality benchmarks in every phase.',
    'why-6-title': 'On-Time Project Delivery',
    'why-6-desc': 'Disciplined milestone management and robust logistics ensuring prompt handover without compromising safety.',
    'why-banner-badge': '100% Zero Incident HSE',
    'why-banner-title': 'Certified Riggers & High-Voltage Transmission Experts',
    'why-banner-desc': 'Mobilizing across Riyadh, Makkah, Tabuk, Al Qassim, and beyond.',
    
    'eq-pill': 'Equipment & Machinery Fleet',
    'eq-headline': 'Modern Equipment Fleet & Tooling Inventory',
    'eq-sub': 'Verified inventory including heavy telescopic cranes, Italian pulling ropes, calibrated torque sets, Hilti drills, and 380kV S1N form boxes.',
    'decl-title': 'Mobilization Declaration',
    'decl-desc': 'The Company has sufficient manpower and equipment resources and can mobilize additional resources as per project requirements.',
    'eq-tab-all': 'All Equipment',
    'eq-tab-lifting': 'Heavy Lifting & Cranes',
    'eq-tab-rigging': 'Rigging & Stringing',
    'eq-tab-safety': 'HSE & PPE Kits',
    'eq-tab-tools': 'Erection Tools',
    'eq-tab-civil': 'Foundation & Civil',
    
    'accred-pill': 'Accreditations & Government Compliance',
    'accred-headline': 'Verified Accreditations & Regulatory Compliance',
    'accred-sub': 'Officially certified and compliant with the Saudi Contractors Authority, Ministry of Commerce, ZATCA, GOSI, QIWA, and Makkah Chamber.',
    'cert-sca-badge': 'Official Registered Member',
    'cert-sca-name': 'Saudi Contractors Authority (SCA)',
    'cert-sca-desc': 'Officially certified contractor by the Saudi Contractors Authority under classification No. 2010201069.',
    'cert-sca-valid': 'Valid until July 5, 2027',
    'cert-cr-badge': 'Commercial Record',
    'cert-cr-name': 'Ministry of Commerce (C.R.)',
    'cert-cr-desc': 'National Unified Commercial Registration No. 7033475166 for Contracting & Power Infrastructure.',
    'cert-cr-valid': 'Active Record (23/02/2023)',
    'cert-zatca-badge': 'VAT Registered',
    'cert-zatca-name': 'ZATCA - VAT Registration',
    'cert-zatca-desc': 'Taxpayer registered with the Zakat, Tax and Customs Authority under VAT No. 311571000700003.',
    'cert-zatca-valid': 'Effective Registered',
    'cert-gosi-badge': 'OHSE Safety',
    'cert-gosi-name': 'GOSI Social Insurance & HSE',
    'cert-gosi-desc': 'GOSI Occupational Health & Safety compliance certificate confirming zero workplace injuries.',
    'cert-gosi-valid': 'Cert: 116872361 (Zero Incidents)',
    'cert-qiwa-badge': 'Saudization Green A',
    'cert-qiwa-name': 'QIWA & HRSD Saudization',
    'cert-qiwa-desc': 'Ministry of Human Resources certificate achieving the required Saudization category (33% Nationalization).',
    'cert-qiwa-valid': 'Nitaqat Green Category A',
    'cert-chamber-badge': 'Chamber Member',
    'cert-chamber-name': 'Makkah Chamber of Commerce',
    'cert-chamber-desc': 'Active membership certificate issued by the Makkah Chamber of Commerce & Industry.',
    'cert-chamber-valid': 'Subscription: 7033475166',
    
    'lbl-member-no': 'Member ID:',
    'lbl-cr-no': 'C.R. Number:',
    'lbl-vat-no': 'VAT Number:',
    'lbl-gosi-sub': 'Subscription:',
    'lbl-qiwa-cert': 'Cert ID:',
    'lbl-chamber-file': 'Member File:',
    'lbl-verify': 'Verify',
    
    'addr-title': 'Official Saudi National Address Proof',
    'addr-desc': '5473 Muhammad Ibn Alwan Al Tunsi St, 7301 Ar Rashidiyah Dist, Makkah P.C: 24275, KSA',
    
    'gal-pill': 'Gallery of Work',
    'gal-headline': 'Visual Showcase of On-Site Execution',
    'gal-sub': 'Direct field photography from our project sites illustrating foundation civil works, tower assembly, crane hoisting, and conductor sagging.',
    'gal-1-title': 'Tower Foundation Civil Works',
    'gal-1-desc': 'Reinforced steel rebar cage assembly and concrete footing casting for 380kV/500kV lattice towers.',
    'gal-2-title': 'Steel Lattice Tower Assembly',
    'gal-2-desc': 'On-site mechanical assembly, steel member torqueing, and ground alignment before crane hoisting.',
    'gal-3-title': 'Heavy Crane Tower Erection',
    'gal-3-desc': 'High-tonnage mobile cranes lifting intermediate and peak tower sections under strict safety rigging.',
    'gal-4-title': 'OPGW & Conductor Stringing',
    'gal-4-desc': 'Tensioner pulling operations, sagging checks, and optical ground wire (OPGW) jointing across spans.',
    'gal-5-title': 'Substation Civil Infrastructure',
    'gal-5-desc': 'Transformer pad construction, cable trenches, and control room foundations in desert environment.',
    'gal-6-title': 'Solar Farm Site Preparation',
    'gal-6-desc': 'Civil balance of plant, site grading, pile ramming, and solar farm interconnection corridors.',
    
    'team-pill': 'Executive Leadership & Key Personnel',
    'team-headline': 'Leadership & Key Management Personnel',
    'team-sub': 'Direct points of contact for project coordination, financial governance, engineering management, and QHSE compliance.',
    'team-1-badge': 'Project Coordination',
    'team-1-name': 'Saqib Ullah',
    'team-1-title': 'Project Coordinator',
    'team-1-bio': 'Coordinating high-voltage site logistics, project workflows, technical schedules, and field team mobilization.',
    'team-2-badge': 'Finance & Accounts',
    'team-2-name': 'Yousef Abed Aljuaid',
    'team-2-title': 'Head of Account & Finance',
    'team-2-bio': 'Leading corporate financial planning, accounting compliance, project budgeting, and financial governance under Saudi standards.',
    'team-3-badge': 'Management & Engineering',
    'team-3-name': 'Eng. Ikram Ullah',
    'team-3-title': 'Management Director',
    'team-3-bio': 'Directing strategic project delivery, 380kV-765kV lattice tower erection, OPGW stringing, and technical quality standards.',
    
    'contact-pill': 'Get In Touch & RFQ',
    'contact-headline': 'Ready to Power Your Next Infrastructure Project',
    'contact-sub': 'Contact our executive leadership directly or submit an RFQ to receive technical feasibility and commercial proposals.',
    'hq-title': 'Headquarters & Registration',
    'hq-address': '5473 Muhammad Ibn Alwan Al Tunsi St, 7301 Ar Rashidiyah Dist, Makkah P.C: 24275, Kingdom of Saudi Arabia',
    'calc-title': 'Instant OHTL Scope Calculator',
    'calc-voltage': 'Line Voltage:',
    'calc-length': 'Estimated KM:',
    'calc-towers-lbl': 'Estimated Towers:',
    'form-title': 'Request a Project Quotation / Inquiry',
    'form-sub': 'Please complete the form below. Our project engineers will review your specifications and reply promptly.',
    'form-lbl-name': 'Full Name *',
    'form-lbl-company': 'Company / Organization *',
    'form-lbl-email': 'Email Address *',
    'form-lbl-phone': 'Phone / Mobile Number *',
    'form-lbl-domain': 'Required Service Domain *',
    'form-lbl-msg': 'Project Scope & Specifications',
    'btn-submit-inquiry': 'Submit Project Inquiry / RFQ',
    'msg-success-title': 'Quotation Request Received!',
    'msg-success-desc': 'Thank you for reaching out to Al-Afkar Al-Mutafaredah Est. Our engineering team will review your specifications and reply promptly.',
    
    'ft-brand': 'AL AFKAR AL MUTAFAREDAH',
    'ft-brand-sub': 'Est. For Contracting & Power Supply',
    'ft-desc': 'We specialize in transmission line construction, civil works, water infrastructure and renewable energy projects across Saudi Arabia and beyond.',
    'ft-quick-links': 'Quick Links',
    'ft-capabilities': 'Capabilities',
    'ft-contact-title': 'Contact Us & RFQ',
    'ft-city': 'Makkah, Kingdom of Saudi Arabia',
    'ft-quote-box-title': 'Have a Project in Mind?',
    'ft-quote-box-desc': "Let's work together to build a better tomorrow.",
    'ft-motto': 'Safe People | Quality Work | Sustainable Future',
    
    'quote-modal-title': 'Request a Fast Quotation (RFQ)',
    'form-lbl-notes': 'Notes / Project Location',
    'btn-submit-quote': 'Submit Quotation Request',
    'quote-success-title': 'Quotation Request Submitted!',
    'quote-success-desc': 'Our senior project engineers will contact you shortly.'
  },
  
  ar: {
    'company-short-name': 'مؤسسة الأفكار المتفردة للمقاولات',
    'top-tagline': 'نبني غداً أقوى ببنية تحتية مستدامة وحلول طاقة متطورة',
    'country-name': 'المملكة العربية السعودية',
    'brand-name': 'مؤسسة الأفكار المتفردة',
    'brand-sub': 'للمقاولات وخطوط نقل الطاقة والإنشاءات',
    
    'nav-home': 'الرئيسية',
    'nav-about': 'عن المؤسسة',
    'nav-services': 'خدماتنا',
    'nav-projects': 'مشاريعنا',
    'nav-equipment': 'المعدات والآليات',
    'nav-hse': 'السلامة والجودة',
    'nav-renewable': 'الطاقة المتجددة',
    'nav-team': 'فريق العمل',
    'nav-gallery': 'معرض الأعمال',
    'nav-contact': 'اتصل بنا',
    
    'btn-quote': 'طلب عرض أسعار',
    'btn-request-quotation': 'طلب تسعيرة سريعة (RFQ)',
    
    'hero-badge': 'رواد الطاقة والإنشاءات',
    'hero-badge-sub': 'البنية التحتية للطاقة بالمملكة',
    'hero-headline-1': 'شريككم الموثوق في',
    'hero-headline-2': 'بنية الطاقة التحتية',
    'hero-headline-3': 'والإنشاءات الكبرى',
    'hero-subtitle': 'متخصصون في إنشاء خطوط النقل الهوائية فائقة الجهد، الأعمال المدنية، شبكات المياه ومشاريع الطاقة المتجددة في جميع أنحاء المملكة العربية السعودية.',
    'btn-our-services': 'خدماتنا الهندسية',
    'btn-project-quote': 'طلب تسعير فوري',
    
    'card-trans-title': 'خطوط نقل الطاقة',
    'card-trans-sub': 'أبراج OHTL حتى 765 ك.ف وسحب OPGW',
    'card-civil-title': 'الإنشاءات والأعمال المدنية',
    'card-civil-sub': 'قواعد الأبراج والمحطات والحفريات',
    'card-renew-title': 'الطاقة المتجددة والربط',
    'card-renew-sub': 'مزارع الطاقة الشمسية والربط الشبكي',
    'mobilization-status': 'جاهزية التعبئة الميدانية الفورية',
    
    'about-pill': 'عن المؤسسة',
    'about-title': 'مؤسسة الأفكار المتفردة للمقاولات',
    'about-desc': 'نحن مؤسسة وطنية سعودية متخصصة في مقاولات البنية التحتية للطاقة والأعمال المدنية وشبكات المياه والطاقة المتجددة. نمتلك سجلاً حافلاً بالخبرة والاحترافية لتنفيذ خطوط النقل الهوائية (OHTL) من الأساسات الخرسانية حتى تركيب صواميل الأمان (Paul Nut) وسحب كابلات الألياف البصرية OPGW بموثوقية عالية.',
    'about-card-verified': 'مؤسسة سعودية معتمدة',
    'btn-learn-more': 'المزيد عن خدماتنا',
    'vision-title': 'رؤيتنا',
    'vision-desc': 'أن نكون المؤسسة الرائدة والأكثر موثوقية في مقاولات البنية التحتية للطاقة والأعمال المدنية في المملكة، مساهمين في تحقيق رؤية المملكة 2030 بمشاريع مستدامة وآمنة.',
    'mission-title': 'رسالتنا',
    'mission-desc': 'تقديم خدمات هندسية وإنشائية بأعلى معايير الجودة من خلال كوادر بشرية خبيرة ومعدات حديثة وتطبيق صارم لمعايير السلامة المهنية، لخلق قيمة مستدامة لعملائنا ومجتمعنا.',
    
    'services-pill': 'خدماتنا المتكاملة',
    'services-headline': 'حلول هندسية وإنشائية شاملة لمستقبل أقوى',
    'services-sub': 'نقدم باقة متكاملة من الخدمات المتخصصة في شبكات الجهد الفائق والأعمال المدنية ومشاريع المياه والطاقة النظيفة بالمملكة.',
    'srv-1-title': 'الطاقة وخطوط النقل',
    'srv-2-title': 'الإنشاءات والأعمال المدنية',
    'srv-3-title': 'البنية التحتية لشبكات المياه',
    'srv-4-title': 'الطاقة المتجددة والربط',
    'btn-view-details': 'عرض التفاصيل',
    
    'proj-pill': 'المشاريع البارزة',
    'proj-headline': 'سجل مشاريعنا وإنجازاتنا الميدانية',
    'proj-sub': 'نفذنا بنجاح ونواصل تنفيذ مشاريع حيوية في قطاع خطوط النقل الهوائية ومحطات التحويل والأعمال المدنية ومشاريع الطاقة المتجددة في مختلف مناطق المملكة.',
    'btn-view-all-projects': 'عرض كافة المشاريع',
    'tab-all': 'جميع المشاريع',
    'tab-transmission': 'خطوط نقل الطاقة',
    'tab-civil': 'الأعمال المدنية',
    'tab-renewable': 'الطاقة المتجددة',
    
    'proj-1-title': 'مشروع خط نقل الطاقة 765 ك.ف',
    'proj-1-loc': 'الرياض، المملكة العربية السعودية',
    'proj-1-scope': 'نصب وتجميع الأبراج وسحب الموصلات وOPGW',
    'proj-2-title': 'مشروع تركيب أبراج خط 500 ك.ف',
    'proj-2-loc': 'تبوك، المملكة العربية السعودية',
    'proj-2-scope': 'تجميع الأبراج والرفع بالأوناش وربط القواعد',
    'proj-3-title': 'الأعمال المدنية للطرق ومحطة التحويل',
    'proj-3-loc': 'القصيم، المملكة العربية السعودية',
    'proj-3-scope': 'الحفريات، القواعد الخرسانية وسفلتة الطرق',
    'proj-4-title': 'بنية الربط الشبكي لمشروع الطاقة الشمسية',
    'proj-4-loc': 'منطقة الرياض، المملكة العربية السعودية',
    'proj-4-scope': 'الأعمال المدنية وتجهيز خط الربط بمحطة التحويل',
    'badge-completed': 'مكتمل بنجاح',
    'badge-ongoing': 'قيد التنفيذ الميداني',
    'btn-details': 'التفاصيل',
    
    'stat-years': 'سنوات من الخبرة العريقة',
    'stat-projects': 'مشروع منجز بنجاح',
    'stat-km': 'كم خبرة خطوط نقل الطاقة',
    'stat-pros': 'مهندس وفني متخصص',
    'stat-equipment': 'آلية ومعدة حديثة',
    
    'why-pill': 'لماذا تختارنا',
    'why-headline': 'نجاح مشروعكم أولويتنا القصوى',
    'why-sub': 'نجمع بين الخبرة الهندسية المتعمقة، المعايير القياسية للسلامة، والأسطول الحديث لتسليم مشاريع خطوط النقل والإنشاءات بدقة متناهية.',
    'why-1-title': 'فريق فني وهندسي خبير',
    'why-1-desc': 'مهندسون معتمدون، فنيو شد وتسلق محترفون يتمتعون بسنوات طويلة من الخبرة الميدانية بالمملكة.',
    'why-2-title': 'تخصص عميق في خطوط النقل',
    'why-2-desc': 'قدرة تنفيذية مثبتة لخطوط الجهد العالي والفائق من 110 إلى 765 ك.ف وسحب كابلات OPGW.',
    'why-3-title': 'أسطول معدات وآليات حديثة',
    'why-3-desc': 'مخزون ضخم من الأوناش، حبال السحب الإيطالية، روافع الشد، وحفارات هيلتي وقوالب 380 ك.ف.',
    'why-4-title': 'معايير سلامة وبيئة صارمة',
    'why-4-desc': 'ثقافة سلامة خالية من الحوادث مع تطبيق صارم لاشتراطات التأمينات وQIWA ومعدات حماية متطورة.',
    'why-5-title': 'تنفيذ يركز على أعلى معايير الجودة',
    'why-5-desc': 'التزام كامل بالمواصفات الفنية للشركة السعودية للكهرباء (SEC) والمعايير العالمية للجودة.',
    'why-6-title': 'تسليم المشاريع في الموعد المحدد',
    'why-6-desc': 'إدارة لوجستية وجداول زمنية دقيقة تضمن تسليم كافة مراحل المشروع في الموعد المحدد وبأعلى كفاءة.',
    'why-banner-badge': 'بيئة عمل آمنة 100%',
    'why-banner-title': 'كوادر متخصصة في خطوط الجهد العالي والربط الشبكي',
    'why-banner-desc': 'فريق عمل متكامل جاهز للتعبئة الفورية في كافة مناطق المملكة.',
    
    'eq-pill': 'أسطول المعدات والآليات',
    'eq-headline': 'معدات متطورة وتقنيات متخصصة لتنفيذ أضخم المشاريع',
    'eq-sub': 'تمتلك المؤسسة أسطولاً متكاملاً من الأوناش التلسكوبية، حبال السحب الإيطالية، روافع الشد، قوالب صب القواعد 380 ك.ف، ومعدات الحماية الشخصية المعتمدة.',
    'decl-title': 'إقرار الجاهزية والقدرة التشغيلية',
    'decl-desc': 'تمتلك المؤسسة الكوادر البشرية والمعدات الكافية مع القدرة على حشد موارد إضافية فورية حسب متطلبات كل مشروع.',
    'eq-tab-all': 'كافة المعدات والآليات',
    'eq-tab-lifting': 'الأوناش والرفع الثقيل',
    'eq-tab-rigging': 'معدات السحب والشد',
    'eq-tab-safety': 'السلامة ومعدات الوقاية',
    'eq-tab-tools': 'أدوات التركيب والعزم',
    'eq-tab-civil': 'القواعد والأعمال المدنية',
    
    'accred-pill': 'الاعتمادات والتراخيص الرسمية',
    'accred-headline': 'شهادات واعتمادات رسمية من الهيئات والوزارات السعودية',
    'accred-sub': 'تلتزم المؤسسة بجميع اشتراطات الهيئات والجهات الرسمية في المملكة العربية السعودية لضمان أعلى مستويات الحوكمة والنزاهة والسلامة المهنية.',
    'cert-sca-badge': 'عضوية مقاول معتمد',
    'cert-sca-name': 'الهيئة السعودية للمقاولين (SCA)',
    'cert-sca-desc': 'شهادة عضوية رسمية صادرة من الهيئة السعودية للمقاولين طبقاً للأنظمة واللوائح المنظمة.',
    'cert-sca-valid': 'سارية حتى 5 يوليو 2027',
    'cert-cr-badge': 'سجل تجاري وطني',
    'cert-cr-name': 'وزارة التجارة - السجل التجاري',
    'cert-cr-desc': 'السجل التجاري الصادر برقم 7033475166 لأنشطة المقاولات والطاقة وتوصيل التيار الكهربائي.',
    'cert-cr-valid': 'سجل نشط (تاريخ الإصدار: 23/02/2023)',
    'cert-zatca-badge': 'مسجل بالضريبة',
    'cert-zatca-name': 'هيئة الزكاة والضريبة والجمارك',
    'cert-zatca-desc': 'شهادة تسجيل رسمية في ضريبة القيمة المضافة صادرة عن هيئة الزكاة والضريبة والجمارك.',
    'cert-zatca-valid': 'شهادة ضريبية سارية',
    'cert-gosi-badge': 'مطابقة السلامة المهنية',
    'cert-gosi-name': 'المؤسسة العامة للتأمينات الاجتماعية',
    'cert-gosi-desc': 'شهادة السلامة والصحة المهنية المعتمدة مع سجل خالٍ تماماً من الإصابات والمخالفات الميدانية.',
    'cert-gosi-valid': 'شهادة: 116872361 (خالٍ من الحوادث)',
    'cert-qiwa-badge': 'شهادة التوطين المعتمدة',
    'cert-qiwa-name': 'منصة قوى ووزارة الموارد البشرية',
    'cert-qiwa-desc': 'شهادة توطين رسمية تثبت تحقيق النسب المطلوبة والالتزام ببرامج الموارد البشرية (33% توطين).',
    'cert-qiwa-valid': 'نطاق أخضر صغير (أ)',
    'cert-chamber-badge': 'شهادة انتساب',
    'cert-chamber-name': 'غرفة مكة المكرمة للتجارة والصناعة',
    'cert-chamber-desc': 'شهادة انتساب وتوثيق رسمي صادرة عن الغرفة التجارية الصناعية بمكة المكرمة.',
    'cert-chamber-valid': 'رقم الاشتراك: 7033475166',
    
    'lbl-member-no': 'رقم العضوية:',
    'lbl-cr-no': 'رقم السجل:',
    'lbl-vat-no': 'الرقم الضريبي:',
    'lbl-gosi-sub': 'رقم الاشتراك:',
    'lbl-qiwa-cert': 'رقم الشهادة:',
    'lbl-chamber-file': 'رقم العضوية:',
    'lbl-verify': 'فحص الوثيقة',
    
    'addr-title': 'إثبات العنوان الوطني الرسمي للمؤسسة',
    'addr-desc': '5473 شارع محمد بن علوان التونسي، 7301 حي الراشدية، مكة المكرمة 24275، المملكة العربية السعودية',
    
    'gal-pill': 'معرض الأعمال الميدانية',
    'gal-headline': 'توثيق ميداني لمراحل تنفيذ الأبراج والإنشاءات',
    'gal-sub': 'لقطات حية توثق أعمال الحفر وصب القواعد، تجميع الهياكل الشبكية، ورفع الأبراج العملاقة بالأوناش التلسكوبية وسحب الكابلات.',
    'gal-1-title': 'أعمال القواعد الخرسانية لأبراج النقل',
    'gal-1-desc': 'تجميع شبكات حديد التسليح وصب القواعد الخرسانية لأبراج النقل 380 و500 ك.ف.',
    'gal-2-title': 'تجميع الهيكل الفولاذي الشبكي للأبراج',
    'gal-2-desc': 'أعمال التجميع الميكانيكي على الأرض ومعايرة العزم قبل الرفع بالأوناش.',
    'gal-3-title': 'نصب ورفع الأبراج بالأوناش التلسكوبية',
    'gal-3-desc': 'أوناش ثقيلة متعددة الأطنان لرفع أجزاء الأبراج والقمم تحت رقابة أمنية مشددة.',
    'gal-4-title': 'سحب وشد الموصلات وكابلات OPGW',
    'gal-4-desc': 'عمليات السحب بالروافع وتعديل الترخيم وتوصيل كابلات الألياف البصرية.',
    'gal-5-title': 'البنية المدنية لمحطات التحويل الكهربائي',
    'gal-5-desc': 'قواعد المحولات الكهربائية وخنادق الكابلات ومباني التحكم في المواقع الصحراوية.',
    'gal-6-title': 'تهيئة مواقع مشاريع الطاقة الشمسية',
    'gal-6-desc': 'أعمال التسوية الترابية وغرس القواعد ومسارات الربط بمحطات الطاقة الشمسية.',
    
    'team-pill': 'القيادة الفنية والإدارية',
    'team-headline': 'فريق القيادة والإدارة الفنية والمالية',
    'team-sub': 'يقود مؤسسة الأفكار المتفردة نخبة من الكفاءات الإدارية والهندسية المتخصصة في إدارة وتنسيق مشاريع خطوط النقل والإنشاءات والمالية.',
    'team-1-badge': 'تنسيق المشاريع',
    'team-1-name': 'ثاقب الله',
    'team-1-title': 'منسق المشاريع',
    'team-1-bio': 'تنسيق العمليات الميدانية واللوجستية وجداول التنفيذ الفنية وحشد الكوادر في مواقع خطوط النقل.',
    'team-2-badge': 'المالية والحسابات',
    'team-2-name': 'يوسف عابد الجعيد',
    'team-2-title': 'رئيس قسم الحسابات والمالية',
    'team-2-bio': 'إدارة التخطيط المالي والمحاسبي، إعداد ميزانيات المشاريع، ومتابعة الامتثال المالي والضريبي بالمملكة.',
    'team-3-badge': 'الإدارة الهندسية',
    'team-3-name': 'المهندس / إكرام الله',
    'team-3-title': 'المدير التنفيذي للإدارة',
    'team-3-bio': 'قيادة التنفيذ الشامل للمشاريع، تركيب الأبراج الفولاذية لخطوط 380-765 ك.ف وسحب كابلات OPGW وضمان الجودة.',
    
    'contact-pill': 'تواصل معنا وطلب التسعير',
    'contact-headline': 'جاهزون لمناقشة متطلبات مشروعكم القادم',
    'contact-sub': 'تواصل مباشرة مع إدارتنا التنفيذية أو أرسل استفسارك للحصول على عرض فني ومالي مفصل لمشروعك خلال 24 ساعة.',
    'hq-title': 'المقر الرئيسي للمؤسسة',
    'hq-address': '5473 شارع محمد بن علوان التونسي، 7301 حي الراشدية، مكة المكرمة 24275، المملكة العربية السعودية',
    'calc-title': 'مقدر تكاليف ونطاق خطوط النقل السريع',
    'calc-voltage': 'الجهد الكهربائي:',
    'calc-length': 'الطول التقريبي (كم):',
    'calc-towers-lbl': 'تقدير الأبراج التقريبي:',
    'form-title': 'طلب عرض أسعار واستفسار فني',
    'form-sub': 'يرجى ملء النموذج أدناه وسيتم التواصل معكم من قبل مهندسينا المختصين فوراً.',
    'form-lbl-name': 'الاسم الكامل *',
    'form-lbl-company': 'اسم الشركة / الجهة *',
    'form-lbl-email': 'البريد الإلكتروني *',
    'form-lbl-phone': 'رقم الجوال للتواصل *',
    'form-lbl-domain': 'الخدمة أو التخصص المطلوب *',
    'form-lbl-msg': 'تفاصيل المشروع ونطاق العمل',
    'btn-submit-inquiry': 'إرسال طلب التسعير الفوري',
    'msg-success-title': 'تم استلام طلبكم بنجاح!',
    'msg-success-desc': 'شكراً لتواصلكم مع مؤسسة الأفكار المتفردة للمقاولات. سيتواصل معكم فريقنا الفني خلال 24 ساعة.',
    
    'ft-brand': 'مؤسسة الأفكار المتفردة',
    'ft-brand-sub': 'للمقاولات وتوصيل التيار الكهربائي',
    'ft-desc': 'متخصصون في إنشاء خطوط النقل الهوائية فائقة الجهد، الأعمال المدنية، شبكات المياه ومشاريع الطاقة المتجددة في جميع أنحاء المملكة العربية السعودية.',
    'ft-quick-links': 'روابط سريعة',
    'ft-capabilities': 'التخصصات',
    'ft-contact-title': 'التواصل وعروض الأسعار',
    'ft-city': 'مكة المكرمة، المملكة العربية السعودية',
    'ft-quote-box-title': 'هل لديك مشروع في بالك؟',
    'ft-quote-box-desc': 'دعنا نعمل معاً لبناء بنية تحتية مستدامة.',
    'ft-motto': 'أفراد آمنون | عمل متقن | مستقبل مستدام',
    
    'quote-modal-title': 'طلب عرض أسعار سريع (RFQ)',
    'form-lbl-notes': 'ملاحظات أو مواصفات إضافية',
    'btn-submit-quote': 'إرسال طلب التسعيرة',
    'quote-success-title': 'تم استلام طلبكم بنجاح!',
    'quote-success-desc': 'سيتواصل معكم كبير المهندسين خلال وقت وجيز.'
  }
};

// 2. Equipment Inventory Database (From PDF Page 26)
const equipmentList = [
  { id: 1, nameEn: "Heavy Mobile Telescopic Cranes", nameAr: "أوناش تلسكوبية متنقلة ثقيلة", quantity: "Multi-Fleet", category: "Heavy Lifting" },
  { id: 2, nameEn: "Site Transport Pick Up Vehicles", nameAr: "سيارات نقل وتوزيع بيك آب ميدانية", quantity: "6 Units", category: "Heavy Lifting" },
  { id: 3, nameEn: "Italian Steel/Synthetic Ropes 20mm", nameAr: "حبال سحب إيطالية معتمدة 20 ملم", quantity: "10 Bundles", category: "Rigging & Stringing" },
  { id: 4, nameEn: "Italian Steel/Synthetic Ropes 18mm", nameAr: "حبال سحب إيطالية معتمدة 18 ملم", quantity: "10 Bundles", category: "Rigging & Stringing" },
  { id: 5, nameEn: "Italian Steel/Synthetic Ropes 22mm", nameAr: "حبال سحب إيطالية معتمدة 22 ملم", quantity: "4 Bundles", category: "Rigging & Stringing" },
  { id: 6, nameEn: "Certified Lifting Belts (5 Ton)", nameAr: "أحزمة رفع معتمدة حمولة 5 طن", quantity: "5 Units", category: "Rigging & Stringing" },
  { id: 7, nameEn: "Certified Lifting Belts (10 Ton)", nameAr: "أحزمة رفع معتمدة حمولة 10 طن", quantity: "5 Units", category: "Rigging & Stringing" },
  { id: 8, nameEn: "Complete Tower Erection Tool Sets", nameAr: "أطقم أدوات تجميع ونصب الأبراج المتكاملة", quantity: "Project Complete", category: "Erection Tools" },
  { id: 9, nameEn: "Full Body Harness Belts & Fall Arresters", nameAr: "أحزمة أمان لكامل الجسم مع موانع سقوط", quantity: "150+ Sets", category: "HSE & Safety" },
  { id: 10, nameEn: "Safety Shoes & PPE Comprehensive Kits", nameAr: "أحذية سلامة وأطقم وقاية شخصية متكاملة", quantity: "150+ Kits", category: "HSE & Safety" },
  { id: 11, nameEn: "Calibrated Torque Wrenches & Spanners", nameAr: "مفاتيح عزم معايرة ومعدات ربط الصواميل", quantity: "100+ Units", category: "Erection Tools" },
  { id: 12, nameEn: "Insulator Shielings & Stringing Blocks", nameAr: "بكرات ومعدات حماية العوازل والشد", quantity: "50+ Sets", category: "Rigging & Stringing" },
  { id: 13, nameEn: "Site Accommodation & Emergency Tents", nameAr: "خيام ميدانية لإيواء الفرق والطوارئ", quantity: "10 Units", category: "HSE & Safety" },
  { id: 14, nameEn: "Fully Stocked First Aid Emergency Boxes", nameAr: "حقائب إسعافات أولية متطورة للمواقع", quantity: "10 Units", category: "HSE & Safety" },
  { id: 15, nameEn: "T4 Heavy Tension Pullers (3.2 Ton)", nameAr: "روافع سحب وشد هيدروليكية T4 حمولة 3.2 طن", quantity: "4 Units", category: "Rigging & Stringing" },
  { id: 16, nameEn: "Chain Block 0.75 Ton", nameAr: "روافع جنزير حمولة 0.75 طن", quantity: "4 Units", category: "Rigging & Stringing" },
  { id: 17, nameEn: "Chain Block 5.0 Ton", nameAr: "روافع جنزير حمولة 5.0 طن", quantity: "4 Units", category: "Rigging & Stringing" },
  { id: 18, nameEn: "Chain Block 3.0 Ton", nameAr: "روافع جنزير حمولة 3.0 طن", quantity: "4 Units", category: "Rigging & Stringing" },
  { id: 19, nameEn: "Chain Block 1.5 Ton", nameAr: "روافع جنزير حمولة 1.5 طن", quantity: "4 Units", category: "Rigging & Stringing" },
  { id: 20, nameEn: "Diesel Generator Power Sets", nameAr: "مولدات كهرباء ديزل ميدانية", quantity: "2 Units", category: "Foundation & Civil" },
  { id: 21, nameEn: "Hanging Ropes (50m, 70m, 100m Lengths)", nameAr: "حبال تعليق هوائية (50م، 70م، 100م)", quantity: "16 Bundles", category: "Rigging & Stringing" },
  { id: 22, nameEn: "Industrial Angle Grinders & Cutters", nameAr: "صوارخ ومعدات قطع وتجليخ صناعية", quantity: "5 Units", category: "Erection Tools" },
  { id: 23, nameEn: "Hilti Compressor & Earth Drill Rig", nameAr: "ضاغط وحفار أرضي معتمد من هيلتي Hilti", quantity: "1 Unit", category: "Foundation & Civil" },
  { id: 24, nameEn: "Vertical Life Line Safety Systems", nameAr: "أنظمة حبال الحياة الرأسية لحماية المتسلقين", quantity: "14 Sets", category: "HSE & Safety" },
  { id: 25, nameEn: "Form Box 380kV S1N Tower Foundation Sets", nameAr: "قوالب صب خرسانة لقواعد أبراج 380 ك.ف S1N", quantity: "6 Sets", category: "Foundation & Civil" }
];

// 3. Render Equipment Grid
function renderEquipment(category = 'All') {
  const container = document.getElementById('equipment-grid');
  if (!container) return;

  const isAr = currentLang === 'ar';
  const filtered = category === 'All' 
    ? equipmentList 
    : equipmentList.filter(item => item.category === category);

  container.innerHTML = filtered.map(item => `
    <div class="bg-slate-50 p-4 rounded-xl border border-slate-200/90 hover:border-emerald-500/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-between text-start group hover:-translate-y-1">
      <div class="space-y-2">
        <div class="flex items-center justify-between">
          <span class="text-[10px] font-bold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200 uppercase tracking-wider">
            ${item.category}
          </span>
          <span class="text-xs font-mono font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-md">
            ${item.quantity}
          </span>
        </div>
        <h3 class="font-heading font-bold text-sm text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
          ${isAr ? item.nameAr : item.nameEn}
        </h3>
      </div>
      <div class="pt-3 mt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500">
        <span class="flex items-center gap-1 text-emerald-600">
          <i data-lucide="check-circle" class="w-3.5 h-3.5"></i>
          <span>${isAr ? 'جاهز للاستخدام الفوري' : 'Site Certified'}</span>
        </span>
        <span class="font-mono text-slate-400">ID #${item.id.toString().padStart(2, '0')}</span>
      </div>
    </div>
  `).join('');

  if (window.lucide) {
    lucide.createIcons();
  }
}

// 4. Filter Equipment Tabs
function filterEquipment(category, btnElement) {
  document.querySelectorAll('.eq-tab').forEach(b => {
    b.classList.remove('active', 'bg-emerald-600', 'text-white', 'shadow-sm');
    b.classList.add('bg-slate-100', 'text-slate-700');
  });

  if (btnElement) {
    btnElement.classList.add('active', 'bg-emerald-600', 'text-white', 'shadow-sm');
    btnElement.classList.remove('bg-slate-100', 'text-slate-700');
  }

  renderEquipment(category);
}

// 5. Filter Projects
function filterProjects(category, btnElement) {
  document.querySelectorAll('.proj-tab').forEach(b => {
    b.classList.remove('active', 'bg-emerald-500', 'text-slate-950');
    b.classList.add('bg-slate-800', 'text-slate-300');
  });

  if (btnElement) {
    btnElement.classList.add('active', 'bg-emerald-500', 'text-slate-950');
    btnElement.classList.remove('bg-slate-800', 'text-slate-300');
  }

  const items = document.querySelectorAll('.project-item');
  items.forEach(item => {
    if (category === 'all' || item.getAttribute('data-category') === category) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
}

// 6. Interactive Calculator Update
function updateCalc() {
  const kmInput = document.getElementById('calc-km-input');
  const resultSpan = document.getElementById('calc-result');
  if (!kmInput || !resultSpan) return;

  const km = Number(kmInput.value) || 1;
  const towers = Math.ceil(km * 2.8);
  const isAr = currentLang === 'ar';

  if (isAr) {
    resultSpan.textContent = `~ ${towers} برجاً (بمسافات 350م)`;
  } else {
    resultSpan.textContent = `~ ${towers} Towers (350m Spans)`;
  }
}

// 7. Toggle Language
function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  const isAr = currentLang === 'ar';

  document.documentElement.dir = isAr ? 'rtl' : 'ltr';
  document.documentElement.lang = currentLang;
  
  // Update toggle button label
  const btnText = document.getElementById('lang-btn-text');
  if (btnText) {
    btnText.textContent = isAr ? 'English' : 'عربي';
  }

  // Update all elements with data-i18n
  const dict = translations[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Re-render equipment grid in new language
  renderEquipment();
  updateCalc();
}

// 8. Mobile Menu Toggle
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}

// 9. Service Modal Details
const serviceData = {
  power: {
    titleEn: 'Power & Transmission Lines (OHTL)',
    titleAr: 'الطاقة وخطوط النقل الكهربائي (OHTL)',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=80',
    descEn: 'Al-Afkar Al-Mutafaredah is a leader in OHTL engineering in Saudi Arabia. From deep desert corridors to mountainous terrains, our certified riggers execute tower foundations, tower assembly, crane hoisting, OPGW stringing, and conductor sagging under the most stringent SEC and international specifications.',
    descAr: 'تعد مؤسسة الأفكار المتفردة رائدة في هندسة خطوط النقل الهوائية بالمملكة، حيث تنفذ فرقنا المتخصصة أعمال الأساسات والتجميع والرفع بالأوناش وسحب موصلات الطاقة وكابلات OPGW وفق أحدث مواصفات الشركة السعودية للكهرباء والمعايير العالمية.',
    bulletsEn: ['Overhead Transmission Lines (110kV – 765kV)', 'Tower Assembly & Crane Erection', 'Conductor & OPGW Stringing', 'Paul Nut, Insulators & Hardware Tightening', 'Emergency Stringing & Rehabilitation'],
    bulletsAr: ['خطوط النقل الهوائية من 110 إلى 765 ك.ف', 'تجميع ونصب الأبراج بالأوناش', 'سحب وشد الموصلات وكابلات الألياف OPGW', 'تركيب العوازل وصواميل الأمان (Paul Nut)', 'أعمال الطوارئ وتأهيل الخطوط القائمة']
  },
  civil: {
    titleEn: 'Civil Construction & Substation Works',
    titleAr: 'الإنشاءات والأعمال المدنية ومحطات التحويل',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb180c5f7?auto=format&fit=crop&w=1000&q=80',
    descEn: 'Our civil engineering division operates heavy-duty formwork sets (including Form Box 380kV S1N systems), concrete pumps, and compaction machinery to build resilient foundations tailored to complex geotechnical soil profiles throughout KSA.',
    descAr: 'يمتلك قسم الأعمال المدنية أحدث قوالب الشدات المعتمدة (بما فيها نماذج 380 ك.ف S1N) ومعدات دمك التربة وصب الخرسانة لتنفيذ قواعد صلبة تقاوم العوامل الجوية وطبيعة التربة المختلفة في كافة مناطق المملكة.',
    bulletsEn: ['Tower Foundation Civil Works & Concrete Footings', 'Substation Control Building Foundations', 'Deep Excavation, Trenching & Backfilling', 'Form Box 380kV S1N Certified Formwork', 'Access Roads & Industrial Site Preparation'],
    bulletsAr: ['القواعد الخرسانية لأبراج النقل وصب الأساسات', 'قواعد مباني المحطات الفرعية والتحكم', 'الحفر العميق، تسوية التربة والردم المعتمد', 'قوالب صب معتمدة 380 ك.ف S1N', 'شق وتجهيز شبكة الطرق الميدانية']
  },
  water: {
    titleEn: 'Water Pipeline & Civic Infrastructure',
    titleAr: 'البنية التحتية لشبكات وأنابيب المياه',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80',
    descEn: 'We deliver turnkey water transmission and distribution pipelines utilizing heavy excavators, certified pipe fitters, and strict hydrostatic pressure testing protocols to guarantee zero leakage and long operational lifetimes.',
    descAr: 'ننفذ مشاريع تمديد خطوط المياه وشبكات التوزيع المتكاملة باستخدام حفارات متطورة وفنيين معتمدين وتطبيق اختبارات الضغط الهيدروستاتيكي لضمان أعلى مستويات الكفاءة والاعتمادية.',
    bulletsEn: ['Water Transmission Pipeline Installation & Welding', 'Water Utility Distribution Networks', 'Hydrostatic Pressure Testing & Disinfection', 'Valve Chamber & Concrete Manhole Construction', 'Trenching & Earthworks Bedding'],
    bulletsAr: ['تمديد ولحام أنابيب نقل المياه الرئيسية', 'إنشاء وتطوير شبكات التوزيع المائية', 'الاختبارات الهيدروستاتيكية والتعقيم المعتمد', 'بناء غرف الصمامات والمناهل الخرسانية', 'حفر الخنادق والفرشة الرملية المتدرجة']
  },
  renewable: {
    titleEn: 'Renewable Energy & Grid Interconnection',
    titleAr: 'الطاقة المتجددة والربط بالشبكة الوطنية',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1000&q=80',
    descEn: 'Supporting the Saudi Vision 2030 renewable targets, we provide site leveling, tracker foundation piling, cable trenches, and grid-connection OHTL corridors connecting giant solar parks directly to the national grid.',
    descAr: 'دعماً لمستهدفات رؤية المملكة 2030 للطاقة النظيفة، نقوم بتسوية مواقع مزارع الطاقة الشمسية وتثبيت الهياكل وحفر مسارات الكابلات ومد خطوط الربط الشبكي بالمحطات المركزية.',
    bulletsEn: ['Solar PV Farm Civil Works & Pile Foundations', 'Grid Connection Substation Links', 'Inverter Stations & MV/HV Cable Trenching', 'Access Roads, Grading & Perimeter Security', 'Balance of Plant (BOP) Civil & Electrical Support'],
    bulletsAr: ['الأعمال المدنية لمزارع الطاقة الشمسية والقواعد', 'بنية الربط الكهربائي مع الشبكة الوطنية', 'قواعد محطات العواكس وخنادق الكابلات', 'تسوية الأراضي، الطرق الداخلية والأسوار', 'أعمال الدعم المدني والكهربائي لمكونات المحطة']
  }
};

function openServiceModal(serviceKey) {
  const data = serviceData[serviceKey];
  if (!data) return;

  const isAr = currentLang === 'ar';
  const modalBox = document.getElementById('modal-box');
  const container = document.getElementById('modal-container');

  modalBox.innerHTML = `
    <div class="relative h-48 sm:h-56 bg-slate-950 flex-shrink-0">
      <img src="${data.image}" alt="${isAr ? data.titleAr : data.titleEn}" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
      <button onclick="closeGenericModal()" class="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800">
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>
      <div class="absolute bottom-4 left-6 right-6">
        <span class="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-800">
          ${isAr ? 'المجال الهندسي' : 'Specialized Engineering Domain'}
        </span>
        <h3 class="font-heading font-black text-xl sm:text-2xl text-white mt-1">
          ${isAr ? data.titleAr : data.titleEn}
        </h3>
      </div>
    </div>
    <div class="p-6 overflow-y-auto space-y-5 text-slate-300 text-xs sm:text-sm">
      <div>
        <h4 class="font-heading font-bold text-sm text-emerald-400 uppercase tracking-wider mb-2">
          ${isAr ? 'نظرة عامة على الخدمة والقدرات' : 'Service Overview & Technical Capabilities'}
        </h4>
        <p class="leading-relaxed text-slate-300">
          ${isAr ? data.descAr : data.descEn}
        </p>
      </div>
      <div>
        <h4 class="font-heading font-bold text-sm text-white uppercase tracking-wider mb-2">
          ${isAr ? 'نطاق الأعمال المشمول' : 'Comprehensive Scope of Works'}
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          ${(isAr ? data.bulletsAr : data.bulletsEn).map(b => `
            <div class="flex items-start gap-2 bg-slate-800/80 p-2.5 rounded-lg border border-slate-700/60">
              <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5"></i>
              <span class="text-xs text-slate-200">${b}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
    <div class="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-4 flex-shrink-0">
      <button onclick="closeGenericModal()" class="px-4 py-2 rounded-lg text-xs font-semibold text-slate-400 hover:text-white">
        ${isAr ? 'إغلاق' : 'Close'}
      </button>
      <button onclick="closeGenericModal(); openQuoteModal();" class="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider shadow-lg">
        <span>${isAr ? 'طلب عرض سعر لهذه الخدمة' : 'Request RFQ for this Service'}</span>
        <i data-lucide="arrow-right" class="w-3.5 h-3.5 rtl-flip"></i>
      </button>
    </div>
  `;

  container.classList.remove('hidden');
  if (window.lucide) lucide.createIcons();
}

// 10. Project Modal Details
const projectData = {
  p1: {
    titleEn: '765 kV Transmission Line Construction',
    titleAr: 'مشروع خط نقل الطاقة 765 ك.ف',
    locationEn: 'Riyadh, Saudi Arabia',
    locationAr: 'الرياض، المملكة العربية السعودية',
    voltage: '765 kV',
    categoryEn: 'Transmission Lines',
    categoryAr: 'خطوط نقل الطاقة',
    statusEn: 'Completed',
    statusAr: 'مكتمل بنجاح',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=80',
    descEn: 'Complete lattice steel tower erection, torqueing, insulator stringing, and OPGW conductor installation for the ultra-high voltage transmission corridor in the Central Region.',
    descAr: 'تنفيذ وتجميع ونصب الأبراج الفولاذية العملاقة وشد الموصلات وتثبيت كابلات الألياف البصرية لخط نقل الجهد الفائق بالمنطقة الوسطى.'
  },
  p2: {
    titleEn: '500 kV Transmission Line Tower Erection',
    titleAr: 'مشروع تركيب أبراج خط 500 ك.ف',
    locationEn: 'Tabuk, Saudi Arabia',
    locationAr: 'تبوك، المملكة العربية السعودية',
    voltage: '500 kV',
    categoryEn: 'Transmission Lines',
    categoryAr: 'خطوط نقل الطاقة',
    statusEn: 'Ongoing',
    statusAr: 'قيد التنفيذ الميداني',
    image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1000&q=80',
    descEn: 'Ongoing assembly and high-capacity mobile crane hoisting of heavy suspension and tension towers across rugged desert and mountainous terrain in Tabuk.',
    descAr: 'عمليات التجميع المستمرة ورفع الأبراج الثقيلة بالأوناش التلسكوبية عبر تضاريس تبوك الجبلية والصحراوية الوعرة بأعلى معايير السلامة.'
  },
  p3: {
    titleEn: 'Road & Substation Civil Works',
    titleAr: 'الأعمال المدنية للطرق ومحطة التحويل',
    locationEn: 'Al Qassim, Saudi Arabia',
    locationAr: 'القصيم، المملكة العربية السعودية',
    voltage: 'Civil/BOP',
    categoryEn: 'Civil Construction',
    categoryAr: 'الأعمال المدنية',
    statusEn: 'Completed',
    statusAr: 'مكتمل بنجاح',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb180c5f7?auto=format&fit=crop&w=1000&q=80',
    descEn: 'Comprehensive earthworks, reinforced concrete foundations for high-voltage switchgear buildings, and access road network construction in Al Qassim.',
    descAr: 'تنفيذ أعمال الحفر والردم الهندسي والقواعد الخرسانية المسلحة لمحطة التحويل وشق وتعبيد شبكة الطرق الميدانية بالقصيم.'
  },
  p4: {
    titleEn: 'Solar Power Grid Connection Infrastructure',
    titleAr: 'بنية الربط الشبكي لمشروع الطاقة الشمسية',
    locationEn: 'Riyadh Province, Saudi Arabia',
    locationAr: 'منطقة الرياض، المملكة العربية السعودية',
    voltage: '380 kV Link',
    categoryEn: 'Renewable Energy',
    categoryAr: 'الطاقة المتجددة',
    statusEn: 'Ongoing',
    statusAr: 'قيد التنفيذ الميداني',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1000&q=80',
    descEn: 'Civil works, cable trenches, transformer pad foundations, and overhead grid connection corridor integrating utility-scale solar generation into the grid.',
    descAr: 'أعمال البنية التحتية، خنادق الكابلات، وقواعد المحولات وخط الربط الهوائي لنقل الطاقة النظيفة من المحطة الشمسية إلى الشبكة العامة.'
  }
};

function openProjectModal(projectKey) {
  const data = projectData[projectKey];
  if (!data) return;

  const isAr = currentLang === 'ar';
  const modalBox = document.getElementById('modal-box');
  const container = document.getElementById('modal-container');

  modalBox.innerHTML = `
    <div class="relative h-52 bg-slate-950 flex-shrink-0">
      <img src="${data.image}" alt="${isAr ? data.titleAr : data.titleEn}" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
      <button onclick="closeGenericModal()" class="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-slate-300 hover:text-white">
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>
      <div class="absolute bottom-4 left-6 right-6">
        <div class="flex items-center gap-2 mb-1">
          <span class="text-xs font-mono font-bold bg-emerald-500 text-slate-950 px-2 py-0.5 rounded">
            ${data.voltage}
          </span>
          <span class="text-xs font-bold text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded">
            ${isAr ? data.categoryAr : data.categoryEn}
          </span>
        </div>
        <h3 class="font-heading font-black text-xl text-white">
          ${isAr ? data.titleAr : data.titleEn}
        </h3>
      </div>
    </div>
    <div class="p-6 overflow-y-auto space-y-4 text-slate-300 text-xs sm:text-sm">
      <div class="flex flex-wrap items-center gap-4 text-xs text-slate-400 bg-slate-800/60 p-3 rounded-xl border border-slate-700">
        <div class="flex items-center gap-1.5">
          <i data-lucide="map-pin" class="w-4 h-4 text-emerald-400"></i>
          <span>${isAr ? data.locationAr : data.locationEn}</span>
        </div>
        <div class="flex items-center gap-1.5">
          <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400"></i>
          <span>Status: ${isAr ? data.statusAr : data.statusEn}</span>
        </div>
      </div>
      <div>
        <h4 class="font-heading font-bold text-sm text-emerald-400 uppercase tracking-wider mb-1.5">
          ${isAr ? 'نطاق التنفيذ والمواصفات الفنية' : 'Project Scope & Execution Details'}
        </h4>
        <p class="leading-relaxed text-slate-300">
          ${isAr ? data.descAr : data.descEn}
        </p>
      </div>
    </div>
    <div class="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-4 flex-shrink-0">
      <button onclick="closeGenericModal()" class="px-4 py-2 rounded-lg text-xs font-semibold text-slate-400 hover:text-white">
        ${isAr ? 'إغلاق' : 'Close'}
      </button>
      <button onclick="closeGenericModal(); openQuoteModal();" class="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider shadow-lg">
        <span>${isAr ? 'طلب تنفيذ مشروع مماثل' : 'Inquire on Similar Project'}</span>
        <i data-lucide="arrow-right" class="w-3.5 h-3.5 rtl-flip"></i>
      </button>
    </div>
  `;

  container.classList.remove('hidden');
  if (window.lucide) lucide.createIcons();
}

// 11. Certificate Verification Modal
const certDetails = {
  sca: {
    titleEn: 'Saudi Contractors Authority (SCA)',
    titleAr: 'الهيئة السعودية للمقاولين (SCA)',
    id: '2010201069',
    validityEn: 'Valid until July 5, 2027',
    validityAr: 'سارية حتى 5 يوليو 2027',
    descEn: 'Official registration certificate issued by the Saudi Contractors Authority verifying professional contracting compliance and classification.',
    descAr: 'شهادة تسجيل وتصنيف رسمي صادرة عن الهيئة السعودية للمقاولين تثبت أهلية المؤسسة لتنفيذ مشاريع المقاولات والبنية التحتية.'
  },
  cr: {
    titleEn: 'Commercial Registration - Ministry of Commerce',
    titleAr: 'السجل التجاري - وزارة التجارة',
    id: '7033475166',
    validityEn: 'Active Record (Issued: 23/02/2023)',
    validityAr: 'سجل تجاري نشط ومحدث (تاريخ الإصدار: 23/02/2023)',
    descEn: 'National Unified Commercial Registration No. 7033475166 for Contracting & Power Infrastructure.',
    descAr: 'السجل التجاري الصادر برقم 7033475166 لأنشطة المقاولات العامة والطاقة وتوصيل التيار الكهربائي.'
  },
  zatca: {
    titleEn: 'ZATCA - VAT Registration Certificate',
    titleAr: 'هيئة الزكاة والضريبة والجمارك - ضريبة القيمة المضافة',
    id: '311571000700003',
    validityEn: 'Effective Registration',
    validityAr: 'شهادة ضريبية معتمدة وفعالة',
    descEn: 'Taxpayer certificate issued by ZATCA confirming registration under VAT No. 311571000700003.',
    descAr: 'شهادة تسجيل رسمية في ضريبة القيمة المضافة صادرة عن هيئة الزكاة والضريبة والجمارك.'
  },
  gosi: {
    titleEn: 'GOSI Occupational Health & Safety Certificate',
    titleAr: 'المؤسسة العامة للتأمينات - السلامة والصحة المهنية',
    id: '639561267 (Cert: 116872361)',
    validityEn: 'Active OHSE Compliance (Zero Injuries)',
    validityAr: 'سجل سلامة معتمد وخالٍ تماماً من الحوادث',
    descEn: 'Occupational Health and Safety compliance certificate with zero reported incidents and full insurance protection.',
    descAr: 'شهادة السلامة والصحة المهنية الصادرة عن التأمينات الاجتماعية بسجل مثالي خالٍ من الإصابات والحوادث.'
  },
  qiwa: {
    titleEn: 'QIWA & HRSD Saudization Certificate',
    titleAr: 'منصة قوى ووزارة الموارد البشرية - شهادة التوطين',
    id: '187950-18029901 (Facility: 13-2023478)',
    validityEn: 'Nitaqat Green Category A (33% Saudization)',
    validityAr: 'نطاق أخضر صغير فئة (أ) - نسبة توطين 33%',
    descEn: 'Official compliance certificate from the Ministry of Human Resources proving achievement of required nationalization ratios.',
    descAr: 'شهادة توطين معتمدة تثبت تحقيق نسب السعودة المطلوبة والالتزام بكافة برامج وزارة الموارد البشرية.'
  },
  chamber: {
    titleEn: 'Makkah Chamber of Commerce & Industry',
    titleAr: 'غرفة مكة المكرمة للتجارة والصناعة',
    id: '4031278384 (Sub: 7033475166)',
    validityEn: 'Active Chamber Membership',
    validityAr: 'عضوية معتمدة وسارية',
    descEn: 'Official Chamber of Commerce membership certificate verifying commercial and operational status in Makkah.',
    descAr: 'شهادة انتساب وتوثيق رسمي صادرة عن الغرفة التجارية الصناعية بمكة المكرمة.'
  }
};

function openCertModal(certKey) {
  const data = certDetails[certKey];
  if (!data) return;

  const isAr = currentLang === 'ar';
  const modalBox = document.getElementById('modal-box');
  const container = document.getElementById('modal-container');

  modalBox.innerHTML = `
    <div class="p-6 text-start space-y-5">
      <div class="flex items-center justify-between border-b border-slate-800 pb-4">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <i data-lucide="award" class="w-5 h-5"></i>
          </div>
          <div>
            <span class="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
              ${isAr ? 'بيانات التوثيق الحكومي الرسمي' : 'Official Saudi Accreditation'}
            </span>
            <h3 class="font-heading font-bold text-base text-white">
              ${isAr ? data.titleAr : data.titleEn}
            </h3>
          </div>
        </div>
        <button onclick="closeGenericModal()" class="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>
      </div>
      <div class="space-y-3 text-xs text-slate-300">
        <div class="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700 space-y-2">
          <div class="flex justify-between items-center">
            <span class="text-slate-400">${isAr ? 'اسم المنشأة:' : 'Establishment:'}</span>
            <span class="font-bold text-white text-end">${isAr ? 'مؤسسة الأفكار المتفردة للمقاولات' : 'Al-Afkar Al-Mutafaredah Est.'}</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-slate-400">${isAr ? 'رقم السجل / العضوية:' : 'Registration / ID:'}</span>
            <span class="font-mono font-bold text-emerald-400 bg-slate-900 px-2 py-0.5 rounded">
              ${data.id}
            </span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-slate-400">${isAr ? 'الحالة والصلاحية:' : 'Validity Status:'}</span>
            <span class="text-emerald-300 font-semibold">${isAr ? data.validityAr : data.validityEn}</span>
          </div>
        </div>
        <p class="text-xs text-slate-400 leading-relaxed">
          ${isAr ? data.descAr : data.descEn}
        </p>
        <div class="p-3 bg-emerald-950/50 border border-emerald-800/60 rounded-lg flex items-center gap-2 text-emerald-300 text-[11px]">
          <i data-lucide="shield-check" class="w-4 h-4 flex-shrink-0"></i>
          <span>
            ${isAr 
              ? 'تم التحقق من صحة هذه الوثيقة وفق أنظمة وتراخيص الهيئات الحكومية السعودية.'
              : 'Verified authentic credentials registered with official Saudi Government authorities.'
            }
          </span>
        </div>
      </div>
      <div class="pt-2 border-t border-slate-800 flex justify-end">
        <button onclick="closeGenericModal()" class="bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold px-4 py-2 rounded-lg">
          ${isAr ? 'إغلاق' : 'Close'}
        </button>
      </div>
    </div>
  `;

  container.classList.remove('hidden');
  if (window.lucide) lucide.createIcons();
}

function closeGenericModal() {
  const container = document.getElementById('modal-container');
  if (container) container.classList.add('hidden');
}

// 12. RFQ Quote Modal
function openQuoteModal() {
  const container = document.getElementById('quote-modal-container');
  if (container) container.classList.remove('hidden');
  if (window.lucide) lucide.createIcons();
}

function closeQuoteModal() {
  const container = document.getElementById('quote-modal-container');
  if (container) container.classList.add('hidden');
}

function handleQuoteSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('fast-rfq-form');
  const successMsg = document.getElementById('quote-success-msg');
  if (form) form.classList.add('hidden');
  if (successMsg) successMsg.classList.remove('hidden');
  if (window.lucide) lucide.createIcons();

  setTimeout(() => {
    closeQuoteModal();
    if (form) {
      form.reset();
      form.classList.remove('hidden');
    }
    if (successMsg) successMsg.classList.add('hidden');
  }, 4000);
}

function handleFormSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('contact-form');
  const successMsg = document.getElementById('form-success-msg');
  if (form) form.classList.add('hidden');
  if (successMsg) successMsg.classList.remove('hidden');
  if (window.lucide) lucide.createIcons();

  setTimeout(() => {
    if (form) {
      form.reset();
      form.classList.remove('hidden');
    }
    if (successMsg) successMsg.classList.add('hidden');
  }, 5000);
}

// 13. Gallery Lightbox
function openLightbox(category, title, imgSrc, desc) {
  const container = document.getElementById('lightbox-container');
  const img = document.getElementById('lightbox-img');
  const catSpan = document.getElementById('lightbox-cat');
  const titleH3 = document.getElementById('lightbox-title');
  const descP = document.getElementById('lightbox-desc');

  if (img) img.src = imgSrc;
  if (catSpan) catSpan.textContent = category;
  if (titleH3) titleH3.textContent = title;
  if (descP) descP.textContent = desc;

  if (container) container.classList.remove('hidden');
  if (window.lucide) lucide.createIcons();
}

function closeLightbox() {
  const container = document.getElementById('lightbox-container');
  if (container) container.classList.add('hidden');
}

// 14. Active Scroll Spy & Navigation Highlight
function handleNavScroll() {
  const navbar = document.getElementById('main-navbar');
  if (navbar) {
    if (window.scrollY > 40) {
      navbar.classList.add('shadow-xl', 'bg-[#0b192c]');
      navbar.classList.remove('bg-[#0b192c]/95');
    } else {
      navbar.classList.remove('shadow-xl');
      navbar.classList.add('bg-[#0b192c]/95');
    }
  }

  const sections = ['home', 'about', 'services', 'projects', 'equipment', 'hse', 'team', 'gallery', 'contact'];
  let currentSection = '';

  for (const section of sections) {
    const el = document.getElementById(section);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= 140 && rect.bottom >= 140) {
        currentSection = section;
        break;
      }
    }
  }

  if (currentSection) {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      const href = item.getAttribute('href');
      if (href === `#${currentSection}`) {
        item.classList.add('active', 'text-emerald-400', 'font-bold');
        item.classList.remove('text-slate-300', 'font-medium');
      } else {
        item.classList.remove('active', 'text-emerald-400', 'font-bold');
        item.classList.add('text-slate-300', 'font-medium');
      }
    });
  }
}

// 15. Initialize on Window Load
window.addEventListener('DOMContentLoaded', () => {
  renderEquipment();
  updateCalc();
  if (window.lucide) {
    lucide.createIcons();
  }
  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();
});

