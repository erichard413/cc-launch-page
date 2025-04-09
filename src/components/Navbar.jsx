import "../styles/NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="nav">
      <ul className="nav-list">
        <li className="nav-list-item">
          {" "}
          <Link to="/">Home</Link>
        </li>

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
          <Link to="/marketing">Program Management</Link>
          <ul className="list-item-drop">
            <Link to="/marketing">
              <li>Marketing Materials</li>
            </Link>

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

        <li className="nav-list-item">
          <Link to="/FAQ/access">FAQs</Link>

          <ul className="list-item-drop">
            <li>
              <Link to="/FAQ/access">Access Card Transactions</Link>
            </li>
            <li>
              <Link to="/FAQ/gift">Gift Card Transactions</Link>
            </li>
            <li>
              <Link to="/FAQ/incentive">Incentive Card Transactions</Link>
            </li>
          </ul>
        </li>

        <li className="nav-list-item">
          <Link to="/training">Training </Link>
        </li>

        <li className="nav-list-item">
          <Link to="/contactus" className="last-nav">
            Contact
          </Link>
        </li>
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
