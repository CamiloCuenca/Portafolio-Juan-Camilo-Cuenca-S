import React from 'react';
import { FaDownload } from 'react-icons/fa';

export default function ButtonDownload() {
    return (
        <a
            href="/HV Juan Camilo Cuenca Sepúlveda.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-deep px-4 py-2 text-sm rounded-xl text-white flex items-center space-x-2 hover:bg-purple-400 transition duration-300"
        >
            <span className="text-sm">Visualizar CV</span>
            <FaDownload className="w-4 h-4" />
        </a>
    );
}
