import React from 'react';
import { 
  Database, 
  Server, 
  Cpu, 
  Zap, 
  Shield, 
  RefreshCw,
  ArrowRightLeft,
  Code,
  GitBranch,
  Cloud,
  Layers,
  Workflow,
  CheckCircle,
  AlertCircle,
  Clock,
  Terminal
} from 'lucide-react';

const IntegrationScenariosSection = () => {
  // سيناريوهات الاتصال بين Frontend و Backend
  const scenarios = [
    {
      id: 1,
      title: "تسجيل الدخول والمصادقة",
      frontend: "React Component",
      backend: "PHP Auth API",
      process: [
        "إدخال بيانات المستخدم في نموذج React",
        "إرسال طلب POST إلى API PHP",
        "التحقق من البيانات في قاعدة البيانات",
        "إنشاء JWT Token",
        "إرسال الاستجابة للفرونت إند",
        "تخزين Token في Local Storage"
      ],
      technologies: ["JWT", "REST API", "Session Management", "CORS"],
      icon: <Shield />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "جلب قائمة الدورات مع الفلترة",
      frontend: "Courses Filter Component",
      backend: "PHP Query Builder",
      process: [
        "تحديد معايير الفلترة من الواجهة",
        "بناء query ديناميكي في React",
        "إرسال GET request مع query parameters",
        "معالجة الفلترة في PHP مع prepared statements",
        "جلب البيانات من MySQL",
        "إرجاع النتائج كـ JSON",
        "عرض البيانات مع React State"
      ],
      technologies: ["React Query", "Axios", "MySQL", "Pagination"],
      icon: <Filter />,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "رفع ملفات وإدارة المحتوى",
      frontend: "File Upload Component",
      backend: "PHP File Handler",
      process: [
        "اختيار الملف من واجهة React",
        "تحويل الملف إلى FormData",
        "إرسال POST request مع file data",
        "التحقق من نوع وحجم الملف في PHP",
        "تخزين الملف في server أو cloud storage",
        "حفظ رابط الملف في قاعدة البيانات",
        "إرجاع رابط الملف للعرض"
      ],
      technologies: ["FormData", "Cloudinary/S3", "File Validation", "Progress Tracking"],
      icon: <Cloud />,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "المعاملات المالية والدفع",
      frontend: "Payment Gateway Component",
      backend: "PHP Payment Processor",
      process: [
        "إدخال بيانات الدفع في واجهة آمنة",
        "تشفير البيانات في الفرونت إند",
        "إرسال طلب آمن لـ Payment Gateway",
        "معالجة الدفع في PHP مع مكتبات خاصة",
        "تحديث حالة الطلب في قاعدة البيانات",
        "إرسال إشعار للمستخدم",
        "تسجيل المعاملة في سجلات النظام"
      ],
      technologies: ["SSL/TLS", "Payment APIs", "Encryption", "Webhooks"],
      icon: <Zap />,
      color: "from-orange-500 to-red-500"
    }
  ];

  // أنواع الاتصال والتقنيات
  const connectionTypes = [
    {
      name: "RESTful APIs",
      description: "الاتصال القياسي باستخدام HTTP methods",
      useCase: "معظم العمليات CRUD",
      icon: <RefreshCw />,
      pros: ["سهل الفهم", "قابل للتوسع", "مستقل عن اللغة"],
      cons: ["Over-fetching محتمل", "متعدد الطلبات"]
    },
    {
      name: "WebSocket",
      description: "اتصال ثنائي الاتجاه في الوقت الحقيقي",
      useCase: "المحادثات الحية - الإشعارات الفورية",
      icon: <GitBranch />,
      pros: ["اتصال مستمر", "وقت حقيقي", "كفاءة عالية"],
      cons: ["تعقيد أعلى", "يتطلب إدارة حالة"]
    },
    {
      name: "GraphQL",
      description: "لغة استعلام أكثر مرونة للبيانات",
      useCase: "التطبيقات المعقدة ذات البيانات المتنوعة",
      icon: <Workflow />,
      pros: ["طلب بيانات دقيق", "نقطة نهاية واحدة", "نوعية البيانات قوية"],
      cons: ["منحنى تعليمي", "يتطلب إعداد متقدم"]
    }
  ];

  // حالات الاستجابة ومعالجتها
  const responseHandling = [
    {
      status: "Success (200)",
      action: "عرض البيانات للمستخدم",
      component: "SuccessNotification",
      example: "عرض قائمة الدورات بنجاح"
    },
    {
      status: "Created (201)",
      action: "توجيه المستخدم للصفحة الجديدة",
      component: "RedirectComponent",
      example: "بعد إنشاء حساب جديد"
    },
    {
      status: "Bad Request (400)",
      action: "عرض رسائل الخطأ في النموذج",
      component: "ErrorMessages",
      example: "بيانات تسجيل دخول غير صحيحة"
    },
    {
      status: "Unauthorized (401)",
      action: "تسجيل خروج وتوجيه لصفحة تسجيل الدخول",
      component: "AuthRedirect",
      example: "انتهت صلاحية الجلسة"
    },
    {
      status: "Server Error (500)",
      action: "عرض صفحة خطأ مع إمكانية إعادة المحاولة",
      component: "ErrorBoundary",
      example: "مشكلة في الخادم"
    }
  ];

  // أفضل الممارسات
  const bestPractices = [
    "استخدام axios interceptors للتحكم في الطلبات",
    "تنفيذ retry logic للطلبات الفاشلة",
    "تنفيذ request/response transformers",
    "استخدام React Query للـ state management",
    "تنفيذ proper error boundaries",
    "إضافة loading states لكل عملية",
    "تحسين الـ caching باستخدام Redis",
    "استخدام queue system للمهام الثقيلة"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        
        {/* العنوان الرئيسي */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full mb-6">
            <ArrowRightLeft />
            <span className="font-bold">تفاعل الفرونت إند مع الباك إند</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            كيف يتواصل React مع PHP في منصتنا؟
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            استكشاف آليات الاتصال، سيناريوهات التفاعل، ومعالجة البيانات بين واجهة React والخلفية PHP
          </p>
        </div>

        {/* مخطط التواصل العام */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 border border-gray-200">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            مخطط التواصل بين الطبقات
          </h2>
          <div className="relative">
            {/* خط الاتصال */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500"></div>
            
            {/* الطبقات */}
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              {/* React Frontend */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border-2 border-blue-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <Cpu className="text-blue-600" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-700">React Frontend</h3>
                    <p className="text-blue-600">Single Page Application</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {['Components', 'State Management', 'User Interface', 'Client-side Logic'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="text-green-500" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* API Layer */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border-2 border-purple-200 transform md:-translate-y-4">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <Server className="text-purple-600" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-purple-700">API Layer</h3>
                    <p className="text-purple-600">RESTful Endpoints</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {['REST APIs', 'Authentication', 'Rate Limiting', 'CORS Handling'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="text-green-500" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* PHP Backend */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border-2 border-green-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <Terminal className="text-green-600" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-green-700">PHP Backend</h3>
                    <p className="text-green-600">Business Logic & Database</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {['Business Logic', 'Database Operations', 'File Processing', 'Server-side Validation'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="text-green-500" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>


        {/* معالجة الاستجابات */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            معالجة حالات الاستجابة
          </h2>
          <div className="grid md:grid-cols-5 gap-6">
            {responseHandling.map((response, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <div className={`inline-flex px-4 py-2 rounded-full mb-4 ${
                  response.status.includes('200') || response.status.includes('201') 
                    ? 'bg-green-100 text-green-700' 
                    : response.status.includes('400') || response.status.includes('401')
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-red-100 text-red-700'
                }`}>
                  {response.status}
                </div>
                <h4 className="font-bold text-lg mb-3">{response.action}</h4>
                <p className="text-gray-600 text-sm mb-4">{response.example}</p>
                <div className="text-blue-600 text-sm font-medium">
                  Component: {response.component}
                </div>
              </div>
            ))}
          </div>
        </div>

    

        {/* خاتمة */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            لماذا هذا النمط من التواصل؟
          </h3>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <Zap className="mx-auto mb-4 text-yellow-500" size={32} />
                <h4 className="font-bold text-lg mb-2">أداء فائق</h4>
                <p className="text-gray-600">طلبات موازية وتحسين في السرعة</p>
              </div>
              <div className="text-center p-6">
                <Shield className="mx-auto mb-4 text-green-500" size={32} />
                <h4 className="font-bold text-lg mb-2">أمان متقدم</h4>
                <p className="text-gray-600">تشفير وتحقق في كل طبقة</p>
              </div>
              <div className="text-center p-6">
                <RefreshCw className="mx-auto mb-4 text-blue-500" size={32} />
                <h4 className="font-bold text-lg mb-2">قابلية التوسع</h4>
                <p className="text-gray-600">بنية مرنة للنمو والتطور</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

// Component for Filter icon (إذا لم يكن مستورد)
const Filter = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    {...props}
  >
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
  </svg>
);

export default IntegrationScenariosSection;