import Hero from "./components/hero/hero";
import NavigationBar from "./components/navigationBar/navigationBar";
import About from "./components/about/about"

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
