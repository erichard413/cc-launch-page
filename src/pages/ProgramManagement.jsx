import { useLocation, useNavigate } from "react-router-dom";
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
            </li>
            <li>
              <a
                href="https://convenientcards.com/ccstudio2.html"
                target="_blank"
              >
                <span className="li-text">Card Inventory Orders</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
