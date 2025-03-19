import React from "react";
import { Link } from "react-router-dom";
import "../styles/TopRightLinks.css";

export default function TopRightLinks() {
  return (
    <div className="TopRightLinks">
      <Link to="https://convenientcards.com/ccstudio2.html" target="_blank">
        Card Orders
      </Link>
      |
      <Link
        to="https://coremoney.corecard.com/LoginManagement/Login/nLogin"
        target="_blank"
      >
        CC Studio Login
      </Link>
    </div>
  );
}
