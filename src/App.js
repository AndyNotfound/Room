import Carousel from "./components/carousel/carousel";
import Hero from "./components/hero/hero";
import NavigationBar from "./components/navigationBar/navigationBar";
import About from "./components/about/about"

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div className="main">
        <Carousel />
        <Hero />
      </div>
      <About />
    </div>
  );
}

export default App;
