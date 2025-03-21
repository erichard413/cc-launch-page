import React from "react";
import appstore from "../assets/appstore.png";
import googstore from "../assets/googlestore.png";
import { useState } from "react";
import Modal from "./Modal";
import PrivacyPolicyModal from "./Modals/Content/PrivacyPolicyModal";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
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
          <div>
            <img src={appstore} alt="Apple store logo" />
            <img src={googstore} alt="Google store logo" />
          </div>
        </div>
      </div>
      <div className="footer-nav-div">
        <Link to="/">Home</Link> |<Link to="/">Products</Link> |
        <Link to="/">Program Management</Link> |<Link to="/">FAQ</Link> |
        <Link to="/">Training</Link> |<Link to="/">Contact Us</Link>
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
              setModalState(true);
            }}
          >
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link
            onClick={() => {
              setContentState("TS");
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
