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
        <div className="w-full flex flex-col">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-left pl-4">Certificados</h2>
            {totalPages > 1 && (
                <div className="flex justify-center mt-2 mb-8 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                    <div className="flex gap-1 sm:gap-2 px-1 min-w-max flex-wrap justify-center scroll-smooth snap-x">
                        {/* Botón Anterior */}
                        <button
                            onClick={() => setPage(page - 1)}
                            disabled={page === 1}
                            className="px-2 sm:px-3 py-1 sm:py-2 rounded bg-secondary text-white disabled:opacity-50 text-xs sm:text-sm min-w-[36px] sm:min-w-[40px] snap-start"
                        >
                            <span className="inline sm:hidden">←</span>
                            <span className="hidden sm:inline">Anterior</span>
                        </button>
                        {/* Elipsis inicial */}
                        {page > (isSmallScreen ? 2 : 3) && (
                            <button className="px-1 sm:px-2 text-gray-400 cursor-default" disabled>…</button>
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
                                    className={`px-2 sm:px-3 py-1 sm:py-2 rounded min-w-[36px] sm:min-w-[40px] text-xs sm:text-sm transition-colors duration-200 snap-center ${
                                        page === i
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-gray-200 text-black hover:bg-blue-600 hover:text-white'
                                    }`}
                                    disabled={i === page}
                                >
                                    {i}
                                </button>
                            ))}
                        {/* Elipsis final */}
                        {page < totalPages - (isSmallScreen ? 1 : 2) && (
                            <button className="px-1 sm:px-2 text-gray-400 cursor-default" disabled>…</button>
                        )}
                        {/* Botón Siguiente */}
                        <button
                            onClick={() => setPage(page + 1)}
                            disabled={page === totalPages}
                            className="px-2 sm:px-3 py-1 sm:py-2 rounded bg-secondary text-white disabled:opacity-50 text-xs sm:text-sm min-w-[36px] sm:min-w-[40px] snap-end"
                        >
                            <span className="inline sm:hidden">→</span>
                            <span className="hidden sm:inline">Siguiente</span>
                        </button>
                    </div>
                </div>
            )}
            <div id="certificates" className="flex flex-wrap justify-center gap-6 w-full mb-4">
                {paginated.map((cert) => (
                    <div key={cert.nombre} className="flex-none w-full sm:w-[350px] md:w-[350px] lg:w-[350px] xl:w-[350px]">
                        <CardCertificates 
                            nombre={cert.nombre} 
                            entidad={cert.entidad} 
                            fecha={cert.fecha} 
                            url={cert.url} 
                        /> 
                    </div>
                ))}
            </div>
        </div>
    );
}