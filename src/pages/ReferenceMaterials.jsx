import { Link } from "react-router-dom";
import "../styles/ReferenceMaterials.css";
import Modal from "../components/Modal";
import { useState } from "react";
import RefMaterialsModal from "../components/Modals/Content/RefMaterialsModal";

export default function ReferenceMaterials() {
  const [modalState, setModalState] = useState(false);
  const [pdfUrl, setPdfUrl] = useState();

  const handleClick = url => {
    setPdfUrl(url);
    setModalState(true);
  };

  return (
    <div className="ReferenceMaterials">
      <div className="main-content">
        <h2>Reference Materials</h2>
        <div className="top-content">
          <div id="left-div">
            <span className="mini-header">Card Ordering</span> <br />
            <ul>
              <li
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
              <li>
                <Link to="/">
                  Order Form Sample File - Recipient Names & Email Addresses
                </Link>
              </li>
              <li>
                <Link to="/">
                  Lightning Virtual Cards - Cardholder Agreement
                </Link>
              </li>
            </ul>
            <span className="mini-header">Card Terms and Conditions</span>{" "}
            <br />
            <ul>
              <li>
                <Link to="/">
                  Cardholder Agreement - Separate Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/">
                  Access Card Addendum for Bank-to-Card Transfers
                </Link>
              </li>
            </ul>
            <span className="mini-header">Compliance</span> <br />
            <ul>
              <li>
                <Link to="/">Prepaid Compliance White Paper</Link>
              </li>
            </ul>
            <span className="mini-header">Reference Guides</span> <br />
            <ul>
              <li>
                <Link to="/">Financial Institution Product Guide</Link>
              </li>

              <li>
                <Link to="/">Commercial Product Guide</Link>
              </li>

              <li>
                <Link to="/">Card Selection Reference Guide</Link>
              </li>

              <li>
                <Link to="/">Convenient Access Card Information Sheet</Link>
              </li>
            </ul>
            <span className="mini-header">Blocked Countries</span> <br />
            <ul>
              <li>
                <Link to="/">Card Transactions Blocked Country List</Link>
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
        <RefMaterialsModal pdfUrl={pdfUrl} isOpen={modalState} />
      </Modal>
    </div>
  );
}
