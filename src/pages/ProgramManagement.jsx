import { useSearchParams, useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/ProgramManagement.css";

export default function ProgramManagement() {
  const navigate = useNavigate();
  const url = useLocation();

  return (
    <div className="ProgramManagement">
      <div>
        <div className="left-product-links">
          <ul>
            <li
              className={url.pathname == "/marketing" ? "active" : ""}
              onClick={() => navigate("/marketing")}
            >
              <span className="li-text">Marketing Materials</span>
            </li>
            <li
              className={url.pathname == "/refmaterial" ? "active" : ""}
              onClick={() => navigate("/refmaterial")}
            >
              <span className="li-text">Reference Material</span>
              {/* {cardtype == "gift" && <div className="active-box"></div>} */}
            </li>
            <li
              onClick={() =>
                navigate(`https://convenientcards.com/ccstudio2.html`)
              }
            >
              <span className="li-text">Card Inventory Orders</span>
              {/* {cardtype == "incentive" && <div className="active-box"></div>} */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
