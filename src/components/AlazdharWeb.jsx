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
  RefreshCw
} from "lucide-react";

const SiteAnalysis = () => {
  const [activeSection, setActiveSection] = useState("design");

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
    <div className="bg-gradient-to-tr from-gray-50 to-blue-50 min-h-screen font-sans rtl">
      
      {/* ================= Hero Section ================= */}
      <section className="py-10 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-100 to-orange-100 px-6 py-3 rounded-full ">
            <AlertTriangle className="text-red-600" size={24} />
            <span className="font-bold text-gray-800">تحليل احترافي من OPTICAL DIGITIZATION</span>
          </div>  
        </div>
      </section>

      {/* ================= Analysis Section ================= */}
      <section id="analysis" className="py-2 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            تحليل الموقع <span className="text-blue-600">الحالي</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            قمنا بتحليل شامل للموقع الحالي لتحديد نقاط الضعف وفرص التحسين
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Design Flaws */}
          <div 
            className="bg-gradient-to-br from-white to-red-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-red-100 hover:border-red-200 group"
            onMouseEnter={() => setActiveSection("design")}
          >
            <div className="flex items-center justify-end mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-100 to-red-50 flex items-center justify-center ml-4">
                <Palette className="w-6 h-6 text-red-600" />
              </div>
              <div className="text-right">
                <h3 className="text-2xl font-bold text-gray-900">تصميم قديم وعتيق</h3>
                <div className="mt-2">
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-bold">
                    خطورة عالية
                  </span>
                </div>
              </div>
            </div>
            <ul className="space-y-4 text-gray-700 text-lg pr-6">
              {[
                "تصميم يعود لأكثر من 10 سنوات - غير منسجم مع العصر",
                "ألوان باهتة ومملة - لا تجذب الانتباه",
                "خطوط صغيرة وغير واضحة - صعوبة في القراءة",
                "تخطيط فوضوي - عناصر مكدسة بلا ترتيب",
                "صور ذات جودة منخفضة - انطباع سيء للزوار"
              ].map((item, index) => (
                <li key={index} className="flex items-start group-hover:pr-2 transition-all duration-300">
                  <XCircle className="ml-3 text-red-500 mt-1 flex-shrink-0" size={20} />
                  <span className="text-right">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* UX Issues */}
          <div 
            className="bg-gradient-to-br from-white to-orange-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-orange-100 hover:border-orange-200 group"
            onMouseEnter={() => setActiveSection("ux")}
          >
            <div className="flex items-center justify-end mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-100 to-orange-50 flex items-center justify-center ml-4">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <div className="text-right">
                <h3 className="text-2xl font-bold text-gray-900">تجربة مستخدم سيئة</h3>
                <div className="mt-2">
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-bold">
                    تؤثر على التحويلات
                  </span>
                </div>
              </div>
            </div>
            <ul className="space-y-4 text-gray-700 text-lg pr-6">
              {[
                "تنقل معقد - المستخدم يضيع بين الصفحات",
                "لا يوجد إرشاد واضح - زائر الموقع يتوه",
                "أزرار غير واضحة - ضعف في Calls to Action",
                "تحميل بطيء - صبر المستخدم ينفذ",
                "غير متكامل مع الموبايل - فقدان 70% من الزوار"
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
            <div className="flex items-center justify-end mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-100 to-purple-50 flex items-center justify-center ml-4">
                <Code className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-right">
                <h3 className="text-2xl font-bold text-gray-900">مشاكل تقنية خطيرة</h3>
                <div className="mt-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-bold">
                    خطر أمني
                  </span>
                </div>
              </div>
            </div>
            <ul className="space-y-4 text-gray-700 text-lg pr-6">
              {[
                "كود قديم وغير آمن - ثغرات أمنية محتملة",
                "لا يوجد نظام SSL - بيانات غير مشفرة",
                "موقع ثابت فقط - لا يمكن تحديث المحتوى بسهولة",
                "لا يوجد تكامل مع أنظمة المعهد",
                "لا يوجد نسخ احتياطي - خطر فقدان البيانات"
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
            <div className="flex items-center justify-end mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-amber-100 to-amber-50 flex items-center justify-center ml-4">
                <EyeOff className="w-6 h-6 text-amber-600" />
              </div>
              <div className="text-right">
                <h3 className="text-2xl font-bold text-gray-900">ضعف الظهور والوصول</h3>
                <div className="mt-2">
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-bold">
                    فقدان العملاء
                  </span>
                </div>
              </div>
            </div>
            <ul className="space-y-4 text-gray-700 text-lg pr-6">
              {[
                "محتوى غير محسن - فقدان فرص التسويق",
                "عنوان URL غير صديق - يؤثر على الترتيب",
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
              مؤشرات أداء الموقع الحالي
            </h3>
            <p className="text-xl text-gray-600">
              جميع المؤشرات تحت المعدل المطلوب
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Zap className="text-red-500" size={24} />, label: "سرعة التحميل", value: "3.2s", target: "<2s", color: "text-red-600" },
              { icon: <Users className="text-orange-500" size={24} />, label: "معدل الارتداد", value: "68%", target: "<40%", color: "text-orange-600" },
              { icon: <Smartphone className="text-purple-500" size={24} />, label: "توافق الموبايل", value: "43%", target: "100%", color: "text-purple-600" },
              { icon: <TrendingDown className="text-amber-500" size={24} />, label: "تجربة المستخدم", value: "2.1/10", target: "8+/10", color: "text-amber-600" }
            ].map((metric, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex justify-center mb-4">
                  {metric.icon}
                </div>
                <div className="text-center">
                  <div className={`text-3xl font-bold ${metric.color} mb-2`}>{metric.value}</div>
                  <div className="text-gray-700 font-medium mb-1">{metric.label}</div>
                  <div className="text-sm text-gray-500">المستهدف: {metric.target}</div>
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
              مشاكل التكامل والاندماج
            </h3>
            <p className="text-xl text-gray-600">
              العزلة الرقمية التي يعاني منها الموقع الحالي
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Database className="text-blue-600" size={32} />,
                title: "لا تكامل مع ERP",
                description: "لا يوجد اتصال بين الموقع ونظام إدارة الموارد المؤسسية"
              },
              {
                icon: <Layout className="text-green-600" size={32} />,
                title: "لا تكامل مع LMS",
                description: "لا يوجد ربط مع نظام إدارة التعلم الإلكتروني"
              },
              {
                icon: <Globe className="text-purple-600" size={32} />,
                title: "موقع معزول",
                description: "لا يتكامل مع أي من أنظمة المعهد الأخرى"
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