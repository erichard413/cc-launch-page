import "./App.css";
import NavBar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./pages/Contact";
import { Products } from "./pages/Products";
import ReferenceMaterials from "./pages/ReferenceMaterials";

import { GlobalWorkerOptions } from "pdfjs-dist";
import MarketingMaterials from "./pages/MarketingMaterials";

GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contactus" element={<Contact />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/products/:cardtype" element={<Products />} />
          <Route exact path="/refmaterial" element={<ReferenceMaterials />} />
          <Route exact path="/marketing" element={<MarketingMaterials />} />
        </Routes>
      </div>
      <div id="modal-div"></div>
    </>
  );
}

export default App;
