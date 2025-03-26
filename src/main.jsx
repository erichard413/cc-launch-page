import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import NavBar from "./components/Navbar.jsx";
import "./index.css";
import App from "./App.jsx";
import Layout from "./Layout.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <BrowserRouter>
    <Layout>
      <title>Convenient Cards - CC Studio Card Transactions</title>
      <Header />
      <NavBar />
      <App />
      <Footer />
    </Layout>
  </BrowserRouter>
  // {/* </StrictMode> */}
);
