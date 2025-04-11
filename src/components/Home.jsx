import React, { useState } from "react";
import cardImgs from "../assets/CC-Access-Gift.png";
import "../assets/fonts/BankGothic Bold.ttf";
import noScroll from "../helpers/noScroll";
import "../styles/Home.css";
import Modal from "./Modal";
import CompareGiftIncentiveModal from "./Modals/Content/CompareGiftIncentiveModal";
import SolutionGuideModal from "./Modals/Content/SolutionGuideModal";

export default function Home() {
  const [modalState, setModalState] = useState(false);
  const [contentState, setContentState] = useState(null);
  return (
    <div className="Home">
      <div className="main-content">
        <div className="top-container">
          <h1>GET OUR FREE MOBILE BANKING APP</h1>
          <div className="content-div">
            <div id="cardImgs-div">
              <img id="cardImgs" src={cardImgs} alt="Access card & Gift Card" />
            </div>
            <div id="list-container">
              <ul>
                <li>Check Balance</li>
                <li>View Transaction History</li>
                <li>Add Money To Your Card</li>
                <li>Pay Bills</li>
                <li>Get Balance and Transaction Alerts</li>
              </ul>
            </div>
            <div>{/* empty div */}</div>
          </div>
        </div>
        <div className="bottom-content">
          <div id="reloadable-cards-div">
            <h3>Reloadable Cards</h3>
            <ul>
              <li>Access Card</li>
            </ul>
          </div>
          <div id="single-load-cards-div">
            <h3>Single Load Cards</h3>
            <ul>
              <li>Gift Card</li>
              <li>Incentive Card</li>
            </ul>
            <button
              onClick={e => {
                e.preventDefault();
                setContentState("GI");
                noScroll(true);
                setModalState(true);
              }}
            >
              Compare Gift to Incentive
            </button>
          </div>
          <div id="selecting-a-card-div">
            <h3>Selecting a Card</h3>
            <ul>
              <li>Understand the Customer's Needs</li>
              <li>Select Matching Product</li>
            </ul>
            <button
              onClick={e => {
                e.preventDefault();
                setContentState("SG");
                noScroll(true);
                setModalState(true);
              }}
            >
              Solution Guide
            </button>
          </div>
        </div>
      </div>
      <Modal modalState={modalState} setModalState={setModalState}>
        {contentState == "GI" && (
          <CompareGiftIncentiveModal handleClose={() => setModalState(false)} />
        )}
        {contentState == "SG" && (
          <SolutionGuideModal handleClose={() => setModalState(false)} />
        )}
      </Modal>
    </div>
  );
}
