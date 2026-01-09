import React, { memo } from "react";
import { GitHubIcon, GlobeIcon } from "./SvgIcons";
import PropTypes from "prop-types";

export default memo(Card);

Card.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  homepage: PropTypes.string,
  language: PropTypes.string,
  stargazers_count: PropTypes.number,
  stars: PropTypes.number,
  created_at: PropTypes.string,
  createdAt: PropTypes.string,
  updated_at: PropTypes.string,
  updatedAt: PropTypes.string,
  image: PropTypes.string,
  fixedHeight: PropTypes.bool,
};

function Card({ name, description, homepage, language, stargazers_count, stars, updated_at, updatedAt, image, fixedHeight }) {
  // Compatibilidad para diferentes nombres de props
  const starsValue = typeof stars !== 'undefined' ? stars : (typeof stargazers_count !== 'undefined' ? stargazers_count : 0);
  const updated = updatedAt || updated_at;

  return (
    <div className={`rounded-xl shadow-md p-5 bg-white transition-transform duration-300 ease-out hover:scale-105 hover:shadow-lg ${fixedHeight ? 'h-[420px] flex flex-col justify-between' : ''}`}>
      {/* Imagen del proyecto */}
      <div className="w-full aspect-[16/9] mb-4 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={`${name} preview`}
            className="w-full h-full object-contain"
            style={{ maxHeight: 180 }}
            loading="lazy"
            decoding="async"
            fetchpriority="low"
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
            width="280"
            height="157"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 text-5xl">
            <span role="img" aria-label="Sin imagen">📁</span>
          </div>
        )}
      </div>

      {/* Nombre del proyecto */}
      <h2 className="text-heading-4 truncate w-full mb-2" title={name}>🚀 {name}</h2>
      
      {/* Descripción del proyecto */}
      <p className="text-gray-600 text-body-small mb-3">{description || "📌 Sin descripción"}</p>
      
      {/* Lenguaje de programación */}
      <div className="flex items-center gap-2 text-body-small">
          {language && (
            <span className="bg-gray-200 px-2 py-1 rounded-lg text-gray-700 font-medium">
              {language}
            </span>
          )}
      </div>
      
      {/* Estrellas y fechas */}
      <div className="flex justify-between text-caption text-gray-400 mt-2">
        <p>🌟 {starsValue} estrellas</p>
      </div>
      <p className="text-caption text-gray-400 mt-1">🔄 Última actualización: {updated ? new Date(updated).toLocaleDateString() : '-'}</p>
      
      {/* Botones de enlace */}
      <div className="mt-4 flex gap-3">
        {homepage && (
          <a href={homepage} target="_blank" rel="noreferrer" className="text-blue-500 text-body-small font-medium hover:underline flex items-center gap-1">
            <GlobeIcon size={16} className="inline-block" /> Ver Proyecto
          </a>
        )}
        <a href={`https://github.com/${name ? `CamiloCuenca/${name}` : ''}`} target="_blank" rel="noreferrer" className="text-blue-500 text-body-small font-medium hover:underline flex items-center gap-1">
          <GitHubIcon size={16} className="inline-block" /> Código en GitHub
        </a>
      </div>
    </div>
  );
}
