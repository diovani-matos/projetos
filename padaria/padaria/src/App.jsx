import FlowerSection from "./components/flowerSection/FlowerSection";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import OpenSection from "./components/openSection/OpenSection";
import Stats from "./components/stats/Stats";

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Stats/>
      <OpenSection/>
      <FlowerSection/>
    </>
  );
}

export default App;
