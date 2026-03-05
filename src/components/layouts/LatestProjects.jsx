import React, {useState, useEffect, useRef, lazy, Suspense, useCallback} from "react";
import {useLanguage} from '../../i18n/LanguageProvider';
import {SiGoogleplay} from "react-icons/si";

const MovilDesktop = lazy(() => import("../common/MovilDesktop"));
const MonitorDesktop = lazy(() => import("../common/MonitorDesktop"));
const CarouselLazy = lazy(() => import('../../components/common/Carousel'));


export default function LatestProjects() {
    const [activeProject, setActiveProject] = useState(0);
    const [showApkModal, setShowApkModal] = useState(false);
    const [modalExiting, setModalExiting] = useState(false);
    const [carouselWidth, setCarouselWidth] = useState(500);
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);
    const {t} = useLanguage();

    // Traducciones locales para evitar llamadas directas a t(...) dentro del JSX
    const downloadSafeTitle = t('download_safe_title');
    const apkIsSafe = t('apk_is_safe');
    const apkRepoSentence = t('apk_repo_sentence');
    const apkInstallAndroid = t('apk_install_android');
    const downloadApkText = t('download_apk');
    const cancelText = t('cancel');

    useEffect(() => {
        const updateCarouselWidth = () => {
            const width = window.innerWidth;

            if (width < 640) {
                // Móviles pequeños
                setCarouselWidth(320);
            } else if (width < 1024) {
                // Tablets
                setCarouselWidth(400);
            } else {
                // Desktop
                setCarouselWidth(500);
            }
        };

        updateCarouselWidth();
        window.addEventListener('resize', updateCarouselWidth);
        return () => window.removeEventListener('resize', updateCarouselWidth);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {rootMargin: '200px'}
        );
        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    const projects = [
        {
            id: 0,
            emoji: "⏱️",
            title: "PomoTimerFlow",
            description: "Una aplicación móvil de Técnica Pomodoro moderna, elegante y personalizable construida con React Native, Expo y NativeWind.",
            tags: [
                {name: "React Native", color: "bg-blue-100 text-blue-700"},
                {name: "Expo", color: "bg-purple-100 text-purple-700"}
            ],
            type: "mobile",
            url: "https://pomo-timer-flow.vercel.app/",
            app: "https://play.google.com/store/apps/details?id=com.camilocuenca.PomoTimerFlow",
            hasCarousel: true
        },
        {
            id: 1,
            emoji: "🦷",
            title: "Odontologic",
            description: "Sistema de gestión para clínicas odontológicas que permite la digitalización de historiales médicos, control de inventario y agendamiento automatizado de citas.",
            tags: [
                {name: "React", color: "bg-cyan-100 text-cyan-700"},
                {name: "Node.js", color: "bg-green-100 text-green-700"},
                {name: "Mysql", color: "bg-blue-100 text-blue-700"}
            ],
            type: "desktop",
            url: "https://dental-management-system-frontend.vercel.app/",

            hasCarousel: false
        }
    ];

    const currentProject = projects[activeProject];

    // Memoize callbacks to prevent unnecessary re-renders
    const handleActiveProjectChange = useCallback((index) => {
        setActiveProject(index);
    }, []);

    const handleShowApkModal = useCallback(() => {
        setShowApkModal(true);
    }, []);

    const handleCloseApkModal = useCallback(() => {
        setModalExiting(true);
        setTimeout(() => {
            setShowApkModal(false);
            setModalExiting(false);
        }, 300);
    }, []);

    return (
        <div ref={containerRef} className="w-full">


            <div className="relative max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
                {/* Header Section */}
                <div className="text-center mb-8 sm:mb-12 lg:mb-16 px-4">
                    <div className="inline-block mb-4">

                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold  mb-4">
                        {t('projects_title')}
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg px-4">
                        {t('projects_intro')}
                    </p>
                </div>

                {/* Tabs Navigation */}
                <div className="flex justify-center mb-6 sm:mb-8 px-4">
                    <div
                        className="inline-flex bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-1.5 sm:p-2 shadow-xl border border-white/20">
                        {projects.map((project, index) => (
                            <button
                                key={project.id}
                                onClick={() => handleActiveProjectChange(index)}
                                className={`relative px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 sm:gap-3 text-sm sm:text-base ${
                                    activeProject === index
                                        ? 'text-white'
                                        : 'text-gray-600 hover:text-gray-800'
                                }`}
                            >
                                {activeProject === index && (
                                    <div
                                        className="absolute inset-0 bg-primary sm:rounded-xl shadow-lg animate-tab-highlight"
                                    />
                                )}
                                <span className="relative z-10 text-xl sm:text-2xl">{project.emoji}</span>
                                <span className="relative z-10 hidden sm:inline">{project.title}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Project Card with Animation */}
                <div key={activeProject} className="animate-card-fade-in">
                    <div
                        className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-2xl border border-white/20 overflow-hidden mx-2 sm:mx-4 lg:mx-0"
                    >
                        <div className="p-4 sm:p-6 lg:p-8 xl:p-12">
                            {/* Project Header */}
                            <div
                                className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 sm:mb-8 gap-4">
                                <div>
                                    <div className="flex items-center gap-2 sm:gap-3 mb-3">
                                        <span className="text-2xl sm:text-3xl">{currentProject.emoji}</span>
                                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                                            {currentProject.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-3xl leading-relaxed">
                                        {currentProject.description}
                                    </p>
                                </div>
                                <div className="flex gap-2 flex-wrap">
                                    {currentProject.tags.map((tag, index) => (
                                        <span key={index}
                                              className={`px-3 py-1 rounded-full text-xs font-semibold ${tag.color}`}>
                                            {tag.name}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Content based on project type */}
                            {currentProject.type === 'mobile' ? (
                                <div
                                    className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 items-start">
                                    {/* Carousel Section */}
                                    <div className="flex flex-col items-center justify-center">
                                        <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800 mb-3 sm:mb-4 lg:mb-6 text-center">
                                            {t('features_title')}
                                        </h4>
                                        <div className="w-full flex justify-center px-2 sm:px-0">
                                            {isVisible ? (
                                                <Suspense fallback={<div style={{height: 180}}/>}>
                                                    <CarouselLazy
                                                        baseWidth={carouselWidth}
                                                        autoplay={true}
                                                        autoplayDelay={4000}
                                                        pauseOnHover={true}
                                                        loop={true}
                                                        round={false}
                                                    />
                                                </Suspense>
                                            ) : (
                                                <div className="w-full h-40 bg-white/40 rounded-xl"/>
                                            )}
                                        </div>

                                        <div className="mt-3 sm:mt-4 lg:mt-6 w-full px-2 sm:px-0">
                                            {/* Fila superior (2 botones) */}
                                            <div className="flex flex-col sm:flex-row gap-3 w-full">
                                                <a
                                                    href={currentProject.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3
                 bg-gradient-to-r from-blue-500 to-purple-500
                 text-white font-semibold rounded-lg lg:rounded-xl
                 shadow-lg hover:shadow-xl hover:scale-105
                 transition-all duration-300
                 text-xs sm:text-sm lg:text-base text-center whitespace-nowrap"
                                                >
                                                    {t('view_app_web')}
                                                </a>

                                                <button
                                                    onClick={handleShowApkModal}
                                                    className="flex-1 px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3
                 bg-gradient-to-r from-green-500 to-emerald-500
                 text-white font-semibold rounded-lg lg:rounded-xl
                 shadow-lg hover:shadow-xl hover:scale-105
                 transition-all duration-300
                 text-xs sm:text-sm lg:text-base whitespace-nowrap"
                                                >
                                                    {t('download_apk_btn')}
                                                </button>
                                            </div>

                                            {/* Fila inferior (Google Play) */}
                                            <a
                                                href={currentProject.app}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`Abrir en Google Play: ${currentProject.title}`}
                                                className="mt-3 w-full flex items-center justify-center gap-2
               px-4 lg:px-6 py-2.5 lg:py-3
               bg-gradient-to-r from-[#34A853] via-[#4285F4] to-[#FBBC05]
               text-white font-semibold rounded-lg lg:rounded-xl
               shadow-lg hover:shadow-xl hover:scale-[1.02]
               transition-all duration-300
               text-sm lg:text-base"
                                            >
                                                {/* Icono Google Play */}
                                                <SiGoogleplay size={22} className="group-hover:animate-pulse"/>

                                                {t('download_app_gplay_btn')}
                                            </a>
                                        </div>

                                    </div>

                                    {/* Mobile Preview Section */}
                                    <div className="flex flex-col items-center justify-center">
                                        <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800 mb-3 sm:mb-4 lg:mb-6 text-center">
                                            {t('mobile_preview')}
                                        </h4>
                                        <div
                                            className="transform hover:scale-105 transition-transform duration-300 w-full flex justify-center">
                                            {isVisible ? (
                                                <Suspense fallback={<div
                                                    className="w-full h-[300px] bg-white/40 rounded-xl"/>}>
                                                    <MovilDesktop url={currentProject.url}/>
                                                </Suspense>
                                            ) : (
                                                <div className="w-full h-[300px] bg-white/40 rounded-xl"/>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                /* Desktop Preview */
                                <div className="flex flex-col items-center justify-center">
                                    <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800 mb-3 sm:mb-4 lg:mb-6 text-center">
                                        {t('desktop_view')}
                                    </h4>

                                    {/* Credenciales de prueba */}
                                    <div
                                        className="mb-4 sm:mb-6 w-full max-w-2xl bg-gradient-to-r from-cyan-50 to-blue-50 border-l-4 border-cyan-500 rounded-lg p-3 sm:p-4 lg:p-6 shadow-md">
                                        <h5 className="font-bold text-gray-800 mb-2 sm:mb-3 lg:mb-4 flex items-center gap-2 text-xs sm:text-sm lg:text-base">
                                            {t('creds_title')}
                                        </h5>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
                                            <div className="bg-white/70 rounded-lg p-3 sm:p-4 border border-cyan-200">
                                                <p className="font-semibold text-cyan-700 mb-2 text-sm">{t('role_admin')}</p>
                                                <p className="text-xs sm:text-sm text-gray-700"><span
                                                    className="font-medium">{t('label_user')}</span> 444444446</p>
                                                <p className="text-xs sm:text-sm text-gray-700"><span
                                                    className="font-medium">{t('label_password')}</span> C@ntraseña123
                                                </p>
                                            </div>
                                            <div className="bg-white/70 rounded-lg p-3 sm:p-4 border border-blue-200">
                                                <p className="font-semibold text-blue-700 mb-2 text-sm">{t('role_patient')}</p>
                                                <p className="text-xs sm:text-sm text-gray-700"><span
                                                    className="font-medium">{t('label_user')}</span> 555555556</p>
                                                <p className="text-xs sm:text-sm text-gray-700"><span
                                                    className="font-medium">{t('label_password')}</span> C@ntraseña123
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full flex justify-center px-2 sm:px-0">
                                        {isVisible ? (
                                            <Suspense fallback={<div
                                                className="w-full h-[150px] sm:h-[180px] bg-white/40 rounded-lg lg:rounded-xl"/>}>
                                                <MonitorDesktop url={currentProject.url}/>
                                            </Suspense>
                                        ) : (
                                            <div
                                                className="w-full h-[150px] sm:h-[180px] bg-white/40 rounded-lg lg:rounded-xl"/>
                                        )}
                                    </div>
                                    <a
                                        href={currentProject.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-3 sm:mt-4 lg:mt-6 xl:mt-8 px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg lg:rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-xs sm:text-sm lg:text-base w-full sm:w-auto text-center"
                                    >
                                        {t('view_live_system')}
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Navigation Arrows */}
                <div className="flex justify-center gap-2 sm:gap-4 mt-6 sm:mt-8 px-4">
                    <button
                        onClick={() => setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1))}
                        className="p-2 sm:p-4 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-white/20 hover:scale-110 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white group"
                    >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover:text-white" fill="none"
                             stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                        </svg>
                    </button>
                    <button
                        onClick={() => setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1))}
                        className="p-2 sm:p-4 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-white/20 hover:scale-110 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white group"
                    >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover:text-white" fill="none"
                             stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                        </svg>
                    </button>
                </div>

                {/* Modal de descarga APK */}
                {showApkModal && (
                    <div
                        onClick={handleCloseApkModal}
                        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 ${
                            modalExiting ? 'animate-backdrop-fade-out' : 'animate-backdrop-fade-in'
                        }`}
                    >
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className={`relative bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20 max-w-lg w-full mx-2 ${
                                modalExiting ? 'animate-modal-exit' : 'animate-modal-spring'
                            }`}
                        >
                            {/* Botón cerrar */}
                            <button
                                onClick={handleCloseApkModal}
                                className="absolute -top-4 -right-4 bg-red-500 hover:bg-red-600 text-white rounded-full p-3 shadow-lg hover:scale-110 transition-all duration-200 z-10"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>

                            {/* Contenido del modal */}
                            <div className="text-center">
                                <div className="mb-4 sm:mb-6">
                                    <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">🔒</div>
                                    <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                                        {downloadSafeTitle}
                                    </h3>
                                </div>

                                <div
                                    className="bg-white/70 rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 text-left space-y-3 sm:space-y-4">
                                    <div className="flex items-start gap-2 sm:gap-3">
                                        <span className="text-xl sm:text-2xl flex-shrink-0">✅</span>
                                        <p className="text-xs sm:text-sm lg:text-base text-gray-700 flex-1">
                                            <span className="font-semibold">{apkIsSafe}</span>
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-2 sm:gap-3">
                                        <span className="text-xl sm:text-2xl flex-shrink-0">📦</span>
                                        <p className="text-xs sm:text-sm lg:text-base text-gray-700 flex-1">
                                            {apkRepoSentence.split('GitHub').map((part, idx, arr) => (
                                                idx < arr.length - 1 ? (
                                                    <>{part}<a href="https://github.com/CamiloCuenca/PomoTimerFlow"
                                                               target="_blank" rel="noopener noreferrer"
                                                               className="font-semibold text-blue-600 hover:text-blue-800 underline">GitHub</a></>
                                                ) : (
                                                    part
                                                )
                                            ))}
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-2 sm:gap-3">
                                        <span className="text-xl sm:text-2xl flex-shrink-0">📱</span>
                                        <p className="text-xs sm:text-sm lg:text-base text-gray-700 flex-1">
                                            {apkInstallAndroid}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2 sm:gap-3">
                                    <a
                                        href="https://github.com/CamiloCuenca/PomoTimerFlow/releases/download/v1.2.0/application-1f15654b-7579-4747-b034-d6c55e1a1dae.apk"
                                        download="PomoTimerFlow.apk"
                                        className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                                    >
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor"
                                             viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                                        </svg>
                                        {downloadApkText}
                                    </a>
                                    <button
                                        onClick={handleCloseApkModal}
                                        className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg sm:rounded-xl hover:bg-gray-300 transition-all duration-300 text-sm sm:text-base"
                                    >
                                        {cancelText}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
