import React from 'react';
import PropTypes from 'prop-types';
import { FaDownload } from 'react-icons/fa';

export default function ButtonDownload({ href, Name = "Descargar", color = "bg-tertiary" }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${color} px-4 py-2 text-sm rounded-xl text-white flex items-center justify-center space-x-2 hover:bg-secondary hover:shadow-lg hover:scale-105 transition-all duration-300`}
        >
            <span className="text-sm">{Name}</span>
            <FaDownload className="w-4 h-4" />
        </a>
    );
}

ButtonDownload.propTypes = {
  href: PropTypes.string.isRequired,
  Name: PropTypes.string,
  color: PropTypes.string,
};
