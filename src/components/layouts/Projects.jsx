import useGitHubRepos from "../../hooks/useGitHubRepos";
import Card from "../common/Card";
import { useMemo, useState, useEffect } from "react";

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

function SectionTitle({ children }) {
  return (
    <h1 className="text-3xl font-extrabold text-primary mb-8 text-center tracking-tight animate-fade-in">
      {children}
    </h1>
  );
}

function ProjectsGrid({ repos }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {repos.map(repo => (
        <div key={repo.id} className="transition-transform duration-300 hover:scale-105 animate-fade-in-up">
          <Card {...repo} fixedHeight={true} />
        </div>
      ))}
    </div>
  );
}

function Loading() {
  return <p className="text-center text-secondary animate-pulse">Cargando proyectos...</p>;
}

function Error({ message }) {
  return <p className="text-center text-red-500 font-semibold">Error: {message}</p>;
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
    <section id="projects" className="p-8 bg-white/80 rounded-2xl shadow-2xl max-w-7xl mx-auto my-12 animate-fade-in">
      <h1 className="text-2xl font-bold text-start mb-6">Mis Proyectos</h1>
      {loading && <Loading />}
      {error && <Error message={error} />}
      {!loading && !error && paginatedRepos.length > 0 && <ProjectsGrid repos={paginatedRepos} />}
      {!loading && !error && paginatedRepos.length === 0 && (
        <p className="text-center text-gray-500">No hay proyectos destacados</p>
      )}

      {totalPages > 1 && (
        <div className="flex justify-center mt-8 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          <div className="flex gap-1 sm:gap-2 px-1 min-w-max flex-wrap justify-center scroll-smooth snap-x">
            {/* Botón Anterior */}
            <button
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
              className="px-2 sm:px-3 py-1 sm:py-2 rounded bg-primary text-white disabled:opacity-50 text-xs sm:text-sm min-w-[36px] sm:min-w-[40px] snap-start"
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
                      ? 'bg-secondary text-white'
                      : 'bg-gray-200 text-black hover:bg-primary/80 hover:text-white'
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
              className="px-2 sm:px-3 py-1 sm:py-2 rounded bg-primary text-white disabled:opacity-50 text-xs sm:text-sm min-w-[36px] sm:min-w-[40px] snap-end"
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
