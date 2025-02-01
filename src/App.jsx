import "./App.css";
import Home from "./Pages/Home";
import Aboutus from "./Pages/Aboutus.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
      </Router>
      {/* <Home /> */}
    </>
  );
}

export default App;
