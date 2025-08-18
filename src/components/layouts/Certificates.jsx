import React from 'react';
import CardCertificates from "../common/CardCertificates";
import useCertificates from '../../hooks/usecertificates';
import { useState, useMemo, useEffect } from 'react';

function useIsSmallScreen() {
  const [isSmall, setIsSmall] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => setIsSmall(window.innerWidth < 640);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  return isSmall;
}

export default function Certificates() {
    const certificates = useCertificates();
    const [page, setPage] = useState(1);
    const perPage = 3;
    const isSmallScreen = useIsSmallScreen();
    const totalPages = Math.ceil(certificates.length / perPage);
    const paginated = useMemo(() => certificates.slice((page - 1) * perPage, page * perPage), [certificates, page]);

    return (
        <section className="max-w-6xl mx-auto px-6 py-12 md:py-16">
            <div className="text-center mb-12">
                <h2 className="text-heading-2 mb-4 text-gray-800">Certificados</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-400 mx-auto rounded-full"></div>
            </div>
            
            {totalPages > 1 && (
                <div className="flex justify-center mb-8">
                    <div className="flex gap-2 sm:gap-3 px-4 py-2 bg-white rounded-xl shadow-lg border border-gray-100">
                        {/* Botón Anterior */}
                        <button
                            onClick={() => setPage(page - 1)}
                            disabled={page === 1}
                            className="px-4 py-2 rounded-lg bg-blue-500 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition-all duration-300 text-body-small font-medium min-w-[80px]"
                        >
                            <span className="inline sm:hidden">←</span>
                            <span className="hidden sm:inline">Anterior</span>
                        </button>
                        
                        {/* Elipsis inicial */}
                        {page > (isSmallScreen ? 2 : 3) && (
                            <div className="px-3 py-2 text-gray-400 text-body-small">…</div>
                        )}
                        
                        {/* Botones de página */}
                        {Array.from({ length: totalPages }, (_, i) => i + 1)
                            .filter(i =>
                                i === 1 ||
                                i === totalPages ||
                                (isSmallScreen
                                    ? (i >= page - 1 && i <= page + 1)
                                    : (i >= page - 2 && i <= page + 2))
                            )
                            .map(i => (
                                <button
                                    key={i}
                                    onClick={() => setPage(i)}
                                    className={`px-4 py-2 rounded-lg min-w-[40px] text-body-small font-medium transition-all duration-300 ${
                                        page === i
                                            ? 'bg-blue-500 text-white shadow-md'
                                            : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-600'
                                    }`}
                                >
                                    {i}
                                </button>
                            ))}
                        
                        {/* Elipsis final */}
                        {page < totalPages - (isSmallScreen ? 1 : 2) && (
                            <div className="px-3 py-2 text-gray-400 text-body-small">…</div>
                        )}
                        
                        {/* Botón Siguiente */}
                        <button
                            onClick={() => setPage(page + 1)}
                            disabled={page === totalPages}
                            className="px-4 py-2 rounded-lg bg-blue-500 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition-all duration-300 text-body-small font-medium min-w-[80px]"
                        >
                            <span className="inline sm:hidden">→</span>
                            <span className="hidden sm:inline">Siguiente</span>
                        </button>
                    </div>
                </div>
            )}
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {paginated.map((cert, index) => (
                    <div 
                        key={cert.nombre} 
                        className="transition-all duration-500 hover:scale-105 animate-fade-in-up"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <CardCertificates 
                            nombre={cert.nombre} 
                            entidad={cert.entidad} 
                            fecha={cert.fecha} 
                            url={cert.url} 
                        /> 
                    </div>
                ))}
            </div>
        </section>
    );
}