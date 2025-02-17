import { 
  SiJavascript, SiTypescript, SiPython, SiPhp, SiC, SiCplusplus, SiHtml5, SiCss3, SiGo, SiSwift, SiKotlin 
} from "react-icons/si";
import { FaJava } from "react-icons/fa"; // Usa FontAwesome si no existe en SimpleIcons

// Diccionario de íconos de lenguajes
const languageIcons = {
  JavaScript: <SiJavascript className="text-yellow-500 text-lg" />,
  TypeScript: <SiTypescript className="text-blue-500 text-lg" />,
  Python: <SiPython className="text-blue-400 text-lg" />,
  Java: <FaJava className="text-red-500 text-lg" />, // Usa FaJava en lugar de SiJava
  PHP: <SiPhp className="text-purple-500 text-lg" />,
  C: <SiC className="text-blue-600 text-lg" />,
  "C++": <SiCplusplus className="text-indigo-500 text-lg" />,
  HTML: <SiHtml5 className="text-orange-500 text-lg" />,
  CSS: <SiCss3 className="text-blue-400 text-lg" />,
  Go: <SiGo className="text-teal-500 text-lg" />,
  Swift: <SiSwift className="text-orange-400 text-lg" />,
  Kotlin: <SiKotlin className="text-purple-600 text-lg" />,
};

export default function Card({ name, description, url, homepage, language, stars, createdAt, updatedAt, image }) {
  return (
    <div className="rounded-xl shadow-md p-5 bg-white transition-transform duration-300 ease-out hover:scale-105 hover:shadow-lg">
      {/* Imagen del proyecto */}
      {image && <img src={image} alt={`${name} preview`} className="w-full h-40 object-cover rounded-lg mb-4" />}

      {/* Nombre del proyecto con truncado */}
      <h2 className="text-lg font-semibold truncate w-full mb-2" title={name}>🚀 {name}</h2>
      
      {/* Descripción del proyecto */}
      <p className="text-gray-600 text-sm mb-3">{description || "📌 Sin descripción"}</p>

      {/* Lenguaje de programación */}
      <div className="flex items-center gap-2 text-sm">
        {language && languageIcons[language] && (
          <span className="flex items-center gap-1 bg-gray-200 px-2 py-1 rounded-lg">
            {languageIcons[language]}
            <span className="text-gray-700 font-medium">{language}</span>
          </span>
        )}
      </div>

      {/* Estrellas y fechas */}
      <div className="flex justify-between text-xs text-gray-400 mt-2">
        <p>🌟 {stars} estrellas</p>
      </div>
      <p className="text-xs text-gray-400 mt-1">🔄 Última actualización: {new Date(updatedAt).toLocaleDateString()}</p>

      {/* Botones de enlace */}
      <div className="mt-4 flex gap-3">
        {homepage && (
          <a href={homepage} target="_blank" className="text-blue-500 text-sm font-medium hover:underline">
            🌍 Ver Proyecto
          </a>
        )}
        <a href={url} target="_blank" className="text-blue-500 text-sm font-medium hover:underline">
          📦 Código en GitHub
        </a>
      </div>
    </div>
  );
}
