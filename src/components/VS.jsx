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
import { useTranslation } from 'react-i18next';

const ComparisonSection = () => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;
  
  const comparisonData = [
    {
      id: 1,
      category: t('designInterface'),
      icon: <Layout />,
      oldSite: {
        description: t('traditionalDesign'),
        features: [
          t('traditionalColorsNoGradients'),
          t('nonInteractiveDesign'),
          t('staticImagesNoAnimation'),
          t('oldStyleLayout')
        ],
        rating: 3
      },
      newSite: {
        description: t('modernDesign'),
        features: [
          t('modernColorGradients'),
          t('advancedMotionInteractions'),
          t('dynamicMovingBackgrounds'),
          t('minimalistElegantDesign')
        ],
        rating: 10
      },
      improvement: t('improvementPercentage', { percentage: 233, category: t('visualAppeal') })
    },
    {
      id: 2,
      category: t('userInteraction'),
      icon: <Users />,
      oldSite: {
        description: t('oneWayInteraction'),
        features: [
          t('noHoverEffects'),
          t('noMicroInteractions'),
          t('passiveUserExperience'),
          t('slowClunkyNavigation')
        ],
        rating: 2
      },
      newSite: {
        description: t('dynamicFunInteraction'),
        features: [
          t('advancedHoverEffects'),
          t('microInteractionsEverywhere'),
          t('interactiveUserExperience'),
          t('smoothFastNavigation')
        ],
        rating: 10
      },
      improvement: t('increasePercentage', { percentage: 400, metric: t('userInteraction') })
    },
    {
      id: 3,
      category: t('performanceSpeed'),
      icon: <Zap />,
      oldSite: {
        description: t('slowLimitedPerformance'),
        features: [
          t('loadTime5to8Seconds'),
          t('noLazyLoading'),
          t('fullPageLoadAtOnce'),
          t('highResourceConsumption')
        ],
        rating: 3
      },
      newSite: {
        description: t('superFastPerformance'),
        features: [
          t('loadTimeLessThan1Second'),
          t('advancedLazyLoading'),
          t('smartCodeSplitting'),
          t('coreWebVitalsOptimizations')
        ],
        rating: 10
      },
      improvement: t('improvementPercentage', { percentage: 500, category: t('loadSpeed') })
    },
    {
      id: 4,
      category: t('mobileCompatibility'),
      icon: <Smartphone />,
      oldSite: {
        description: t('nonResponsive'),
        features: [
          t('desktopOnlyFixedDesign'),
          t('contentBreakSmallScreens'),
          t('unclickableButtons'),
          t('poorMobileUserExperience')
        ],
        rating: 2
      },
      newSite: {
        description: t('fullyResponsiveDesign'),
        features: [
          t('mobileFirstDesign'),
          t('smartAdaptationAllScreens'),
          t('touchExperienceOptimization'),
          t('integratedDesignAllDevices')
        ],
        rating: 10
      },
      improvement: t('improvementPercentage', { percentage: 400, category: t('mobileExperience') })
    },
    {
      id: 5,
      category: t('systemIntegration'),
      icon: <GitMerge />,
      oldSite: {
        description: t('isolatedSystem'),
        features: [
          t('noLMSIntegration'),
          t('noERPIntegration'),
          t('manualDataManagement'),
          t('informationConflict')
        ],
        rating: 1
      },
      newSite: {
        description: t('fullyIntegratedSystem'),
        features: [
          t('fullIntegrationAllLMS'),
          t('directConnectionERP'),
          t('unifiedControlPanel'),
          t('instantDataSync')
        ],
        rating: 10
      },
      improvement: t('integrationSystems', { count: 10 })
    },
    {
      id: 6,
      category: t('seo'),
      icon: <Search />,
      oldSite: {
        description: t('notOptimizedSEO'),
        features: [
          t('incorrectHTMLStructure'),
          t('imagesNoAltTags'),
          t('nonIndexableContent'),
          t('poorLoadSpeed')
        ],
        rating: 2
      },
      newSite: {
        description: t('fullyOptimizedSEO'),
        features: [
          t('correctHTML5Structure'),
          t('dynamicMetaTagsOptimization'),
          t('fullyIndexableContent'),
          t('superSpeedPositiveRanking')
        ],
        rating: 10
      },
      improvement: t('improvementPercentage', { percentage: 400, category: t('searchResults') })
    },
    {
      id: 7,
      category: t('userExperience'),
      icon: <TrendingUp />,
      oldSite: {
        description: t('complexUserExperience'),
        features: [
          t('contentDistraction'),
          t('difficultyFindingInformation'),
          t('complicatedRegistrationProcess'),
          t('nonIntuitiveInterface')
        ],
        rating: 3
      },
      newSite: {
        description: t('exceptionalUserExperience'),
        features: [
          t('intuitiveEasyToUseDesign'),
          t('organizedContent'),
          t('simplifiedRegistrationProcess'),
          t('interactiveGuideNewUsers')
        ],
        rating: 10
      },
      improvement: t('increasePercentage', { percentage: 233, metric: t('userSatisfaction') })
    },
    {
      id: 8,
      category: t('featuresFunctions'),
      icon: <BarChart />,
      oldSite: {
        description: t('limitedBasicFunctions'),
        features: [
          t('basicCourseManagementOnly'),
          t('noRecruitmentSystem'),
          t('noAdvancedFilter'),
          t('noTeachersControlPanel')
        ],
        rating: 3
      },
      newSite: {
        description: t('integratedMultiFunctionPlatform'),
        features: [
          t('integratedCoursesSmartFilter'),
          t('integratedRecruitmentPlatform'),
          t('specializedControlPanelsEachRole'),
          t('advancedAdSystem')
        ],
        rating: 10
      },
      improvement: t('increasePercentage', { percentage: 300, metric: t('availableFunctions') })
    }
  ];

  // Pagination
  const totalItems = comparisonData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentItems = comparisonData.slice(startIndex, endIndex);
  const currentCardNumber = currentPage * itemsPerPage;

  // Change page
  const handlePageChange = (page) => {
    setCurrentPage(page);
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
      aspect: t('technologyUsed'),
      old: t('traditionalHTMLCSSJS'),
      new: t('reactPHPTailwind'),
      advantage: t('instantUpdatePerformanceMaintenance')
    },
    {
      aspect: t('stateManagement'),
      old: t('noStateManagement'),
      new: t('advancedStateManagement'),
      advantage: t('dataConsistencyInstantUpdatesBetterExperience')
    },
    {
      aspect: t('updates'),
      old: t('manualFullSiteUpdate'),
      new: t('liveUpdatesNoReload'),
      advantage: t('workContinuitySmoothExperienceLessTime')
    },
    {
      aspect: t('security'),
      old: t('basicProtectionOnly'),
      new: t('multiLayerProtection'),
      advantage: t('advancedProtectionSecureDataStandardsCompliance')
    },
    {
      aspect: t('maintenance'),
      old: t('difficultMaintenanceDevelopment'),
      new: t('modularStructureEasyMaintenance'),
      advantage: t('lowerCostsFasterTimeHighScalability')
    }
  ];

  const PerformanceMetrics = () => {
    const { t } = useTranslation();
    return (
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-12 border border-blue-100">
        <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
          {t('technicalPerformanceComparison')}
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { metric: t('loadSpeed'), old: "5s", new: "0.8s", improvement: "525%" },
            { metric: t('pageSize'), old: "4MB", new: "500KB", improvement: "700%" },
            { metric: t('httpRequests'), old: "40+", new: "10-15", improvement: "300%" },
            { metric: t('coreWebVitals'), old: t('poor'), new: t('good'), improvement: "A+" },
            { metric: t('responseTime'), old: "300ms", new: "50ms", improvement: "500%" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="text-sm text-gray-500 mb-2">{item.metric}</div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-red-500 line-through">{item.old}</span>
                <ArrowUpRight className="text-blue-500" />
                <span className="text-green-600 font-bold">{item.new}</span>
              </div>
              <div className="text-sm font-medium text-blue-600">
                {item.improvement} {t('improvement')}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="comparison-section" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        
        {/* Main title with icon */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full mb-6 shadow-lg">
            <RefreshCw size={24} />
            <span className="text-xl font-bold">{t('digitalTransformation')}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t('comprehensiveComparison')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('comparisonSubtitle')}
          </p>
        </div>

        {/* Performance comparison */}
        <PerformanceMetrics />

        {/* Pagination info bar */}
        <div className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-700">
              <span className="font-bold">{t('showingCards')}:</span> {currentCardNumber - 1}-{Math.min(currentCardNumber, totalItems)} {t('of')} {totalItems}
            </div>
            <div className="text-gray-700">
              <span className="font-bold">{t('page')}:</span> {currentPage} {t('of')} {totalPages}
            </div>
          </div>
        </div>

        {/* Interactive comparison cards with pagination */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {currentItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300">
              {/* Card header */}
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

              {/* Card content */}
              <div className="p-8">
                {/* Rating comparison */}
                <div className="flex justify-between items-center mb-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-400">{item.oldSite.rating}/10</div>
                    <div className="text-sm text-gray-500 mt-1">{t('oldSite')}</div>
                  </div>
                  <ArrowUpRight className="text-gray-400" size={32} />
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-500">{item.newSite.rating}/10</div>
                    <div className="text-sm text-gray-500 mt-1">{t('newSite')}</div>
                  </div>
                </div>

                {/* Old site */}
                <div className="mb-8 p-6 bg-red-50 rounded-xl border border-red-100">
                  <div className="flex items-center gap-3 mb-4">
                    <XCircle className="text-red-500" />
                    <h4 className="font-bold text-lg text-red-700">{t('oldSite')}</h4>
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

                {/* New site */}
                <div className="p-6 bg-green-50 rounded-xl border border-green-100">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="text-green-500" />
                    <h4 className="font-bold text-lg text-green-700">{t('newSite')}</h4>
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

                {/* Improvement */}
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

        {/* Pagination controls */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {/* Cards info */}
            <div className="text-gray-700 hidden md:block">
              {t('cards')} {currentCardNumber - 1}-{Math.min(currentCardNumber, totalItems)} {t('of')} {totalItems}
            </div>
            
            {/* Pagination buttons */}
            <div className="flex items-center gap-2">
              {/* First page button */}
              <button
                onClick={goToFirstPage}
                disabled={currentPage === 1}
                className="p-2 rounded-lg hover:bg-blue-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                title={t('firstPage')}
              >
                <ChevronsLeft className="text-gray-600" size={20} />
              </button>
              
              {/* Previous page button */}
              <button
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
                className="p-2 rounded-lg hover:bg-blue-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                title={t('previousPage')}
              >
                <ChevronLeft className="text-gray-600" size={20} />
              </button>
              
              {/* Page numbers */}
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
              
              {/* Next page button */}
              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg hover:bg-blue-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                title={t('nextPage')}
              >
                <ChevronRight className="text-gray-600" size={20} />
              </button>
              
              {/* Last page button */}
              <button
                onClick={goToLastPage}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg hover:bg-blue-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                title={t('lastPage')}
              >
                <ChevronsRight className="text-gray-600" size={20} />
              </button>
            </div>
            
            {/* Page size selector (Mobile) */}
            <div className="md:hidden flex items-center gap-2">
              <span className="text-gray-700 text-sm">{t('page')}:</span>
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
          
          {/* Pagination dots (Mobile view) */}
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

        {/* Advanced technical comparison */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 border border-gray-200">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            <Cpu className="inline-block mr-3 text-blue-500" />
            {t('technicalComparison')}
          </h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-purple-600">
                  <th className="px-8 py-4 text-right text-lg font-bold text-white">{t('technicalAspect')}</th>
                  <th className="px-8 py-4 text-right text-lg font-bold text-white">{t('oldTechnology')}</th>
                  <th className="px-8 py-4 text-right text-lg font-bold text-white">{t('newTechnology')}</th>
                  <th className="px-8 py-4 text-right text-lg font-bold text-white">{t('competitiveAdvantage')}</th>
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

        {/* Results summary */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 text-white shadow-2xl">
          <div className="text-center mb-10">
            <Award className="mx-auto mb-6" size={48} />
            <h2 className="text-3xl font-bold mb-4">{t('expectedResults')}</h2>
            <p className="text-xl opacity-90">
              {t('qualitativeLeapAllAspects')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: t('increaseInteraction'), 
                value: "300%+", 
                desc: t('increaseUserInteraction') 
              },
              { 
                title: t('performanceImprovement'), 
                value: "500%+", 
                desc: t('improvementPageLoadSpeed') 
              },
              { 
                title: t('timeSaving'), 
                value: "70%", 
                desc: t('savingContentManagementTime') 
              },
              { 
                title: t('customerSatisfaction'), 
                value: "95%", 
                desc: t('expectedEndUserSatisfaction') 
              }
            ].map((result, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="text-4xl font-bold mb-2">{result.value}</div>
                <h4 className="text-xl font-bold mb-2">{result.title}</h4>
                <p className="text-white/80 text-sm">{result.desc}</p>
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div className="mt-12 pt-8 border-t border-white/20 text-center">
            <div className="inline-flex items-center gap-4 bg-white/10 px-8 py-4 rounded-full">
              <Shield className="text-yellow-300" />
              <span className="text-lg">
                <span className="font-bold">{t('conclusion')}:</span> {t('conclusionText')}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ComparisonSection;