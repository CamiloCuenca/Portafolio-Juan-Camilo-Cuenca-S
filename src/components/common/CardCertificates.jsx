import { useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min?url';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import ButtonDownload from './ButtonDownload';
import { FaCertificate } from 'react-icons/fa';

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

export default function CardCertificates({ nombre, entidad, fecha, url }) {
  const [pdfError, setPdfError] = useState(null);

  return (
    <div className="w-full max-w-[350px] min-h-[500px] flex flex-col justify-between mx-auto bg-white rounded-xl shadow-lg border border-gray-200 p-4 items-center hover:shadow-2xl duration-300">
      <div className="flex flex-col items-center w-full flex-1">
        <div className="flex items-center gap-2 mb-2 w-full justify-center">
          <FaCertificate className="text-blue-500 text-2xl" />
          <h1 className="text-xl font-bold text-gray-800 text-center break-words w-full min-h-[48px] flex items-center justify-center">{nombre}</h1>
        </div>
        <h2 className="text-md text-gray-600 mb-1 text-center w-full min-h-[24px]">{entidad}</h2>
        <h3 className="text-sm text-gray-400 mb-2 text-center w-full min-h-[20px]">{fecha}</h3>
        <div id="pdf-container" className="flex justify-center items-center shadow-lg rounded-md border border-gray-100 min-h-[250px] w-full bg-gray-50">
          {pdfError ? (
            <div className="text-red-500 text-center w-full">No se pudo cargar el PDF.</div>
          ) : (
            <Document
              file={url}
              className="w-full h-full"
              onLoadError={err => setPdfError(err.message)}
              onSourceError={err => setPdfError(err.message)}
            >
              <Page pageNumber={1} width={270} />
            </Document>
          )}
        </div>
      </div>
      <div className="w-full flex justify-center mt-4">
        <ButtonDownload href={url} Name={"Ver Certificado"} />
      </div>
    </div>
  );
}