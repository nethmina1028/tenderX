import "./App.css";

import Tenders from "./pages/Tenders";
import TenderDetails from "./pages/TenderDetails"; 
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tender" element={<Tenders />} />
          <Route path="/tender/:id" element={<TenderDetails/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
