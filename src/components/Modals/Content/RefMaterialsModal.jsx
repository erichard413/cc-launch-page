import "../../../styles/modals/RefMaterialsModal.css";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import { useMemo, useRef, useState, useEffect } from "react";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

export default function RefMaterialsModal({ handleClose, isOpen, pdfUrl }) {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState();
  const [file, setFile] = useState();

  useEffect(() => {
    setFile(pdfUrl);
  }, []);

  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
  ).toString();
  const options = useMemo(() => {
    return {
      cMapUrl: "/cmaps/",
      standardFontDataUrl: "/standard_fonts/",
    };
  });

  function onDocumentLoadSuccess({ nextNumPages }) {
    setNumPages(nextNumPages);
  }

  return (
    <div className="RefMaterialsModal modal-body">
      {isOpen && (
        <Document
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
          options={options}
        >
          {Array.from(new Array(numPages), (_el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
          ))}
        </Document>
      )}

      <div className="modal-btns">
        <button
          onClick={() => {
            handleClose();
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
