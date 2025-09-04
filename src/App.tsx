import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import CategorySection from "./sections/CategorySection";
function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <Header />
        <CategorySection />
        <h1>scss</h1>
      </div>
    </>
  );
}

export default App;
