import React, { useState, useEffect } from 'react';
import { 
  Rocket, Cpu, Zap, Shield, Smartphone, Users, Database,
  Filter, Globe, BarChart, BookOpen, Bell, Briefcase, Award,
  Server, Link, ChevronRight, CheckCircle, MapPin, TrendingUp,
  UserPlus, Palette, Gauge, Heart, Sparkles, Target, Navigation,
  Clock, Star, Download, Settings, Menu, X, ArrowRight, Globe as GlobeIcon
} from 'lucide-react';



// 1. Hero Component
const HeroSection = () => {
  const [activeTech, setActiveTech] = useState(0);
  
  const technologies = [
    { name: 'React', color: 'text-blue-600', bg: 'bg-blue-100' },
    { name: 'PHP', color: 'text-purple-600', bg: 'bg-purple-100' },
    { name: 'Tailwind CSS', color: 'text-teal-600', bg: 'bg-teal-100' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTech((prev) => (prev + 1) % technologies.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 pt-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-8 shadow-sm">
                <Sparkles className="text-yellow-500" size={20} />
                <span className="text-sm font-medium text-gray-700">
                  النظام التعليمي الأكثر تطوراً
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                نحن نعيد تعريف التعليم الرقمي
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                منصة متكاملة تجمع بين قوة 
                <span className="font-bold text-blue-600 mx-2">React</span>، 
                مرونة 
                <span className="font-bold text-purple-600 mx-2">PHP</span>، 
                وسرعة 
                <span className="font-bold text-teal-600 mx-2">Tailwind CSS</span>
                لتقديم تجربة تعليمية استثنائية
              </p>
              
             
              
              
            </div>
            
            {/* Tech Cards */}
            <div className="space-y-6">
              {technologies.map((tech, idx) => (
                <div 
                  key={idx}
                  className={`bg-white rounded-2xl p-6 shadow-lg border-2 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer ${
                    activeTech === idx 
                      ? 'border-blue-500 scale-105' 
                      : 'border-gray-100'
                  }`}
                  onClick={() => setActiveTech(idx)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl ${tech.bg}`}>
                        <div className={`text-2xl font-bold ${tech.color}`}>
                          {tech.name.charAt(0)}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">{tech.name}</h3>
                    </div>
                    <div className={`w-3 h-3 rounded-full ${activeTech === idx ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                  </div>
                  <p className="text-gray-600">
                    {tech.name === 'React' && 'واجهة مستخدم تفاعلية وسريعة'}
                    {tech.name === 'PHP' && 'معالجة قوية للبيانات والمنطق الخلفي'}
                    {tech.name === 'Tailwind CSS' && 'تصميم سريع ومتجاوب مع جميع الشاشات'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 2. Architecture Section
const ArchitectureSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    { 
      icon: <Cpu />, 
      title: "Single Page Application", 
      desc: "تطبيق React أحادي الصفحة بسرعة تحميل فائقة",
      stats: "سرعة تحميل +200%"
    },
    { 
      icon: <Server />, 
      title: "Backend PHP قوي", 
      desc: "معالجة البيانات والمنطق الخلفي بلغة PHP الموثوقة",
      stats: "99.9% وقت تشغيل"
    },
    { 
      icon: <Zap />, 
      title: "Tailwind CSS", 
      desc: "تصميم سريع ومتجاوب مع أحدث تقنيات CSS",
      stats: "تطوير أسرع بنسبة 40%"
    },
    { 
      icon: <Shield />, 
      title: "أمان متكامل", 
      desc: "أنظمة حماية متعددة الطبقات لبيانات المستخدمين",
      stats: "256-bit تشفير"
    }
  ];

  return (
    <section id="architecture" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-blue-100 text-blue-600 px-6 py-3 rounded-full mb-6">
            <Cpu />
            <span className="font-bold">هيكل تقني متكامل</span>
          </div>
          <h2 className="text-4xl font-bold mb-6 text-gray-800">الهيكل التقني المتكامل للنظام</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            تصميم معماري حديث يجمع بين أفضل التقنيات لتقديم تجربة مستخدم استثنائية
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`
                bg-gradient-to-b from-gray-50 to-white p-8 rounded-2xl shadow-lg 
                hover:shadow-2xl transition-all duration-300 border border-gray-100
                ${hoveredIndex === idx ? 'transform -translate-y-2' : ''}
              `}>
                <div className={`
                  text-blue-600 mb-4 transition-transform duration-300
                  ${hoveredIndex === idx ? 'scale-110' : ''}
                `}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.desc}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {feature.stats}
                  </span>
                  <ChevronRight className="text-gray-400" size={20} />
                </div>
              </div>
              
              {/* Hover Effect */}
              {hoveredIndex === idx && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-10 blur-xl -z-10"></div>
              )}
            </div>
          ))}
        </div>

        {/* Architecture Diagram */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">هيكلية النظام المتكاملة</h3>
            <p className="text-gray-600">تدفق البيانات بين واجهة المستخدم والخلفية</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Frontend */}
            <div className="text-center">
              <div className="bg-white p-6 rounded-xl shadow-lg mb-4">
                <GlobeIcon className="text-blue-600 mx-auto mb-3" size={40} />
                <h4 className="font-bold text-gray-800">Frontend</h4>
                <p className="text-sm text-gray-600">React + Tailwind</p>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">API Requests</span>
              </div>
            </div>
            
            {/* API Layer */}
            <div className="text-center">
              <div className="relative">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-xl shadow-lg mb-4">
                  <Link className="text-white mx-auto mb-3" size={40} />
                  <h4 className="font-bold text-white">API Layer</h4>
                  <p className="text-sm text-white/90">RESTful APIs</p>
                </div>
                <div className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
                  JSON
                </div>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Data Processing</span>
              </div>
            </div>
            
            {/* Backend */}
            <div className="text-center">
              <div className="bg-white p-6 rounded-xl shadow-lg mb-4">
                <Server className="text-purple-600 mx-auto mb-3" size={40} />
                <h4 className="font-bold text-gray-800">Backend</h4>
                <p className="text-sm text-gray-600">PHP + MySQL</p>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Database</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 3. Integration Dashboard
const IntegrationSection = () => {
  const [activeIntegration, setActiveIntegration] = useState(0);

  const integrations = [
    { 
      title: "LMS Integration", 
      desc: "إدارة كاملة للمقررات والواجبات والاختبارات",
      features: ["داشبورد مدرسين", "صفحة طلاب مخصصة", "تقييم آلي", "تقارير أداء"],
      color: "from-blue-500 to-cyan-500"
    },
    { 
      title: "ERP System", 
      desc: "إدارة الموارد البشرية والمالية والمخزون",
      features: ["إدارة الرواتب", "التوظيف الإلكتروني", "المخازن", "المشتريات"],
      color: "from-purple-500 to-pink-500"
    },
    { 
      title: "Website Management", 
      desc: "إدارة محتوى الموقع والدورات الإعلانية",
      features: ["شريط أخبار", "الإعلانات", "مدونة", "الفعاليات"],
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="integration" className="py-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-blue-100 text-blue-600 px-6 py-3 rounded-full mb-6">
            <Link />
            <span className="font-bold">تكامل كامل من لوحة تحكم واحدة</span>
          </div>
          <h2 className="text-4xl font-bold mb-6 text-gray-800">وحدة تحكم موحدة لإدارة جميع الأنظمة</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            إدارة LMS، ERP، والموقع الإلكتروني من خلال لوحة تحكم واحدة متكاملة
          </p>
        </div>

        {/* Integration Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {integrations.map((integration, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIntegration(idx)}
              className={`
                px-6 py-3 rounded-full font-medium transition-all duration-300
                ${activeIntegration === idx 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-500'
                }
              `}
            >
              {integration.title}
            </button>
          ))}
        </div>

        {/* Integration Details */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {integrations.map((item, idx) => (
            <div 
              key={idx}
              className={`
                bg-white p-8 rounded-2xl shadow-xl border border-gray-100 transition-all duration-300
                ${activeIntegration === idx ? 'transform -translate-y-2 border-blue-500' : 'opacity-80'}
              `}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${item.color}`}>
                  <Database className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{item.title}</h3>
              </div>
              <p className="text-gray-600 mb-6">{item.desc}</p>
              <ul className="space-y-3">
                {item.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Unified Dashboard Preview */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:w-1/2">
              <h3 className="text-3xl font-bold mb-3">لوحة تحكم رئيسية واحدة</h3>
              <p className="opacity-90 text-lg mb-6">
                تحكم كامل في جميع الأنظمة بدون الحاجة للتبديل بين التطبيقات
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-300" size={20} />
                  <span>إحصائيات موحدة من جميع الأنظمة</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-300" size={20} />
                  <span>تقارير شاملة ومخصصة</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-300" size={20} />
                  <span>إشعارات موحدة من جميع الأقسام</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="bg-white/20 p-6 rounded-xl backdrop-blur-sm border border-white/30">
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {['المستخدمين', 'الدورات', 'المبيعات'].map((stat, idx) => (
                    <div key={idx} className="bg-white/10 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold">{['1,234', '456', '789'][idx]}</div>
                      <div className="text-sm opacity-80">{stat}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Rocket className="text-white" size={24} />
                  </div>
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Navigation className="text-white" size={24} />
                  </div>
                  <div className="bg-white/20 p-3 rounded-lg">
                    <BarChart className="text-white" size={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 4. Features Showcase
const FeaturesSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const itemsPerPage = 6; // عدد العناصر في كل صفحة
  
  const features = [
    {
      icon: <Filter />,
      title: "نظام فلترة متقدم",
      desc: "فلترة ذكية للدورات بمعايير متعددة",
      color: "from-blue-500 to-cyan-500",
      category: "ui"
    },
    {
      icon: <Users />,
      title: "بروفايلات متخصصة",
      desc: "بروفايلات منفصلة للطلاب، المدرسين، والموظفين مع صلاحيات مخصصة",
      color: "from-purple-500 to-pink-500",
      category: "users"
    },
    {
      icon: <Bell />,
      title: "شريط أخبار احترافي",
      desc: "نظام أخبار تفاعلي مع إشعارات فورية وتصنيفات متعددة",
      color: "from-green-500 to-emerald-500",
      category: "content"
    },
    {
      icon: <Briefcase />,
      title: "نظام التوظيف",
      desc: "منصة توظيف متكاملة مع تقديم الطلبات ومتابعة المرشحين",
      color: "from-orange-500 to-red-500",
      category: "hr"
    },
    {
      icon: <BookOpen />,
      title: "إدارة الدورات",
      desc: "إنشاء وتعديل وإدارة الدورات التعليمية بنظام سهل ومتطور",
      color: "from-indigo-500 to-blue-500",
      category: "lms"
    },
    {
      icon: <BarChart />,
      title: "تقارير وأداء",
      desc: "لوحات تحكم إحصائية متقدمة لمتابعة الأداء والتحليلات",
      color: "from-teal-500 to-green-500",
      category: "analytics"
    },
    {
      icon: <Gauge />,
      title: "لوحة تحكم موحدة",
      desc: "تحكم كامل في ERP، LMS، والموقع الإلكتروني من مكان واحد",
      color: "from-purple-500 to-pink-500",
      category: "dashboard"
    },
    {
      icon: <Palette />,
      title: "ثيمات مخصصة",
      desc: "تصميمات مخصصة للشباب والبنات مع ألوان وتخطيطات مختلفة",
      color: "from-blue-500 to-cyan-500",
      category: "ui"
    },
    {
      icon: <TrendingUp />,
      title: "إحصائيات متقدمة",
      desc: "تتبع عدد الطلاب والمقدمين وإحصائيات النمو والتقدم",
      color: "from-green-500 to-emerald-500",
      category: "analytics"
    },
    {
      icon: <Globe />,
      title: "دعم متعدد اللغات",
      desc: "نظام يدعم عدة لغات مع ترجمة ديناميكية",
      color: "from-yellow-500 to-orange-500",
      category: "ui"
    },
    {
      icon: <Award />,
      title: "نظام الشهادات",
      desc: "إنشاء وتوزيع الشهادات الإلكترونية المعتمدة",
      color: "from-red-500 to-pink-500",
      category: "lms"
    },
    {
      icon: <Heart />,
      title: "تجربة مستخدم محسنة",
      desc: "واجهة مستخدم بديهية وسهلة الاستخدام",
      color: "from-pink-500 to-rose-500",
      category: "ui"
    },
    {
      icon: <Shield />,
      title: "نظام أمان متكامل",
      desc: "حماية متقدمة لبيانات المستخدمين والنظام",
      color: "from-gray-500 to-blue-500",
      category: "security"
    },
   
    {
      icon: <Zap />,
      title: "أداء سريع",
      desc: "نظام سريع الاستجابة مع أوقات تحميل قياسية",
      color: "from-orange-500 to-yellow-500",
      category: "performance"
    },
    {
      icon: <Database />,
      title: "نسخ احتياطي",
      desc: "نسخ احتياطي تلقائي وحماية للبيانات",
      color: "from-teal-500 to-blue-500",
      category: "security"
    },
    {
      icon: <Settings />,
      title: "تخصيص متقدم",
      desc: "خيارات تخصيص متقدمة للإدارة والمستخدمين",
      color: "from-blue-500 to-cyan-500",
      category: "ui"
    },
    {
      icon: <Target />,
      title: "نظام أهداف",
      desc: "تحديد ومتابعة أهداف الطلاب والمؤسسة",
      color: "from-green-500 to-emerald-500",
      category: "analytics"
    }
  ];

  const categories = [
    { id: 'all', label: 'جميع المميزات', count: features.length },
    { id: 'ui', label: 'واجهة المستخدم', count: features.filter(f => f.category === 'ui').length },
    { id: 'analytics', label: 'التقارير والإحصائيات', count: features.filter(f => f.category === 'analytics').length },
    { id: 'lms', label: 'نظام إدارة التعلم', count: features.filter(f => f.category === 'lms').length },
    { id: 'dashboard', label: 'لوحة التحكم', count: features.filter(f => f.category === 'dashboard').length },
    { id: 'content', label: 'المحتوى', count: features.filter(f => f.category === 'content').length },
    { id: 'hr', label: 'الموارد البشرية', count: features.filter(f => f.category === 'hr').length },
    { id: 'users', label: 'إدارة المستخدمين', count: features.filter(f => f.category === 'users').length },
    { id: 'security', label: 'الأمان', count: features.filter(f => f.category === 'security').length },
    { id: 'mobile', label: 'الموبايل', count: features.filter(f => f.category === 'mobile').length },
    { id: 'performance', label: 'الأداء', count: features.filter(f => f.category === 'performance').length }
  ];

  // تصفية المميزات حسب التصنيف
  const filteredFeatures = features.filter(
    feature => activeCategory === 'all' || feature.category === activeCategory
  );

  // حساب Pagination
  const totalPages = Math.ceil(filteredFeatures.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentFeatures = filteredFeatures.slice(startIndex, endIndex);

  // تغيير الصفحة
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({
      top: document.getElementById('features').offsetTop - 100,
      behavior: 'smooth'
    });
  };

  // عند تغيير التصنيف، نعود للصفحة الأولى
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  return (
    <section id="features" className="py-4 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-purple-100 text-purple-600 px-6 py-3 rounded-full mb-6">
            <Sparkles />
            <span className="font-bold">مميزات متقدمة</span>
          </div>
          <h2 className="text-4xl font-bold mb-6 text-gray-800">المميزات والوظائف المتقدمة</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            اكتشف مجموعة المميزات المتكاملة التي تجعل نظامنا الخيار الأمثل للمؤسسات التعليمية
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`
                px-5 py-2.5 rounded-full font-medium transition-all duration-300
                ${activeCategory === category.id 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }
              `}
            >
              {category.label}
              <span className={`
                text-xs px-2 py-1 rounded-full ml-2
                ${activeCategory === category.id 
                  ? 'bg-white/20' 
                  : 'bg-gray-200'
                }
              `}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

     

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentFeatures.map((feature, idx) => (
            <div 
              key={startIndex + idx} 
              className="group relative"
              onMouseEnter={() => setHoveredCard(startIndex + idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="
                bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg 
                hover:shadow-2xl transition-all duration-300 border border-gray-100
                group-hover:transform group-hover:-translate-y-2
                h-full flex flex-col
              ">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.color} mb-6 transition-transform duration-300 group-hover:scale-110`}>
                  {React.cloneElement(feature.icon, { className: "text-white", size: 28 })}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{feature.desc}</p>
               
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Pagination Info */}
              <div className="text-gray-600">
                الصفحة <span className="font-bold text-blue-600">{currentPage}</span> من <span className="font-bold text-purple-600">{totalPages}</span>
              </div>
              
              {/* Pagination Buttons */}
              <div className="flex items-center gap-2">
                {/* Previous Button */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`
                    p-2 rounded-lg transition-all duration-300
                    ${currentPage === 1 
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'hover:bg-blue-50 hover:text-blue-600'
                    }
                  `}
                >
                  <ChevronRight className="rotate-180" />
                </button>
                
                {/* Page Numbers */}
                <div className="flex items-center gap-1">
                  {/* First Page */}
                  {currentPage > 3 && (
                    <>
                      <button
                        onClick={() => handlePageChange(1)}
                        className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        1
                      </button>
                      <span className="px-2">...</span>
                    </>
                  )}
                  
                  {/* Page Numbers */}
                  {[...Array(totalPages)].map((_, index) => {
                    const pageNumber = index + 1;
                    // عرض 5 صفحات فقط حول الصفحة الحالية
                    if (
                      pageNumber === 1 ||
                      pageNumber === totalPages ||
                      (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                    ) {
                      return (
                        <button
                          key={pageNumber}
                          onClick={() => handlePageChange(pageNumber)}
                          className={`
                            w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300
                            ${currentPage === pageNumber
                              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                              : 'hover:bg-blue-50 hover:text-blue-600'
                            }
                          `}
                        >
                          {pageNumber}
                        </button>
                      );
                    }
                    return null;
                  })}
                  
                  {/* Last Page */}
                  {currentPage < totalPages - 2 && (
                    <>
                      <span className="px-2">...</span>
                      <button
                        onClick={() => handlePageChange(totalPages)}
                        className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {totalPages}
                      </button>
                    </>
                  )}
                </div>
                
                {/* Next Button */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`
                    p-2 rounded-lg transition-all duration-300
                    ${currentPage === totalPages 
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'hover:bg-blue-50 hover:text-blue-600'
                    }
                  `}
                >
                  <ChevronRight />
                </button>
              </div>
              
              {/* Page Size Controls */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handlePageChange(1)}
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  الصفحة الأولى
                </button>
                <button
                  onClick={() => handlePageChange(totalPages)}
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  الصفحة الأخيرة
                </button>
              </div>
            </div>

            {/* Pagination Dots (Mobile View) */}
            <div className="flex justify-center gap-2 mt-8 md:hidden">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`
                    w-3 h-3 rounded-full transition-all duration-300
                    ${currentPage === index + 1
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                    }
                  `}
                />
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredFeatures.length === 0 && (
          <div className="text-center py-12">
            <div className="inline-flex p-4 bg-gray-100 rounded-full mb-4">
              <Filter className="text-gray-400" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-700 mb-2">لا توجد مميزات في هذا التصنيف</h3>
            <p className="text-gray-500 mb-4">جرب تصنيفاً آخر أو اطلع على جميع المميزات</p>
            <button 
              onClick={() => setActiveCategory('all')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-shadow"
            >
              عرض جميع المميزات
            </button>
          </div>
        )}

        {/* Features Summary */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{features.length}</div>
              <div className="text-gray-700 font-medium">ميزة متاحة</div>
              <div className="text-sm text-gray-500">في النظام بالكامل</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">{categories.length}</div>
              <div className="text-gray-700 font-medium">تصنيف مختلف</div>
              <div className="text-sm text-gray-500">لتنظيم المميزات</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">{itemsPerPage}</div>
              <div className="text-gray-700 font-medium">ميزة في الصفحة</div>
              <div className="text-sm text-gray-500">لتصفح أسهل</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 5. Performance & SEO
const PerformanceSection = () => {
  const [activeMetric, setActiveMetric] = useState(0);

  const metrics = [
    { 
      value: "99%", 
      label: "سرعة التحميل", 
      desc: "بفضل React SPA وتهيئة الخادم",
      icon: <Zap className="text-yellow-500" />
    },
    { 
      value: "A+", 
      label: "تقييم SEO", 
      desc: "تحسين كامل لمحركات البحث",
      icon: <TrendingUp className="text-green-500" />
    },
    { 
      value: "100%", 
      label: "توافق الأجهزة", 
      desc: "تصميم متجاوب مع جميع الشاشات",
      icon: <Smartphone className="text-blue-500" />
    },
    { 
      value: "<100ms", 
      label: "زمن الاستجابة", 
      desc: "استجابة فورية للمستخدم",
      icon: <Clock className="text-purple-500" />
    }
  ];

  return (
    <section id="performance" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-blue-500/20 text-blue-300 px-6 py-3 rounded-full mb-6">
            <Zap />
            <span className="font-bold">أداء واستدامة فائقة</span>
          </div>
          <h2 className="text-4xl font-bold mb-6">محافظة على الأداء والسرعة</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            نظام مصمم للحفاظ على أعلى مستويات الأداء مع أفضل ممارسات SEO
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {metrics.map((metric, idx) => (
            <div 
              key={idx}
              className={`
                bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl 
                border border-gray-700 text-center transition-all duration-300
                hover:border-blue-500 cursor-pointer transform hover:-translate-y-2
                ${activeMetric === idx ? 'border-blue-500 scale-105' : ''}
              `}
              onClick={() => setActiveMetric(idx)}
            >
              <div className="flex justify-center mb-4">
                {metric.icon}
              </div>
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3">
                {metric.value}
              </div>
              <h3 className="text-xl font-bold mb-2">{metric.label}</h3>
              <p className="text-gray-400">{metric.desc}</p>
            </div>
          ))}
        </div>

        {/* Performance Details */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <TrendingUp className="text-green-400" />
              تحسين SEO المتقدم
            </h3>
            <ul className="space-y-4">
              {[
                "Meta Tags ديناميكية لكل صفحة",
                "SEO-Friendly URLs قابلة للتخصيص",
                "سرعة فهرسة عالية لمحركات البحث",
                "تحميل سريع للمحتوى الأساسي"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Zap className="text-yellow-400" />
              أداء فائق السرعة
            </h3>
            <ul className="space-y-4">
              {[
                "Code Splitting للتحميل الذكي",
                "Lazy Loading للصور والمكونات",
                "Image Optimization تلقائي",
                "Caching متقدم على جميع المستويات"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

     
      </div>
    </section>
  );
};



// Main Component
const Optical = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans overflow-hidden">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <HeroSection />
      <ArchitectureSection />
      <IntegrationSection />
      <FeaturesSection />
      <PerformanceSection />
     
      
      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40"
      >
        <ChevronRight className="rotate-270" size={24} />
      </button>

      {/* CSS for animations */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        .rotate-270 {
          transform: rotate(270deg);
        }
        
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Optical;