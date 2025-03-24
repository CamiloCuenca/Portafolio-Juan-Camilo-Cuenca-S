import useGitHubRepos from "../../hooks/useGitHubRepos";
import Card from "../common/Card"; // Importar el componente Card

// Define los repositorios destacados con sus imágenes
const featuredRepos = [
  {
    name: "UniEventos_proyecto_final_Backend",
    image: null, // No tiene imagen asignada
  },
  {
    name: "UniEventos_proyecto_final_Frontend",
    image: "/assets/img-Proyects/UniEventos.png",
  },
  {
    name: "AppMisiontic-Movil",
    image: null,
  },
  {
    name: "PomoTimerFlow",
    image: "/assets/img-Proyects/PomoTimerFlow.png",
  },
  {
    name: "regex-validator",
    image: "/assets/img-Proyects/regex-validator.png",
  },
  {
    name: "Portafolio-Juan-Camilo-Cuenca-S",
    image: "/assets/img-Proyects/PortafolioPrueba.png", // Imagen alojada en public/assets/
  },
];

export default function Projects() {
  const { repos, loading, error } = useGitHubRepos("CamiloCuenca");

  if (loading) return <p className="text-center">Cargando repositorios...</p>;
  if (error) return <p className="text-red-500 text-center">Error: {error}</p>;

  // Filtra los repositorios destacados y les asigna la imagen si existe
  const filteredRepos = repos
    .filter(repo => featuredRepos.some(f => f.name === repo.name))
    .map(repo => ({
      ...repo,
      image: featuredRepos.find(f => f.name === repo.name)?.image || null,
    }));

  // Ordenar por fecha de creación (más reciente primero) y luego por estrellas
  const sortedRepos = filteredRepos.sort((a, b) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);
    if (dateB - dateA !== 0) return dateB - dateA;
    return b.stargazers_count - a.stargazers_count; // Si tienen la misma fecha, ordenar por estrellas
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-start mb-6">Mis Proyectos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedRepos.length > 0 ? (
          sortedRepos.map(repo => (
            <Card
              key={repo.id}
              name={repo.name}
              description={repo.description}
              url={repo.html_url}
              homepage={repo.homepage}
              language={repo.language}
              stars={repo.stargazers_count}
              createdAt={repo.created_at}
              updatedAt={repo.updated_at}
              image={repo.image}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">No hay proyectos destacados</p>
        )}
      </div>
    </div>
  );
}
