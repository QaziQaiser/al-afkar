import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Stats from './components/Stats';
import WhyChooseUs from './components/WhyChooseUs';
import Equipment from './components/Equipment';
import Accreditations from './components/Accreditations';
import Gallery from './components/Gallery';
import Team from './components/Team';
import ContactQuote from './components/ContactQuote';
import Footer from './components/Footer';
import { 
  ServiceModal, 
  ProjectModal, 
  CertModal, 
  QuoteModal, 
  GalleryLightboxModal 
} from './components/Modals';

export default function App() {
  const [lang, setLang] = useState('en'); // 'en' or 'ar'
  const [selectedService, setSelectedService] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // Synchronize document direction and title with selected language
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    if (lang === 'ar') {
      document.title = "مؤسسة الأفكار المتفردة للمقاولات | خطوط النقل الهوائية والأعمال المدنية";
    } else {
      document.title = "Al-Afkar Al-Mutafaredah Est. | Power Infrastructure & Civil Contracting";
    }
  }, [lang]);

  return (
    <div className={`min-h-screen bg-[#f8fafc] text-slate-900 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
      
      {/* 1. Header with Top Utility Bar & Sticky Navbar */}
      <Header 
        lang={lang} 
        setLang={setLang} 
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
      />

      <main>
        {/* 2. Hero Section */}
        <Hero 
          lang={lang} 
          onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        />

        {/* 3. About Us Section */}
        <About 
          lang={lang} 
          onOpenCertModal={() => setSelectedCert({
            id: 'sca',
            nameEn: 'Saudi Contractors Authority (SCA)',
            nameAr: 'الهيئة السعودية للمقاولين',
            memberNo: '2010201069',
            validity: 'Valid until July 5, 2027',
            validityAr: 'سارية حتى 5 يوليو 2027',
            descriptionEn: 'Officially registered contractor under the Saudi Contractors Authority.',
            descriptionAr: 'شهادة عضوية رسمية صادرة من الهيئة السعودية للمقاولين.'
          })}
        />

        {/* 4. Comprehensive Services Section (4-Card Grid) */}
        <Services 
          lang={lang} 
          onSelectService={(srv) => setSelectedService(srv)}
        />

        {/* 5. Featured Projects Section */}
        <Projects 
          lang={lang} 
          onSelectProject={(proj) => setSelectedProject(proj)}
          onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        />

        {/* 6. Impact Counter Statistics Banner */}
        <Stats lang={lang} />

        {/* 7. Why Choose Us (6 Value Pillars + Team Banner) */}
        <WhyChooseUs lang={lang} />

        {/* 8. Dedicated Equipment & Machinery Fleet */}
        <Equipment 
          lang={lang} 
          onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        />

        {/* 9. Accreditations & Government Compliance Section */}
        <Accreditations 
          lang={lang} 
          onSelectCert={(cert) => setSelectedCert(cert)}
        />

        {/* 10. Gallery of Work */}
        <Gallery 
          lang={lang} 
          onSelectGalleryItem={(item) => setSelectedGalleryItem(item)}
        />

        {/* 11. Executive Leadership & Engineering Team */}
        <Team lang={lang} />

        {/* 12. Contact, RFQ Calculator & Inquiry Form */}
        <ContactQuote lang={lang} />
      </main>

      {/* 13. Comprehensive Footer */}
      <Footer 
        lang={lang} 
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
      />

      {/* Interactive Modals */}
      <ServiceModal 
        service={selectedService} 
        onClose={() => setSelectedService(null)} 
        lang={lang}
        onOpenQuote={() => setIsQuoteModalOpen(true)}
      />

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
        lang={lang}
        onOpenQuote={() => setIsQuoteModalOpen(true)}
      />

      <CertModal 
        cert={selectedCert} 
        onClose={() => setSelectedCert(null)} 
        lang={lang}
      />

      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
        lang={lang}
      />

      <GalleryLightboxModal 
        item={selectedGalleryItem} 
        onClose={() => setSelectedGalleryItem(null)} 
        lang={lang}
      />

    </div>
  );
}
