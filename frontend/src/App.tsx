import "./App.css";

import Tenders from "./pages/Tenders";
import TenderDetails from "./pages/TenderDetails"; 
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tender" element={<Tenders />} />
          <Route path="/tender/:id" element={<TenderDetails/>} />
          <Route path="/register" element={<Registration/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
