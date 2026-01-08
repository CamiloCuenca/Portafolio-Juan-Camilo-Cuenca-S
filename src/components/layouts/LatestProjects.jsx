import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
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
            { rootMargin: '200px' }
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
                { name: "React Native", color: "bg-blue-100 text-blue-700" },
                { name: "Expo", color: "bg-purple-100 text-purple-700" }
            ],
            type: "mobile",
            url: "https://pomo-timer-flow.vercel.app/",
            hasCarousel: true
        },
        {
            id: 1,
            emoji: "🦷",
            title: "Odontologic",
            description: "Sistema de gestión para clínicas odontológicas que permite la digitalización de historiales médicos, control de inventario y agendamiento automatizado de citas.",
            tags: [
                { name: "React", color: "bg-cyan-100 text-cyan-700" },
                { name: "Node.js", color: "bg-green-100 text-green-700" },
                { name: "Mysql", color: "bg-blue-100 text-blue-700" }
            ],
            type: "desktop",
            url: "https://dental-management-system-frontend.vercel.app/",
            hasCarousel: false
        }
    ];

    const currentProject = projects[activeProject];

    return (
        <div ref={containerRef}>
           

            <div className="relative max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-8 sm:mb-12 lg:mb-16 px-4">
                    <div className="inline-block mb-4">
                       
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
                        Últimos Proyectos
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg px-4">
                        Explora mis proyectos más recientes y descubre las tecnologías que utilizo
                    </p>
                </div>

                {/* Tabs Navigation */}
                <div className="flex justify-center mb-6 sm:mb-8 px-4">
                    <div className="inline-flex bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-1.5 sm:p-2 shadow-xl border border-white/20">
                        {projects.map((project, index) => (
                            <button
                                key={project.id}
                                onClick={() => setActiveProject(index)}
                                className={`relative px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 sm:gap-3 text-sm sm:text-base ${
                                    activeProject === index
                                        ? 'text-white'
                                        : 'text-gray-600 hover:text-gray-800'
                                }`}
                            >
                                {activeProject === index && (
                                    <div
                                        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-lg sm:rounded-xl shadow-lg animate-tab-highlight"
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
                        className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl border border-white/20 overflow-hidden mx-4 sm:mx-0"
                    >
                        <div className="p-6 sm:p-8 md:p-12">
                            {/* Project Header */}
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 sm:mb-8 gap-4">
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
                                        <span key={index} className={`px-3 py-1 rounded-full text-xs font-semibold ${tag.color}`}>
                                            {tag.name}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Content based on project type */}
                            {currentProject.type === 'mobile' ? (
                                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
                                    {/* Carousel Section */}
                                    <div className="flex flex-col items-center justify-center">
                                        <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6 text-center">
                                            🎯 Características Principales
                                        </h4>
                                        <div className="w-full flex justify-center px-4">
                                            {isVisible ? (
                                                <Suspense fallback={<div style={{height: 180}} /> }>
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
                                                <div className="w-full h-40 bg-white/40 rounded-xl" />
                                            )}
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6 w-full sm:w-auto px-4 sm:px-0">
                                            <a 
                                                href={currentProject.url}
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm sm:text-base text-center whitespace-nowrap"
                                            >
                                                Ver App en web
                                            </a>

                                            <button
                                                onClick={() => setShowApkModal(true)}
                                                className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm sm:text-base whitespace-nowrap"
                                            >
                                                Descargar APK
                                            </button>
                                        </div>
                                    </div>

                                    {/* Mobile Preview Section */}
                                    <div className="flex flex-col items-center justify-center">
                                        <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6 text-center">
                                            📱 Vista Previa en Vivo
                                        </h4>
                                        <div className="transform hover:scale-105 transition-transform duration-300 w-full flex justify-center">
                                            {isVisible ? (
                                                <Suspense fallback={<div className="w-full h-[300px] bg-white/40 rounded-xl" /> }>
                                                    <MovilDesktop url={currentProject.url} />
                                                </Suspense>
                                            ) : (
                                                <div className="w-full h-[300px] bg-white/40 rounded-xl" />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                /* Desktop Preview */
                                <div className="flex flex-col items-center justify-center">
                                    <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6 text-center">
                                        💻 Vista de Escritorio
                                    </h4>
                                    
                                    {/* Credenciales de prueba */}
                                    <div className="mb-6 w-full max-w-2xl bg-gradient-to-r from-cyan-50 to-blue-50 border-l-4 border-cyan-500 rounded-lg p-4 sm:p-6 shadow-md">
                                        <h5 className="font-bold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                                            🔐 Datos para Acceder al Sistema
                                        </h5>
                                        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                                            <div className="bg-white/70 rounded-lg p-4 border border-cyan-200">
                                                <p className="font-semibold text-cyan-700 mb-2">👨‍⚕️ Administrador</p>
                                                <p className="text-sm text-gray-700"><span className="font-medium">Usuario:</span> 444444446</p>
                                                <p className="text-sm text-gray-700"><span className="font-medium">Contraseña:</span> C@ntraseña123</p>
                                            </div>
                                            <div className="bg-white/70 rounded-lg p-4 border border-blue-200">
                                                <p className="font-semibold text-blue-700 mb-2">🧑 Paciente de Prueba</p>
                                                <p className="text-sm text-gray-700"><span className="font-medium">Usuario:</span> 555555556</p>
                                                <p className="text-sm text-gray-700"><span className="font-medium">Contraseña:</span> C@ntraseña123</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full flex justify-center">
                                        {isVisible ? (
                                            <Suspense fallback={<div className="w-full h-[180px] bg-white/40 rounded-xl" /> }>
                                                <MonitorDesktop url={currentProject.url} />
                                            </Suspense>
                                        ) : (
                                            <div className="w-full h-[180px] bg-white/40 rounded-xl" />
                                        )}
                                    </div>
                                    <a 
                                        href={currentProject.url}
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="mt-4 sm:mt-6 lg:mt-8 px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                                    >
                                        Ver Sistema en Vivo →
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Navigation Arrows */}
                <div className="flex justify-center gap-4 mt-8">
                    <button
                        onClick={() => setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1))}
                        className="p-4 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-white/20 hover:scale-110 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white group"
                    >
                        <svg className="w-6 h-6 text-gray-700 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={() => setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1))}
                        className="p-4 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-white/20 hover:scale-110 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white group"
                    >
                        <svg className="w-6 h-6 text-gray-700 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Modal de descarga APK */}
                {showApkModal && (
                    <div
                        onClick={() => {
                            setModalExiting(true);
                            setTimeout(() => {
                                setShowApkModal(false);
                                setModalExiting(false);
                            }, 200);
                        }}
                        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 ${
                            modalExiting ? 'animate-backdrop-fade-out' : 'animate-backdrop-fade-in'
                        }`}
                    >
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className={`relative bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-3xl p-8 shadow-2xl border border-white/20 max-w-lg w-full ${
                                modalExiting ? 'animate-modal-exit' : 'animate-modal-spring'
                            }`}
                        >
                            {/* Botón cerrar */}
                            <button
                                onClick={() => {
                                    setModalExiting(true);
                                    setTimeout(() => {
                                        setShowApkModal(false);
                                        setModalExiting(false);
                                    }, 200);
                                }}
                                className="absolute -top-4 -right-4 bg-red-500 hover:bg-red-600 text-white rounded-full p-3 shadow-lg hover:scale-110 transition-all duration-200 z-10"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Contenido del modal */}
                            <div className="text-center">
                                <div className="mb-6">
                                    <div className="text-6xl mb-4">🔒</div>
                                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                                        Descarga Segura
                                    </h3>
                                </div>

                                <div className="bg-white/70 rounded-2xl p-6 mb-6 text-left space-y-4">
                                    <div className="flex items-start gap-3">
                                        <span className="text-2xl">✅</span>
                                        <p className="text-gray-700 flex-1">
                                            <span className="font-semibold">Esta APK es segura</span> y ha sido compilada directamente desde el código fuente oficial.
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-2xl">📦</span>
                                        <p className="text-gray-700 flex-1">
                                            También puedes encontrar esta APK en el <a href="https://github.com/CamiloCuenca/PomoTimerFlow" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-800 underline">repositorio del proyecto</a> en GitHub.
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-2xl">📱</span>
                                        <p className="text-gray-700 flex-1">
                                            Se debe instalar en <span className="font-semibold">dispositivos móviles Android</span>.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <a
                                        href="https://github.com/CamiloCuenca/PomoTimerFlow/releases/download/v1.2.0/application-1f15654b-7579-4747-b034-d6c55e1a1dae.apk"
                                        download="PomoTimerFlow.apk"
                                        className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                        Descargar APK
                                    </a>
                                    <button
                                        onClick={() => {
                                            setModalExiting(true);
                                            setTimeout(() => {
                                                setShowApkModal(false);
                                                setModalExiting(false);
                                            }, 200);
                                        }}
                                        className="px-8 py-3 bg-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-300 transition-all duration-300"
                                    >
                                        Cancelar
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
