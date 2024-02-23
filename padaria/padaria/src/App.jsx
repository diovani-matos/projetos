import Cta from "./components/cta/Cta";
import FlowerSection from "./components/flowerSection/FlowerSection";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import OpenSection from "./components/openSection/OpenSection";
import Pastries from "./components/pastries/Pastries";
import Reservation from "./components/reservation/Reservation";
import Stats from "./components/stats/Stats";

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Stats/>
      <OpenSection/>
      <FlowerSection/>
      <Cta/>
      <Pastries/>
      <Reservation/>
      <Footer/>
    </>
  );
}

export default App;
