import "../styles/NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="nav">
      <ul className="nav-list">
        <Link to="/">
          <li className="nav-list-item">Home</li>
        </Link>

        <li className="nav-list-item">
          <Link to="/products/access">Products</Link>
          <ul className="list-item-drop">
            <Link to="/products/access">
              <li>Access Cards</li>
            </Link>
            <Link to="/products/gift">
              <li>Gift Cards</li>
            </Link>
            <Link to="/products/incentive">
              <li>Incentive Cards</li>
            </Link>
          </ul>
        </li>

        <li className="nav-list-item">
          <Link>Program Management</Link>
          <ul className="list-item-drop">
            <li>Marketing Materials</li>
            <Link to="/refmaterial">
              <li>Reference Materials</li>
            </Link>

            <Link
              to="https://convenientcards.com/ccstudio2.html"
              target="_blank"
            >
              <li>Card Inventory Orders</li>
            </Link>
          </ul>
        </li>

        <Link>
          <li className="nav-list-item">
            FAQs
            <ul className="list-item-drop">
              <li>Access Card Transactions</li>
              <li>Gift Card Transactions</li>
              <li>Incentive Card Transactions</li>
            </ul>
          </li>
        </Link>
        <Link>
          <li className="nav-list-item">Training</li>
        </Link>

        <Link to="/contactus" className="last-nav">
          <li className="nav-list-item">Contact Us</li>
        </Link>
      </ul>
    </div>
  );
}
{
  /* <div className="NavBar">
        <Link to="/">
          <div className="NavItem first">Home</div>
        </Link>

        <Link to="/">
          <div className="NavItem">Products</div>
          <div className="expanded-links">
            <ul>
              <li>Access Cards</li>
              <li>Gift Cards</li>
              <li>Incentive Cards</li>
            </ul>
          </div>
        </Link>

         <Link to="/">
          <div className="NavItem">Program Management</div>
        </Link>

       <Link to="/">
          <div className="NavItem">FAQs</div>
         </Link>

         <Link to="/">
           <div className="NavItem">Training</div>
         </Link>

         <Link to="/contactus">
           <div className="NavItem">Contact Us</div>
        </Link>
      </div> */
}
