import React, { useState, useEffect, useRef } from "react";
import { 
  Cpu, Database, Globe, LayoutDashboard, 
  Zap, ArrowRight, Link, Shield, Users,
  BookOpen, BarChart, CreditCard, MessageSquare
} from "lucide-react";

const IntegratedSystemHero = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    setIsAnimating(true);
    
    // التحقق من حجم الشاشة
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const handleMouseMove = (e) => {
      if (sectionRef.current && !isMobile) {
        const rect = sectionRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
        setMousePosition({ x, y });
      }
    };
    
    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [isMobile]);

  const features = [
    { 
      icon: <Users size={24} />, 
      title: "إدارة موحدة", 
      desc: "لجميع الأقسام والأنظمة",
      color: "from-blue-500/20 to-blue-600/20",
      border: "border-blue-500/30",
      hover: "hover:shadow-lg hover:shadow-blue-500/20"
    },
    { 
      icon: <BarChart size={24} />, 
      title: "تقارير شاملة", 
      desc: "بيانات حية ومحدثة",
      color: "from-green-500/20 to-green-600/20",
      border: "border-green-500/30",
      hover: "hover:shadow-lg hover:shadow-green-500/20"
    },
    { 
      icon: <Shield size={24} />, 
      title: "أمان متكامل", 
      desc: "حماية مركزية للبيانات",
      color: "from-purple-500/20 to-purple-600/20",
      border: "border-purple-500/30",
      hover: "hover:shadow-lg hover:shadow-purple-500/20"
    }
  ];

  const floatingIcons = [
    { 
      icon: <BookOpen size={32} className="text-blue-400" />, 
      position: "top-20 right-20",
      bg: "bg-blue-500/10",
      border: "border-blue-500/30",
      delay: 0
    },
    { 
      icon: <Database size={32} className="text-green-400" />, 
      position: "bottom-32 left-32",
      bg: "bg-green-500/10",
      border: "border-green-500/30",
      delay: 1000
    },
    { 
      icon: <Globe size={32} className="text-purple-400" />, 
      position: "top-40 left-40",
      bg: "bg-purple-500/10",
      border: "border-purple-500/30",
      delay: 1500
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 px-4 md:px-6 py-12 cursor-default"
    >
      
      {/* Parallax Background Effect - يظهر فقط على الأجهزة الكبيرة */}
      {!isMobile && (
        <div 
          className="absolute inset-0 transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          }}
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Animated connecting lines */}
            <div className="absolute top-1/4 left-1/4 w-1 h-64 bg-gradient-to-b from-blue-500/30 to-transparent animate-pulse"></div>
            <div className="absolute top-1/3 right-1/3 w-64 h-1 bg-gradient-to-l from-purple-500/30 to-transparent animate-pulse delay-1000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-1 h-48 bg-gradient-to-t from-green-500/30 to-transparent animate-pulse delay-500"></div>
            
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="h-full w-full" style={{
                backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                                  linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: '50px 50px',
              }}></div>
            </div>
            
            {/* Floating icons with improved animation */}
            {floatingIcons.map((item, index) => (
              <div 
                key={index}
                className={`absolute ${item.position} animate-float hidden md:block`}
                style={{ animationDelay: `${item.delay}ms` }}
              >
                <div className={`${item.bg} p-6 rounded-2xl backdrop-blur-sm border ${item.border} transition-all duration-500 hover:scale-110 hover:shadow-xl`}>
                  {item.icon}
                </div>
              </div>
            ))}
            
            {/* Additional floating elements - مخفية على الموبايل */}
            <div className="absolute top-10 right-1/4 animate-float delay-500 hidden md:block">
              <div className="bg-pink-500/10 p-4 rounded-2xl backdrop-blur-sm border border-pink-500/30">
                <MessageSquare size={24} className="text-pink-400" />
              </div>
            </div>
            
            <div className="absolute bottom-20 right-32 animate-float delay-700 hidden md:block">
              <div className="bg-yellow-500/10 p-4 rounded-2xl backdrop-blur-sm border border-yellow-500/30">
                <CreditCard size={24} className="text-yellow-400" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-6xl mx-auto text-center">
        
        {/* Header with Animation */}
        <div className={`transition-all duration-1000 ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-4 md:px-6 py-2 md:py-3 rounded-full mb-6 md:mb-8 backdrop-blur-sm border border-blue-500/30 hover:scale-105 transition-transform duration-300 cursor-pointer group">
            <Zap size={20} className="text-yellow-400 group-hover:animate-ping hidden md:block" />
            <span className="text-white font-bold tracking-wider text-sm md:text-base">OPTICAL DIGITIZATION</span>
          </div>

          <h1 className="text-white text-3xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            <span className="block animate-fadeIn">التحول الرقمي المتكامل</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient bg-size-200">
              بلوحة تحكم واحدة
            </span>
          </h1>
        </div>

        {/* Main Selling Point */}
        <div className={`mb-8 md:mb-12 transition-all duration-1000 delay-300 ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-pink-900/30 p-4 md:p-8 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/70 transition-all duration-300">
            {[
              { icon: <BookOpen size={28} className="text-blue-400" />, label: "LMS", bg: "bg-blue-500/20" },
              { icon: <Database size={28} className="text-green-400" />, label: "ERP", bg: "bg-green-500/20" },
              { icon: <Globe size={28} className="text-purple-400" />, label: "الموقع", bg: "bg-purple-500/20" }
            ].map((item, index) => (
              <React.Fragment key={index}>
                <div className="flex items-center gap-2 md:gap-4 group">
                  <div className={`${item.bg} p-2 md:p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 hidden md:flex`}>
                    {item.icon}
                  </div>
                  <span className="text-white text-lg md:text-2xl font-bold">{item.label}</span>
                </div>
                {index < 2 && (
                  <Link size={20} className="text-yellow-400 animate-pulse hidden md:block" />
                )}
              </React.Fragment>
            ))}
            
            <ArrowRight size={20} className="text-white hidden md:block" />
            
            <div className="flex items-center gap-2 md:gap-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 md:p-4 rounded-xl group hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hidden md:block">
                <LayoutDashboard size={24} className="text-white md:hidden" />
                <LayoutDashboard size={32} className="text-white hidden md:block" />
              </div>
              <span className="text-white text-lg md:text-2xl font-bold">لوحة تحكم واحدة</span>
            </div>
          </div>
          
          {/* نسخة مبسطة للموبايل */}
          <div className="md:hidden mt-4">
            <div className="text-white text-lg font-semibold">
              <span className="text-blue-300">LMS</span> + 
              <span className="text-green-300"> ERP</span> + 
              <span className="text-purple-300"> الموقع</span>
              <span className="mx-2">→</span>
              <span className="text-yellow-300">لوحة تحكم واحدة</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className={`mb-8 md:mb-12 transition-all duration-1000 delay-500 ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gray-300 text-base md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            نظام إدارة شامل يجمع كل الأنظمة الأساسية في مكان واحد
            <br className="hidden md:block" />
            <div className="flex flex-wrap justify-center gap-2 md:gap-0 mt-2 md:mt-0">
              <span className="relative group cursor-pointer">
                <span className="text-blue-300 transition-all duration-300 group-hover:text-blue-200 text-sm md:text-base">إدارة الطلاب</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-300 group-hover:w-full transition-all duration-300 hidden md:block"></span>
              </span>
              <span className="hidden md:inline mx-2">•</span>
              <span className="relative group cursor-pointer">
                <span className="text-green-300 transition-all duration-300 group-hover:text-green-200 text-sm md:text-base">الشؤون المالية</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-300 group-hover:w-full transition-all duration-300 hidden md:block"></span>
              </span>
              <span className="hidden md:inline mx-2">•</span>
              <span className="relative group cursor-pointer">
                <span className="text-purple-300 transition-all duration-300 group-hover:text-purple-200 text-sm md:text-base">المحتوى التعليمي</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-300 group-hover:w-full transition-all duration-300 hidden md:block"></span>
              </span>
              <span className="hidden md:inline mx-2">•</span>
              <span className="relative group cursor-pointer">
                <span className="text-yellow-300 transition-all duration-300 group-hover:text-yellow-200 text-sm md:text-base">الموقع الإلكتروني</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300 hidden md:block"></span>
              </span>
            </div>
          </p>
        </div>

        {/* Features Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16 transition-all duration-1000 delay-700 ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${feature.color} backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border ${feature.border} ${feature.hover} transition-all duration-300 hover:scale-105 group cursor-pointer`}
            >
              <div className="flex items-center justify-center mb-3 md:mb-4 group-hover:rotate-12 transition-transform duration-300 hidden md:flex">
                {feature.icon}
              </div>
              <h3 className="text-white font-bold text-base md:text-lg mb-1 md:mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-xs md:text-sm group-hover:text-gray-200 transition-colors duration-300">{feature.desc}</p>
            </div>
          ))}
        </div>

      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .bg-size-200 {
          background-size: 200% 200%;
        }
        
        .animate-bounce-x {
          animation: bounce-x 2s infinite;
        }
        
        /* Responsive improvements */
        @media (max-width: 767px) {
          .text-7xl, .text-6xl {
            font-size: 2.5rem;
          }
          
          .text-4xl {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default IntegratedSystemHero;