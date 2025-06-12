import useGitHubRepos from "../../hooks/useGitHubRepos";
import Card from "../common/Card";
import { useMemo, useState } from "react";

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

  const filteredRepos = useMemo(() => {
    if (!repos) return [];
    // Asignar imagen si es featured, si no null
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
      {/* Paginación */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 gap-2">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="px-3 py-1 rounded bg-primary text-white disabled:opacity-50"
          >
            Anterior
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-3 py-1 rounded ${page === i + 1 ? 'bg-secondary text-white' : 'bg-gray-200 text-black'}`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
            className="px-3 py-1 rounded bg-primary text-white disabled:opacity-50"
          >
            Siguiente
          </button>
        </div>
      )}
    </section>
  );
}

// Animaciones Tailwind personalizadas sugeridas:
// .animate-fade-in { animation: fadeIn 0.7s both; }
// .animate-fade-in-up { animation: fadeInUp 0.7s both; }
// Agrega estas animaciones en tu tailwind.config.js o CSS si lo deseas.
