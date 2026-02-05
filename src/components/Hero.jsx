import React, { useState, useEffect } from "react";
import { 
  Cpu, Database, Globe, LayoutDashboard, 
  Zap, ArrowRight, Link, Shield, Users,
  BookOpen, BarChart, CreditCard, MessageSquare
} from "lucide-react";

const IntegratedSystemHero = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    setIsAnimating(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 px-6 py-12">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated connecting lines */}
        <div className="absolute top-1/4 left-1/4 w-1 h-64 bg-gradient-to-b from-blue-500/50 to-transparent animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-1 bg-gradient-to-l from-purple-500/50 to-transparent animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-48 bg-gradient-to-t from-green-500/50 to-transparent animate-pulse delay-500"></div>
        
        {/* Floating icons */}
        <div className="absolute top-20 right-20 animate-float">
          <div className="bg-blue-500/10 p-6 rounded-2xl backdrop-blur-sm border border-blue-500/30">
            <BookOpen size={32} className="text-blue-400" />
          </div>
        </div>
        
        <div className="absolute bottom-32 left-32 animate-float delay-1000">
          <div className="bg-green-500/10 p-6 rounded-2xl backdrop-blur-sm border border-green-500/30">
            <Database size={32} className="text-green-400" />
          </div>
        </div>
        
        <div className="absolute top-40 left-40 animate-float delay-1500">
          <div className="bg-purple-500/10 p-6 rounded-2xl backdrop-blur-sm border border-purple-500/30">
            <Globe size={32} className="text-purple-400" />
          </div>
        </div>
      </div>

     

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-6xl mx-auto text-center">
        
        {/* Header with Animation */}
        <div className={`transition-all duration-1000 ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-6 py-3 rounded-full mb-8 backdrop-blur-sm border border-blue-500/30">
            <Zap size={24} className="text-yellow-400" />
            <span className="text-white font-bold">OPTICAL DIGITIZATION</span>
          </div>

          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block">التحول الرقمي المتكامل</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              بلوحة تحكم واحدة
            </span>
          </h1>
        </div>

        {/* Main Selling Point */}
        <div className={`mb-12 transition-all duration-1000 delay-300 ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex flex-col md:flex-row items-center justify-center gap-4 bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-pink-900/30 p-8 rounded-2xl backdrop-blur-sm border border-gray-700/50">
            <div className="flex items-center gap-4">
              <div className="bg-blue-500/20 p-3 rounded-xl">
                <BookOpen size={28} className="text-blue-400" />
              </div>
              <span className="text-white text-2xl font-bold">LMS</span>
            </div>
            
            <Link size={24} className="text-yellow-400 animate-pulse" />
            
            <div className="flex items-center gap-4">
              <div className="bg-green-500/20 p-3 rounded-xl">
                <Database size={28} className="text-green-400" />
              </div>
              <span className="text-white text-2xl font-bold">ERP</span>
            </div>
            
            <Link size={24} className="text-yellow-400 animate-pulse" />
            
            <div className="flex items-center gap-4">
              <div className="bg-purple-500/20 p-3 rounded-xl">
                <Globe size={28} className="text-purple-400" />
              </div>
              <span className="text-white text-2xl font-bold">الموقع</span>
            </div>
            
            <ArrowRight size={24} className="text-white" />
            
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-xl">
              <LayoutDashboard size={32} className="text-white" />
            </div>
            
            <span className="text-white text-2xl font-bold">لوحة تحكم واحدة</span>
          </div>
        </div>

        {/* Description */}
        <div className={`mb-12 transition-all duration-1000 delay-500 ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            نظام إدارة شامل يجمع كل الأنظمة الأساسية في مكان واحد
            <br />
            <span className="text-blue-300">إدارة الطلاب</span> • 
            <span className="text-green-300"> الشؤون المالية</span> • 
            <span className="text-purple-300"> المحتوى التعليمي</span> • 
            <span className="text-yellow-300"> الموقع الإلكتروني</span>
          </p>
        </div>

        {/* Features Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 transition-all duration-1000 delay-700 ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { 
              icon: <Users size={24} />, 
              title: "إدارة موحدة", 
              desc: "لجميع الأقسام والأنظمة",
              color: "from-blue-500/20 to-blue-600/20",
              border: "border-blue-500/30"
            },
            { 
              icon: <BarChart size={24} />, 
              title: "تقارير شاملة", 
              desc: "بيانات حية ومحدثة",
              color: "from-green-500/20 to-green-600/20",
              border: "border-green-500/30"
            },
            { 
              icon: <Shield size={24} />, 
              title: "أمان متكامل", 
              desc: "حماية مركزية للبيانات",
              color: "from-purple-500/20 to-purple-600/20",
              border: "border-purple-500/30"
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${feature.color} backdrop-blur-sm rounded-2xl p-6 border ${feature.border} hover:scale-105 transition-all duration-300`}
            >
              <div className="flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.desc}</p>
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
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default IntegratedSystemHero;