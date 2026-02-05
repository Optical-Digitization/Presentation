import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  Zap, 
  Smartphone, 
  Cpu, 
  Shield, 
  Search, 
  Users,
  TrendingUp,
  CheckCircle,
  XCircle,
  RefreshCw,
  Layout,
  GitMerge,
  BarChart,
  Award,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight
} from 'lucide-react';

const ComparisonSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;
  const comparisonData = [
    {
      id: 1,
      category: "التصميم والواجهة",
      icon: <Layout />,
      oldSite: {
        description: "تصميم تقليدي ثابت",
        features: [
          "ألوان تقليدية بدون تدرجات",
          "تصميم غير تفاعلي",
          "صور ثابتة بدون حركة",
          "تخطيط قديم الطراز"
        ],
        rating: 3
      },
      newSite: {
        description: "تصميم عصري متطور",
        features: [
          "تدرجات لونية حديثة (Gradients)",
          "تفاعلات حركية متقدمة",
          "خلفيات متحركة ديناميكية",
          "تصميم مينيليست وأنيق"
        ],
        rating: 10
      },
      improvement: "تحسين بنسبة 233% في الجاذبية البصرية"
    },
    {
      id: 2,
      category: "التفاعل مع المستخدم",
      icon: <Users />,
      oldSite: {
        description: "تفاعل أحادي الاتجاه",
        features: [
          "عدم وجود تأثيرات hover",
          "لا توجد micro-interactions",
          "تجربة مستخدم سلبية",
          "تنقل بطيء وغير سلس"
        ],
        rating: 2
      },
      newSite: {
        description: "تفاعل ديناميكي وممتع",
        features: [
          "Hover effects متقدمة",
          "Micro-interactions في كل مكان",
          "تجربة مستخدم تفاعلية",
          "تنقل سلس وسريع"
        ],
        rating: 10
      },
      improvement: "زيادة 400% في تفاعل المستخدم"
    },
    {
      id: 3,
      category: "الأداء والسرعة",
      icon: <Zap />,
      oldSite: {
        description: "أداء بطيء ومحدود",
        features: [
          "زمن تحميل 5-8 ثواني",
          "لا يوجد lazy loading",
          "تحميل كامل الصفحة مرة واحدة",
          "استهلاك عالي للموارد"
        ],
        rating: 3
      },
      newSite: {
        description: "أداء فائق وسريع",
        features: [
          "زمن تحميل أقل من 1 ثانية",
          "Lazy loading متقدم",
          "Code splitting ذكي",
          "تحسينات Core Web Vitals"
        ],
        rating: 10
      },
      improvement: "تحسن 500% في سرعة التحميل"
    },
    {
      id: 4,
      category: "التوافق مع المحمول",
      icon: <Smartphone />,
      oldSite: {
        description: "غير متجاوب",
        features: [
          "تصميم ثابت للمكتب فقط",
          "تلف المحتوى على الشاشات الصغيرة",
          "أزرار غير قابلة للنقر",
          "تجربة مستخدم سيئة على الموبايل"
        ],
        rating: 2
      },
      newSite: {
        description: "تصميم متجاوب كامل",
        features: [
          "Mobile-first design",
          "تكيف ذكي مع جميع الشاشات",
          "تحسين تجربة اللمس",
          "تصميم متكامل مع جميع الأجهزة"
        ],
        rating: 10
      },
      improvement: "تحسين 400% في تجربة الموبايل"
    },
    {
      id: 5,
      category: "التكامل مع الأنظمة",
      icon: <GitMerge />,
      oldSite: {
        description: "نظام معزول",
        features: [
          "لا يوجد تكامل مع LMS",
          "لا يوجد تكامل مع ERP",
          "إدارة يدوية للبيانات",
          "تضارب في المعلومات"
        ],
        rating: 1
      },
      newSite: {
        description: "نظام متكامل بالكامل",
        features: [
          "تكامل كامل مع جميع أنظمة LMS",
          "ربط مباشر مع أنظمة ERP",
          "لوحة تحكم موحدة واحدة",
          "مزامنة فورية للبيانات"
        ],
        rating: 10
      },
      improvement: "تكامل 10 أنظمة مختلفة في منصة واحدة"
    },
    {
      id: 6,
      category: "تحسين محركات البحث",
      icon: <Search />,
      oldSite: {
        description: "غير محسن للـ SEO",
        features: [
          "هيكل HTML غير صحيح",
          "صور بدون alt tags",
          "محتوى غير قابل للفهرسة",
          "سرعة تحميل ضعيفة"
        ],
        rating: 2
      },
      newSite: {
        description: "محسن بالكامل للـ SEO",
        features: [
          "هيكل HTML5 صحيح",
          "تحسينات meta tags ديناميكية",
          "محتوى قابل للفهرسة بالكامل",
          "سرعة فائقة تؤثر إيجابياً على الترتيب"
        ],
        rating: 10
      },
      improvement: "تحسن 400% في نتائج البحث"
    },
    {
      id: 7,
      category: "تجربة المستخدم الشاملة",
      icon: <TrendingUp />,
      oldSite: {
        description: "تجربة مستخدم معقدة",
        features: [
          "تشتت في المحتوى",
          "صعوبة في إيجاد المعلومات",
          "عملية التسجيل معقدة",
          "واجهة غير بديهية"
        ],
        rating: 3
      },
      newSite: {
        description: "تجربة مستخدم استثنائية",
        features: [
          "تصميم بديهي وسهل الاستخدام",
          "تنظيم محكم للمحتوى",
          "عملية تسجيل مبسطة",
          "دليل تفاعلي للمستخدمين الجدد"
        ],
        rating: 10
      },
      improvement: "زيادة 233% في رضا المستخدمين"
    },
    {
      id: 8,
      category: "الوظائف والميزات",
      icon: <BarChart />,
      oldSite: {
        description: "وظائف أساسية محدودة",
        features: [
          "إدارة دورات أساسية فقط",
          "لا يوجد نظام توظيف",
          "لا يوجد فلتر متقدم",
          "لا يوجد لوحة تحكم للمدرسين"
        ],
        rating: 3
      },
      newSite: {
        description: "منصة متكاملة متعددة الوظائف",
        features: [
          "نظام دورات متكامل مع فلتر ذكي",
          "منصة توظيف متكاملة",
          "لوحات تحكم متخصصة لكل دور",
          "نظام إعلانات متطور"
        ],
        rating: 10
      },
      improvement: "زيادة 300% في عدد الوظائف المتاحة"
    }
  ];

  // حساب Pagination
  const totalItems = comparisonData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentItems = comparisonData.slice(startIndex, endIndex);
  const currentCardNumber = currentPage * itemsPerPage;

  // تغيير الصفحة
  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Scroll to top of section smoothly
    const section = document.getElementById('comparison-section');
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  // Previous page
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  // Next page
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  // First page
  const goToFirstPage = () => {
    handlePageChange(1);
  };

  // Last page
  const goToLastPage = () => {
    handlePageChange(totalPages);
  };

  // Generate page numbers
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    
    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    
    return pages;
  };

  const techComparison = [
    {
      aspect: "التقنية المستخدمة",
      old: "HTML/CSS/JavaScript تقليدي",
      new: "React + PHP + Tailwind CSS",
      advantage: "تحديث فوري + أداء فائق + صيانة سهلة"
    },
    {
      aspect: "إدارة الحالة",
      old: "No state management",
      new: "Advanced state management with Context/Redux",
      advantage: "اتساق البيانات + تحديثات فورية + تجربة أفضل"
    },
    {
      aspect: "التحديثات",
      old: "تحديث يدوي كامل للموقع",
      new: "تحديثات حية بدون إعادة تحميل",
      advantage: "استمرارية العمل + تجربة سلسة + وقت أقل"
    },
    {
      aspect: "الأمان",
      old: "حماية أساسية فقط",
      new: "حماية متعددة الطبقات مع JWT و encryption",
      advantage: "حماية متقدمة + بيانات آمنة + توافق مع المعايير"
    },
    {
      aspect: "الصيانة",
      old: "صعوبة الصيانة والتطوير",
      new: "هيكل modular سهل الصيانة والتطوير",
      advantage: "تكاليف أقل + وقت أسرع + قابلية توسع عالية"
    }
  ];

  const PerformanceMetrics = () => (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-12 border border-blue-100">
      <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">مقارنة الأداء الفني</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
        {[
          { metric: "سرعة التحميل", old: "5s", new: "0.8s", improvement: "525%" },
          { metric: "حجم الصفحة", old: "4MB", new: "500KB", improvement: "700%" },
          { metric: "طلبات HTTP", old: "40+", new: "10-15", improvement: "300%" },
          { metric: "Core Web Vitals", old: "Poor", new: "Good", improvement: "A+" },
          { metric: "زمن الاستجابة", old: "300ms", new: "50ms", improvement: "500%" }
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="text-sm text-gray-500 mb-2">{item.metric}</div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-red-500 line-through">{item.old}</span>
              <ArrowUpRight className="text-blue-500" />
              <span className="text-green-600 font-bold">{item.new}</span>
            </div>
            <div className="text-sm font-medium text-blue-600">{item.improvement} تحسن</div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="comparison-section" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        
        {/* العنوان الرئيسي مع أيقونة */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full mb-6 shadow-lg">
            <RefreshCw size={24} />
            <span className="text-xl font-bold">التحول الرقمي الكامل</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            مقارنة شاملة: الثورة التقنية
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            من منصة تقليدية إلى نظام تعليمي متكامل يواكب أحدث التقنيات العالمية
          </p>
        </div>

        {/* مقارنة الأداء */}
        <PerformanceMetrics />

        {/* Pagination Info Bar */}
        <div className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        
            
      
            
          </div>
        </div>

        {/* بطاقات المقارنة التفاعلية مع Pagination */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {currentItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300">
              {/* رأس البطاقة */}
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                      {React.cloneElement(item.icon, { className: "text-white", size: 24 })}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{item.category}</h3>
                  </div>
                  <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    +{Math.round(((item.newSite.rating - item.oldSite.rating) / item.oldSite.rating) * 100)}%
                  </div>
                </div>
              </div>

              {/* محتوى البطاقة */}
              <div className="p-8">
                {/* مقارنة التقييم */}
                <div className="flex justify-between items-center mb-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-400">{item.oldSite.rating}/10</div>
                    <div className="text-sm text-gray-500 mt-1">الموقع القديم</div>
                  </div>
                  <ArrowUpRight className="text-gray-400" size={32} />
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-500">{item.newSite.rating}/10</div>
                    <div className="text-sm text-gray-500 mt-1">الموقع الجديد</div>
                  </div>
                </div>

                {/* الموقع القديم */}
                <div className="mb-8 p-6 bg-red-50 rounded-xl border border-red-100">
                  <div className="flex items-center gap-3 mb-4">
                    <XCircle className="text-red-500" />
                    <h4 className="font-bold text-lg text-red-700">الموقع القديم</h4>
                  </div>
                  <p className="text-red-600 mb-4">{item.oldSite.description}</p>
                  <ul className="space-y-2">
                    {item.oldSite.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-red-500">
                        <XCircle size={16} className="mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* الموقع الجديد */}
                <div className="p-6 bg-green-50 rounded-xl border border-green-100">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="text-green-500" />
                    <h4 className="font-bold text-lg text-green-700">الموقع الجديد</h4>
                  </div>
                  <p className="text-green-600 mb-4">{item.newSite.description}</p>
                  <ul className="space-y-2">
                    {item.newSite.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-green-600">
                        <CheckCircle size={16} className="mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* التحسين */}
                <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="text-blue-600" />
                    <span className="font-bold text-blue-700">{item.improvement}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center ">
            
       
            
            {/* Pagination Buttons */}
            <div className="flex items-center gap-2">
              {/* First Page Button */}
           
           
              
              {/* Page Numbers */}
              <div className="flex items-center gap-1">
                {getPageNumbers().map((page, idx) => (
                  page === '...' ? (
                    <span key={`dots-${idx}`} className="px-2 text-gray-400">
                      ...
                    </span>
                  ) : (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`
                        w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300
                        ${currentPage === page
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                          : 'hover:bg-blue-50 hover:text-blue-600 text-gray-600'
                        }
                      `}
                    >
                      {page}
                    </button>
                  )
                ))}
              </div>
              
            
        
            </div>
            
            {/* Page Size Selector (Mobile) */}
            <div className="md:hidden flex items-center gap-2">
              <span className="text-gray-700 text-sm">الصفحة:</span>
              <select 
                value={currentPage}
                onChange={(e) => handlePageChange(Number(e.target.value))}
                className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm"
              >
                {[...Array(totalPages)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <span className="text-gray-600">/ {totalPages}</span>
            </div>
          </div>
          
          {/* Pagination Dots (Mobile View) */}
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`
                  w-2 h-2 rounded-full transition-all duration-300
                  ${currentPage === index + 1
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                  }
                `}
              />
            ))}
          </div>
        </div>

        {/* مقارنة تقنية متقدمة */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 border border-gray-200">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            <Cpu className="inline-block mr-3 text-blue-500" />
            مقارنة التقنيات الأساسية
          </h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-purple-600">
                  <th className="px-8 py-4 text-right text-lg font-bold text-white">الجانب التقني</th>
                  <th className="px-8 py-4 text-right text-lg font-bold text-white">التقنية القديمة</th>
                  <th className="px-8 py-4 text-right text-lg font-bold text-white">التقنية الجديدة</th>
                  <th className="px-8 py-4 text-right text-lg font-bold text-white">الميزة التنافسية</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {techComparison.map((tech, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="px-8 py-6">
                      <div className="font-bold text-lg text-gray-800">{tech.aspect}</div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <span className="text-gray-700">{tech.old}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700 font-medium">{tech.new}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-100">
                        <span className="text-blue-700 font-medium">{tech.advantage}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ملخص النتائج */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 text-white shadow-2xl">
          <div className="text-center mb-10">
            <Award className="mx-auto mb-6" size={48} />
            <h2 className="text-3xl font-bold mb-4">النتائج المتوقعة من التحول</h2>
            <p className="text-xl opacity-90">
              نقلة نوعية في كل جانب من جوانب المنصة التعليمية
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "زيادة التفاعل", 
                value: "300%+", 
                desc: "زيادة في تفاعل المستخدمين مع المنصة" 
              },
              { 
                title: "تحسين الأداء", 
                value: "500%+", 
                desc: "تحسن في سرعة تحميل الصفحات" 
              },
              { 
                title: "توفير الوقت", 
                value: "70%", 
                desc: "توفير في وقت إدارة المحتوى والأنظمة" 
              },
              { 
                title: "رضا العملاء", 
                value: "95%", 
                desc: "معدل رضا متوقع من المستخدمين النهائيين" 
              }
            ].map((result, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="text-4xl font-bold mb-2">{result.value}</div>
                <h4 className="text-xl font-bold mb-2">{result.title}</h4>
                <p className="text-white/80 text-sm">{result.desc}</p>
              </div>
            ))}
          </div>

          {/* خاتمة */}
          <div className="mt-12 pt-8 border-t border-white/20 text-center">
            <div className="inline-flex items-center gap-4 bg-white/10 px-8 py-4 rounded-full">
              <Shield className="text-yellow-300" />
              <span className="text-lg">
                <span className="font-bold">الخلاصة:</span> تحول كامل من منصة تقليدية إلى نظام تعليمي ذكي متكامل
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ComparisonSection;