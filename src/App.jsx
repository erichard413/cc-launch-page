import "./App.css";
import NavBar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contactus" element={<Contact />} />
        </Routes>
      </div>
      <div id="modal-div"></div>
    </>
  );
}

export default App;
