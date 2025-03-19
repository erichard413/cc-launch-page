import React from "react";
import logo from "../assets/logo.png";
import "../styles/Header.css";
import TopRightLinks from "./TopRightLinks";

export default function Header() {
  return (
    <div className="Header">
      <img src={logo} alt="Convenient Cards Logo" />
      <div id="links-container">
        <TopRightLinks />
      </div>
    </div>
  );
}
