import { Link } from "react-router-dom";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <div className="Contact">
      <div className="main-content">
        <h2>Convenient Cards Customer Service</h2>
        <div className="top-content">
          <div id="left-div">
            <p>
              Do you need assistance choosing the right card for your customer?
              Do you have questions about compliance? Do you need assistance
              with CIP screening of a teen? Do you have a business client
              looking for payroll cards or incentive cards? No matter your need,
              we are always here to help.
            </p>
            <br />

            <p>
              <span className="mini-header">By Phone</span> <br />
              <span className="bold-text">1-844-280-4900</span>
            </p>
            <br />

            <p>
              <span className="mini-header">By Email</span> <br />
              <Link to="mailto:ccstudio@convenientcards.com">
                ccstudio@convenientcards.com
              </Link>
            </p>
          </div>
          <div id="right-div">
            <img
              src="https://convenientcards.com/images/stock/business-woman.jpg"
              alt="business woman"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
