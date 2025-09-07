import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import CategorySection from "../sections/CategorySection";
import LatestTenders from "../sections/LatestTenders";
function Home() {
  return (
    <div>
         <Navbar />
        <Header />
        <CategorySection />
        <LatestTenders />
        <Footer />
    </div>
  )
}

export default Home