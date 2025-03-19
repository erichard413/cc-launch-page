import "../styles/NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="NavBar">
      <Link to="/">
        <div className="NavItem first">Home</div>
      </Link>

      <Link to="/">
        <div className="NavItem">Products</div>
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
    </div>
  );
}
