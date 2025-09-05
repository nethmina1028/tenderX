import "./App.css";

import Tenders from "./pages/Tenders";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tenders" element={<Tenders />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
