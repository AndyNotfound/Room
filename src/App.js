import Carousel from "./components/carousel/carousel";
import Hero from "./components/hero/hero";
import NavigationBar from "./components/navigationBar/navigationBar";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div className="main">
        <Carousel />
        <Hero />
      </div>
    </div>
  );
}

export default App;
