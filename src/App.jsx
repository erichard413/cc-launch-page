import "./App.css";
import NavBar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./pages/Contact";
import { Products } from "./pages/Products";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contactus" element={<Contact />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/products/:cardtype" element={<Products />} />
        </Routes>
      </div>
      <div id="modal-div"></div>
    </>
  );
}

export default App;
