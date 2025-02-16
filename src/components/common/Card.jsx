export default function Card({ name, description, url, homepage, language, stars, createdAt, updatedAt, image }) {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white transition-transform duration-300 ease-out hover:scale-105 hover:shadow-lg">
      {/* Mostrar imagen si existe */}
      {image && <img src={image} alt={`${name} preview`} className="w-full h-48 object-cover rounded-md mb-4" />}

      {/* Título del proyecto con truncado si es muy largo */}
      <h2 className="text-xl font-bold truncate w-full" title={name}>🚀 {name}</h2>
      
      <p className="text-gray-600 line-clamp-2">{description || "📌 Sin descripción"}</p>
      <p className="text-sm text-gray-500">💻 Lenguaje: {language || "Desconocido"}</p>
      <p className="text-sm">🌟 {stars} estrellas</p>
      <p className="text-xs text-gray-400">📅 Creado: {new Date(createdAt).toLocaleDateString()}</p>
      <p className="text-xs text-gray-400">🔄 Última actualización: {new Date(updatedAt).toLocaleDateString()}</p>

      {/* Enlace al sitio web si existe */}
      {homepage && (
        <a href={homepage} target="_blank" className="block mt-2 text-blue-500 hover:underline">
          🌍 Ver Proyecto
        </a>
      )}
      
      <a href={url} target="_blank" className="block mt-2 text-blue-500 hover:underline">
        📦 Código en GitHub
      </a>
    </div>
  );
}
