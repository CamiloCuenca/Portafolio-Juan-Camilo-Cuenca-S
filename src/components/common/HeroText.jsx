import React from "react";
import PropTypes from "prop-types";

export default function HeroText({ width = "w-full", height = "h-auto", className = "" }) {
  return (
    <div className={`${width} ${height} ${className} flex items-center justify-center`}>
      <div className="text-white font-bold">
        <div className="flex items-center justify-center space-x-6">
          <span className="text-16xl sm:text-7xl md:text-8xl lg:text-9xl">{"{ "}</span>
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed text-justify">
            Hola, soy Juan Camilo Cuenca
            <br />
            Sepúlveda, Ingeniero en Sistemas y
            <br />
            Computación.
          </div>
          <span className="text-16xl sm:text-7xl md:text-8xl lg:text-9xl">{"}"}</span>
        </div>
      </div>
    </div>
  );
}

HeroText.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
}; 