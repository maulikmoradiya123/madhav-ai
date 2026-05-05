import './App.css'

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
// import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <div className="bg-[#0f172a] text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      {/* <WhatsAppButton /> */}
    </div>
  );
}

export default App;
