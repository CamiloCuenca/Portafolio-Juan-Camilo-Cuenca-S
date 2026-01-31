import React, { useState } from "react";

export default function Testimonial() {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText = `
Juan Camilo ha sido un gran compañero en el voluntariado de Inspiranza en el que colaboramos. 
Como desarrollador full stack móvil y estudiante universitario, demuestra una gran responsabilidad, disposición al trabajo en equipo y una actitud de aprendizaje constante.

Asume sus tareas de forma autónoma y siempre busca que su código esté alineado con los estándares del proyecto. Cuando se enfrenta a un desafío técnico, no se detiene: investiga, prueba soluciones y, si no encuentra la respuesta, comparte todo lo que ha aprendido para fomentar la colaboración en el equipo y generar nuevas ideas.

Juan Camilo es una persona con iniciativa, confiable y con muy buenas habilidades para colaborar, aprender y adaptarse.
  `;

  const shortText = `
Juan Camilo ha sido un gran compañero en el voluntariado de Inspiranza en el que colaboramos. 
Como desarrollador full stack móvil y estudiante universitario, demuestra una gran responsabilidad, disposición al trabajo en equipo y una actitud de aprendizaje constante...
  `;

  return (
      <section className="w-full max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-heading-1 text-gray-800 mb-8">
          Recomendaciones y Testimonios
        </h2>

        <div
            className="
          bg-white rounded-2xl
          border border-gray-100
          shadow-sm hover:shadow-md
          transition-all duration-300
          p-6 sm:p-8
        "
        >
          {/* Header */}
          <div className="flex items-start gap-4 mb-4">
            {/* Logo LinkedIn */}
            <a
                href="https://www.linkedin.com/in/jazminrr/"
                target="_blank"
                rel="noreferrer"
                className="
              w-14 h-14 rounded-full
              bg-[#0A66C2]
              flex items-center justify-center
              shadow-sm
            "
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-7 h-7"
              >
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4zM8.5 8h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7.9c0-1.88-.03-4.3-2.62-4.3-2.63 0-3.03 2.05-3.03 4.16V24h-4z" />
              </svg>
            </a>

            <div className="leading-tight">
              <a
                  href="https://www.linkedin.com/in/jazminrr/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-body font-semibold text-gray-800 hover:underline"
              >
                Jazmín Rincón Rodríguez
              </a>

              <p className="text-body-small text-gray-600">
                Liderazgo en Proyectos Tecnológicos
              </p>

              <div className="flex items-center gap-2 mt-1">
              <span
                  className="
                  text-caption font-semibold
                  text-[#0A66C2]
                  bg-[#0A66C2]/10
                  px-2 py-0.5 rounded-full
                "
              >
                Comentario en LinkedIn
              </span>

                <span className="text-caption text-gray-500">
                9 de abril de 2025 · Trabajó con Juan Camilo
              </span>
              </div>
            </div>
          </div>

          {/* Testimonio */}
          <div className="relative">
          <span className="absolute -left-2 -top-2 text-5xl text-[#0A66C2]/10">
            “
          </span>

            <p className="whitespace-pre-line text-body-small text-gray-700 leading-relaxed pl-6">
              {isExpanded ? fullText : shortText}
            </p>
          </div>

          {/* Toggle */}
          <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="
            mt-4 inline-flex items-center gap-1
            text-[#0A66C2] font-semibold
            hover:underline
            transition-all
          "
          >
            {isExpanded ? "Ver menos" : "Ver más"}
          </button>
        </div>
      </section>
  );
}
