import { Link } from "react-router-dom";
import React from "react";
import "../styles/ReferenceMaterials.css";
import Modal from "../components/Modal";
import { useState, useCallback } from "react";
import RefMaterialsModal from "../components/Modals/Content/RefMaterialsModal";

export default function ReferenceMaterials() {
  const [modalState, setModalState] = useState(false);
  const [pdfUrl, setPdfUrl] = useState();

  const handleClick = useCallback(url => {
    setPdfUrl(url);
    setModalState(true);
  }, []);
  const RefModalMemo = React.memo(RefMaterialsModal);

  return (
    <div className="ReferenceMaterials">
      <div className="main-content">
        <h2>Reference Materials</h2>
        <div className="top-content">
          <div id="left-div">
            <span className="mini-header">Card Ordering</span> <br />
            <ul>
              <li
                className="li-pdf"
                onClick={() => {
                  handleClick(
                    "https://convenientcards.com/CCStudio/refmaterial/BatchBulkLoadInstructions.pdf"
                  );
                }}
              >
                Instructions for ordering cards to be batch/bulk loaded
              </li>
            </ul>
            <span className="mini-header">Lightning Virtual Cards</span> <br />
            <ul>
              <Link to="https://convenientcards.com/CCStudio/refmaterial/LightningVirtualCardRecipients.xls">
                <li className="li-excel">
                  [DOWNLOAD] Order Form Sample File - Recipient Names & Email
                  Addresses
                </li>
              </Link>

              <li
                className="li-pdf"
                onClick={() => {
                  handleClick(
                    "https://convenientcards.com/CCStudio/refmaterial/Lightningcha.pdf"
                  );
                }}
              >
                Lightning Virtual Cards - Cardholder Agreement
              </li>
            </ul>
            <span className="mini-header">Card Terms and Conditions</span>{" "}
            <br />
            <ul>
              <li
                className="li-pdf"
                onClick={() => {
                  handleClick(
                    "https://convenientcards.com/CCStudio/refmaterial/FCBprivacy.pdf"
                  );
                }}
              >
                Cardholder Agreement - Separate Privacy Policy
              </li>
              <li
                className="li-pdf"
                onClick={() => {
                  handleClick(
                    "https://convenientcards.com/CCStudio/refmaterial/accessaddendum.pdf"
                  );
                }}
              >
                Access Card Addendum for Bank-to-Card Transfers
              </li>
            </ul>
            <span className="mini-header">Compliance</span> <br />
            <ul>
              <li
                className="li-pdf"
                onClick={() => {
                  handleClick(
                    "https://convenientcards.com/media/ComplianceWhitePaper.pdf"
                  );
                }}
              >
                Prepaid Compliance White Paper
              </li>
            </ul>
            <span className="mini-header">Reference Guides</span> <br />
            <ul>
              <li
                className="li-pdf"
                onClick={() => {
                  handleClick(
                    "https://convenientcards.com/CCStudio/refmaterial/CCFIConsumerProductReferenceGuide.pdf"
                  );
                }}
              >
                Financial Institution Product Guide
              </li>

              <li
                className="li-pdf"
                onClick={() => {
                  handleClick(
                    "https://convenientcards.com/CCStudio/refmaterial/CCFICommercialProductReferenceGuide.pdf"
                  );
                }}
              >
                Commercial Product Guide
              </li>

              <li
                className="li-pdf"
                onClick={() => {
                  handleClick(
                    "https://convenientcards.com/CCStudio/refmaterial/CardSolutionReferenceGuide.pdf"
                  );
                }}
              >
                Card Selection Reference Guide
              </li>

              <li
                className="li-pdf"
                onClick={() => {
                  handleClick(
                    "https://convenientcards.com/CCStudio/refmaterial/CardSolutionReferenceGuide.pdf"
                  );
                }}
              >
                Convenient Access Card Information Sheet
              </li>
            </ul>
            <span className="mini-header">Blocked Countries</span> <br />
            <ul>
              <li
                className="li-pdf"
                onClick={() => {
                  handleClick(
                    "https://convenientcards.com/CCStudio/refmaterial/CCBlockedCountryList.pdf"
                  );
                }}
              >
                Card Transactions Blocked Country List
              </li>
            </ul>
          </div>
          <div id="right-div">
            <img
              src="https://convenientcards.com/images/stock/business-woman.jpg"
              alt="business woman"
            />
          </div>
        </div>
      </div>
      <Modal modalState={modalState} setModalState={setModalState}>
        <RefModalMemo pdfUrl={pdfUrl} isOpen={modalState} />
      </Modal>
    </div>
  );
}
