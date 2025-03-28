import "../../../styles/modals/MarketingContentModal.css";

import PdfModal from "../PdfModal";
import { Link } from "react-router-dom";

export default function MarketingContentModal({
  item,
  handleClose,
  modalState,
}) {
  return (
    <div className="MarketingContentModal modal-body">
      <h2>{item.name}</h2>
      {item.fileType == "pdf" && (
        <PdfModal item={item} isOpen={modalState} handleClose={handleClose} />
      )}
      {(item.fileType == "png" || item.fileType == "jpg") && (
        <ImgModal item={item} isOpen={modalState} handleClose={handleClose} />
      )}
      {(item.fileType == "m4v" || item.fileType == "YouTube video") && (
        <VideoModal item={item} isOpen={modalState} handleClose={handleClose} />
      )}
    </div>
  );
}

function ImgModal({ item, handleClose }) {
  return (
    <div>
      <img src={item.url} alt={`${item.name}`} style={{ maxWidth: "500px" }} />
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

function VideoModal({ item, handleClose }) {
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${item.youtubeId}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div className="modal-btns">
        <Link to={item.url} target="_blank">
          <button>
            {item.fileType == "m4v" ? "Download" : "Watch on YouTube"}
          </button>
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
