import React from 'react';
import { FaDownload } from 'react-icons/fa';

export default function ButtonDownload() {
    return (
        <button className="bg-purple-deep px-4 py-2 text-sm rounded-xl text-white flex items-center space-x-2 hover:bg-purple-400 transition duration-300">
            <span className="text-sm">Download CV</span>
            <FaDownload className="w-4 h-4" />
        </button>
    );
}
