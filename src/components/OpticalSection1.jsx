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
import { useTranslation } from 'react-i18next';

const IntegrationScenariosSection = () => {
  const { t } = useTranslation();
  
  // سيناريوهات الاتصال بين Frontend و Backend
  const scenarios = [
    {
      id: 1,
      title: t('loginAuthentication'),
      frontend: "React Component",
      backend: "PHP Auth API",
      process: [
        t('enterUserDataReactForm'),
        t('sendPOSTRequestPHPAPI'),
        t('verifyDataDatabase'),
        t('createJWTToken'),
        t('sendResponseFrontend'),
        t('storeTokenLocalStorage')
      ],
      technologies: ["JWT", "REST API", t('sessionManagement'), "CORS"],
      icon: <Shield />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: t('fetchCoursesFiltering'),
      frontend: "Courses Filter Component",
      backend: "PHP Query Builder",
      process: [
        t('defineFilterCriteriaInterface'),
        t('buildDynamicQueryReact'),
        t('sendGETRequestQueryParams'),
        t('processFilteringPHPPrepared'),
        t('fetchDataMySQL'),
        t('returnResultsJSON'),
        t('displayDataReactState')
      ],
      technologies: ["React Query", "Axios", "MySQL", t('pagination')],
      icon: <Filter />,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: t('uploadFilesContentManagement'),
      frontend: "File Upload Component",
      backend: "PHP File Handler",
      process: [
        t('selectFileReactInterface'),
        t('convertFileFormData'),
        t('sendPOSTRequestFileData'),
        t('verifyFileTypeSizePHP'),
        t('storeFileServerCloud'),
        t('saveFileLinkDatabase'),
        t('returnFileLinkDisplay')
      ],
      technologies: ["FormData", "Cloudinary/S3", t('fileValidation'), t('progressTracking')],
      icon: <Cloud />,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: t('financialTransactionsPayment'),
      frontend: "Payment Gateway Component",
      backend: "PHP Payment Processor",
      process: [
        t('enterPaymentDataSecure'),
        t('encryptDataFrontend'),
        t('sendSecureRequestGateway'),
        t('processPaymentPHPLibraries'),
        t('updateOrderStatusDatabase'),
        t('sendNotificationUser'),
        t('recordTransactionLogs')
      ],
      technologies: ["SSL/TLS", t('paymentAPIs'), t('encryption'), "Webhooks"],
      icon: <Zap />,
      color: "from-orange-500 to-red-500"
    }
  ];

  // أنواع الاتصال والتقنيات
  const connectionTypes = [
    {
      name: t('restfulAPIs'),
      description: t('standardHTTPCommunication'),
      useCase: t('mostCRUDOperations'),
      icon: <RefreshCw />,
      pros: [t('easyUnderstand'), t('scalable'), t('languageIndependent')],
      cons: [t('potentialOverFetching'), t('multipleRequests')]
    },
    {
      name: "WebSocket",
      description: t('bidirectionalRealTime'),
      useCase: t('liveChatsInstantNotifications'),
      icon: <GitBranch />,
      pros: [t('persistentConnection'), t('realTime'), t('highEfficiency')],
      cons: [t('higherComplexity'), t('requiresStateManagement')]
    },
    {
      name: "GraphQL",
      description: t('flexibleQueryLanguage'),
      useCase: t('complexAppsDiverseData'),
      icon: <Workflow />,
      pros: [t('preciseDataRequests'), t('singleEndpoint'), t('strongDataTyping')],
      cons: [t('learningCurve'), t('requiresAdvancedSetup')]
    }
  ];

  // حالات الاستجابة ومعالجتها
  const responseHandling = [
    {
      status: t('success200'),
      action: t('displayDataUser'),
      component: "SuccessNotification",
      example: t('displayCoursesSuccess')
    },
    {
      status: t('created201'),
      action: t('redirectUserNewPage'),
      component: "RedirectComponent",
      example: t('afterNewAccountCreation')
    },
    {
      status: t('badRequest400'),
      action: t('showErrorMessagesForm'),
      component: "ErrorMessages",
      example: t('incorrectLoginData')
    },
    {
      status: t('unauthorized401'),
      action: t('logoutRedirectLogin'),
      component: "AuthRedirect",
      example: t('sessionExpired')
    },
    {
      status: t('serverError500'),
      action: t('showErrorPageRetry'),
      component: "ErrorBoundary",
      example: t('serverProblem')
    }
  ];

  // أفضل الممارسات
  const bestPractices = [
    t('useAxiosInterceptors'),
    t('implementRetryLogic'),
    t('implementTransformers'),
    t('useReactQueryState'),
    t('implementErrorBoundaries'),
    t('addLoadingStates'),
    t('optimizeCachingRedis'),
    t('useQueueSystem')
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        
        {/* العنوان الرئيسي */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full mb-6">
            <ArrowRightLeft />
            <span className="font-bold">{t('frontendBackendInteraction')}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            {t('howReactCommunicatesPHP')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('exploreCommunicationMechanisms')}
          </p>
        </div>

        {/* مخطط التواصل العام */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 border border-gray-200">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            {t('communicationLayersDiagram')}
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
                    <p className="text-blue-600">{t('singlePageApplication')}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[t('components'), t('stateManagement'), t('userInterface'), t('clientSideLogic')].map((item, idx) => (
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
                    <p className="text-purple-600">{t('restfulEndpoints')}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[t('restAPIs'), t('authentication'), t('rateLimiting'), t('corsHandling')].map((item, idx) => (
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
                    <p className="text-green-600">{t('businessLogicDatabase')}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[t('businessLogic'), t('databaseOperations'), t('fileProcessing'), t('serverSideValidation')].map((item, idx) => (
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
            {t('responseStatusHandling')}
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
                  {t('component')}: {response.component}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* خاتمة */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            {t('whyThisCommunicationPattern')}
          </h3>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <Zap className="mx-auto mb-4 text-yellow-500" size={32} />
                <h4 className="font-bold text-lg mb-2">{t('superiorPerformance')}</h4>
                <p className="text-gray-600">{t('parallelRequestsSpeed')}</p>
              </div>
              <div className="text-center p-6">
                <Shield className="mx-auto mb-4 text-green-500" size={32} />
                <h4 className="font-bold text-lg mb-2">{t('advancedSecurity')}</h4>
                <p className="text-gray-600">{t('encryptionVerificationLayers')}</p>
              </div>
              <div className="text-center p-6">
                <RefreshCw className="mx-auto mb-4 text-blue-500" size={32} />
                <h4 className="font-bold text-lg mb-2">{t('scalability')}</h4>
                <p className="text-gray-600">{t('flexibleArchitectureGrowth')}</p>
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