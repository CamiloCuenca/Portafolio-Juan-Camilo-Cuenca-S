import React from "react";
import useGitHubRepos from "../../hooks/useGitHubRepos";
import Card from "../common/Card";
import { useMemo, useState, useEffect } from "react";
import PropTypes from "prop-types";

// Hook para detectar si es una pantalla pequeña (menor a 640px)
function useIsSmallScreen() {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsSmall(window.innerWidth < 640); // sm breakpoint
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return isSmall;
}

function ProjectsGrid({ repos }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
      {repos.map((repo, index) => (
        <div 
          key={repo.id} 
          className="transition-all duration-500 hover:scale-105 animate-fade-in-up"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <Card {...repo} fixedHeight={true} />
        </div>
      ))}
    </div>
  );
}

function Loading() {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="flex items-center space-x-2">
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        <span className="text-blue-600 text-body font-medium ml-4">Cargando proyectos...</span>
      </div>
    </div>
  );
}

function Error({ message }) {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="text-center">
        <div className="text-red-500 text-4xl mb-4">⚠️</div>
        <p className="text-red-500 text-body font-semibold">Error: {message}</p>
      </div>
    </div>
  );
}

const featuredRepos = [
  { name: "UniEventos_proyecto_final_Backend", image: null },
  { name: "UniEventos_proyecto_final_Frontend", image: "/assets/img-Proyects/UniEventos.png" },
  { name: "AppMisiontic-Movil", image: null },
  { name: "PomoTimerFlow", image: "/assets/img-Proyects/PomoTimerFlow.png" },
  { name: "regex-validator", image: "/assets/img-Proyects/regex-validator.png" },
  { name: "Portafolio-Juan-Camilo-Cuenca-S", image: "/assets/img-Proyects/PortafolioPrueba.png" },
];

export default function Projects() {
  const { repos, loading, error } = useGitHubRepos("CamiloCuenca");
  const [page, setPage] = useState(1);
  const perPage = 6;
  const isSmallScreen = useIsSmallScreen();

  const filteredRepos = useMemo(() => {
    if (!repos) return [];
    return repos.map(repo => ({
      ...repo,
      image: featuredRepos.find(f => f.name === repo.name)?.image || null,
    }));
  }, [repos]);

  const totalPages = Math.ceil(filteredRepos.length / perPage);
  const paginatedRepos = filteredRepos.slice((page - 1) * perPage, page * perPage);

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-heading-2 mb-4 text-gray-800">Mis Proyectos</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-400 mx-auto rounded-full"></div>
      </div>
      
      {loading && <Loading />}
      {error && <Error message={error} />}
      {!loading && !error && paginatedRepos.length > 0 && <ProjectsGrid repos={paginatedRepos} />}
      {!loading && !error && paginatedRepos.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-4xl mb-4">📁</div>
          <p className="text-gray-500 text-body">No hay proyectos destacados</p>
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex justify-center mt-12">
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
    </section>
  );
}

ProjectsGrid.propTypes = {
  repos: PropTypes.array.isRequired, 
}
Error.propTypes = {
  message: PropTypes.string.isRequired,
};
