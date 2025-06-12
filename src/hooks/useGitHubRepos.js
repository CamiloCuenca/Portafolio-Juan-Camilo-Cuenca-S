import { useEffect, useState } from "react";

export default function useGitHubRepos(username) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
        if (!response.ok) throw new Error("Error al obtener los repositorios");

        const data = await response.json();
        // Ordenar: primero los destacados (pinneados manualmente), luego el resto
        const pinNames = [
          "UniEventos_proyecto_final_Backend",
          "UniEventos_proyecto_final_Frontend",
          "AppMisiontic-Movil",
          "PomoTimerFlow",
          "regex-validator",
          "Portafolio-Juan-Camilo-Cuenca-S"
        ];
        const pinned = data.filter(repo => pinNames.includes(repo.name));
        const others = data
          .filter(repo => !pinNames.includes(repo.name))
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        setRepos([...pinned, ...others]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  return { repos, loading, error };
}
