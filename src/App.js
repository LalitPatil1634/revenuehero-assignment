import About from './components/About';
import Contact from './components/Contact';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <About />
      <Contact />
    </div>
  );
}

export default App;
