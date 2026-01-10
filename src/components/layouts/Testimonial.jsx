import React, { useState } from 'react';

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
    <div className="w-full flex flex-col m-2">
      <h1 className="text-heading-1 text-gray-800 mb-6 text-left pl-4">Recomendaciones y Testimonios</h1>

      <div className="max-w-3xl mx-auto p-4 bg-white">

        {/* Header: Foto + Info */}
        <div className="flex items-start gap-4">
          <a href="https://www.linkedin.com/in/jazminrr/">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQEVqIThXcznyw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1720613213820?e=1769644800&v=beta&t=UbdTftblAZ6SwHeFFySQNX9pT-32ONq_G6hHJ4QWOOU"
              alt="Jazmín Rincón Rodríguez"
              className="w-14 h-14 rounded-full object-cover"
            />
          </a>

          <div>
            <a href='https://www.linkedin.com/in/jazminrr/' className="text-body font-semibold text-gray-800">Jazmín Rincón Rodríguez </a>
            <h3 className="text-body-small text-gray-600">Liderazgo en Proyectos Tecnológicos</h3>
            <p className="text-caption text-gray-500">
              9 de abril de 2025, Jazmín trabajaba con Juan Camilo en el mismo equipo
            </p>
          </div>
        </div>

        {/* Testimonio */}
        <div className="mt-4 text-body-small text-gray-800 text-justify">
          <p className="whitespace-pre-line leading-relaxed">
            {isExpanded ? fullText : shortText}
          </p>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary font-semibold mt-2 hover:underline"
          >
            {isExpanded ? 'Ver menos' : 'Ver más'}
          </button>
        </div>
      </div>
    </div>
  );
}
