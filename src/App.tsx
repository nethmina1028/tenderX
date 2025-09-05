import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import CategorySection from "./sections/CategorySection";
import LatestTenders from "./sections/LatestTenders";
function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <Header />
        <CategorySection />
        <LatestTenders />
        <h1>scss</h1>
      </div>
    </>
  );
}

export default App;
