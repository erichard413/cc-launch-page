import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import accesscard from "../assets/AccessCard.png";
import giftcard from "../assets/GiftCard.png";
import incentivecard from "../assets/IncentiveCard.png";
import questions from "../assets/data/faqs.jsx";

import "../styles/FAQ.css";

const cards = ["access", "incentive", "gift"];

export function FAQ() {
  const { cardtype } = useParams() || "access";
  const navigate = useNavigate();
  useEffect(() => {
    if (cards.indexOf(cardtype) === -1) navigate("/");
  }, []);

  return (
    <div className="FAQ">
      <div className="main-content">
        <div className="left-product-links">
          <ul>
            <li
              className={cardtype == "access" ? "active" : ""}
              onClick={() => navigate("/FAQ/access")}
            >
              <span className="li-text">Access Cards</span>
            </li>
            <li
              className={cardtype == "gift" ? "active" : ""}
              onClick={() => navigate("/FAQ/gift")}
            >
              <span className="li-text">Gift Cards</span>
            </li>
            <li
              className={cardtype == "incentive" ? "active" : ""}
              onClick={() => navigate("/FAQ/incentive")}
            >
              <span className="li-text">Incentive Cards</span>
            </li>
          </ul>
        </div>
        {cardtype == "access" && <AccessFAQ />}
        {cardtype == "gift" && <GiftFAQ />}
        {cardtype == "incentive" && <IncentiveFAQ />}
      </div>
    </div>
  );
}

function AccessFAQ() {
  return (
    <div className="AccessFAQ">
      <div className="content-left">
        <div className="product-img-div">
          <img src={accesscard} alt="access card" />
        </div>
        <h2>Frequently Asked Questions: Convenient Access Visa Prepaid Card</h2>
        <p>
          The Convenient Access Visa® Prepaid Card is a general purpose
          reloadable prepaid card with hundreds of applications.
        </p>
        {questions.access.map(q => (
          <Question question={q} key={q.id} />
        ))}
      </div>
    </div>
  );
}
function GiftFAQ() {
  return (
    <div className="GiftFAQ">
      <div className="content-left">
        <div className="product-img-div">
          <img src={giftcard} alt="gift card" />
        </div>
        <h2>Frequently Asked Questions: Convenient Visa Gift Card</h2>
        <p>
          The Convenient Visa® Gift Card is a single load card that is the
          perfect gift for any occasion.
        </p>
        {questions.gift.map(q => (
          <Question question={q} key={q.id} />
        ))}
      </div>
    </div>
  );
}
function IncentiveFAQ() {
  return (
    <div className="IncentiveFAQ">
      <div className="content-left">
        <div className="product-img-div">
          <img src={incentivecard} alt="incentive card" />
        </div>
        <h2>
          Frequently Asked Questions: Convenient Visa Incentive Prepaid Card
        </h2>
        <p>
          The Convenient Visa® Incentive Card is a single-load reward card
          designed for business customers.
        </p>
        {questions.incentive.map(q => (
          <Question question={q} key={q.id} />
        ))}
      </div>
    </div>
  );
}

function Question({ question }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(s => !s);
  };
  return (
    <div className="question-answer-div">
      <div className="question">
        <p
          className="mini-header"
          style={{ cursor: "pointer" }}
          onClick={handleClick}
        >
          {isOpen ? "[-] " : "[+] "}
          {question.q}
        </p>
        {isOpen && <>{question.a}</>}
      </div>
    </div>
  );
}
