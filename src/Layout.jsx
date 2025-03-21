import "./styles/Layout.css";
import NavBar from "./components/Navbar";

export default function Layout({ children }) {
  return <div className="Layout">{children}</div>;
}
