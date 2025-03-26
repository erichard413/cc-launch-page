import "../../../styles/modals/RefMaterialsModal.css";
import { Document, Page } from "react-pdf";
import { Link } from "react-router-dom";
import React, { useMemo, useState } from "react";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

function RefMaterialsModal({ handleClose, isOpen, pdfUrl }) {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const file = useMemo(() => ({ url: pdfUrl }), [pdfUrl]);

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
    <div className="RefMaterialsModal modal-body">
      {isOpen && (
        <>
          <Document
            file={file}
            options={options}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
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
        <span>{`${pageNumber}/${numPages}`}</span>
        <button onClick={goToNextPage} disabled={nextButtonStatus}>
          Next
        </button>
      </div>
      <div className="modal-btns">
        <Link to={pdfUrl}>
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

export default React.memo(RefMaterialsModal);
