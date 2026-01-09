import React, { useEffect, useRef, useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min?url';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import ButtonDownload from './ButtonDownload';
import { CertificateIcon } from './SvgIcons';
import PropTypes from "prop-types";


pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

export default function CardCertificates({ nombre, entidad, fecha, url }) {
  const [pdfError, setPdfError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const target = containerRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px 0px' }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full max-w-[350px] min-h-[520px] flex flex-col justify-between mx-auto bg-white rounded-xl shadow-lg border border-gray-200 p-4 items-center hover:shadow-2xl duration-300">
      <div className="flex flex-col items-center w-full flex-1">
        <div className="flex items-center gap-2 mb-2 w-full justify-center">
          <CertificateIcon size={24} className="text-blue-500 shrink-0" />
          <h1 className="text-heading-3 text-gray-800 text-center break-words w-full min-h-[48px] flex items-center justify-center px-2 whitespace-normal" title={nombre}>{nombre}</h1>
        </div>
        <h2 className="text-body text-gray-600 mb-1 text-center w-full min-h-[24px] whitespace-normal" title={entidad}>{entidad}</h2>
        <h3 className="text-body-small text-gray-400 mb-2 text-center w-full min-h-[20px] whitespace-normal" title={fecha}>{fecha}</h3>
        <div
          id="pdf-container"
          ref={containerRef}
          className="flex justify-center items-center shadow-lg rounded-md border border-gray-100 min-h-[250px] w-full bg-gray-50 overflow-hidden"
        >
          {pdfError ? (
            <div className="text-red-500 text-center w-full">No se pudo cargar el PDF.</div>
          ) : isVisible ? (
            <div className="w-full flex justify-center items-center">
              <Document
                file={url}
                className="mx-auto"
                onLoadError={err => setPdfError(err.message)}
                onSourceError={err => setPdfError(err.message)}
                loading={<div className="text-gray-400 text-body-small">Cargando vista previa…</div>}
              >
                <Page pageNumber={1} width={230} className="mx-auto" />
              </Document>
            </div>
          ) : (
            <div className="text-gray-400 text-body-small">Vista previa bajo demanda…</div>
          )}
        </div>
      </div>
      <div className="w-full flex justify-center mt-4">
        <ButtonDownload href={url} Name={"Ver Certificado"} />
      </div>
    </div>
  );
}

CardCertificates.propTypes = {
  nombre: PropTypes.string.isRequired,
  entidad: PropTypes.string.isRequired,
  fecha: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};