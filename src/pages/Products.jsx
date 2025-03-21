import { useSearchParams, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Access from "../components/Products/Access";
import Gift from "../components/Products/Gift";
import Incentive from "../components/Products/Incentive";
import "../styles/Products.css";

const cards = ["access", "incentive", "gift"];

export function Products() {
  const { cardtype } = useParams() || "access";
  const navigate = useNavigate();
  useEffect(() => {
    if (cards.indexOf(cardtype) === -1) navigate("/");
  }, []);

  return (
    <div className="Products">
      <div className="main-content">
        <div className="left-product-links">
          <ul>
            <li
              onClick={() => navigate("/products/access")}
              className={cardtype == "access" ? "active" : ""}
            >
              <span className="li-text">Access Cards</span>
              {cardtype == "access" && <div className="active-box"></div>}
            </li>
            <li
              onClick={() => navigate("/products/gift")}
              className={cardtype == "gift" ? "active" : ""}
            >
              <span className="li-text">Gift Cards</span>
              {cardtype == "gift" && <div className="active-box"></div>}
            </li>
            <li
              onClick={() => navigate(`/products/incentive`)}
              className={cardtype == "incentive" ? "active" : ""}
            >
              <span className="li-text">Incentive Cards</span>
              {cardtype == "incentive" && <div className="active-box"></div>}
            </li>
          </ul>
        </div>
        <div>{cardtype == "access" && <Access />}</div>
        <div>{cardtype == "gift" && <Gift />}</div>
        <div>{cardtype == "incentive" && <Incentive />}</div>
      </div>
    </div>
  );
}
