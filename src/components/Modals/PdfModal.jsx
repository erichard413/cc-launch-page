import "../../styles/modals/PdfModal.css";
import { Document, Page } from "react-pdf";
import { useMemo } from "react";
import { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

function PdfModal({ item, isOpen, handleClose }) {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState();
  const file = useMemo(() => ({ url: item.url }), [item]);

  useEffect(() => {
    let s = window.innerWidth <= 635 ? 0.45 : 0.75;
    setScale(s);
  });

  const changePage = amount => {
    if (amount < 0 && pageNumber == 1) return;
    if (amount > 0 && pageNumber == numPages) return;
    setPageNumber(num => num + amount);
  };

  const goToPreviousPage = () => changePage(-1);
  const goToNextPage = () => changePage(1);

  const options = useMemo(() => {
    return {
      cMapUrl: "/cmaps/",
      standardFontDataUrl: "/standard_fonts/",
    };
  }, []);

  const onDocumentLoadSuccess = nextNumPages => {
    setNumPages(nextNumPages._pdfInfo.numPages);
  };
  const previousButtonStatus = pageNumber > 1 ? false : true;
  const nextButtonStatus = pageNumber + 1 <= numPages ? false : true;

  return (
    <div className="PdfModal modal-body">
      {isOpen && (
        <>
          <Document
            file={file}
            options={options}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} scale={scale} />
          </Document>
        </>
      )}

      {!isOpen && (
        <div className="closing-pdf-div">
          <p>Closing PDF...</p>
        </div>
      )}

      <div className="modal-btns">
        <button onClick={goToPreviousPage} disabled={previousButtonStatus}>
          Previous
        </button>
        <span>{`${pageNumber || " "}/${numPages || " "}`}</span>
        <button onClick={goToNextPage} disabled={nextButtonStatus}>
          Next
        </button>
      </div>
      <div className="modal-btns">
        <Link to={item.url} target="_blank">
          <button>Download</button>
        </Link>

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

export default React.memo(PdfModal);
