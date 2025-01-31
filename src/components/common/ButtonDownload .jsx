import React from 'react';
import { FaDownload } from 'react-icons/fa'; // Importa el ícono de descarga

export default function ButtonDownload() {
    return (
        <button className="bg-purple-deep p-2 text-sm rounded-xl text-white flex items-center space-x-2 hover:bg-purple-400 transition duration-300">
            <span>Download CV</span>
            <FaDownload className="w-4 h-4" /> {/* Ícono de descarga */}
        </button>
    );
}