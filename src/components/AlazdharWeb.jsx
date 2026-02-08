import React, { useState, useEffect } from "react";
import { 
  AlertTriangle, 
  XCircle, 
  Users,
  Smartphone,
  Globe,
  Code,
  Palette,
  TrendingDown,
  EyeOff,
  Database,
  Layout,
  Lock,
  Zap,
  RefreshCw,
  Languages // إضافة أيقونة اللغة
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useTranslation } from 'react-i18next';

const SiteAnalysis = () => {
  const [activeSection, setActiveSection] = useState("design");
  const { lang, toggleLanguage } = useLanguage();
  const { t } = useTranslation();

  // تأثير عند التمرير
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-tr from-gray-50 to-blue-50 min-h-screen font-sans">
      
      {/* زر تبديل اللغة */}
      <button
        onClick={toggleLanguage}
        className="fixed top-6 left-6 z-50 flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-gray-300 rounded-full px-4 py-2 md:px-5 md:py-2.5 text-gray-800 hover:bg-white hover:scale-105 transition-all duration-300 group shadow-lg"
        aria-label={t('changeLanguage')}
      >
        <Languages size={20} className="group-hover:rotate-180 transition-transform duration-500" />
        <span className="font-bold text-sm md:text-base">
          {lang === "ar" ? t('english') : t('arabic')}
        </span>
        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center text-xs font-bold text-white">
          {lang === "ar" ? "EN" : "AR"}
        </div>
      </button>
      
      {/* ================= Hero Section ================= */}
      <section className="py-10 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-100 to-orange-100 px-6 py-3 rounded-full ">
            <AlertTriangle className="text-red-600" size={24} />
            <span className="font-bold text-gray-800">{t('analysisFrom')} {t('opticalDigitization')}</span>
          </div>  
        </div>
      </section>

      {/* ================= Analysis Section ================= */}
      <section id="analysis" className="py-2 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('currentSiteAnalysis')} <span className="text-blue-600">{t('current')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('comprehensiveAnalysis')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Design Flaws */}
          <div 
            className="bg-gradient-to-br from-white to-red-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-red-100 hover:border-red-200 group"
            onMouseEnter={() => setActiveSection("design")}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-100 to-red-50 flex items-center justify-center ml-4">
                <Palette className="w-6 h-6 text-red-600" />
              </div>
              <div >
                <h3 className="text-2xl font-bold text-gray-900">{t('outdatedDesign')}</h3>
                <div className="mt-2">
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-bold">
                    {t('highSeverity')}
                  </span>
                </div>
              </div>
            </div>
            <ul className="space-y-4 text-gray-700 text-lg pr-6">
              {[
                t('designPoint1'),
                t('designPoint2'),
                t('designPoint3'),
                t('designPoint4'),
                t('designPoint5')
              ].map((item, index) => (
                <li key={index} className="flex items-start group-hover:pr-2 transition-all duration-300">
                  <XCircle className="ml-3 text-red-500 mt-1 flex-shrink-0" size={20} />
                  <span className="">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* UX Issues */}
          <div 
            className="bg-gradient-to-br from-white to-orange-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-orange-100 hover:border-orange-200 group"
            onMouseEnter={() => setActiveSection("ux")}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-100 to-orange-50 flex items-center justify-center ml-4">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <div className="">
                <h3 className="text-2xl font-bold text-gray-900">{t('poorUserExperience')}</h3>
                <div className="mt-2">
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-bold">
                    {t('affectsConversions')}
                  </span>
                </div>
              </div>
            </div>
            <ul className="space-y-4 text-gray-700 text-lg pr-6">
              {[
                t('uxPoint1'),
                t('uxPoint2'),
                t('uxPoint3'),
                t('uxPoint4'),
                t('uxPoint5')
              ].map((item, index) => (
                <li key={index} className="flex items-start group-hover:pr-2 transition-all duration-300">
                  <XCircle className="ml-3 text-orange-500 mt-1 flex-shrink-0" size={20} />
                  <span className="text-right">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Problems */}
          <div 
            className="bg-gradient-to-br from-white to-purple-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-purple-100 hover:border-purple-200 group"
            onMouseEnter={() => setActiveSection("tech")}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-100 to-purple-50 flex items-center justify-center ml-4">
                <Code className="w-6 h-6 text-purple-600" />
              </div>
              <div className="">
                <h3 className="text-2xl font-bold text-gray-900">{t('seriousTechnicalProblems')}</h3>
                <div className="mt-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-bold">
                    {t('securityRisk')}
                  </span>
                </div>
              </div>
            </div>
            <ul className="space-y-4 text-gray-700 text-lg pr-6">
              {[
                t('techPoint1'),
                t('techPoint2'),
                t('techPoint3'),
                t('techPoint4'),
                t('techPoint5')
              ].map((item, index) => (
                <li key={index} className="flex items-start group-hover:pr-2 transition-all duration-300">
                  <XCircle className="ml-3 text-purple-500 mt-1 flex-shrink-0" size={20} />
                  <span className="text-right">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* SEO & Visibility */}
          <div 
            className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-amber-100 hover:border-amber-200 group"
            onMouseEnter={() => setActiveSection("seo")}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-amber-100 to-amber-50 flex items-center justify-center ml-4">
                <EyeOff className="w-6 h-6 text-amber-600" />
              </div>
              <div className="">
                <h3 className="text-2xl font-bold text-gray-900">{t('poorVisibilityAndAccess')}</h3>
                <div className="mt-2">
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-bold">
                    {t('lossOfCustomers')}
                  </span>
                </div>
              </div>
            </div>
            <ul className="space-y-4 text-gray-700 text-lg pr-6">
              {[
                t('seoPoint1'),
                t('seoPoint2')
              ].map((item, index) => (
                <li key={index} className="flex items-start group-hover:pr-2 transition-all duration-300">
                  <XCircle className="ml-3 text-amber-500 mt-1 flex-shrink-0" size={20} />
                  <span className="text-right">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= Performance Metrics ================= */}
      <section id="metrics" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {t('currentSitePerformanceIndicators')}
            </h3>
            <p className="text-xl text-gray-600">
              {t('allIndicatorsBelowRequiredLevel')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Zap className="text-red-500" size={24} />, label: t('loadingSpeed'), value: "3.2s", target: "<2s", color: "text-red-600" },
              { icon: <Users className="text-orange-500" size={24} />, label: t('bounceRate'), value: "68%", target: "<40%", color: "text-orange-600" },
              { icon: <Smartphone className="text-purple-500" size={24} />, label: t('mobileCompatibility'), value: "43%", target: "100%", color: "text-purple-600" },
              { icon: <TrendingDown className="text-amber-500" size={24} />, label: t('userExperienceScore'), value: "2.1/10", target: "8+/10", color: "text-amber-600" }
            ].map((metric, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex justify-center mb-4">
                  {metric.icon}
                </div>
                <div className="text-center">
                  <div className={`text-3xl font-bold ${metric.color} mb-2`}>{metric.value}</div>
                  <div className="text-gray-700 font-medium mb-1">{metric.label}</div>
                  <div className="text-sm text-gray-500">{t('target')}: {metric.target}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Integration Problems ================= */}
      <section id="integration" className="py-20 px-6 bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {t('integrationAndMergingProblems')}
            </h3>
            <p className="text-xl text-gray-600">
              {t('digitalIsolationOfCurrentSite')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Database className="text-blue-600" size={32} />,
                title: t('noERPIntegration'),
                description: t('noERPIntegrationDesc')
              },
              {
                icon: <Layout className="text-green-600" size={32} />,
                title: t('noLMSIntegration'),
                description: t('noLMSIntegrationDesc')
              },
              {
                icon: <Globe className="text-purple-600" size={32} />,
                title: t('isolatedSite'),
                description: t('isolatedSiteDesc')
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-xl bg-gray-50">
                    {item.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CSS Animations ================= */}
      <style jsx global>{`
        .rtl {
          direction: rtl;
          text-align: right;
        }
        
        .ltr {
          direction: ltr;
          text-align: left;
        }
        
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #ef4444, #f97316);
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #dc2626, #ea580c);
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
        
        .group:hover .group-hover:scale-105 {
          transform: scale(1.05);
        }
        
        .transition-all {
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default SiteAnalysis;