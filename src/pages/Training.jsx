import "../styles/Training.css";
import Modal from "../components/Modal";
import { useState } from "react";
import PdfModal from "../components/Modals/PdfModal";

export default function Training() {
  const [modalVideoState, setModalVideoState] = useState(false);
  const [modalPdfState, setModalPdfState] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");

  const handleVideoClick = videoId => {
    setSelectedVideo(videoId);
    setModalVideoState(true);
  };

  const handleVideoClose = () => {
    setModalVideoState(false);
  };

  const handlePdfClose = () => {
    setModalPdfState(false);
  };
  return (
    <div className="Training">
      <div className="main-content">
        <h2>Training Materials</h2>
        <div className="top-content">
          <div id="left-div">
            <p>
              <span className="mini-header">Manuals</span> <br />
            </p>{" "}
            <ul>
              <li className="click-li" onClick={() => setModalPdfState(true)}>
                CC Studio Training Manual
              </li>
            </ul>
            <br />
            <span className="mini-header">Videos</span> <br />
            <ul>
              <li
                className="click-li"
                onClick={() =>
                  handleVideoClick("yikgcpz3Jh4?si=2-DuYsxIYiGcaYqq")
                }
              >
                Registering your gift card for online purchases
              </li>
              <li>CC Studio Training Videos</li>
            </ul>
            <p>
              The training videos provide a step by step guide to using CC
              Studio to sell Convenient Cards' reloadable and non-reloadable
              cards. The training is broken into sections to make it easily
              referenceable when necessary.
            </p>
          </div>
          <div id="right-div">
            <img
              src="https://convenientcards.com/images/stock/business-woman.jpg"
              alt="business woman"
            />
          </div>
        </div>
        <ul id="training-list">
          <li
            onClick={() => handleVideoClick("fOVEjjY5w4s?si=XI4bY7I2m_bWHWMP")}
          >
            Section 1 - CC Studio Launch Page
          </li>
          <li
            onClick={() => handleVideoClick("3i-c_IG3dec?si=2yr1ABHreMTzythD")}
          >
            Section 2 - Logging into CC Studio
          </li>
          <li
            onClick={() => handleVideoClick("UHYs1q7v0nc?si=35Wguh0Z8WdWdFUE")}
          >
            Section 3 - Introduction to CC Studio
          </li>
          <li
            onClick={() => handleVideoClick("S5ufO_AtVFU?si=jvdi6Uwyi8rGOAOj")}
          >
            Section 4 - Checking Card Balance
          </li>
          <li
            onClick={() => handleVideoClick("muG-cxm_1C4?si=WnQHg9g1kJOCIx0W")}
          >
            Section 5 - Selling Gift & Incentive Cards (Single Load)
          </li>
          <li
            onClick={() => handleVideoClick("qXmLeYr1inQ?si=uP5UW0zBYUqt22NF")}
          >
            Section 6 - Selling Access Cards
          </li>
          <li
            onClick={() => handleVideoClick("0OwuT-2Caxs?si=neqoNVkC-uksaSTU")}
          >
            Section 7 - Printing Cardholder Agreements & Receipts
          </li>
          <li
            onClick={() => handleVideoClick("BW-LSbRiTlY?si=pt9RewxDEMEpLZeq")}
          >
            Section 8 - Reloading Access Cards
          </li>
          <li
            onClick={() => handleVideoClick("7pyjUdrDMgI?si=FaGXMU4OESplQD1-")}
          >
            Section 9 - Updating CC Studio User Profile
          </li>
          <li
            onClick={() => handleVideoClick("hHdMAqSbXLA?si=i4GBp7p59vnsG8AN")}
          >
            Section 10 - Bank Administrator Functions
          </li>
        </ul>
      </div>
      <Modal modalState={modalVideoState} setModalState={setModalVideoState}>
        {selectedVideo && (
          <VideoModal videoId={selectedVideo} handleClose={handleVideoClose} />
        )}
      </Modal>
      {modalPdfState && (
        <Modal modalState={modalPdfState} setModalState={setModalPdfState}>
          <PdfModal
            item={{
              url: "https://convenientcards.com/CCStudio/training/CC_Studio_Training_Manual.pdf",
            }}
            isOpen={modalPdfState}
            handleClose={handlePdfClose}
          />
        </Modal>
      )}
    </div>
  );
}

function VideoModal({ videoId, handleClose }) {
  return (
    <div className="modal-body training-video-modal">
      <div id="video-wrapper">
        <iframe
          id="training-video"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

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
