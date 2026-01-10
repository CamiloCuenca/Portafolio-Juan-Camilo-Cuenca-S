import React from "react";
import PropTypes from "prop-types";

export default function HeroText({
  width = "w-full",
  height = "h-auto",
  className = "",
}) {
  return (
    <div className={`${width} ${height} ${className} flex items-center justify-center`}>
      <div className="flex items-center text-white font-bold">

        {/* Llave izquierda */}
        <span className="flex items-center justify-center 
                         h-32 sm:h-36 md:h-44 lg:h-52
                         text-7xl sm:text-8xl md:text-9xl lg:text-[10rem]
                         px-3 leading-none">
          {"{"}
        </span>

        {/* Texto */}
        <div className="flex items-center">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl
                        leading-relaxed text-center max-w-xl">
            Hola, soy Juan Camilo Cuenca <br />
            Sepúlveda, Ingeniero en Sistemas y Computación.
          </p>
        </div>

        {/* Llave derecha */}
        <span className="flex items-center justify-center 
                         h-32 sm:h-36 md:h-44 lg:h-52
                         text-7xl sm:text-8xl md:text-9xl lg:text-[10rem]
                         px-3 leading-none">
          {"}"}
        </span>

      </div>
    </div>
  );
}

HeroText.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
};
