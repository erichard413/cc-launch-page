import React, { useState } from "react";
import { Link } from "react-router-dom";
import appstore from "../assets/appstore.png";
import googstore from "../assets/googlestore.png";
import noScroll from "../helpers/noScroll";
import "../styles/Footer.css";
import Modal from "./Modal.jsx";
import PrivacyPolicyModal from "./Modals/Content/PrivacyPolicyModal";
import TosModal from "./Modals/Content/TosModal";

export default function Footer() {
  const [modalState, setModalState] = useState(false);
  const [contentState, setContentState] = useState(null);
  return (
    <div className="Footer">
      <div className="footer-content-div">
        <div className="download-div">
          <div>
            <p>Download our app</p>
            <p>to check balances on the go</p>
          </div>
          <div id="footer-stores">
            <Link
              to="https://apps.apple.com/us/app/convenientcards-mobile-banking/id1208131454"
              target="_blank"
            >
              <img src={appstore} alt="Apple store logo" />
            </Link>
            <Link
              to="https://play.google.com/store/apps/details?id=com.corecard.convenientselfservice&pli=1"
              target="_blank"
            >
              <img src={googstore} alt="Google store logo" />
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-nav-div">
        <Link to="/">Home</Link> |<Link to="/products/access">Products</Link> |
        <Link to="/marketing">Program Management</Link> |
        <Link to="/faq/access">FAQ</Link> |<Link to="/training">Training</Link>{" "}
        |<Link to="/contactus">Contact Us</Link>
      </div>
      <div className="issuer-statement-div">
        <p>
          Convenient Visa Prepaid Cards are issued by First Century Bank, N.A.,
          member FDIC, pursuant to a license from Visa U.S.A. Inc. Cards issued
          to U.S. residents only.
        </p>
        <p>© 2025 Convenient Cards, Inc. All rights reserved.</p>

        <p>
          <Link
            onClick={() => {
              setContentState("PP");
              noScroll(true);
              setModalState(true);
            }}
          >
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link
            onClick={() => {
              setContentState("TS");
              noScroll(true);
              setModalState(true);
            }}
          >
            Terms of Use
          </Link>
        </p>
      </div>
      <Modal modalState={modalState} setModalState={setModalState}>
        {contentState == "PP" && (
          <PrivacyPolicyModal handleClose={() => setModalState(false)} />
        )}
        {contentState == "TS" && (
          <TosModal handleClose={() => setModalState(false)} />
        )}
      </Modal>
    </div>
  );
}
