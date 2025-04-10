import { Link } from "react-router-dom";
import "../styles/MarketingMaterials.css";
import { useState } from "react";
import { marketingMaterials } from "../assets/data/marketing-data";
import MarketingSelection from "../components/MarketingSelection";
import MarketingContentModal from "../components/Modals/Content/MarketingContentModal";
import Modal from "../components/Modal";
import ProgramManagement from "./ProgramManagement";
import noScroll from "../helpers/noScroll";

export default function MarketingMaterials() {
  const [data, setData] = useState({ posters: marketingMaterials.posters });

  return (
    <div className="MarketingMaterials">
      <div className="main-content">
        <ProgramManagement></ProgramManagement>
        <div className="marketing-content-div">
          <h2>Marketing Materials</h2>{" "}
          <div id="filters-div">
            <MarketingSelection data={data} setData={setData} />
          </div>
          {data && (
            <>
              {data.posters && (
                <>
                  <h3>Posters</h3>
                  <div id="grid-container">
                    {data.posters &&
                      data.posters.map(d => (
                        <MarketingItemCard key={d.id} item={d} />
                      ))}
                  </div>
                </>
              )}
              {data.videos && (
                <>
                  <h3>Videos</h3>
                  <div id="grid-container">
                    {data.videos &&
                      data.videos.map(d => (
                        <MarketingItemCard key={d.id} item={d} />
                      ))}
                  </div>
                </>
              )}
              {data.socialMediaContent && (
                <>
                  <h3>Social Media Content</h3>{" "}
                  <div id="grid-container">
                    {data.socialMediaContent &&
                      data.socialMediaContent.map(d => (
                        <MarketingItemCard key={d.id} item={d} />
                      ))}
                  </div>
                </>
              )}
              {data.websiteContent && (
                <>
                  <h3>Website Content</h3>{" "}
                  <div id="grid-container">
                    {data.websiteContent &&
                      data.websiteContent.map(d => (
                        <MarketingItemCard key={d.id} item={d} />
                      ))}
                  </div>
                </>
              )}
              {data.statementStuffers && (
                <>
                  <h3>Statement Stuffers</h3>
                  <div id="grid-container">
                    {data.statementStuffers &&
                      data.statementStuffers.map(d => (
                        <MarketingItemCard key={d.id} item={d} />
                      ))}
                  </div>
                </>
              )}
              {data.brochures && (
                <>
                  <h3>Brochures</h3>
                  <div id="grid-container">
                    {data.brochures &&
                      data.brochures.map(d => (
                        <MarketingItemCard key={d.id} item={d} />
                      ))}
                  </div>
                </>
              )}
              {data.printReadyContent && (
                <>
                  <h3>Print Ready Content</h3>
                  <div id="grid-container">
                    {data.printReadyContent &&
                      data.printReadyContent.map(d => (
                        <MarketingItemCard key={d.id} item={d} />
                      ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function MarketingItemCard({ item }) {
  const [modalState, setModalState] = useState(false);
  const handleClick = () => {
    noScroll(true);
    setModalState(true);
  };
  return (
    <div className="MarketingItemCard">
      <h4>{item.name}</h4>
      <div className="MarketingItemCard-content">
        <div className="MarketingItemCard-img-div">
          <img src={item.previewImg} alt="marketing-item-preview" />
        </div>
        <div className="MarketingItemCard-right-div">
          <p>{item.description}</p>
        </div>
        <p className="content-info">
          <span className="mini-header">Card Program:</span>{" "}
          {item.cardType[0].toUpperCase() + item.cardType.slice(1)}
          <br />
          <span className="mini-header">Content Type:</span>{" "}
          {item.type[0].toUpperCase() + item.type.slice(1)}
          <br />
          <span className="mini-header">File Type:</span> {item.fileType}
        </p>
        <div className="view-btn-div">
          <button onClick={() => handleClick()}>View</button>
        </div>
      </div>

      <Modal modalState={modalState} setModalState={setModalState}>
        <MarketingContentModal item={item} modalState={modalState} />
      </Modal>
    </div>
  );
}
